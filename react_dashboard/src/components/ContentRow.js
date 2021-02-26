import React, { Component } from 'react';
import Metrica from './Metrica';

class ContentRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usuariosTotal: 0,
			productosTotal: 0
		}
	}

	apiCall(url, consecuencia){
		fetch(url)
			.then(response => response.json())
			.then(data => consecuencia(data))
			.catch(error => console.log(error))
	}

	componentDidMount() {
		this.apiCall('http://localhost:3001/api/users/totalUsuarios', this.mostrarUsuariosTotal)
		this.apiCall('http://localhost:3001/api/products/totalProductos', this.mostrarProductosTotal)
		this.apiCall('http://localhost:3001/api/products', this.mostrarImporteTotalProductos)
	}

	mostrarUsuariosTotal = (data) => {
		this.setState (
			{
				usuariosTotal: data.data
			}
		)
	}

	mostrarProductosTotal = (data) => {
		this.setState (
			{
				productosTotal: data.data
			}
		)
	}

	mostrarImporteTotalProductos = (data) => {
		var total = 0;
		data.data.map(importe => total += importe.precio);
		total = total.toFixed(2);
		this.setState (
			{
				importeTotalProductos: total
			}
		)
	}

	render() {
		const items = [{
			titulo: "Products in Data Base", 
			cifra: this.state.productosTotal, 
			color: "primary", 
			icono: "fas fa-clipboard-list fa-2x text-gray-300"
		}, 
		{
			titulo: "Amount in products", 
			cifra: "$" + this.state.importeTotalProductos, 
			color: "success", 
			icono: "fas fa-dollar-sign fa-2x text-gray-300"
		}, 
		{
			titulo: "Users quantity", 
			cifra: this.state.usuariosTotal, 
			color: "warning", 
			icono: "fas fa-user-check fa-2x text-gray-300"
		}];

		return (
			<div className="row">
				{ 
					items.map((unaInfo, i) => 
						<Metrica key={i} {...unaInfo}
								/>
					)
				}
			</div>
		)
	}
}

export default ContentRow;