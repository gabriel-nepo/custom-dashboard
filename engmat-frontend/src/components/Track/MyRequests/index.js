import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import data from './myRequestsData';
import { Container } from '../styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  orangeText: {
    color: '#FF6A00',
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
  avatarContainer: {
    borderRadius: '50%',
    width: '16vw',
    height: '16vw',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifySelf: 'center'
  },
  title: {
    display: 'inline-block',
    width: '10%',
    backgroundColor: 'blue'
  },
  paginationBot: {
    textAlignLast: "center",
    marginTop: '2%'
  },
  paginationTop: {
    textAlignLast: "center",
    marginBottom: '2%'
  }
}));

export default function MyRequestsList(props) {
  const classes = useStyles();
  const value = clsx(classes.inline, classes.orangeText);
  const key = clsx(classes.inline, classes.bold)
  const [favorite, setFavorite] = useState(0);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (e) => {
    console.log(e);
    setFilter(e);
    let temp = data.filter((element) => {
      if (element.title.toLowerCase().includes(e.toLowerCase()) || element.sapCode.toLowerCase().includes(e.toLowerCase())) {
        return element;
      }
    });
    setFilteredData(temp);

  }

  return (
    <>
      <Container>
        <TextField
          id="name"
          fullWidth
          variant="outlined"
          placeholder=""
          label="Pesquise por código sap ou nome"
          type="text"
          value={filter}
          onChange={(event) => { handleFilter(event.target.value) }}
        />
      </Container>
      <List className={classes.root}>
        <div className={classes.paginationTop}>
          <Pagination style={{ display: "inline-block" }} count={11} siblingCount={0} />

        </div>
        <Divider component="li" />


        {
          filteredData.map((element, index) => {
            return (
              <div key={index}>
                <div key={index} style={{ marginTop: '2%', marginBottom: '2%', display: 'grid', gridTemplateColumns: '25% 40% 35%', width: '100%', verticalAlign: "top" }}>

                  <div className={classes.avatarContainer}>
                    <img className={classes.avatarContainer} src={require("../../../" + element.path)} />
                  </div>
                  <div style={{ marginLeft: '5%' }}>
                    <h2 style={{ display: "inline" }}>{element.title}</h2>
                    <br />
                    <br />
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.sapCode}
                      color="textPrimary"
                    >
                      Código SAP: {<span className={value}>{element.sapCode}</span>}
                    </Typography>
                    <br />

                    <Typography
                      component="span"
                      variant="body2"
                      className={key}
                      color="textPrimary"
                    >
                      Área: {<span className={value}>{element.area}</span>}
                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="body2"
                      className={key}
                      color="textPrimary"
                    >
                      Linha: {<span className={value}>{element.line}</span>}
                    </Typography>
                  </div>
                  <div style={{ alignSelf: "center", justifySelf: "center" }}>
                    <div style={{ alignSelf: 'center', justifySelf: 'center' }}>
                      <Button value={index} style={{ alignSelf: 'center', fontSize: '12px' }} onClick={(e) => { (props.handleDetails(e.currentTarget.value)) }} variant="contained" color="primary" >
                        Selecionar
                      </Button>
                    </div>
                  </div>
                </div>
                <Divider component="li" />
              </div>

            )
          })
        }
        <div className={classes.paginationBot}>
          <Pagination style={{ display: "inline-block" }} count={11} siblingCount={0} />

        </div>
      </List>
    </>



  );
}