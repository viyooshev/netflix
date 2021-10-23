import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
