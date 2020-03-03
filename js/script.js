window.onload = () => {
    document.getElementById('changeTheme').onclick = () => {
        if(document.getElementById('theme').getAttribute('theme') == "light"){
            document.getElementById('theme').setAttribute('theme', 'dark');
            document.getElementById('theme').href = "./css/dark.css";
            document.querySelectorAll('.options i')[1].classList.remove('fa-moon');
            document.querySelectorAll('.options i')[1].classList.add('fa-sun');
        } else {
            document.getElementById('theme').setAttribute('theme', 'light');
            document.getElementById('theme').href = "./css/light.css";
            document.querySelectorAll('.options i')[1].classList.remove('fa-sun');
            document.querySelectorAll('.options i')[1].classList.add('fa-moon');
        }
    }
};