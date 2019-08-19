import React from 'react';

class SubVariation extends React.Component {

	// onChange={(e, index) => this.props.handleInputValue(e, index)}

	render() {
		return (
			<>
				<input type="text" placeholder="Add subVariation" onKeyUp={(e) => this.props.handleKeyUp(e)} value={this.props.values}  />
			</>
		)
	}
}

export default SubVariation;