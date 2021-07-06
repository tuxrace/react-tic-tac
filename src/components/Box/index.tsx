import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

interface Props {
  handleClick?: () => void
}

const useStyles = makeStyles(styles);

export default function ButtonAppBar(props: Props) {
  const classes = useStyles();
  const {handleClick} = props

  return (
   <button className={classes.boxStyle} onClick={handleClick}>
    
   </button>
  );
}