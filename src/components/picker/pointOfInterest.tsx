import React, { FC, useContext } from 'react';
import { Actions } from '../../reducer';
import { PointOfInterest as POI } from '../../types/pointOfInterest';
import { AppContext } from '../app';

const PointOfInterest: FC<POI> = (props: POI) => {
	const context = useContext(AppContext);
	const selected = context.state.selectedPointOfInterest?.name === props.name;

	function onClick(): void {
		context.dispatch({
			type: Actions.SelectPointOfInterest,
			poi: props
		});
	}

	return <button disabled={selected} className={selected ? 'selected' : 'unselected'} onClick={onClick}>
		<i className="material-icons">{selected ? 'check_box' : 'check_box_outline_blank'}</i>
		{props.name}
	</button>
};

export default PointOfInterest;
