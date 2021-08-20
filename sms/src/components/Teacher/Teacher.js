import { React, useEffect, useState } from 'react';
import IconLabelTabs from "./Tab.js";
import { Switch, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";
import AllTeachers from "./AllTeachers/AllTeachers.js";
import AddTeacher from "./AddTeacher";
import WithdrawnTeachers from "./WithdrawnTeachers";
import { useDispatch } from "react-redux";
import { getTeachers } from '../../actions/teacher.js';
import TeacherDetalis from './TeacherDetails/TeacherDetails';



function Teacher({ match }) {
    const dispatch = useDispatch();

    let teacherPage= 0;
    let teacherLimit = 20;

    if (localStorage.getItem("teacherLimit") && localStorage.getItem("teacherPage")) {
        teacherPage = JSON.parse(localStorage.getItem("teacherPage"));
        teacherLimit = JSON.parse(localStorage.getItem("teacherLimit"));
    }
    else {
        localStorage.setItem("teacherPage", teacherPage);
        localStorage.setItem("teacherLimit", teacherLimit);
    }

    const [limit, setLimit] = useState(teacherLimit);
    const [page, setPage] = useState(teacherPage);

    useEffect(() => {
        localStorage.setItem("teacherPage", page);
        localStorage.setItem("teacherLimit", limit);
        dispatch(getTeachers(page, limit));
    }, [dispatch, limit, page])

    return (
        <div>
            <IconLabelTabs />
            <Paper>
                <Switch>
                    <Route path={`${match.path}/addTeacher/:slug`} component={AddTeacher} />
                    <Route path={`${match.path}/withdrawnTeachers`} component={WithdrawnTeachers} />
                    <Route path={`${match.path}/teacherDetails/:slug`} component={TeacherDetalis} />
                    {/* <Route path="/teacher" exact component={AllTeachers} /> */}
                    <Route path="/teacher" exact > <AllTeachers limit={limit} setLimit={setLimit} page={page} setPage={setPage} />  </Route>
                </Switch>
            </Paper>
        </div>
    )
}

export default Teacher;

