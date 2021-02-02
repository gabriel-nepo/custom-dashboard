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
  const [algodao, setAlgodao] = React.useState('');
  const [dulcor, setDulcor] = React.useState('');
  const [cola, setCola] = React.useState('');
  const [especiarias, setEspeciarias] = React.useState('');
  const [co2, setCo2] = React.useState('');
  const [acidez, setAcidez] = React.useState('');
  const [flavor, setFlavor] = React.useState('');
  const [toffee, setToffee] = React.useState('');
  const [guarana, setGuarana] = React.useState('');
  const [grape, setGrape] = React.useState('');
  const [limao, setLimao] = React.useState('');
  const [limaoPepsi, setLimaoPepsi] = React.useState('');
  const [cereja, setCereja] = React.useState('');
  const [adstringencia, setAdstringencia] = React.useState('');
  const [baunilha, setBaunilha] = React.useState("");
  const [floral, setFloral] = React.useState("");


  const [cloro, setCloro] = React.useState("");
  const [amargor, setAmargor] = React.useState("");
  const [oxidacao, setOxidacao] = React.useState("");
  const [queimado, setQueimado] = React.useState("");
  const [plastico, setPlastico] = React.useState("");
  const [medicinal, setMedicinal] = React.useState("");
  const [terra, setTerra] = React.useState("");
  const [metalico, setMetalico] = React.useState("");
  const [azedo, setAzedo] = React.useState("");
  const [acetico, setAcetico] = React.useState("");
  const [quimico, setQuimico] = React.useState("");
  const [melaco, setMelaco] = React.useState("");
  const [acucarNaoTratado, setAcucarNaoTratado] = React.useState("");
  const [adstringente, setAdstringente] = React.useState("");




  const [nota, setNota] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const [sampleError, setSampleError] = React.useState(false);
  const [frutalError, setFrutalError] = React.useState(false);
  const [laranjaError, setLaranjaError] = React.useState(false);
  const [algodaoError, setAlgodaoError] = React.useState(false);
  const [dulcorError, setDulcorError] = React.useState(false);
  const [colaError, setColaError] = React.useState(false);
  const [especiariasError, setEspeciariasError] = React.useState(false);
  const [cor2Error, setCo2Error] = React.useState(false);
  const [acidezError, setAcidezError] = React.useState(false);
  const [flavorError, setFlavorError] = React.useState(false);
  const [toffeeError, setToffeeError] = React.useState(false);
  const [guaranaError, setGuaranaError] = React.useState(false);
  const [grapeError, setGrapeError] = React.useState(false);
  const [limaoError, setLimaoError] = React.useState(false);
  const [limaoPepsiError, setLimaoPepsiError] = React.useState(false);
  const [cerejaError, setCerejaError] = React.useState(false);
  const [baunilhaError, setBaunilhaError] = React.useState(false);
  const [floralError, setFloralError] = React.useState(false);

  const [notaError, setNotaError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');


  const [data, setData] = React.useState(undefined);


  const handleChange = (event) => {
    setSample(event.target.value);
    setFrutal('');
    setLaranja('');
    setAlgodao('');
    setDulcor('');
    setCola('');
    setEspeciarias('');
    setCo2('');
    setAcidez('');
    setFlavor('');
    setToffee('');
    setGuarana('');
    setGrape('');
    setLimao('');
    setLimaoPepsi('');
    setCereja('');
    setAdstringencia('');
    setBaunilha("");
    setFloral("");


    setCloro("");
    setAmargor("");
    setOxidacao("");
    setQueimado("");
    setPlastico("");
    setMedicinal("");
    setTerra("");
    setMetalico("");
    setAzedo("");
    setAcetico("");
    setQuimico("");
    setMelaco("");
    setAcucarNaoTratado("");
    setAdstringente("");

    setNota('');
    setSent(false);

  };

  const handleCheckError = () => {

  }

  const sendForm = async () => {
    let id;
    participants.map(element => {
      console.log(element.user)
      console.log(participant)
      if (element.user === participant) {
        console.log(participant)
        id = element.ambevId;
      }
    })
    await api.post(`forms/new/${props.room._id}/${id}`, {
      sample,
      frutal,
      laranja,
      algodaoDoce: algodao,
      dulcor,
      cola,
      especiarias,
      co2,
      acidez,
      flavor,
      toffee,
      guarana,
      grape,
      limao,
      limaoPepsi,
      cereja,
      adstringencia,
      baunilha,
      floral,

      cloro,
      amargor,
      oxidacaoPassado: oxidacao,
      queimado,
      plastico,
      medicinal,
      terra,
      metalico,
      azedo,
      acetico,
      quimico,
      melaco,
      acucarNaoTratado,
      adstringente,
      outros: "",
      notaReal: nota

    });
  }

  const handleSubmit = async (event) => {
    setOpen(true);
    await sendForm();
  }

  console.log(props.room)
  const [age, setAge] = React.useState('');

  const [participants, setParticipants] = React.useState([]);
  const [participant, setParticipant] = React.useState('');
  const [sample, setSample] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const getData = async function fetchData() {

    await api.get(`user/list`).then(res => {
      console.log(res.data);
      setParticipants(res.data);
    }).catch(err => {
      console.log(err);
    });


  }

  const getForm = async function fetchForms() {
    await api.get(`forms/list/${props.room._id}`).then(res => {
      console.log(res.data);
      res.data.map(element => {
        if (element.userId === participant._id && sample === element.sample) {
          setSent(true);
          console.log(element);
          setFrutal(element.frutal);
          setLaranja(element.laranja);
          setAlgodao(element.algodao);
          setDulcor(element.dulcor);
          setCola(element.cola);
          setEspeciarias(element.especiarias);
          setCo2(element.co2);
          setAcidez(element.acidez);
          setFlavor(element.flavor);
          setToffee(element.toffee);
          setGuarana(element.guarana);
          setGrape(element.uva);
          setLimao(element.limaoTahiti);
          setLimaoPepsi(element.limao);
          setCereja(element.cereja);
          setAdstringencia(element.adstringencia);
          setBaunilha(element.baunilha);
          setFloral(element.floral);
          setCloro(element.cloro);
          setAmargor(element.amargor);
          setOxidacao(element.oxidacao);
          setQueimado(element.queimado);
          setPlastico(element.plastico);
          setMedicinal(element.medicinal);
          setTerra(element.terra);
          setMetalico(element.metalico);
          setAzedo(element.azedo);
          setAcetico(element.acetico);
          setQuimico(element.quimico);
          setMelaco(element.melaco);
          setAcucarNaoTratado(element.acucarNaoTratado);
          setAdstringente(element.adstringente);
          setNota(element.notaReal);
        }
      })

    }).catch(err => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    getData();
    if (sample !== "") {
      getForm();
    }
  }, [participant, sample])

console.log(sent)

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
                  setParticipant(e.target.value);

                }}
                label="Participante"
              >
                {participants.map(element => {
                  return <MenuItem value={element}>{element.user}</MenuItem>
                })}
              </Select>
            </FormControl>
            {
              participant !== "" ?
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
                : null
            }

            {(sample === 'Guaraná Diet' || sample === 'Pepsi' || sample === 'Guaraná') ?
              <FormControl error={frutalError}>
                <FormLabel className={classes.label} component="legend">Frutal{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                <RadioGroup className={classes.radio} value={frutal} onChange={(event) => setFrutal(event.target.value)}>
                  <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
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
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
                {limaoPepsi !== '' ?
                  <FormControl error={cerejaError}>
                    <FormLabel className={classes.label} component="legend">Cereja{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={cereja} onChange={(event) => setCereja(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
                {cereja !== '' ?
                  <FormControl error={especiariasError}>
                    <FormLabel className={classes.label} component="legend">Adstringência{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={adstringencia} onChange={(event) => setAdstringencia(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
                {adstringencia !== '' ?
                  <FormControl error={especiariasError}>
                    <FormLabel className={classes.label} component="legend">Especiarias{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={especiarias} onChange={(event) => setEspeciarias(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}

                {especiarias !== '' ?
                  <FormControl error={colaError}>
                    <FormLabel className={classes.label} component="legend">Cola{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={cola} onChange={(event) => setCola(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
              </>
              : sample === 'Guaraná' || sample === 'Guaraná Diet' ?
                <>
                  {frutal !== '' ?
                    <FormControl error={toffeeError}>
                      <FormLabel className={classes.label} component="legend">Toffee{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={toffee} onChange={(event) => setToffee(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                      </RadioGroup>
                    </FormControl> : null}

                  {toffee !== '' ?
                    <FormControl error={guaranaError}>
                      <FormLabel className={classes.label} component="legend">Guaraná{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={guarana} onChange={(event) => setGuarana(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                      </RadioGroup>
                    </FormControl> : null}

                </> : null
            }
            {sample === "Sukita Laranja" ?
              <FormControl error={laranjaError}>
                <FormLabel className={classes.label} component="legend">Laranja{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                <RadioGroup className={classes.radio} value={laranja} onChange={(event) => setLaranja(event.target.value)}>
                  <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                  <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                  <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                </RadioGroup>
              </FormControl>
              : (sample === "Sukita Uva") ?
                <>
                  <FormControl error={grapeError}>
                    <FormLabel className={classes.label} component="legend">Uva{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={grape} onChange={(event) => setGrape(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl>

                  {grape !== "" ?
                    <FormControl error={algodaoError}>
                      <FormLabel className={classes.label} component="legend">Algodão Doce{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={algodao} onChange={(event) => setAlgodao(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                      </RadioGroup>
                    </FormControl>
                    : null
                  }
                  {algodao !== "" ?
                    <FormControl error={baunilhaError}>
                      <FormLabel className={classes.label} component="legend">Baunilha{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={baunilha} onChange={(event) => setBaunilha(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                      </RadioGroup>
                    </FormControl>
                    : null
                  }
                  {baunilha !== "" ?
                    <FormControl error={floralError}>
                      <FormLabel className={classes.label} component="legend">Floral{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={floral} onChange={(event) => setFloral(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                      </RadioGroup>
                    </FormControl>
                    : null
                  }


                </>
                : (sample === 'Pepsi Twist Zero') ?
                  <FormControl error={limaoError}>
                    <FormLabel className={classes.label} component="legend">Limão Tahiti{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={limao} onChange={(event) => setLimao(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl>
                  : sample === "Soda Limonada" ?
                    <FormControl error={limaoPepsiError}>
                      <FormLabel className={classes.label} component="legend">Limão{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                      <RadioGroup className={classes.radio} value={limaoPepsi} onChange={(event) => setLimaoPepsi(event.target.value)}>
                        <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                        <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                        <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                      </RadioGroup>
                    </FormControl>
                    : null

            }
            {(limao !== '' || laranja !== '' || guarana !== '' || algodao !== '' || cola !== '') ?
              <>
                <FormControl error={dulcorError}>
                  <FormLabel className={classes.label} component="legend">Dulçor{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                  <RadioGroup className={classes.radio} value={dulcor} onChange={(event) => setDulcor(event.target.value)}>
                    <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                    <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                    <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                  </RadioGroup>
                </FormControl>
                {dulcor !== '' ?
                  <FormControl error={cor2Error} >
                    <FormLabel className={classes.label} component="legend">CO2{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={co2} onChange={(event) => setCo2(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}
                {co2 !== '' ?
                  <FormControl error={acidezError}>
                    <FormLabel className={classes.label} component="legend">Acidez{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={acidez} onChange={(event) => setAcidez(event.target.value)}>
                      <FormControlLabel value="baixo" control={<Radio />} label="Baixo" />
                      <FormControlLabel value="característico" control={<Radio />} label="Característico" />
                      <FormControlLabel value="destacado" control={<Radio />} label="Destacado" />
                    </RadioGroup>
                  </FormControl> : null}

                {
                  acidez !== '' ?
                    <>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Cloro{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={cloro} onChange={(event) => setCloro(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Amargor{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={amargor} onChange={(event) => setAmargor(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Oxidacao/Passado{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={oxidacao} onChange={(event) => setOxidacao(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Queimado{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={queimado} onChange={(event) => setQueimado(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Plástico{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={plastico} onChange={(event) => setPlastico(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Medicinal{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={medicinal} onChange={(event) => setMedicinal(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Terra{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={terra} onChange={(event) => setTerra(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Metálico{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={metalico} onChange={(event) => setMetalico(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Azedo{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={azedo} onChange={(event) => setAzedo(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Acético{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={acetico} onChange={(event) => setAcetico(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Químico{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={quimico} onChange={(event) => setQuimico(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Melaço{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={melaco} onChange={(event) => setMelaco(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel className={classes.label} component="legend">Açucar não tratado{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                        <RadioGroup defaultValue="" row className={classes.radio} value={acucarNaoTratado} onChange={(event) => setAcucarNaoTratado(event.target.value)}>
                          <FormControlLabel value="" control={<Radio />} label="NA" />
                          <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                          <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                          <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                        </RadioGroup>
                      </FormControl>

                      {sample === "Pepsi" || sample === "Pepsi Twist Zero" ? null :
                        <FormControl>
                          <FormLabel className={classes.label} component="legend">Adstringente{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                          <RadioGroup defaultValue="" row className={classes.radio} value={adstringente} onChange={(event) => setAdstringente(event.target.value)}>
                            <FormControlLabel value="" control={<Radio />} label="NA" />
                            <FormControlLabel value="leve" control={<Radio />} label="Leve" />
                            <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                            <FormControlLabel value="elevado" control={<Radio />} label="Elevado" />
                          </RadioGroup>
                        </FormControl>
                      }

                    </> : null
                }

                {acidez !== '' ?

                  <FormControl error={notaError}>
                    <FormLabel className={classes.label} component="legend">Nota Amostra{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={nota} onChange={(event) => setNota(event.target.value)}>
                      <FormControlLabel value={1.0} control={<Radio />} label="1.0" />
                      <FormControlLabel value={1.5} control={<Radio />} label="1.5" />
                      <FormControlLabel value={2.0} control={<Radio />} label="2.0" />
                      <FormControlLabel value={2.5} control={<Radio />} label="2.5" />
                      <FormControlLabel value={3.0} control={<Radio />} label="3.0" />
                      <FormControlLabel value={3.5} control={<Radio />} label="3.5" />
                      <FormControlLabel value={4.0} control={<Radio />} label="4.0" />
                      <FormControlLabel value={4.5} control={<Radio />} label="4.5" />
                      <FormControlLabel value={5.0} control={<Radio />} label="5.0" />
                      <FormControlLabel value={5.5} control={<Radio />} label="5.5" />
                      <FormControlLabel value={6.0} control={<Radio />} label="6.0" />
                      <FormControlLabel value={6.5} control={<Radio />} label="6.5" />
                      <FormControlLabel value={7.0} control={<Radio />} label="7.0" />
                      <FormControlLabel value={7.5} control={<Radio />} label="7.5" />
                      <FormControlLabel value={8.0} control={<Radio />} label="8.0" />
                      <FormControlLabel value={8.5} control={<Radio />} label="8.5" />
                      <FormControlLabel value={9.0} control={<Radio />} label="9.0" />
                    </RadioGroup>
                  </FormControl> : null}
              </>
              : null
            }
            <div style={{ marginTop: '15%' }}>
              <FormHelperText>{errorMessage}</FormHelperText>
              {nota !== '' && sent === false?
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
    </div >
  );
}