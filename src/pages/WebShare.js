import React from "react";
import Avatar from "react-avatar";
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
const WebShare = () => {
  // profile stored data
  const name = localStorage.getItem("name");
  const about = localStorage.getItem("about");
  const photo = localStorage.getItem("photo");
  // links stored data
  const email = localStorage.getItem("email");
  const linked = localStorage.getItem("linked");
  const youtube = localStorage.getItem("youtube");
  const whatsapp = localStorage.getItem("whatsapp");
  const telegram = localStorage.getItem("telegram");
  const twitter = localStorage.getItem("twitter");
  const instagram = localStorage.getItem("instagram");
  const github = localStorage.getItem("github");
  const facebook = localStorage.getItem("facebook");
  const newData = JSON.parse(localStorage.getItem("dataOtherLinks"));

  return (
    <div className="webShare rightSection">
      <div className="container">
        <div className="row">
          <div className="avatar">
            <Avatar
              src={photo}
              round={true}
              name={name}
              className={photo ? "" : "hidden"}
            />
          </div>
          <div className="details">
            <h5>{name}</h5>
            <p>{about}</p>
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
              style={{ color: "blue" }}
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
              style={{ color: "darkred" }}
            >
              <a href={youtube}>
                <BsYoutube />
              </a>
            </li>
            <li
              className={email ? "link" : "link hidden"}
              style={{ color: "red" }}
            >
              <a href={email}>
                <HiOutlineMail />
              </a>
            </li>
          </ul>
          {/* <ul className="moreLinks">
            {newData.map((linkVal, index) => (
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
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default WebShare;
