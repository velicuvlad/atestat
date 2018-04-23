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

var MiddleFAQ = function (_React$Component) {
    _inherits(MiddleFAQ, _React$Component);

    function MiddleFAQ() {
        _classCallCheck(this, MiddleFAQ);

        return _possibleConstructorReturn(this, (MiddleFAQ.__proto__ || Object.getPrototypeOf(MiddleFAQ)).apply(this, arguments));
    }

    _createClass(MiddleFAQ, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", null, _react2.default.createElement("div", { className: "middle" }, _react2.default.createElement("main", { className: "content" }, _react2.default.createElement("div", { className: "main-upper-noFlex" }, _react2.default.createElement("h1", null, "Intrebari frecvente"), _react2.default.createElement("p", null, "De ce site-ul nostru?"), _react2.default.createElement("span", null, "Oferim un mod simplu de a iti promova jocul gratis. Noi iti cerem doar un demo pe care utilizatorii nostri il downloadeaza si iti dau un like sau nu. De asemenea trebuie sa incluzi si un trailer. Astfel speram ca te vom ajuta sa iti faci jocul cunoscut si ca , in final, il vei putea promova pe unul dintre maganizele online de jocuri cum ar fi Steam si Origin. De la noi pleci cu suporteri ai ideii tale."), _react2.default.createElement("p", null, "De ce site-ul nostru este diferit de altele?"), _react2.default.createElement("span", null, "Noi planuim in a folosi un sistem ca cel de pe Facebook unde postarile cele mai noi sunt in varf. Pe langa acestea vom adauga diferite topuri in care jocul tau ar putea urca. Design-ul site-ului nostru este accesibil si usor de utilizat de catre utilizatori cu diferite experiente in navigarea pe internet."), _react2.default.createElement("p", null, "Cum pot incepe?"), _react2.default.createElement("span", null, "Este foarte simplu! Iti creezi un cont ", _react2.default.createElement("a", { href: "register.php", target: "_blank" }, "aici"), "."), _react2.default.createElement("p", null, "Nu stiu cum sa adaug un joc nou."), _react2.default.createElement("span", null, "In momentul in care te-ai logat pe site, in coltul din dreapta sus vei avea un buton pe care scrie Administrare Jocuri. Acolo vei putea incepe sa adaugi jocuri.Daca nu il poti vedea, foloseste acest link : ", _react2.default.createElement("a", {
                href: "content.php", target: "_blank" }, "Administrare Jocuri"), "."), _react2.default.createElement("p", null, "Sunt pe pagina ", _react2.default.createElement("a", { href: "content.php", target: "_blank" }, "Administrare Jocuri "), "si nu pot adauga jocuri!"), _react2.default.createElement("span", null, "Verifica daca esti logat si daca esti pe pagina corecta."), _react2.default.createElement("p", null, "Nu mi se incarca paginile site-ului"), _react2.default.createElement("span", null, "Te rugam sa incerci sa reincarci pagina. Este posibil ca browserul dumneavoastra sa nu suporte Javascript."), _react2.default.createElement("p", null, "Cum pot face ca link-ul trailer-ului meu sa apara pe pagina jocului meu?"), _react2.default.createElement("span", null, "Este nevoie de inlocuiesti watch?v= din link cu embed/ . Link-ul tau va arata astfel: exemplu : https://www.youtube.com/embed/...  unde punctele reprezinta ce se afla dupa watch?v= in link-ul initial"), _react2.default.createElement("p", null, "Nu imi apare poza de coperta"), _react2.default.createElement("span", null, "Te rugam sa incerci sa downloadezi poza respectiva si sa o uploadezi pe ", _react2.default.createElement("a", { href: "http://imgur.com/", target: "_blank" }, "http://imgur.com/"), " ( este GRATIS ) apoi foloseste acel link ca sa iti pui poza de coperta."), _react2.default.createElement("p", null, "Nu imi apare numele pe pagina jocului."), _react2.default.createElement("span", null, "Problema este cunoscuta si se va remedia in curand.")))));
        }
    }]);

    return MiddleFAQ;
}(_react2.default.Component);

exports.default = MiddleFAQ;

//# sourceMappingURL=Middle-compiled.js.map

//# sourceMappingURL=Middle-compiled-compiled.js.map