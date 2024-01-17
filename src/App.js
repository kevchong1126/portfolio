import React from "react";
import './index.scss';

/*Components*/
import Context from "./Context";
import Navbar from "./components/Navbar/Navbar";
import Track from "./components/tracks/Track";

function App() {

  return (
    <Context>
      <Navbar />
      <Track />
    </Context>
  );
}

export default App;
