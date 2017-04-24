import * as React from 'react';
import styled from 'styled-components';

const NoteComp = (props) =>
	<li
		className={props.className}
	>
		{props.children}
	</li>;

export const Note = styled(NoteComp)`
	margin-bottom: 1em;
`;

