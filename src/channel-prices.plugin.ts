import { PluginCommonModule, VendurePlugin } from "@vendure/core";
import { shopApiExtensions } from "./api/api-extensions";
import { ProductVariantEntityResolver } from "./api/product-variant-entity.resolver";

/**
 * @description
 * This plugin adds the `channelPrices` field to the ProductVariant entity.
 */
@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    resolvers: [ProductVariantEntityResolver],
    schema: shopApiExtensions,
  },
  compatibility: ">=2.0.0",
})
export class ChannelPricesPlugin {}
