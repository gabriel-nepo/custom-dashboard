import React from 'react';
// import api from '../../../services/api';

import Paper from '@material-ui/core/Paper';
import { useStyles } from '../../../pages/Dashboard/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import ViewIcon from '@material-ui/icons/Pageview';


export default function UsersTable(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState([]);

    console.log(props.users)
    React.useEffect(() => {
    }, [props.users])


    const handleOpen = (user) => {
        setOpen(true);
        setUser(user);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users.map((row, index) => {

                            return <TableRow key={row.user}>
                                <TableCell component="th" scope="row">
                                    {row.user}
                                </TableCell>
                                <TableCell>{row.ambevId}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete" onClick={() => {props.setUser(row);props.open()}}>
                                        <DeleteIcon />
                                    </IconButton>

                                    {/* <IconButton aria-label="delete" onClick={() => handleOpen(row)}>
                                        <ViewIcon />
                                    </IconButton> */}
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

