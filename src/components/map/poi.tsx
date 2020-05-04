import React, { FC, Fragment, useContext } from 'react';
import { AppContext } from '../app';

const Poi: FC = () => {
	const context = useContext(AppContext);

	if (context.state.selectedPointOfInterest) {
		return (
			<Fragment>
				<path
					fill="#3E0216"
					opacity={0.4}
					transform={`translate(${context.state.selectedPointOfInterest.x - 7},${context.state.selectedPointOfInterest.y - 25})`}
					d="M13.597 2.764C15.074 3.973 16 5.701 16 7.617 16 14.114 8.5 26 8.5 26s-.329-.452-.85-1.241C8.706 23.043 15 12.569 15 6.617c0-1.436-.52-2.767-1.403-3.853zM6.304 9.696a2.501 2.501 0 113.392-3.392 2.5 2.5 0 00-3.392 3.392z"
				/>
				<path
					fill="#E72B6B"
					transform={`translate(${context.state.selectedPointOfInterest.x - 7},${context.state.selectedPointOfInterest.y - 25})`}
					d="M7.5 25S15 13.114 15 6.617C15 2.965 11.639 0 7.5 0 3.361 0 0 2.965 0 6.617 0 14.718 7.5 25 7.5 25zm0-20a2.5 2.5 0 010 5 2.5 2.5 0 010-5z"
				/>
			</Fragment>
		);
	}
	return null;
};

export default Poi;
