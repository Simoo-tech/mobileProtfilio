import React, { useEffect, useState } from "react";
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
import "../sass/webshare.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  Avatar,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Icon } from "@iconify/react";

const style = makeStyles({
  container: { height: "70vh" },
  avatar: {
    width: "120px",
    height: "120px",
    marginBottom: "10px",
  },
  name: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  socail: {
    marginTop: "20px",
  },
  icon: {
    marginRight: "10px",
  },
});
const WebShare = () => {
  const classes = style();
  const { id } = useParams();
  const [profileData, setProfileData] = useState([]);
  const [otherLinks, setOtherLinks] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/PersonalData/${id}`).then((res) => {
      setOtherLinks(res.data.dataVal);
      setProfileData(res.data.clientData);
    });
  }, []);

  console.log(otherLinks);
  return (
    <Container>
      <Grid
        className={classes.container}
        container
        direction="column"
        component="div"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar src={profileData.photo} className={classes.avatar} />
        <Typography variant="h5" className={classes.name}>
          {profileData.name}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.name}
        >
          {profileData.about}
        </Typography>
        <Grid
          component="ul"
          container
          justifyContent="center"
          className={`socialLinksShare ${classes.socail}`}
        >
          <Grid
            component="li"
            className={profileData.facebook ? "link" : "link hidden"}
            style={{ color: "blue" }}
          >
            <a href={profileData.facebook} target="_blank">
              <BsFacebook />
            </a>
          </Grid>
          <Grid
            component="li"
            className={profileData.github ? "link" : "link hidden"}
          >
            <a href={profileData.github} target="_blank">
              <BsGithub />
            </a>
          </Grid>
          <Grid
            component="li"
            className={profileData.instagram ? "link" : "link hidden"}
            style={{ color: "#d62976 " }}
          >
            <a href={profileData.instagram} target="_blank">
              <BsInstagram />
            </a>
          </Grid>
          <Grid
            component="li"
            className={profileData.twitter ? "link" : "link hidden"}
            style={{ color: "#03A9F4" }}
          >
            <a href={profileData.twitter} target="_blank">
              <BsTwitter />
            </a>
          </Grid>
          <Grid
            component="li"
            className={profileData.telegram ? "link" : "link hidden"}
            style={{ color: "blue" }}
          >
            <a href={profileData.telegram} target="_blank">
              <BsTelegram />
            </a>
          </Grid>
          <Grid
            component="li"
            className={profileData.linked ? "link" : "link hidden"}
            style={{ color: "darkblue" }}
          >
            <a href={profileData.linked} target="_blank">
              <BsLinkedin />
            </a>
          </Grid>
          <Grid
            component="li"
            className={profileData.whatsapp ? "link" : "link hidden"}
            style={{ color: "green" }}
          >
            <a href={profileData.whatsapp} target="_blank">
              <BsWhatsapp />
            </a>
          </Grid>
          <Grid
            component="li"
            className={profileData.youtube ? "link" : "link hidden"}
            style={{ color: "red" }}
          >
            <a href={profileData.youtube} target="_blank">
              <BsYoutube />
            </a>
          </Grid>
          <Grid
            component="li"
            className={profileData.email ? "link" : "link hidden"}
            style={{ color: "darkred" }}
          >
            <a href={profileData.email} target="_blank">
              <HiOutlineMail />
            </a>
          </Grid>
        </Grid>
        <Grid
          container
          alignContent="center"
          direction="column"
          component="div"
          className="moreLinksShare"
        >
          {otherLinks.map((data, i) =>
            data.labelVal && data.urlVal ? (
              <Link to={data.urlVal} target="_blank">
                <Icon
                  icon={data.iconName}
                  width="24"
                  height="24"
                  color="gray"
                  className={classes.icon}
                />
                <Typography variant="body1">{data.labelVal}</Typography>
              </Link>
            ) : (
              ""
            )
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default WebShare;
