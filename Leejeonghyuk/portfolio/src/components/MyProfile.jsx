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
      <h2 className="profileTitle">
        안녕하세요. <br />
        프론트엔드 개발자 <br />
        이정혁 입니다.
      </h2>
      <div className="profile">
        {profile.avatar_url && (
          <img
            className="profileImg"
            src={profile.avatar_url}
            alt={`${profile.name} Github Avatar`}
          />
        )}
        <div className="introduce">
          {profile.html_url && (
            <a className="urls" href={profile.html_url} target="_blank">
              Github
            </a>
          )}
          <a
            className="urls"
            href="https://likevanilla.github.io/"
            target="_blank"
          >
            Blog
          </a>
        </div>
        <div className="contact">
          <fieldset>
            <legend>Contact</legend>
            <div>Email : wjdgur27507@gmail.com </div>
            <div>Phone : 010-9571-2750</div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
