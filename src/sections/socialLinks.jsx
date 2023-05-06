import React from "react";
import "../sass/sections.scss";
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
import { Container, Grid, Typography } from "@material-ui/core";

function SocialLinks({ clientData, setClientData }) {
  // on change function
  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Grid
        container
        component="section"
        justifyContent="space-between"
        className="social-links section"
      >
        <Grid item sm={2} className="section-info">
          <Typography variant="h6">Social Links</Typography>
          <Typography variant="body2">Add some social media links</Typography>
        </Grid>
        <Grid item sm={9} className="section-inputs">
          <Grid container spacing={3}>
            <Grid item xs={6} className="facebook">
              <label htmlFor="facebook">Facebook</label>
              <div className="link-icon">
                <BsFacebook />
                <input
                  type="url"
                  name="facebook"
                  value={clientData.facebook}
                  onChange={handleChange}
                  placeholder="https://fb.com/elonmusk"
                />
              </div>
            </Grid>
            <Grid item xs={6} className="github">
              <label htmlFor="github">Github</label>
              <div className="link-icon">
                <BsGithub />
                <input
                  type="url"
                  name="github"
                  onChange={handleChange}
                  value={clientData.github}
                  placeholder="https://github.com/elonmusk"
                />
              </div>
            </Grid>
            <Grid item xs={6} className="twitter">
              <label htmlFor="twitter">Twitter</label>
              <div className="link-icon">
                <BsTwitter />
                <input
                  type="url"
                  name="twitter"
                  value={clientData.twitter}
                  onChange={handleChange}
                  placeholder="https://twitter.com/elonmusk"
                />
              </div>
            </Grid>
            <Grid item xs={6} className="instagram">
              <label htmlFor="instagram">Instagram</label>
              <div className="link-icon">
                <BsInstagram />
                <input
                  type="url"
                  name="instagram"
                  value={clientData.instagram}
                  onChange={handleChange}
                  placeholder="https://instagram.com/elonmusk"
                />
              </div>
            </Grid>
            <Grid item xs={6} className="telegram">
              <label htmlFor="telegram">Telegram</label>
              <div className="link-icon">
                <BsTelegram />
                <input
                  type="url"
                  name="telegram"
                  value={clientData.telegram}
                  onChange={handleChange}
                  placeholder="https://t.me/elonmusk"
                />
              </div>
            </Grid>
            <Grid item xs={6} className="whatsapp">
              <label htmlFor="whatsapp">Whatsapp</label>
              <div className="link-icon">
                <BsWhatsapp />
                <input
                  type="url"
                  name="whatsapp"
                  value={clientData.whatsapp}
                  onChange={handleChange}
                  placeholder="+20121664812"
                />
              </div>
            </Grid>
            <Grid item xs={6} className="youtube">
              <label htmlFor="youtube">Youtube </label>
              <div className="link-icon">
                <BsYoutube />
                <input
                  type="url"
                  name="youtube"
                  value={clientData.youtube}
                  onChange={handleChange}
                  placeholder="https://youtube.com/elonmusk"
                />
              </div>
            </Grid>
            <Grid item xs={6} className="linkedin">
              <label htmlFor="linkedin">Linkedin</label>
              <div className="link-icon">
                <BsLinkedin />
                <input
                  type="url"
                  name="linked"
                  value={clientData.linked}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/elonmusk"
                />
              </div>
            </Grid>
            <Grid item xs={6} className="email">
              <label htmlFor="email">Email</label>
              <div className="link-icon flex-row d-flex">
                <HiOutlineMail />
                <input
                  type="email"
                  name="email"
                  value={clientData.email}
                  onChange={handleChange}
                  placeholder="elonmusk@gmail.com"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SocialLinks;
