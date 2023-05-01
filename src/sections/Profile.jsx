import React from "react";
import "../sass/sections.scss";
export default function Profile({
  setName,
  setAbout,
  setPhoto,
  name,
  about,
  photo,
}) {
  const nameValue = (e) => {
    const result = e.target.value;
    setName(result);
  };
  const aboutValue = (e) => {
    const result = e.target.value;
    setAbout(result);
  };
  const photoValue = (e) => {
    const result = e.target.value;
    setPhoto(result);
  };
  return (
    <section className="profile section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 section-info">
            <h5>Profile</h5>
            <p>some public information about you </p>
          </div>
          <div className="col-12 col-lg-9 section-inputs">
            <div className="name  input-info">
              <label htmlFor="username">Your name</label>
              <input
                type="text"
                name="username"
                value={name}
                onChange={nameValue}
                placeholder="e.x. ahmed"
              />
            </div>
            <div className="about input-info">
              <label htmlFor="about-you">About You</label>
              <textarea
                name="about-you"
                id="about-you"
                value={about}
                onChange={aboutValue}
                placeholder="e.x. I'm Front-End Developer"
                rows={5}
              ></textarea>
            </div>
            <div className="photo input-info">
              <label htmlFor="photo">Photo Url</label>
              <input
                type="url"
                name="photo"
                value={photo}
                onChange={photoValue}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
