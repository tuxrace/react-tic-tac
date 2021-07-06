import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Box from '../Box';

interface Props {
}

// const useStyles = makeStyles(styles);

export default function ButtonAppBar(props: Props) {
  // const classes = useStyles();
  
  return (
   <Grid container direction="column" >
     <Grid item>
       <Box /><Box /><Box />
     </Grid>
     <Grid item>
     <Box /><Box /><Box />
     </Grid>
     <Grid item>
     <Box /><Box /><Box />
     </Grid>
   </Grid>
  );
}