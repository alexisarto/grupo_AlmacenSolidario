import React from 'react';
import Productos from './Productos';

function TodosLosProductos() {
    return (
		<div className="card shadow mb-4">
			<div className="card-body">
				<div className="table-responsive">
					<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
						<thead>
							<tr>
								<th>Descripcion</th>
								<th>Marca</th>
								<th>Presentacion</th>
								<th>Unidad</th>
								<th>Precio</th>
								<th>Categoria</th>
                                <th>Sub_categoria</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
                            <th>Descripcion</th>
								<th>Marca</th>
								<th>Presentacion</th>
								<th>Unidad</th>
								<th>Precio</th>
								<th>Categoria</th>
                                <th>Sub_categoria</th>
							</tr>
						</tfoot>
						<tbody>
                        <Productos />
						</tbody>
					</table>
				</div>
			</div>
		</div>
    )
}

export default TodosLosProductos;