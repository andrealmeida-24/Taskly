import React, { useEffect, useState } from "react";

import "./greet.styles.scss";

const Greet = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const getGreet = () => {
      let date = new Date();
      let hours = date.getHours();
      let greet = "";

      if (hours > 0 && hours < 12) {
        greet = "Good Morning";
      } else if (hours >= 12 && hours < 20) {
        greet = "Good Afternoon";
      } else {
        greet = "Good Night";
      }

      setTime(greet);

      /*setInterval(() => {
        getGreet();
      }, 60000); */
    };

    getGreet();
  }, []);

  return (
    <div className="greet-container">
      <h1 className="greet_title">{time},</h1>
    </div>
  );
};

export default Greet;
