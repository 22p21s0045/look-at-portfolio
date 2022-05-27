import React from "react";
import { useState } from "react";
import { supabase } from "../login/supabaseClient";
import { Stack, Grid,Button } from "@mui/material";
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
        sx={{ backgroundColor: "black", width: "100%", height: "100%" }}
      >
        <Grid item xs={12} lg={4} sx={{ backgroundColor: "pink" }}>
          <Stack spacing={2} direction="column">
            <h1>Log in</h1>
            <Button onClick={signInWithGithub}>
              
              Sign in with Google
              </Button>
            <Button onClick={signInWithGithub}>Sign in with Github</Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
