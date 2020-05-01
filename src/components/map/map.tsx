import React, { FC } from 'react';
import '../../scss/map.scss';
import Landmarks from './landmarks';
import Poi from './poi';
import Routes from './routes';
import TransferPoints from './transferPoints';

const Map: FC = () => {
	return (
		<div className="map">
			<svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinecap="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 740 665">
				<Landmarks />
				<Routes />
				<TransferPoints />
				<Poi />
			</svg>
		</div>
	);
}

export default Map;
