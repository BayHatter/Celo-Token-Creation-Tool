import dynamic from 'next/dynamic';
import WalletProvider from '../assets/WalletProvider';
import TopMenu from '../assets/TopMenu';
import CeloForm from '../assets/CeloForm';
import Sidebar from '../assets/Sidebar';
import Head from 'next/head';

const CeloFormWithNoSSR = dynamic(() => import('../assets/CeloForm'), {
  ssr: false,
});

export default function Celo() {
  return (
    <div className="min-h-screen bg-white-100">
      <WalletProvider>
        {({ provider, account, connectWallet, disconnectWallet }) => (
          <>
            <TopMenu account={account} connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
            
            <Head>
              <title>Celo Token Creation Tool</title>
              <meta name="description" content="Create and launch your own meme token on Celo" />
              <meta property="og:title" content="Launch Your Meme Coin on Celo" />
              <meta property="og:description" content="Build and deploy a meme coin instantly on Celo. Fast, secure, and 100% code-free." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="/celo" />
            </Head>

            <div className="container mx-auto p-4 max-w-7xl flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <CeloFormWithNoSSR provider={provider} account={account} connectWallet={connectWallet} />
              </div>
              <div className="md:w-[300px] flex-shrink-0">
                <Sidebar />
              </div>
            </div>
          </>
        )}
      </WalletProvider>
    </div>
  );
}
