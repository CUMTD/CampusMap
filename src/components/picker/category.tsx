import React, { FC, Fragment, useContext } from 'react';
import { Actions } from '../../reducer';
import { PointOfInterestCategory } from '../../types/pointOfInterestCategory';
import { AppContext } from '../app';
import PointOfInterest from './pointOfInterest';


const Category: FC<PointOfInterestCategory> = (props: PointOfInterestCategory) => {
	const context = useContext(AppContext);
	const open = context.state.selectedPointOfInterestCategory?.name === props.name;

	function onClick(): void {
		console.log('click');
		context.dispatch({
			type: Actions.SelectPointOfInterestCategory,
			category: props
		});
	}

	return (
		<Fragment>
			<button disabled={open} onClick={onClick} className={open ? 'open' : 'closed'}>
				{props.name}
			</button>
			{
				open ?
					<ul className="pois">
						{props.pointsOfInterest.map(poi => <li key={poi.name}><PointOfInterest {...poi} /></li>)}
					</ul> :
					null
			}
		</Fragment>
	);
}
export default Category;
