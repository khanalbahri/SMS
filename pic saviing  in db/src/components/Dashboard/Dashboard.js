import { React, useState, useEffect } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Avatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './NavbarItems';
import useStyles from "./Style";
import Student from "../Student/Student.js";
import Teacher from "../Teacher/Teacher.js";
import Home from "./Home";
import { Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGOUT } from '../../constants/actionType';
import decode from "jwt-decode";
import {useSelector} from "react-redux";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Typography component={Link} to="/" color="inherit" href="khanhatela.pythonanywhere.com">
                School managemnt System by KHAN-ALBAHRI
            </Typography>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Dashboard() {
    const students = useSelector((state)=> state.students);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutFunc = () => {
        dispatch({ type: LOGOUT });
        setUser(null);
        history.push("/authentication");
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logoutFunc();
            }
        }
        if (user === null) {
            history.push("/authentication");
        }

    }, [dispatch, user, history,logoutFunc])

    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    // useEffect(() => {
    //     const token = user?.token;

    //     if(token){
    //         const decodedToken = decode(token);
    //         if(decodedToken * 1000 < new Date().getTime()){
    //             logoutFunc();
    //         }
    //     }
    //     // setUser(JSON.parse(localStorage.getItem("profile")));
    //     if(user === null){
    //         history.push("/authentication");
    //     }
    // }, [user])


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Avatar alt="user Image" src={user?.result.userImage}>{user?.result?.userName?.charAt(0)}</Avatar>
                    <Typography component={Link} to="/" style={{ textDecoration: "none", marginLeft: "8px", marginRight: "8px" }} variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <Typography component="animateMotion" variant="h6">
                        Logged in as: <span style={{color:"yellow"}}>{user?.result?.userName}</span>
                    </Typography>
                    <span>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Typography onClick={logoutFunc} style={{ textDecoration: "none", marginLeft: "8px", marginRight: "8px" }} component={Link} to="/authentication" variant="h6" color="inherit" noWrap className={classes.title}>
                            Logout
                        </Typography>
                    </span>
                </Toolbar>
            </AppBar>
            <Drawer
                onMouseOver={handleDrawerOpen}
                onMouseLeave={handleDrawerClose}
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    {/* <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton> */}
                    <Avatar alt="user Image" src={user?.result?.userImage}>{user?.result?.userName?.charAt(0)}</Avatar>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />


                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/student" component={Student} />
                    <Route path="/teacher" component={Teacher} />
                </Switch>


                <Box pt={4}>
                    <Copyright />
                </Box>

            </main>
        </div>
    );
}
