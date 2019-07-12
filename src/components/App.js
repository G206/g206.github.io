import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Nav from './sections/Nav';

const styles = theme => ({
  container: {
    flexGrow: 1,
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
