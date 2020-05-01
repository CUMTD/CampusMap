import React, { CSSProperties, FC } from 'react';

const Quads: FC = () => {

	const groupStyle: CSSProperties = {
		fill: 'none',
		stroke: '#000',
		strokeWidth: 42,
		opacity: 0.1,
		strokeLinejoin: 'round'
	};

	return (
		<g style={groupStyle}>
			<path d="M4600 4400h700M4600 4800h700M5300 4000l-700 400M4600 4000l700 400M4600 4400l700 400M4600 4800l700-400M4600 4800l700 500M5300 4800l-700 500M4800 4000v100M4600 4000h700v1300h-700z" />
			<path d="M5000 2700v200" />
			<path strokeLinecap="butt" d="M4500 3400c333.33-122.41 666.67-123.77 1000 0l-900-349.87M5400 3050.13L4500 3400" />
			<path d="M5500 2800v66.18c0 21.28-9.57 41.44-26.06 54.9-48.34 38.78-73.45 60.66-73.94 129.05M5500 2800h-137.87c-39.78 0-77.93 15.8-106.06 43.93l-12.14 12.14a149.988 149.988 0 01-106.06 43.93h-275.74c-39.78 0-77.93-15.8-106.06-43.93l-12.14-12.14a149.988 149.988 0 00-106.06-43.93H4500" />
			<path d="M4500 3400c0-200 100-500 500-500s500 300 500 500" />
		</g>
	);
};
export default Quads;
