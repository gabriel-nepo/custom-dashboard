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

export default function DefeitosGerais(props) {
    const classes = useStyles();

    const defeitos = ["Cloro", "Amargor", "Oxidação", "Queimado", "Plástico", "Medicinal", "Terra", "Metálico", "Azedo", "Acético", "Químico", "Melaço", "Açucar não tratado", "Adstringente", "Outros"];

    return (
        <>
            {defeitos.map(element => (
                <FormControl>
                    <FormLabel className={classes.label} component="legend">{element}</FormLabel>
                    <RadioGroup defaultValue="" className={classes.radio} onChange={(event) => console.log(event.target.value)}>
                        <FormControlLabel value="" control={<Radio />} label="N/A" />
                        <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                        <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                        <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                    </RadioGroup>
                </FormControl>
            ))}

        </>
    )

}

