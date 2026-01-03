import React from "react";
import Logo from "../assets/logo.png";
import RealLogo from "../assets/real.png";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Header = () => {
  return (
    <header className="text-center mb-10">
      <img src={Logo} className="mx-auto w-28 mb-2" />
      <img src={RealLogo} className="mx-auto w-16 mb-4" />

      <h1 className="text-3xl font-bold text-white">
        Global Real Estate Marketplace
      </h1>
      <p className="text-gray-400 mt-2 mb-6">
        Browse, buy, and list properties using USDC or SOL
      </p>

      <div className="flex justify-center">
        <WalletMultiButton />
      </div>
    </header>
  );
};

export default Header;
