import React from "react";
import RealLogo from "../public/real.png";

const Header = () => {
  return (
    <header className="text-center mb-10">
      <img src="/logo.png" className="mx-auto w-28 mb-2" />
      <img src="/real.png" className="mx-auto w-16 mb-4" />
      <h1 className="text-3xl font-bold text-white">Global Real Estate Marketplace</h1>
      <p className="text-gray-400 mt-2">
        Browse, buy, and list properties using USDC or SOL
      </p>
    </header>
  );
};

export default Header;
