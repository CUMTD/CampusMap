import React, { FC } from 'react';
import TransferPoint from './transferPoint';

const TransferPoints: FC = () => (
	<g>
		<TransferPoint x={670} y={92.75} name="Downtown Urbana" />
		<TransferPoint x={40} y={40} name="Downtown Champaign" />
		<TransferPoint x={87.75} y={476.25} name="E-14" />
		<TransferPoint x={85} y={569} name="Research Park" />
		<TransferPoint x={425} y={395} name="FAR/PAR" />
	</g>
);

export default TransferPoints;
