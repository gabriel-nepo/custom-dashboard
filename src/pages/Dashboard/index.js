import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from '../../components/ListItems';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Chart from '../../components/Chart/';
import Deposits from '../../components/Deposits/';
import Orders from '../../components/Orders/';
import RoomAdmin from '../../components/RoomAdmin/'
import { useStyles } from './styles';
import { Switch, Route } from "react-router-dom";
import Users from '../../components/Users';



export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        InProfile
                    </Typography>
                    <Link href="/" className={classes.logOff} style={{ color: "white" }}>
                        <Button style={{ color: "white" }} onClick={() => { localStorage.removeItem('@inprofile/token'); localStorage.removeItem('@type-user'); localStorage.removeItem('@user') }}>
                            <ExitToAppIcon />
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} lg={12}>
                            <Switch>
                                <Route exact path="/RoomAdmins">
                                    <RoomAdmin />
                                </Route>
                                <Route exact path="/">
                                    <RoomAdmin />
                                </Route>
                                <Route exact path="/users">
                                    <Users />
                                </Route>
                                {/* {
                                    localStorage.getItem("@type-user") === "admin" ?
                                    : null
                                } */}
                            </Switch>
                        </Grid>

                    </Grid>
                </Container>
            </main>
        </div >
    );
}
