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
import { Link } from "react-router-dom";
// style
const styles = makeStyles({
  avatar: {
    width: "100px",
    height: "100px",
    marginBottom: "10px",
  },
  links: { marginLeft: "5px" },
  upperText: {
    textTransform: "capitalize",
    textOverflow: "ellipsis",
  },
});

function Phone({ clientData, otherLinks }) {
  const classes = styles();

  return (
    // set all data saved from user
    <Container component="div" className="container">
      {/* avatar */}
      <Grid container className="avatar" justifyContent="center">
        <Avatar
          src={clientData.photo}
          name={clientData.name}
          className={clientData.photo ? `${classes.avatar}` : "hidden"}
        />
      </Grid>
      {/* profile section */}
      <Grid container direction="column" className="detail">
        <Typography
          variant="h5"
          style={{ fontWeight: "bold" }}
          align="center"
          className={clientData.name ? ` ${classes.upperText}` : "hidden"}
        >
          {clientData.name}
        </Typography>
        <Typography
          style={{
            wordBreak: "break-word",
            width: "100%",
            textOverflow: "ellipsis",
          }}
          align="center"
          variant="body2"
          noWrap={false}
          className={clientData.about ? `${classes.upperText}` : "hidden"}
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
        {/* facebook */}
        <Grid
          component="li"
          className={clientData.facebook ? "link" : "link hidden"}
          style={{ color: "blue" }}
        >
          <Link to={clientData.facebook} target="_blank">
            <BsFacebook />
          </Link>
        </Grid>
        {/* github */}
        <Grid
          component="li"
          className={clientData.github ? "link" : "link hidden"}
        >
          <Link to={clientData.github} target="_blank">
            <BsGithub />
          </Link>
        </Grid>
        {/* instagram */}
        <Grid
          component="li"
          className={clientData.instagram ? "link" : "link hidden"}
          style={{ color: "#d62976 " }}
        >
          <Link to={clientData.instagram} target="_blank">
            <BsInstagram />
          </Link>
        </Grid>
        {/* twitter */}
        <Grid
          component="li"
          className={clientData.twitter ? "link" : "link hidden"}
          style={{ color: "#03A9F4" }}
        >
          <Link to={clientData.twitter} target="_blank">
            <BsTwitter />
          </Link>
        </Grid>
        {/* telegram */}
        <Grid
          component="li"
          className={clientData.telegram ? "link" : "link hidden"}
          style={{ color: "blue" }}
        >
          <Link to={clientData.telegram} target="_blank">
            <BsTelegram />
          </Link>
        </Grid>
        {/* linkeIn */}
        <Grid
          component="li"
          className={clientData.linked ? "link" : "link hidden"}
          style={{ color: "darkblue" }}
        >
          <Link to={clientData.linked} target="_blank">
            <BsLinkedin />
          </Link>
        </Grid>
        {/* whatsapp */}
        <Grid
          component="li"
          className={clientData.whatsapp ? "link" : "link hidden"}
          style={{ color: "green" }}
        >
          <Link to={`https://wa.me/${clientData.whatsapp}`} target="_blank">
            <BsWhatsapp />
          </Link>
        </Grid>
        {/* yotube */}
        <Grid
          component="li"
          className={clientData.youtube ? "link" : "link hidden"}
          style={{ color: "red" }}
        >
          <Link to={clientData.youtube} target="_blank">
            <BsYoutube />
          </Link>
        </Grid>
        {/* email */}
        <Grid
          component="li"
          className={clientData.email ? "link" : "link hidden"}
          style={{ color: "darkred" }}
        >
          <Link to={`mailto:${clientData.email}`} target="_blank">
            <HiOutlineMail />
          </Link>
        </Grid>
      </Grid>
      {/* more links section */}
      <Grid container direction="column" component="ul" className="moreLinks">
        {otherLinks
          ? otherLinks.map((linkVal, index) =>
              linkVal.labelVal && linkVal.urlVal ? (
                <Typography component="li" key={index}>
                  <Grid
                    item
                    component="a"
                    href={linkVal.urlVal}
                    target="_blank"
                  >
                    <Icon icon={linkVal.iconName} width="22" height="22" />
                    <Typography variant="body1">{linkVal.labelVal}</Typography>
                  </Grid>
                </Typography>
              ) : (
                ""
              )
            )
          : ""}
      </Grid>
    </Container>
  );
}

export default Phone;
