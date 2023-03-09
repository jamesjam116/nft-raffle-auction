import Head from "next/head";
import AuctionCard from "../../components/AuctionCard";
import { useAuctions } from "../../hooks/useAuctions";

export default function RafflePage() {
  const { auctionList } = useAuctions();
  return (
    <>
      <Head>
        <title>Monkai | Auction</title>
      </Head>
      <main>
        <div className="container">
          <h1 className="auction-title">
            <span>NFT</span> AUCTION
          </h1>
          <div className="auction-list">
            {auctionList &&
              typeof auctionList === "object" &&
              auctionList.length !== 0 &&
              auctionList
                .reverse()
                .map((item: any, key: number) => (
                  <AuctionCard auctionId={item.auction_id} key={key} />
                ))}
          </div>
        </div>
      </main>
    </>
  );
}
