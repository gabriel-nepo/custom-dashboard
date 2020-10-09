import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Parameters from './Parameters';
import Criticality from './Criticality';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Inserir parâmetros da peça', 'Definir criticidade'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 1:
      return <Parameters/>
    case 0:
      return <Criticality/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function RequestStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(props.step);
  const steps = getSteps();
  useEffect(() => {
      setActiveStep(props.step)
  }, [props.step]);


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={props.handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}