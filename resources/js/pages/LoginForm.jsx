import React from 'react';
import '../../css/login.css';
import logo from '../../../public/images/logo_1000px.png';

export default function LoginForm() {
    return (
        <div className="background-wrapper">
            <div className="container">
                <div className="left-panel">
                    <div className='letras'>
                        <h1 className='title'>Biblioteca Arrupe</h1>
                        <h2 className='subtitle'>El poder de gestionar el conocimiento</h2>
                    </div>
                    <div className="login-box">
                        <h2>LOGIN</h2>
                        <form>
                            <label>Email</label>
                            <input type="text" placeholder="Ingresa tu correo" />
                            <label>Contraseña</label>
                            <input type="password" placeholder="Ingresa tu contraseña" />
                            <button type="submit">Entrar</button>
                                <a href="#"  className='forgot-password'>¿Olvidaste tu contraseña?</a>
                        </form>
                    </div>
                </div>
                <div className="right-panel">
                    <div className='logo'>
                        <img src={logo} alt="Logo Colegio"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
