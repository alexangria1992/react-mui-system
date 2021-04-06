import React from 'react'
import SideMenu from '../components/SideMenu';
import './App.css';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
    backgroundColor: 'lightpink',

  }
})

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu/>
      <div className={classes.appMain}>Here we go</div>
      </>
  );
}

export default App;
