import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import type { Props } from "../../components/navbar/Navbar";
import type { DATA } from "../../components/graph/type";
import { InferGetStaticPropsType } from "next";
import { Grid } from "@mui/material";
import { supabase } from "../../components/login/supabaseClient";
import Graph_routine from "../../components/graph/Graph_routine";
import Graph_doughnut from "../../components/graph/Graph_doughnut";
import Sumary_board from "../../components/board/Sumary_board";
import Graph_profit from "../../components/graph/Graph_profit";
import Graph_greedy from "../../components/graph/Graph_greedy";
import Recap_table from "../../components/board/Recap_table";
function id({
  coin,
  graph_data,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const [supadata, setdata] = useState<null | any>(null);
  const get_supabase = async () => {
    const { data, error } = await supabase
      .from<any>("Historys")
      .select("buy,created_at,coin_pair,amount,history_id");
    setdata({ data: data });
  };
  useEffect(() => {
    get_supabase();

    console.log(supadata);
  }, []);
if(supadata == null) {
  return <div>Loading...</div>
}
else{
  return (
    <div>
      <Navbar coin={coin} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6} sx={{ marginTop: "10vh" }}>
          <Graph_routine data={graph_data} />
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ marginTop: "10vh" }}>
          <Graph_doughnut data={graph_data} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ marginTop: "10vh" }}>
          <Sumary_board data={supadata} />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Graph_profit />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Graph_greedy />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Recap_table data={supadata}/>
        </Grid>
      </Grid>
    </div>
  );
}
}
export async function getServerSideProps() {
  const res = await fetch("https://api.bitkub.com/api/market/symbols");
  const data: Props = await res.json();
  const graph_data = await supabase
    .from<DATA>("Historys")
    .select("buy,created_at,coin_pair,amount");

  return {
    props: {
      coin: data,
      graph_data: graph_data,
    },
  };
}
export default id;
