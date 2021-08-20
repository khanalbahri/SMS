import React, { useState, useEffect } from 'react';
import { useStyles } from "./Styles.js";
import { TextField, InputAdornment, Typography, IconButton, MenuItem, Select, Table, TableBody, TableCell, Button, TableHead, TableRow, Grid, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import { useHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function AllStudents({ limit, setLimit, page, setPage }) {
    // const [limit, setLimit] = useState(20);
    // const [page, setPage] = useState(0);
    const students = useSelector((state) => state.students);
    const classes = useStyles();
    const studentLength = students.length;



    const details = (id) => {
        // history.push(`/student/studentDetails/${id}`);
        window.location = `/student/studentDetails/${id}`;
    }

    const search = ()=>{
        console.log("searched");
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={6} md={6} lg={4} align="left">
                        <Typography variant="h6" color="secondary">All Students</Typography>
                    </Grid>
                    <Grid item xs={6} md={6} lg={8} align="right">
                        <TextField
                            className={classes.searchField}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={search}>
                                            <SearchIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
                <div className={classes.tableSpan}>
                    <Table size="small" className={classes.table}>
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                <TableCell>Student Name</TableCell>
                                <TableCell>Father Name</TableCell>
                                <TableCell>Birth Date</TableCell>
                                <TableCell>class Studying In</TableCell>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map((student) => (
                                <TableRow key={student._id}>
                                    <TableCell>{student.studentName}</TableCell>
                                    <TableCell>{student.fatherName}</TableCell>
                                    <TableCell>{student.birthDate}</TableCell>
                                    <TableCell>{student.classStudyingIn}</TableCell>
                                    <TableCell>{student.phoneNumber}</TableCell>
                                    <TableCell>{student.address.slice(0, 15)}...</TableCell>
                                    <TableCell>{student.status === 1 ? "Active" : "Inactive"}</TableCell>
                                    <TableCell align="right"><AccountCircleIcon style={{ cursor: "pointer" }} onClick={() => details(student._id)} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className={classes.seeMore}>
                    <Grid container spacing={3}>
                        <Grid item xs={4} md={4} lg={4}>
                            <Button
                                disabled={page === 0 ? true : false}
                                onClick={() => setPage(page - 1)}
                                variant="contained"
                                size="small"
                                startIcon={<ArrowBackIosIcon />}
                            >
                                Prev Page
                            </Button>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4} align="center">
                            <div>
                                <Typography variant="h5" color="primary">
                                    Total Students : <strong>{studentLength}</strong>
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="h6" color="secondary" >
                                    Rows per page
                                </Typography>
                            </div>
                            <Select
                                disabled={studentLength < limit ? true : false}
                                value={limit}
                                onChange={(e) => setLimit(e.target.value)}
                            >
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                                <MenuItem value={50}>50</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4} align="right">
                            <Button
                                disabled={studentLength < limit ? true : false}
                                onClick={() => setPage(page + 1)}
                                variant="contained"
                                size="small"
                                startIcon={<ArrowForwardIosIcon />}
                            >
                                Next Page
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}