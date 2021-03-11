import React from 'react';
import ReactDOM from 'react-dom';

import api from '../../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
// import FormHelperText from '@material-ui/core/FormHelperText';
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
    paddingTop: '10%'
  }
}));


function SimpleDialog(props) {
  const { handleClose, open, data } = props;

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="alert-dialog-slide-title">{"Feedback"}</DialogTitle>
      <DialogContent style={{ width: '300px' }}>
        <DialogContentText style={{ textAlign: 'center' }} id="alert-dialog-slide-description">
          {data === "" ?
            <CircularProgress />
            :
            <>
              {data}
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

  const [obs, setObs] = React.useState("");

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

  const [trueSample, setTrueSample] = React.useState("");
  const [text, setText] = React.useState("");


  const [nota, setNota] = React.useState('');

  const [open, setOpen] = React.useState(false);
  const [formId, setFormId] = React.useState('');
  const [sampleId,setSampleId] = React.useState('');

  const handleChange = async (event) => {
    let [samp,index] = event.target.value.split('-');
    let id = props.room.samples[index-1]._id;
    setSample(samp);
    setTrueSample(event.target.value);
    let resp = await getForm(samp);
    if (resp === false) {
      ReactDOM.unstable_batchedUpdates(() => {
        setSample(samp);
        setSampleId(id);
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
        setFormId('');
        setObs('');

      })
    }

  };



  const sendForm = async () => {
    let id;
    participants.map(element => {
      console.log(element.user)
      console.log(participant)
      if (element.user === participant.user) {
        console.log(participant)
        id = element.ambevId;
      }
      return 1;
    })
    await api.post(`forms/new/${props.room._id}/${id}`, {
      sample,
      obs,
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
      limaoTahiti: limao,
      limao: limaoPepsi,
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
      notaReal: nota,
      sampleId

    }).then(() => {
      setText("Formulário salvo com sucesso!");
    }).catch(() => {
      setText("Houve um erro ao salvar seu formulário, verifique se todas as opções foram marcadas");
    });
  }


  const updateForm = async () => {
    console.log(obs);
    await api.put(`forms/${formId}`, {
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
      limaoTahiti: limao,
      limao: limaoPepsi,
      cereja,
      adstringencia,
      baunilha,
      floral,
      obs,
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

    }).then(() => {
      setText("Formulário atualizado com sucesso!");
    }).catch(() => {
      setText("Houve um erro ao atualizar seu formulário, verifique se todas as opções foram marcadas");
    });
  }

  const handleSubmit = async (event) => {
    setOpen(true);
    if (sent === false) {
      await sendForm();
    }
    else {
      await updateForm();
    }
  }


  const [participants, setParticipants] = React.useState([]);
  const [participant, setParticipant] = React.useState('');
  const [sample, setSample] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const getData = async function fetchData() {

    await api.get(`user/list`).then(res => {
      setParticipants(res.data);
    }).catch(err => {
      console.log(err);
    });


  }

  const getForm = async function fetchForms(e) {
    let flag = false;
    await api.get(`forms/list/${props.room._id}`).then(res => {
      res.data.map(element => {
        if (element.userId === participant._id && e === element.sample) {
          flag = true;
          console.log(res.data)
          ReactDOM.unstable_batchedUpdates(() => {
            setSent(true);
            setObs(element.obs);

            console.log(element);
            setFormId(element._id);
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
            setOxidacao(element.oxidacaoPassado);
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
          })

        }
        return 1;
      })

    }).catch(err => {
      console.log(err);
    })
    return flag;
  }

  React.useEffect(() => {
    getData()
  }, [])

  console.log('oi')


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div style={{ background: '#004B93', display: 'block', padding: '50px', fontSize: '38px', }}>

          <div style={{ color: 'white' }}>
            Sensorial Refri
          </div>
        </div>
        <div style={{ display: 'block', padding: '10%' }}>


          <FormControl fullWidth component="fieldset">
            <FormControl fullWidth variant="outlined" className={classes.formControl} style={{ marginBottom: "2rem" }}>
              <InputLabel id="demo-simple-select-outlined-label">Participante</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={participant}
                onChange={(e) => {
                  setParticipant(e.target.value);
                  ReactDOM.unstable_batchedUpdates(() => {
                    setTrueSample('');
                    setSampleId('');
                    setSample('');
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
                    setFormId('');
                    setObs('');

                  })

                }}
                label="Participante"
              >
                {participants.map((element, index) => {
                  return <MenuItem key={index} value={element}>{element.user}</MenuItem>
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
                    value={trueSample}
                    onChange={(e) => handleChange(e)}
                    label="Amostra"
                  >
                    {props.room.samples.map((element, index) => {
                      console.log(element)
                      return <MenuItem key={index} value={`${element.produto}-${index + 1}`}>{index + 1} - {element.produto} - {element.volumeAmostra}</MenuItem>
                    })}
                  </Select>
                </FormControl>
                : null
            }

            {
              <div style={{ display: sample !== '' ? "block" : "none" }}>
                <DesviosGerais
                  sample={sample}
                  desvios={["Frutal", "Dulçor", "Acidez", "CO2"]}
                  values={[frutal, dulcor, acidez, co2]}
                  set={[setFrutal, setDulcor, setAcidez, setCo2]}

                />

                <Desvios
                  sample={sample}

                  desviosGuarana={["Guaraná", "Toffee"]}
                  desviosPepsi={["Cola", "Adstringência", "Especiarias (Cravo/Canela)", "Limão", "Cereja"]}
                  desviosPepsiTwist={["Limão Tahiti"]}
                  desviosSukitaLaranja={["Laranja"]}
                  desviosSukitaUva={["Uva", "Baunilha", "Algodão Doce", "Floral"]}
                  desviosSodaLimonada={["Limão"]}

                  setGuarana={[setGuarana, setToffee]}
                  setPepsi={[setCola, setAdstringencia, setEspeciarias, setLimaoPepsi, setCereja]}
                  setPepsiTwist={[setLimao]}
                  setSukitaLaranja={[setLaranja]}
                  setSukitaUva={[setGrape, setBaunilha, setAlgodao, setFloral]}

                  valuesGuarana={[guarana, toffee]}
                  valuesPepsi={[cola, adstringencia, especiarias, limaoPepsi, cereja]}
                  valuesPepsiTwist={[limao]}
                  valuesSukitaLaranja={[laranja]}
                  valuesSukitaUva={[grape, baunilha, algodao, floral]}
                  valuesSodaLimonada={[limaoPepsi]}

                />

                <DefeitosGerais
                  set={[setCloro, setAmargor, setOxidacao, setQueimado, setPlastico, setMedicinal, setTerra, setMetalico, setAzedo, setAcetico, setQuimico, setMelaco, setAcucarNaoTratado, setAdstringente]}
                  values={[cloro, amargor, oxidacao, queimado, plastico, medicinal, terra, metalico, azedo, acetico, quimico, melaco, acucarNaoTratado, adstringente]}
                />
                <Container>
                  <FormControl>
                    <FormLabel className={classes.label} component="legend">Nota Amostra{<span style={{ color: 'red' }}> *</span>}</FormLabel>
                    <RadioGroup className={classes.radio} value={nota} onChange={(event) => setNota(Number(event.target.value))}>
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
                  </FormControl>
                </Container>
                <Container>
                  <TextField
                    variant="outlined"
                    id="obs"
                    fullWidth
                    label="Observações"
                    value={obs}
                    multiline
                    rows={5}
                    onChange={(e) => setObs(e.target.value)}
                  />

                </Container>
              </div>

            }



            <div style={{ marginTop: '15%' }}>

              <>
                <Button variant="contained" type="submit" color="primary" style={{ color: "white" }} onClick={handleSubmit}>Enviar</Button>
                <SimpleDialog handleClose={() => { setOpen(false); setText("") }} open={open} data={text} />
              </>

            </div>
          </FormControl>
        </div>
      </Paper>
    </div >
  );
}