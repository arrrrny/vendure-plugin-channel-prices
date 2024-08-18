import gql from "graphql-tag";

const channelPricesShopApiExtensions = gql`
  type ChannelPrice {
    price: Money!
    currencyCode: CurrencyCode!
    channelId: ID!
    customFields: JSON
  }

  extend type ProductVariant {
    channelPrices: [ChannelPrice!]!
  }
`;
export const shopApiExtensions = gql`
  ${channelPricesShopApiExtensions}
`;
