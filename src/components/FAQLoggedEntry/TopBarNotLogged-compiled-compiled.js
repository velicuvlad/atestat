"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TopBarNotLogged = function (_React$Component) {
    _inherits(TopBarNotLogged, _React$Component);

    function TopBarNotLogged() {
        _classCallCheck(this, TopBarNotLogged);

        return _possibleConstructorReturn(this, (TopBarNotLogged.__proto__ || Object.getPrototypeOf(TopBarNotLogged)).apply(this, arguments));
    }

    _createClass(TopBarNotLogged, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", null, _react2.default.createElement("div", { className: "header-container" }, _react2.default.createElement("header", { className: "header" }, _react2.default.createElement("nav", { className: "header-nav" }, _react2.default.createElement("div", { className: "home-call" }, _react2.default.createElement("a", { href: "index.php" }, _react2.default.createElement("img", { src: "http://i.imgur.com/Wcsj9lo.png?1", style: { width: 50, height: 50 }, alt: "" }), "Level Up")), _react2.default.createElement("div", { className: "ul-container" }, _react2.default.createElement("ul", null, _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "register.php" }, "Inregistrare")), _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "login.php" }, "Logare")))), _react2.default.createElement("div", { className: "menu-wrapper" }, _react2.default.createElement("a", { href: "#menu" }, "☰"))))));
        }
    }]);

    return TopBarNotLogged;
}(_react2.default.Component);

exports.default = TopBarNotLogged;

//# sourceMappingURL=TopBarNotLogged-compiled.js.map

//# sourceMappingURL=TopBarNotLogged-compiled-compiled.js.map