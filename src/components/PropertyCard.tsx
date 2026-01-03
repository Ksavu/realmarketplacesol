import React from "react";
import solIcon from "../assets/sol.png";
import usdcIcon from "../assets/usdc.png";
import realIcon from "../assets/real.png";

import {
  useWallet,
  useConnection,
} from "@solana/wallet-adapter-react";
import {
  Transaction,
  SystemProgram,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

interface Props {
  image: string;
  title: string;
  location: string;
  priceUSDC: number;
  priceSOL: number;
}

// 👇 WALLET KOJI PRIMA NOVAC (seller / escrow)
const SELLER_WALLET = new PublicKey(
  "7ALEjJAikbPcRcTRT6722UEa18tHLf5cnz72SABy5NUg"
);

const PropertyCard: React.FC<Props> = ({
  image,
  title,
  location,
  priceUSDC,
  priceSOL,
}) => {
  const { publicKey, sendTransaction, connected } = useWallet();
  const { connection } = useConnection();

  const buyWithSOL = async () => {
    if (!publicKey) {
      alert("Please connect your wallet");
      return;
    }

    try {
      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: SELLER_WALLET,
          lamports: Math.round(priceSOL * LAMPORTS_PER_SOL),
        })
      );

      const signature = await sendTransaction(tx, connection);
      await connection.confirmTransaction(signature, "confirmed");

      alert("Property purchased successfully!");
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    }
  };

  return (
    <div className="bg-[#0b0b0b] border border-gray-700 rounded-xl shadow-lg overflow-hidden max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{location}</p>

        {/* Dugmad za kupovinu */}
        <div className="flex flex-col gap-2 mt-3">
          {/* USDC dugme */}
          <button
            disabled
            className="flex-1 flex items-center justify-center gap-2 p-2 rounded bg-gray-700 text-white font-bold cursor-not-allowed"
            title="REAL holders get discounted buy fees & fee rewards from platform fees"
          >
            <img src={usdcIcon} className="w-5 h-5" alt="USDC" />
            <img src={realIcon} className="w-4 h-4" alt="REAL" />
            {priceUSDC.toLocaleString()} USDC
          </button>
          <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
            <img src={realIcon} className="w-4 h-4" alt="REAL" />
            REAL holders: discounted buy fees & fee rewards
          </p>

          {/* SOL dugme */}
          <button
            onClick={buyWithSOL}
            disabled={!connected}
            className={`flex-1 flex items-center justify-center gap-2 p-2 rounded text-white font-bold
              ${
                connected
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            title="REAL holders get discounted buy fees & fee rewards from platform fees"
          >
            <img src={solIcon} className="w-5 h-5" alt="SOL" />
            <img src={realIcon} className="w-4 h-4" alt="REAL" />
            {priceSOL.toFixed(2)} SOL
          </button>
          <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
            <img src={realIcon} className="w-4 h-4" alt="REAL" />
            REAL holders: discounted buy fees & fee rewards
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
