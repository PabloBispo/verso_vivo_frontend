import React from "react";
import musicData from "./data/musicData.json";
import MusicAnalysis from "./components/MusicAnalysis";

function App() {
  return <MusicAnalysis music={musicData} />;
}

export default App;
