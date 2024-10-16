/* eslint-disable no-unused-vars */
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Logo from "../assets/ikinciyeni-logo.svg";
import Logo2 from "../assets/anadolugrubu.png";

const Navbar = () => {
  return (
    <AppBar className="NavBar" position="static" sx={{ background: "#FFFFFF" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "210px", height: "72px", paddingRight: "20px" }}
          />
          <img
            src={Logo2}
            alt="logo"
            style={{ width: "92px", height: "72px" }}
          />
        </div>

        <Typography
          sx={{ color: "#536259", marginRight: "15px", fontWeight: "bold" }}
        >
          <Button variant="text" color="inherit">
            Açık Artırma
          </Button>
          <Button sx={{ color: "#00BC70", borderBottom: "5px solid green" }}>
            Araç Al
          </Button>
          <Button color="inherit">Araç Sat</Button>
          <Button color="inherit">Filonu Sat</Button>
          <Button color="inherit">Ekspertiz Al</Button>
          <Button color="inherit">Lojistik Al</Button>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: 10, marginLeft: "20px" }}
          >
            Giriş Yap
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
