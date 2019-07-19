import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  Typography, Link
} from '@material-ui/core';
import classNames from "classnames";

const styles = theme => ({
  container: {
  },
});

const Routes = (props) => {
  const {
    leftJust, linkText, listContainer
  } = props;
  return (
      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
      >
        <Grid item xs={10}>
          <Typography
              variant="h3"
              className={classNames(listContainer, linkText, leftJust)}
          >
            <Link
                color="inherit"
                href="https://g206.github.io/www-react/"
                target="_blank"
                rel="noopener"
            >
              G.Dev - React
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
              variant="h3"
              className={classNames(listContainer, linkText, leftJust)}
          >
            <Link
                href="https://g206.github.io/www/"
                target="_blank"
                rel="noopener"
                color="inherit"
            >
              G.Dev - Bootstrap
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
              variant="h3"
              className={classNames(listContainer, linkText, leftJust)}
          >
            <Link
                href="https://w3asp.azurewebsites.net/"
                target="_blank"
                rel="noopener"
                color="inherit"
            >
              G.Dev - ASP
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
              variant="h3"
              className={classNames(listContainer, linkText, leftJust)}
          >
            <Link
                href="https://g206.github.io/galaga/"
                target="_blank"
                rel="noopener"
                color="inherit"
            >
              Galaga
            </Link>
          </Typography>
        </Grid>
      </Grid>
  );
};

export default withStyles(styles)(Routes);
