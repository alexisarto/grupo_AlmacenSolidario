import React, {Component} from 'react';
import Category from './Category';

class CategoriesInDB extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categorias: []
		}
	}

	apiCall(url, consecuencia) {
		fetch(url)
			.then( response => response.json())
			.then( data => consecuencia(data))
			.catch( error => console.log(error))
	}

	componentDidMount() {
		this.apiCall('http://localhost:3001/api/products/categorias', this.mostrarCategorias)
	}

	mostrarCategorias = (data) => {
		this.setState (
			{
				categorias: data.data
			}
		)
	}

	render() {
		return (                   
			<div className="col-lg-6 mb-4">						
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
					</div>
					<div className="card-body">
						<div className="row">
							{
							this.state.categorias.map((categoria, i) => 
							<Category key={i} {...categoria} />
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
	
}
export default CategoriesInDB;