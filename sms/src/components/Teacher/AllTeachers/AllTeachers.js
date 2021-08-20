import React,{useState} from 'react';
import { useStyles } from "./Styles.js";
import { TextField, InputAdornment, Typography, IconButton, MenuItem, Select, Table, TableBody, TableCell, Button, TableHead, TableRow, Grid, Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { searchTeacher } from '../../../actions/teacher.js';


function AllTeachers({ limit, setLimit, page, setPage }) {
    const teachers = useSelector((state) => state.teachers);
    var sno = 0;
    const classes = useStyles();
    const teachersLength = teachers.length;
    const [search,setSearch] = useState("");
    const [searchBy,setSearchBy]= useState("teacherName");
    const dispatch = useDispatch();
    const history = useHistory();



    const searchReq = () => {
        console.log(searchBy,search);
        if(search !== ""){
            dispatch(searchTeacher(searchBy,search));
        }
    }

    const details = (id) => {
        // window.location = `/teacher/teacherDetails/${id}`;
        history.push(`/teacher/teacherDetails/${id}`);
        
    }



    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={6} md={6} lg={4} align="left">
                        <Typography variant="h6" color="secondary">All Teachers</Typography>
                    </Grid>
                    <Grid item xs={6} md={6} lg={8} align="right">
                        <strong>Search By: &nbsp;</strong>
                        <Select
                            label="Search By:"
                            value={searchBy}
                            onChange={(e) => setSearchBy(e.target.value)}
                        >
                            <MenuItem value="teacherName">Name</MenuItem>
                            <MenuItem value="role">Role</MenuItem>
                            <MenuItem value="phoneNumber">Phone Number</MenuItem>
                            <MenuItem value="address">Address</MenuItem>
                        </Select>
                        <TextField
                            className={classes.searchField}
                            onChange={e => setSearch(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={searchReq}>
                                            <SearchIcon />
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
                                <TableCell align="left">S.No</TableCell>
                                <TableCell>Teacher Name</TableCell>
                                <TableCell>Qualification</TableCell>
                                <TableCell>Birth Date</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {teachers.map((teacher) => (
                                <TableRow key={teacher._id}>
                                    <TableCell>{++sno}</TableCell>
                                    <TableCell>{teacher.teacherName}</TableCell>
                                    <TableCell>{teacher.qualification}</TableCell>
                                    <TableCell>{teacher.birthDate}</TableCell>
                                    <TableCell>{teacher.role}</TableCell>
                                    <TableCell>{teacher.phoneNumber}</TableCell>
                                    <TableCell>{teacher.email.slice(0, 15)}...</TableCell>
                                    <TableCell>{teacher.address.slice(0, 15)}...</TableCell>
                                    <TableCell>{teacher.status === 0 ? "Inactive" : "Active"}</TableCell>
                                    <TableCell align="right"><AccountCircleIcon style={{ cursor: "pointer" }} onClick={() => details(teacher._id)} /></TableCell>
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
                                    Total Teachers : <strong>{teachersLength}</strong>
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="h6" color="secondary" >
                                    Rows per page
                                </Typography>
                            </div>
                            <Select
                                // disabled={teachersLength < limit ? true : false}
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
                                disabled={teachersLength < limit ? true : false}
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
    )
}

export default AllTeachers;
