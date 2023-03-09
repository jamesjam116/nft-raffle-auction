import React from 'react';
import { getAllAuctions } from '../services/auction';

export const useAuctions = () => {
  const [auctionList, setAuctionList] =
    React.useState<any>();

  const init = async () => {
    try {
      const auction =
        await getAllAuctions();

      setAuctionList(auction.data);
    } catch (error) {}
  };

  React.useEffect(() => {
    init();
  }, []);
  return {
    auctionList,
    getAuctionList: init,
  };
};
