import React from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import BacklogAnalytics from './BacklogAnalytics';
import BacklogList from './BacklogList';
import { Container } from './styles';
import { useStyles } from '../../pages/Dashboard/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { a11yProps, TabPanel } from "./TabSettings";

export default function Backlog() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <React.Fragment>
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
                <>
                    <AppBar color="transparent" style={{zIndex: 1}} position="static">
                        <Tabs variant="fullWidth" centered value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Visualizar Backlog" {...a11yProps(0)} />
                            <Tab label="Estatísticas" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <BacklogList />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <BacklogAnalytics/>
                    </TabPanel>
                </>
            </Paper>

        </React.Fragment>
    );
}