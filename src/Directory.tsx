import React, { useState } from "react";
import App from "./Components/App_Component/App";
import Intro from "./Components/Intro_Component/Intro";

const Directory = () => {
  const [appStart, setAppStart] = useState(false);

  return <>{appStart ? <App /> : <Intro setAppStart={setAppStart} />}</>;
};

export default Directory;
