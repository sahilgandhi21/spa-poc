webpackJsonp([1],{

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mount = exports.bootstrap = undefined;
exports.unmount = unmount;

var _react = __webpack_require__(116);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(117);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _singleSpaReact = __webpack_require__(280);

var _singleSpaReact2 = _interopRequireDefault(_singleSpaReact);

var _reactComponent = __webpack_require__(281);

var _reactComponent2 = _interopRequireDefault(_reactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domElementGetter = function domElementGetter() {
  var el = document.getElementById('react');
  if (!el) {
    el = document.createElement('div');
    el.id = 'react';
    document.body.appendChild(el);
  }

  return el;
};

var reactLifecycles = (0, _singleSpaReact2.default)({
  React: _react2.default,
  ReactDOM: _reactDom2.default,
  rootComponent: _reactComponent2.default,
  domElementGetter: domElementGetter
});

var bootstrap = exports.bootstrap = function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
};

var mount = exports.mount = function mount(props) {
  return reactLifecycles.mount(props);
};

//export const unmount = props => reactLifecycles.unmount(props)

function unmount(props) {
  return Promise.resolve().then(function () {
    var el = document.getElementById("react");
    el.remove();
  });
}

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).singleSpaReact={})}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}e.SingleSpaContext=null;var r={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElements:{},errorBoundary:null,domElementGetter:null,parcelCanUpdate:!0};function a(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function i(e,t){return new Promise((function(n,o){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var r=function(e,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof r)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=u(e,t),i=function(e,t){var n=e(t);if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(r,t);s({elementToRender:a,domElement:i,whenFinished:function(){n(this)},opts:e});e.domElements[t.name]=i}))}function c(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name]}))}function p(e,t){return new Promise((function(n,o){s({elementToRender:u(e,t),domElement:e.domElements[t.name],whenFinished:function(){n(this)},opts:e})}))}function s(e){var t=e.opts,n=e.elementToRender,o=e.domElement,r=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(o).render(n,r):"createBlockingRoot"===t.renderType?t.ReactDOM.createBlockingRoot(o).render(n,r):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,o,r):t.ReactDOM.render(n,o,r)}function u(t,n){var o=t.React.createElement(t.rootComponent,n),r=e.SingleSpaContext?t.React.createElement(e.SingleSpaContext.Provider,{value:n},o):o;return t.errorBoundary&&(t.errorBoundaryClass=t.errorBoundaryClass||function(e){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},t}(t),r=t.React.createElement(t.errorBoundaryClass,n,r)),r}e.default=function(s){if("object"!==t(s))throw new Error("single-spa-react requires a configuration object");var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{},s);if(!u.React)throw new Error("single-spa-react must be passed opts.React");if(!u.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!u.rootComponent&&!u.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(u.errorBoundary&&"function"!=typeof u.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!e.SingleSpaContext&&u.React.createContext&&(e.SingleSpaContext=u.React.createContext());var l={bootstrap:a.bind(null,u),mount:i.bind(null,u),unmount:c.bind(null,u)};return u.parcelCanUpdate&&(l.update=p.bind(null,u)),l},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=single-spa-react.js.map


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(116);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(117);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));

    _this.state = {
      personId: window.location.hash.split("/") ? window.location.hash.split("/")[2] : 0,
      detailData: "",
      isLoading: "true"
    };
    return _this;
  }

  _createClass(Root, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var apiUrl = "https://reqres.in/api/users?id=" + this.state.personId;
      fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (resp) {
        console.log("This is your data", resp["data"]);
        setTimeout(function () {
          return _this2.setState({
            detailData: resp["data"],
            isLoading: "false"
          });
        }, 1500);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { style: { marginTop: "25px" } },
        _react2.default.createElement(
          "h1",
          null,
          "Detail View (Built on React)"
        ),
        _react2.default.createElement(
          "h2",
          null,
          "User detail as follow"
        ),
        _react2.default.createElement(
          "a",
          { href: "/#/list" },
          "Back to List View"
        ),
        this.state.isLoading && this.state.isLoading == "true" && _react2.default.createElement("div", { className: "loader" }),
        this.state.isLoading && this.state.isLoading == "false" && _react2.default.createElement(
          "table",
          null,
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "h3",
                null,
                "Id"
              )
            ),
            _react2.default.createElement(
              "td",
              null,
              this.state.detailData.id
            )
          ),
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "h3",
                null,
                "Photo"
              )
            ),
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement("img", { alt: "", src: this.state.detailData.avatar })
            )
          ),
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "h3",
                null,
                "First Name"
              )
            ),
            _react2.default.createElement(
              "td",
              null,
              this.state.detailData.first_name
            )
          ),
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "h3",
                null,
                "Last Name"
              )
            ),
            _react2.default.createElement(
              "td",
              null,
              this.state.detailData.last_name
            )
          ),
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "h3",
                null,
                "Email"
              )
            ),
            _react2.default.createElement(
              "td",
              null,
              this.state.detailData.email
            )
          )
        )
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

/* ReactDOM.render((
  <Router>
     <Route path = "/" component = {Root}>
        <IndexRoute component = {Home} />
        <Route path = "detail/id" component = {Root} />
     </Route>
  </Router>
), document.getElementById('app')) */


exports.default = Root;

/***/ })

});
//# sourceMappingURL=1.js.map