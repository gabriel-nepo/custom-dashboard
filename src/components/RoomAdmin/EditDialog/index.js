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
    const [open, setOpen] = useState(props.editStatus);
    const [aux, setAux] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleSaveRoom = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)

        console.log()
    }

    const getData = async () => {
        setLoading(true);
        await api.get(`sample/list/${props.room._id}`)
            .then(res => {
                setSamples(res.data);
                // setLoading(false);
            }).catch(err => {
                // setLoading(false);
                console.log('erro')
            })
    }

    useEffect(() => {
        console.log(props)
        getData()
        setOpen(props.editStatus);

    }, [props.room, props.editStatus])


    const handleClose = () => {
        setSamples([])
        props.close();
    }
    const handleCloseSamplesDialog = () => {
        setSamples([])
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
                <DialogTitle id="form-dialog-title">
                    <div style={{ padding: 10 }}>
                        Amostras
                    </div>
                </DialogTitle>
                <DialogContent>
                    <>
                        <Container>
                            <Button style={{ marginBottom: "20px" }} variant="outlined" onClick={() => setAux(true)} color="primary">
                                Adicionar Amostras
                            </Button>
                            <SamplesTable samples={samples} roomId={props.roomId} load={<CircularProgress style={{verticalAlign: "top"}} size={20} />} />
                        </Container>
                        <Container>
                            {/* <Button style={{ marginBottom: "20px", backgroundColor: "#004B93", color: "white" }} variant="contained" onClick={() => handleSaveRoom()} color="primary">
                                Salvar sala
                                </Button> */}
                            {loading ?
                                <div style={{textAlign: "center"}}>
                                    <CircularProgress size={30} />
                                </div>
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