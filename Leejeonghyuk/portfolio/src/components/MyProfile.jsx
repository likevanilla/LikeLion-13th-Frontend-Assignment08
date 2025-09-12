import { useState } from "react";
import { Octokit } from "octokit";
import { useEffect } from "react";

export default function MyProfile() {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function getProfile() {
    try {
      const octokit = new Octokit();
      const res = await octokit.request("GET /users/{username}", {
        username: "likevanilla",
      });
      console.log(res.data);
      setProfile(res.data);
    } catch (e) {
      setError(e);
      setErrorMessage(error);
      console.log(errorMessage);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="profileSection">
      <div className="profile">
        <img
          className="profileImg"
          src={profile.avatar_url}
          alt={`${profile.name} Github Avatar`}
        />
        <div className="introduce">
          <div>{profile.name}</div>
          <a className="githubUrl" href={profile.html_url} target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
