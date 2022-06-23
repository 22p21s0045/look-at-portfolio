import React from "react";
import { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import type { Greedy_group } from "./type";
import GaugeChart from "react-gauge-chart";

function Graph_greedy() {
  const [data, setdata] = useState<Greedy_group | null>(null);
  const getdata = async () => {
    const data = await fetch("https://api.alternative.me/fng/");
    const data_json = await data.json();
    setdata(data_json);
  };
  

  useEffect(() => {
    getdata();
    console.log(data);
  }, []);
  if (data == null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Paper sx={{ textAlign: "center" }}>
          <Typography sx={{ fontFamily: "Courier Prime", fontSize: "2rem" }}>
            Greedy meter
          </Typography>
          <GaugeChart
            nrOfLevels={3}
            percent={data.data[0].value / 100}
            colors={["#FF5F6D", "#B8F1B0"]}
            textColor={"#000"}
          />
          <Box sx={{ fontSize: "2.5rem" }}>
            {data.data[0].value_classification}
          </Box>
        </Paper>
      </div>
    );
  }
}

export default Graph_greedy;
