import React from 'react';
import clsx from "clsx";
import {useStyles} from "./styles.js";
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import {Container, Grid, Paper} from "@material-ui/core";

export default function Home() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Deposits />
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Orders />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
        </div>
    )
}



// export const FormAndTable = ()=>{
//     return (
//         <>
//         <Grow in>


//         </Grow>
//         </>
//     )
// }