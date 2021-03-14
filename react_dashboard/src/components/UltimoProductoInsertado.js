import React, { Component} from 'react';

class UltimoProductoInsertado extends Component {
    constructor() {
        super();
        this.state = {
            descripcion: "",
            marca: "",
            presentacion: "",
            unidad: "",
            imagen: ""
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch( error => console.log(error))
    }

    componentDidMount() {
        this.apiCall('http://localhost:3001/api/products/ultimoProductoInsertado', this.mostrarUltimoProductoInsertado)
    }

    mostrarUltimoProductoInsertado = (data) => {
        this.setState (
            {
                descripcion: data.data.descripcion,
                marca: data.data.marca,
                presentacion: data.data.presentacion,
                unidad: data.data.unidad,
                imagen: data.data.imagen_url
            }
        )
    }
    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Last product in Database</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={this.state.imagen} alt="image dummy"/>
                        </div>
                        <p>{this.state.descripcion} {this.state.marca}
                         {this.state.presentacion}{this.state.unidad}</p>
                        <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default UltimoProductoInsertado;