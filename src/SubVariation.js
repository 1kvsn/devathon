import React from 'react';

class SubVariation extends React.Component {

	render() {
		return (
			<>
				<input type="text" placeholder="Add subVariation" onChange={(e) => this.props.handleChange(e.target.value)} value={this.props.value} />
			</>
		)
	}
}

export default SubVariation;