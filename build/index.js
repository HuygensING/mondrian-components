"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const hire_highlighter_1 = require("hire-highlighter");
const Tag = styled_components_1.default.div `
	display: inline;
`;
exports.Lb = styled_components_1.default(Tag) `
	display: block;
	font-size: 16px;
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
exports.Supplied = styled_components_1.default(Tag) `
	color: #AAA;
	&:after { content: ')'; }
	&:before { content: '('; }
`;
exports.Unclear = styled_components_1.default(Tag) `
	color: #AAA;
	&:after { content: ']'; }
	&:before { content: '['; }
`;
exports.Body = hire_highlighter_1.default;
exports.Ab = Tag;
exports.AddrLine = Tag;
exports.Address = Tag;
exports.Anchor = Tag;
exports.C = Tag;
exports.Choice = Tag;
exports.Div = Tag;
exports.Gap = Tag;
exports.Head = Tag;
exports.MdPostmark = Tag;
exports.Note = Tag;
exports.P = Tag;
exports.Retrace = Tag;
exports.Space = Tag;
__export(require("./no"));
