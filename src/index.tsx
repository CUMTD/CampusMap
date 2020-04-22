import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
