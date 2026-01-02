import React from "react";
import Header from "./components/Header";
import PropertyCard from "./components/PropertyCard";

const properties = [
  { image: "/rim-apartment.jpg", title: "Rome Apartment", location: "Rome, Italy", priceUSDC: 350_000, priceSOL: 8 },
  { image: "/miami-house.jpg", title: "Miami House", location: "Miami, FL", priceUSDC: 1_200_000, priceSOL: 28 },
  { image: "/dubai-apartment.jpg", title: "Dubai Apartment", location: "Dubai, UAE", priceUSDC: 900_000, priceSOL: 21 },
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white px-4">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((p, idx) => (
          <PropertyCard
            key={idx}
            image={p.image}
            title={p.title}
            location={p.location}
            priceUSDC={p.priceUSDC}
            priceSOL={p.priceSOL}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
