import * as React from 'react';
import styled from 'styled-components';
import {activeNote} from "./colors";

const NoteComp = (props) =>
	<li
		className={props.className}
	>
		{props.children}
	</li>;

export const Note = styled(NoteComp)`
	background-color: ${props => props.active ? activeNote : 'none'}
	margin-bottom: 1em;
`;

