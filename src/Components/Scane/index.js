/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import useScanDetection from "use-scan-detection";

function ScaneMe() {
  const [snacbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [code, setCode] = useState("None");

  useScanDetection({
    onComplete: (code) => {
      console.log(code);
      setCode(code);
    },
  });

  return (
    <div>
      <h1>Scaned Code: {code}</h1>
    </div>
  );
}

export default ScaneMe;
