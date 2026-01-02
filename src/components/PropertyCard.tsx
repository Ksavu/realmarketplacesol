import React from "react";
import solIcon from "../assets/sol.png";
import usdcIcon from "../assets/usdc.png";
import realIcon from "../assets/real.png";

interface Props {
  image: string;
  title: string;
  location: string;
  priceUSDC: number;
  priceSOL: number;
}

const PropertyCard: React.FC<Props> = ({
  image,
  title,
  location,
  priceUSDC,
  priceSOL,
}) => {
  return (
    <div className="bg-[#0b0b0b] border border-gray-700 rounded-xl shadow-lg overflow-hidden max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{location}</p>

        <div className="flex gap-2 mt-3">
          <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold">
            <img src={usdcIcon} className="w-5 h-5" />
            <img src={realIcon} className="w-4 h-4" />
            {priceUSDC.toLocaleString()} USDC
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-bold">
            <img src={solIcon} className="w-5 h-5" />
            <img src={realIcon} className="w-4 h-4" />
            {priceSOL.toFixed(2)} SOL
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
