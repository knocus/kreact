"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var react_1 = require("react");
var React = require("react");
var UnstyledNavbar = function (props) {
    var navbar_className = "navbar";
    return (React.createElement(react_1.Fragment, null,
        React.createElement("nav", { className: navbar_className }, props.children)));
};
exports.Navbar = styled_components_1.default(UnstyledNavbar)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", "\n  background-color: ", "\n"], ["\n  height: ", "\n  background-color: ", "\n"])), function (props) { return props.height ? props.height + 'px' : '60px'; }, function (props) { return props.bg ? props.bg : 'white'; });
var templateObject_1;
