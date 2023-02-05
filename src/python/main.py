from typing import Optional
from fastapi import Depends, FastAPI, HTTPException, status, Form, Security
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm, SecurityScopes
# import requests
from reportlab.pdfgen import canvas
# import json
from typing import Union, List
from pydantic import BaseModel, ValidationError
from datetime import datetime, timedelta, timezone
from passlib.context import CryptContext
from jose import JWTError, jwt
from secrets import token_hex
from base64 import b64encode
import mysql.connector
# from mysql.connector import (connection)

SECRET_KEY = "b4ba722bc24d72f910d37357912420d221e9c53b2444c9cc5a756fa27e893a98"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 15   

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Union[str, None] = None

class TokenDataHash(BaseModel):
    hashed_password: Union[str, None] = None

class User(BaseModel):
    username: str
    full_name: Union[str, None] = None
    disabled: Union[bool, None] = None

class UserDB(User):
    hashed_password:str

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()

def verify_pass(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_hash_pass(password):                
    return pwd_context.hash(password) 

def get_user_pass(db,username: str):   
    if username in db:
        user_dict = db[username]
        return UserDB(**user_dict)

def authentic_user(fake_db, username: str, password: str):   
    user = get_user_pass(fake_db, username)
    if not user:
        return False
    if not verify_pass(password, user.hashed_password):
        return False
    return user

def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(security_scopes: SecurityScopes, token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Credenciais inválidas, por favor, faça login novamente.",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try: 
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        hash_for_token: str = payload.get("hash_for_token")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
        token_data_hash = TokenDataHash(hashed_password=hash_for_token)
    except JWTError:
        raise credentials_exception

    fake_users_db ={
            token_data.username:{
                "username": token_data.username,
                "hashed_password": token_data_hash.hashed_password, 
                "disabled": False
            }
        }
    
    user = get_user_pass(fake_users_db, username=token_data.username)   

    if user is None:
        raise credentials_exception
    return user

async def get_active_user(current_user: User = Security(get_current_user, scopes=["me"])):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="inativo")
    return current_user

@app.post("/token/{user_type}", response_model=Token)
async def login_with_token(user_type, form_data: OAuth2PasswordRequestForm = Depends()):    
    db_connection = mysql.connector.connect(host='localhost', user='root', password='', database='allproducts')
    cursor = db_connection.cursor()
    if (user_type == "user_admin"):
        cursor.execute("SELECT password FROM users_adm WHERE nome = '%s'" %(form_data.username))
        sql = cursor.fetchall()
        sqlpass = sql[0]
        sqlpass = sqlpass[0]
        verificacao = verify_pass(form_data.password, sqlpass)
        if verificacao == True:
            fake_users_db ={
                form_data.username:{
                    "username": form_data.username,
                    "hashed_password": sqlpass, 
                    "disabled": False
                }
            }
            var_user_type = "useradmin"
    elif (user_type == "user_basic"):
        cursor.execute("SELECT password FROM users_basic WHERE nome = '%s'" %(form_data.username))
        sqlbasic = cursor.fetchall()
        sqlbasic = sqlbasic[0]
        sqlbasic = sqlbasic[0]
        verificacao = verify_pass(form_data.password, sqlbasic)
        if verificacao == True:
            fake_users_db ={
                form_data.username:{
                    "username": form_data.username,
                    "hashed_password": sqlbasic, 
                    "disabled": False
                }
            }
            var_user_type = "userbasic"
    else:
        return False

    user = authentic_user(fake_users_db, form_data.username, form_data.password)     
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Usuário ou senha incorretos.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username, "hash_for_token": fake_users_db[form_data.username]['hashed_password'], "scopes": form_data.scopes}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer", "user_type": var_user_type} 

# 

# ENDPOINT
# @app.post("/delete/material/{material}")
# async def delete_material(material, current_user: User = Depends(get_active_user)):
#     db_connection = mysql.connector.connect(host='localhost', user='root', password='', database='allproducts')
#     cursor = db_connection.cursor()
#     material = material.replace("_", " ")
#     material = material.replace("-", "ç")
#     material = material.lower()
#     sql = "DELETE FROM valor_materiais WHERE material = '%s'" %(material)
#     cursor.execute(sql)
#     db_connection.commit()
#     db_connection.close()
#     return "Ok!"

# ENDPOINT gerar pdf
# @app.post("/list/pdf/products/{state}")
# async def list_to_pdf(state, current_user: User = Depends(get_active_user)):
#     db_connection = mysql.connector.connect(host='localhost', user='root', password='', database='allproducts')
#     cursor = db_connection.cursor()
#     cursor.execute("SELECT * FROM products")
#     sql = cursor.fetchall()

#     try:
#         nome_pdf = "listagem_produtos_Usine"
#         pdf = canvas.Canvas('{}.pdf'.format(nome_pdf))
#         x = 760
#         # date = datetime.date.today()
#         pdf.setTitle(nome_pdf)
#         pdf.setFont("Helvetica", 14)
#         pdf.drawString(10,820, 'Lista de produtos - Usine Metalúrgica')
#         pdf.setFont("Helvetica", 7)
#         # pdf.drawString(15,805, '%s' %(date)) 
#         pdf.drawString(10,770, 'Código | Código Usine | Nome | Material | Quantidade de Material | CNC | Plaina | Fresa | Furadeira | Serra Fita | Solda | Zincagem | Tratamento Térmico | Frete | Imposto | Valor Final | Estoque')
#         for i in range(len(sql)): 
#             if i > 0:
#                 contador = i + 1
#             else:
#                 contador = 1 
#             codigo = sql[i][0]
#             nome = sql[i][1]
#             material = sql[i][2]
#             quantidade_material = sql[i][3]
#             imposto = sql[i][4]
#             codigo_usine = sql[i][5]
#             cnc = sql[i][6]
#             plaina = sql[i][7]
#             fresa = sql[i][8]
#             furadeira = sql[i][9]
#             serra_fita = sql[i][10]
#             solda = sql[i][11]
#             zincagem = sql[i][12]
#             tratamento_termico = sql[i][13] 
#             estoque = sql[i][14]
#             frete = sql[i][15]
#             valor_final = 123
#             x -= 20
#             pdf.setFont("Helvetica", 8)
#             pdf.drawString(10,x, '{} | {} | {} | {} | {} | {} | {} | {} | {} | {} | {} | {} | {} | {} | {} | {} | {} | {}'.format(contador, codigo, codigo_usine, nome, material, quantidade_material, cnc, plaina, fresa, furadeira, serra_fita, solda, zincagem, tratamento_termico, frete, imposto, valor_final, estoque))
#             y = 36
#             if i == y:
#                 pdf.showPage()
#                 x = 820
#                 y = y+5
#                 y = y*2
#         pdf.save()
#         print('pdf criado com sucesso!')
#         return ("pdf criado com sucesso!")
#     except:
#         print('Erro ao gerar o pdf.')
#         return ("Erro ao gerar o pdf.")
