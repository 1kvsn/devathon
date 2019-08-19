import React from 'react';

class SubVariation extends React.Component {

	// onChange={(e, index) => this.props.handleInputValue(e, index)}

	render() {
		return (
			<>
				<input type="text" placeholder="Add subVariation" onChange={(e) => this.props.handleChange(e.target.value)} value={this.props.value} />
			</>
		)
	}
}

export default SubVariation;