import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e));
  };

  const clear = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult(err);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="App"
    >
      <Display result={result} />
      <Buttons
        handleClick={handleClick}
        clear={clear}
        backSpace={backSpace}
        calculate={calculate}
      />
    </Box>
  );
}

export default App;
