import { React } from 'react';
import useStyles from './Style';
import { Avatar, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import "./style.css";
import { URL } from '../../constants/actionType';
// import {useSelector} from "react-redux";

function Home({ user }) {
    // const student = useSelector(state => state.students);

    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={`${classes.container}`}>
                <Grid container spacing={3} >
                    {/* one item place */}
                    <Grid item xs={12} md={4} lg={2} className="Home__userGrid">
                        <Avatar src={`${URL}${user?.result.userImage}`} className="Home__userImage" alt="User Profile" />
                        <div>
                            <h3>Logged In as : {user?.result?.userName}</h3>
                            <h4>Email: {user?.result?.email}</h4>
                        </div>
                    </Grid>
                    {/* sencond item place */}
                    <Grid item xs={12} md={8} lg={9} className="Home__gridItem">

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home;
