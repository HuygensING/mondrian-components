"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const NoteComp = (props) => React.createElement("li", { className: props.className }, props.children);
exports.Note = styled_components_1.default(NoteComp) `
	margin-bottom: 1em;
`;
