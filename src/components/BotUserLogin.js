import { Alert, Button, Card, IconButton, InputAdornment, Snackbar, Stack, TextField } from '@mui/material';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import React, { useState } from 'react'

export default function BotUserLogin() {

    const [snackBar, setSnackBar] = useState({
        show: false,
        snackBarMessage: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleDetails = () => {

    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);


    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();


    };

    const handleLoginOnClick = () => {

    };




    return (
        <div className="d-flex align-items-center justify-content-center align-middle" style={{ height: "100vh", backgroundColor: "aliceblue" }}>
            <Card style={{ height: "auto", width: "21%", padding: "20px", boxShadow: "0px 9px 20px rgba(13, 38, 76, 0.19)", borderRadius: "18px" }}>
                <div className="text-center m-1 font-weight-bold " style={{ fontSize: "22px", color: "#1e3a8a", fontFamily: "'Ubuntu', sans-serif" }}>
                    <div className="text-center" style={{ margin: "auto", width: "100%", padding: "4px" }}>
                        Login
                    </div>
                </div>

                <div className="text-center" style={{ margin: "auto", width: "100%", padding: "4px" }}>
                    <Stack spacing={3}>
                        <div className="mt-4">
                            <TextField fullWidth label="Username" name="user_email" size="medium" onChange={handleDetails} />
                        </div>

                        {/* <div className="mt-4">
                    <TextField fullWidth label="Phone Number" name="phone_no" size="medium" onChange={handleDetails} />
                </div> */}

                        <TextField
                            className="mb-3"
                            name="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton style={{ fontSize: "20px" }} aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" size="large">
                                            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            onChange={handleDetails}
                        />
                    </Stack>

                    <div className="mt-4">
                        <Button style={{ width: "90%", height: "28%" }} variant="contained" className="mb-3" onClick={handleLoginOnClick}>
                            LOGIN
                        </Button>
                    </div>
                </div>
            </Card>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={snackBar.show}
                autoHideDuration={3000}
                onClose={() => {
                    setSnackBar({ show: false, snackBarMessage: "" });
                }}
            >
                <Alert severity="error">{snackBar.snackBarMessage}</Alert>
            </Snackbar>
        </div>
    )
}