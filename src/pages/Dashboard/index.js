import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LanguageIcon from '@material-ui/icons/Language';
import Main from '../../components/Main/';
import RequestItem from '../../components/Request';
import Catalogue from '../../components/Catalogue';
import Backlog from '../../components/Backlog';
import Track from '../../components/Track';
import { useStyles } from './styles';
import { Switch, Route } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.appBarColor}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge color="secondary">
                            <LanguageIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                            <Switch>
                                <Route exact path={'/examples'}>
                                    <Main></Main>
                                </Route>
                                <Route exact path={'/examples/require'}>
                                    <RequestItem />
                                </Route>
                                <Route exact path={'/examples/catalogue'}>
                                    <Catalogue />
                                </Route>
                                <Route exact path={'/examples/backlog'}>
                                    <Backlog />
                                </Route>
                                <Route exact path={'/examples/track'}>
                                    <Track />
                                </Route>
                            </Switch>
                        </Grid>

                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div >
    );
}
