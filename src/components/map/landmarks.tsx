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
			<path
				style={quadStyle}
				d="M305 170h35v95h-35zM305 170l35 35M340 205l-35 30M305 235l35 30M305 205l35-35M305 205l35 30M340 235l-35 30M305 235h35M305 205h35"
			/>
			<path
				style={quadStyle}
				d="M281 115c30.394-15.274 60.093-15.945 89 0M294 106.863c0-44.145 60.941-44.008 59.989.137M305 81l48 26M344 81l-50 28"
			/>
			<path
				style={boneyardStyle}
				d="M278.755 123.424c-2.1.891 4.544-.39 6.813-.619 1.613-.163 3.291-.052 4.832-.558 8.755-2.874 15.257-8.886 24.157-11.149 7.417-1.886 16.374-1.231 23.6 1.115 2.91.945 5.557 2.7 8.548 3.345 9.149 1.971 17.93.929 26.945.929"
			/>
		</g>
	);
};
export default Landmarks;
