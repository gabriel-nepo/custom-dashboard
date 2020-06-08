import React, {useEffect,useState} from 'react';
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
    const [rows,setRows] = useState(props.rows);

    useEffect(()=>{
        setRows(props.rows)
    },[props.rows]);

    console.log(props);
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Street</TableCell>
                            <TableCell colSpan="8">Number</TableCell>
                            <TableCell>Neighborhood</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.street}>
                                <TableCell component="th" scope="row">
                                    {row.street}
                                </TableCell>
                                <TableCell colSpan="8">{row.number}</TableCell>
                                <TableCell>{row.neighborhood}</TableCell>
                                <TableCell>{row.city}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete" onClick={() => console.log('oi')}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => console.log('oi')}>
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


