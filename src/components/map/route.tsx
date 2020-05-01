import React, { FC, ReactElement, useContext } from 'react';
import { AppContext } from '../app';

interface Props {
	number: number;
	color: string;
	offColor: string;
	children: ReactElement;
}

const Route: FC<Props> = (props: Props) => {
	const context = useContext(AppContext);
	const active = (!context.state.selectedTransferPoint && !context.state.selectedPointOfInterest) ||
		(context.state.selectedTransferPoint && context.state.selectedTransferPoint.routeIds.indexOf(props.number) > -1) ||
		(context.state.selectedPointOfInterest && context.state.selectedPointOfInterest.routeNumbers.filter(r => r === props.number).length > 0)

	return (
		React.cloneElement(props.children, {
			style: {
				fill: 'none',
				stroke: active ? props.color : props.offColor,
				strokeWidth: 75
			}
		})
	);
}

export default Route;
