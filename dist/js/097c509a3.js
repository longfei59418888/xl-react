webpackJsonp([0], {

/** */ 142:
/** */ (function (module, __webpack_exports__, __webpack_require__) {
Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
/* harmony import */ const __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ const __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
const _jsx = (function () {
 const REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7; return function createRawReactElement(type, props, key, children) {
 const defaultProps = type && type.defaultProps; const childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (const propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { const childArray = Array(childrenLength); for (let i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return {
 $$typeof: REACT_ELEMENT_TYPE, type, key: key === undefined ? null : `${key}`, ref: null, props, _owner: null, 
}; 
}; 
}());

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) {
 if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError(`Super expression must either be null or a function, not ${typeof superClass}`); } subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, enumerable: false, writable: true, configurable: true, 
}, 
}); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; 
}


const Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _jsx('div', {
                style: { position: 'absolute', width: '100%', height: '100%' },
            }, void 0, 'test');
        },
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

/* harmony default export */ __webpack_exports__.default = (Home);

(function register() {
    /* react-hot-loader/webpack */if (false) {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
            return;
        } /* eslint-disable camelcase, no-undef */const webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */if (typeof webpackExports === 'function') {
            __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', '/Users/wangxiaolong/Desktop/work/sources/test/src/containers/home.js'); return;
        } /* eslint-disable no-restricted-syntax */for (const key in webpackExports) {
            /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
                continue;
            } let namedExport = void 0; try {
                namedExport = webpackExports[key];
            } catch (err) {
                continue;
            }__REACT_HOT_LOADER__.register(namedExport, key, '/Users/wangxiaolong/Desktop/work/sources/test/src/containers/home.js');
        }
    }
}());
/** */ }),

});
