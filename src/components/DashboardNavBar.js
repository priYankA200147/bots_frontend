import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AndroidIcon from "@mui/icons-material/Android";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

export default function DashboardNavBar() {
  const navigate = useNavigate();
  const state = useSelector((store) => store.dashboardStore);


  const handlePyramidOnClick = () => {
    window.open("/pyramid", "_blank");
  };

  const handleBotOnClick = async() => {
    
    try {
      const loginDetails={
        user_email: sessionStorage.getItem("user_email"),
        password : sessionStorage.getItem("password"),
      }

      
      console.log("loginDetails---",loginDetails);
      const response = await axios.post("http://localhost:5000/application/login",loginDetails);
      // dispatch(setUnitDetails(response.data.data.data._id));
      if(response.status === 200){
        console.log(response,"----------");
        window.open("/bots", "_blank");

      }
      
  } catch (error) {
      console.log(error);
      alert(error.response.data.message.message);
  }

  };

  const handleBillingOnClick = () => {
    window.open("/billing", "_blank");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
            Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Pyramid App">
              <IconButton color="inherit" onClick={handlePyramidOnClick}>
                <Badge>
                  <AccountTreeIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="BOT App">
              <IconButton color="inherit" onClick={handleBotOnClick}>
                <Badge>
                  <AndroidIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Billing App" onClick={handleBillingOnClick}>
              <IconButton size="large" edge="end" color="inherit">
                <CurrencyRupeeIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
