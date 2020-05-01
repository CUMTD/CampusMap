import React, { FC, useContext } from 'react';
import { PointOfInterestType } from '../../types/pointOfInterestType';
import { AppContext } from '../app';

function getColor(categoryType: PointOfInterestType | undefined): string {
	switch (categoryType) {
		case 'Academic Building':
			return '#f32735';
		case 'Housing':
			return '#f32735';
		case 'Transfer Point':
			return '#0f0';
		default:
			console.warn('No category open');
	}
	return '#f00'
}

const Poi: FC = () => {
	const context = useContext(AppContext);

	if (context.state.selectedPointOfInterest) {
		const color = getColor(context.state.selectedPointOfInterestCategory?.name);
		return (
			<circle
				fill={color}
				cx={context.state.selectedPointOfInterest.x}
				cy={context.state.selectedPointOfInterest.y}
				r="50"
			/>
		);
	}
	return null;
};

export default Poi;
