import React, { CSSProperties, FC } from 'react';

interface Props {
	x: number;
	y: number;
	name: string;
}

const TransferPoint: FC<Props> = (props: Props) => {

	const circleStyle: CSSProperties = {
		fill: '#fff',
		stroke: '#222',
		strokeWidth: 1,
	};


	return (
		<g>
			<circle cx={props.x} cy={props.y} r="6.25" style={circleStyle} />
		</g>
	);
};

export default TransferPoint;
