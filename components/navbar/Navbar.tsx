import React from "react";
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
} from "@mui/material";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
function Navbar() {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#212121", height: "85px" }}
      >
        <Toolbar sx={{ marginTop: 1 }}>
          <Button
            className="Button-add"
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
        open={false}
        onClose={() => {}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add new history"}</DialogTitle>
        <DialogContent>
          <FormControl>
            <Select label="coin"></Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {}} color="primary">
            Disagree
          </Button>
          <Button onClick={() => {}} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Navbar;
