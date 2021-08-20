import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    media: {
        paddingTop: '56.25%', // 16:9
        height: "250px",
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
    },
    studentData: {
        display: "flex",
        justifyContent: "flex-start"
    }
}))

export default useStyles;