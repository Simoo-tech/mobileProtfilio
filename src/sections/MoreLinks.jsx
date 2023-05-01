import React from "react";
import "../sass/sections.scss";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
function MoreLinks({ data, setData }) {
  // adding link
  const addLink = () => {
    setData([...data, { labelVal: "", urlVal: "", iconVal: "", iconType: "" }]);
  };

  // handle delete links
  const handleDelte = (i) => {
    const onDelete = [...data];
    onDelete.splice(i, 1);
    setData(onDelete);
  };

  // handle change label
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeval = [...data];
    onchangeval[i][name] = value;
    setData(onchangeval);
  };

  return (
    <section className="more-links section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3  section-info">
            <h5>Other Links</h5>
            <p>Add other links </p>
            <Link to="https://fontawesome.com/search" target="_blank" rel="">
              get icons from here
              <br /> (only free icons) <br />
            </Link>
            <h3>Example:</h3>
            <p>
              the icon name is
              <br />
              <code>class="facebook" without fa</code>
            </p>
            <p>
              the icon type is
              <br />
              <code>class="brands" without fa</code>
            </p>
          </div>
          <div className="col-12 col-lg-9">
            {data.map((val, i) => (
              <div className="link-holder" key={i}>
                <div className="col-12 col-lg-5 input-info ">
                  <label htmlFor="iconVal">icon name (optional)</label>
                  <input
                    name="iconVal"
                    value={val.iconVal}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <div
                  className={
                    val.iconVal ? "col-12 col-lg-5 input-info" : "hidden"
                  }
                >
                  <label htmlFor="iconType">icon type</label>
                  <input
                    required
                    name="iconType"
                    value={val.iconType}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <div
                  className={`${
                    val.iconVal ? "col-12 col-lg-10" : "col-12 col-lg-5"
                  } input-info`}
                >
                  <label htmlFor="labelVal">Label</label>
                  <input
                    required
                    name="labelVal"
                    value={val.labelVal}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <div className="col-12 col-lg-10 input-info ">
                  <label htmlFor="urlVal">url</label>
                  <input
                    required
                    name="urlVal"
                    value={val.urlVal}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <TiDelete onClick={(i) => handleDelte(i)} />
              </div>
            ))}
            <div className="col-12">
              <button
                className={data.length > 6 ? "hidden" : `add-btn`}
                onClick={addLink}
              >
                <IoIosAddCircleOutline />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreLinks;
