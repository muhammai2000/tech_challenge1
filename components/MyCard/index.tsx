import { Paper, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function MyCard() {
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Paper
      elevation={5}
      style={{
        marginTop: 50,
        padding: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src="/DataPassportsLogo.svg" height="100" width="300" />
      <Box>
        {/* Start here */}
      </Box>
    </Paper>
  );
}
