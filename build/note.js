"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const colors_1 = require("./colors");
const NoteComp = (props) => React.createElement("li", { className: props.className }, props.children);
exports.Note = styled_components_1.default(NoteComp) `
	background-color: ${props => props.active ? colors_1.activeNote : 'none'}
	margin-bottom: 1em;
`;
