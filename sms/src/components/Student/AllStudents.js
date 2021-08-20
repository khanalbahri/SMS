import React from 'react';
import { forwardRef } from 'react';
import MaterialTable from "material-table";
import { useSelector } from "react-redux";
import { CircularProgress } from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MoreSharpIcon from '@material-ui/icons/MoreSharp';


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function AllStudents() {
  const students = useSelector((state) => state.students);
  const columns = [
    { title: "Name", field: "studentName", filtering: false, },
    { title: "Father Name", field: "fatherName", filtering: false, },
    { title: "Class Studying In", field: "classStudyingIn", lookup: { "1st": "1st", "2nd": "2nd", "3rd": "3rd", "4th": "4th", "5th": "5th", "6th": "6th", "7th": "7th", "8th": "8th", "9th": "9th", "10th": "10th", "11th": "11th", "12th": "12th" } },
    { title: "Phone Number", field: "phoneNumber", filtering: false, },
    { title: "Status", field: "status", lookup: { 0: "Deactive", 1: "Active" } },
    // { title: "Address", field: "address", filtering: false, render: (rowData) => rowData.address },
  ]

  return (
    !students.length ? <CircularProgress /> : (
      <div>
        <MaterialTable
          title="Students Data"
          columns={columns}
          data={students}
          icons={tableIcons}
          options={{
            headerStyle: {
              backgroundColor: 'black',
              color: '#FFF'
            },
            rowStyle: {
              backgroundColor: '#c7f9bb',
            },
            actionsColumnIndex: -1,
            filtering: true,
            exportButton: true,
          }}
          actions={[
            {
              icon: MoreSharpIcon,
              tooltip: 'Save User',
              onClick: (event, rowData) => window.location = `/student/studentDetails/${rowData._id}`
            }
          ]}


        />
      </div>
    )
  )
}


export default AllStudents
