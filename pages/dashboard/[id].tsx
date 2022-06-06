import React from "react";
import {useState, useEffect} from "react";
import Navbar from "../../components/navbar/Navbar";
import type { Props } from "../../components/navbar/Navbar";
import type {DATA} from "../../components/graph/type";
import {InferGetStaticPropsType} from "next";
import { Grid } from '@mui/material';
import {supabase} from "../../components/login/supabaseClient";
import Graph_routine from "../../components/graph/Graph_routine";
function id({coin,graph_data}:InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Navbar coin={coin} />
      <Grid container spacing={3}>
        <Grid item xs={12} md ={6} lg={6} sx={{marginTop:"10vh"}}>
          <Graph_routine data={graph_data}/>
          </Grid>
        </Grid>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://api.bitkub.com/api/market/symbols");
  const data:Props = await res.json();
  const graph_data= await supabase.from<DATA>("Historys").select("buy,created_at,coin_pair,amount");
  

  return {
    props: {
      coin: data,
      graph_data:graph_data
    },
    
  };
}
export default id;
