import React, { useState } from "react";
import ShareIcon from "@material-ui/icons/Share";
import StorageIcon from "@material-ui/icons/Storage";
import EditIcon from "@material-ui/icons/Edit";
import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

const style = makeStyles({
  popUp: {
    zIndex: "10",
    display: "none",
    position: "absolute",
    left: "50%",
    top: "50%",
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    "&.active": {
      display: "block",
    },
  },
});

function Header({ clientData, setClientData, dataVal, setData, id, setId }) {
  // get data id

  // style PopUp classe active
  const [copyShowPop, setCopyShowPop] = useState("");
  const [updateShowPop, setUpdateShowPop] = useState("");
  const classes = style();

  // add data and fetching
  const fetchingData = async () => {
    setCopyShowPop("active");
    setTimeout(() => {
      setCopyShowPop("");
    }, 1500);
    await axios
      .post("http://localhost:8000/PersonalData", {
        clientData,
        dataVal,
      })
      .then((res) => {
        setId(res.data.id);
        navigator.clipboard.writeText(
          `http://localhost:3000/mobileProtfilio/share/${res.data.id}`
        );
      });
  };

  // edit data function
  const EditData = async () => {
    setUpdateShowPop("active");
    setTimeout(() => {
      setUpdateShowPop("");
    }, 1500);
    await axios.put(`http://localhost:8000/PersonalData/${id}`, {
      clientData,
      dataVal,
    });
    navigator.clipboard.writeText(
      `http://localhost:3000/mobileProtfilio/share/${id}`
    );
  };
  // 2- Add demo data btn
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
      setData([
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
    <Box component="header">
      <Grid container justifyContent="space-between">
        <Grid item lg={9}>
          <Button endIcon={<StorageIcon />} onClick={AddData}>
            demo data
          </Button>
          <Typography
            variant="h6"
            className={`${classes.popUp} ${copyShowPop}`}
          >
            Link Copied
          </Typography>
          <Button endIcon={<ShareIcon />} onClick={fetchingData}>
            Share New Protfilio
          </Button>
          {id == null || id == "null" ? (
            ""
          ) : (
            <Button endIcon={<EditIcon />} onClick={EditData}>
              Edit Data
            </Button>
          )}
          <Typography
            variant="h6"
            className={`${classes.popUp} ${updateShowPop}`}
          >
            Data Updated
          </Typography>
        </Grid>
        <Grid component="p" lg={3} item className="copyright">
          Made By Salah eldin Mahmoud
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
