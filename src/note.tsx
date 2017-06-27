import * as React from 'react';
import styled from 'styled-components';
import {activeNote} from "./colors";

const NoteComp = (props) =>
	props.active ?
		<li className={props.className}>
			{props.children}
		</li> :
		null;

export const Note = styled(NoteComp)``;

