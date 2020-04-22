import React, { CSSProperties, FC, useContext } from 'react';
import { Actions } from '../../reducer';
import { AppContext } from '../app';

interface Props {
	x: number;
	y: number;
	number: number;
	adjustX?: number | undefined;
}

const TransferPoint: FC<Props> = (props: Props) => {
	const context = useContext(AppContext);
	const active = !context.state.selectedTransferPoint || (context.state.activeTransferPointIds.indexOf(props.number) > -1);
	const current = context.state.selectedTransferPoint?.number === props.number;
	const circleStyle: CSSProperties = {
		fill: '#fff',
		stroke: active ? (current ? '#f32735' : '#222') : '#ccc',
		strokeWidth: '33.33px'
	};

	const textStyle: CSSProperties = {
		fontFamily: 'Interstate',
		fontWeight: 900,
		fontSize: '250px',
		fill: active ? (current ? '#f32735' : '#222') : '#ccc',
		textAlign: 'center'
	}

	function onClick(): void {
		const selectedTransferPoint = context.state.transferPoints.filter(tp => tp.number === props.number)[0];
		context.dispatch({
			type: Actions.SelectTransferPoint,
			selectedTransferPoint
		});
	}

	return (
		<g onClick={onClick} className="tp">
			<circle cx={props.x} cy={props.y} r="150" style={circleStyle} />
			<text
				x={props.x - 85 + (props.adjustX ?? 0)}
				y={props.y + 88}
				style={textStyle}
			>{props.number}</text>
		</g>
	);
};

export default TransferPoint;
