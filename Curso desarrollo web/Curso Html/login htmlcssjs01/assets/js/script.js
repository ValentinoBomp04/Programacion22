document.getElementById("btn-login").addEventListener("click", iniciarSesion);
document.getElementById("btn-singin").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

//Declaracion de Variables

let login_singin__container = document.querySelector(".login-singin--container");
let formulario_login = document.querySelector(".login-form");
let formulario_register = document.querySelector(".register-form");
let backgroud_login_box = document.querySelector(".backgroud-login-box");
let backgroud_register_box = document.querySelector(".backgroud-register-box");

function anchoPagina(){
    if(window.innerWidth > 850){
        backgroud_login_box.style.display = "block";
        backgroud_register_box.style.display = "block";
    }else{
        backgroud_register_box.style.display = "block";
        backgroud_register_box.style.opacity = "1";
        backgroud_login_box.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        login_singin__container.style.left = "0px"
    }
}

anchoPagina();

function iniciarSesion(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        login_singin__container.style.left = "10px";
        formulario_login.style.display = "block";
        backgroud_register_box.style.opacity = "1";
        backgroud_login_box.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        login_singin__container.style.left = "0px";
        formulario_login.style.display = "block";
        backgroud_register_box.style.display = "block";
        backgroud_login_box.style.display = "none";
    }
}

function register(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        login_singin__container.style.left = "410px";
        formulario_login.style.display = "none";
        backgroud_register_box.style.opacity = "0";
        backgroud_login_box.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        login_singin__container.style.left = "0px";
        formulario_login.style.display = "none";
        backgroud_register_box.style.display = "none";
        backgroud_login_box.style.display = "block";
        backgroud_login_box.style.opacity = "1";
    }
}

