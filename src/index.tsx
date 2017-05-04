import * as React from 'react';
import styled from 'styled-components';

// Default tag
const Tag = styled.div`
	display: inline;
`;

// Linebreak
export const Lb = styled(Tag)`
	display: block;
	font-size: 16px;
`;

// Pagebreak
export const Pb = styled.div`
	position: relative;
`;

export const Del = styled.span`
	color: red;
	text-decoration: line-through;
`;

export const Add = styled.span`
	color: green;
	
	&:before {
		content: '+';	
	}
`;

// Incorrect reproduced text
export const Sic = styled(Tag)`
	border-bottom: 1px solid #AAA;
`;

// The correction of the Sic
export const Corr = styled(Tag)`
	border: 1px solid #AAA;
`;

// Highlighted (to add styling)
export const Hi = styled(Tag)`
	text-decoration: ${props => props['rend'] === 'underline' ? 'underline' : 'none'}
	vertical-align: ${props => props['rend'] === 'super' ? 'super' : 'baseline'}
`;

export const Supplied = styled(Tag)`
	color: #AAA;
	&:after { content: ')'; }
	&:before { content: '('; }
`;

export const Unclear = styled(Tag)`
	color: #AAA;
	&:after { content: ']'; }
	&:before { content: '['; }
`;

export const Ab = Tag;
export const AddrLine = Tag;
export const Address = Tag;
export const Bibl = Tag;
export const C = Tag;
export const Choice = Tag;
export const Div = Tag;
export const Gap = Tag;
export const Head = Tag;
export const MdPostmark = Tag;
export const MdTranspose = Tag;
export const Metamark = Tag;
export const P = Tag;
export const Ref = Tag;
export const Retrace = Tag;
export const Rs = Tag;
export const Space = Tag;

export * from './no';
export * from './body';
export * from './note';
export * from './notes';
export * from './anchor';
export * from './facsthumb';
