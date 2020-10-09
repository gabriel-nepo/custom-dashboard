import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import data from './catalogueData';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  orangeText: {
    color: 'orange',
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bold',
  },
  avatar: {
    width: '12vh',
    height: '12vh',
    marginRight: '20px'
  },
  sapCode: {
    display: 'inline',
    fontWeight: 'bold',
  },
  avatarProt: {
    width: '15vw',
    height: '15vw',
    backgroundColor: 'red',
    marginLeft: '1vw'
  },
  avatarContainer: {
    borderRadius: '50%',
    width: '16vw',
    height: '16vw',
    backgroundColor: 'green',
    marginLeft: '5%',
    marginRight: '5%',
    alignSelf: 'center',
    marginBottom: '5%'
  },
  title: {
    display: 'inline-block',
    width: '10%',
    backgroundColor: 'blue'
  }
}));

export default function CatalogueList() {
  const classes = useStyles();
  const value = clsx(classes.inline, classes.orangeText);
  const key = clsx(classes.inline, classes.bold)
  const [favorite, setFavorite] = useState(0);

  return (
    <List className={classes.root}>
      {
        data.map((element, index) => {
          return (
            <>
              <div style={{ marginTop: '2%',marginBottom: '2%',display: 'grid', gridTemplateColumns: '20% 45% 35%', width: '100%', verticalAlign: "top" }}>

                <div className={classes.avatarContainer}>

                </div>
                <div style={{ marginLeft: '5%' }}>
                  <h2 style={{ display: "inline" }}>Titulo da peça</h2>
                  <Rating
                    style={{ verticalAlign: 'sub', marginLeft: '1%' }}
                    name="simple-controlled"
                    max={1}
                    value={favorite}
                    onChange={(event, newValue) => {
                      setFavorite(newValue);
                    }}
                  />
                  <br />
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.sapCode}
                    color="textPrimary"
                  >
                    Código SAP: {<span className={value}>121546</span>}
                  </Typography>
                  <br />

                  <Typography
                    component="span"
                    variant="body2"
                    className={key}
                    color="textPrimary"
                  >
                    Área: {<span className={value}>Packaging OW</span>}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    className={key}
                    color="textPrimary"
                  >
                    Linha: {<span className={value}>502</span>}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    className={key}
                    color="textPrimary"
                  >
                    Local: {<span className={value}>Pasteurizador</span>}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    className={key}
                    color="textPrimary"
                  >
                    Manufatura: {<span className={value}>Impressão 3D</span>}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    className={key}
                    color="textPrimary"
                  >
                    Material: {<span className={value}>ABS+NYLON</span>}
                  </Typography>

                </div>
                <div style={{ fontSize: '12px' }}>
                  <Button style={{ alignSelf: 'center', float: 'right', top: '50%', fontSize: '12px', marginRight: '10%' }} variant="contained" color="primary" >
                    Solicitar
                </Button>
                </div>
              </div>
              <Divider variant="inset" component="li" />
            </>

          )
        })
      }
    </List>



  );
}