import React from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import TestList from './TestList';
import { Container } from './styles';
import Slide from '@material-ui/core/Slide';
import { useStyles } from '../../pages/Dashboard/styles';

export default function Test() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <React.Fragment>
            <Slide timeout={500} direction="up" in={true} mountOnEnter unmountOnExit >

                <Paper className={classes.paper}>
                    <div style={{ padding: '16px 16px 0 16px', backgroundColor: 'rgb(6, 32, 56)' }}>
                        <Breadcrumbs style={{ color: "white" }} aria-label="breadcrumb">
                            <Typography style={{ color: "white" }} className={classes.link}>
                                <Link color="inherit" href="/examples" className={classes.link}>
                                    <HomeIcon className={classes.icon} />
                            Home
                        </Link>
                            </Typography>
                            <Typography style={{ color: "white" }} className={classes.link}>
                                <HomeIcon className={classes.icon} />
                            Catálogo
                        </Typography>
                        </Breadcrumbs>
                        <div className={classes.horizontalLine}></div>
                    </div>
                    <TestList/>
                </Paper>
            </Slide>

        </React.Fragment>
    );
}