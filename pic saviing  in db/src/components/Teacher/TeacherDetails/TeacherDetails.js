import { Button, Card, CardActions, CardMedia, CircularProgress, Container, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import useStyles from './Styles';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from 'react-router-dom';
import { deleteTeacher } from '../../../actions/teacher';

function TeacherDetalis({ match }) {
    const teacherId = match.params.slug;
    const teacher = useSelector((state) => state.teachers.find((teacher) => teacher._id === teacherId));
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleTeacherDelete = (id) => {
        const approve = window.confirm(`Are you sure you want to delete the data of ${teacher.teacherName}`);
        if (approve) {
            try {
                dispatch(deleteTeacher(id));
                history.push("/teacher");
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleTeacherUpdate = (id) => {
        history.push(`/teacher/addTeacher/${id}`);
    }

    return (
        !teacher ? <CircularProgress /> : (
            <div>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper style={{ borderRadius: "10%" }}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={teacher.teacherImage}
                                        title={teacher.teacherName}
                                    />
                                    <CardActions>
                                        <Button size="small" color="secondary" onClick={() => handleTeacherDelete(teacher._id)}>
                                            <DeleteIcon /> &nbsp; Delete
                                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button size="small" color="primary" onClick={()=> handleTeacherUpdate(teacher._id)}>
                                            <EditIcon />&nbsp; Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} lg={9}>
                            {/* <Paper> */}
                            <div className={classes.teacherData}>
                                <Typography variant="h6"><b>Name: </b>&nbsp;&nbsp;</Typography>
                                <Typography variant="h6">{teacher.teacherName}</Typography>
                            </div>
                            <div className={classes.teacherData}>
                                <Typography variant="h6"><b>Qualification: </b>&nbsp;&nbsp;</Typography>
                                <Typography variant="h6">{teacher.qualification}</Typography>
                            </div>
                            <div className={classes.teacherData}>
                                <Typography variant="h6"><b>Role: </b>&nbsp;&nbsp;</Typography>
                                <Typography variant="h6">{teacher.role}</Typography>
                            </div>
                            <div className={classes.teacherData}>
                                <Typography variant="h6"><b>Phone Number: </b>&nbsp;&nbsp;</Typography>
                                <Typography variant="h6">{teacher.phoneNumber}</Typography>
                            </div>
                            <div className={classes.teacherData}>
                                <Typography variant="h6"><b>Email: </b>&nbsp;&nbsp;</Typography>
                                <Typography variant="h6">{teacher.email}</Typography>
                            </div>
                            <div className={classes.teacherData}>
                                <Typography variant="h6"><b>Address: </b>&nbsp;&nbsp;</Typography>
                                <Typography variant="h6">{teacher.address}</Typography>
                            </div>
                            <div className={classes.teacherData}>
                                <Typography variant="h6"><b>Other Info: </b>&nbsp;&nbsp;</Typography>
                                <Typography variant="h6">{teacher.otherInfo === "" ? "No Other Info" : teacher.otherInfo}</Typography>
                            </div>
                            <div className={classes.teacherData}>
                                <Typography variant="h6"><b>Status: </b>&nbsp;&nbsp;</Typography>
                                <Typography variant="h6">{teacher.status === 0 ? "Deactive" : "Active"}</Typography>
                            </div>
                            <div className={classes.teacherData}>
                                <Typography variant="h6"><b>Birth Date: </b>&nbsp;&nbsp;</Typography>
                                <Typography variant="h6">{teacher.birthDate}</Typography>
                            </div>
                            <div className={classes.teacherData}>
                                <Typography variant="h6"><b>Arrival Date: </b>&nbsp;&nbsp;</Typography>
                                <Typography variant="h6">{teacher.arrivalDate}</Typography>
                            </div>
                            {(teacher.withdrawnDate !== "") && (
                                <div className={classes.teacherData}>
                                    <Typography variant="h6"><b>Withdrawn Date: &nbsp;&nbsp;</b></Typography>
                                    <Typography variant="h6">{teacher.withdrawnDate}</Typography>
                                </div>
                            )}
                            {/* </Paper> */}
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            Fees Details
                    </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            Exam Details
                    </Grid>
                    </Grid>
                </Container>
            </div>
        )
    )
}

export default TeacherDetalis;
