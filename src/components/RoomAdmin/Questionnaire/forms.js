import React from 'react';
import api from '../../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DefeitosGerais from './DefeitosGerais';
import DesviosGerais from './DesviosGerais';
import Desvios from './Desvios';



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
    paddingTop: '10%'
  }
}));


function SimpleDialog(props) {
  const { handleClose, open, data, param } = props;

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="alert-dialog-slide-title">{"Feedback"}</DialogTitle>
      <DialogContent style={{ width: '300px' }}>
        <DialogContentText style={{ textAlign: 'center' }} id="alert-dialog-slide-description">
          {data === undefined ?
            <CircularProgress />
            :
            <>
              {data.frase}
            </>
          }
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default function Forms(props) {
  const classes = useStyles();
  //const [sample, setSample] = React.useState('');
  const [frutal, setFrutal] = React.useState('');
  const [laranja, setLaranja] = React.useState('');
  const [algodaoDoce, setAlgodaoDoce] = React.useState('');
  const [dulcor, setDulcor] = React.useState('');
  const [cola, setCola] = React.useState('');
  const [especiarias, setEspeciarias] = React.useState('');
  const [co2, setCo2] = React.useState('');
  const [acidez, setAcidez] = React.useState('');
  const [grape, setGrape] = React.useState("");
  const [baunilha, setBaunilha] = React.useState("");
  const [floral, setFloral] = React.useState('');
  const [flavor, setFlavor] = React.useState('');
  const [number, setNumber] = React.useState(2);
  const [toffee, setToffee] = React.useState('');
  const [guarana, setGuarana] = React.useState('');
  // const [adstringencia, setAdstringencia] = React.useState('');
  const [limao, setLimao] = React.useState('');
  const [limaoPepsi, setLimaoPepsi] = React.useState('');
  const [cereja, setCereja] = React.useState('');
  const [adstringencia, setAdstringencia] = React.useState('');

  const [nota, setNota] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const [sampleError, setSampleError] = React.useState(false);
  const [frutalError, setFrutalError] = React.useState(false);
  const [laranjaError, setLaranjaError] = React.useState(false);
  const [algodaoDoceError, setAlgodaoDoceError] = React.useState(false);
  const [grapeError, setGrapeError] = React.useState(false);
  const [baunilhaError, setBaunilhaError] = React.useState(false);
  const [floralError, setFlorarError] = React.useState(false);



  const [dulcorError, setDulcorError] = React.useState(false);
  const [colaError, setColaError] = React.useState(false);
  const [especiariasError, setEspeciariasError] = React.useState(false);
  const [cor2Error, setCo2Error] = React.useState(false);
  const [acidezError, setAcidezError] = React.useState(false);
  const [flavorError, setFlavorError] = React.useState(false);
  const [toffeeError, setToffeeError] = React.useState(false);
  const [guaranaError, setGuaranaError] = React.useState(false);
  const [adstringenciaError, setAdstringenciaError] = React.useState(false);
  const [limaoError, setLimaoError] = React.useState(false);
  const [limaoPepsiError, setLimaoPepsiError] = React.useState(false);
  const [cerejaError, setCerejaError] = React.useState(false);

  const [notaError, setNotaError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);


  const [data, setData] = React.useState(undefined);

  async function fetchData() {
    const response = await fetch('https://sensorial-refri-backend.herokuapp.com/result', {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ refri: "teste", deu: 'Sim' })
    });
    const json = await response.json();
    setData(json);
  }

  const handleChange = (event) => {
    setSample(event.target.value);

  };

  const handleCheckError = () => {
    let hasError = false;
    if (sample === '') {
      hasError = true;
      setSampleError(true);
    }
    else {
      setSampleError(false);
    }
    if (dulcor === '') {
      hasError = true;
      setDulcorError(true);
    }
    else {
      setDulcorError(false);
    }
    if (co2 === '') {
      hasError = true;
      setCo2Error(true);
    }
    else {
      setCo2Error(false);
    }
    if (acidez === '') {
      hasError = true;
      setAcidezError(true);
    }
    else {
      setAcidezError(false);
    }
    if (flavor === '') {
      hasError = true;
      setFlavorError(true);
    }
    else {
      setFlavorError(false);
    }
    if (nota === '') {
      hasError = true;
      setNotaError(true);
    }
    else {
      setNotaError(false);
    }

    if (sample === 'Guaraná') {
      if (frutal === '') {
        hasError = true;
        setFrutalError(true);
      }
      else {
        setFrutalError(false);
      }
      if (guarana === '') {
        hasError = true;
        setGuaranaError(true);
      }
      else {
        setGuaranaError(false);
      }

      if (toffee === '') {
        hasError = true;
        setToffeeError(true);
      }
      else {
        setToffeeError(false);
      }
    }
    else if (sample === 'Pepsi') {
      if (frutal === '') {
        hasError = true;
        setFrutalError(true);
      }
      else {
        setFrutalError(false);
      }
      if (cola === '') {
        hasError = true;
        setColaError(true);
      }
      else {
        setColaError(false);
      }
      if (especiarias === '') {
        hasError = true;
        setEspeciariasError(true);
      }
      else {
        setEspeciariasError(false);
      }
    }
    else if (sample === 'Sukita Mista') {
      if (laranja === '') {
        hasError = true;
        setLaranjaError(true);
      }
      else {
        setLaranjaError(false);
      }
    }
    else if (sample === 'Sukita Uva') {
      if (algodaoDoce === '') {
        hasError = true;
        setAlgodaoDoceError(true);
      }
      else {
        setAlgodaoDoceError(false);
      }
    }
    else if (sample === 'Soda Limonada' || sample === 'Pepsi Twist Zero') {
      if (limao === '') {
        hasError = true;
        setLimaoError(true);
      }
      else {
        setLimaoError(false);
      }
    }
    else if (sample === 'Guaraná Zero') {
      if (frutal === '') {
        hasError = true;
        setFrutalError(true);
      }
      else {
        setFrutalError(false);
      }
      if (adstringencia === '') {
        hasError = true;
        setAdstringenciaError(true);
      }
      else {
        setAdstringenciaError(false);
      }
    }
    if (hasError) {
      setErrorMessage("Há opções que não foram marcadas!");
      return true;
    }
    else {
      setErrorMessage('');
      return false;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!handleCheckError()) {
      setOpen(true);
      await fetchData();
    }
  }

  const [age, setAge] = React.useState('');

  const [participants, setParticipants] = React.useState([]);
  const [participant, setParticipant] = React.useState([]);
  const [sample, setSample] = React.useState([]);
  const getData = async function fetchData() {

    await api.get(`user/list`).then(res => {
      console.log(res.data);
      setParticipants(res.data);
    }).catch(err => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    getData();
  }, [])

  console.log(guarana);
  console.log(cola)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div style={{ background: '#008272', display: 'block', padding: '50px', fontSize: '38px', }}>

          <div style={{ color: 'white' }}>
            Sensorial Refri
          </div>
        </div>
        <div style={{ display: 'block', padding: '10%' }}>


          <FormControl fullWidth error={sampleError} component="fieldset">
            <FormControl fullWidth variant="outlined" className={classes.formControl} style={{ marginBottom: "2rem" }}>
              <InputLabel id="demo-simple-select-outlined-label">Participante</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={participant}
                onChange={(e) => {
                  setParticipant(e.target.value)
                }}
                label="Participante"
              >
                {participants.map(element => {
                  return <MenuItem value={element.user}>{element.user}</MenuItem>
                })}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" className={classes.formControl} style={{ marginBottom: "2rem" }}>
              <InputLabel id="demo-simple-select-outlined-label">Amostra</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={sample}
                onChange={(e) => handleChange(e)}
                label="Amostra"
              >
                {props.room.samples.map((element, index) => {
                  return <MenuItem value={element.produto}>{index + 1} - {element.produto}</MenuItem>
                })}
              </Select>
            </FormControl>

            {
              (sample === "Guaraná Zero" || sample === "Guaraná") ?
                <>
                  <FormControl error={guaranaError}>
                    <FormLabel className={classes.label} component="legend">Guaraná{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={guarana} onChange={(event) => setGuarana(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                    </RadioGroup>
                  </FormControl>
                  <FormControl error={toffeeError}>
                    <FormLabel className={classes.label} component="legend">Toffee{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={toffee} onChange={(event) => setToffee(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                    </RadioGroup>
                  </FormControl>
                </>
                : (sample === "Pepsi") ?
                  <>
                    <FormControl error={colaError}>
                      <FormLabel className={classes.label} component="legend">Cola{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={cola} onChange={(event) => setCola(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                      </RadioGroup>
                    </FormControl>
                    <FormControl error={adstringenciaError}>
                      <FormLabel className={classes.label} component="legend">Adstringência{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={adstringencia} onChange={(event) => setAdstringencia(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                      </RadioGroup>
                    </FormControl>

                    <FormControl error={especiariasError}>
                      <FormLabel className={classes.label} component="legend">Especiarias{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={especiariasError} onChange={(event) => setEspeciarias(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                      </RadioGroup>
                    </FormControl>

                    <FormControl error={limaoPepsiError}>
                      <FormLabel className={classes.label} component="legend">Limão{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={limaoPepsi} onChange={(event) => setLimaoPepsi(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                      </RadioGroup>
                    </FormControl>

                    <FormControl error={cerejaError}>
                      <FormLabel className={classes.label} component="legend">Cereja{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={cereja} onChange={(event) => setCereja(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                      </RadioGroup>
                    </FormControl>
                  </>
                  : (sample === "Sukita Uva") ?
                    <>
                      <FormControl error={grapeError}>
                        <FormLabel className={classes.label} component="legend">Uva{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup className={classes.radio} value={grape} onChange={(event) => setGrape(event.target.value)}>
                          <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                          <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl error={baunilhaError}>
                        <FormLabel className={classes.label} component="legend">Baunilha{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup className={classes.radio} value={baunilha} onChange={(event) => setBaunilha(event.target.value)}>
                          <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                          <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>

                      <FormControl error={algodaoDoceError}>
                        <FormLabel className={classes.label} component="legend">Algodão Doce{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup className={classes.radio} value={algodaoDoce} onChange={(event) => setAlgodaoDoce(event.target.value)}>
                          <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                          <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>

                      <FormControl error={floralError}>
                        <FormLabel className={classes.label} component="legend">Floral{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup className={classes.radio} value={floral} onChange={(event) => setLimaoPepsi(event.target.value)}>
                          <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                          <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>

                    </>
                    : (sample === "Sukita Mista") ?
                      <FormControl error={laranjaError}>
                        <FormLabel className={classes.label} component="legend">Laranja{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup className={classes.radio} value={laranja} onChange={(event) => setLaranja(event.target.value)}>
                          <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                          <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      : (sample === "Soda Limonada") ?
                        <FormControl error={limaoError}>
                          <FormLabel className={classes.label} component="legend">Limão{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                          <RadioGroup className={classes.radio} value={limao} onChange={(event) => setLimao(event.target.value)}>
                            <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                            <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                            <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                          </RadioGroup>
                        </FormControl>
                        : null

            }


            {/* {(sample === 'Guaraná Zero' || sample === 'Pepsi' || sample === 'Guaraná') ?
              <FormControl error={frutalError}>
                <FormLabel className={classes.label} component="legend">1. Frutal{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                <RadioGroup className={classes.radio} onChange={(event) => setFrutal(event.target.value)}>
                  <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                  <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                  <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                </RadioGroup>
              </FormControl> : null
            }
            {sample === 'Pepsi' ?
              <>
                {frutal !== '' ?
                  <FormControl error={limaoPepsiError}>
                    <FormLabel className={classes.label} component="legend">Limão{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={limaoPepsi} onChange={(event) => setLimaoPepsi(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
                {frutal !== '' ?
                  <FormControl error={cerejaError}>
                    <FormLabel className={classes.label} component="legend">Cereja{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={cereja} onChange={(event) => setCereja(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
                {frutal !== '' ?
                  <FormControl error={especiariasError}>
                    <FormLabel className={classes.label} component="legend">Adstringência{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={adstringencia} onChange={(event) => setAdstringencia(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
                {frutal !== '' ?
                  <FormControl error={especiariasError}>
                    <FormLabel className={classes.label} component="legend">Especiarias{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={especiarias} onChange={(event) => setEspeciarias(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}

                {especiarias !== '' ?
                  <FormControl error={colaError}>
                    <FormLabel className={classes.label} component="legend">Cola{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={cola} onChange={(event) => setCola(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
              </>
              : sample === 'Guaraná' || sample === "Guaraná Zero" ?
                <>
                  {frutal !== '' ?
                    <FormControl error={toffeeError}>
                      <FormLabel className={classes.label} component="legend">2. Toffee{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={toffee} onChange={(event) => setToffee(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                      </RadioGroup>
                    </FormControl> : null}

                  {toffee !== '' ?
                    <FormControl error={guaranaError}>
                      <FormLabel className={classes.label} component="legend">3. Guaraná{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={guarana} onChange={(event) => setGuarana(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                      </RadioGroup>
                    </FormControl> : null}

                </> : null
            }
            {(sample === "Sukita Mista") ?
              <FormControl error={laranjaError}>
                <FormLabel className={classes.label} component="legend">1. Laranja{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                <RadioGroup className={classes.radio} value={laranja} onChange={(event) => setLaranja(event.target.value)}>
                  <FormControlLabel value="passada" control={<Radio />} label="Passada" />
                  <FormControlLabel value="fresca" control={<Radio />} label="Fresca" />
                </RadioGroup>
              </FormControl>
              : (sample === "Sukita Uva") ?
                <FormControl error={algodaoError}>
                  <FormLabel className={classes.label} component="legend">1. Algodão Doce{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                  <RadioGroup className={classes.radio} value={algodaoDoce} onChange={(event) => setAlgodaoDoce(event.target.value)}>
                    <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                    <FormControlLabel value="caracteristico" control={<Radio />} label="Característico" />
                  </RadioGroup>
                </FormControl>
                : (sample === 'Soda Limonada' || sample === 'Pepsi Twist Zero') ?
                  <FormControl error={limaoError}>
                    <FormLabel className={classes.label} component="legend">1. Limão{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={limao} onChange={(event) => setLimao(event.target.value)}>
                      <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                      <FormControlLabel value="caracteristico" control={<Radio />} label="Característico" />
                    </RadioGroup>
                  </FormControl>
                  : null
            }
            {(limao !== '' || laranja !== '' || guarana !== '' || algodaoDoce !== '' || aspartame !== '' || cola !== '') ?
              <>
                <FormControl error={dulcorError}>
                  <FormLabel className={classes.label} component="legend">{number - 4}. Dulçor{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                  <RadioGroup className={classes.radio} value={dulcor} onChange={(event) => setDulcor(event.target.value)}>
                    <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                    <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                    <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                  </RadioGroup>
                </FormControl>
                {dulcor !== '' ?
                  <FormControl error={cor2Error} >
                    <FormLabel className={classes.label} component="legend">{number - 3}. CO2{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={co2} onChange={(event) => setCo2(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
                {co2 !== '' ?
                  <FormControl error={acidezError}>
                    <FormLabel className={classes.label} component="legend">{number - 2}. Acidez{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={acidez} onChange={(event) => setAcidez(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Leve" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
                {acidez !== '' ?
                  <FormControl error={flavorError}>
                    <FormLabel className={classes.label} component="legend">{number - 1}. Flavor{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={flavor} onChange={(event) => setFlavor(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}

                {flavor !== '' ?
                  <FormControl error={notaError}>
                    <FormLabel className={classes.label} component="legend">{number}. Nota Amostra{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup row className={classes.radio} value={nota} onChange={(event) => setNota(event.target.value)}>
                      <FormControlLabel value="1" control={<Radio />} label="1" />
                      <FormControlLabel value="2" control={<Radio />} label="2" />
                      <FormControlLabel value="3" control={<Radio />} label="3" />
                      <FormControlLabel value="4" control={<Radio />} label="4" />
                      <FormControlLabel value="5" control={<Radio />} label="5" />
                      <FormControlLabel value="6" control={<Radio />} label="6" />
                      <FormControlLabel value="7" control={<Radio />} label="7" />
                      <FormControlLabel value="8" control={<Radio />} label="8" />
                      <FormControlLabel value="9" control={<Radio />} label="9" />
                    </RadioGroup>
                  </FormControl> : null}
              </>
              : null
            } */}
            <DefeitosGerais></DefeitosGerais>
            <div style={{ marginTop: '15%' }}>
              <FormHelperText>{errorMessage}</FormHelperText>
              {nota !== '' ?
                <>
                  <Button variant="contained" type="submit" color="primary" style={{ color: "white" }} onClick={handleSubmit}>Enviar</Button>
                  <SimpleDialog handleClose={() => setOpen(false)} open={open} data={data} />
                </>
                :
                <Button variant="contained" disabled type="submit" color="primary" style={{ color: "white" }} >Enviar</Button>
              }
            </div>
          </FormControl>
        </div>
      </Paper>
    </div>
  );
}