import React from "react";
import { AppBar, Button, Toolbar, Box, Typography } from "@mui/material";
import Image from "next/image";

function Navbar() {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#212121", height: "85px" }}
      >
        <Toolbar sx={{ marginTop: 1 }}>
          <Button
          className = "Button-add"
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
              <Typography sx={{ fontFamily: "Courier Prime",fontWeight:"bold"}}>
                add new
              </Typography>
            </Box>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
