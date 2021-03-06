"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const FacsThumbComp = (props) => React.createElement("img", { className: props.className, onClick: () => props.activateFacsimile(props.url), src: `/static2/facsimile_thumbs/${props.url}.jpg` });
exports.FacsThumb = styled_components_1.default(FacsThumbComp) `
	cursor: pointer;
	max-height: 75px;
	max-width: 75px;
	opacity: ${props => props.activeNote == null ? 1 : 0.1}
	position: absolute;
	right: -75px;
	transition: opacity 150ms;
`;
