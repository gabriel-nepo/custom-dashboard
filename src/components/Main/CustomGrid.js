import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from './ImgMediaCard';
import { Link } from "react-router-dom";

const image = require('./images/01.svg');
const image2 = require('./images/02.svg');
const image3 = require('./images/03.svg');
const image4 = require('./images/04.svg');
const image5 = require('./images/05.svg');
const image6 = require('./images/06.svg');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


export default function CustomGrid() {
  const classes = useStyles();


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Link style={{ textDecoration: 'none' }} to="/examples/track">
              <ImgMediaCard
                title={"Acompanhe sua peça"}
                description={"Aqui você pode checar o status das peças que pediu"}
                image={image}
                scale={42}
              />
            </Link>
          </Grid>
          <Grid item>

            <Link style={{ textDecoration: 'none' }} to="/examples/require">
              <ImgMediaCard
                title={"Solicitar Peça"}
                description={"Aqui você pode solicitar sua peça através de um formulário"}
                image={image2}
                scale={25}

              />
            </Link>
          </Grid>
          <Grid item>
            <Link style={{ textDecoration: 'none' }} to="/examples/backlog">
              <ImgMediaCard
                title={"Visualizar Backlog"}
                description={"Visualize as informações do backlog para analisar as solicitações de peças"}
                image={image3}
                scale={27.5}
              />
            </Link>
          </Grid>

        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2} style={{ paddingTop: 10 }}>
            <Grid item>
              <Link style={{ textDecoration: 'none' }} to="/examples/test">
                <ImgMediaCard
                  title={"Teste"}
                  description={"Faça o relatório das peças que você solicitou"}
                  image={image4}
                  scale={25}
                  notifications={true}
                />
              </Link>
            </Grid>
            <Grid item>
              <Link style={{ textDecoration: 'none' }} to="/examples/catalogue">
                <ImgMediaCard
                  title={"Catálogo de Peças"}
                  description={"Visualize o catálogo de peças e escolha o item para ser produzidos"}
                  image={image5}
                  scale={30}
                />
              </Link>
            </Grid>
            <Grid item>
              <a style={{ textDecoration: 'none' }} rel="noopener noreferrer" href="https://anheuserbuschinbev.sharepoint.com/sites/NM-SevenLabs/SitePages/Conhe%C3%A7a-o-Seven-Labs.aspx" target="_blank">
                <ImgMediaCard
                  title={"Sobre o 7Labs"}
                  description={"Conheça a estrutura e os projetos do 7Labs"}
                  image={image6}
                  scale={18}
                />
              </a>
            </Grid>

          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}
