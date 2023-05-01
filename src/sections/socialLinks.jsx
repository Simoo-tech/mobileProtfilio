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

function SocialLinks({
  // get props for input function & onchange
  setFacebook,
  setGitub,
  setEmail,
  setInstagram,
  setTwitter,
  setLinked,
  setWhatsapp,
  setYoutube,
  setTelegram,
  //get props for input Value
  facebook,
  github,
  instagram,
  linked,
  twitter,
  email,
  telegram,
  whatsapp,
  youtube,
}) {
  // set new value icon
  const faceIcon = (e) => {
    const icon = e.target.value;
    setFacebook(icon);
  };
  const gitIcon = (e) => {
    const icon = e.target.value;
    setGitub(icon);
  };
  const emailIcon = (e) => {
    const icon = e.target.value;
    setEmail(icon);
  };
  const instaIcon = (e) => {
    const icon = e.target.value;
    setInstagram(icon);
  };
  const twiteIcon = (e) => {
    const icon = e.target.value;
    setTwitter(icon);
  };
  const linkedIcon = (e) => {
    const icon = e.target.value;
    setLinked(icon);
  };
  const whatsIcon = (e) => {
    const icon = e.target.value;
    setWhatsapp(icon);
  };
  const youtubeIcon = (e) => {
    const icon = e.target.value;
    setYoutube(icon);
  };
  const teleIcon = (e) => {
    const icon = e.target.value;
    setTelegram(icon);
  };
  return (
    <section className="social-links section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 section-info">
            <h5>Social Links</h5>
            <p>Add some social media links</p>
          </div>
          <div className="col-12 col-lg-9 section-inputs">
            <div className="col-12 col-lg-5 facebook">
              <label htmlFor="facebook">Facebook</label>
              <div className="link-icon">
                <BsFacebook />
                <input
                  type="url"
                  name="facebook"
                  value={facebook}
                  onChange={faceIcon}
                  placeholder="https://fb.com/elonmusk"
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 github">
              <label htmlFor="github">Github</label>
              <div className="link-icon">
                <BsGithub />
                <input
                  type="url"
                  name="github"
                  onChange={gitIcon}
                  value={github}
                  placeholder="https://github.com/elonmusk"
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 twitter">
              <label htmlFor="twitter">Twitter</label>
              <div className="link-icon">
                <BsTwitter />
                <input
                  type="url"
                  name="twitter"
                  value={twitter}
                  onChange={twiteIcon}
                  placeholder="https://twitter.com/elonmusk"
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 instagram">
              <label htmlFor="instagram">Instagram</label>
              <div className="link-icon">
                <BsInstagram />
                <input
                  type="url"
                  name="instagram"
                  value={instagram}
                  onChange={instaIcon}
                  placeholder="https://instagram.com/elonmusk"
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 telegram">
              <label htmlFor="telegram">Telegram</label>
              <div className="link-icon">
                <BsTelegram />
                <input
                  type="url"
                  name="telegram"
                  value={telegram}
                  onChange={teleIcon}
                  placeholder="https://t.me/elonmusk"
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 whatsapp">
              <label htmlFor="whatsapp">Whatsapp</label>
              <div className="link-icon">
                <BsWhatsapp />
                <input
                  type="tel"
                  name="whatsapp"
                  value={whatsapp}
                  onChange={whatsIcon}
                  placeholder="+20121664812"
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 youtube">
              <label htmlFor="youtube">Youtube </label>
              <div className="link-icon">
                <BsYoutube />
                <input
                  type="url"
                  name="youtube "
                  value={youtube}
                  onChange={youtubeIcon}
                  placeholder="https://youtube.com/elonmusk"
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 linkedin">
              <label htmlFor="linkedin">Linkedin</label>
              <div className="link-icon">
                <BsLinkedin />
                <input
                  type="url"
                  name="linkedin "
                  value={linked}
                  onChange={linkedIcon}
                  placeholder="https://linkedin.com/elonmusk"
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 email">
              <label htmlFor="email">Email</label>
              <div className="link-icon flex-row d-flex">
                <HiOutlineMail />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={emailIcon}
                  placeholder="elonmusk@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;
