import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Chart2.css';
import BarGroup2 from './BarGroup2';

class Chart2 extends Component {
    constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

    apiCall(url, consecuencia) {
		fetch(url)
			.then( response => response.json())
			.then( data => consecuencia(data))
			.catch( error => console.log(error))
	}

	componentDidMount() {
		this.apiCall('http://localhost:3001/api/sales/productosMasVendidos', this.mostrarVentasPorProducto)
	}

	mostrarVentasPorProducto = (data) => {
		this.setState (
			{
				data: data.data
			}
		)
	}

    render() {
        let barHeight = 30;
        let barGroups = this.state.data.map((d, i) => <g key={i} transform={`translate(0, ${i * barHeight})`}>
                                                <BarGroup2 d={d} barHeight={barHeight} />
                                              </g>)

      return (
      <div>
        <svg width="800" height="250" >
            <g className="container">
                <text className="title" x="10" y="30">Productos más vendidos</text>
                <g className="chart" transform="translate(186,60)">
                {barGroups}
                </g>
            </g>
        </svg>
        <Link to="/" className="nav-link" href="/">
        <i className="fas fa-home"></i>
        <span> Home</span></Link>
      </div>
      )
    }
  }

  export default Chart2;