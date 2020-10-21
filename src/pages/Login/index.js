import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import { Icon } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';

const logo = require('./logo.svg');
const labs = require('./7Labs.svg');
const logo7lagoas = require('./7Lagoas.svg');
const ambev = require('./ambev.svg');

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


export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.bg}>
            <Container component="main">
                {/* <img src={require('../../front.svg')}/> */}
                <img src={logo} className={classes.paper} />

                <div className={classes.paper}>
                    {/* <SvgIcon component={logo}/> */}
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            placeholder="id@ambev.com.br"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            style={{ backgroundColor: "white" }}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            style={{ backgroundColor: "white" }}

                        />
                        <Button
                            style={{ backgroundColor: "#3985D1", color: "white" }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            href="/examples"
                        >
                            Entrar
                        </Button>
                    </form>
                </div>
            </Container>
            <Grid style={{ justifyContent: "space-evenly" }} container>
                {/* <div style={{justifyContent: "space",display: "flex"}}> */}
                <Grid>
                    <div style={{ maxWidth: '207px', width: '207px' }}>
                        <img src={logo7lagoas} height={100} className={classes.paper} />
                    </div>
                </Grid>
                <Grid>
                    <div style={{ maxWidth: '207px',width: '207px' }}>
                        <img src={labs} height={100} className={classes.paper} />
                    </div>
                </Grid>
                <Grid>
                    <div style={{ maxWidth:'207px', width: '207px' }}>
                        <img src={ambev} height={100} className={classes.paper} />
                    </div>
                </Grid>
                {/* </div> */}
            </Grid>
        </div>

    );
}