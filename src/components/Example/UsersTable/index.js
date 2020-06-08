import React from 'react';
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
import EditIcon from '@material-ui/icons/Edit';
import ViewIcon from '@material-ui/icons/Pageview';



export default function UsersTable(props) {
    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell colSpan="8">Email</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users.map((row, index) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell colSpan="8">{row.email}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete" onClick={() => props.handleOpenDelete({ row, index })}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => props.handleEditStatus({ row, index })}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <ViewIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

