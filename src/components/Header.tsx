import React from "react";
import Logo from "../assets/logo.png";
import HeroBg from "../assets/hero-bg.jpg";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { FaDollarSign, FaCoins } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className="relative mb-16 px-4 py-16 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <img src={Logo} className="mx-auto w-28 mb-4" />

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Global Real Estate Marketplace
        </h1>

        <p className="text-gray-300 text-sm md:text-lg mb-8">
          Buy and sell real estate using <strong>USDC</strong> or <strong>SOL</strong>
        </p>

        <div className="flex justify-center mb-8">
          <WalletMultiButton />
        </div>

        {/* REAL benefits */}
        <div className="flex flex-col md:flex-row justify-center gap-4 text-white text-sm md:text-base">
          <div className="flex items-center gap-2 bg-gray-900/80 px-4 py-2 rounded-xl border border-gray-700">
            <FaDollarSign className="text-yellow-400" />
            Discounted marketplace fees for $REAL holders
          </div>
          <div className="flex items-center gap-2 bg-gray-900/80 px-4 py-2 rounded-xl border border-gray-700">
            <FaCoins className="text-green-400" />
            Stake $REAL and earn 30% of platform profits
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
