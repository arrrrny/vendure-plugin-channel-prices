import { PluginCommonModule, VendurePlugin } from "@vendure/core";
import { shopApiExtensions } from "./api/api-extensions";
import { ProductVariantEntityResolver } from "./api/product-variant-entity.resolver";
import { ChannelPricesService } from "./services/channel-prices.service";

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
  providers: [ChannelPricesService],
  compatibility: ">=2.0.0",
})
export class ChannelPricesPlugin {}
