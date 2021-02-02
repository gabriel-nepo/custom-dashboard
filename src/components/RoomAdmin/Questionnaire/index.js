import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Forms from './forms';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "#004B93",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function QuestionnaireDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    props.handleClose();
  };


  return (
    <div>
      <Dialog fullScreen open={props.open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar style={{backgroundColor: "#004B93 !important"}} className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Formulário
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Fechar
            </Button>
          </Toolbar>
        </AppBar>
        <Forms room={props.room}/>
      </Dialog>
    </div>
  );
}