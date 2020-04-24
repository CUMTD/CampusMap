import React, { FC, ReactElement, useContext } from 'react';
import { Actions } from '../reducer';
import '../scss/picker.scss';
import { TransferPoint } from '../types/transferPoint';
import { AppContext } from './app';
import ClearButton from './clearButton';

const Picker: FC = () => {
	const context = useContext(AppContext);

	function TP(props: TransferPoint): ReactElement {
		function onClick(): void {
			context.dispatch({ type: Actions.SelectTransferPoint, selectedTransferPoint: props });
		}

		const active = context.state.selectedTransferPoint?.number === props.number;
		const classes: string[] = [];

		if (active) {
			classes.push('active');
		}

		if (context.state.selectedTransferPoint !== null) {
			if (context.state.activeTransferPointIds.indexOf(props.number) > -1) {
				classes.push('served');
			} else {
				classes.push('not-served');
			}
		}


		return (
			<li className="tp">
				<button onClick={onClick} disabled={active} className={classes.join(' ')}>
					<strong>{props.number}</strong>
					{props.name}
				</button>
			</li>
		);
	}


	return (
		<div className="picker">
			<ul>
				{context
					.state
					.transferPoints
					.sort((a, b) => a.number - b.number)
					.map(tp => <TP key={tp.number} {...tp} />)}
			</ul>
			<ClearButton />
		</div>
	);
}

export default Picker;
