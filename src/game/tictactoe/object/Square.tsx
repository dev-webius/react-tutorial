import React from 'react';

type Props = {
	value: number
}

class Square extends React.Component<Props> {
	render() {
		return (
			<button className="square">{this.props.value}</button>
		)
	}
}

export default Square;