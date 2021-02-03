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
import QuestionnaireDialog from '../Questionnaire';


export default function RoomsTable(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [room, setRoom] = React.useState([]);


    React.useEffect(() => {
    }, [props.rooms])


    const handleOpen = (room) => {
        setOpen(true);
        setRoom(room);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <QuestionnaireDialog room={room} open={open} handleClose={handleClose} />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Pessoas</TableCell>
                            <TableCell>Nota real</TableCell>
                            <TableCell>Nota teórica</TableCell>
                            <TableCell>N. Amostras</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rooms.map((row, index) => {
                            let notaTeo = 0;
                            let notaReal = 0;
                            let users = row.forms.map(element=>{
                                notaTeo+= element.notaTeorica;
                                notaReal+= element.notaReal;
                                return element.userId;
                            })

                            users = [...new Set(users)];

                            if(row.forms.length !== 0){
                                notaReal = notaReal/row.forms.length;
                                notaTeo = notaTeo/row.forms.length;
                            }



                            return <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{users.length}</TableCell>
                                <TableCell>{notaReal.toFixed(2)}</TableCell>
                                <TableCell>{notaTeo.toFixed(2)}</TableCell>
                                <TableCell>{row.samples.length}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete" onClick={() => props.handleOpenDelete({ row, index })}>
                                        <DeleteIcon />
                                    </IconButton>

                                    <IconButton aria-label="delete" onClick={() => handleOpen(row)}>
                                        <ViewIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

