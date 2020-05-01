import React, { CSSProperties, FC, Fragment, ReactElement } from 'react';

interface Props {
	number: number;
	color: string;
	offColor: string;
	children: ReactElement;
	active: boolean;
	arrows?: JSX.Element[];
}

const Route: FC<Props> = (props: Props) => {
	const color = props.active ? props.color : props.offColor;
	const style: CSSProperties = {
		stroke: color,
		strokeMiterlimit: 10,
		fill: 'none',
		strokeWidth: 5,
		strokeLinejoin: 'round',
		strokeLinecap: 'round',
		zIndex: (props.active ? 100 : 10) + props.number
	};

	const arrowStyle: CSSProperties = {
		...style,
		fill: color
	};

	return (
		<Fragment>
			{React.cloneElement(props.children, { style, key: 'line' })}
			{props.arrows?.map((a, i) => React.cloneElement(a, { style: arrowStyle, key: i }))}
		</Fragment>
	);
}

export default Route;
