import React from "react";
import Hero from "./components/Hero";
import { heroapi } from "./components/data/data";
import { popularSales } from "./components/data/data";
import NikeCard from "./components/NikeCard/NikeCard";
import ListCard from "./components/ListCard/ListCard";
import Sales from "./components/Utils/Sales/Sales";

function App() {
  return (
    <div className="App">
      <main>
        <Hero heroapi={heroapi}></Hero>
        <Sales endpoint={popularSales} />
      </main>
      <NikeCard popularSales={popularSales} />
      <ListCard />
    </div>
  );
}

export default App;
