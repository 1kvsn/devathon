import React from 'react';
import { connect } from 'react-redux';

import Variation from './Variation';
import ImgDrop from './Dropzone';

class EditProduct extends React.Component {
	constructor(props) {
		super(props);

		const { id, productTitle, images, price, offerPrice, shippingCost, inventory, description } = this.props.items[this.props.id];

		this.state = {
			id,
			productTitle,
			images,
			price,
			offerPrice,
			shippingCost,
			inventory,
			description,
			options: [],
			optionName: "",
			optionValues: [],
			variationCount: 0,
		}
	}

	//Variation Methods
	handleKeyUp = (e) => {
		if (e.keyCode === 13) {
			// this.setState({ optionCount: this.state.optionCount + 1 })
			this.setState({
				optionValues: [
					...this.state.optionValues,
					e.target.value
				]
			})
		}
	}

	handleInputName = (e) => {
		this.setState({
			optionName:  e.target.value,
		})
	}

	handleCreateInputElement = () => {
		console.log('called createElement....');
		this.setState(prevState => ({
			variationCount: this.state.variationCount + 1,
			optionValues: [...prevState.optionValues]
		}))
	}

	//////////////////////////

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleImages = (data) => {
		this.setState(prevState => ({
			images: [...prevState.images, data]
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch({ type: "UPDATE_PRODUCT", payload: this.state })
		this.props.handleEditor();
	}

	handleVariation = () => {
		this.setState({ showVariation: true, })
	}

	render() {
		const { productTitle, price, offerPrice, shippingCost, inventory, description } = this.state;

		return (
			<section className="edit-container">
				<div className="image-container">
					<img src={"../images/" + this.props.items[this.props.id].images[0]} alt="product" />
				</div>
				<ImgDrop handleImages={this.handleImages} imgSrc={this.state.images} />

				{/* Product Editor Text Form */}
				<form className="form-container" onSubmit={this.handleSubmit}>
					<label>Product Title</label>
					<input type="text" name="productTitle" placeholder="Enter product title" value={productTitle === "Product Title" ? "" : productTitle} onChange={this.handleChange} />
					<hr />

					<label>Price</label>
					<span>&#8377;
						<input type="text" name="price" placeholder="Enter product price" value={price === "--" ? "" : price} onChange={this.handleChange} />
					</span>
					<hr />

					<label>Offer Price</label>
					<span>&#8377;
						<input type="text" name="offerPrice" placeholder="Enter offer price" value={offerPrice} onChange={this.handleChange} />
					</span>
					<hr />

					<label>Shipping Cost</label>
					<span>&#8377;
						<input type="text" name="shippingCost" placeholder="enter shipping cost" value={shippingCost} onChange={this.handleChange} />
					</span>
					<hr />

					<label htmlFor="inventory-select">Inventory</label>
					<select name="inventory" value={inventory} onChange={this.handleChange}>
						<option value="">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
					<hr />

					<label>Description</label>
					<input type="text" name="description" placeholder="Enter Description for Product" value={description} onChange={this.handleChange} />
					<button type="submit" value="submit">&#x27A1;</button>
				</form>
				<div className="variation-container" onClick={this.handleVariation}>
					{
						this.state.showVariation ? (
							<>
								<Variation id={this.props.id} handleKeyUp={this.handleKeyUp} handleInputName={this.handleInputName} handleCreateInputElement={this.handleCreateInputElement} options={this.state.options} variationCount={this.state.variationCount}/>
								<div>
									<button>+</button>
									<p className="variation-text">Have variations to your product like size, color and more?</p>
								</div>
							</>) : (
								<div>
									<button>+</button>
									<p className="variation-text">Have variations to your product like size, color and more?</p>
								</div>)
					}
				</div>
			</section>
		)
	}
}

function mapStateToProps(state) {
	return {
		items: state.products,
		variations: state.products,
	}
}
export default connect(mapStateToProps)(EditProduct);