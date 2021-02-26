import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Productos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: "",
            marca: "",
            presentacion: "",
            unidad: "",
            precio: "",
            categoria: "",
            sub_categoria: ""
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch( error => console.log(error))
    }
    
    componentDidMount() {
        this.apiCall('http://localhost:3001/api/products', this.mostrarProductos)
    }
    
    mostrarProductos = (data) => {
        var items = data.data.map(item => ({
            id: item.id,
            descripcion: item.descripcion,
            descripcion_completa: item.descripcion_completa,
            marca: item.marca.marca,
            presentacion: item.presentacion,
            precio: item.precio,
            imagen: item.imagen,
            categoria: item.categoria.categoria,
            sub_categoria: item.sub_categoria.sub_categoria,
            unidad: item.unidad.medida
        }))
             this.setState (
                 {
                     productos: items

                     }
             )
      
    }


    render() {
        if (!this.state.productos) {
            return "Loading...";
        }
        return (
            this.state.productos.map((unProducto, i) =>
            <tr key={i}>
                <td>{unProducto.descripcion}</td>
                <td>{unProducto.marca}</td>
                <td>{unProducto.presentacion}</td>
                <td>{unProducto.unidad}</td>
                <td>{unProducto.precio}</td>
                <td>{unProducto.categoria}</td>
                <td>{unProducto.sub_categoria}</td>
            </tr>
            )
        )
    }
}

export default Productos; 