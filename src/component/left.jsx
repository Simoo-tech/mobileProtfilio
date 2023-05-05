import React, { useEffect } from "react";
import Profile from "../sections/Profile";
import SocialLinks from "../sections/socialLinks";
import MoreLinks from "../sections/MoreLinks";
function Left({
  // get Props
  data,
  setData,
  clientData,
  setClientData,
  setId,
}) {
  useEffect(() => {
    setClientData(JSON.parse(localStorage.getItem("clientData")));
    setData(JSON.parse(localStorage.getItem("data")));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <>
      <section className="col-12 col-lg-8 leftSection">
        <div className="sections">
          {/* pass props to profile section to reset data input and store  */}
          <Profile clientData={clientData} setClientData={setClientData} />
          {/* pass props to links section to reset data input and store */}
          <SocialLinks clientData={clientData} setClientData={setClientData} />
          <MoreLinks data={data} setData={setData} />
        </div>
      </section>
    </>
  );
}

export default Left;
