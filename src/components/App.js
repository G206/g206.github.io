import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Nav from './sections/Nav';

const styles = theme => ({
  container: {
    flexGrow: 1,
  },
  '@global': {
    'a:link, a:visited, a:hover, a:active': {
      textDecoration: 'none',
    },
    'a:link': {
      color: theme.palette.primary2.main,
    },
    'a:visited': {
      color: theme.palette.primary2.main,
    },
    'a:hover': {
      color: theme.palette.secondary.main,
    },
    'a:active': {
      color: theme.palette.primary.main,
    },
    '.slider-list': {
      minHeight: '400px',
    },
  },
});

const App = (props) => {
  const { classes } = props;

  return (
    <div id="pageTop" className={classes.container}>
      <Nav />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(App);
