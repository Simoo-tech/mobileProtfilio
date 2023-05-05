import React, { useEffect } from "react";
import { useState } from "react";
import "../App.scss";
import Left from "../component/left";
import Phone from "../component/phone";
import Header from "../component/Header";
// 1- Set Values
const Home = () => {
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);
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
  console.log(clientData);
  // make array of adding other link

  useEffect(() => {
    localStorage.setItem("id", id);
    localStorage.setItem("clientData", JSON.stringify(clientData));
    localStorage.setItem(
      "data",
      JSON.stringify(data) ? JSON.stringify(data) : ""
    );
  }, [clientData, data, id]);
  return (
    <div className="Home">
      {/* pass props to footer for edit button to edit all data after submit it */}
      <Header
        clientData={clientData}
        setClientData={setClientData}
        setData={setData}
        dataVal={data}
        id={id}
        setId={setId}
      />
      {/* pass data to left sections */}
      <Left
        clientData={clientData}
        setClientData={setClientData}
        setData={setData}
        data={data}
        setId={setId}
      />
      {/* pass data to phone section  */}
      <Phone
        clientData={clientData}
        setClientData={setClientData}
        data={data}
      />
    </div>
  );
};

export default Home;
