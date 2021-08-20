import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ContactsIcon from '@material-ui/icons/Contacts';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
    tabitems: {
        display: "flex",
        justifyContent: "center",
    }
});

export default function IconLabelTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.tabitems} >
                    <Paper square className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="icon label tabs example"
                        >
                            <Tab icon={<PeopleIcon />} component={Link} to="/student" label="All Students" />
                            <Tab icon={<PersonIcon />} component={Link} to="/student/addStudent/:slug" label="Add Student" />
                            <Tab icon={<PersonPinIcon />} component={Link} to="/student/withdrawnStudents" label="Old Students" />
                            <Tab icon={<ContactsIcon />} component={Link} to="/student/studentDetails/:slug" label="Details" />
                        </Tabs>
                    </Paper>
                </Grid>
            </Grid >
        </div>
    );
}