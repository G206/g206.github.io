import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Link
} from '@material-ui/core';
import logoImage from '../../../images/web_design.png';

const styles = (theme) => ({
  container: {
  },
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
});

const NavAppBar = (props) => {
  const {
    navBar, appBar, appBarShift,
    appBarShiftLeft, appBarShiftRight, // eslint-disable-line no-unused-vars
    logo, text, text2, leftJust, rightJust,
  } = props;
  const { anchor, openDrawer } = props;

  return (
    <AppBar
      position="sticky"
      className={classNames(navBar, appBar, {
        [appBarShift]: openDrawer,
        [[`appBarShift${anchor}`]]: openDrawer,
      })}
    >
      <Toolbar>
        <Typography
          variant="h4"
          className={classNames(text2, leftJust)}
        >
          <img src={logoImage} className={logo} alt="logo" />
          <Link
              to="/"
              color="inherit"
          >
            G.Dev
          </Link>
        </Typography>
        <Typography
          variant="h4"
          className={classNames(text, rightJust)}
        >
          React JS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

NavAppBar.propTypes = {
  navBar: PropTypes.string,
  appBar: PropTypes.string,
  appBarShift: PropTypes.string,
  appBarShiftLeft: PropTypes.string,
  appBarShiftRight: PropTypes.string,
  menuButton: PropTypes.string,
  hide: PropTypes.string,
  logo: PropTypes.string,
  text: PropTypes.string,
  leftJust: PropTypes.string,
  rightJust: PropTypes.string,
};

export default withStyles(styles)(NavAppBar);
