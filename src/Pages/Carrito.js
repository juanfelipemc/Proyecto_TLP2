import React from "react";
import '../Styles/card.css'

class Carrito extends React.Component{
    render(){
        return(
            <div className="container">
                <h1 className='title'>Carrito</h1>
                <table class="table table-bordered text-center">
    <thead>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img id="imagenes" src="https://falabella.scene7.com/is/image/FalabellaCO/3831863_1?$producto308$&wid=800&hei=800&qlt=70"></img></td>
            <td>$418.900</td>
            <td> 1 </td>
            <td>$418.900</td>
        </tr>
        <tr>
        <td><img id="imagenes" src="https://falabella.scene7.com/is/image/FalabellaCO/880978920_1?$producto308$&wid=800&hei=800&qlt=70"></img></td>
            <td>$299.994</td>
            <td> 1 </td>
            <td>$299.994</td>
        </tr>
     
        <tr>
            <td>-</td>
            <td>-</td>
            <td><strong>Total</strong></td>
            <td>$718.894</td>
        </tr>
       
    </tbody>
</table>
<button type="button" class="btn btn-success btn-lg btn-block">Finalizar Compra</button>        
            </div>
            
        )
    }

}
export default Carrito