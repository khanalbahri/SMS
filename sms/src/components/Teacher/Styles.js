import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    addStudentForm: {
        display: "flex",
        justifyContent: "center",
    },
    title: {
        backgroundColor: "#ffeaf5",
        borderBottom: "2px solid black",
        borderRadius: "10px",
        textAlign: "center"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    fileInput: {
        width: '97%',
        margin: '10px 8px',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
    submitButtons: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "150px",
        flexDirection: "column"
    }
}));


export default useStyles;