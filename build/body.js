"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Mark = require("mark.js");
class Body extends React.Component {
    componentDidMount() {
        const instance = new Mark(this.node);
        instance.mark(this.props.query, {
            acrossElements: true,
            accuracy: 'complementary',
            exclude: ['.no', '[data-type="wbh"]'],
            separateWordSearch: false,
        });
    }
    render() {
        return (React.createElement("div", { ref: (node) => { this.node = node; } }, this.props.children));
    }
}
exports.Body = Body;
