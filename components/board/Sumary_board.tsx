import React from "react";
import { useState, useEffect } from "react";
import { Paper, Typography, Button, Stack, Box, Tooltip } from "@mui/material";
import { If, Then, Else, When, Unless, Switch, Case, Default } from "react-if";
import { count } from "console";
import Image from "next/image";
function Sumary_board(data: any) {
  const [graph_data, setGraph_data] = useState({ ...data });
  const [sumary_data, setSumary_data] = useState<null | any>(null);
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
  const arrays: any = [];
  for (const key in result) {
    arrays.push({
      coin_pair: key,
      buy: result[key].buy,
      amount: result[key].amount,
    });
  }
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
        <Paper sx={{ textAlign: "center", background: "#FFCECE"}}>
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              columnGap: 4,
              rowGap: 3,
            }}
          >
            {sumary_data.map((item: any) => {
              return (
                <Tooltip title={`In investing ≈ ${item.buy} THB`}>
                  <Box
                    key={item.coin_pair}
                    sx={{
                      borderColor: "black",
                      borderStyle: "solid",
                      borderRadius: 5,
                      height: "100px",
                      width:"90%",
                      margin: "auto",
                      background:
                        "linear-gradient(180deg, rgba(249, 213, 167, 0.630208) 0%, rgba(252, 203, 182, 0.831496) 47.92%, #FFC3C3 88.02%);",
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="center"
                      spacing={2}
                      alignItems="center"
                      mt={3}
                    >
                      <Box>
                        <Image
                          src={`https://crypto-icon-api.herokuapp.com/api/icon/${item.coin_pair
                            .split("_")[1]
                            .toLowerCase()}`}
                          height={50}
                          width={50}
                        />
                      </Box>
                      <Typography
                        sx={{ fontFamily: "Courier Prime", fontSize: "1.5rem" }}
                      >
                        {Math.round(item.amount * 100000) / 100000}{" "}
                        {item.coin_pair.split("_")[1]}
                      </Typography>
                    </Stack>
                  </Box>
                </Tooltip>
              );
            })}
          </Box>
        </Paper>
      </div>
    );
  }
}

export default Sumary_board;
