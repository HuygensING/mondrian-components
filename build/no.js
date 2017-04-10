"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
class NoComponent extends React.Component {
    componentDidMount() {
        if (this.props.active) {
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            this.node.scrollIntoView();
        }
    }
    render() {
        const { children, className } = this.props;
        return (React.createElement("span", { className: className, ref: (node) => { this.node = node; } }, children));
    }
}
exports.No = styled_components_1.default(NoComponent) `
	color: gray;
	margin-left: -3em;
	margin-top: 2px;
	position: absolute;
	text-align: right;
	width: 2em;
`;
