import React, { FC, useContext } from 'react';
import { Actions } from '../../reducer';
import { PointOfInterestCategory } from '../../types/pointOfInterestCategory';
import { AppContext } from '../app';


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
		<button disabled={open} onClick={onClick} className={open ? 'open' : 'closed'}>
			<i className="material-icons">{props.icon}</i>
			{props.name}
		</button>
	);
}
export default Category;
