import React, { FC } from 'react';
import '../../scss/map.scss';
import Poi from './poi';
import Quads from './quads';
import Routes from './routes';
import TransferPoints from './transferPoints';

const Map: FC = () => {
	return (
		<div className="map">
			<svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 10000 10000">
				<Quads />
				<Routes />
				<TransferPoints />
				<Poi />
			</svg>
		</div>
	);
}

export default Map;
