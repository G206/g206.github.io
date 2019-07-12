import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  Typography, Link
} from '@material-ui/core';
import classNames from "classnames";

const styles = theme => ({
  container: {
    flexGrow: 1,
  },
  headerImg: {
    width: theme.image.width,
  },
  'a:link, a:visited, a:hover, a:active': {
    textDecoration: 'none',
  },
  'a:link': {
    color: theme.palette.primary.main,
  },
  'a:visited': {
    color: theme.palette.primary.main,
  },
  'a:hover': {
    color: theme.palette.secondary.main,
  },
  'a:active': {
    color: theme.palette.primary.main,
  },
});

const Routes = (props) => {
  const { classes } = props;
  const {
    logo, text, text2, leftJust, rightJust,
  } = props;
  return (
      <Grid container>
        <Grid item xs>
          <Typography
              variant="h4"
          >
            <Link
                href="https://g206.github.io/www-react/"
                target="_blank"
                className={classNames(text, leftJust)}
            >
              G.Dev - React
            </Link>
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
              variant="h4"
          >
            <Link
                href="https://g206.github.io/www/"
                target="_blank"
                color="primary"
            >
              G.Dev - Bootstrap & jQuery
            </Link>
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
              variant="h4"
          >
            <Link
                href="https://w3asp.azurewebsites.net/"
                target="_blank"
                color="primary"
            >
              G.Dev - ASP
            </Link>
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
              variant="h4"
          >
            <Link
                href="https://g206.github.io/galaga/"
                target="_blank"
                color="primary"
            >
              Galaga
            </Link>
          </Typography>
        </Grid>
      </Grid>
  );
};

export default withStyles(styles)(Routes);
