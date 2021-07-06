import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '../Box';
import { Button, makeStyles, Typography } from '@material-ui/core';
import styles from './styles';

interface Props {
}

const useStyles = makeStyles(styles);

export default function ButtonAppBar(props: Props) {
  const [latest, setLatest] = useState<boolean>(true)
  const [boxes, setBoxes] = useState<string[]>([])
  const classes = useStyles()

  const handleClick = (name: number) => {
    const latestValue = latest ? 'X' : 'O'
    const newBoxes: string[] = [...boxes]
    newBoxes[name] = latestValue
    setBoxes(newBoxes)
    setLatest(!latest)
  }

  const resetGame = () => {
    setBoxes([])
  }

  return (
  <>
   <Grid container direction="column" className={classes.root}>
     <Grid item container direction="row" xs={12}>
       <Box boxes={boxes} name={1} handleClick={handleClick}/><Box boxes={boxes} name={2} handleClick={handleClick}/><Box boxes={boxes} name={3} handleClick={handleClick}/>
     </Grid>
     <Grid item container direction="row">
     <Box boxes={boxes} name={4} handleClick={handleClick}/><Box boxes={boxes} name={5} handleClick={handleClick}/><Box boxes={boxes} name={6} handleClick={handleClick}/>
     </Grid>
     <Grid item container direction="row">
     <Box boxes={boxes} name={7} handleClick={handleClick}/><Box boxes={boxes} name={8} handleClick={handleClick}/><Box boxes={boxes} name={9} handleClick={handleClick}/>
     </Grid>
   </Grid>
   <Typography> Player: {latest ? 'X' : 'O'} </Typography>
   <Grid container xl={6} xs={12}>
    <Button color="primary" variant="contained" onClick={resetGame}> Reset Game </Button>
   </Grid>
   </>
  );
}