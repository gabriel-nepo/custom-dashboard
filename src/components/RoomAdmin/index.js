import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import Button from '@material-ui/core/Button';
import Title from '../Title';
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
import { TextField } from '@material-ui/core';


export default function RoomAdmin() {
    const classes = useStyles();
    const [rooms, setRooms] = useState([{
        owner: 99818797,
        pessoas: 4,
        nome: "20/01/2020 - Refri",
        real: 7.2,
        teorica: 7.8,
        amostras: [{Nome: "Pepsi",volume: "2L",validade: new Date().toLocaleDateString()}]
    }]);
    const [editStatus, setEditStatus] = useState(false);
    const [editData, setEditData] = useState({ name: '', people: [] , index: -1 });
    const [newRoomStatus, setNewRoomStatus] = useState(false);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [deletedRoom, setDeletedRoom] = useState({  name: '', people: [] , index: -1});
    const [filter, setFilter] = useState(true);
    const [add, setAdd] = useState(false);

    const [samples, setSamples] = useState([]);


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
        const {  name, people, index} = room.row;
        setDeletedRoom({  name: '', people: [] , index: room.index });
        setDeleteStatus(true);
    }

    const handleCloseDelete = () => {
        setDeleteStatus(false);
    }

    const handleConfirm = () => {
        let newRoomsArray = [];
        rooms.map(function (value, key) {
            if (key !== deletedRoom.index) {
                newRoomsArray.push(value);
            }
            return value;
        })
        console.log(newRoomsArray);
        setRooms(newRoomsArray);
        handleCloseDelete();
    }

    const handleEditStatus = (room) => {
        const { name, people, index } = room.row;
        setEditData({  name: '', people: [], index: room.index });
        setEditStatus(true);
    }

    const handleCloseEdit = () => {
        setEditStatus(false);
    }

    const handleEdit = (room) => {
        console.log("editado")
        let newRoomsArray = rooms;
        newRoomsArray[editData.index].name = room.name;
        newRoomsArray[editData.index].people = room.email;
        setRooms(newRoomsArray);
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
                        
                    </Container>

                    <Container>
                        <Button variant="contained" color="primary" onClick={handleGoToAdd}>
                            Criar Sala
                    </Button>
                        <EditDialog handleEdit={handleEdit} close={handleCloseEdit} editStatus={editStatus} data={editData} />
                        {/* <NewRoomDialog close={handleCloseNewRoom} newRoomStatus={newRoomStatus} addRoom={addRoom} /> */}
                        <DeleteDialog close={handleCloseDelete} room={deletedRoom} confirm={handleConfirm} deleteStatus={deleteStatus} />
                    </Container>

                    <Container>
                        <RoomsTable rooms={rooms} handleEditStatus={handleEditStatus} handleOpenDelete={handleOpenDelete} />
                        
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