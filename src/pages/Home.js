import React, { useEffect } from "react";
import { useState } from "react";
import "../App.scss";
import Left from "../component/left";
import Phone from "../component/phone";
import Header from "../component/Header";
import { Grid, Typography, makeStyles } from "@material-ui/core";

// style

const style = makeStyles({
  popUp: {
    zIndex: "10",
    display: "none",
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    top: "50%",
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    "&.active": {
      display: "block",
    },
  },
  Text: {
    textAlign: "end",
  },
  container: {
    padding: "0px 10px",
  },
});

// 1- Set Values data and id
const Home = () => {
  const [theme, setTheme] = useState("light");
  const [Newid, setNewId] = useState(0);
  const [otherLinks, setOtherLinks] = useState([
    { labelVal: "", urlVal: "", iconName: "" },
  ]);
  const [clientData, setClientData] = useState({
    name: "",
    about: "",
    photo: "",
    facebook: "",
    github: "",
    instagram: "",
    twitter: "",
    telegram: "",
    whatsapp: "",
    youtube: "",
    linked: "",
    email: "",
  });

  // 2- style and make Popup
  const classes = style();
  const [copyShowPop, setCopyShowPop] = useState("");
  const [updateShowPop, setUpdateShowPop] = useState("");

  // 3- theme changing
  const themeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // in render save data to localStorage
  useEffect(() => {
    window.localStorage.setItem("THEME_CHANGE", theme ? theme : "light");
    window.localStorage.setItem("CLIENT_PROTFILIO_ID", Newid ? Newid : "");
    window.localStorage.setItem(
      "STORE_CLIENT_DATA",
      clientData ? JSON.stringify(clientData) : ""
    );
    window.localStorage.setItem(
      "CLIENT_OTHERLINKS_DATA",
      otherLinks ? JSON.stringify(otherLinks) : ""
    );
  }, [clientData, otherLinks, Newid, theme]);

  return (
    <Grid container className={`Home theme  ${theme} `}>
      {/* PopUp for copying link and data update  */}
      <Typography variant="h6" className={`${classes.popUp} ${updateShowPop}`}>
        Data Updated
      </Typography>
      <Typography variant="h6" className={`${classes.popUp} ${copyShowPop}`}>
        Link Copied
      </Typography>
      {/* pass props to Header for edit button to edit all data after submit it */}
      <Header
        clientData={clientData}
        setClientData={setClientData}
        setOtherLinks={setOtherLinks}
        otherLinks={otherLinks}
        Newid={Newid}
        setNewId={setNewId}
        setCopyShowPop={setCopyShowPop}
        setUpdateShowPop={setUpdateShowPop}
        themeChange={themeChange}
        theme={theme}
      />
      {/* pass data to left sections */}
      <Grid
        component="section"
        item
        xs={12}
        md={7}
        lg={8}
        className="leftSection"
      >
        <Left
          clientData={clientData}
          setClientData={setClientData}
          setOtherLinks={setOtherLinks}
          otherLinks={otherLinks}
          setNewId={setNewId}
          setTheme={setTheme}
          theme={theme}
        />
      </Grid>
      {/* pass data to phone section  */}
      <Grid component="section" item md={5} lg={4} className=" rightSection">
        <Phone
          clientData={clientData}
          setClientData={setClientData}
          otherLinks={otherLinks}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
