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
			<path
				transform={`translate(${context.state.selectedPointOfInterest.x - 7},${context.state.selectedPointOfInterest.y - 25})`}
				fill={color}
				d="M7.5 25S15 13.114 15 6.617C15 2.965 11.639 0 7.5 0 3.361 0 0 2.965 0 6.617 0 14.718 7.5 25 7.5 25zm0-20a2.5 2.5 0 010 5 2.5 2.5 0 010-5z"
			/>
		);
	}
	return null;
};

export default Poi;
