import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '../styles';

export default function AddressDialog(props) {

    const [street,setStreet] = useState('');
    const [number,setNumber] = useState(0);
    const [neighborhood,setNeighborhood] = useState('');
    const [city,setCity] = useState('');
    const [other,setOther] = useState('');

    return (
        <>
            <Dialog
                fullWidth
                maxWidth="md"
                open={props.open}
                onClose={() => props.close()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Add Addresses</DialogTitle>
                <DialogContent>
                    <Container>
                        <TextField
                            id="street"
                            fullWidth
                            label="Street"
                            type="text"
                            value={street}
                            onChange={(event) => setStreet(event.target.value)}
                        />
                    </Container>
                    <Container>
                        <TextField
                            id="number"
                            fullWidth
                            label="Number"
                            type="number"
                            value={number}
                            onChange={(event) => setNumber(event.target.value)}
                        />
                    </Container>
                    <Container>
                        <TextField
                            id="neighborhood"
                            fullWidth
                            label="Neighborhood"
                            type="text"
                            value={neighborhood}
                            onChange={(event) => setNeighborhood(event.target.value)}
                        />
                    </Container>
                    <Container>
                        <TextField
                            id="city"
                            fullWidth
                            label="City"
                            type="text"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />
                    </Container>
                    <Container>
                        <TextField
                            id="otherInfo"
                            fullWidth
                            label="Other Info"
                            type="text"
                            value={other}
                            onChange={(event) => setOther(event.target.value)}
                        />
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.close()} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => props.handleAddAddress({ street, city, neighborhood, other, number })} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}



