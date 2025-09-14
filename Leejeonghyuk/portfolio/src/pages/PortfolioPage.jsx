import MyProfile from "../components/MyProfile";
import MySkills from "../components/MySkills";
import MyProjects from "../components/MyProjects";
import "../styles/ProfileStyle.css";
import "../styles/SkillsStyle.css";
import "../styles/ProjectStyle.css";

export default function PortfolioPage() {
  return (
    <>
      <div>
        <MyProfile />
        <MySkills />
        <MyProjects />
      </div>
    </>
  );
}
