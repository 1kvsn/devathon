import React from 'react';

class Variation extends React.Component {
	state = {
		optionCount: 1,
		optionName: '',
		options: [],
	}

	handleLabel = (e) => {
		this.setState({
			optionName: e.target.value,
			[e.target.value]: '',
		})
	}

	handleKeyUp = (e) => {
		if (e.keyCode === 13) {
			this.setState({ optionCount: this.state.optionCount + 1 })
		}
	}

	render() {
		return (
			<>

				{
					this.state.options.map(option => {
						return (
							<div>
								<label>{option.key}</label>
								<input type="text" value={option.value} />
							</div>
						);
					})
				}

				<div>
					<label>Option {this.state.optionCount}</label>
					<input type="text" placeholder="Add option name" value={this.state.optionName} onChange={this.handleLabel} onKeyUp={this.handleKeyUp} />
					{/* <input type="text" placeholder={this.state.options && this.state.options[this.state.options.length - 1].key} /> */}
				</div>

			</>
		)
	}
}

export default Variation;