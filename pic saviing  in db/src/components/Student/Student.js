import { React, useState,useEffect } from 'react';
import IconLabelTabs from "./Tab.js";
import { Switch, Route } from "react-router-dom";
// import AllStudents from "./AllStudents.js";
import AllStudents from './AllStudents/AllStudents.js';
import AddStudent from "./AddStudent.js";
import WithdrawnStudents from "./WithdrawnStudents.js";
// import { useDispatch } from "react-redux";
// import { getStudents } from "../../actions/student.js";
import StudentDetails from './StudentDetails/StudentDetails.js';
import { getStudents } from '../../actions/student.js';
import {useDispatch} from "react-redux";

function Student({ match }) {
        const [limit, setLimit] = useState(20);
        const [page, setPage] = useState(0);
    // console.log(match.path);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStudents(page, limit));
    }, [page, limit, dispatch])
    return (
        <div>
            <IconLabelTabs />

            <Switch>
                {/* <Route path="/student" exact component={AllStudents} /> */}
                <Route path="/student" exact > <AllStudents limit={limit} setLimit={setLimit} page={page} setPage={setPage} /> </Route>
                <Route path={`${match.path}/addStudent/:slug`} component={AddStudent} />
                <Route path={`${match.path}/withdrawnStudents`} component={WithdrawnStudents} />
                <Route path={`${match.path}/studentDetails/:slug`} component={StudentDetails} />
            </Switch>

        </div>
    )
}

export default Student;
