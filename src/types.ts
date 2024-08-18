export type ChannelPrice = {
  price: number;
  currencyCode: string;
  channelId: string;
  createdAt: Date;
  updatedAt: Date;
  customFields?: { [key: string]: any };
};
