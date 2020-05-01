import React, { FC, useContext } from 'react';
import { AppContext } from '../app';
import ClearButton from './clearButton';
import PointOfInterest from './pointOfInterest';

const PointsOfInterest: FC = () => {
	const context = useContext(AppContext);

	const open = context.state.selectedPointOfInterestCategory !== null;

	return (
		<div className={`points-of-interest ${open ? 'open' : 'closed'}`}>
			<div className="title">
				<ClearButton />
				<h2>
					{context.state.selectedPointOfInterestCategory?.name}
				</h2>
			</div>
			<ul className="points-of-interest-list">
				{
					open ?
						context.state.selectedPointOfInterestCategory?.pointsOfInterest.map(poi => <li key={poi.name} ><PointOfInterest {...poi} /></li>) :
						null
				}
			</ul>
		</div>
	);
}

export default PointsOfInterest;
