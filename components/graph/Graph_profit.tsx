import React from "react";
import { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import axios from "axios";
import { supabase } from "../login/supabaseClient";
import { AiOutlineCaretDown } from "react-icons/ai";
function Graph_profit(data: any) {
  const [lastest, setlastest] = useState<any>(0);
  const [supasum, setsum] = useState<any>(0);
  const supabase_sum = async () => {
    const { data, error } = await supabase.rpc("get_sum_buy");

    setsum(data);
  };
  const lastest_price_data = () => {
    const data = fetch(`${process.env.NEXT_PUBLIC_LOCALHOST}/api/getprice`)
      .then((res) => res.json())
      .then((data) => {
        setlastest(data);
      });
  };
  useEffect(() => {
    lastest_price_data();
    supabase_sum();
  }, []);
  supabase_sum();
  if (lastest.sum - supasum < 0) {
    return (
      <div>
        <Paper
          sx={{
            backgroundColor: "#FF8C8C",
            fontfamily: "Courier Prime",
            
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontfamily: "Courier Prime",
              fontSize: "2rem",
              paddingTop: "10%",
              position: "relative",
            }}
          >
            Profit
          </Typography>
          <Typography
            sx={{ textAlign: "center", marginTop: 5, fontSize: "3rem" }}
          >
            {Math.round(lastest.sum - supasum)}
          </Typography>
          <Box sx={{left:"50%",position:"relative"}}>
            <AiOutlineCaretDown size={50}/>
          </Box>
        </Paper>
      </div>
    );
  } else {
    return (
      <div>
        <Paper sx={{ backgroundColor: "#9FC088" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontfamily: "Courier Prime",
              fontSize: "2rem",
              paddingTop: "10%",
              position: "relative",
            }}
          >
            Profit
          </Typography>
          <Typography
            sx={{ textAlign: "center", marginTop: 5, fontSize: "3rem" }}
          >
            {Math.round(lastest.sum - supasum)}
          </Typography>
          
        </Paper>
      </div>
    );
  }
}

export default Graph_profit;
