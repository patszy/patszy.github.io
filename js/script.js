const changeTheme = (theme) => {
    let themeLink = document.getElementById('theme');
    let themeIcon = document.querySelector('#changeTheme i');

    if(theme == "dark") {
        themeLink.href = "./css/dark.css";
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else if(theme == "light") {
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
        langIcon.src = "img/icons/en.png";

        for(let i=0; i<tabPl.length; i++){
            tabPl[i].style.display = "inherit";
            tabEn[i].style.display = "none";
        }
    } else {
        htmlLang.lang = "en";
        langIcon.src = "img/icons/pl.png";

        for(let i=0; i<tabEn.length; i++){
            tabPl[i].style.display = "none";
            tabEn[i].style.display = "inherit";
        }
    }
}

const changeMenu = () => {
    let menu = document.getElementsByClassName('menu')[0];

    menu.addEventListener('click', (event) => {
        menu.querySelectorAll('i').forEach((item) => {
            item.parentElement.parentElement.classList.remove('active');
        });

        event.target.parentElement.parentElement.classList.add('active');
    });
}

const checkHour = () => {
    let date = new Date();

    if(date.getHours() > 18 || date.getHours() < 7) changeTheme("dark");
    else changeTheme("light");
}

const handleClick = () => {
    document.querySelector('.hamburger').classList.toggle('hamburger--active');
    document.querySelector('.menu').classList.toggle('menu--active');
}

window.onload = () => {

    changeMenu();
    checkHour();
    if(navigator.language == "pl-PL") changeLang();
    document.querySelector('.hamburger').addEventListener('click', handleClick);

    document.getElementById('changeTheme').onclick = () => {
        if(document.getElementById('theme').getAttribute('href') == "./css/light.css") changeTheme("dark");
        else changeTheme("light");
    };

    document.getElementById('changeLang').onclick = () => {
        changeLang();
    };
};