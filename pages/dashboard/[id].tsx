import React from "react";
import Navbar from "../../components/navbar/Navbar";
import type { Props } from "../../components/navbar/Navbar";
import {InferGetStaticPropsType} from "next";
import { Grid } from '@mui/material';
import Graph_routine from "../../components/graph/Graph_routine";
function id({coin}:InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Navbar coin={coin} />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Graph_routine/>
          </Grid>
        </Grid>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://api.bitkub.com/api/market/symbols");
  const data:Props = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
export default id;
