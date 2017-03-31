"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const Tag = styled_components_1.default.div `
	display: inline;
`;
exports.Lb = styled_components_1.default(Tag) `
	display: block;
	font-size: 16px;
`;
exports.No = styled_components_1.default.span `
	color: gray;
	margin-left: -3em;
	margin-top: 2px;
	position: absolute;
	text-align: right;
	width: 2em;
`;
exports.Pb = styled_components_1.default.div `
	background: #EEE;
	border: 1px solid #CCC;
	height: 50px;
	left: calc(-50px + -3em);
	position: absolute;
	width: 50px
`;
exports.Del = styled_components_1.default.span `
	color: red;
	text-decoration: line-through;
`;
exports.Add = styled_components_1.default.span `
	color: green;
	
	&:before {
		content: '+';	
	}
`;
exports.Sic = styled_components_1.default(Tag) `
	border-bottom: 1px solid #AAA;
`;
exports.Corr = styled_components_1.default(Tag) `
	border: 1px solid #AAA;
`;
exports.Hi = styled_components_1.default(Tag) `
	text-decoration: ${props => props['data-rend'] === 'underline' ? 'underline' : 'none'}
	vertical-align: ${props => props['data-rend'] === 'super' ? 'super' : 'baseline'}
`;
exports.Unclear = styled_components_1.default(Tag) `
	color: #AAA;
	&:after { content: ']'; }
	&:before { content: '['; }
`;
exports.Ab = Tag;
exports.AddrLine = Tag;
exports.Address = Tag;
exports.Anchor = Tag;
exports.Body = Tag;
exports.C = Tag;
exports.Choice = Tag;
exports.Div = Tag;
exports.Gap = Tag;
exports.MdPostmark = Tag;
exports.Note = Tag;
exports.P = Tag;
exports.Retrace = Tag;
exports.Space = Tag;
exports.Supplied = Tag;
