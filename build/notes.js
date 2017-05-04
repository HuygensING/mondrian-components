"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const colors_1 = require("./colors");
const titleByType = {
    origNotes: 'Notes by Mondriaan',
    edsNotes: 'Notes by editors',
};
const NotesComp = (props) => React.createElement("ol", { className: props.className },
    React.createElement("h3", null, titleByType[props['data-type']]),
    props.children.map((child, i) => React.cloneElement(child, {
        active: props.activeNote != null && props.activeNote === child.props['n'],
        key: i,
    })));
exports.Notes = styled_components_1.default(NotesComp) `
	color: ${colors_1.black50};
	font-size: 0.85em;
	list-style: none;
	margin: 0;
	padding: 0;
	position: absolute;
	right: 0;
	top: ${props => props.noteTop != null ? `${props.noteTop - 10}px` : 0};
	width: 280px;
`;
