import Html from "../assets/icon_html.svg";
import CSS from "../assets/icon_css.svg";
import JavaScript from "../assets/icon_javascript.svg";
import React from "../assets/icon_react.svg";
import Figma from "../assets/icon_figma.svg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function MySkills() {
  const titleRef = useScrollAnimation(0.3);
  const skillsRef = useScrollAnimation(0.2);

  return (
    <div className="skillSection">
      <h2 className="skillTitle fade-in" ref={titleRef}>
        SKILLS
      </h2>
      <div className="skill scale-in" ref={skillsRef}>
        <div className="skillBox">
          <div className="skillName">
            <img className="icons" src={Html} alt="Html 이미지" />
            HTML
          </div>
        </div>
        <div className="skillBox">
          <div className="skillName">
            <img className="icons" src={CSS} alt="CSS 이미지" />
            CSS
          </div>
        </div>
        <div className="skillBox">
          <div className="skillName">
            <img className="icons" src={JavaScript} alt="JavaScript 이미지" />
            JAVASCRIPT
          </div>
        </div>
        <div className="skillBox">
          <div className="skillName">
            <img className="icons" src={React} alt="React 이미지" />
            REACT
          </div>
        </div>
        <div className="skillBox">
          <div className="skillName">
            <img className="icons" src={Figma} alt="Figma 이미지" />
            FIGMA
          </div>
        </div>
      </div>
    </div>
  );
}
