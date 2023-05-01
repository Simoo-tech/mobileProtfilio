import React from "react";
import { BsFillShareFill, BsDatabaseAdd } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../";
function Footer({
  buttonData,
  setName,
  setPhoto,
  setAbout,
  setFacebook,
  setGitub,
  setEmail,
  setInstagram,
  setTwitter,
  setLinked,
  setWhatsapp,
  setYoutube,
  setTelegram,
  setData,
}) {
  // links stored data
  const name = localStorage.getItem("name");
  const about = localStorage.getItem("about");
  const photo = localStorage.getItem("photo");
  const semail = localStorage.getItem("email");
  const slinked = localStorage.getItem("linked");
  const syoutube = localStorage.getItem("youtube");
  const swhatsapp = localStorage.getItem("whatsapp");
  const stelegram = localStorage.getItem("telegram");
  const stwitter = localStorage.getItem("twitter");
  const sinstagram = localStorage.getItem("instagram");
  const sgithub = localStorage.getItem("github");
  const sfacebook = localStorage.getItem("facebook");
  const newData = JSON.parse(localStorage.getItem("dataOtherLinks"));
  // Edit Stored Data
  const EditData = () => {
    setName(name);
    setAbout(about);
    setPhoto(photo);
    setEmail(semail);
    setFacebook(sfacebook);
    setGitub(sgithub);
    setInstagram(sinstagram);
    setLinked(slinked);
    setTelegram(stelegram);
    setYoutube(syoutube);
    setWhatsapp(swhatsapp);
    setTwitter(stwitter);
    setData(newData);
  };
  console.log(newData);

  return (
    <footer className="footer col-12">
      <div>
        <button onClick={buttonData}>
          <p> demo data </p>
          <BsDatabaseAdd />
        </button>
        <Link to="webshare">
          <p>Share Protfilio </p>
          <BsFillShareFill />
        </Link>
        <button onClick={EditData}>
          Edit last data <AiFillEdit />
        </button>
      </div>
      <p className="copyright">Made By Salah eldin Mahmoud</p>
    </footer>
  );
}

export default Footer;
