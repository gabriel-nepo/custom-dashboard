import React from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import History from '@material-ui/icons/History';
import MyTests from './MyTests';
import TestDetails from './TestDetails';
import Icon from '@material-ui/core/Icon';

import Slide from '@material-ui/core/Slide';
import { useStyles } from '../../pages/Dashboard/styles';
import data from './MyTests/testListData';

const svg = require('./icon.svg');


export default function Track() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [detailsScreen, setDetailsScreen] = React.useState(false);
    const [element, setElement] = React.useState({});
    const [list, setList] = React.useState(true);

    const handleDetails = (element) => {
        setElement(element);
        setList(false);
        setInterval(() => {
            setDetailsScreen(true);
        }, 500);

    }

    return (

        <React.Fragment>

            <Slide timeout={500} direction="up" in={list} mountOnEnter unmountOnExit >

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
                                <Icon>
                                    <img alt="icone_form" className={classes.imageIcon} src={svg} />
                                </Icon>
                                Testes por peça
                            </Typography>
                        </Breadcrumbs>
                        <div className={classes.horizontalLine}></div>
                    </div>
                    <>
                        <MyTests handleDetails={handleDetails} />
                    </>

                </Paper>
            </Slide>

            <Slide timeout={500} direction="left" in={detailsScreen} mountOnEnter unmountOnExit >
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
                                <Link color="inherit" href="/examples/test" className={classes.link}>
                                    <Icon>
                                        <img alt="icone_form" className={classes.imageIcon} src={svg} />
                                    </Icon>
                                    Testes por peça
                                </Link>
                            </Typography>
                            <Typography style={{ color: "white" }} className={classes.link}>
                                <History className={classes.icon} />
                                Histórico de Testes da Peça
                            </Typography>
                        </Breadcrumbs>
                        <div className={classes.horizontalLine}></div>
                    </div>
                    <>
                        <TestDetails element={data[element]} />
                    </>
                </Paper>
            </Slide>

        </React.Fragment >
    );
}