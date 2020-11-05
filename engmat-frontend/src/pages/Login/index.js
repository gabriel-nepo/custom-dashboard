import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';


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
    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error,setError] = React.useState("");


    const sign_in = () => {
        const user = id
        api.post('/login', {
            user,
            password
        }).then(res => {
            localStorage.setItem("@radar-viral/token", res.data.token);
            setId('');
            setPassword('');
            setError('');
            
        }).catch(err => {
            console.log(err);
            setError("*Usuário ou senha incorretos");
        });
    }

    return (
        <div className={classes.bg}>
            <Container component="main">
                {/* <img src={require('../../front.svg')}/> */}
                <img src={logo} className={classes.paper} />

                <div className={classes.paper}>
                    {/* <SvgIcon component={logo}/> */}
                    <form className={classes.form} onSubmit={(e) => { sign_in(); e.preventDefault() }}>
                        <span>{error}</span>
                        <TextField
                            variant="filled"
                            margin="normal"
                            required
                            onChange={(e) => setId(e.target.value)}
                            fullWidth
                            id="ID"
                            placeholder="ex: 99999999"
                            label="ID"
                            name="ID"
                            autoComplete="ID"
                            value={id}
                            autoFocus
                            style={{ backgroundColor: "white" }}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            name="password"
                            value={password}
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
                        // href="/examples"
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
                    <div style={{ maxWidth: '207px', width: '207px' }}>
                        <img src={labs} height={100} className={classes.paper} />
                    </div>
                </Grid>
                <Grid>
                    <div style={{ maxWidth: '207px', width: '207px' }}>
                        <img src={ambev} height={100} className={classes.paper} />
                    </div>
                </Grid>
                {/* </div> */}
            </Grid>
        </div>

    );
}