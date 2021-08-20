import { React, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Typography, MenuItem, Select, FormControl, InputLabel, Button } from "@material-ui/core";
// import FileBase from "react-file-base64";
import useStyles from "./Style.js";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../../actions/student.js";
import { useHistory } from 'react-router-dom';

export default function AddStudent({ match }) {
    const user = JSON.parse(localStorage.getItem("profile"));
    const studentUpdateId = match?.params?.slug;
    const updateStudentData = useSelector((state) => state.students.find((student) => student._id === studentUpdateId));
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [studentImage,setStudentImage] = useState(null);
    const [openClassStudyingIn, setOpenClassStudyingIn] = useState(false);
    const [openClassAdmittedIn, setOpenClassAdmittedIn] = useState(false);
    const [openStatus, setOpenStatus] = useState(false);
    const [formData, setFormData] = useState({
        studentName: "",
        fatherName: "",
        birthDate: "",
        classAdmittedIn: "1st",
        classStudyingIn: "1st",
        phoneNumber: "",
        address: "",
        status: 1,
        withdrawnDate: "",
    })

    useEffect(() => {
        if (updateStudentData) {
            setFormData(updateStudentData);
        }
    }, [updateStudentData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (studentUpdateId !== ":slug") {
                dispatch(updateStudent(studentUpdateId,{...formData , userName: user.result.userName}));
                history.push(`/student/studentDetails/${studentUpdateId}`);
            }
            else {
                const finalData = new FormData();
                finalData.append("studentName",formData.studentName)
                finalData.append("fatherName",formData.fatherName)
                finalData.append("birthDate",formData.birthDate)
                finalData.append("classAdmittedIn",formData.classAdmittedIn)
                finalData.append("classStudyingIn",formData.classStudyingIn)
                finalData.append("phoneNumber",formData.phoneNumber)
                finalData.append("address",formData.address)
                finalData.append("status",formData.status)
                finalData.append("withdrawnDate",formData.withdrawnDate)
                finalData.append("userName",user.result.userName);
                finalData.append("studentImage",studentImage);
                // console.log(studentImage);
                const config = {
                    headers: {
                        "content-type": "multipart/form-data",
                    }
                }
                dispatch(addStudent(finalData,config));
                clear();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleClassStudyingInClose = () => {
        setOpenClassStudyingIn(false);
    }
    const handleClassAdmittedInClose = () => {
        setOpenClassAdmittedIn(false);
    }
    const handleStatusClose = () => {
        setOpenStatus(false);
    }

    const handleClassStudyingInOpen = () => {
        setOpenClassStudyingIn(true);
    }
    const handleClassAdmittedInOpen = () => {
        setOpenClassAdmittedIn(true);
    }
    const handleStatusOpen = () => {
        setOpenStatus(true);
    }
    const clear = () => {
        setFormData({
            studentName: "",
            fatherName: "",
            birthDate: "",
            classAdmittedIn: "1st",
            classStudyingIn: "1st",
            phoneNumber: "",
            address: "",
            status: 1,
            withdrawnDate: "",
            studentImage: ""
        });
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.addStudentForm} >
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Typography variant="h6" gutterBottom className={classes.title}>Enter required data of student</Typography>
                        <div>
                            <TextField label="Student Name" onChange={handleChange} name="studentName" value={formData.studentName} variant="outlined" />
                            <TextField label="Father Name" onChange={handleChange} name="fatherName" value={formData.fatherName} variant="outlined" />
                            <TextField label="Phone Number" onChange={handleChange} name="phoneNumber" value={formData.phoneNumber} type="number" variant="outlined" />
                        </div>
                        <div>
                            <TextField label="Address" onChange={handleChange} name="address" value={formData.address} variant="outlined" />
                            <FormControl className={classes.formControl}>
                                <InputLabel>Class admitted in</InputLabel>
                                <Select
                                    onChange={handleChange}
                                    name="classAdmittedIn"
                                    style={{ height: "32px", }}
                                    open={openClassAdmittedIn}
                                    onClose={handleClassAdmittedInClose}
                                    onOpen={handleClassAdmittedInOpen}
                                    value={formData.classAdmittedIn}
                                >
                                    <MenuItem value="PlayGroup">PlayGroup</MenuItem>
                                    <MenuItem value="Nursury">Nursury</MenuItem>
                                    <MenuItem value="Prep">Prep</MenuItem>
                                    <MenuItem value="1st">1st</MenuItem>
                                    <MenuItem value="2nd">2nd</MenuItem>
                                    <MenuItem value="3rd">3rd</MenuItem>
                                    <MenuItem value="4th">4th</MenuItem>
                                    <MenuItem value="5th">5th</MenuItem>
                                    <MenuItem value="6th">6th</MenuItem>
                                    <MenuItem value="7th">7th</MenuItem>
                                    <MenuItem value="8th">8th</MenuItem>
                                    <MenuItem value="9th">9th</MenuItem>
                                    <MenuItem value="10th">10th</MenuItem>
                                    <MenuItem value="11th">11th</MenuItem>
                                    <MenuItem value="12th">12th</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Class studying in</InputLabel>
                                <Select
                                    onChange={handleChange}
                                    name="classStudyingIn"
                                    value={formData.classStudyingIn}
                                    style={{ height: "32px", }}
                                    open={openClassStudyingIn}
                                    onClose={handleClassStudyingInClose}
                                    onOpen={handleClassStudyingInOpen}
                                >
                                    <MenuItem value="PlayGroup">PlayGroup</MenuItem>
                                    <MenuItem value="Nursury">Nursury</MenuItem>
                                    <MenuItem value="Prep">Prep</MenuItem>
                                    <MenuItem value="1st">1st</MenuItem>
                                    <MenuItem value="2nd">2nd</MenuItem>
                                    <MenuItem value="3rd">3rd</MenuItem>
                                    <MenuItem value="4th">4th</MenuItem>
                                    <MenuItem value="5th">5th</MenuItem>
                                    <MenuItem value="6th">6th</MenuItem>
                                    <MenuItem value="7th">7th</MenuItem>
                                    <MenuItem value="8th">8th</MenuItem>
                                    <MenuItem value="9th">9th</MenuItem>
                                    <MenuItem value="10th">10th</MenuItem>
                                    <MenuItem value="11th">11th</MenuItem>
                                    <MenuItem value="12th">12th</MenuItem>

                                    {/* <MenuItem value={13}>PlayGroup</MenuItem>
                                    <MenuItem value={14}>Nursury</MenuItem>
                                    <MenuItem value={15}>Prep</MenuItem>
                                    <MenuItem value={1}>1st</MenuItem>
                                    <MenuItem value={2}>2nd</MenuItem>
                                    <MenuItem value={3}>3rd</MenuItem>
                                    <MenuItem value={4}>4th</MenuItem>
                                    <MenuItem value={5}>5th</MenuItem>
                                    <MenuItem value={6}>6th</MenuItem>
                                    <MenuItem value={7}>7th</MenuItem>
                                    <MenuItem value={8}>8th</MenuItem>
                                    <MenuItem value={9}>9th</MenuItem>
                                    <MenuItem value={10}>10th</MenuItem>
                                    <MenuItem value={11}>11th</MenuItem>
                                    <MenuItem value={12}>12th</MenuItem> */}
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Status</InputLabel>
                                <Select
                                    onChange={handleChange}
                                    name="status"
                                    style={{ height: "32px", }}
                                    open={openStatus}
                                    onClose={handleStatusClose}
                                    onOpen={handleStatusOpen}
                                    value={formData.status}
                                >
                                    <MenuItem value={1}>Active</MenuItem>
                                    <MenuItem value={0}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <TextField label="Birth Date" onChange={handleChange} name="birthDate" value={formData.birthDate} type="date" className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField label="Withdrawn Date" onChange={handleChange} name="withdrawnDate" value={formData.withdrawnDate} type="date" className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <FormControl className={classes.formControl}>
                                <label>Choose Image</label>
                                <div className={classes.fileInput}>
                                        <input type="file" onChange={(e)=> setStudentImage(e.target.files[0]) } />
                                </div>
                            </FormControl>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className={classes.submitButtons}>
                                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                            </div>
                        </div>
                    </form>
                </Grid>
            </Grid >
        </div>

    );
}


