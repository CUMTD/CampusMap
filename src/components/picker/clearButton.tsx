import React, { FC, useContext } from 'react';
import { Actions } from '../../reducer';
import '../../scss/clear-button.scss';
import { AppContext } from '../app';

const ClearButton: FC = () => {
	const context = useContext(AppContext);

	function onClick(): void {
		context.dispatch({ type: Actions.Clear });
	}

	return (
		<button className="clear-button" onClick={onClick}>
			<i className="material-icons">arrow_back</i>
		</button>
	);
}

export default ClearButton;
