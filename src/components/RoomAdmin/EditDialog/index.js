import React, { useState, useEffect } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
import { Container } from './styles';

export default function EditDialog(props) {

    const [gender, setGender] = useState(props.data.gender);
    const [name, setName] = useState(props.data.name);
    const [email, setEmail] = useState(props.data.email);
    const [open, setOpen] = useState(props.editStatus);

    useEffect(() => {
        if (name === '' && email === '' && gender === '') {
            setGender(props.data.gender);
            setName(props.data.name);
            setEmail(props.data.email);
            setOpen(props.editStatus);
        }
        if(!open){
            setGender('');
            setName('');
            setEmail('');
        }
        setOpen(props.editStatus);

    },[name, email, gender, open, props.editStatus, props.data.gender, props.data.name, props.data.email])
    const handleEdit = ()=>{
        props.handleEdit({name,email,gender});
        props.close();
    }

    const handleClose = ()=>{
        props.close();
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
                    {/* <DialogContentText>
                                        Some text
                                    </DialogContentText> */}
                    {/* ACESSAR ROOT NO ARQUIVO STYLES PARA CONFIGURAR TAMANHO, DIREÇÃO ETC */}
                    <form noValidate autoComplete="off">
                        <Container>
                            <TextField
                                id="name"
                                fullWidth
                                label="Name"
                                type="text"
                                value={name}
                                onChange={(event) => { setName(event.target.value) }}
                            />
                        </Container>
                        <Container>
                            <TextField
                                id="email"
                                fullWidth
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Container>
                        <Container>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <Container>
                                    <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={(event) => setGender(event.target.value)}>
                                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                                    </RadioGroup>
                                </Container>
                            </FormControl>
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