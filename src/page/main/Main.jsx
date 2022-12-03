import React from "react";
import "./Main.scss";
import profile_icon from "../../assets/images/profile_icon.png";
import weekend_study from "../../assets/images/weekend_study.png";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineSmile } from "react-icons/ai";
import { useState } from "react";

export const Main = () => {
  const [fill, setFill] = useState(false);

  const fullfill = () => {
    setFill(!fill);
  };

  const clickToGithub = () => {
    const url = "https://github.com/elinapark0818";
    window.open(url, "_blank");
  };

  return (
    <div className="main_container">
      <div className="profile_card">
        <div className="profile_header">
          <img src={profile_icon} alt="profile_icon" className="profile_icon" />
          <p className="profile_name" onClick={clickToGithub}>
            elinapark0818
          </p>
        </div>
        <div className="profile_contents">
          <div className="images">
            <img className="image" src={weekend_study} alt="profile" />
          </div>
          <div className="contents_icon">
            {fill ? (
              <AiFillHeart className="heart" onClick={fullfill} />
            ) : (
              <AiOutlineHeart className="icon" onClick={fullfill} />
            )}

            <AiOutlineMessage className="icon" />
            <AiOutlineShareAlt className="icon" />
          </div>
          <div className="contents_description">
            <span className="contents_name">elinapark0818</span>
            <span className="description">
              #성장하고있는 #주니어_개발자 #웹_개발자
              #새로운언어를익히는데두려움이적고_협업을위해소통을중요하게생각하는_개발자
            </span>
          </div>
        </div>
        <div className="footer">
          <div className="footer_input">
            <AiOutlineSmile className="icon_smile" />
            <input className="input" placeholder="Add a comments..." />
          </div>
          <button className="btn_post">Post</button>
        </div>
      </div>
    </div>
  );
};
