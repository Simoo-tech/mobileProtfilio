import React from "react";
import "../sass/sections.scss";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";

function MoreLinks({ otherLinks, setOtherLinks }) {
  // adding other links data
  const addLink = () => {
    setOtherLinks([...otherLinks, { labelVal: "", urlVal: "", iconName: "" }]);
  };

  // handle delete links
  const handleDelte = (i) => {
    const onDelete = [...otherLinks];
    onDelete.splice(i, 1);
    setOtherLinks(onDelete);
  };

  // handle change value
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeval = [...otherLinks];
    onchangeval[i][name] = value;
    setOtherLinks(onchangeval);
  };

  return (
    <Container>
      <Grid container component="section" className="more-links">
        <Grid item lg={3} sm={3} className="section-info">
          <Typography variant="h5">Other Links</Typography>
          <Typography variant="body2">Add other links </Typography>
          <Typography
            variant="body2"
            component={Link}
            to="https://icon-sets.iconify.design/"
            target="_blank"
            rel=""
          >
            get icons from here
          </Typography>
        </Grid>
        <Grid item xs={12} lg={9} sm={9}>
          {otherLinks
            ? otherLinks.map((val, i) => (
                <Grid
                  container
                  justifyContent="center"
                  className="link-holder"
                  key={i}
                >
                  <Grid item xs={5} className="input-info">
                    <label htmlFor="iconName">icon name (optional)</label>
                    <input
                      required
                      name="iconName"
                      value={val.iconName}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </Grid>
                  <Grid item xs={5} className="input-info">
                    <label htmlFor="labelVal">Label</label>
                    <input
                      required
                      name="labelVal"
                      value={val.labelVal}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </Grid>
                  <Grid item xs={11} className="input-info ">
                    <label htmlFor="urlVal">url</label>
                    <input
                      required
                      name="urlVal"
                      value={val.urlVal}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </Grid>
                  <TiDelete onClick={() => handleDelte(i)} />
                </Grid>
              ))
            : ""}
          <Grid
            container
            justifyContent="center"
            component="button"
            className={otherLinks.length > 6 ? "hidden" : `add-btn`}
            onClick={addLink}
          >
            <AddCircleIcon color="action" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MoreLinks;
