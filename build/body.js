"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mark_ts_1 = require("mark.ts");
const styled_components_1 = require("styled-components");
class BodyComp extends React.Component {
    componentDidMount() {
        if (this.props.query == null)
            return;
        const instance = new mark_ts_1.default(this.node);
        instance.mark(this.props.query, {
            acrossElements: true,
            accuracy: 'complementary',
            exclude: ['.no', '[data-type="wbh"]'],
            separateWordSearch: false,
        });
    }
    render() {
        return (React.createElement("div", { className: this.props.className, id: "entry-body", ref: (node) => { this.node = node; } }, this.props.children));
    }
}
exports.Body = styled_components_1.default(BodyComp) `
	counter-reset: noteNumbers;
	font-size: 24px;
	line-height: 36px;
	margin: auto;
	padding-right: 300px;
	position: relative;
	width: 480px;
`;
