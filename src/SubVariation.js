import React from 'react';

class SubVariation extends React.Component {



	render() {
		console.log(this.props, 'props in subvariation');
		return (
			<>
				<input type="text" placeholder="Add subVariation" onKeyUp={(e) => this.props.handleInputValue(e)} value={this.props.value.values} onChange={(e) => this.props.handleInputValue(e)} />
			</>
		)
	}
}

export default SubVariation;