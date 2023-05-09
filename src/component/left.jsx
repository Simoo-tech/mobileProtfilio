import React, { useEffect } from "react";
import Profile from "../sections/Profile";
import SocialLinks from "../sections/socialLinks";
import MoreLinks from "../sections/MoreLinks";
function Left({
  // get Props
  otherLinks,
  setOtherLinks,
  clientData,
  setClientData,
  setNewId,
  setTheme,
}) {
  // local storage get data and update value
  const storedId = window.localStorage.getItem("CLIENT_PROTFILIO_ID");
  const storedClientData = window.localStorage.getItem("STORE_CLIENT_DATA");
  const storedOtherLinkData = window.localStorage.getItem(
    "CLIENT_OTHERLINKS_DATA"
  );
  const storedTheme = window.localStorage.getItem("THEME_CHANGE");

  // get stored data from localstorage
  useEffect(() => {
    setTheme(storedTheme ? storedTheme : "light");
    setClientData(storedClientData ? JSON.parse(storedClientData) : "");
    setOtherLinks(storedOtherLinkData ? JSON.parse(storedOtherLinkData) : "");
    setNewId(storedId ? storedId : "");
  }, []);

  return (
    <>
      {/* pass data to profile section */}
      <Profile clientData={clientData} setClientData={setClientData} />
      {/* pass data to links section */}
      <SocialLinks clientData={clientData} setClientData={setClientData} />
      {/* pass data to other link section */}
      <MoreLinks otherLinks={otherLinks} setOtherLinks={setOtherLinks} />
    </>
  );
}

export default Left;
