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

## Usage

```graphql
query{
  product(id:"1"){
    variants{
      id
      price
      channelPrices{
        price
        currencyCode
        channelId
      }
    }
  }
}
```
### Example Response
  ```json
{
  "data": {
    "product": {
      "id": "1",
      "variants": [
        {
          "id": "1",
          "price": 129900,
          "channelPrices": [
            {
              "price": 129900,
              "currencyCode": "USD",
              "channelId": "1"
            },
            {
              "price": 124704,
              "currencyCode": "TRY",
              "channelId": "2"
            },
            {
              "price": 116910,
              "currencyCode": "TRY",
              "channelId": "3"
            },
            {
              "price": 171468,
              "currencyCode": "TRY",
              "channelId": "4"
            }
          ]
        }
      ]
    }
  }
}
```
## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/arrrrny/vendure-plugin-channel-prices).
