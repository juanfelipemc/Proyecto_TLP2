import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../Styles/barra.css'
import logo from '../Images/logo.PNG'
import carrito from '../Images/carrito.png'
import 'bootstrap/dist/css/bootstrap.css';

class NavbarComponent extends Component{
    render(){
        return(
   
            <div className='barra'>
            
                <nav class="navbar transparent fixed-top navbar-expand-lg navbar-light bg-light ">
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <Link class="navbar-brand" to="/Home">
                    <img src={logo} width="100" height="50" alt=""/>
                </Link>

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    
                        <Link class="nav-link" to="/Home">Inicio <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Productos1">Productos</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Contactenos">Contáctenos</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Administrador">Administrador</Link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    <Link className="btn btn-outline-primary my-2 my-sm-0" to="/Productos">Buscar</Link>
                    
                </form>
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/Registrarse">Registrarse</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Registrarse">Iniciar Sesión</Link>
                    </li>

                    </ul>
                </div>
                <div class="pos-f-t">
                    
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                    <h4 class="text-white">Collapsed content</h4>
                    <span class="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
               
                <Link class=""  to="/Carrito">
                    <img src={carrito} width="40" height="40"  alt=""/>
                </Link>
                </div>

                </nav> 
                 
          
            </div>


        )
    }
}

export default NavbarComponent;