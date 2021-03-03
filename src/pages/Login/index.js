import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import { Redirect, useHistory, withRouter } from 'react-router-dom';


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


function Login(props) {
    const classes = useStyles();
    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [register, setRegister] = React.useState(false);
    const [idRegister,setIdRegister] = React.useState("")


    const sign_in = () => {
        const user = id
        api.post('/login', {
            user,
            password
        }).then(res => {
            console.log(res.data.usuario.type)
            localStorage.setItem("@type-user", res.data.usuario.type);
            localStorage.setItem("@inprofile/token", res.data.token);

            setId('');
            setPassword('');
            setError('');
            props.auth(true);
            props.history.push("/RoomAdmins");

        }).catch(err => {
            console.log(err);
            setError("*Usuário ou senha incorretos");
        });
    }

    const registerUser = ()=>{
        if(password === confirmPassword){
            api.post('register',{
                user: idRegister,
                password,
                type: "user",
            }).then(()=>{
                alert("Cadastro realizado, seu cadastro será aprovado em até 24h");
            }).catch((err)=>{
                if(err.response.status === 400){
                    setError("Usuário já cadastrado");
                }
            })
        }
        else{
            setError("* Senhas não conferem");
        }
    }

    return (
        <div className={classes.bg} style={{height: "100%"}}>
            <Container component="main">
                {/* <img src={require('../../front.svg')}/> */}
                <img src={logo} className={classes.paper} />

                <div className={classes.paper}>
                    {/* <SvgIcon component={logo}/> */}
                    {!register ?

                        <form className={classes.form} onSubmit={(e) => { sign_in(); e.preventDefault() }}>
                            <span style={{ color: "white" }}>{error}</span>
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
                            <Button
                                style={{ backgroundColor: "#3985D1", color: "white" }}
                                onClick={() => {
                                    setRegister(true);
                                }}
                                fullWidth
                                variant="contained"
                            // href="/examples"
                            >
                                Registrar
                            </Button>
                        </form>

                        :
                        <form className={classes.form} onSubmit={(e) => { registerUser(); e.preventDefault() }}>
                            <span style={{ color: "white" }}>{error}</span>
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                onChange={(e) => setIdRegister(e.target.value)}
                                fullWidth
                                id="idRegister"
                                placeholder="ex: 99999999"
                                label="ID"
                                name="idRegister"
                                value={idRegister}
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
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                fullWidth
                                name="confirmPassword"
                                value={confirmPassword}
                                label="Confirme a senha"
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
                                Confirmar
                            </Button>
                            <Button
                                style={{ backgroundColor: "#3985D1", color: "white" }}
                                onClick={()=> setRegister(false)}
                                fullWidth
                                variant="contained"
                            // href="/examples"
                            >
                                Voltar
                            </Button>
                        </form>


                    }

                </div>
            </Container>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                <div style={{ width: '150px' }}>
                    <img style={{ width: "6rem" }} src={logo7lagoas} className={classes.paper} />
                </div>


                <div style={{ width: '150px' }}>
                    <img style={{ width: "5rem" }} src={labs} className={classes.paper} />
                </div>

                <div style={{ width: '150px' }}>
                    <img style={{ width: "10rem" }} src={ambev} className={classes.paper} />
                </div>
            </div>

        </div>

    );
}

export default withRouter(Login);