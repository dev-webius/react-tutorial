import React from 'react';

import Board from './object/Board';

import "./style/index.scss";

class TicTacToe extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return <>
			<div id="tictactoe">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* STATUS */}</div>
					<ol>{/* TO DO */}</ol>
				</div>
			</div>
		</>;
	}
}

export default TicTacToe;