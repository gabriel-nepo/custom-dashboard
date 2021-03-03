import React, { useState } from 'react';

import api from '../../../services/api';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // import
import ptBRLocale from 'date-fns/locale/pt-BR';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Container } from '../styles';
import { Select } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
    },
}));

export default function AddressDialog(props) {

    const [produto, setProduto] = useState('');
    const [volume, setVolume] = useState('');
    const [dataVal, setDataVal] = useState(new Date());
    // const [other, setOther] = useState('');
    const [obs,setObs] = useState('');
    const [co2,setCo2] = useState('');
    const [brix,setBrix] = useState('');
    const classes = useStyles();

    const createSample = async () => {
        await api.post('sample/new/', {
            dataVal,
            roomId: props.roomId,
            volumeAmostra: volume,
            produto,
            obs,
            co2,
            brix
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <Dialog
                fullWidth
                maxWidth="md"
                open={props.open}
                onClose={() => props.close()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Adicionar Amostra</DialogTitle>
                <DialogContent>
                    <Container>
                        <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Produto</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={produto}
                                onChange={(e) => setProduto(e.target.value)}
                                label="Produto"
                            >
                                <MenuItem value={'Guaraná'}>Guaraná</MenuItem>
                                <MenuItem value={'Guaraná Diet'}>Guaraná Diet</MenuItem>
                                <MenuItem value={'Pepsi'}>Pepsi</MenuItem>
                                <MenuItem value={'Pepsi Twist Zero'}>Pepsi Twist Zero</MenuItem>
                                <MenuItem value={'Sukita Laranja'}>Sukita Laranja</MenuItem>
                                <MenuItem value={'Sukita Uva'}>Sukita Uva</MenuItem>
                                <MenuItem value={'Soda Limonada'}>Soda Limonada</MenuItem>
                            </Select>
                        </FormControl>
                    </Container>
                    <Container>
                        <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label2">Volume</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label2"
                                id="demo-simple-select-outlined2"
                                value={volume}
                                onChange={(e) => setVolume(e.target.value)}
                                label="Volume"
                            >
                                <MenuItem value={'237 ml'}>237 ml</MenuItem>
                                <MenuItem value={'2 L'}>2 L</MenuItem>
                                <MenuItem value={'2,5 L'}>2.5 L</MenuItem>
                                <MenuItem value={'3 L'}>3 L</MenuItem>
                            </Select>
                        </FormControl>
                    </Container>
                    <Container>
                        <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBRLocale}>
                                <DateTimePicker
                                    variant="inline"
                                    inputVariant="outlined"
                                    label="Data de Validade"
                                    format="dd/MM/yyyy hh:mm"
                                    value={dataVal}
                                    onChange={(date) => setDataVal(date)}
                                    renderInput={(props) => <TextField />}
                                />
                            </MuiPickersUtilsProvider>
                        </FormControl>
                    </Container>
                    <Container>
                        <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <TextField
                                variant="outlined"
                                id="obs"
                                fullWidth
                                label="Observações"
                                value={obs}
                                onChange={(e) => setObs(e.target.value)}
                            />
                        </FormControl>
                    </Container>
                    <Container>
                        <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <TextField
                                variant="outlined"
                                id="co2"
                                fullWidth
                                label="CO2"
                                type="number"
                                value={co2}
                                onChange={(e) => setCo2(e.target.value)}
                            />
                        </FormControl>
                    </Container>
                    <Container>
                        <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <TextField
                                variant="outlined"
                                id="brix"
                                fullWidth
                                type="number"
                                label="Brix"
                                value={brix}
                                onChange={(e) => setBrix(e.target.value)}
                            />
                        </FormControl>
                    </Container>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => props.close()} color="primary">
                        Fechar
                    </Button>
                    <Button onClick={async () => {
                        await createSample()
                        setDataVal(new Date());
                        setProduto('');
                        setVolume('');
                        props.close();
                    }} color="primary">
                        Adicionar à tabela
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}



