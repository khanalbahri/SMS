import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { React, useState } from 'react';
import useStyles from './Styles';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from './Input';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, signUp } from '../../actions/auth';
import FileBase from "react-file-base64";

const initialState = { userName: "", email: "", password: "", confirmPassword: "", userImage: "" }

function Auth() {
    const [authForm, setAuthForm] = useState(initialState);
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();


    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        console.log(authForm);
        if (isSignUp) {
            dispatch(signUp(authForm, history));
        }
        else {
            dispatch(signIn(authForm, history))
        }
    }

    const handleChange = (e) => {
        setAuthForm({ ...authForm, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setAuthForm(initialState);
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }
    return (
        <div className={classes.body}>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit} >
                        <Grid container spacing={2}>
                            {isSignUp && (
                                <>
                                    <Input name="userName" label="Username" handleChange={handleChange} autoFocus />
                                </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            {isSignUp && (
                                <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            )}
                            {isSignUp && (
                                <div className={classes.fileInput}>
                                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setAuthForm({ ...authForm, userImage: base64 })} />
                                </div>
                            )}
                        </Grid>
                        <Button type="submit" color="primary" fullWidth variant="contained" className={classes.submit}>
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Button onClick={switchMode} fullWidth variant="contained">
                                    {isSignUp ? "Already have an account? Sign In" : "Don't have an account ? Sign up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Auth;
