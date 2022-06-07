import React from "react";
import { useState, useEffect } from "react";
import { Paper, Typography, Button } from "@mui/material";
import { If, Then, Else, When, Unless, Switch, Case, Default } from "react-if";
import { count } from "console";
function Sumary_board(data: any) {
  const [graph_data, setGraph_data] = useState({ ...data });
  const [sumary_data, setSumary_data] = useState(null);
  const [show, setshow] = useState(false);
  const handle_show = () => {
    setshow(!show);
  };
  const result = graph_data.data.data.reduce((acc: any, cur: any) => {
    const key = cur.coin_pair;

    if (!acc[key]) {
      acc[key] = {
        buy: cur.buy,
        amount: cur.amount,
        count: 1,
      };
    } else {
      acc[key].buy += cur.buy;
      acc[key].amount += cur.amount;
      acc[key].count += 1;
    }
    return acc;
  }, {});
const arrays:any = [];
for (const key in result) {
  arrays.push({
    coin_pair: key,
    buy: result[key].buy,
    amount: result[key].amount,
  });}
  useEffect(() => {
    setGraph_data({ ...data, result });
    setSumary_data(arrays);
    console.log(sumary_data);
    console.log(sumary_data);
    

    console.log("Set state success");
  }, []);
  if (show === false) {
    return (
      <div>
        <Paper sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "Courier Prime",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Summary Board
          </Typography>
          <Button onClick={handle_show}>Show</Button>
        </Paper>
      </div>
    );
  } else {
    return (
      <div>
        <Paper sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "Courier Prime",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Summary Board
          </Typography>
          <Button onClick={handle_show}>Hide</Button>
          {sumary_data.map((item: any) => {
            return (
              <div>
                <Typography>
                  {item.coin_pair} : {item.buy}
                </Typography>
              </div>
            );

          }
          )}
        </Paper>
      </div>
    );
  }
}

export default Sumary_board;
