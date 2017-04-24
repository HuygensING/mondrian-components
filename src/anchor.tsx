import * as React from 'react';
import styled from 'styled-components';
import {black35, black50} from "./colors";

const AnchorComp = (props) =>
	<a
		className={`${props.className} anchor`}
	  onClick={() => props.activateNote(props['data-n'])}
	/>;

export const Anchor = styled(AnchorComp)`
	cursor: pointer;
	font-size: 0.8em;
	margin: 0 0.5em;
	
	&:before {
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
