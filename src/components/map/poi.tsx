import React, { FC, useContext } from 'react';
import { PointOfInterestType } from '../../types/pointOfInterestType';
import { AppContext } from '../app';

function getColor(categoryType: PointOfInterestType | undefined): string {
	switch (categoryType) {
		case 'Academic Building':
			return '#E72B6B';
		case 'Housing':
			return '#E72B6B';
		case 'Transfer Point':
			return '#E72B6B';
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
				stroke={color}
				strokeWidth={1}
				fillOpacity={0.7}
				r="4"
			/>
		);
	}
	return null;
};

export default Poi;
