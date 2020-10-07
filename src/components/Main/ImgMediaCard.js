import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Badge from '@material-ui/core/Badge';
import Notifications from '@material-ui/icons/Notifications';

import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Wrapper = styled.div`
  .grow { 
    transition: all .4s ease-in-out; 
  }
  &:hover { 
    transform: scale(1.05); 
    background-color: orange
  }
`


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 2,


  },

});



export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [color, setColor] = useState('grey');

  return (
    <Wrapper onMouseEnter={()=>{setColor('orange')}} onMouseLeave={()=>setColor('grey')}>
      <Card className={classes.root}>

        <CardActionArea >
          <div  style={{width: '340px',height:'109px', backgroundColor: color,padding: 10 }}>
            <CardMedia
              component="img"
              image={props.image}
              style={{ width: `${props.scale}%`, margin: '0 auto'   }}
            />
          </div>

          <CardContent style={{ backgroundColor: 'white',height:120 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}

              {props.notifications ?
                <Badge style={{ alignSelf: "vertical", marginLeft: "20px" }} badgeContent={4} color="primary">
                  <Notifications />
                </Badge>
                :
                null
              }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
  );
}