import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.scss';

import Game from './game/Game';

ReactDOM.render(
	<React.StrictMode>
		<Game />
	</React.StrictMode>,
	document.getElementById('root')
);