import { AUCTION_API } from '../config';
import { api } from './api';

export const getAllAuctions =
  async () => api.post(`${AUCTION_API}getAllAuctionInfos`);

export const createAuction = async (
  data: any
) => api.post(`${AUCTION_API}registerAuctionInfo`, data);
