import React, { FC } from 'react';
import '../scss/layout.scss';
import Map from './map/map';
import Picker from './picker/picker';

const Layout: FC = () => (
	<div className="container">
		<Picker />
		<Map />
	</div>
);
export default Layout;
