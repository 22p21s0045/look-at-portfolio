import React from "react";
import { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import axios from "axios";
import { supabase } from "../login/supabaseClient";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
function Graph_profit(data: any) {
  const [time, set_time] = useState<null | any>(new Date());

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
    set_time(new Date());
    lastest_price_data();
    supabase_sum();
  }, []);
  supabase_sum();
  if (lastest.sum - supasum < 0) {
    return (
      <div>
        <Paper
          sx={{
            backgroundColor: "#FAD4D4",
            fontFamily: "Courier Prime",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Courier Prime",
              fontSize: "2rem",
              paddingTop: "5%",
              position: "relative",
            }}
          >
            Profit
          </Typography>
          <Typography
            sx={{ textAlign: "center", marginTop: 5, fontSize: "3rem",fontFamily:"Courier Prime" }}
          >
            
            <CountUp end={Math.round(lastest.sum - supasum)} />
          </Typography>
          <Box>
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 1],
                  repeat: Infinity,
                },
              }}
            >
              <AiOutlineCaretDown
                size={50}
                style={{ position: "relative", left: "47%" }}
              />
            </motion.div>
          </Box>
          <Box sx={{ left: "2%", position: "relative" }}>
            {time.toLocaleString()}
          </Box>
        </Paper>
      </div>
    );
  } else {
    return (
      <div>
        <Paper sx={{ backgroundColor: "#E3FCBF" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Courier Prime",
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
            
            <CountUp end={Math.round(lastest.sum - supasum)} />
          </Typography>
          <Box>
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 1],
                  repeat: Infinity,
                },
              }}
            >
              <AiFillCaretUp
                size={50}
                style={{ position: "relative", left: "47%" }}
              />
            </motion.div>
          </Box>
        </Paper>
      </div>
    );
  }
}

export default Graph_profit;
