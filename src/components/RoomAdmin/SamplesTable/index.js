import React, { useEffect, useState } from 'react';
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
// import ViewIcon from '@material-ui/icons/Pageview';
import api from '../../../services/api';


export default function SamplesTable(props) {
    const classes = useStyles();
    const [rows, setRows] = useState(props.samples);

    useEffect(() => {
        setRows(props.samples);
    }, [props.samples]);

    const deleteSample = async (id) => {
        console.log(id)
        await api.delete(`sample/${id}`).then(res => console.log(res)).catch(err => console.log(err));
        await api.get(`sample/list/${props.roomId}`)
        .then(res => {
            setRows(res.data)
        }).catch(err => {
            console.log('erro')
        })
    }


    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Volume</TableCell>
                            <TableCell>Validade</TableCell>
                            <TableCell colSpan="8">Obs</TableCell>
                            <TableCell>Opções</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.produto}>
                                <TableCell component="th" scope="row">
                                    {row.produto}
                                </TableCell>
                                <TableCell>{row.volumeAmostra}</TableCell>
                                <TableCell>{new Date(row.dataVal).toLocaleString().split(' ')[0]}</TableCell>
                                <TableCell colSpan="8">{row.obs}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete" onClick={(e) => deleteSample(row._id)}>
                                        <DeleteIcon />
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


