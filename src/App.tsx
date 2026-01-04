import miamiImg from "./assets/miami-house.jpg";
import romeImg from "./assets/rome-apartment.jpg";
import dubaiImg from "./assets/dubai-apartment.jpg";
import React from "react";
import Header from "./components/Header";
import PropertyCard from "./components/PropertyCard";
import Footer from "./components/Footer"; // ⬅️ dodali footer

const properties = [
  {
    image: romeImg,
    title: "Rome Apartment",
    location: "Rome, Italy",
    priceUSDC: 350_000,
    priceSOL: 8,
  },
  {
    image: miamiImg,
    title: "Miami House",
    location: "Miami, FL",
    priceUSDC: 1_200_000,
    priceSOL: 28,
  },
  {
    image: dubaiImg,
    title: "Dubai Apartment",
    location: "Dubai, UAE",
    priceUSDC: 900_000,
    priceSOL: 21,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white px-4 flex flex-col">
      <Header />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
      </main>

      <Footer /> {/* ⬅️ Footer pozvan */}
    </div>
  );
}

export default App;
