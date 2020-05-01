import React, { CSSProperties, FC, ReactElement, useContext } from 'react';
import { AppContext } from '../app';

interface Props {
	number: number;
	color: string;
	offColor: string;
	children: ReactElement;
}

const Route: FC<Props> = (props: Props) => {
	const context = useContext(AppContext);
	const active = !context.state.selectedPointOfInterest ||
		(context.state.selectedPointOfInterest && context.state.selectedPointOfInterest.routeNumbers.filter(r => r === props.number).length > 0)

	const style: CSSProperties = {
		stroke: active ? props.color : props.offColor,
		strokeMiterlimit: 10,
		fill: 'none',
		strokeWidth: 5,
		strokeLinejoin: 'round',
		strokeLinecap: 'round'
	};

	return React.cloneElement(props.children, { style });
}

export default Route;
