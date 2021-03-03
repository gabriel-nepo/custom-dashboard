import React from 'react';
// import api from '../../../services/api';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


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

                            <TableCell>Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {props.rooms.map((row, index) => {
                            console.log(row)
                            let notaTeo = 0;
                            let notaReal = 0;
                            let users = row.forms.map(element => {
                                notaTeo += element.notaTeorica;
                                notaReal += element.notaReal;
                                return element.userId;
                            })

                            users = [...new Set(users)];

                            if (row.forms.length !== 0) {
                                notaReal = notaReal / row.forms.length;
                                notaTeo = notaTeo / row.forms.length;
                            }

                            return (
                                <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className={classes.heading}>{row.name}</Typography>
                                        <Typography className={classes.secondaryHeading}>Participantes: {users.length}</Typography>
                                        <IconButton aria-label="delete" onClick={() => props.handleOpenDelete({ row, index })}>
                                            <DeleteIcon />
                                        </IconButton>

                                        <IconButton aria-label="delete" onClick={() => handleOpen(row)}>
                                            <ViewIcon />
                                        </IconButton>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Amostra</TableCell>
                                                        <TableCell>Volume</TableCell>
                                                        <TableCell>Validade</TableCell>
                                                        <TableCell>Nota</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {row.samples.map(element => {
                                                        console.log(element);
                                                        return <>



                                                            <TableRow key={row.name}>
                                                                <TableCell component="th" scope="row">
                                                                    {element.produto}
                                                                </TableCell>
                                                                <TableCell>{element.volumeAmostra}</TableCell>
                                                                <TableCell>{element.dataVal}</TableCell>
                                                                <TableCell>{element.notaReal.toFixed(2)}</TableCell>
                                                            </TableRow>
                                                        </>
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

