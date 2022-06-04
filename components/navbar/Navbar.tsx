import React from "react";
import { useState, useEffect,useRef } from "react";
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
  Menu,
  MenuItem,
  InputLabel,
  TextField,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import useSWR from "swr";
import { useSelector, useDispatch } from "react-redux";
import {
  update_coin_pair,
  update_buy,
  update_group,
  update_amount,
  update_price,
  update_userid,
} from "../../redux/slide";
import { RootState, AppDispatch } from "../../redux/store";
import {supabase} from "../login/supabaseClient";
import Drawers from "./Drawers";
import { useRouter } from 'next/router'
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
  const [users,setuser] = useState<any|null>({
    id:"noob"
  })
  const dispatch = useDispatch<AppDispatch>();
  const [setting, setSetting] = useState(false);
  const [anchorEl, setanchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [coin_pair, setCoinPair] = useState(coin);
  const [last_price, setLastPrice] = useState(0);
  const amount = useSelector((state: RootState) => state.save.amount);
  const buy = useSelector((state: RootState) => state.save.buy);
  useEffect(() => {
    const user = supabase.auth.user()
    setuser(user)
    console.log(users)
    dispatch(update_userid(users!.id))
    
  }
  ,[buy])
  
  const router = useRouter()
  const handle_logout = () =>{
    supabase.auth.signOut();
    router.push('/')
  }

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleSetting = () => {
    setSetting(!setting);
  };
  const handle_change_coinpair = (event: any) => {
    dispatch(update_coin_pair(event.target.value));
  };
  const handle_change_buy = (event: any) => {
    dispatch(update_buy(event.target.value));
  };
  const handle_el = (event: any) => {
    setanchorEl(event.currentTarget);
  };
  const handle_close = () => {
    setanchorEl(null);
  };
  const state_now = useSelector((state: RootState) => state.save);
  const sent_history = async () => {
    
    const {data,error} = await supabase.from("Historys").insert([{
      user_id:state_now.user_id,
      coin_pair:state_now.coin_pair,
      buy:state_now.buy,
      amount:state_now.amount,
      price_coin:state_now.price,
      group_name:state_now.group,
    }])
    console.log(error)
  }


  useEffect(() => {
    console.log(anchorEl)
  }, [anchorEl]);
  const el = Boolean(anchorEl);
  const coin_state = useSelector((state: RootState) => state.save.coin_pair);
  const fetch_price = () => {
    fetch(`https://api.bitkub.com/api/market/ticker?sym=${coin_state}`)
      .then((res) => res.json())
      .then((data) => {
        setLastPrice(data[`${coin_state}`].last);
      });
  };
  const save_state = useSelector<RootState>((state) => state.save.coin_pair);
  
  useEffect(() => {
    fetch_price();
    const price = last_price;
    const buys = buy;
    dispatch(update_amount(buys / price));
    dispatch(update_price(price));

  }, [coin_state, last_price, buy]);

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
         
            <IconButton
              sx={{ position: "absolute", right: "20%" }}
              
              onMouseOver={handle_el}
              
            >
              <Avatar />
              <Menu
                open={el}
                onClose={handle_close}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handle_logout}>
                  <Typography>Logout</Typography>
                </MenuItem>
              </Menu>
            </IconButton>
         

          <Drawers />
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{ backgroundColor: "#E3F2FB", borderStyle: "solid" }}>
          <DialogTitle id="alert-dialog-title">
            <Typography
              sx={{
                fontSize: "2rem",
                fontFamily: "Courier Prime",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Add new history
            </Typography>

            <Box sx={{ position: "relative", marginLeft: "90%" }}>
              <IconButton onClick={handleOpen}>
                <AiFillCloseCircle size={50} color="#FF5D5D" />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            <FormControl>
              <InputLabel sx={{ paddingTop: 2 }}>Coin pair</InputLabel>
              <Stack
                direction="row"
                spacing={3}
                sx={{ paddingTop: 2 }}
                alignItems="center"
              >
                <Select
                  sx={{ position: "relative", width: 200 }}
                  onChange={handle_change_coinpair}
                >
                  {coin_pair.result.map((item: cointype) => {
                    return (
                      <MenuItem value={item.symbol} key={item.id}>
                        {item.symbol}
                      </MenuItem>
                    );
                  })}
                </Select>
                <TextField label="Buy" onChange={handle_change_buy} />
              </Stack>
            </FormControl>
            <FormControl>
              <Stack direction="column" spacing={3}>
                <TextField
                  label="Amount"
                  sx={{ position: "relative", width: "90%", marginTop: 5 }}
                  value={amount}
                />
                <InputLabel sx={{ paddingTop: 12 }}>Group</InputLabel>

                <Select
                  label="Group"
                  sx={{
                    position: "relative",
                    width: "50%",
                    height: "50%",
                  }}
                ></Select>
              </Stack>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOpen} color="primary">
              close
            </Button>
            <Button onClick={sent_history} color="primary" autoFocus>
              Save
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}

export default Navbar;
export type { cointype, Props };
