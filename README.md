# Vendure Plugin Channel Prices for Shop-API

This package is a Vendure plugin that adds 'channelPrices'
field to the ProductVariant entity.Displays the prices of
the product variant for each channel.

## Installation

```sh
npm install vendure-plugin-channel-prices
```

## Configuration

In your Vendure config, import and use the `ChannelPricesPlugin`.

```ts
import { ChannelPricesPlugin } from "vendure-plugin-channel-prices";

//Add it to your plugins array
const config = {
  plugins: [
    ChannelPricesPlugin,
    // other plugins...
  ],
};
```
## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/arrrrny/vendure-plugin-channel-prices).
