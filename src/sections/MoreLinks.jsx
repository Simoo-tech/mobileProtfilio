import React from "react";
import "../sass/sections.scss";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";

function MoreLinks({ data, setData }) {
  // add style

  // adding link
  const addLink = () => {
    setData([...data, { labelVal: "", urlVal: "", iconName: "" }]);
  };

  // handle delete links
  const handleDelte = (i) => {
    const onDelete = [...data];
    onDelete.splice(i, 1);
    setData(onDelete);
  };

  // handle change label
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeval = [...data];
    onchangeval[i][name] = value;
    setData(onchangeval);
  };

  return (
    <Container component="section" className={`more-links`}>
      <Grid container>
        <Grid item lg={3} className={`section-info`}>
          <Typography variant="h6">Other Links</Typography>
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
        <Grid item lg={9}>
          {data.map((val, i) => (
            <Grid
              spacing={2}
              container
              justifyContent="space-between"
              className="link-holder"
              key={i}
            >
              <Grid item lg={6} className="input-info">
                <label htmlFor="iconName">icon name (optional)</label>
                <input
                  required
                  name="iconName"
                  value={val.iconName}
                  onChange={(e) => handleChange(e, i)}
                />
              </Grid>
              <Grid item lg={6} className="input-info">
                <label htmlFor="labelVal">Label</label>
                <input
                  required
                  name="labelVal"
                  value={val.labelVal}
                  onChange={(e) => handleChange(e, i)}
                />
              </Grid>
              <Grid item lg={12} className="input-info ">
                <label htmlFor="urlVal">url</label>
                <input
                  required
                  name="urlVal"
                  value={val.urlVal}
                  onChange={(e) => handleChange(e, i)}
                />
              </Grid>
              <TiDelete onClick={(i) => handleDelte(i)} />
            </Grid>
          ))}
          <Grid
            container
            justifyContent="center"
            component="button"
            className={data.length > 6 ? "hidden" : `add-btn`}
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
