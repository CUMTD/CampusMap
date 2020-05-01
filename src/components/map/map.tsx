import React, { FC } from 'react';
import '../../scss/map.scss';
import Landmarks from './landmarks';
import Poi from './poi';
import Routes from './routes';
import TransferPoints from './transferPoints';

const Map: FC = () => {
	return (
		<div className="map">
			<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linecap="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 700 625">
				<Landmarks />
				<Routes />
				<TransferPoints />
				<Poi />
			</svg>
		</div>
	);
}

export default Map;
