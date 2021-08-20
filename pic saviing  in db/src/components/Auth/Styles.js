import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=> ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        marginBottom: theme.spacing(8)
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        }
    },
    avatar: {
        margin: theme.spacing(1),
        background: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        margin : theme.spacing(3,0,2),
    },
    body: {
        display: 'flex',
        borderRadius: "30px",
        margin: 0,
        padding: 0,
        background: "linear-gradient(178deg, #527907, #e28a8a00)",
    },
    fileInput: {
        width: "97%",
        margin: "10px 10px",
    }
    
}));

export default useStyles;