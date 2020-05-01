import React, { FC } from 'react';
import TransferPoint from './transferPoint';

const TransferPoints: FC = () => (
	<g>
		<TransferPoint x={690} y={122.75} name="Downtown Urbana" />
		<TransferPoint x={60} y={70} name="Downtown Champaign" />
		<TransferPoint x={107.5} y={506.25} name="E-14" />
		<TransferPoint x={105} y={599} name="Research Park" />
		<TransferPoint x={445} y={425} name="FAR/PAR" />
	</g>
);

export default TransferPoints;
