import React from "react";
import $ from 'jquery'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  $(window).scroll(function () {
    var h = $(document).height();
    var hh = $(document).scrollTop();
    if (hh > h / 1.5) {
      $("#top").css({
        top: "85%",
        opacity: "1",
        visibility: "visible",
        transform: "scale(1)",
      });
    } else {
      $("#top").css({
        top: "0",
        opacity: "0",
        visibility: "hidden",
        transform: "scale(0.1)",
      });
    }
  });
  return (
    <>
      <footer>
        <marquee behavior="" direction="">
          <p>
            Although we are strangers, <span>Happy Birthday</span> to the best
            person I have ever known... 🍰 ani <span>All The Best </span> for ur exam 👍
          </p>
        </marquee>
      </footer>

      <a href="!#" className="go-to-top" title="Go to Top" id="top" uk-scroll="true">
        <span className="go-to-top-icon">
            <KeyboardArrowUpIcon/>
        </span>
    </a>
    </>
  );
};

export default Footer;
