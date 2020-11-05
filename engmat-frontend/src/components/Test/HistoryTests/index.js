import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import data from './testHistoryData';
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
  },
  dot: {
    borderRadius: '50%',
    width: '1vw',
    height: '1vw',
    backgroundColor: "rgb(6, 32, 56)",
    alignSelf: 'center',
    justifySelf: 'center'
  },
}));

export default function HistoryTests(props) {
  const classes = useStyles();
  const value = clsx(classes.inline, classes.orangeText);
  const key = clsx(classes.inline, classes.bold)
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
                <div style={{ marginTop: '2%', marginBottom: '2%', display: 'grid', gridTemplateColumns: '80% 20%', width: '100%', verticalAlign: "top" }}>
                  <div style={{ marginLeft: '10%', }}>
                    <div style={{ verticalAlign: "text-top",display: "inline-block" }}>
                      <div className={classes.dot}></div>
                    </div>
                    <div style={{display: "inline-table",marginLeft: '5%'}}>
                      <h2 style={{ display: "inline" }}>{element.title}</h2>

                      <br />
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.sapCode}
                        color="textPrimary"
                      >
                        Data de Atualização: {<><br /><span className={value}>{element.sapCode}</span></>}
                      </Typography>
                      <br />

                      <Typography
                        component="span"
                        variant="body2"
                        className={key}
                        color="textPrimary"
                      >
                        ID do responsável: {<><br /><span className={value}>99818797</span></>}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        className={key}
                        color="textPrimary"
                      >
                        Falha: {<><br /><span className={value}>NÃO</span></>}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        className={key}
                        color="textPrimary"
                      >
                        Desgaste: {<><br /><span className={value}>SIM</span></>}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        className={key}
                        color="textPrimary"
                      >
                        Descricao: {<><br /><span className={value}>A peça não apresentou falha, porém apresentou um desgaste em relacao ao pente</span></>}
                      </Typography>
                    </div>
                  </div>
                  <div style={{ alignSelf: "center", justifySelf: "center" }}>

                    <div style={{ alignSelf: "center", justifySelf: "center" }}>
                      <p style={{ margin: "auto", fontSize: '16px', display: "flex", width: '5rem', height: '5vh', alignItems: "center", justifyContent: "center" }}>Status</p>
                      <div style={{ margin: "auto", fontSize: '14px', color: "white", display: "flex", backgroundColor: "rgb(6, 32, 56)", width: '5rem', height: '5vh', borderRadius: '5%', alignItems: "center", justifyContent: "center" }}>
                        OK
                      </div>
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