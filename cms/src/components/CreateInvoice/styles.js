import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 150,
        },
        marginTop: "20px",
    },
    heading:{
        textAlign: "center",
        font: "bold",
        fontStyle: "italic",
    },
}));