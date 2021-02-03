import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Container } from '../styles';

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
    return (

        <>

            {
                props.sample ?
                    props.desvios.map((element, index) => {

                        if (index === 0 && (props.sample === "Sukita Uva" || props.sample === "Sukita Laranja" || props.sample === "Soda Limonada")) {
                            return null;
                        }
                        else {
                            return <Container key={index}>
                                <FormControl>
                                    <FormLabel className={classes.label} component="legend">{element}{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                                    <RadioGroup value={props.values[index]} className={classes.radio} onChange={(event) => props.set[index](event.target.value)}>
                                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                                        <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                                    </RadioGroup>
                                </FormControl>
                                <br />
                            </Container>
                        }
                    })
                    : null
            }


        </>
    )
}