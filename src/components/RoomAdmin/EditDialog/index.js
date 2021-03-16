import React, { useState, useEffect } from 'react';




import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Title from '../../Title';
import CircularProgress from '@material-ui/core/CircularProgress';
import SamplesTable from '../SamplesTable';
import SamplesDialog from '../SamplesDialog';
import api from '../../../services/api';
import Button from '@material-ui/core/Button';
import { Container } from './styles';

export default function EditDialog(props) {
    const [samples, setSamples] = useState([]);

    const [gender, setGender] = useState(props.data.gender);
    const [name, setName] = useState(props.data.name);
    const [email, setEmail] = useState(props.data.email);
    const [open, setOpen] = useState(props.editStatus);
    const [aux, setAux] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSaveRoom = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)

        console.log()
    }

    const getData = async () => {
        await api.get(`sample/list/${props.room._id}`)
            .then(res => {
                setSamples(res.data);
            }).catch(err => {
                console.log('erro')
            })
    }

    useEffect(() => {
        console.log(props)
        getData()
        setOpen(props.editStatus);

    }, [props.room,props.editStatus])
    const handleEdit = () => {
        props.handleEdit({ name, email, gender });
        props.close();
    }

    const handleClose = () => {
        props.close();
    }
    const handleCloseSamplesDialog = () => {
        setAux(false);
        getData();
    }


    return (

        <React.Fragment>
            <SamplesDialog close={handleCloseSamplesDialog} open={aux} roomId={props.room._id} />
            <Dialog
                fullWidth
                maxWidth="lg"
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title"><Title>Amostras</Title></DialogTitle>
                <DialogContent>
                    <>
                        <Container>
                            <Button style={{ marginBottom: "20px" }} variant="outlined" onClick={() => setAux(true)} color="primary">
                                Adicionar Amostras
                            </Button>
                            <SamplesTable samples={samples} roomId={props.roomId} />
                        </Container>
                        <Container>
                            {/* <Button style={{ marginBottom: "20px", backgroundColor: "#004B93", color: "white" }} variant="contained" onClick={() => handleSaveRoom()} color="primary">
                                Salvar sala
                                </Button> */}
                            {loading ?
                                <CircularProgress style={{ marginLeft: 10 }} size={30} />
                                : null
                            }

                        </Container>
                    </>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Fechar
                    </Button>
                    <Button onClick={() => handleSaveRoom()} color="primary">
                        Salvar sala
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}