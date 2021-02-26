import React from 'react';
import CategoriesInDB from './CategoriesInDB';
import UltimoProductoInsertado from './UltimoProductoInsertado';


function Content() {
    return (
		<div className="row">
            <UltimoProductoInsertado />
            <CategoriesInDB />
		</div>
    )
}
export default Content;