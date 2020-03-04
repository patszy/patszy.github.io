const changeTheme = () => {
    let themeLink = document.getElementById('theme');
    let themeIcon = document.querySelector('#changeTheme i');

    if(themeLink.getAttribute('href') == "./css/light.css"){
        themeLink.href = "./css/dark.css";
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeLink.href = "./css/light.css";
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

const changeLang = () => {
    let langIcon = document.querySelector('#changeLang img');
    let tabPl = document.getElementsByClassName('lang-pl');
    let tabEn = document.getElementsByClassName('lang-en');
    let htmlLang = document.querySelector('html');

    if(htmlLang.lang == "en"){
        htmlLang.lang = "pl";
        langIcon.src = "img/en.png";

        for(let i=0; i<tabPl.length; i++){
            tabPl[i].style.display = "inherit";
            tabEn[i].style.display = "none";
        }
    } else {
        htmlLang.lang = "en";
        langIcon.src = "img/pl.png";

        for(let i=0; i<tabEn.length; i++){
            tabPl[i].style.display = "none";
            tabEn[i].style.display = "inherit";
        }
    }
}

window.onload = () => {

    if(navigator.language == "pl-PL") changeLang();

    document.getElementById('changeTheme').onclick = () => {
        changeTheme();
    }

    document.getElementById('changeLang').onclick = () => {
        changeLang();
    }

    let date = new Date();

    if(date.getHours() >= 19 || date.getHours() <= 7) {
        let themeLink = document.getElementById('theme');
        let themeIcon = document.querySelector('#changeTheme i');

        themeLink.href = "./css/dark.css";
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        let themeLink = document.getElementById('theme');
        let themeIcon = document.querySelector('#changeTheme i');

        themeLink.href = "./css/light.css";
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    };
};