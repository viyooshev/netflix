import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {Originals,action, comedy, horror} from './urls'
import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner/>
      <RowPost url={Originals} title = 'Netflix Originals'/>
      <RowPost url={action} title ='Action' isSmall  />
      <RowPost url={comedy} title ='Comedy' isSmall  />
      <RowPost url={horror} title ='Horror' isSmall  />
    </div>
  );
}

export default App;
