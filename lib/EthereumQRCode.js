'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ethereumQrCode = require('ethereum-qr-code');

var _ethereumQrCode2 = _interopRequireDefault(_ethereumQrCode);

var _lodash = require('lodash.uniqueid');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EthereumQRCode = function (_Component) {
  _inherits(EthereumQRCode, _Component);

  function EthereumQRCode(props) {
    _classCallCheck(this, EthereumQRCode);

    var _this = _possibleConstructorReturn(this, (EthereumQRCode.__proto__ || Object.getPrototypeOf(EthereumQRCode)).call(this, props));

    _this.generator = new _ethereumQrCode2.default();
    _this.id = (0, _lodash2.default)('qrCode');
    return _this;
  }

  _createClass(EthereumQRCode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.generateQRCode();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this.generateQRCode();
    }
  }, {
    key: 'generateQRCode',
    value: function generateQRCode() {
      var _this2 = this;

      var sendDetails = void 0;
      if (this.props.uriScheme) {
        sendDetails = this.generator.readStringToJSON(this.props.uriScheme);
      } else {
        sendDetails = {
          to: this.props.to,
          value: this.props.value,
          gas: this.props.gas
        };
      }

      var qrCode = this.generator.toCanvas(sendDetails, {
        selector: '#' + this.id
      });

      qrCode.then(function (code) {
        if (_this2.props.afterGenerate) {
          _this2.props.afterGenerate(code);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx('div', {
        id: this.id
      });
    }
  }]);

  return EthereumQRCode;
}(_react.Component);

EthereumQRCodeEthereum.propTypes = {
  uriScheme: _propTypes2.default.string,
  to: _propTypes2.default.string,
  value: _propTypes2.default.number,
  gas: _propTypes2.default.number,
  afterGenerate: _propTypes2.default.func
};

exports.default = EthereumQRCode;