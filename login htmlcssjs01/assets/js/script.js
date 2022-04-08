document.getElementById("btn-singin").addEventListener("click", register);
//Declaracion de Variables

let login_singin__container = document.querySelector(".login-singin--container");
let formulario_login = document.querySelector(".login-form");
let formulario_register = document.querySelector(".register-form");
let backgroud_login_box = document.querySelector(".backgroud-login-box");
let backgroud_register_box = document.querySelector(".backgroud-register-box");

function register(){
    formulario_register.style.display = "block";
    login_singin__container.style.left = "410px";
    formulario_login.style.display = "none";
    backgroud_register_box.style.opacity = "0";
    backgroud_login_box.style.opacity = "1";
}
