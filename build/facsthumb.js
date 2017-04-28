"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const FacsThumbComp = (props) => React.createElement("img", { className: props.className, onClick: () => props.activateFacsimile(props.url), src: `/static/facsimiles/thumbnails/${props.url}.jpg` });
exports.FacsThumb = styled_components_1.default(FacsThumbComp) `
	cursor: pointer;
	max-height: 75px;
	max-width: 75px;
	position: absolute;
	right: -75px;
`;
