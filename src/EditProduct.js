import React from 'react';
import {connect} from 'react-redux';


class editProduct extends React.Component {

	render() {
		return (
			<section>
				<div>
					<img src="" alt="" />

				</div>
				<div>
					<label>Product Title</label>
					<input type="text" placeholder="Enter product title..." />

					<label>Price</label>
					<input type="number" placeholder="Enter product price..." />

					<label>Offer Price</label>
					<input type="number" placeholder="Enter offer price" />

					<label>Shipping Cost</label>
					<input type="number" placeholder="Enter shipping cost" />

					<label>Inventory</label>
					<input type=""/>

					<label>Description</label>
					<input type="text" placeholder="Enter Description for Product" />
				</div>
			</section>
		)
	}
}

export default editProduct;