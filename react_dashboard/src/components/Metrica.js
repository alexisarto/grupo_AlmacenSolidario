import React from 'react';
import PropTypes from 'prop-types';

function Metrica(props) {
    return (
        <div className="col-md-4 mb-4"> 
			<div className= {"card border-left-" + props.color + " shadow h-100 py-2"}>
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className={"text-xs font-weight-bold text-" + props.color + " text-uppercase mb-1"}>{props.titulo}</div>
							<div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
						</div>
						<div className="col-auto">
							<i className={props.icono}></i>
						</div>
					</div>
				</div>
			</div>
	    </div>
    )
}
Metrica.propTypes = {
    titulo: PropTypes.string.isRequired,
    cifra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: PropTypes.oneOf(['primary', 'success', 'warning']).isRequired,
    icono: PropTypes.string.isRequired
}

Metrica.defaultProps = {
      titulo: 'titulo',
      cifra: 100,
      color: 'green',
      icono: 'fas fa-user-check fa-2x text-gray-300'
}

export default Metrica;