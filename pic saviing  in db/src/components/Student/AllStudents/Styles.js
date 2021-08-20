import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    tableHead: {
        borderRadius: "10px",
        background: "linear-gradient(146deg, #34e02bde, #0000007a)",
    },
    tableSpan: {
        overflow: "auto",
    },
    searchField: {
        marginBottom: "10px",
    }
}));