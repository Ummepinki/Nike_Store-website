import React from "react";
import Hero from "./components/Hero";
import { heroapi } from "./components/data/data";
function App() {
  return (
    <div className="App">
      <main>
        <Hero heroapi={heroapi}></Hero>
      </main>
    </div>
  );
}

export default App;
