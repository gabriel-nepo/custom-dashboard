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

export default function Desvios(props) {
    const classes = useStyles();
    console.log(props.desviosSodaLimonada)
    return (
        <>
            { props.sample === "Guaraná" || props.sample === "Guaraná Diet" ?
                props.desviosGuarana.map((element, index) => (
                    <Container key={index}>
                        <FormControl>
                            <FormLabel className={classes.label} component="legend">{element}{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                            <RadioGroup className={classes.radio} value={props.valuesGuarana[index]} onChange={(event) => props.setGuarana[index](event.target.value)}>
                                <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                                <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                                <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                    </Container>
                ))
                : props.sample === "Pepsi" ?
                    props.desviosPepsi.map((element, index) => (
                        <Container key={index}>
                            <FormControl>
                                <FormLabel className={classes.label} component="legend">{element}{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                                <RadioGroup className={classes.radio} value={props.valuesPepsi[index]} onChange={(event) => props.setPepsi[index](event.target.value)}>
                                    <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                                    <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                                    <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                                </RadioGroup>
                            </FormControl>
                            <br />
                        </Container>
                    ))
                    : props.sample === "Pepsi Twist Zero" ?
                        props.desviosPepsiTwist.map((element, index) => (
                            <Container key={index}>
                                <FormControl>
                                    <FormLabel className={classes.label} component="legend">{element}{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                                    <RadioGroup className={classes.radio} value={props.valuesPepsiTwist[index]} onChange={(event) => props.setPepsiTwist[index](event.target.value)}>
                                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                                        <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                                    </RadioGroup>
                                </FormControl>
                                <br />
                            </Container>
                        ))
                        : props.sample === "Sukita Uva" ?
                            props.desviosSukitaUva.map((element, index) => (
                                <Container key={index}>
                                    <FormControl>
                                        <FormLabel className={classes.label} component="legend">{element}{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                                        <RadioGroup className={classes.radio} value={props.valuesSukitaUva[index]} onChange={(event) => props.setSukitaUva[index](event.target.value)}>
                                            <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                                            <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                                            <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                                        </RadioGroup>
                                    </FormControl>
                                    <br />
                                </Container>
                            ))
                            : props.sample === "Sukita Laranja" ?
                                props.desviosSukitaLaranja.map((element, index) => (
                                    <Container key={index}>
                                        <FormControl>
                                            <FormLabel className={classes.label} component="legend">{element}{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                                            <RadioGroup className={classes.radio} value={props.valuesSukitaLaranja[index]} onChange={(event) => props.setSukitaLaranja[index](event.target.value)}>
                                                <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                                                <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                                                <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                                            </RadioGroup>
                                        </FormControl>
                                        <br />
                                    </Container>
                                ))
                                : props.sample === "Soda Limonada" ?
    
                                    props.desviosSodaLimonada.map((element, index) => (
                                        <Container key={index}>
                                            <FormControl>
                                                <FormLabel className={classes.label} component="legend">{element}{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                                                <RadioGroup className={classes.radio} value={props.valuesSodaLimonada[index]} onChange={(event) => props.setSodaLimonada[index](event.target.value)}>
                                                    <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                                                    <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                                                    <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                                                </RadioGroup>
                                            </FormControl>
                                            <br />
                                        </Container>
                                    )) : null

            }

        </>
    )

}

