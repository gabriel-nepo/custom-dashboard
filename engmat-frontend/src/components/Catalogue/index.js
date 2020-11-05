import React from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { useStyles } from '../../pages/Dashboard/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import Icon from '@material-ui/core/Icon';
import { Container } from './styles';

import CatalogueList from './list';

const svg = require('./icon.svg');


export default function Catalogue() {

    const classes = useStyles();

    return (
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
                            <Icon>
                                <img alt="icone_form" className={classes.imageIcon} src={svg} />
                            </Icon>
                            Catálogo
                        </Typography>
                    </Breadcrumbs>
                    <div className={classes.horizontalLine}></div>
                </div>
                <Container>
                    <CatalogueList />
                </Container>
            </Paper>
        </Slide>

        // <Slide timeout={500} direction="up" in={true} mountOnEnter unmountOnExit >
        //     <Paper className={classes.paper}>
        //         <CatalogueList></CatalogueList>
        //     </Paper>
        // </Slide>
    )
}