import React from "react";
import { useState } from "react";
import { supabase } from "../login/supabaseClient";
import { Stack, Grid, Button, Box } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import Image from "next/image";

function Login() {
  async function signInWithGithub() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "github",
    });
  }
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "white", height: "100vh" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            backgroundColor: "pink",
            borderRadius: "5px 5px 0px 0px",
            borderStyle: "solid",
          }}
        >
          <Stack spacing={2} direction="column" alignItems="center">
            <h1>Log in</h1>
            <GoogleLoginButton
              onClick={() => alert("Hello")}
              style={{
                width: "45%",
                fontFamily: "Courier Prime",
                fontweight: "bolder",
              }}
            />
            <GithubLoginButton
              onClick={() => alert("Hello")}
              style={{
                width: "45%",
                marginTop: 15,
                fontFamily: "Courier Prime",
              }}
            />
            <Box sx={{ paddingTop: 5 }}>
              <Image src="/svg/icon/icon-lock.svg" width={50} height={50} />
            </Box>
          </Stack>
          <div style={{paddingBottom:0,position:"relative"}}>
          <img src="/svg/icon/wave2.svg" style={{objectFit:"cover",paddingBottom:0,marginBottom:-6}} />

          </div>
          
        </Grid>

        
      </Grid>
    </div>
  );
}

export default Login;
