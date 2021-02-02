import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        margin: 10
    },
    paper: {
        color: theme.palette.text.secondary,
        maxWidth: '850px',
        width: '100%'
    },
    radio: {
        paddingLeft: '15px',
        paddingTop: '10px'
    },
    label: {
        paddingTop: '10%',
    }
}));

export default function DesviosGerais(props) {
    const classes = useStyles();

    const desvios = ["Limão Tahiti"];
    const errors = [true]
    return (

        <>

            {
                props.desvios.map((element, index) => (
                    <FormControl error={props.errors[index]}>
                        <FormLabel className={classes.label} component="legend">{element}{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup className={classes.radio} onChange={(event) => props.setDesvio[element](event.target.value)}>
                            <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                            <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                            <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                        </RadioGroup>
                    </FormControl>
                ))
            }


        </>
    )
}