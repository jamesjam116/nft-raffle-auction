import { useState } from "react";
import "../styles/helper.sass";
import "../styles/style.scss";
import Wallet from "../components/wallet/Wallet";
import { ToastContainer } from "react-toastify";
import PageLoading from "../components/PageLoading";
import Page from "../components/Page";
import Head from "next/head";

function RaffleApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Head>
        <title>Monkai | MULTI-CHAIN MINT</title>
        <meta
          name="description"
          content={
            "Monkai are the first Multi-chain Generative GIF NFTs on ETH & SOL & NEAR, bringing new DeFi stake + farm tokenomics to the Blockchain."
          }
        />
        <meta itemProp="name" content={"Monkai  | MULTI-CHAIN MINT"} />
        <meta
          itemProp="description"
          content={
            "Monkai are the first Multi-chain Generative GIF NFTs on ETH & SOL & NEAR, bringing new DeFi stake + farm tokenomics to the Blockchain."
          }
        />
        <meta
          property="og:image"
          key="ogimage"
          content={
            "https://cdn.discordapp.com/attachments/914394870204989451/964385331992465450/sol-eth-monkai-03.gif"
          }
        />
      </Head>
      <Wallet>
        <Page>
          <Component
            {...pageProps}
            startLoading={() => setLoading(true)}
            closeLoading={() => setLoading(false)}
          />
        </Page>
        <ToastContainer style={{ fontSize: 14 }} />
        <PageLoading loading={loading} />
      </Wallet>
    </>
  );
}

export default RaffleApp;
