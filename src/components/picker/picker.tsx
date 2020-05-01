import React, { FC, useContext } from 'react';
import '../../scss/picker.scss';
import { AppContext } from '../app';
import Category from './category';
import PointsOfInterest from './pointsOfInterest';

const Picker: FC = () => {
	const context = useContext(AppContext);

	return <div className="picker">
		<ul className="category-list">
			{
				context
					.state
					.pointOfInterestCategories
					.map(c => <li className="category" key={c.name}><Category {...c} /></li>)
			}
		</ul>
		<PointsOfInterest />
	</div>
}

export default Picker;
