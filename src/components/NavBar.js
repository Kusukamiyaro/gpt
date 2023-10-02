import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
// import { useTheme } from "@emotion/react";

const NavBar = () => {
  const theme = useTheme();
  const isloggedin = JSON.parse(localStorage.getItem("authToken"));
  const navigate = useNavigate;
  const handleLogout = async (e) => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout Successfully");
      navigate("/");
    } catch (e) {}
  };

  return (
    <Box
      width={"100%"}
      p="1rem 6%"
      textAlign={"center"}
      backgroundColor={theme.palette.background.alt}
      sx={{ boxShadow: 3, mb: 2, bgcolor: "teal", color: "whitesmoke" }}
    >
      <Typography variant="h1" color={"primary"} fontWeight={"bold"}>
        GPT Clone
      </Typography>
      {isloggedin ? (
        <Link href="/logout" p={1} onClick={handleLogout}>
          Logout
        </Link>
      ) : (
        <>
          <Link href="/register" p={1}>
            Sign Up
          </Link>
          <Link href="/login" p={1}>
            Sign In
          </Link>
        </>
      )}
    </Box>
  );
};

export default NavBar;
