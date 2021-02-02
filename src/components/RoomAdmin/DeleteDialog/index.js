import React, { useState, useEffect } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';

export default function DeleteDialog(props) {

    const [open, setOpen] = useState(false)
    const [room,setRoom] = useState({});

    useEffect(() => {
        setOpen(props.deleteStatus);
        setRoom(props.room);
    },[props.deleteStatus,props.room])

    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={()=>props.close()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Excluir sala</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Tem certeza que deseja excluir essa sala ${room.name}?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>props.close()} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={()=>props.confirm()} color="primary">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}