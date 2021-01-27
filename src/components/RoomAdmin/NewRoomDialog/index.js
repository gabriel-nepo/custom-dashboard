import React, { useState, useEffect } from 'react';
import PubSub from 'pubsub-js';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Title from '../../Title';
import api from '../../../services/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import SamplesTable from '../SamplesTable';
import SamplesDialog from '../SamplesDialog';

import Button from '@material-ui/core/Button';
import { Container } from './styles';
import { Typography } from '@material-ui/core';

export default function NewUserDialog(props) {

    const [aux, setAux] = useState(false);
    const [participants, setParticipants] = useState('');
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(false);

    const [samples, setSamples] = useState([]);
    const [id, setId] = useState('');

    const [created, setCreated] = useState(false);
    const [roomId, setRoomId] = useState('');


    const getData = async () => {
        await api.get(`sample/list/${roomId}`)
            .then(res => {
                setSamples(res.data)
        }).catch(err=>{
            console.log('erro')
        })
    }

    useEffect(()=>{
        getData();
    },[]);


    const today = new Date(Date.now())
    const name = today.toLocaleString().split(' ')[0] + " - Refri"

    const handleCreateRoom = () => {
        setLoading(true);
        api.post('room/new', {
            name,
            type: "refri",
            creatorAmbevId: id
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
    console.log(saving);



    return (

        <React.Fragment>
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
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Container>
                    <Container>
                        <Button disabled={created} style={{ marginBottom: "20px" }} variant="contained" onClick={() => handleCreateRoom()} color="primary">
                            Criar sala
                        </Button>
                        {loading ?
                            <CircularProgress style={{ marginLeft: 10 }} size={30} />
                            : null
                        }
                    </Container>

                    { created?
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
                                <Button style={{ marginBottom: "20px" }} variant="contained" onClick={() => handleSaveRoom()} color="primary">
                                    Salvar sala
                                </Button>
                                {loading ?
                                    <CircularProgress style={{ marginLeft: 10 }} size={30} />
                                    : null
                                }

                            </Container>
                        </>
                        :null
                    }
                </Container>



            </form>
        </React.Fragment >
    );
}