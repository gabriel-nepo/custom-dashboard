import React, { useState } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Title from '../../Title/';

import CircularProgress from '@material-ui/core/CircularProgress';
import AddressTable from '../AddressTable/';
import AddressDialog from '../AddressDialog/';

import Button from '@material-ui/core/Button';
import { Container } from './styles';
import { Typography } from '@material-ui/core';

export default function NewUserDialog(props) {

    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [aux, setAux] = useState(false);
    const [saving, setSaving] = useState(false);
    const [userSaved, setUserSaved] = useState(false);

    const [addresses, setAddresses] = useState([]);

    const handleAddAddress = (address) => {
        setAddresses([...addresses, address]);
        setAux(false);
    }

    const handleCloseAddressDialog = () => {
        setAux(false);
    }
    console.log(saving);

    return (

        <React.Fragment>
            <AddressDialog handleAddAddress={handleAddAddress} close={handleCloseAddressDialog} open={aux} />
            <Title>User data</Title>
            <form noValidate autoComplete="off">
                <Container>
                    <TextField
                        id="name"
                        fullWidth
                        label="Name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
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
                                {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>
                <Container>
                    {!saving ?
                        <Button style={{ marginBottom: "20px", marginRight: "10px" }} variant="contained" onClick={() => {
                            setSaving(true);
                            setTimeout(() => { setSaving(false); setUserSaved(true); }, 3000)
                        }} color="primary">
                            Save
                                </Button>
                        :
                        <Button disabled style={{ marginBottom: "20px", marginRight: "10px" }} variant="contained" color="primary">
                            Save
                                </Button>
                    }

                    {saving === true ?
                        <CircularProgress size={30} />
                        : null
                    }
                </Container>
                <Container>
                    <Title>Addresses</Title>
                </Container>
                {
                    userSaved ?
                        <Container>
                            <Button style={{ marginBottom: "20px" }} variant="contained" onClick={() => setAux(true)} color="primary">
                                Add address
                                </Button>
                            <AddressTable rows={addresses} />
                        </Container>
                        :
                        <Container>
                            <Typography>Save user data to add addresses</Typography>
                        </Container>
                }
            </form>
        </React.Fragment >
    );
}