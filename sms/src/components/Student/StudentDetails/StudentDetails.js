import { Button, Card, CardActions, CircularProgress, Container, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import useStyles from './Styles.js';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { deleteStudent } from '../../../actions/student.js';
import { useHistory } from 'react-router-dom';
import { URL } from '../../../constants/actionType.js';
import "./style.css";

function StudentDetails({ match }) {
    const classes = useStyles();
    const studentId = match.params.slug;
    const student = useSelector((state) => state.students.find((student) => student._id === studentId));
    const dispatch = useDispatch();
    const history = useHistory();
    const handleStudentDelete = (id) => {
        const approve = window.confirm(`Are you sure you want to delete the Record of ${student.studentName}`);
        if (approve) {
            try {
                dispatch(deleteStudent(id))
                history.push("/student");
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleStudentUpdate = (id) => {
        // window.location = `/student/addStudent/${id}`;
        history.push(`/student/addStudent/${id}`);
    }

    
    return (
        !student ? <CircularProgress /> : (
            <div>
                <Container maxWidth="lg" className={classes.container}>
                 <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper style={{ borderRadius: "10%" }}>
                                <Card className={classes.card}>
                                    <img src={`${URL}${student.studentImage}`} className="photo" alt="Student" />
                                    <CardActions>
                                        <Button size="small" color="secondary" onClick={() => handleStudentDelete(student._id)}>
                                            <DeleteIcon /> &nbsp; Delete
                                        </Button> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                        <Button size="small" color="primary" onClick={() => handleStudentUpdate(student._id)}>
                                            <EditIcon /> &nbsp; Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} lg={9} style={{ background: "linear-gradient(45deg, #9dd431, transparent)", borderRadius: "10%" }}>
                            <div className={classes.studentData}>
                                <Typography variant="h6"><b>Name:</b> &nbsp; &nbsp;</Typography>
                                <Typography variant="h6">{student.studentName}</Typography>
                            </div>
                            <div className={classes.studentData}>
                                <Typography variant="h6"><b>Father Name:</b> &nbsp; &nbsp;</Typography>
                                <Typography variant="h6">{student.fatherName}</Typography>
                            </div>
                            <div className={classes.studentData}>
                                <Typography variant="h6"><b>Birth Date:</b> &nbsp; &nbsp;</Typography>
                                <Typography variant="h6">{student.birthDate}</Typography>
                            </div>
                            <div className={classes.studentData}>
                                <Typography variant="h6"><b>Class Admitted in:</b> &nbsp; &nbsp;</Typography>
                                <Typography variant="h6">{student.classAdmittedIn}</Typography>
                            </div>
                            <div className={classes.studentData}>
                                <Typography variant="h6"><b>Class Studying in:</b> &nbsp; &nbsp;</Typography>
                                <Typography variant="h6">{student.classStudyingIn}</Typography>
                            </div>
                            <div className={classes.studentData}>
                                <Typography variant="h6"><b>Phone Number:</b> &nbsp; &nbsp;</Typography>
                                <Typography variant="h6">{student.phoneNumber}</Typography>
                            </div>
                            <div className={classes.studentData}>
                                <Typography variant="h6"><b>Address:</b> &nbsp; &nbsp;</Typography>
                                <Typography variant="h6">{student.address}</Typography>
                            </div>
                            <div className={classes.studentData}>
                                <Typography variant="h6"><b>Status:</b> &nbsp; &nbsp;</Typography>
                                <Typography variant="h6">{student.status !== 0 ? "Active" : "Deactive"}</Typography>
                            </div>
                            {(student.withdrawnDate !== "" && student.withdrawnDate !== null) && (
                                <div className={classes.studentData} >
                                    <Typography variant="h6"><b>Withdrawn Date:</b> &nbsp; &nbsp;</Typography>
                                    <Typography variant="h6">{student.withdrawnDate}</Typography>
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Paper>
                                Fee details here
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Paper>
                                Exam Details here
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

            </div>
        )
    )
}

export default StudentDetails;
