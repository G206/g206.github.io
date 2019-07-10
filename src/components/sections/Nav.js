import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import NavAppBar from './nav/NavAppBar';
import Header from './Header';
import Footer from './Footer';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.transparent,
  },
  text: {
    color: theme.palette.text.accent,
  },
  leftJust: {
    display: 'inline-block',
    textAlign: 'left',
    verticalAlign: 'text-bottom',
    width: '49%',
  },
  rightJust: {
    display: 'inline-block',
    textAlign: 'right',
    verticalAlign: 'text-bottom',
    width: '49%',
  },
  logo: {
    maxHeight: 60,
  },
  navBar: {
    backgroundColor: theme.palette.primary.transparent,
  },
  appBar: {
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarShiftLeft: {
    marginLeft: drawerWidth,
  },
  appBarShiftRight: {
    marginRight: drawerWidth,
  },
  menuButton: {
    margin: '0 1%',
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.transparent,
  },
  drawerHeader: {
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.transparent,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentLeft: {
    marginLeft: 0,
  },
  contentRight: {
    marginRight: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  contentShiftLeft: {
    marginLeft: drawerWidth,
  },
  contentShiftRight: {
    marginRight: drawerWidth,
  },
});

const Nav = (props) => {
  const { classes } = props;
  return (
    <nav
        className={classNames(classes.root)}
        id="mainNav"
    >
      <NavAppBar
          {...classes}

      />
      <Header />
      <Footer />
    </nav>
  );
};

Nav.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles)(Nav);
