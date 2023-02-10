import React from "react";
import Navbar from "../Navbar/navbar.component";

import { ReactComponent as IntroImg } from "../../Assets/intro_img.svg";

import "./intro.styles.scss";

interface Props {
  setAppStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Intro = ({ setAppStart }: Props) => {
  return (
    <div className="intro-container">
      <Navbar />
      <IntroImg className="introImg_img" title="" />
      <h1 className="intro_title">Welcome to Taskly</h1>
      <p className="intro_subtitle">
        Taskly will help you to stay organized and perform your tasks much
        faster.
      </p>
      <button onClick={() => setAppStart(true)} className="intro_btn">
        Get started
      </button>
    </div>
  );
};

export default Intro;
