import { Injectable } from "@nestjs/common";
import {
  ID,
  ProductVariantPrice,
  RequestContext,
  TransactionalConnection,
} from "@vendure/core";
import { ChannelPrice } from "../types";

@Injectable()
export class ChannelPricesService {
  constructor(private connection: TransactionalConnection) {}

  async getChannelPrices(
    ctx: RequestContext,
    productVariantId: ID,
  ): Promise<ChannelPrice[]> {
    return this.connection
      .getRepository(ctx, ProductVariantPrice)
      .createQueryBuilder("pvp")
      .where("pvp.variant = :productVariantId", { productVariantId })
      .getMany() as Promise<ChannelPrice[]>;
  }
}
