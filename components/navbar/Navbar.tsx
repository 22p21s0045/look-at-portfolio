import React from "react";
import { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Box,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import useSWR from "swr";

interface cointype {
  id: number;
  info: string;
  symbol: string;
}
interface Props {
  error: number;
  result: Array<cointype>;
}
function Navbar({ coin }: any) {
  const [open, setOpen] = useState(false);
  const [coin_pair, setCoinPair] = useState(coin);
  const [save, setSave] = useState({
    symbol: "",
    amount: "",
    price: "",
  });
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#212121", height: "85px" }}
      >
        <Toolbar sx={{ marginTop: 1 }}>
          <Button
            className="Button-add"
            onClick={handleOpen}
            sx={{
              backgroundColor: "#F4BBBB",
              fontfamily: "Courier Prime",
            }}
          >
            <Image src="/svg/icon/navbar/add.svg" width="40" height="40" />
            <Box
              sx={{
                marginLeft: 1.5,
                color: "black",
              }}
            >
              <Typography
                sx={{ fontFamily: "Courier Prime", fontWeight: "bold" }}
              >
                add new
              </Typography>
            </Box>
          </Button>
          <Tooltip title="Account setting">
            <Avatar sx={{ position: "absolute", right: "20%" }} />
          </Tooltip>

          <IconButton sx={{ position: "absolute", right: "5%" }}>
            <FiMenu color="white" size={40} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={() => {}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add new history"}</DialogTitle>
        <DialogContent>
          <FormControl>
            <InputLabel sx={{ paddingTop: 2 }}>Coin pair</InputLabel>
            <Stack direction="row" spacing={3} sx={{ paddingTop: 2 }}>
              <Select sx={{ position: "relative", width: 200 }}>
                {coin_pair.result.map((item: cointype) => {
                  return <MenuItem value={item.symbol} key={item.id}>{item.symbol}</MenuItem>;
                })}
              </Select>
              <TextField label="Buy" />
            </Stack>
            </FormControl>
            <FormControl>
            <Stack direction="row" spacing={3}>
              <TextField
                label="Amount"
                sx={{ position: "relative", width: "45%", marginTop: 5 }}
              />
              

              <Select
              label="Group"
                sx={{
                  position: "relative",
                  width: "50%",
                  height: "50%",
                  marginTop: 10,
                }}
              ></Select>
            </Stack>
            </FormControl>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {}} color="primary">
            close
          </Button>
          <Button onClick={() => {}} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default Navbar;
export type { cointype, Props };
