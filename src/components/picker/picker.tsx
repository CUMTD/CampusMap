import React, { FC, useContext } from 'react';
import '../../scss/picker.scss';
import { AppContext } from '../app';
import Category from './category';
import ClearButton from './clearButton';

const Picker: FC = () => {
	const context = useContext(AppContext);

	return <div className="picker">
		<ul>
			{
				context
					.state
					.pointOfInterestCategories
					.map(c => <li className="category" key={c.name}><Category {...c} /></li>)
			}
		</ul>
		<ClearButton key="clear" />
	</div>
}

export default Picker;
