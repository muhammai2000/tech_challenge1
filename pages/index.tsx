import Head from "next/head";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyCard from "../components/MyCard";
import React from "react";

export default function Home() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        padding: "0 0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Head>
        <title>DataPassports Technical Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 style={{ color: "#0070f3", textDecoration: "none" }}>
        DataPassports Technical Challenge
      </h1>
      <h2>Enter Name Here</h2>
      <Accordion style={{ width: 600 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Task
        </AccordionSummary>
        <AccordionDetails>
          We are provided with product data in JSON format.
          <br />

          The properties we will be focused on are the following:
          <ul>
            <li> title - name of product</li>
            <li> price - price of product</li>
            <li> thumbnail - url image of products</li>
          </ul>
          Please display all products with their title, price, and thumbnail
          image.
        </AccordionDetails>
      </Accordion>
      <MyCard />
    </Box>
  );
}
