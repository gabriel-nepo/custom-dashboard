import React, { useState } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Title from '../../Title';

import CircularProgress from '@material-ui/core/CircularProgress';
import SamplesTable from '../SamplesTable';
import SamplesDialog from '../SamplesDialog';

import Button from '@material-ui/core/Button';
import { Container } from './styles';
import { Typography } from '@material-ui/core';

export default function NewUserDialog(props) {

    const [aux, setAux] = useState(false);
    const [participants,setParticipants] = useState('');
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(false);

    const [samples, setSamples] = useState([]);
    const [id,setId] = useState('');

    const handleSaveRoom = ()=>{
        setLoading(true)
        setTimeout(()=>setLoading(false),2000)
        
        console.log({owner: id,samples: samples})
    }

    const handleAddSamples = (sample) => {
        setSamples([...samples, sample]);
        setAux(false);
    }

    const handleCloseSamplesDialog = () => {
        setAux(false);
    }
    console.log(saving);

    const today = new Date(Date.now())

    return (

        <React.Fragment>
            <SamplesDialog handleAddSamples={handleAddSamples} close={handleCloseSamplesDialog} open={aux} />
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
                            value={today.toLocaleString().split(' ')[0]+" - Refri"}
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
                            onChange={(e)=>setId(e.target.value)}
                        />
                    </Container>
                    
                    <div style={{marginTop: "5%"}}>
                        <Title>Amostras</Title>
                    </div>
                        <Container>
                            <Button style={{ marginBottom: "20px" }} variant="outlined" onClick={() => setAux(true)} color="primary">
                                Adicionar Amostras
                            </Button>
                            <SamplesTable rows={samples} />
                        </Container>
                        <Container>
                            <Button style={{ marginBottom: "20px" }} variant="contained" onClick={() => handleSaveRoom()} color="primary">
                                Salvar sala
                            </Button>
                            {loading?
                                <CircularProgress style={{marginLeft: 10}}size={30}/>
                                :null
                            }
                            
                        </Container>
                </Container>
                

               
            </form>
        </React.Fragment >
    );
}