import React from "react";
import { Drawer, Box, IconButton, Typography, Stack,TextField,Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { FiMenu, FiMoreVertical } from "react-icons/fi";
import {Add,Chevron} from "../../public/svg/icon/custom/Add";
function Drawers() {
  const [open, setOpen] = useState(false);
  const [anchor,setanchor] = useState(null);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handle_anchor = (event: any) => {
    setanchor(event.currentTarget);
  }
  return (
    <div>
      <IconButton
        sx={{ position: "absolute", right: "5%", top: 3 }}
        onClick={handleOpen}
      >
        <FiMenu color="white" size={40} />
      </IconButton>
      <Drawer anchor="right" open={open}  >
        <Box sx={{position: "absolute",top:"50%"}}>
          <IconButton onClick={handleOpen}>
          <Chevron />

          </IconButton>
          
        </Box>
        <Box width="400px" role="presentation" textAlign="center" height="100vh" sx={{backgroundColor:"#F4BBBB"}}>
          <Box sx={{ textAlign: "center", fontSize: "2rem" }}>
            <Stack direction="row">
              <Box sx={{marginTop:3,marginLeft:3}}>
                <IconButton>
                <Add/>

                </IconButton>
                
              </Box>
              <Box sx={{marginLeft:5}}>
                <h1>Group</h1>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Stack spacing={3} direction="column" justifyContent="center">
              <Box>
                <Stack direction="row" justifyContent="center" spacing={2}>
                  <TextField/>
                  <Tooltip title="setting">

                  <IconButton>
                    <FiMoreVertical />
                  </IconButton>
                  </Tooltip>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box></Box>
        </Box>
      </Drawer>
    </div>
  );
}

export default Drawers;
