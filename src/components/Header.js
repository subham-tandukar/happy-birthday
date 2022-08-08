import React, { useState } from "react";
import { TextField } from "@mui/material";
import $ from "jquery";

const Header = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [none, setNone] = useState(false);

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleOk = () => {
    if (name === "") {
      setNone(none);
      setMsg("Name cannot be blank");
      
    } else {
      setNone(!none);
      setMsg("");

      const mahima = document.querySelector("html");

      $(mahima).addClass("scroll");
    }
  };
  const handleKeyPress = () => {
    setMsg("");
  };

  return (
    <>
      <section className={`your-name ${none ? "none" : ""}`}>
        <div className="box">
          <TextField
            id="outlined-basic"
            label="Enter Your Nickname: ❣️"
            variant="outlined"
            style={{ textTransform: "capitalize" }}
            onChange={handleName}
            autoComplete="off"
            onKeyPress={handleKeyPress}
          />
          <span>{msg}</span>
          <button onClick={handleOk}>Ok</button>
        </div>
      </section>

      <header>
        <div
          className="head"
          uk-sticky="top:300; animation: uk-animation-slide-top;"
        >
          <h3 style={{ textTransform: "capitalize" }}>
            Happy Birthday <span>{name}</span> 💓 🎈
          </h3>
        </div>
      </header>
    </>
  );
};

export default Header;
