import * as React from 'react';
import styled from 'styled-components';

class NoComponent extends React.Component<any, any> {
	private node;

	public componentDidMount() {
		if (this.props.active) {
			// Prevent the browser from restoring the scroll position
			// after it is set programmatically.
			if ('scrollRestoration' in history) {
				history.scrollRestoration = 'manual';
			}

			this.node.scrollIntoView();
		}
	}

	public render() {
		const { children, className } = this.props;

		return (
			<span
				className={className}
			  ref={(node) => { this.node = node }}
			>
				{children}
			</span>
		);
	}
}

// No is short for "number". No is a child of <Lb>, so it
// really is: Linenumber, but because it is used so frequently
// byte size does matter in this case.
export const No = styled(NoComponent)`
	color: gray;
	margin-left: -3em;
	margin-top: 2px;
	position: absolute;
	text-align: right;
	width: 2em;
`;
