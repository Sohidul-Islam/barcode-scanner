/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import Barcode from "react-barcode";
import ScaneMe from "./Components/Scane";

function App() {
  const [data, setData] = useState("Not Found");
  return (
    <div className="App">
      <p>Barcode scanner</p>
      {/* 
      https://github.com/lindell/JsBarcode/wiki/Options
      https://www.npmjs.com/package/react-barcode
      */}
      <Barcode value="1235456" />,<p>{data}</p>
      <ScaneMe />
    </div>
  );
}

export default App;
