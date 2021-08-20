import {React,useEffect,useState} from "react";
import { CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import { useStyles } from "./styles.js";
import { mainListItems, secondaryListItems } from './listItems';
import Home from "./Home.js";
import { Route, Switch,Link } from "react-router-dom";
import CreateInvoice from "../CreateInvoice/CreateInvoice.js";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {getInvoices} from "../../actions/invoices.js";



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            www.CMS.com
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Dashboard() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const invoices = useSelector((state)=> state.invoices);
    console.log(invoices);
    useEffect(()=>{
        dispatch(getInvoices());
    },[dispatch]);
    
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

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
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography component={Link} to="/" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }} open={open}>
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
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
                    <Route path="/create" component={CreateInvoice}/>
                    <Route path="/allInvoices" />
                </Switch>

                <Box pt={4}>
                    <Copyright />
                </Box>
            </main>
        </div>
    );
}