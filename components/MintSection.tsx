import { useEffect, useState } from "react";
import { ethers } from "ethers";
import animoNFT from "../utils/AnimoNFT.json";

declare global {
  interface Window {
    ethereum: any;
  }
}

export const MintSection = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const renderNotConnectedContainer = () => (
    <button
      onClick={connectWallet}
      className="cta-button connect-wallet-button"
    >
      Connect to Wallet
    </button>
  );

  const askContractToMintNft = async () => {
    const CONTRACT_ADDRESS = "0x102496107b9686CA42667EAEf36b171A7Fed9a70";

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          animoNFT.abi,
          signer
        );

        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.makeAnEpicNFT();

        console.log("Mining...please wait.");
        await nftTxn.wait();

        alert(
          `Mined, see transaction: https://polygonscan.com/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="flex flex-col gap-6 flex-1 bg-primary rounded-xl p-8 shadow-xl">
      <div>
        <h2 className="text-xl font-medium text-t-primary">Step 1</h2>
        <p>Connect to the Polygon network.</p>
      </div>
      <div>
        <h2 className="text-xl font-medium text-t-primary">Step 2</h2>
        <p>Connect your MetaMask wallet.</p>
      </div>
      <div>
        <h2 className="text-xl font-medium text-t-primary">Step 3</h2>
        <p>Mint a your Animo NFT for free. </p>
      </div>
      {currentAccount === "" ? (
        renderNotConnectedContainer()
      ) : (
        <button
          onClick={askContractToMintNft}
          className="cta-button connect-wallet-button"
        >
          Mint NFT
        </button>
      )}
    </div>
  );
};
