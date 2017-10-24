# Ethereum Address QR Code Generator

Sample :

![Ethereum QR code component for React](https://github.com/Reminouche/react-ethereum/blob/master/images/qrcode-sample.png)

```
<EtherumQRCode value={1} gas={1300} to={"0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"} />
```

## URI scheme

URI scheme used to send ETH between accounts conforms early EIP67 proposals and Bitcoin scheme. This is built to be backward compatible.

```
<EtherumQRCode uriScheme="ethereum:<address>[?from=<sender_address>][?value=<ethamount>][?gas=<suggestedGas>]" />
```
