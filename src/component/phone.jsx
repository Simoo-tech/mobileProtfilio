import React from "react";
import "../sass/phone.scss";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTelegram,
  BsWhatsapp,
  BsYoutube,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Avatar, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Icon } from "@iconify/react";
const styles = makeStyles({
  avatar: {
    width: "100px",
    height: "100px",
  },
  links: { marginLeft: "5px" },
});

function Phone({
  // get props
  clientData,
  data,
}) {
  const classes = styles();

  return (
    // set all data saved from user
    <section className="col-12 col-lg-4 rightSection cleintData">
      <Container component="div" className="container">
        <Grid container>
          {/* avatar section */}
          <Grid container className="avatar" justifyContent="center">
            <Avatar
              src={clientData.photo}
              name={clientData.name}
              className={clientData.photo ? `${classes.avatar}` : "hidden"}
            />
          </Grid>
          {/* profile section */}
          <Grid item lg={12} className="detail">
            <Typography
              variant="h5"
              align="center"
              className={clientData.name ? "" : "hidden"}
            >
              {clientData.name}
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              color="textSecondary"
              className={clientData.about ? "" : "hidden"}
            >
              {clientData.about}
            </Typography>
          </Grid>
          {/* social link section */}
          <Grid
            component="ul"
            container
            justifyContent="center"
            className="socialLinks"
          >
            <Grid
              component="li"
              className={clientData.facebook ? "link" : "link hidden"}
              style={{ color: "blue" }}
            >
              <a href={clientData.facebook} target="_blank">
                <BsFacebook />
              </a>
            </Grid>
            <Grid
              component="li"
              className={clientData.github ? "link" : "link hidden"}
            >
              <a href={clientData.github} target="_blank">
                <BsGithub />
              </a>
            </Grid>
            <Grid
              component="li"
              className={clientData.instagram ? "link" : "link hidden"}
              style={{ color: "#d62976 " }}
            >
              <a href={clientData.instagram} target="_blank">
                <BsInstagram />
              </a>
            </Grid>
            <Grid
              component="li"
              className={clientData.twitter ? "link" : "link hidden"}
              style={{ color: "#03A9F4" }}
            >
              <a href={clientData.twitter} target="_blank">
                <BsTwitter />
              </a>
            </Grid>
            <Grid
              component="li"
              className={clientData.telegram ? "link" : "link hidden"}
              style={{ color: "blue" }}
            >
              <a href={clientData.telegram} target="_blank">
                <BsTelegram />
              </a>
            </Grid>
            <Grid
              component="li"
              className={clientData.linked ? "link" : "link hidden"}
              style={{ color: "darkblue" }}
            >
              <a href={clientData.linked} target="_blank">
                <BsLinkedin />
              </a>
            </Grid>
            <Grid
              component="li"
              className={clientData.whatsapp ? "link" : "link hidden"}
              style={{ color: "green" }}
            >
              <a href={clientData.whatsapp} target="_blank">
                <BsWhatsapp />
              </a>
            </Grid>
            <Grid
              component="li"
              className={clientData.youtube ? "link" : "link hidden"}
              style={{ color: "red" }}
            >
              <a href={clientData.youtube} target="_blank">
                <BsYoutube />
              </a>
            </Grid>
            <Grid
              component="li"
              className={clientData.email ? "link" : "link hidden"}
              style={{ color: "darkred" }}
            >
              <a href={clientData.email} target="_blank">
                <HiOutlineMail />
              </a>
            </Grid>
          </Grid>
          {/* more links section */}
          <Grid item lg={12} component="ul" className="moreLinks">
            {data.map((linkVal, index) =>
              linkVal.labelVal && linkVal.urlVal ? (
                <Typography component="li" key={index}>
                  <Grid
                    item
                    component="a"
                    href={linkVal.urlVal}
                    target="_blank"
                  >
                    <Icon
                      icon={linkVal.iconName}
                      width="22"
                      height="22"
                      color="gray"
                    />
                    <Typography variant="body1">{linkVal.labelVal}</Typography>
                  </Grid>
                </Typography>
              ) : (
                ""
              )
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Phone;
