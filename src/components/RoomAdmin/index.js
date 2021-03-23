import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import api from '../../services/api';
import Button from '@material-ui/core/Button';
import { useStyles } from '../../pages/Dashboard/styles';
import { Container } from './styles';

import EditDialog from './EditDialog';
import NewRoomDialog from './NewRoomDialog';
import DeleteDialog from './DeleteDialog';
import RoomsTable from './RoomsTable';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Group';
import AddRoomIcon from '@material-ui/icons/GroupAdd';
import { CircularProgress } from '@material-ui/core';
// import PubSub from 'pubsub-js';


export default function RoomAdmin() {
    const classes = useStyles();
    const [rooms, setRooms] = useState([]);
    const [editStatus, setEditStatus] = useState(false);
    const [editData, setEditData] = useState({});
    const [newRoomStatus, setNewRoomStatus] = useState(false);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [deletedRoom, setDeletedRoom] = useState({ name: '', people: [], index: -1 });
    const [filter, setFilter] = useState(true);
    const [add, setAdd] = useState(false);
    const [room, setRoom] = useState({});
    const [loading, setLoading] = useState(false);

    const getData = async function fetchData() {
        setLoading(true);
        await api.get(`room/list?page=${1}`).then(res => {
            setRooms(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    React.useEffect(() => {
        getData();
    }, [editStatus, room])


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

    const handleCloseNewRoom = () => {
        setNewRoomStatus(false);
    }

    const addRoom = (room) => {
        setRooms([...rooms, room]);
    }

    const handleOpenDelete = (room) => {
        console.log(room);
        setRoom(room.row);

        setDeletedRoom({ name: '', people: [], index: room.index });
        setDeleteStatus(true);
    }

    const handleCloseDelete = () => {
        setEditData({})
        setDeleteStatus(false);
    }

    const handleConfirm = async () => {
        console.log(room);
        await api.delete(`room/${room._id}`)
            .then(async () => {
                await api.get(`room/list?page=${1}`).then(res => {
                    setRooms(res.data);
                    console.log(rooms);
                }).catch(err => {
                    console.log(err);
                });
            }
            )

        // Pubsub.publish("update");
        handleCloseDelete();
    }

    const handleEditStatus = (room) => {
        console.log(room)
        setEditData(room);
        setEditStatus(true);
    }

    const handleCloseEdit = () => {
        setEditStatus(false);
        setEditData({})

    }
    return (

        <React.Fragment>
            <Slide timeout={500} direction="up" in={filter} mountOnEnter unmountOnExit >
                <Paper className={classes.paper}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Typography color="inherit" className={classes.link}>
                            <HomeIcon className={classes.icon} />
                                Home
                        </Typography>
                        <Typography color="textPrimary" href="/RoomAdmins" onClick={handleGoToFilter} className={classes.link}>
                            <RoomIcon className={classes.icon} />
                                Salas
                        </Typography>
                    </Breadcrumbs>


                    <Container>
                        {/* {
                            localStorage.getItem("@type-user") === "admin" ?

                                : null
                        } */}
                        <Button style={{ backgroundColor: "#004B93", color: "white" }} variant="contained" onClick={handleGoToAdd}>
                            Criar Sala
                        </Button>
                        <EditDialog close={handleCloseEdit} room={editData} editStatus={editStatus} data={editData} />
                        {/* <NewRoomDialog close={handleCloseNewRoom} newRoomStatus={newRoomStatus} addRoom={addRoom} /> */}
                        <DeleteDialog close={handleCloseDelete} room={deletedRoom} confirm={handleConfirm} deleteStatus={deleteStatus} />
                    </Container>

                    <Container>
                        <RoomsTable rooms={rooms} handleEditStatus={handleEditStatus} handleOpenDelete={handleOpenDelete} />
                        {
                            loading ?
                                <div style={{textAlign: "center",marginTop: 15}}>
                                    <CircularProgress size={30} />
                                </div>
                            : null
                        }
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
                        <NewRoomDialog close={handleCloseNewRoom} newRoomStatus={newRoomStatus} addRoom={addRoom} />
                        <DeleteDialog close={handleCloseDelete} room={deletedRoom} confirm={handleConfirm} deleteStatus={deleteStatus} />
                    </Container>
                </Paper>
            </Slide>

        </React.Fragment>
    );
}