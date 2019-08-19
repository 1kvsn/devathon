import React from 'react';
import { connect } from 'react-redux';

import Variation from './Variation';
import ImgDrop from './Dropzone';

class EditProduct extends React.Component {
	constructor(props) {
		super(props);

		const itemIndex = this.props.items.findIndex((i) => i.id == this.props.id);

		const { id, productTitle, images, price, offerPrice, shippingCost, inventory, description, variations } = this.props.items[itemIndex];

		this.state = {
			id,
			productTitle,
			images,
			price,
			offerPrice,
			shippingCost,
			inventory,
			description,
			variations: variations || [],
		}
	}

	handleInputName = (val, index) => {
		const variations = this.state.variations;
		variations[index].name = val;
		this.setState({ variations });
	}

	handleCreateVariationOption = (index) => {
		const variations = this.state.variations;
		variations[index].values = variations[index].values.concat([""]);
		this.setState({ variations });
	}

	handleAddNewVariation = () => {
		const variations = this.state.variations;
		const newVariation = {
			name: '',
			values: []
		};
		variations.push(newVariation);
		this.setState({ variations })
	}

	handleVariationValues = (val, valueIndex, variationIndex) => {
		const variations = this.state.variations;
		const variation = variations[variationIndex];
		variation.values[valueIndex] = val;
		variations[variationIndex] = variation;
		this.setState({ variations });
	}


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
		this.props.handleCloseEditor();
	}

	render() {
		const { productTitle, price, offerPrice, shippingCost, inventory, description } = this.state;

		return (
			<section className="edit-container">
				<div className="image-container">
					<img src={"../images/" + this.state.images[0]} alt="product" />
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

				<div className="variation-container">
						<>
							{ this.state.variations.map((v, index) => {
								return (
									// Variation Component
									<Variation
										variationIndex={index}
										variation={v}
										handleInputName={this.handleInputName}
										handleCreateVariationOption={this.handleCreateVariationOption}
										handleVariationValues={this.handleVariationValues}
									/>
								)
							}) }
							<div className="variation-init-text" onClick={this.handleAddNewVariation}>
								<button>+</button>
								<p className="variation-text">{ this.state.variations.length > 0 ? "Add More Variations" : "Have variations to your product like size, color and more?"}</p>
							</div>
						</>
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