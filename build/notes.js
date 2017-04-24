"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const titleByType = {
    origNotes: 'Notes by Mondriaan',
    edsNotes: 'Notes by editors',
};
const NotesComp = (props) => React.createElement("ol", { className: props.className },
    React.createElement("h3", null, titleByType[props['data-type']]),
    props.children.map((child, i) => React.cloneElement(child, {
        activeNote: props.activeNote,
        key: i,
    })));
exports.Notes = styled_components_1.default(NotesComp) `
	margin: 0;
	padding: 0;
`;
