import React, { useState } from "react";

import classes from "./index.css";

function MyButton({ color, click, children })  {
  return (
    <button className={`button ${color}`} onClick={click}>
      {" "}
      {children}
    </button>
  );
};

export default MyButton;