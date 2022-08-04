import React, { useState } from "react";

const Header = () => {
  const [name, setName] = useState("");
  const [none, setNone] = useState(false);

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  return (
    <>
      <section className={`your-name ${none ? "none" : ""}`}>
        <div className="box">
          <label htmlFor="nick-name">Enter Your Nickname: ❣️</label> <br />
          <input
            type="text"
            id="nick-name"
            style={{ textTransform: "capitalize" }}
            onChange={handleName}
            autoComplete="off"
          />
          <br />
          <button onClick={() => setNone(!none)}>Ok</button>
        </div>
      </section>

      <header>
        <div
          className="head"
          uk-sticky="top:300; animation: uk-animation-slide-top;"
        >
          <h3 style={{ textTransform: "capitalize" }}>
            Happy Birthday {name} 💓 🎈
          </h3>
        </div>
      </header>
    </>
  );
};

export default Header;
