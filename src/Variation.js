import React from 'react';

import SubVariation from './SubVariation';

class Variation extends React.Component {
	
	render() {
		const variationIndex = this.props.variationIndex;
		const variation = this.props.variation;

		return (
			<>
				<div className="option-container">
					<label>Option {variationIndex + 1}</label>
					<input type="text" placeholder="Add option name"
						value={variation.name}
						onChange={(e) => this.props.handleInputName(e.target.value, variationIndex) } />
				</div>
				{
					this.props.variation.values && this.props.variation.values.map((val, i) => {
						return (
							// Sub-variation Component
							<SubVariation
								handleChange={(val) => this.props.handleVariationValues(val, i, variationIndex)}
								value={val}
								index={i}/>
						)
					})
				}
				<div className="subvariations" onClick={() => this.props.handleCreateVariationOption(variationIndex)}>
					<button>+</button>
					<p>Add more variation</p>
				</div>
			</>
		)
	}
}

export default Variation;
