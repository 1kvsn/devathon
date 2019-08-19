import React from 'react';
import {connect} from 'react-redux';

import ProductTile from './ProductTile';

class Products extends React.Component {
	state = {
		productInEditModeId: null
	}

	//handles the editor opening and closing
	handleEditor = (productId = null) => {
		this.setState({ productInEditModeId: productId })
	}

	render() {
		return (
			<>
				<section className='wrapper'>
					<div className="items-container">
						{
							this.props.items.map((item, index) => {
								return (
									<ProductTile
										item={item}
										key={index}
										editId={this.state.productInEditModeId}
										updatedEditId={this.handleEditor}
									/>
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