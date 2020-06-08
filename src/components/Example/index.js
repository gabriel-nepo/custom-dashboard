import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import Button from '@material-ui/core/Button';
import Title from '../Title';
import { useStyles } from '../../pages/Dashboard/styles';
import { Container } from './styles';

import EditDialog from './EditDialog/';
import NewUserDialog from './NewUserDialog/';
import DeleteDialog from './DeleteDialog/';
import UsersTable from './UsersTable';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import UserIcon from '@material-ui/icons/Group';
import AddUserIcon from '@material-ui/icons/GroupAdd';


export default function Exemple() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [editStatus, setEditStatus] = useState(false);
    const [editData, setEditData] = useState({ name: '', email: '', gender: '', index: -1 });
    const [newUserStatus, setNewUserStatus] = useState(false);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [deletedUser, setDeletedUser] = useState({ name: '', email: '', gender: '', index: -1 });
    const [filter, setFilter] = useState(true);
    const [add, setAdd] = useState(false);

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

    const handleCloseNewUser = () => {
        setNewUserStatus(false);
    }

    const addUser = (user) => {
        setUsers([...users, user]);
    }

    const handleOpenDelete = (user) => {
        console.log(user);
        const { name, email, gender } = user.row;
        setDeletedUser({ name, email, gender, index: user.index });
        setDeleteStatus(true);
    }

    const handleCloseDelete = () => {
        setDeleteStatus(false);
    }

    const handleConfirm = () => {
        let newUsersArray = [];
        users.map(function (value, key) {
            if (key !== deletedUser.index) {
                newUsersArray.push(value);
            }
            return value;
        })
        console.log(newUsersArray);
        setUsers(newUsersArray);
        handleCloseDelete();
    }

    const handleEditStatus = (user) => {
        const { name, email, gender } = user.row;
        setEditData({ name, email, gender, index: user.index });
        setEditStatus(true);
    }

    const handleCloseEdit = () => {
        setEditStatus(false);
    }

    const handleEdit = (user) => {
        console.log("editado")
        let newUsersArray = users;
        newUsersArray[editData.index].name = user.name;
        newUsersArray[editData.index].email = user.email;
        newUsersArray[editData.index].gender = user.gender;
        setUsers(newUsersArray);
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
                        <Typography color="textPrimary" href="/examples" onClick={handleGoToFilter} className={classes.link}>
                            <UserIcon className={classes.icon} />
                                Users
                        </Typography>
                    </Breadcrumbs>

                    <Container>
                        <Title>Filtro aqui</Title>
                    </Container>

                    <Container>
                        <Button variant="contained" color="primary" onClick={handleGoToAdd}>
                            Add
                    </Button>
                        <EditDialog handleEdit={handleEdit} close={handleCloseEdit} editStatus={editStatus} data={editData} />
                        {/* <NewUserDialog close={handleCloseNewUser} newUserStatus={newUserStatus} addUser={addUser} /> */}
                        <DeleteDialog close={handleCloseDelete} user={deletedUser} confirm={handleConfirm} deleteStatus={deleteStatus} />
                    </Container>

                    <Container>
                        <UsersTable users={users} handleEditStatus={handleEditStatus} handleOpenDelete={handleOpenDelete} />
                    </Container>
                </Paper>
            </Slide>
            <Slide timeout={500} direction="up" in={add} mountOnEnter unmountOnExit>
                <Paper className={classes.paper}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Typography color="inherit" className={classes.link}>
                            <HomeIcon className={classes.icon} />
                                Home
                        </Typography>
                        <Link color="inherit" href="/examples" onClick={handleGoToFilter} className={classes.link}>
                            <UserIcon className={classes.icon} />
                                Users
                        </Link>
                        <Typography color="textPrimary" href="/examples" onClick={handleGoToAdd} className={classes.link}>
                            <AddUserIcon className={classes.icon} />
                                Add user
                        </Typography>
                    </Breadcrumbs>
                    <Container>
                        <EditDialog handleEdit={handleEdit} close={handleCloseEdit} editStatus={editStatus} data={editData} />
                        <NewUserDialog close={handleCloseNewUser} newUserStatus={newUserStatus} addUser={addUser} />
                        <DeleteDialog close={handleCloseDelete} user={deletedUser} confirm={handleConfirm} deleteStatus={deleteStatus} />
                    </Container>
                </Paper>
            </Slide>

        </React.Fragment>
    );
}