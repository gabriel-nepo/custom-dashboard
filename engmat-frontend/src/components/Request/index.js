import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import Button from '@material-ui/core/Button';
import { useStyles } from '../../pages/Dashboard/styles';
import { Container, ButtonContainer } from './styles';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import UserIcon from '@material-ui/icons/Group';
import AddUserIcon from '@material-ui/icons/GroupAdd';
import Icon from '@material-ui/core/Icon';
import RequestStepper from './stepper';

const svg = require('./01.svg');

export default function RequestItem() {

    const [filter, setFilter] = useState(true);
    const [add, setAdd] = useState(false);
    const [step, setStep] = useState(0);
    const steps = ['1','2'];

    const classes = useStyles();
    const handleNext = () => {
        setStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = ()=>{
        setStep(0);
    }


    const handleGoToAdd = () => {
        setFilter(false);
        setTimeout(() => {
            setStep(0);
        }, 500)
    }

    const handleGoToFilter = () => {
        setAdd(false);
        setTimeout(() => {
            setFilter(true);
        }, 500)
    }

    return (

        <React.Fragment>
            <Slide timeout={500} direction="up" in={filter} mountOnEnter unmountOnExit >
                <Paper className={classes.paper}>
                    <div style={{ padding: '16px 16px 0 16px', backgroundColor: 'rgb(6, 32, 56)' }}>
                        <Breadcrumbs style={{ color: "white" }} aria-label="breadcrumb">
                            <Typography style={{ color: "white" }} className={classes.link}>
                                <Link color="inherit" href="/examples" onClick={handleGoToFilter} className={classes.link}>
                                    <HomeIcon className={classes.icon} />
                                Home
                            </Link>
                            </Typography>
                            <Typography style={{ color: "white" }} href="/examples" onClick={handleGoToFilter} className={classes.link}>
                                <Icon>
                                    <img alt="icone_form" className={classes.imageIcon} src={svg} />
                                </Icon>
                                Solicitar Desenvolvimento
                            </Typography>
                        </Breadcrumbs>
                        <div className={classes.horizontalLine}></div>
                    </div>
                    <Container>
                        <RequestStepper handleBack={handleBack} handleNext={handleReset} step={step}></RequestStepper>
                    </Container>
                    <ButtonContainer>
                        <Button
                            variant="contained"
                            disabled={step === 0}
                            onClick={handleBack}
                            className={classes.backButton}
                        >
                            Voltar
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            {step === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                        </Button>
                    </ButtonContainer>

                </Paper>
            </Slide>
            <Slide timeout={500} direction="up" in={add} mountOnEnter unmountOnExit>
                <Paper className={classes.paper}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Typography color="inherit" className={classes.link}>
                            <HomeIcon className={classes.icon} />
                                Home
                        </Typography>
                        <Link color="inherit" href="/examples" onClick={handleGoToFilter} className={classes.link}>
                            <UserIcon className={classes.icon} />
                                Users
                        </Link>
                        <Typography color="textPrimary" href="/examples" onClick={handleGoToAdd} className={classes.link}>
                            <AddUserIcon className={classes.icon} />
                                Add user
                        </Typography>
                    </Breadcrumbs>
                    <Container>

                    </Container>
                </Paper>
            </Slide>

        </React.Fragment>
    );
}