import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Ctx, RequestContext, ProductVariant } from "@vendure/core";
import { ChannelPricesService } from "../services/channel-prices.service";
import { ChannelPrice } from "../types";

@Resolver("ProductVariant")
export class ProductVariantEntityResolver {
  constructor(private channelPricesService: ChannelPricesService) {}

  @ResolveField()
  async channelPrices(
    @Ctx() ctx: RequestContext,
    @Parent() variant: ProductVariant,
  ): Promise<ChannelPrice[]> {
    return this.channelPricesService.getChannelPrices(ctx, variant.id);
  }
}
