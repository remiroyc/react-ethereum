import React, { Component } from 'react';
import EthereumQRplugin from 'ethereum-qr-code'
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';

class EtherumQRCode extends Component {
  constructor(props) {
    super(props);
    this.generator = new EthereumQRplugin();
    this.id = uniqueId('qrCode');
  }

  componentDidMount() {
    this.generateQRCode();
  }

  componentDidUpdate(prevProps, prevState) {
    this.generateQRCode();
  }

  generateQRCode() {

    const sendDetails = {
      to: this.props.to,
      value: this.props.value,
      gas: this.props.gas
    };

    const qrCode = this.generator.toCanvas(sendDetails, {
      selector: `#${this.id}`,
    });

    qrCode.then((code) => {
      if (this.props.afterGenerate) {
        this.props.afterGenerate(code);
      }
    })
  }

  render() {
    return (
      <div id={this.id}></div>
    );
  }
}

EtherumQRCode.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  gas: PropTypes.number.isRequired,
  afterGenerate: PropTypes.func
}

export default EtherumQRCode
