import { Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';


export default function LogoutConfirmationModal({ setLogoutModal }) {
    const [onClickSubmit, setOnClickSubmit] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        setOnClickSubmit(true);
        setTimeout(() => {
            navigate("/");
          }, 1000);
      
    }

    return (
        <Modal
            centered
            backdrop="static"
            show={true}
        >
            <Modal.Header>
                <Modal.Title style={{ fontSize: "18px" }}>Do you want to Logout?</Modal.Title>
            </Modal.Header>
            {/* <Modal.Body></Modal.Body> */}
            <Modal.Footer>
                <Button className="btn-color m-2" endIcon={onClickSubmit && <CircularProgress color="inherit" size={20} />} variant="contained" size="small" onClick={() => { handleLogout() }}>
                    Logout

                </Button>
                <Button
                    className="btn-color"
                    size="small"
                    onClick={() => {
                        setLogoutModal(false);
                    }}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
