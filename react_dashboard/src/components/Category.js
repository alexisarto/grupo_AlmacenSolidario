import React from 'react';
import PropTypes from 'prop-types';

function Category(props) {
    return (                   
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                   {props.categoria} - ({props.cantidad})
                </div>
            </div>
        </div>
    )
}

export default Category;