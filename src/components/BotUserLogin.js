import { Alert, Button, Card, IconButton, InputAdornment, Snackbar, Stack, TextField } from '@mui/material';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUnitDetails } from '../store/BotsSlice';

export default function BotUserLogin() {
    const dispatch= useDispatch();

    const navigate = useNavigate();
    const [snackBar, setSnackBar] = useState({
        show: false,
        snackBarMessage: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const [loginDetails, setLoginDetails] = useState({
        user_email: "",
        password: "",
        app_id:"65896514a3f675cfcaf96740",
    });

    const handleDetails = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case "user_email":
                {
                    // dispatch(setUserDetails({ user_email: value, name: name }));
                    setLoginDetails({ ...loginDetails, user_email: value });
                }
                break;

            case "password":
                // dispatch(setUserDetails({ password: value, name: name }));
                setLoginDetails({ ...loginDetails, password: value });
                break;

            default:
                break;
        }

    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);

    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();


    };

    const handleLoginOnClick = async() => {
        try {
            console.log("loginDetails---",loginDetails);
            const response = await axios.post("http://localhost:5000/application/login",loginDetails);
            console.log(response,"----------");
            sessionStorage.setItem("accessToken", response.data.data.data.token);
            dispatch(setUnitDetails(response.data.data.data._id));
            navigate("bot-page");
            
        } catch (error) {
            console.log(error);
            alert(error.response.data.message.message);
        }
    };




    return (
        <div className="d-flex align-items-center justify-content-center align-middle" style={{ height: "100vh", backgroundColor: "aliceblue" }}>
            <Card style={{ height: "auto", width: "21%", padding: "20px", boxShadow: "0px 9px 20px rgba(13, 38, 76, 0.19)", borderRadius: "18px" }}>
                <div className="text-center m-1 font-weight-bold " style={{ fontSize: "22px", color: "#1e3a8a", fontFamily: "'Ubuntu', sans-serif" }}>
                    <div className="text-center" style={{ margin: "auto", width: "100%", padding: "4px" }}>
                        Bot Login
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
                    <a
        href=""
        target="_blank"
        rel="noreferrer"
      >
                        <Button style={{ width: "90%", height: "28%" }} variant="contained" className="mb-3" onClick={handleLoginOnClick}>
                            LOGIN
                        </Button>
      </a>
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
