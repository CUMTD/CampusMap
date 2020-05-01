import React, { CSSProperties, FC, useContext } from 'react';
import { Actions } from '../../reducer';
import '../../scss/clear-button.scss';
import { AppContext } from '../app';

const ClearButton: FC = () => {
	const context = useContext(AppContext);
	const show = context.state.selectedPointOfInterestCategory !== null || context.state.selectedPointOfInterest !== null;
	const style: CSSProperties = {
		opacity: show ? 1 : 0
	};

	function onClick(): void {
		context.dispatch({ type: Actions.Clear });
	}

	return (
		<button className="clear-button" style={style} onClick={onClick}>
			Clear
		</button>
	);
}

export default ClearButton;
