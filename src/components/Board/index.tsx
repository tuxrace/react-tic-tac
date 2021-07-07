import React, {useEffect, useState} from 'react';
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
  const [winner, setWinner] = useState<string | boolean>(false)
  const classes = useStyles()

  useEffect(() => {
    determineWinner()
  }, [latest])

  const lineMatch = (arrBoxes: any[], player1: any, player2: any) => {
    if (arrBoxes.every(val => val === player1)){
      return player1
    }
    if (arrBoxes.every(val => val === player2)){
      return player2
    }
    return false
  }

  const determineWinner = () => {
    const [box0, box1,box2,box3,box4,box5,box6,box7,box8,box9] = boxes
    
    if (box0) {

    }
    
    const topLine = lineMatch([box1,box2,box3], 'X', 'O')
    if (topLine){
      setWinner(topLine)
    }

    const midLine = lineMatch([box4,box5,box6], 'X', 'O')
    if (midLine){
      setWinner(midLine)
    }

    const bottomLine = lineMatch([box7,box8,box9], 'X', 'O')
    if (bottomLine){
      setWinner(bottomLine)
    }

    const LeftVertical = lineMatch([box1,box4,box7], 'X', 'O')
    if (LeftVertical){
      setWinner(LeftVertical)
    }

    const midVertical = lineMatch([box2,box5,box8], 'X', 'O')
    if (midVertical){
      setWinner(midVertical)
    }

    const rightVertical = lineMatch([box3,box6,box9], 'X', 'O')
    if (rightVertical){
      setWinner(rightVertical)
    }

    const diagLeft = lineMatch([box1,box5,box9], 'X', 'O')
    if (diagLeft){
      setWinner(diagLeft)
    }

    const diagRight = lineMatch([box3,box5,box7], 'X', 'O')
    if (diagRight){
      setWinner(diagRight)
    }
    
  }

  const handleClick = (name: number) => {
    
    const newBoxes: string[] = [...boxes]
    if (!newBoxes[name] && !winner) {
      const latestValue = latest ? 'X' : 'O'
      newBoxes[name] = latestValue
      setBoxes(newBoxes)
      setLatest(!latest)
    }
  }

  const resetGame = () => {
    setBoxes([])
  }

  return (
  <>
   <Grid container direction="column" className={classes.root}>
     <Grid item container direction="row" lg={5} sm={12}>
       <Box boxes={boxes} name={1} handleClick={handleClick}/><Box boxes={boxes} name={2} handleClick={handleClick}/><Box boxes={boxes} name={3} handleClick={handleClick}/>
     </Grid>
     <Grid item container direction="row" lg={5} sm={12}>
     <Box boxes={boxes} name={4} handleClick={handleClick}/><Box boxes={boxes} name={5} handleClick={handleClick}/><Box boxes={boxes} name={6} handleClick={handleClick}/>
     </Grid>
     <Grid item container direction="row" lg={5} sm={12}>
     <Box boxes={boxes} name={7} handleClick={handleClick}/><Box boxes={boxes} name={8} handleClick={handleClick}/><Box boxes={boxes} name={9} handleClick={handleClick}/>
     </Grid>
   </Grid>
   <Typography> Player: {latest ? 'X' : 'O'} </Typography>
   <Grid container lg={2} sm={12} justify="center">
    <Typography className={winner ? classes.win : ''}> {winner && `Winner: ${winner}`} </Typography>
   </Grid>
   <Grid container lg={2} sm={12}>
    <Button fullWidth color="primary" variant="contained" onClick={resetGame}> Reset Game </Button>
   </Grid>
   </>
  );
}