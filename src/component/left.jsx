import React from "react";
import Footer from "./footer";
import Profile from "../sections/Profile";
import SocialLinks from "../sections/socialLinks";
import MoreLinks from "../sections/MoreLinks";
function Left({
  // get Props
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
  buttonData,
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
  setData,
}) {
  return (
    <>
      <section className="col-12 col-lg-8 leftSection">
        <div className="sections">
          {/* pass props to profile section to reset data input and store  */}
          <Profile
            setName={setName}
            setPhoto={setPhoto}
            setAbout={setAbout}
            name={name}
            about={about}
            photo={photo}
          />
          {/* pass props to links section to reset data input and store */}
          <SocialLinks
            setFacebook={setFacebook}
            setGitub={setGitub}
            setEmail={setEmail}
            setInstagram={setInstagram}
            setTwitter={setTwitter}
            setLinked={setLinked}
            setWhatsapp={setWhatsapp}
            setYoutube={setYoutube}
            setTelegram={setTelegram}
            facebook={facebook}
            github={github}
            instagram={instagram}
            linked={linked}
            twitter={twitter}
            email={email}
            telegram={telegram}
            whatsapp={whatsapp}
            youtube={youtube}
          />
          <MoreLinks data={data} setData={setData} />
        </div>
      </section>
    </>
  );
}

export default Left;
