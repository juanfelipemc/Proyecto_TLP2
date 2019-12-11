import React ,{Component} from 'react';
import '../Styles/contacto.css'
import 'bootstrap/dist/css/bootstrap.css';


class Contacto extends Component
{
    render()
    {
        return(
            <div>
                 <h1 class="encabezado"><span><strong>Contactanos</strong></span> </h1>
                 <div class="card">
                    <div class="contacto-formulario">
                       
                        <form className="small" action="">
                            <p>
                                <label><strong>Nombre Completo</strong></label>
                                <input type="text" name="Nombre"/>
                            </p>
                            <p>
                                <label><strong>Correo electronico</strong></label>
                                <input type="email" name="correo"/>
                            </p>  
                            <p>
                                <label><strong>Telefono</strong></label>
                                <input type="tel" name="telefono"/>
                            </p> 
                            <p>
                                <label><strong>Asunto</strong></label>
                                <input type="text" name="asunto"/>
                            </p> 
                            <p class="block">
                                <label><strong>Mensaje</strong></label>
                                <textarea name="mensaje" id=""  rows="3"></textarea>
                            </p>
                                <p class="block">
                                <button>Enviar</button>
                            </p>
                        </form>
                    </div>

                    <div className="contacto-info small">
                        <h5 ><strong>Mas información</strong></h5>
                        <p></p>
                        <ul>
                            <li>  Calle 49 # 87b-17 Medellin</li>
                            <li> <i class="fas fa-phone"></i>3187849962</li>
                            <li> <i class="fas fa-envelope-open-text"></i> BLACKTECHNOMARKET@gmail.com</li>
                        </ul>
                        <p>
                            <strong>www.BLACKTECHNOMARKET.com</strong>
                        </p>
                     </div>


                 </div>
                
            </div>
        );
    }

}

export default Contacto;