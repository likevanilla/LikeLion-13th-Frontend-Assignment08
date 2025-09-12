import { useState, useEffect } from "react";
import { Octokit } from "octokit";

export default function MyProfile() {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(false);

  async function getProfile() {
    try {
      const octokit = new Octokit({
        auth: import.meta.env.VITE_GITHUB_TOKEN,
      });

      const res = await octokit.request("GET /users/{username}", {
        username: "likevanilla",
      });
      console.log(res.data);
      setProfile(res.data);
    } catch (e) {
      setError(e);
      console.log(e);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  return (
    <div className="profileSection">
      <div className="profile">
        {profile.avatar_url && (
          <img
            className="profileImg"
            src={profile.avatar_url}
            alt={`${profile.name} Github Avatar`}
          />
        )}
        <div className="introduce">
          <div>{profile.name}</div>
          {profile.html_url && (
            <a className="githubUrl" href={profile.html_url} target="_blank">
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
