import MyProfile from "../components/MyProfile";
import MySkills from "../components/MySkills";
import "../styles/ProfileStyle.css";
import "../styles/SkillsStyle.css";

export default function PortfolioPage() {
  return (
    <>
      <div>
        <MyProfile />
        <MySkills />
      </div>
    </>
  );
}
