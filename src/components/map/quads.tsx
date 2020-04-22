import React, { FC } from 'react';

const Quads: FC = () => {
	const textStyle = {
		fontFamily: 'Interstate',
		fontWeight: 300,
		fontSize: '266.667px',
		fill: '#222'
	};
	const pathStyle = {
		fill: '#e3e8e5',
		stroke: '#666',
		strokeWidth: '33.33px'
	};
	return (
		<g>
			<path style={pathStyle} d="M5500 4010c0-60.71-49.29-110-110-110h-880c-60.71 0-110 49.29-110 110v1370c0 60.71 49.29 110 110 110h880c60.71 0 110-49.29 110-110V4010z" />
			<text style={textStyle} x="4599.97" y="2985.62" transform="matrix(1.10753 0 0 1.07334 -491.467 1442.47)">Main</text>
			<text style={textStyle} x="4599.97" y="3252.29" transform="matrix(1.10753 0 0 1.07334 -491.467 1442.47)">Quad</text>
			<path style={pathStyle} fill="#e3e8e5" stroke="#222" stroke-width="33.33" d="M5500 2725c0-124.18-100.82-225-225-225h-650c-124.18 0-225 100.82-225 225v450c0 124.18 100.82 225 225 225h650c124.18 0 225-100.82 225-225v-450z" />
			<text style={textStyle} x="4599.97" y="2985.62" transform="translate(4.429 -79.89)">North</text>
			<text style={textStyle} x="4599.97" y="3252.29" transform="translate(4.429 -79.89)">Quad</text>
		</g>
	);
};
export default Quads;
