import React from 'react';
import '../styles/style.css'

const Login = () => {
    
    return(
        <main>
        <div class="global-container">
            {/* <!-- Cajas de Fondo Login/Singin --> */}
            <div class="background-box">
                <div class="backgroud-login-box">
                    {/* <!-- Login --> */}
                    <h3>¿Ya tienes cuenta?</h3>
                    <p>Inicie sesion para entrar a la pagina</p>
                    <button id="btn-login">Iniciar Sesion</button>
                </div>
                <div class="backgroud-register-box">
                    {/* <!-- Singin --> */}
                    <h3>¿Aun no tienes cuenta?</h3>
                    <p>Registrate para entrar a la pagina</p>
                    <button id="btn-singin">Registrarse</button>
                </div>
            </div>
            {/* <!-- Formulario Login/Singin --> */}
            <div class="login-singin--container">
                <form action="" class="login-form">
                    {/* <!-- Login --> */}
                    <h2>Iniciar sesion</h2>
                    <input type="text" placeholder="Correo Electronico"/>
                    <input type="password" placeholder="Contraseña"/>
                    <button type="submit">Ingresar</button>
                </form>
                <form action="" class="register-form">
                    {/* <!-- Singin --> */}
                    <h2>Registro</h2>
                    <input type="text" placeholder="Nombre Completo"/>
                    <input type="text" placeholder="Nombre de Usuario"/>
                    <input type="text" placeholder="Correo Electronico"/>
                    <input type="password" placeholder="Contraseña"/>
                    <button type="submit">Registrarse</button>
                </form>
            </div>

        </div>
        </main>
    )
    

}
// Funcionalidad

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
export default Login