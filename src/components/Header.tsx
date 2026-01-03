import React from "react";
import Logo from "../assets/logo.png";
import RealLogo from "../assets/real.png";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { FaDollarSign, FaCoins } from "react-icons/fa";

const Header = () => {
  return (
    <header className="text-center mb-12 px-4">
      <img src={Logo} className="mx-auto w-28 mb-2" />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Global Real Estate Marketplace
      </h1>
      <p className="text-gray-400 text-sm md:text-base mb-6">
        Browse, buy, and list properties using <strong>USDC</strong> or <strong>SOL</strong>
      </p>

      <div className="flex justify-center mb-6">
        <WalletMultiButton />
      </div>

      {/* Real Holder Benefits */}
      <div className="flex flex-col md:flex-row justify-center gap-6 text-white text-sm md:text-base">
        <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-xl border border-gray-700">
          <FaDollarSign className="w-5 h-5 text-yellow-400" />
          <span>Discounted marketplace fees for $REAL holders</span>
        </div>
        <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-xl border border-gray-700">
          <FaCoins className="w-5 h-5 text-green-400" />
          <span>Stake $REAL to earn 30% of platform profits</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
