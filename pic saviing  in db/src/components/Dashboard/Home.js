import {React,useEffect} from 'react';
import useStyles from './Style';
import {Container,Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import {useSelector} from "react-redux";

function Home() {
    const student = useSelector(state => state.students);
    useEffect(() => {
        const students = student.length;
    }, [student])
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* one item place */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={fixedHeightPaper}>
                        </Paper>
                    </Grid>
                    {/* sencond item place */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Typography variant="h6" color="primary">Total Students</Typography>
                            <Typography component="p" variant="h4">
                                {/* {{students}} */}
                            </Typography>
                            <Typography variant="h6" color="primary">Total Teachers</Typography>
                            <Typography component="p" variant="h4">
                                $3,024.00
                            </Typography>  
                        </Paper>
                    </Grid>
                    {/* Third item place */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home;
