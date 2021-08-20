import { React, useState, useEffect } from 'react';
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
import { useDispatch } from "react-redux";

function Student({ match }) {
    const dispatch = useDispatch();

    let studentLimit = 20;
    let studentPage = 0;
    if (localStorage.getItem("studentLimit") && localStorage.getItem("studentPage")) {
        studentLimit = JSON.parse(localStorage.getItem("studentLimit"));
        studentPage = JSON.parse(localStorage.getItem("studentPage"));
        // console.log(studentPage,studentLimit);
    }
    else {
        localStorage.setItem("studentLimit", studentLimit);
        localStorage.setItem("studentPage", studentPage);
    }
    const [limit, setLimit] = useState(studentLimit);
    const [page, setPage] = useState(studentPage);

    useEffect(() => {
        localStorage.setItem("studentLimit", limit);
        localStorage.setItem("studentPage", page);
        dispatch(getStudents(page, limit));
    }, [dispatch, limit, page])
    return (
        <div>
            <IconLabelTabs />

            <Switch>
                <Route path={`${match.path}/addStudent/:slug`} component={AddStudent} />
                <Route path={`${match.path}/withdrawnStudents`} component={WithdrawnStudents} />
                <Route path={`${match.path}/studentDetails/:slug`} component={StudentDetails} />
                {/* <Route path="/student" exact component={AllStudents} /> */}
                <Route path="/student" exact > <AllStudents limit={limit} setLimit={setLimit} page={page} setPage={setPage} /> </Route>
            </Switch>

        </div>
    )
}

export default Student;




// useEffect(() => {
//     if (localStorage.getItem("limit") && localStorage.getItem("page")) {
//         setPage(JSON.parse(localStorage.getItem("page")));
//         setLimit(JSON.parse(localStorage.getItem("limit")));
//     }
//     else {
//         setLimit(20);
//         setPage(0);
//     }
// }, [])