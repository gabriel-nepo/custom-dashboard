import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import api from '../../services/api';
import Button from '@material-ui/core/Button';
import { useStyles } from '../../pages/Dashboard/styles';
import { Container } from './styles';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Group';
import AddRoomIcon from '@material-ui/icons/GroupAdd';
import UsersTable from './UsersTable';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

// import PubSub from 'pubsub-js';


export default function Users() {
    const classes = useStyles();
    const [rooms, setRooms] = useState([]);
    const [users, setUsers] = useState([]);
    const [editStatus, setEditStatus] = useState(false);
    const [editData, setEditData] = useState({ name: '', people: [], index: -1 });
    const [newRoomStatus, setNewRoomStatus] = useState(false);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [deletedRoom, setDeletedRoom] = useState({ name: '', people: [], index: -1 });
    const [filter, setFilter] = useState(true);
    const [add, setAdd] = useState(false);
    const [room, setRoom] = useState({});

    const [nome, setNome] = useState('');
    const [ambevId, setAmbevId] = useState('');

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});

    const getData = async function fetchData() {

        await api.get(`user/list`).then(res => {
            setUsers(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const close = ()=>{
        setOpen(false);
    }

    const handleOpen = ()=>{
        setOpen(true);
    }

    const confirm = async ()=> {
        await api.delete(`user/${user.ambevId}`).then(res => {
            console.log(res);
            setOpen(false);
        }).catch(err => {
            console.log(err);
        });
        await getData();
    }
    
    

    React.useEffect(() => {
        getData();
    }, [])

    const handleAddUser = async () => {
        await api.post('user/new', {
            user: nome,
            ambevId,
            password: ambevId,
            type: "user"
        })
        await getData();
    }

    const handleGoToAdd = () => {
        setFilter(false);
        setTimeout(() => {
            setAdd(true);
        }, 500)
    }

    const handleGoToFilter = () => {
        setAdd(false);
        setTimeout(() => {
            setFilter(true);
        }, 500)
    }

    return (

        <React.Fragment>

            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={() => close()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Excluir usuario</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Tem certeza que deseja excluir o usuário ${user.user}?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => close()} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={() => confirm()} color="primary">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>

            <Slide timeout={500} direction="up" in={filter} mountOnEnter unmountOnExit >
                <Paper className={classes.paper}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Typography color="inherit" className={classes.link}>
                            <HomeIcon href="" className={classes.icon} />
                                Home
                        </Typography>
                        <Typography color="textPrimary" href="/RoomAdmins" onClick={handleGoToFilter} className={classes.link}>
                            <RoomIcon className={classes.icon} />
                                Usuarios
                        </Typography>
                    </Breadcrumbs>


                    <Container>
                        <Container>
                            <Typography color="textPrimary">
                                Adicionar usuário
                            </Typography>
                        </Container>
                        <Container>
                            <FormControl fullWidth variant="outlined" classProduto={classes.formControl}>
                                <TextField
                                    variant="outlined"
                                    id="obs"
                                    fullWidth
                                    label="Nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </FormControl>
                        </Container>

                        <Container>
                            <FormControl fullWidth variant="outlined" classProduto={classes.formControl}>
                                <TextField
                                    variant="outlined"
                                    id="id"
                                    fullWidth
                                    type="number"
                                    label="ID"
                                    value={ambevId}
                                    onChange={(e) => setAmbevId(e.target.value)}
                                />
                            </FormControl>
                        </Container>
                        {/* 
                        <Container>
                            <FormControl fullWidth variant="outlined" classProduto={classes.formControl}>
                                <TextField
                                    variant="outlined"
                                    id="obs"
                                    fullWidth
                                    label="Observações"
                                    value={''}
                                    onChange={(e) => console.log('')}
                                />
                            </FormControl>
                        </Container> */}
                        <Container>
                            <Button style={{ backgroundColor: "#004B93", color: "white" }} variant="contained" onClick={handleAddUser}>
                                Adicionar usuário
                            </Button>
                        </Container>
                        {/* <NewRoomDialog close={handleCloseNewRoom} newRoomStatus={newRoomStatus} addRoom={addRoom} /> */}
                    </Container>

                    <Container>
                        <UsersTable open={handleOpen} setUser={setUser} users={users} />
                    </Container>
                </Paper>
            </Slide>
            <Slide timeout={500} direction="up" in={add} mountOnEnter unmountOnExit>
                <Paper className={classes.paper}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Typography color="inherit" className={classes.link}>
                            <HomeIcon className={classes.icon} />
                                Inicio
                        </Typography>
                        <Link color="inherit" href="/RoomAdmins" onClick={handleGoToFilter} className={classes.link}>
                            <RoomIcon className={classes.icon} />
                                Salas
                        </Link>
                        <Typography color="textPrimary" href="/RoomAdmins" onClick={handleGoToAdd} className={classes.link}>
                            <AddRoomIcon className={classes.icon} />
                                Criar Sala
                        </Typography>
                    </Breadcrumbs>
                    <Container>
                        {/*<EditDialog handleEdit={handleEdit} close={handleCloseEdit} editStatus={editStatus} data={editData} />*/}
                    </Container>
                </Paper>
            </Slide>

        </React.Fragment>
    );
}