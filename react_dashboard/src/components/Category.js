import React, {Component} from 'react';
import PropTypes from 'prop-types';

// function Category(props) {
class Category extends Component {
    constructor(props) {
        super(props);
        this.state= {
            bgcolor: "#36b9cc"
        }
    }

    cambiarBackgroundColor = () => {
        this.setState (
			{
				bgcolor: "grey"
			}
		)
    }

    render() {

        return (                   
            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body" style={{backgroundColor: this.state.bgcolor}} onClick={this.cambiarBackgroundColor}>
                       {this.props.categoria} - ({this.props.cantidad})
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;