import React from "react";
import fifa from '../Images/IPHONE.jpg'
import '../Styles/detalle.css'
import tarjetas from '../Images/tarjetas.png'

class DetalleProducto extends React.Component{
    render(){
        return(
            <div className='container'>
                <div class="row">
                    <div class="col-md-4">
                        <img
                        className="d-flex w-100" 
                        src={fifa} />
                    </div>
                    <div class="col-md-4">
                        <h2 className="">
                            IPHONE XR
                       </h2>
                            <p className='small text-justify'> 
                            • Incluye costo de envío.
                            </p>
                            <br></br>
                        <p className='small text-justify'> 
                            • Disponible para envío inmediato.
                        </p>

                    </div>
                    <div class="col-md-4">
                        <div className="pagar">
                            <h5>Precio</h5>
                            <h2>$2.900.000</h2>  
                            <p>De 2 A 3 dias hábiles para el envío</p>
                            <button type="button" class="btn btn-success btn-lg ">Añadir al carrito</button>  
                            <div className='tarjeta'>
                                <img className="d-flex w-100"   src={tarjetas} />     
                                </div>                     
                           
                        </div>
                    </div>
                </div>  
            </div>
            
        )
    }

}
export default DetalleProducto