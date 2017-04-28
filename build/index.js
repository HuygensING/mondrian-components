"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const Tag = styled_components_1.default.div `
	display: inline;
`;
exports.Lb = styled_components_1.default(Tag) `
	display: block;
	font-size: 16px;
`;
exports.Pb = styled_components_1.default.div `
	position: relative;
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
exports.Ab = Tag;
exports.AddrLine = Tag;
exports.Address = Tag;
exports.Bibl = Tag;
exports.C = Tag;
exports.Choice = Tag;
exports.Div = Tag;
exports.Gap = Tag;
exports.Head = Tag;
exports.MdPostmark = Tag;
exports.MdTranspose = Tag;
exports.Metamark = Tag;
exports.P = Tag;
exports.Ref = Tag;
exports.Retrace = Tag;
exports.Rs = Tag;
exports.Space = Tag;
__export(require("./no"));
__export(require("./body"));
__export(require("./note"));
__export(require("./notes"));
__export(require("./anchor"));
__export(require("./facsthumb"));
