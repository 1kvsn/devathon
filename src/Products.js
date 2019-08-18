import React from 'react';
import {connect} from 'react-redux';

import EditProduct from './EditProduct';

class Products extends React.Component {
		state = {
			openEditor: false,
			id: null,
		}

	//handles the editor opening and closing
	handleEditor = () => {
		this.setState({openEditor: !this.state.openEditor})
	}

	//handles the EditProduct component opening
	handleEdit = (index) => {
		this.setState({
			openEditor: !this.state.openEditor,
			id: index })
	}

	render() {
		return (
			<>
				<section className='wrapper'>
					<div className="items-container">
						{
							this.state.openEditor ? <EditProduct id={this.state.id} handleEditor={this.handleEditor}/> : null
						}
						{
							this.props.items.map((item, index) => {
								return (
									<div id="item" className='item' key={index} onClick={() => this.handleEdit(index)}>
										<div>
											<img src={"../images/" + item.images[0]} alt="product"/>
										</div>
										<div className="item-details">
											<p className="item-title">{item.productTitle}</p>
											<hr/>
											<p className="item-price">&#8377; {item.price}</p>
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