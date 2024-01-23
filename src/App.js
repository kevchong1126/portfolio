import React from "react";
import './index.scss';

/*Components*/
import Context from "./Context";
import Navbar from "./components/Navbar/Navbar";
import Track from "./components/tracks/Track";
import Mentions from "./components/Footer/Mentions";

function App() {

  return (
    <Context>
      <Navbar />
      <Track />
      <Mentions />
    </Context>
  );
}

export default App;
