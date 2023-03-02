function myselfsidebar() {
    if (screen.width >= 992) {
        document.getElementById("mySidebar").style.width = "180px";
        document.getElementById("containerheader").style.width = "70%";
        document.getElementById("bodylandingContent").style.width = "70%";
        document.getElementById("mySidebarImage").style.display = "block";
    }
}

function myselfsidebarclose() {
    if (screen.width >= 992) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("containerheader").style.width = "100%";
        document.getElementById("bodylandingContent").style.width = "100%";
        document.getElementById("mySidebarImage").style.display = "none";
    }
}

function bodyonLoad() {
    document.getElementById("bodylandingsecondaryContent").style.display = "none";
    document.getElementById("mySidebarImage").style.display = "none";
    if (localStorage.getItem("theme") != "dark" && localStorage.getItem("theme") != "light") {
        darkMode();
    }
}

$('#buttonstartDestroyer').keydown(function(e) {
    if(e.keyCode === 27) $('#buttonstartDestroyer').click();
});

function destroyer() {
    if (sessionStorage.getItem("destroyreload") != "off") {
        document.getElementById("allcontentindex").style.display = "block";
        document.getElementById("divdestroyer").style.display = "none";
        sessionStorage.setItem("destroyreload", "off");
        themetest = localStorage.getItem("theme");
        if (themetest == "dark"){
            darkMode();
        }
        else if (themetest == "light"){
            lightMode();
        }
        document.getElementById("buttonthemeFocus").focus();
        document.getElementById("mySidebarImage").style.display = "none";
    }
}

function landingpageSecondary() {
    if (document.getElementById("bodylandingsecondaryContent").style.display == "none"){
        document.getElementById("bodylandingsecondaryContent").style.display = "block";
        document.getElementById("bodylandingContent").style.display = "none";
        document.getElementById("landingbuttonanotherPage").classList.remove('bi-chevron-compact-right');
        document.getElementById("landingbuttonanotherPage").classList.add('bi-chevron-compact-left');

        document.getElementById("landingbuttonbookanotherPage").classList.remove('bi-book');
        document.getElementById("landingbuttonbookanotherPage").classList.add('bi-book-half');
    }else{
        document.getElementById("bodylandingsecondaryContent").style.display = "none";
        document.getElementById("bodylandingContent").style.display = "block";
        document.getElementById("landingbuttonanotherPage").classList.remove('bi-chevron-compact-left');
        document.getElementById("landingbuttonanotherPage").classList.add('bi-chevron-compact-right');

        document.getElementById("landingbuttonbookanotherPage").classList.remove('bi-book-half');
        document.getElementById("landingbuttonbookanotherPage").classList.add('bi-book');
    }
    
}

function lightMode() {
    document.getElementById("landingbuttonTheme").classList.remove('bi-brightness-alt-high-fill');
    document.getElementById("landingbuttonTheme").classList.add('bi-brightness-alt-high');
    document.body.style.backgroundColor = 'white';
    $("body").removeClass("darkScroll");
    $("body").addClass("lightScroll");
    localStorage.setItem("theme", "light");

    // index.html - button other page
    if ($("#landingbuttonsPage").length) { 
        document.getElementById("landingbuttonsPage").classList.remove('darkThemeclean');

        // color LED
        // document.getElementById("led11").classList.remove('ledonimageLeft');
        // document.getElementById("led11").classList.add('ledonimageLeftlight');
        // document.getElementById("led12").classList.remove('ledonimageRight');
        // document.getElementById("led12").classList.add('ledonimageRightlight');
        // document.getElementById("led21").classList.remove('ledonimageLeft');
        // document.getElementById("led21").classList.add('ledonimageLeftlight');
        // document.getElementById("led22").classList.remove('ledonimageRight');
        // document.getElementById("led22").classList.add('ledonimageRightlight');
        // document.getElementById("led31").classList.remove('ledonimageLeft');
        // document.getElementById("led31").classList.add('ledonimageLeftlight');
        // document.getElementById("led32").classList.remove('ledonimageRight');
        // document.getElementById("led32").classList.add('ledonimageRightlight');
        // document.getElementById("led41").classList.remove('ledonimageLeft');
        // document.getElementById("led41").classList.add('ledonimageLeftlight');
        // document.getElementById("led42").classList.remove('ledonimageRight');
        // document.getElementById("led42").classList.add('ledonimageRightlight');
        // document.getElementById("led51").classList.remove('ledonimageLeft');
        // document.getElementById("led51").classList.add('ledonimageLeftlight');
        // document.getElementById("led52").classList.remove('ledonimageRight');
        // document.getElementById("led52").classList.add('ledonimageRightlight');
    }

    // line border 100% width
    if ($("#linebordercompletewidth").length) { 
        document.getElementById("linebordercompletewidth").classList.remove('bordercompletewidth');
        document.getElementById("linebordercompletewidth").classList.add('bordercompletewidthLight');
    }
    
    // resumecv.html - content
    if ($("#resumeContent").length) { 
        document.getElementById("resumeContent").classList.remove('darkThemeclean');
    }

    // aboutme.html - content
    if ($("#aboutmeContent").length) { 
        document.getElementById("aboutmeContent").classList.remove('darkThemeclean');
    }

    // myprojects.html - content
    if ($("#projectsContent").length) { 
        document.getElementById("projectsContent").classList.remove('darkThemeclean');
    }

    // contact.html - content
    if ($("#contactContent").length) { 
        document.getElementById("contactContent").classList.remove('darkThemeclean');
        document.getElementById("inputemailContact").classList.remove('inputemaildark');  
        document.getElementById("inputnameContact").classList.remove('inputemaildark');  
        document.getElementById("inputtitleContact").classList.remove('inputemaildark');  
        document.getElementById("inputcontentContact").classList.remove('inputemaildark');  
    }

    // pythonpage.html - content
    if ($("#pythonContent").length) { 
        document.getElementById("pythonContent").classList.remove('darkThemeclean');
    }

    // phppage.html - content
    if ($("#phpContent").length) { 
        document.getElementById("phpContent").classList.remove('darkThemeclean');
    }

    // algorithmpage.html - content
    if ($("#algorithmContent").length) { 
        document.getElementById("algorithmContent").classList.remove('darkThemeclean');
    }

    // javascriptpage.html - content
    if ($("#javascriptContent").length) { 
        document.getElementById("javascriptContent").classList.remove('darkThemeclean');
    }

}

function darkMode() {
    document.getElementById("landingbuttonTheme").classList.remove('bi-brightness-alt-high');
    document.getElementById("landingbuttonTheme").classList.add('bi-brightness-alt-high-fill');
    document.body.style.backgroundColor = '#212529';
    $("body").removeClass("lightScroll");
    $("body").addClass("darkScroll");
    localStorage.setItem("theme", "dark");

    // index.html - button other page
    if ($("#landingbuttonsPage").length) { 
        document.getElementById("landingbuttonsPage").classList.add('darkThemeclean');

        // color LED
        // document.getElementById("led11").classList.add('ledonimageLeft');
        // document.getElementById("led11").classList.remove('ledonimageLeftlight');
        // document.getElementById("led12").classList.add('ledonimageRight');
        // document.getElementById("led12").classList.remove('ledonimageRightlight');
        // document.getElementById("led21").classList.add('ledonimageLeft');
        // document.getElementById("led21").classList.remove('ledonimageLeftlight');
        // document.getElementById("led22").classList.add('ledonimageRight');
        // document.getElementById("led22").classList.remove('ledonimageRightlight');
        // document.getElementById("led31").classList.add('ledonimageLeft');
        // document.getElementById("led31").classList.remove('ledonimageLeftlight');
        // document.getElementById("led32").classList.add('ledonimageRight');
        // document.getElementById("led32").classList.remove('ledonimageRightlight');
        // document.getElementById("led41").classList.add('ledonimageLeft');
        // document.getElementById("led41").classList.remove('ledonimageLeftlight');
        // document.getElementById("led42").classList.add('ledonimageRight');
        // document.getElementById("led42").classList.remove('ledonimageRightlight');
        // document.getElementById("led51").classList.add('ledonimageLeft');
        // document.getElementById("led51").classList.remove('ledonimageLeftlight');
        // document.getElementById("led52").classList.add('ledonimageRight');
        // document.getElementById("led52").classList.remove('ledonimageRightlight');
    }

    // line border 100% width
    if ($("#linebordercompletewidth").length) { 
        document.getElementById("linebordercompletewidth").classList.add('bordercompletewidth');
        document.getElementById("linebordercompletewidth").classList.remove('bordercompletewidthLight');
    }

    // resumecv.html - content
    if ($("#resumeContent").length) { 
        document.getElementById("resumeContent").classList.add('darkThemeclean');          
    }

    // aboutme.html - content
    if ($("#aboutmeContent").length) { 
        document.getElementById("aboutmeContent").classList.add('darkThemeclean');          
    }

    // myprojects.html - content
    if ($("#projectsContent").length) { 
        document.getElementById("projectsContent").classList.add('darkThemeclean');          
    }

    // contact.html - content
    if ($("#contactContent").length) { 
        document.getElementById("contactContent").classList.add('darkThemeclean');  
        document.getElementById("inputemailContact").classList.add('inputemaildark');  
        document.getElementById("inputnameContact").classList.add('inputemaildark');  
        document.getElementById("inputtitleContact").classList.add('inputemaildark');  
        document.getElementById("inputcontentContact").classList.add('inputemaildark');  
    }

    // pythonpage.html - content
    if ($("#pythonContent").length) { 
        document.getElementById("pythonContent").classList.add('darkThemeclean');
    }

    // phppage.html - content
    if ($("#phpContent").length) { 
        document.getElementById("phpContent").classList.add('darkThemeclean');
    }

    // algorithmpage.html - content
    if ($("#algorithmContent").length) { 
        document.getElementById("algorithmContent").classList.add('darkThemeclean');
    }

    // javascriptpage.html - content
    if ($("#javascriptContent").length) { 
        document.getElementById("javascriptContent").classList.add('darkThemeclean');
    }
}

themetest = localStorage.getItem("theme");
if (themetest == "dark"){
    darkMode();
}
else if (themetest == "light"){
    lightMode();
}
var cont = 0;
function typeTheme(){
    var verifyvar = localStorage.getItem("theme");
    if(cont == 0 && verifyvar != "dark"){
        darkMode();
        cont += 1;
    }
    else{
        lightMode();
        cont = 0;
    }
}

$("#buttonCopyemail").click(function(){
    // var copyText = "stefanaugusto.dev@gmail.com";
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
})

$("#buttonCompoundcalc").click(function(){
    var initialvalue = document.getElementById("getresultCompoundcalcInitialvalue").value;
    var monthvalue = document.getElementById("getresultCompoundcalcMonthvalue").value;
    var totalyears = document.getElementById("getresultCompoundcalcTime").value;
    var interestrate = document.getElementById("getresultCompoundcalcInterestrate").value;
    // TRATAR DADOS, usuário pode acabar usando números com vírgula e etc
    // & no exibir, tanto no site como no PDF, replace . por ,
    if (monthvalue > 0 && initialvalue > 0){

        result = parseFloat(initialvalue * ((1 + (parseFloat(interestrate)/12/100)) ** (parseFloat(totalyears)*12))) + (parseFloat(monthvalue) * ((((1 + (parseFloat(interestrate)/12/100))) ** (parseFloat(totalyears)*12) - 1) / (parseFloat(interestrate)/12/100)));

        totalinv = parseFloat(initialvalue) + parseFloat(monthvalue * (totalyears * 12));
        resultfess = parseFloat(result) - parseFloat(totalinv);

        document.getElementById("resultshowCompoundcalcTotalfinal").innerHTML = "R$ " + result.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalfees").innerHTML = "R$ " + resultfess.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalinv").innerHTML = "R$ " + totalinv;   

        initialvalue = "";
        monthvalue = "";
        totalyears = "";
        interestrate = "";
        result = "";
        resultfess = "";
        totalinv = "";
    }else if (monthvalue > 0 && (!initialvalue)){
        result = (parseFloat(monthvalue) * ((1 + (parseFloat(interestrate)/12/100)) ** (parseFloat(totalyears)*12) - 1)) / (parseFloat(interestrate)/12/100);

        totalinv = parseFloat(monthvalue * (totalyears * 12));
        resultfess = parseFloat(result) - parseFloat(totalinv);

        document.getElementById("resultshowCompoundcalcTotalfinal").innerHTML = "R$ " + result.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalfees").innerHTML = "R$ " + resultfess.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalinv").innerHTML = "R$ " + totalinv;   

        monthvalue = "";
        totalyears = "";
        interestrate = "";
        result = "";
        resultfess = "";
        totalinv = "";
    }else{
        interestrate = interestrate/100;
        result = (initialvalue * ((1 + interestrate)**totalyears));
        resultfess = result - initialvalue;

        if (initialvalue <= 0){
            initialvalue = "0,00"
        }

        document.getElementById("resultshowCompoundcalcTotalfinal").innerHTML = "R$ " + result.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalfees").innerHTML = "R$ " + resultfess.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalinv").innerHTML = "R$ " + initialvalue;   
        
        initialvalue = "";
        monthvalue = "";
        totalyears = "";
        interestrate = "";
        result = "";
        resultfess = "";
    }
})

$("#buttonDownloadcompoundcalc").click(function(){
    var initialvalue = document.getElementById("getresultCompoundcalcInitialvalue").value;
    var monthvalue = document.getElementById("getresultCompoundcalcMonthvalue").value;
    var totalyears = document.getElementById("getresultCompoundcalcTime").value;
    var interestrate = document.getElementById("getresultCompoundcalcInterestrate").value;

    if (monthvalue > 0 && initialvalue > 0){
        result = parseFloat(initialvalue * ((1 + (parseFloat(interestrate)/12/100)) ** (parseFloat(totalyears)*12))) + (parseFloat(monthvalue) * ((((1 + (parseFloat(interestrate)/12/100))) ** (parseFloat(totalyears)*12) - 1) / (parseFloat(interestrate)/12/100)));
        totalinv = parseFloat(initialvalue) + parseFloat(monthvalue * (totalyears * 12));
        resultfess = parseFloat(result) - parseFloat(totalinv);
        document.getElementById("resultshowCompoundcalcTotalfinal").innerHTML = "R$ " + result.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalfees").innerHTML = "R$ " + resultfess.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalinv").innerHTML = "R$ " + totalinv;   
    }else if (monthvalue > 0 && (!initialvalue)){
        result = (parseFloat(monthvalue) * ((1 + (parseFloat(interestrate)/12/100)) ** (parseFloat(totalyears)*12) - 1)) / (parseFloat(interestrate)/12/100);
        totalinv = parseFloat(monthvalue * (totalyears * 12));
        resultfess = parseFloat(result) - parseFloat(totalinv);
        document.getElementById("resultshowCompoundcalcTotalfinal").innerHTML = "R$ " + result.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalfees").innerHTML = "R$ " + resultfess.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalinv").innerHTML = "R$ " + totalinv;   
    }else{
        interestratesmall = interestrate/100;
        result = (initialvalue * ((1 + interestratesmall)**totalyears));
        resultfess = result - initialvalue;
        totalinv = initialvalue
        document.getElementById("resultshowCompoundcalcTotalfinal").innerHTML = "R$ " + result.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalfees").innerHTML = "R$ " + resultfess.toFixed(2).replace(".", ",");
        document.getElementById("resultshowCompoundcalcTotalinv").innerHTML = "R$ " + totalinv;   
    }
    
    if (initialvalue <= 0){
        initialvalue = "0,00"
    }else if (initialvalue % 1 == 0){
        initialvalue = initialvalue + ",00" 
    }
    if (monthvalue <= 0){
        monthvalue = "0,00"
    }else if (monthvalue % 1 == 0){
        monthvalue = monthvalue + ",00" 
    }
    if (totalyears <= 0){
        totalyears = "0";
    }
    if (interestrate <= 0){
        interestrate = "0,00"
    }else if (interestrate % 1 == 0){
        interestrate = interestrate + ",00"    
    }

    var doc = new jsPDF()

    doc.setFontSize(25)
    doc.setTextColor("#02adad");
    doc.text("Cálculo de Juros Compostos", 25, 25)
    doc.addImage("./src/images/projects.png", "PNG", 163, 12, 35, 35)
    doc.setFontSize(17)
    doc.setTextColor("black");
    doc.text("Aporte inicial: ", 25, 45)
    doc.text("R$ " + initialvalue, 105, 45)
    doc.text("Aporte mensal: ", 25, 55)
    doc.text("R$ " + monthvalue, 105, 55)
    doc.text("Período: ", 25, 65)
    doc.text(totalyears + " anos", 105, 65)
    doc.text("Taxa de juros: ", 25, 75)
    doc.text(interestrate + " % ao ano", 105, 75)
    
    doc.text("Valor total final: ", 25, 100)
    doc.text("R$ " + result.toFixed(2).replace(".", ","), 105, 100)
    doc.text("Valor total investido: ", 25, 110)
    doc.text("R$ " + totalinv.replace(".", ","), 105, 110)
    doc.text("Valor total em juros: ", 25, 120)
    doc.text("R$ " + resultfess.toFixed(2).replace(".", ","), 105, 120)

    const date = new Date();
    const currentYear = date.getFullYear();

    doc.text("Copyright 2022-" + currentYear + " ©, Stefan Chagas.", 52, 280)

    doc.save('mycompoundinterest.pdf')
})




