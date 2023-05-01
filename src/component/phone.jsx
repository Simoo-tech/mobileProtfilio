import React from "react";
import "../sass/phone.scss";
import Avatar from "react-avatar";
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
import { Link } from "react-router-dom";
function Phone({
  // get props
  name,
  about,
  photo,
  facebook,
  github,
  instagram,
  linked,
  twitter,
  email,
  telegram,
  whatsapp,
  youtube,
  data,
}) {
  return (
    // set all data saved from user
    <section className="col-12 col-lg-4 rightSection">
      <div className="container">
        <div className="row">
          <div className="avatar">
            <Avatar
              round={true}
              src={photo}
              name={name}
              className={photo ? "" : "hidden"}
            />
          </div>
          <div className="detail">
            <h4 className={name ? "" : "hidden"}>{name}</h4>
            <p className={about ? "" : "hidden"}>{about}</p>
          </div>
          <ul className="socialLinks">
            <li
              className={facebook ? "link" : "link hidden"}
              style={{ color: "blue" }}
            >
              <a href={facebook}>
                <BsFacebook />
              </a>
            </li>
            <li className={github ? "link" : "link hidden"}>
              <a href={github}>
                <BsGithub />
              </a>
            </li>
            <li
              className={instagram ? "link" : "link hidden"}
              style={{ color: "#d62976 " }}
            >
              <a href={instagram}>
                <BsInstagram />
              </a>
            </li>
            <li
              className={twitter ? "link" : "link hidden"}
              style={{ color: "#03A9F4" }}
            >
              <a href={twitter}>
                <BsTwitter />
              </a>
            </li>
            <li
              className={telegram ? "link" : "link hidden"}
              style={{ color: "blue" }}
            >
              <a href={telegram}>
                <BsTelegram />
              </a>
            </li>
            <li
              className={linked ? "link" : "link hidden"}
              style={{ color: "darkblue" }}
            >
              <a href={linked}>
                <BsLinkedin />
              </a>
            </li>
            <li
              className={whatsapp ? "link" : "link hidden"}
              style={{ color: "green" }}
            >
              <a href={whatsapp}>
                <BsWhatsapp />
              </a>
            </li>
            <li
              className={youtube ? "link" : "link hidden"}
              style={{ color: "red" }}
            >
              <a href={youtube}>
                <BsYoutube />
              </a>
            </li>
            <li
              className={email ? "link" : "link hidden"}
              style={{ color: "darkred" }}
            >
              <a href={email}>
                <HiOutlineMail />
              </a>
            </li>
          </ul>
          <ul className="moreLinks">
            {data.map((linkVal, index) => (
              <li
                key={index}
                className={
                  (linkVal.urlVal && linkVal.labelVal) ||
                  (linkVal.urlVal &&
                    linkVal.labelVal &&
                    linkVal.iconVal &&
                    linkVal.iconType)
                    ? ""
                    : "hidden"
                }
              >
                <a href={"https://" + linkVal.urlVal}>
                  <i
                    className={
                      linkVal.iconVal
                        ? `fa-${linkVal.iconType} fa-${linkVal.iconVal}`
                        : `fa-solid fa-link`
                    }
                  ></i>
                  <p>{linkVal.labelVal}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Phone;
