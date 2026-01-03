import React, { useState } from "react";
import USDCIcon from "../assets/usdc.png";
import SOLIcon from "../assets/sol.png";
import realIcon from "../assets/real.png";

interface Props {
  onBuySOL: (amount: string) => void;
  onBuyUSDC: (amount: string) => void;
  onClose: () => void;
  maxSupply: number;
  sold: number;
  price: string;
}

const BuyModal: React.FC<Props> = ({
  onBuySOL,
  onBuyUSDC,
  onClose,
  maxSupply,
  sold,
  price,
}) => {
  const [amount, setAmount] = useState("1");
  const percent = Math.min((sold / maxSupply) * 100, 100);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="bg-[#0b0b0b] p-6 rounded-xl max-w-md w-full border border-gray-700 shadow-xl">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-2">$REAL Presale</h2>
          <p className="text-gray-400 text-sm">Price: ${price}</p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mb-4">
          <span>{sold.toLocaleString()} / {maxSupply.toLocaleString()} $REAL sold</span>
        </div>

        {/* Input */}
        <input
          type="number"
          className="w-full p-3 rounded bg-black border border-gray-700 mb-4 text-white"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount of $REAL"
        />

        {/* Buy buttons */}
        <div className="flex flex-col gap-2 mb-4">
          {/* SOL button */}
          <button
            className="flex-1 flex items-center justify-center gap-2 p-3 rounded bg-teal-400 text-black font-bold hover:opacity-90"
            onClick={() => onBuySOL(amount)}
            title="REAL holders get discounted buy fees & fee rewards from platform fees"
          >
            <img src={SOLIcon} alt="SOL" className="w-5 h-5" />
            <img src={realIcon} alt="REAL" className="w-4 h-4" />
            Buy with SOL
          </button>
          <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
            <img src={realIcon} className="w-4 h-4" alt="REAL" />
            REAL holders: discounted buy fees & fee rewards
          </p>

          {/* USDC button */}
          <button
            className="flex-1 flex items-center justify-center gap-2 p-3 rounded bg-blue-500 text-white font-bold hover:bg-blue-600"
            onClick={() => onBuyUSDC(amount)}
            title="REAL holders get discounted buy fees & fee rewards from platform fees"
          >
            <img src={USDCIcon} alt="USDC" className="w-5 h-5" />
            <img src={realIcon} alt="REAL" className="w-4 h-4" />
            Buy with USDC
          </button>
          <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
            <img src={realIcon} className="w-4 h-4" alt="REAL" />
            REAL holders: discounted buy fees & fee rewards
          </p>
        </div>

        <button
          className="w-full p-3 rounded bg-gray-700 text-white hover:bg-gray-600"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyModal;
