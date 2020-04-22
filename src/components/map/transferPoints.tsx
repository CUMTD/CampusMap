import React, { FC } from 'react';
import TransferPoint from './transferPoint';

const TransferPoints: FC = () => (
	<g>
		<TransferPoint number={1} x={4950} y={3650} adjustX={30} />
		<TransferPoint number={2} x={4950} y={5750} />
		<TransferPoint number={3} x={6600} y={6550} />
		<TransferPoint number={4} x={1100} y={2250} adjustX={-15} />
		<TransferPoint number={5} x={3300} y={5750} />
		<TransferPoint number={6} x={3100} y={8200} />
		<TransferPoint number={7} x={7300} y={8500} />
		<TransferPoint number={8} x={9250} y={3600} />
		<TransferPoint number={9} x={2850} y={6750} />
	</g>
);

export default TransferPoints;
