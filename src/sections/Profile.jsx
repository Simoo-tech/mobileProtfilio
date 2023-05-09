import React from "react";
import "../sass/sections.scss";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

// style
const Style = makeStyles({});

export default function Profile({ clientData, setClientData }) {
  // add style
  const classes = Style();
  // on change function
  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Grid
        container
        justifyContent="space-between"
        component="section"
        className={classes.container}
      >
        <Grid item lg={3} sm={2} className="section-info">
          <Typography variant="h5">Profile</Typography>
          <Typography variant="body2">
            some public information <br /> about you
          </Typography>
        </Grid>
        <Grid item sm={9} className="section-inputs">
          <Grid container className="input-info ">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              name="name"
              value={clientData.name}
              onChange={handleChange}
              placeholder="e.x. ahmed"
            />
          </Grid>
          <Grid container className="input-info">
            <label htmlFor="about">About You</label>
            <textarea
              name="about"
              id="about-you"
              value={clientData.about}
              onChange={handleChange}
              placeholder="e.x. I'm Front-End Developer"
              rows={5}
            ></textarea>
          </Grid>
          <Grid container className="photo input-info">
            <label htmlFor="photo">Photo Url</label>
            <input
              type="url"
              name="photo"
              value={clientData.photo}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
