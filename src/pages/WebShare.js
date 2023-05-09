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
import { Avatar, Grid, Typography, makeStyles } from "@material-ui/core";
import { Icon } from "@iconify/react";
import Loading from "./loading";
const style = makeStyles({
  container: { height: "100%", paddingTop: "30px" },
  avatar: {
    width: "120px",
    height: "120px",
    marginBottom: "10px",
  },
  name: {
    textTransform: "capitalize",
    fontWeight: "600",
  },
  socail: {
    marginTop: "30px",
  },
  icon: {
    marginRight: "5px",
  },
  setLoading: {
    display: "none",
  },
});
const WebShare = () => {
  // get Theme
  const storedTheme = window.localStorage.getItem("THEME_CHANGE");
  const theme = storedTheme;

  // set loading funtion
  const [loading, setLoading] = useState(false);

  // style
  const classes = style();

  // get param
  const { id } = useParams();

  // get data
  const [profileData, setProfileData] = useState([]);
  const [otherLinks, setOtherLinks] = useState([]);
  console.log(theme);
  // get data function
  useEffect(() => {
    axios.get(`http://localhost:8000/PersonalData/${id}`).then((res) => {
      setOtherLinks(res.data.otherLinks);
      setProfileData(res.data.clientData);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
  }, [id]);

  return (
    <div className={`webshare ${theme}`}>
      {loading ? (
        <Loading />
      ) : (
        <Grid
          className={classes.container}
          container
          direction="column"
          component="div"
          justifyContent="top"
          alignItems="center"
        >
          {profileData.photo ? (
            <Avatar src={profileData.photo} className={classes.avatar} />
          ) : (
            ""
          )}
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
              <Link to={profileData.facebook} target="_blank">
                <BsFacebook />
              </Link>
            </Grid>
            <Grid
              component="li"
              className={profileData.github ? "link" : "link hidden"}
            >
              <Link to={profileData.github} target="_blank">
                <BsGithub />
              </Link>
            </Grid>
            <Grid
              component="li"
              className={profileData.instagram ? "link" : "link hidden"}
              style={{ color: "#d62976 " }}
            >
              <Link to={profileData.instagram} target="_blank">
                <BsInstagram />
              </Link>
            </Grid>
            <Grid
              component="li"
              className={profileData.twitter ? "link" : "link hidden"}
              style={{ color: "#03A9F4" }}
            >
              <Link to={profileData.twitter} target="_blank">
                <BsTwitter />
              </Link>
            </Grid>
            <Grid
              component="li"
              className={profileData.telegram ? "link" : "link hidden"}
              style={{ color: "blue" }}
            >
              <Link to={profileData.telegram} target="_blank">
                <BsTelegram />
              </Link>
            </Grid>
            <Grid
              component="li"
              className={profileData.linked ? "link" : "link hidden"}
              style={{ color: "darkblue" }}
            >
              <Link to={profileData.linked} target="_blank">
                <BsLinkedin />
              </Link>
            </Grid>
            <Grid
              component="li"
              className={profileData.whatsapp ? "link" : "link hidden"}
              style={{ color: "green" }}
            >
              <Link
                to={`https://wa.me/${profileData.whatsapp}`}
                target="_blank"
              >
                <BsWhatsapp />
              </Link>
            </Grid>
            <Grid
              component="li"
              className={profileData.youtube ? "link" : "link hidden"}
              style={{ color: "red" }}
            >
              <Link to={profileData.youtube} target="_blank">
                <BsYoutube />
              </Link>
            </Grid>
            <Grid
              component="li"
              className={profileData.email ? "link" : "link hidden"}
              style={{ color: "darkred" }}
            >
              <Link to={`mailto:${profileData.email}`} target="_blank">
                <HiOutlineMail />
              </Link>
            </Grid>
          </Grid>
          <Grid
            container
            alignContent="center"
            direction="column"
            component="div"
            className="moreLinksShare"
          >
            {otherLinks
              ? otherLinks.map((data, i) =>
                  data.labelVal && data.urlVal ? (
                    <Link key={i} to={`https://${data.urlVal}`} target="_blank">
                      {console.log(data.urlVal)}
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
                )
              : ""}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default WebShare;
