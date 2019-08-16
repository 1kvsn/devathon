import React from 'react';
import {connect} from 'react-redux';

class EditProduct extends React.Component {
	constructor(props) {
		super(props);

		const {id, productTitle, price, offerPrice, shippingCost, inventory, description, size, color} = this.props.items[this.props.id];

		this.state = {
			id,
			productTitle,
			price,
			offerPrice,
			shippingCost,
			inventory,
			description,
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch({type: "UPDATE_PRODUCT", payload: this.state})
		this.props.handleEditor();
	}

	render() {
		const {productTitle, price, offerPrice, shippingCost, inventory, description, size, color} = this.state;

		return (
			<section className="edit-container">
				<div>
					<img src="" alt="" />

				</div>
				<form onSubmit={this.handleSubmit}>
					<label>Product Title</label>
					<input type="text" name="productTitle" placeholder="Enter product title..." value={productTitle}  onChange={this.handleChange}/>

					<label>Price</label>
					<input type="number" name="price" placeholder="Enter product price..." value={price} onChange={this.handleChange}/>

					<label>Offer Price</label>
					<input type="number" name="offerPrice" placeholder="Enter offer price" value={offerPrice} onChange={this.handleChange}/>

					<label>Shipping Cost</label>
					<input type="number" name="shippingCost" placeholder="Enter shipping cost" value={shippingCost} onChange={this.handleChange}/>

					<label>Inventory</label>
					<input type="" name="inventory" value={inventory} onChange={this.handleChange} />

					<label>Description</label>
					<input type="text" name="description" placeholder="Enter Description for Product" value={description} onChange={this.handleChange}/>
					<button>=></button>
				</form>
			</section>
		)
	}
}

function mapStateToProps(state) {
	return {
		items: state.products,
	}
}
export default connect(mapStateToProps)(EditProduct);