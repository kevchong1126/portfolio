import React from "react";
import './index.scss';

/*Components*/
import Context from "./Context";
import Track from "./components/tracks/Track";

function App() {

  return (
    <Context>
      <Track />
    </Context>
  );
}

export default App;
