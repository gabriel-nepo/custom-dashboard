import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import Title from '../../Title';
import api from '../../../services/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import SamplesTable from '../SamplesTable';
import SamplesDialog from '../SamplesDialog';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { Container } from './styles';

export default function NewUserDialog(props) {

    const [aux, setAux] = useState(false);
    const [loading, setLoading] = useState(false);

    const [samples, setSamples] = useState([]);
    const [id, setId] = useState('');

    const [created, setCreated] = useState(false);
    const [roomId, setRoomId] = useState('');
    const [open, setOpen] = useState(props.editStatus);

    const handleEdit = () => {
        props.handleEdit({});
        props.close();
    }

    const handleClose = () => {
        props.close();
    }
    const getData = async () => {
        await api.get(`sample/list/${roomId}`)
            .then(res => {
                setSamples(res.data)
            }).catch(err => {
                console.log('erro')
            })
    }

    useEffect(() => {
        getData();
    }, []);


    const today = new Date(Date.now())
    const name = today.toLocaleString().split(' ')[0] + " - Refri"

    const handleCreateRoom = () => {
        setLoading(true);
        api.post('room/new', {
            name,
            type: "refri",
            creatorAmbevId: localStorage.getItem("@user")
        }).then(res => {
            console.log(res.data);
            setRoomId(res.data._id);
            setLoading(false);
            setCreated(true);
        }).catch(err => {
            console.log('erro ao salvar sala');
            setLoading(false);
        })

    }

    const handleSaveRoom = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)

        console.log({ owner: id, samples: samples })
    }

    const handleCloseSamplesDialog = () => {
        setAux(false);
        getData();
    }


    return (


        <React.Fragment>

            <Dialog
                fullWidth
                maxWidth="lg"
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
                <DialogContent>
                    <SamplesDialog close={handleCloseSamplesDialog} open={aux} roomId={roomId} />
                    <form noValidate autoComplete="off">
                        <Container>
                            <Title>Nome da Sala</Title>
                            <Container>
                                <TextField
                                    variant="outlined"
                                    disabled
                                    id="name"
                                    fullWidth
                                    label="Name"
                                    type="text"
                                    value={today.toLocaleString().split(' ')[0] + " - Refri"}
                                />
                            </Container>
                            <Container>
                                <TextField
                                    variant="outlined"
                                    id="id"
                                    fullWidth
                                    label="ID do criador"
                                    type="number"
                                    value={localStorage.getItem("@user")}
                                    disabled
                                />
                            </Container>
                            <Container>
                                <Button color="primary" style={{ color: "white", marginBottom: "20px" }} disabled={created} variant="contained" onClick={() => handleCreateRoom()} >
                                    Criar sala
                        </Button>
                                {loading ?
                                    <CircularProgress style={{ marginLeft: 10 }} size={30} />
                                    : null
                                }
                            </Container>

                            {created ?
                                <>
                                    <div style={{ marginTop: "5%" }}>
                                        <Title>Amostras</Title>
                                    </div>
                                    <Container>
                                        <Button style={{ marginBottom: "20px" }} variant="outlined" onClick={() => setAux(true)} color="primary">
                                            Adicionar Amostras
                                </Button>
                                        <SamplesTable samples={samples} roomId={roomId} />
                                    </Container>
                                    <Container>
                                        <Button style={{ marginBottom: "20px", backgroundColor: "#004B93", color: "white" }} variant="contained" onClick={() => handleSaveRoom()} color="primary">
                                            Salvar sala
                                </Button>
                                        {loading ?
                                            <CircularProgress style={{ marginLeft: 10 }} size={30} />
                                            : null
                                        }

                                    </Container>
                                </>
                                : null
                            }
                        </Container>



                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleEdit} color="primary">
                        Edit
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}