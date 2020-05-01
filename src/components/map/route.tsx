import React, { CSSProperties, FC, ReactElement } from 'react';

interface Props {
	number: number;
	color: string;
	offColor: string;
	children: ReactElement;
	active: boolean;
}

const Route: FC<Props> = (props: Props) => {
	const style: CSSProperties = {
		stroke: props.active ? props.color : props.offColor,
		strokeMiterlimit: 10,
		fill: 'none',
		strokeWidth: 5,
		strokeLinejoin: 'round',
		strokeLinecap: 'round',
		zIndex: (props.active ? 100 : 10) + props.number
	};

	return React.cloneElement(props.children, { style });
}

export default Route;
