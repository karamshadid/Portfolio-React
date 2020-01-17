import React from "react";

import Typical from "react-typical";

function Header() {
  return (
    <div className="Header">
      <p id="typing">
        Hello I'm Karam
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            " I am a developer",
            1800,
            " a team player",
            1800,
            " a beach bum",
            1800
          ]}
        />
      </p>
    </div>
  );
}

export default Header;
