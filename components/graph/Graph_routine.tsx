import React from "react";
import { useState,useEffect } from "react";
import { Paper } from "@mui/material";
import { Line } from "react-chartjs-2";
import { supabase } from "../../components/login/supabaseClient";
import type {DATA} from "./type"
function Graph_routine() {
  const [data, setdata] = useState <Array<DATA>|null>(null);
  const getdata = async () => {
    const { data, error } = await supabase.from<DATA>("Historys").select("buy,created_at");
    setdata(data);
  };
useEffect(()=>{
  getdata();
  console.log(data);
}
,[]);
  return (
    <div>
      <Paper></Paper>
    </div>
  );
}

export default Graph_routine;
