import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import Title from '../../Title';
import api from '../../../services/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import SamplesTable from '../SamplesTable';
import SamplesDialog from '../SamplesDialog';

import Button from '@material-ui/core/Button';
import { Container } from './styles';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

export default function NewUserDialog(props) {

    const [aux, setAux] = useState(false);
    const [loading, setLoading] = useState(false);

    const [samples, setSamples] = useState([]);
    const [id, setId] = useState('');

    const [created, setCreated] = useState(false);
    const [roomId, setRoomId] = useState('');
    const [value, setValue] = React.useState('In');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

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
                            value={today.toLocaleString().split(' ')[0] + " - Refri - "+value}
                        />
                        <RadioGroup row aria-label="type" name="type" value={value} onChange={handleChange}>

                            <FormControlLabel
                                value="In"
                                control={<Radio color="primary" />}
                                label="Inprofile"
                                labelPlacement="right"
                            />
                            <FormControlLabel
                                value="AF"
                                control={<Radio color="primary" />}
                                label="Amostra fresca"
                                labelPlacement="right"
                            />
                        </RadioGroup>

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
        </React.Fragment >
    );
}