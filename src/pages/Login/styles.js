import { makeStyles } from '@material-ui/core/styles';
// import background from '../../Background.jpg'


const useStyles = makeStyles((theme) => ({
    bg: {
        // background: `url(${background}) no-repeat center center fixed`,
        backgroundColor: "#004B93",
        // backgroundSize: 'cover',
        height: '100%',
    },
    padding: {
        paddingTop: "10vh"
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export { useStyles };