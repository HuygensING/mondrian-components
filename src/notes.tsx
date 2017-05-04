import * as React from 'react';
import styled from 'styled-components';
import {black50} from "./colors";

const titleByType = {
	origNotes: 'Notes by Mondriaan',
	edsNotes: 'Notes by editors',
};

const NotesComp = (props) =>
	<ol className={props.className}>
		<h3>{titleByType[props['data-type']]}</h3>
		{
			props.children.map((child, i) =>
				React.cloneElement(child, {
					active: props.activeNote != null && props.activeNote === child.props['n'],
					key: i,
				})
			)
		}
	</ol>;

export const Notes = styled(NotesComp)`
	color: ${black50};
	font-size: 0.85em;
	list-style: none;
	margin: 0;
	padding: 0;
	position: absolute;
	right: 0;
	top: ${props => props.noteTop != null ? `${props.noteTop - 10}px`: 0};
	width: 280px;
`;
