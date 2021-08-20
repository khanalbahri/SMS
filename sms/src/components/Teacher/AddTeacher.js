import { React, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Typography, MenuItem, Select, FormControl, InputLabel, Button } from "@material-ui/core";
// import FileBase from "react-file-base64";
import useStyles from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher,updateTeacher } from '../../actions/teacher.js';
import { useHistory } from 'react-router-dom';


export default function AddTeacher({ match }) {
    const user = JSON.parse(localStorage.getItem("profile"));
    const teacherUpdateId = match?.params?.slug;
    const updateTeacherData = useSelector((state) => state.teachers.find((teacher) => teacher._id === teacherUpdateId));
    const dispatch = useDispatch();
    const classes = useStyles();
    const history  = useHistory();
    const [openStatus, setOpenStatus] = useState(false);
    const [teacherImage,setTeacherImage] = useState(null);
    const [formData, setFormData] = useState({
        teacherName: "",
        qualification: "",
        role: "",
        phoneNumber: "",
        email: "",
        address: "",
        otherInfo: "",
        status: 1,
        birthDate: "",
        arrivalDate: "",
        withdrawnDate: "",
    })


    useEffect(() => {
        if (updateTeacherData) {
            setFormData(updateTeacherData);
        }
    }, [updateTeacherData])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (teacherUpdateId !== ":slug") {
                dispatch(updateTeacher(teacherUpdateId,{...formData,userName:user.result.userName}));
                history.push(`/teacher/teacherDetails/${teacherUpdateId}`);
            }
            else {
                const finalData = new FormData();
                finalData.append("teacherName",formData.teacherName)
                finalData.append("qualification",formData.qualification)
                finalData.append("role",formData.role)
                finalData.append("phoneNumber",formData.phoneNumber)
                finalData.append("email",formData.email)
                finalData.append("address",formData.address)
                finalData.append("otherInfo",formData.otherInfo)
                finalData.append("status",formData.status)
                finalData.append("birthDate",formData.birthDate)
                finalData.append("arrivalDate",formData.arrivalDate)
                finalData.append("withdrawnDate",formData.withdrawnDate)
                finalData.append("teacherImage",teacherImage)
                finalData.append("userName",user.result.userName);
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                    }
                }
                // console.log(teacherImage);
                dispatch(addTeacher(finalData,config));
                clear();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleStatusClose = () => {
        setOpenStatus(false);
    }

    const handleStatusOpen = () => {
        setOpenStatus(true);
    }
    const clear = () => {
        setFormData({
            teacherName: "",
            qualification: "",
            role: "",
            phoneNumber: "",
            email: "",
            address: "",
            otherInfo: "",
            status: 1,
            birthDate: "",
            arrivalDate: "",
            withdrawnDate: "",
            teacherImage: ""
        })

    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.addStudentForm} >
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Typography variant="h6" gutterBottom className={classes.title}>Enter required data of teacher </Typography>
                        <div>
                            <TextField label="Teacher Name" onChange={handleChange} name="teacherName" value={formData.teacherName} variant="outlined" />
                            <TextField label="Qualification" onChange={handleChange} name="qualification" value={formData.qualification} variant="outlined" />
                            <TextField label="Role" onChange={handleChange} name="role" value={formData.role} variant="outlined" />
                            <TextField label="Phone Number" onChange={handleChange} name="phoneNumber" value={formData.phoneNumber} type="number" variant="outlined" />
                        </div>
                        <div>
                            <TextField label="Email" onChange={handleChange} name="email" value={formData.email} type="email" variant="outlined" />
                            <TextField label="Address" onChange={handleChange} name="address" value={formData.address} variant="outlined" />
                            <TextField label="Other Info" onChange={handleChange} name="otherInfo" value={formData.otherInfo} variant="outlined" />
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
                            <TextField label="Arrival Date" onChange={handleChange} name="arrivalDate" value={formData.arrivalDate} type="date" className={classes.textField}
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
                                    <input type="file" onChange={(e)=> setTeacherImage(e.target.files[0])}  />
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




