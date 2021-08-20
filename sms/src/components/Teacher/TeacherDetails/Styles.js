import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=> ({
    media: {
        paddingTop: "15px",
        height: "250px",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
    },
    teacherData:{
        display: "flex",
        flexDirection: "flex-start",
    }

}));


export default useStyles;