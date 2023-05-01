import { useEffect, useState } from "react";
import "./App.scss";
import Left from "./component/left";
import Phone from "./component/phone";
import { WebShare } from "./WebShare";
import Footer from "./component/footer";
function App() {
  // 1- Set Values
  // Set Values For Details Section
  const [name, setName] = useState();
  const [about, setAbout] = useState();
  const [photo, setPhoto] = useState();
  // Set Values For social Links Section
  const [facebook, setFacebook] = useState();
  const [github, setGitub] = useState();
  const [instagram, setInstagram] = useState();
  const [twitter, setTwitter] = useState();
  const [telegram, setTelegram] = useState();
  const [whatsapp, setWhatsapp] = useState();
  const [youtube, setYoutube] = useState();
  const [linked, setLinked] = useState();
  const [email, setEmail] = useState();
  // Set value for other links section

  // make array of adding other link
  const [data, setData] = useState([]);

  // 2- Store Data From user in local storage
  useEffect(() => {
    localStorage.setItem("name", name ? name : "");
    localStorage.setItem("about", about ? about : "");
    localStorage.setItem("photo", photo ? photo : "");
    localStorage.setItem("facebook", facebook ? facebook : "");
    localStorage.setItem("github", github ? github : "");
    localStorage.setItem("instagram", instagram ? instagram : "");
    localStorage.setItem("twitter", twitter ? twitter : "");
    localStorage.setItem("telegram", telegram ? telegram : "");
    localStorage.setItem("whatsapp", whatsapp ? whatsapp : "");
    localStorage.setItem("youtube", youtube ? youtube : "");
    localStorage.setItem("linked", linked ? linked : "");
    localStorage.setItem("email", email ? email : "");
    localStorage.setItem("dataOtherLinks", JSON.stringify(data));

    // alert on reload
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, [
    name,
    about,
    photo,
    facebook,
    github,
    instagram,
    telegram,
    twitter,
    whatsapp,
    youtube,
    linked,
    email,
    data,
  ]);

  // Add demo data btn
  const AddData = (e) => {
    e.preventDefault();
    setName("Amer Krara");
    setPhoto(
      "https://mir-s3-cdn-cf.behance.net/projects/404/86a3d095057965.Y3JvcCwzMzA3LDI1ODYsMTQ0OCwyMzAw.png"
    );
    setAbout("Ba4a Masr");
    setEmail("elonmusk@gmail.com");
    setFacebook("https://fb.com/elonmusk");
    setGitub("https://github.com/elonmusk");
    setInstagram("https://instagram.com/elonmusk");
    setLinked("https://linkedin.com/elonmusk");
    setTelegram("https://t.me/elonmusk");
    setTwitter("https://twitter.com/elonmusk");
    setWhatsapp("+20121664812");
    setYoutube("https://youtube.com/elonmusk");
    JSON.stringify(
      setData([
        ...data,
        {
          labelVal: "google",
          urlVal: "www.google.com",
          iconVal: "globe",
          iconType: "solid",
        },
        {
          labelVal: "twitter",
          urlVal: "www.twitter.com",
          iconVal: "twitter",
          iconType: "brands",
        },
        {
          labelVal: "youtube",
          urlVal: "www.youtube.com",
          iconVal: "youtube",
          iconType: "brands",
        },
      ])
    );
  };

  return (
    <div className="App ">
      {/* pass props to footer for edit button to edit all data after submit it */}
      <Footer
        buttonData={AddData}
        setName={setName}
        setPhoto={setPhoto}
        setAbout={setAbout}
        setFacebook={setFacebook}
        setGitub={setGitub}
        setEmail={setEmail}
        setInstagram={setInstagram}
        setTwitter={setTwitter}
        setLinked={setLinked}
        setWhatsapp={setWhatsapp}
        setYoutube={setYoutube}
        setTelegram={setTelegram}
        setData={setData}
      />
      {/* pass data to left sections */}
      <Left
        setName={setName}
        setPhoto={setPhoto}
        setAbout={setAbout}
        setFacebook={setFacebook}
        setGitub={setGitub}
        setEmail={setEmail}
        setInstagram={setInstagram}
        setTwitter={setTwitter}
        setLinked={setLinked}
        setWhatsapp={setWhatsapp}
        setYoutube={setYoutube}
        setTelegram={setTelegram}
        name={name}
        about={about}
        photo={photo}
        facebook={facebook}
        github={github}
        instagram={instagram}
        linked={linked}
        twitter={twitter}
        email={email}
        telegram={telegram}
        whatsapp={whatsapp}
        youtube={youtube}
        data={data}
        setData={setData}
      />
      {/* pass data to phone section  */}
      <Phone
        name={name}
        about={about}
        photo={photo}
        facebook={facebook}
        github={github}
        instagram={instagram}
        linked={linked}
        twitter={twitter}
        email={email}
        telegram={telegram}
        whatsapp={whatsapp}
        youtube={youtube}
        data={data}
      />
      {/* the final page that stored all data and ready for share */}
      <WebShare />
    </div>
  );
}

export default App;
