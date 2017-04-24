import * as React from 'react';
import Mark from 'mark.js';
import styled from "styled-components";

class BodyComp extends React.Component<any, any> {
	private node;

	public componentDidMount() {
		if (this.props.query == null) return;

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
				className={this.props.className}
			  ref={(node) => { this.node = node; }}
			>
				{this.props.children}
			</div>)
	}
}

export const Body = styled(BodyComp)`
	counter-reset: noteNumbers;
	font-size: 24px;
	line-height: 36px;
	max-width: 480px;
	position: relative;
`;