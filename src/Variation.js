import React from 'react';
import { connect } from 'react-redux';

import SubVariation from './SubVariation';

// state = {
// 	options: [],
// 	arr: {
// 		name: "",
// 		values: [],
// 	},
// 	count: 0,
// }

class Variation extends React.Component {
	// state = {
	// 	options: [],
	// 	optionName: "",
	// 	optionValues: [],
	// 	variationCount: 0,
	// }

	// handleKeyUp = (e) => {
	// 	if (e.keyCode === 13) {
	// 		// this.setState({ optionCount: this.state.optionCount + 1 })
	// 		this.setState({
	// 			optionValues: [
	// 				...this.state.optionValues,
	// 				e.target.value
	// 			]
	// 		})
	// 	}
	// }

	// handleInputName = (e) => {
	// 	this.setState({
	// 		optionName:  e.target.value,
	// 	})
	// }


	handleInputValue = (e, index) => {
		
	}
	

	// handleCreateInputElement = () => {
	// 	this.setState(prevState => ({
	// 		variationCount: this.state.variationCount + 1,
	// 		optionValues: [...prevState.optionValues]
			
	// 	}))
	// 	// console.log(this.state.count, 'inside createINputElement');
	// }
	
	render() {
		let elm = [];
		for(var i=0; i<this.props.variationCount; i++){
			elm.push(<SubVariation handleKeyUp={this.props.handleKeyUp} handleInputValue={this.handleInputValue} value={this.props} index={i}/>)
		}
		
		return (
			<>
				<div className="option-container">
					<label>Option {this.props.options.length+1}</label>
					<input type="text" placeholder="Add option name" onChange={this.props.handleInputName}/>
					
				</div>
				{
					elm && elm.map(el => el)
				}
					<div className="subvariations" onClick={this.props.handleCreateInputElement}>
						<button>+</button>
						<p>Add more variation</p>
					</div>

			</>
		)
	}
}

function mapStateToProps(state) {
	return {
		variation: state.products,
	}
}

export default connect(mapStateToProps)(Variation);
