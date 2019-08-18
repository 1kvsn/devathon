import React from 'react';

import SubVariation from './SubVariation';

// const CreateInputElement = () => <input type="text" placeholder="Add subVariation"  onChange={this.handleInputValue} />



class Variation extends React.Component {
	state = {
		options: [],
		arr: {
			name: "",
			values: "",
		},
		count: 0,
	}

	// handleKeyUp = (e) => {
	// 	if (e.keyCode === 13) {
	// 		this.setState({ optionCount: this.state.optionCount + 1 })
	// 	}
	// }

	handleInputName = (e) => {
		this.setState({
			arr: {
				name: e.target.value,
			}
		})
	}

	handleInputValue = (e) => {
		if(e.key === 'Enter') {

			console.log(e.key,e.target.value, 'inside e.key');
			this.setState({
				arr: {
					values: e.target.value,
				}
			})
			console.log(this.state.arr.values);
		}
	}

	handleCreateInputElement = () => {
		this.setState({count: this.state.count + 1})
		// console.log(this.state.count, 'inside createINputElement');
	}
	
	render() {
		let elm = [];
		for(var i=0; i<this.state.count; i++){
			elm.push(<SubVariation handleInputValue={this.handleInputValue} value={this.state.arr}/>)
		}
		
		return (
			<>
				<div>
					<label>Option {this.state.options.length+1}</label>
					<input type="text" placeholder="Add option name" onChange={this.handleInputName}/>
					
				</div>
				{
					elm && elm.map(el => el)
				}
					<div className="subvariations" onClick={this.handleCreateInputElement}>
						<button>+</button>
						<p>Add more variation</p>
					</div>

			</>
		)
	}
}

export default Variation;
