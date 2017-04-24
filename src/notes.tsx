import * as React from 'react';
import styled from 'styled-components';

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
					activeNote: props.activeNote,
					key: i,
				})
			)
		}
	</ol>;

export const Notes = styled(NotesComp)`
	margin: 0;
	padding: 0;
`;
