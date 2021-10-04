import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const buttons = [
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
];

export default function Buttons({ handleClick, clear, backSpace, calculate }) {
  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gridAutoRows: "minmax(60px,auto)",
          "& > *": {
            m: 0.5,
          },
        }}
      >
        <Button
          sx={{
            backgroundColor: "red",
            fontSize: "24px",
            gridColumn: "1/3",
          }}
          onClick={() => clear()}
          variant="contained"
          aria-label="clearButton"
        >
          Clear
        </Button>
        <Button
          sx={{
            backgroundColor: "red",
            fontSize: "24px",
          }}
          onClick={() => backSpace()}
          variant="contained"
          aria-label="backspaceButton"
        >
          C
        </Button>
        {buttons.map((button, index) => {
          return (
            <Button
              sx={{
                fontSize: "24px",
              }}
              onClick={() => handleClick(button)}
              variant="contained"
              key={index}
              aria-label="calculatorButton"
            >
              {button}
            </Button>
          );
        })}
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            fontSize: "24px",
            gridColumn: "3/5",
          }}
          onClick={() => calculate()}
          variant="contained"
          aria-label="calculatorButton"
        >
          =
        </Button>
      </Box>
    </Box>
  );
}
