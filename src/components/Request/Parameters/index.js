import React,{useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import NumberFormatCustom from './inputMask';
import test from '../selectData';
import { Container} from '../styles';

export default function Parameters() {
    const [manufacturer, setManufacturer] = useState('');
    const [original, setOriginal] = useState('');
    const [name, setName] = useState('');
    const [equipment, setEquipment] = useState('')
    const [sap, setSap] = useState('');
    const [area, setArea] = useState('');
    const [line, setLine] = useState('');
    const [tag, setTag] = useState('');
    const [price, setPrice] = React.useState({
        numberformat: ' ',
    });
    const handleChange = (event) => {
        setPrice({
            ...price,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <form noValidate autoComplete="off">
                <Container>
                    <TextField
                        id="name"
                        fullWidth
                        variant="outlined"
                        placeholder="Digite o nome da peça"
                        label="Nome"
                        type="text"
                        value={name}
                        onChange={(event) => { setName(event.target.value) }}
                    />
                </Container>
                <Container>
                    <TextField
                        id="sapCode"
                        fullWidth
                        variant="outlined"
                        placeholder="Digite o código SAP da peça"
                        label="Código SAP"
                        type="text"
                        value={sap}
                        onChange={(event) => { setSap(event.target.value) }}
                    />
                </Container>
                <Container>
                    <TextField
                        id="area"
                        select
                        fullWidth
                        label="Área"
                        value={area}
                        onChange={(event) => setArea(event.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Escolha a área"
                        variant="outlined"
                    >
                        {test.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Container>

                <Container>
                    <TextField
                        id="line"
                        select
                        fullWidth
                        label="Linha"
                        value={line}
                        onChange={(event) => setLine(event.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Escolha a linha"
                        variant="outlined"
                    >
                        {test.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Container>

                <Container>
                    <TextField
                        id="equipment"
                        fullWidth
                        variant="outlined"
                        placeholder="Digite o nome da máquina ou equipamento"
                        label="Maquina/Equipamento"
                        type="text"
                        value={equipment}
                        onChange={(event) => { setEquipment(event.target.value) }}
                    />
                </Container>

                <Container>
                    <TextField
                        id="tag"
                        fullWidth
                        variant="outlined"
                        placeholder="Digite a TAG ou a Localização"
                        label="Tag/Localização"
                        type="text"
                        value={tag}
                        onChange={(event) => { setTag(event.target.value) }}
                    />
                </Container>
                <Container>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A peça é original?</FormLabel>
                        <Container>
                            <RadioGroup aria-label="original" name="original" value={original} onChange={(event) => setOriginal(event.target.value)}>
                                <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                                <FormControlLabel value="no" control={<Radio />} label="Não" />
                            </RadioGroup>
                        </Container>
                    </FormControl>
                </Container>

                <Container>
                    <TextField
                        id="manufacturer"
                        fullWidth
                        variant="outlined"
                        placeholder="Digite o nome do fabricante"
                        label="Fabricante"
                        type="text"
                        value={manufacturer}
                        onChange={(event) => { setManufacturer(event.target.value) }}
                    />
                </Container>
                <Container>
                    <TextField
                        label="Preço da peça"
                        fullWidth
                        variant="outlined"
                        value={price.numberformat}
                        onChange={handleChange}
                        name="numberformat"
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                </Container>

            </form>
        </> 
    )



}