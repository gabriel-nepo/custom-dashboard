import React from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import MyRequestsList from './MyRequests';
import RequestDetails from './RequestDetails';

import { Container } from './styles';
import Slide from '@material-ui/core/Slide';
import { useStyles } from '../../pages/Dashboard/styles';
import data from './MyRequests/myRequestsData';


export default function Track() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [detailsScreen, setDetailsScreen] = React.useState(false);
    const [element, setElement] = React.useState({});
    const [list, setList] = React.useState(true);

    const handleChange = (event, newValue) => {
        
        setList(!list);
        setInterval(() => {
            setDetailsScreen(true);
        }, 500);
    };

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
                                <HomeIcon className={classes.icon} />
                                    Acompanhar Pedido
                                </Typography>
                        </Breadcrumbs>
                        <div className={classes.horizontalLine}></div>
                    </div>
                    <>
                        <MyRequestsList handleDetails={handleDetails} />
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
                                <Link color="inherit" href="/examples/track" className={classes.link}>
                                    <HomeIcon className={classes.icon} />
                                         Acompanhar Pedidos
                                     </Link>
                            </Typography>
                            <Typography style={{ color: "white" }} className={classes.link}>
                                <Link color="inherit" href="/examples/track" className={classes.link}>
                                    <HomeIcon className={classes.icon} />
                                         Detalhes do Pedido
                                     </Link>
                            </Typography>
                        </Breadcrumbs>
                        <div className={classes.horizontalLine}></div>
                    </div>
                    <>
                        <RequestDetails element={data[element]} />
                    </>
                </Paper>
            </Slide>

        </React.Fragment>
    );
}