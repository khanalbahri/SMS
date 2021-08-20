import {React,useEffect, useState} from 'react';
import IconLabelTabs from "./Tab.js";
import { Switch, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";
import AllTeachers from "./AllTeachers/AllTeachers.js";
import AddTeacher from "./AddTeacher";
import WithdrawnTeachers from "./WithdrawnTeachers";
import {useDispatch} from "react-redux";
import {getTeachers} from '../../actions/teacher.js';
import TeacherDetalis from './TeacherDetails/TeacherDetails';



function Teacher({match}) {
    const [limit,setLimit] = useState(20);
    const [page,setPage] = useState(0);
    const dispatch = useDispatch();
    // console.log(page,limit);
    useEffect(() => {
        dispatch(getTeachers(page,limit));
    }, [dispatch,limit,page])
    return (
        <div>
            <IconLabelTabs />
            <Paper>
                <Switch>
                    {/* <Route path="/teacher" exact component={AllTeachers} /> */}
                    <Route path="/teacher" exact > <AllTeachers limit={limit} setLimit={setLimit} page={page} setPage={setPage} />  </Route>
                    <Route path={`${match.path}/addTeacher/:slug`} component={AddTeacher} />
                    <Route path={`${match.path}/withdrawnTeachers`} component={WithdrawnTeachers} />
                    <Route path={`${match.path}/teacherDetails/:slug`} component={TeacherDetalis} />
                </Switch>
            </Paper>
        </div>
    )
}

export default Teacher;

