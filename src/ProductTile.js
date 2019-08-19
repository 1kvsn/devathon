import React, { Component } from 'react';
import EditProduct from './EditProduct';

class ProductTile extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const item = this.props.item;
		const isEditMode = (this.props.editId == this.props.item.id ? true : false);

		return (
			<div id="item" className='item'>
				<>
					<div className={isEditMode ? 'zero-height' : ''} onClick={() => this.props.updatedEditId(item.id)}>
						<div>
							<img src={"../images/" + item.images[0]} alt="product" />
						</div>
						<div className="item-details">
							<p className="item-title">{item.productTitle}</p>
							<hr />
							<p className="item-price">&#8377; {item.price}</p>
						</div>
					</div>
				</>
				{ isEditMode ?
					<div style={{display: "block", position: "absolute"}}>
						<EditProduct 
							id={item.id} 
							handleCloseEditor={() => this.props.updatedEditId()}
						/>
					</div>
					: null
				}
			</div>
		)
	}
}

export default ProductTile;

