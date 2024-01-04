import { Button, IconButton } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Logout } from "@mui/icons-material";
import LogoutConfirmationModal from '../modal/LogoutConfirmationModal';
import DashboardNavBar from './DashboardNavBar';


export default function BotPage() {
  const state = useSelector((store) => store.botsStore);
  const [logoutModal, setLogoutModal] = useState(false);
  console.log(state);
  const handleButtonClick = async () => {

    const billingUnitUserDetails = {
      unit_id: state.unitDetails.unit_id,
      type: "Execution",
    };

    console.log("billingUnitUserDetails--------", billingUnitUserDetails);

    try {
      const response = await axios.post("http://localhost:5000/application/billing", billingUnitUserDetails, 
      { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`, } });

      if (response.status === 200) {
        alert("Billing Details ");
      }
    } catch (error) {
      throw (error);
    }

  };

  const handelLogout = () => {
    setLogoutModal(true);
  };

  return (
    <>
      <DashboardNavBar/>
    <div className="mt-2" style={{ width: "100%", textAlign: "center" }}>
      Bots Application!
      <div>
        <IconButton>
          <Button onClick={handleButtonClick}>
            Click to simulate BOT execution
          </Button>
        </IconButton>
      </div>

      {/* <div>
        <IconButton onClick={() => { handelLogout() }}>
          <Logout />
        </IconButton>
      </div>
      {logoutModal === true && <LogoutConfirmationModal setLogoutModal={setLogoutModal} />} */}

    </div>
    </>
  );
};
