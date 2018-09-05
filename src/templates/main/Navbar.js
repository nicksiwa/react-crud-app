import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Navbar extends Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Link to="/">AppTitle</Link>
          </Typography>
          <Link to="/user">User</Link>
          <Link to="/post">Post</Link>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar
