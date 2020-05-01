import React, { CSSProperties, FC } from 'react';

const Landmarks: FC = () => {

	const quadStyle: CSSProperties = {
		fill: 'none',
		stroke: '#ccc',
		strokeWidth: 2
	};

	const boneyardStyle: CSSProperties = {
		stroke: '#0d79f2',
		strokeOpacity: 0.2,
		strokeWidth: 4,
		fill: 'none'
	};

	return (
		<g>
			<path style={boneyardStyle} d="M298.754 153.384c-2.1.89 4.545-.39 6.814-.619 1.613-.163 3.291-.052 4.831-.558 8.756-2.875 15.257-8.887 24.158-11.149 7.417-1.886 16.373-1.232 23.6 1.115 2.91.944 5.557 2.7 8.548 3.344 9.148 1.972 17.929.93 26.944.93" />
			<path style={quadStyle} d="M325 199.96h29.999V280H325zM325 199.96l29.999 29.488M354.999 229.448L325 254.724M325 254.724L354.999 280M325 229.448l29.999-29.488M325 229.448l29.999 25.276M354.999 254.724L325 280M325 254.724h29.999M325 229.448h29.999" />
			<path style={quadStyle} d="M300.999 144.96c30.394-15.274 60.093-15.945 89 0M313.999 136.823c0-44.145 60.942-44.008 59.989.137M324.999 110.96l48 26M363.999 110.96l-50 28" />
		</g>
	);
};
export default Landmarks;
