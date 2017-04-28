"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const colors_1 = require("./colors");
const AnchorComp = (props) => React.createElement("a", { className: `${props.className} anchor`, onClick: () => props.activateNote(props['data-n']) });
exports.Anchor = styled_components_1.default(AnchorComp) `
	cursor: pointer;
	font-size: 0.8em;
	margin: 0 0.5em;
	
	&:before {
		background-color: ${props => props['data-n'] === props.activeNote ? colors_1.activeNote : 'none'}
		border: 1px solid ${colors_1.black35};
		border-radius: 1em;
		padding: .3em .6em;
		color: ${colors_1.black50};
		content: counter(noteNumbers);
		counter-increment: noteNumbers;
	}
	
	& + .anchor {
		margin-left: 0;
	}
`;
