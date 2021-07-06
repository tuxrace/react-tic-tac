import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Typography } from '@material-ui/core';

interface Props {
  name: number;
  handleClick: (val: number) => void,
  boxes: any[]
}

const useStyles = makeStyles(styles);

export default function ButtonAppBar(props: Props) {
  const classes = useStyles();
  const {handleClick, name, boxes} = props

  const onHandleClick = () => {
    handleClick(name)
  }

  return (
   <div className={classes.boxStyle} onClick={onHandleClick}>
     <Typography variant="h2" className={boxes[name] && classes.rotate}>{boxes[name]}</Typography>
   </div>
  );
}