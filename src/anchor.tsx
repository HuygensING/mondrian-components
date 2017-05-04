import * as React from 'react';
import styled from 'styled-components';
import {activeNote, black35, black50} from "./colors";

class AnchorComp extends React.Component<any, any> {
	private node;

	private handleClick = () => {
		const anchorTop = this.node.getBoundingClientRect().top;
		const textTop = document.getElementById('entry-body').getBoundingClientRect().top;
		const { activateNote, n } = this.props;
		activateNote(n, (anchorTop - textTop));
	};

	render() {
		const { className } = this.props;

		return (
			<a
				className={`${className} anchor`}
				onClick={this.handleClick}
			  ref={(node) => { this.node = node; }}
			/>
		);
	}
}

export const Anchor = styled(AnchorComp)`
	cursor: pointer;
	font-size: 0.8em;
	margin: 0 0.5em;
	
	&:before {
		background-color: ${props =>
			props['n'] === props.activeNote ? activeNote : 'none'
		}
		border: 1px solid ${black35};
		border-radius: 1em;
		padding: .3em .6em;
		color: ${black50};
		content: counter(noteNumbers);
		counter-increment: noteNumbers;
	}
	
	& + .anchor {
		margin-left: 0;
	}
`;
