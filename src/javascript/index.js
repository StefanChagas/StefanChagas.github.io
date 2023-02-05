function myselfsidebar() {
    document.getElementById("mySidebar").style.width = "180px";
    document.getElementById("containerheader").style.width = "70%";
    document.getElementById("bodylandingConent").style.width = "70%";

}

function myselfsidebarclose() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("containerheader").style.width = "100%";
    document.getElementById("bodylandingConent").style.width = "100%";

}

function bodyonLoad() {
    document.getElementById("bodylandingsecondaryConent").style.display = "none";
}

function destroyer() {
    document.getElementById("allcontentindex").style.display = "block";
    document.getElementById("divdestroyerprimary").style.display = "none";
    document.getElementById("divdestroyersecondary").style.display = "none";
    sessionStorage.setItem("destroyreload","off");
}

function landingpageSecondary() {
    if (document.getElementById("bodylandingsecondaryConent").style.display == "none"){
        document.getElementById("bodylandingsecondaryConent").style.display = "block";
        document.getElementById("bodylandingConent").style.display = "none";
        document.getElementById("landingbuttonanotherPage").classList.remove('bi-chevron-compact-right');
        document.getElementById("landingbuttonanotherPage").classList.add('bi-chevron-compact-left');

        document.getElementById("landingbuttonbookanotherPage").classList.remove('bi-book');
        document.getElementById("landingbuttonbookanotherPage").classList.add('bi-book-half');
    }else{
        document.getElementById("bodylandingsecondaryConent").style.display = "none";
        document.getElementById("bodylandingConent").style.display = "block";
        document.getElementById("landingbuttonanotherPage").classList.remove('bi-chevron-compact-left');
        document.getElementById("landingbuttonanotherPage").classList.add('bi-chevron-compact-right');

        document.getElementById("landingbuttonbookanotherPage").classList.remove('bi-book-half');
        document.getElementById("landingbuttonbookanotherPage").classList.add('bi-book');
    }
    
}

// function modifyTheme() {
//     if (sessionStorage.getItem("theme") == "dark"){
//         document.getElementById("landingbuttonTheme").classList.remove('bi-brightness-alt-high-fill');
//         document.getElementById("landingbuttonTheme").classList.add('bi-brightness-alt-high');
//         sessionStorage.setItem("theme", "light");
//         document.body.style.backgroundColor = 'white';
//         $("body").removeClass("darkScroll");
//         $("body").addClass("lightScroll");

//         // index.html - button other page
//         if ($("#landingbuttonsPage").length) { 
//             document.getElementById("landingbuttonsPage").classList.remove('darkThemeclean');
//         }
        
//         // resumecv.html - content
//         if ($("#resumeContent").length) { 
//             document.getElementById("resumeContent").classList.remove('darkThemeclean');
//         }

//     }else{
//         document.getElementById("landingbuttonTheme").classList.remove('bi-brightness-alt-high');
//         document.getElementById("landingbuttonTheme").classList.add('bi-brightness-alt-high-fill');
//         sessionStorage.setItem("theme", "dark");
//         document.body.style.backgroundColor = '#212529';
//         $("body").removeClass("lightScroll");
//         $("body").addClass("darkScroll");

//         // index.html - button other page
//         if ($("#landingbuttonsPage").length) { 
//             document.getElementById("landingbuttonsPage").classList.add('darkThemeclean');
//         }
        
//         // resumecv.html - content
//         if ($("#resumeContent").length) { 
//             document.getElementById("resumeContent").classList.add('darkThemeclean');          
//         }

//     }
// }

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
        document.getElementById("led11").classList.remove('ledonimageLeft');
        document.getElementById("led11").classList.add('ledonimageLeftlight');
        document.getElementById("led12").classList.remove('ledonimageRight');
        document.getElementById("led12").classList.add('ledonimageRightlight');
        document.getElementById("led21").classList.remove('ledonimageLeft');
        document.getElementById("led21").classList.add('ledonimageLeftlight');
        document.getElementById("led22").classList.remove('ledonimageRight');
        document.getElementById("led22").classList.add('ledonimageRightlight');
        document.getElementById("led31").classList.remove('ledonimageLeft');
        document.getElementById("led31").classList.add('ledonimageLeftlight');
        document.getElementById("led32").classList.remove('ledonimageRight');
        document.getElementById("led32").classList.add('ledonimageRightlight');
        document.getElementById("led41").classList.remove('ledonimageLeft');
        document.getElementById("led41").classList.add('ledonimageLeftlight');
        document.getElementById("led42").classList.remove('ledonimageRight');
        document.getElementById("led42").classList.add('ledonimageRightlight');
        document.getElementById("led51").classList.remove('ledonimageLeft');
        document.getElementById("led51").classList.add('ledonimageLeftlight');
        document.getElementById("led52").classList.remove('ledonimageRight');
        document.getElementById("led52").classList.add('ledonimageRightlight');
    }
    
    // resumecv.html - content
    if ($("#resumeContent").length) { 
        document.getElementById("resumeContent").classList.remove('darkThemeclean');
    }

    // aboutme.html - content
    if ($("#aboutmeConent").length) { 
        document.getElementById("aboutmeConent").classList.remove('darkThemeclean');
    }

    // myprojects.html - content
    if ($("#projectsConent").length) { 
        document.getElementById("projectsConent").classList.remove('darkThemeclean');
    }

    // contact.html - content
    if ($("#contactConent").length) { 
        document.getElementById("contactConent").classList.remove('darkThemeclean');
        document.getElementById("inputemailContact").classList.remove('inputemaildark');  
        document.getElementById("inputnameContact").classList.remove('inputemaildark');  
        document.getElementById("inputtitleContact").classList.remove('inputemaildark');  
        document.getElementById("inputcontentContact").classList.remove('inputemaildark');  
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
        document.getElementById("led11").classList.add('ledonimageLeft');
        document.getElementById("led11").classList.remove('ledonimageLeftlight');
        document.getElementById("led12").classList.add('ledonimageRight');
        document.getElementById("led12").classList.remove('ledonimageRightlight');
        document.getElementById("led21").classList.add('ledonimageLeft');
        document.getElementById("led21").classList.remove('ledonimageLeftlight');
        document.getElementById("led22").classList.add('ledonimageRight');
        document.getElementById("led22").classList.remove('ledonimageRightlight');
        document.getElementById("led31").classList.add('ledonimageLeft');
        document.getElementById("led31").classList.remove('ledonimageLeftlight');
        document.getElementById("led32").classList.add('ledonimageRight');
        document.getElementById("led32").classList.remove('ledonimageRightlight');
        document.getElementById("led41").classList.add('ledonimageLeft');
        document.getElementById("led41").classList.remove('ledonimageLeftlight');
        document.getElementById("led42").classList.add('ledonimageRight');
        document.getElementById("led42").classList.remove('ledonimageRightlight');
        document.getElementById("led51").classList.add('ledonimageLeft');
        document.getElementById("led51").classList.remove('ledonimageLeftlight');
        document.getElementById("led52").classList.add('ledonimageRight');
        document.getElementById("led52").classList.remove('ledonimageRightlight');
    }

    // resumecv.html - content
    if ($("#resumeContent").length) { 
        document.getElementById("resumeContent").classList.add('darkThemeclean');          
    }

    // aboutme.html - content
    if ($("#aboutmeConent").length) { 
        document.getElementById("aboutmeConent").classList.add('darkThemeclean');          
    }

    // myprojects.html - content
    if ($("#projectsConent").length) { 
        document.getElementById("projectsConent").classList.add('darkThemeclean');          
    }

    // contact.html - content
    if ($("#contactConent").length) { 
        document.getElementById("contactConent").classList.add('darkThemeclean');  
        document.getElementById("inputemailContact").classList.add('inputemaildark');  
        document.getElementById("inputnameContact").classList.add('inputemaildark');  
        document.getElementById("inputtitleContact").classList.add('inputemaildark');  
        document.getElementById("inputcontentContact").classList.add('inputemaildark');  
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

function copyText() {
    let textoCopiado = "stefanaugusto.dev@gmail.com";
    textoCopiado.select();
    document.execCommand("copy");
    alert("O texto é: " + textoCopiado.value);
}