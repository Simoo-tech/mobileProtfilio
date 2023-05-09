import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import StorageIcon from "@material-ui/icons/Storage";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Grid, makeStyles } from "@material-ui/core";
import "../sass/Home.scss";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Clipboard from "@react-native-clipboard/clipboard";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
// style
const style = makeStyles({
  Text: {
    textAlign: "end",
  },
  container: {
    padding: "0px 10px",
  },
});

function Header({
  clientData,
  setClientData,
  setOtherLinks,
  otherLinks,
  Newid,
  setNewId,
  setCopyShowPop,
  setUpdateShowPop,
  themeChange,
  theme,
}) {
  // get style
  const classes = style();

  // make get new id by uuid
  const id = uuid();

  // save protfilio url
  // add data and fetching function
  const fetchingData = async () => {
    await axios
      .post("http://localhost:8000/PersonalData", {
        clientData,
        otherLinks,
        id,
      })
      .then((res) => {
        setNewId(res.data.id);
        Clipboard.setString(
          `http://localhost:3000/mobileProtfilio/share/${res.data.id}`
        );
      });
    setCopyShowPop("active");
    setTimeout(() => {
      setCopyShowPop("");
    }, 1500);
  };

  // edit data function
  const EditData = async () => {
    await axios.put(`http://localhost:8000/PersonalData/${Newid}`, {
      clientData,
      otherLinks,
    });
    Clipboard.setString(`http://localhost:3000/mobileProtfilio/share/${Newid}`);
    setUpdateShowPop("active");
    setTimeout(() => {
      setUpdateShowPop("");
    }, 1500);
  };

  // Add demo data function
  const AddData = (e) => {
    e.preventDefault();
    setClientData({
      name: "Amer Krara",
      about: "Ba4a Masr",
      photo:
        "https://mir-s3-cdn-cf.behance.net/projects/404/86a3d095057965.Y3JvcCwzMzA3LDI1ODYsMTQ0OCwyMzAw.png",
      facebook: "https://fb.com/elonmusk",
      github: "https://github.com/elonmusk",
      twitter: "https://twitter.com/elonmusk",
      telegram: "https://t.me/elonmusk",
      instagram: "https://instagram.com/elonmusk",
      linked: "https://linkedin.com/elonmusk",
      youtube: "https://youtube.com/elonmusk",
      whatsapp: "+20121664812",
      email: "elonmusk@gmail.com",
    });
    JSON.stringify(
      setOtherLinks([
        {
          labelVal: "google",
          urlVal: "www.google.com",
          iconName: "mdi:google-chrome",
        },
        {
          labelVal: "facebook",
          urlVal: "www.facebook.com",
          iconName: "ic:baseline-facebook",
        },
        {
          labelVal: "instagram",
          urlVal: "www.instagram.com",
          iconName: "uil:instagram-alt",
        },
      ])
    );
  };

  return (
    <Grid
      component="header"
      container
      justifyContent="space-between"
      className={classes.container}
    >
      <Grid item xs={8}>
        <Grid container>
          <Button endIcon={<StorageIcon />} onClick={AddData}>
            demo data
          </Button>
          {Newid === "" || Newid === "" ? (
            <Button endIcon={<ShareIcon />} onClick={fetchingData}>
              Share Protfilio
            </Button>
          ) : (
            ""
          )}
          {Newid === "" || Newid === "" ? (
            ""
          ) : (
            <Button endIcon={<EditIcon />} onClick={EditData}>
              Edit Data
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid item xs={4} className="themeChange">
        <Button
          endIcon={
            theme === "light" ? (
              <WbSunnyIcon />
            ) : (
              <Brightness3Icon style={{ transform: " rotate(150deg)" }} />
            )
          }
          onClick={themeChange}
        >
          {theme === "light" ? "light" : "dark"} mode
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
