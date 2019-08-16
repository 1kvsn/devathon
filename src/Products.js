import React from 'react';
import {connect} from 'react-redux';

import editProduct from './EditProduct';


class Products extends React.Component {

	handleEdit = () => {
	
	}

	render() {
		return (
			<>
				<section className='wrapper'>
					<div className="items-container">
						{
							this.props.items.map((item, index) => {
								return (
									<div className='item' key={index} onClick={this.handleEdit}>
										<div>
											<img src={"../images/" + item.images[0]} alt="product"/>
										</div>
										<div className="item-details">
											<p className="item-title">{item.productTitle}</p>
											<p className="item-price">INR {item.price}</p>
										</div>

									</div>
								)
							})
						}
					</div>
				</section>
			</>
		)
	}
}

function mapStateToProps(state) {
	return {
		items: state.products,
	}
}

export default connect(mapStateToProps)(Products);