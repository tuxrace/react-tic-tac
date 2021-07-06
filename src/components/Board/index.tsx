import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Box from '../Box';

interface Props {
}

// const useStyles = makeStyles(styles);

export default function ButtonAppBar(props: Props) {
  // const classes = useStyles();
  const [latest, setLatest] = useState<boolean>(true)
  const [boxes, setBoxes] = useState<string[]>([])
  
  const handleClick = (name: number) => {
    const latestValue = latest ? 'X' : 'O'
    const newBoxes: string[] = [...boxes]
    newBoxes[name] = latestValue
    setBoxes(newBoxes)
    setLatest(!latest)
  }

  return (
   <Grid container direction="column" >
     <Grid item>
       <Box boxes={boxes} name={1} handleClick={handleClick}/><Box boxes={boxes} name={2} handleClick={handleClick}/><Box boxes={boxes} name={3} handleClick={handleClick}/>
     </Grid>
     <Grid item>
     <Box boxes={boxes} name={4} handleClick={handleClick}/><Box boxes={boxes} name={5} handleClick={handleClick}/><Box boxes={boxes} name={6} handleClick={handleClick}/>
     </Grid>
     <Grid item>
     <Box boxes={boxes} name={7} handleClick={handleClick}/><Box boxes={boxes} name={8} handleClick={handleClick}/><Box boxes={boxes} name={9} handleClick={handleClick}/>
     </Grid>
   </Grid>
  );
}