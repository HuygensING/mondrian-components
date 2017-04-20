import * as React from 'react';
import * as Mark from 'mark.js';

export class Body extends React.Component<any, any> {
	private node;

	public componentDidMount() {
		const instance = new Mark(this.node);
		instance.mark(this.props.query, {
			acrossElements: true,
			accuracy: 'complementary',
			exclude: ['.no', '[data-type="wbh"]'],
			separateWordSearch: false,
		});
	}

	public render() {
		return (
			<div
			  ref={(node) => { this.node = node; }}
			>
				{this.props.children}
			</div>)
	}
}