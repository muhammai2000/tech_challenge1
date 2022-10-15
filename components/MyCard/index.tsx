import { Paper, Box, SpeedDialAction } from "@mui/material";
import { setDefaultResultOrder } from "dns";
import React, { useEffect, useState } from "react";
import seedData from "../../seedData.js"

export default function MyCard() {
  const {products} = seedData
  const [ product, setProducts] = useState({})
  console.log(product)
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then(response => response.json())
      .then(data =>  setProducts(data.products))
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
        <div className="datapass">
          {
          products.map((data) => {

            return (
              <div>
                <h4>{data.title}</h4>
                <p>{data.price}</p>
                <img src={`${data.thumbnail}`} alt="" />
                {data.thumbnail}
              </div>
            )
          })
        }
        </div>
         
      </Box>
    </Paper>

  );
}
