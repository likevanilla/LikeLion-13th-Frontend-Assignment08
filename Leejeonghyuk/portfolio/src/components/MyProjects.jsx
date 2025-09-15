import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import odigage from "../assets/어디가게 로고.png";
import avoid_bomb from "../assets/mainlogo.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function MyProject() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);
  const titleRef = useScrollAnimation(0.3);
  const project1Ref = useScrollAnimation(0.2);
  const project2Ref = useScrollAnimation(0.2);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const octokit = new Octokit({
          auth: import.meta.env.VITE_GITHUB_TOKEN,
        });

        const repo1 = await octokit.request("GET /repos/{owner}/{repo}", {
          owner: "likevanilla",
          repo: "LikeLion-13th-TEAM03-FE",
        });

        const repo2 = await octokit.request("GET /repos/{owner}/{repo}", {
          owner: "likevanilla",
          repo: "pygame-delta-avoiding-bomb",
        });

        setRepos([repo1.data, repo2.data]);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    }

    fetchRepos();
  }, []);

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }
  return (
    <div className="projectSection">
      <h2 className="projectTitle fade-in" ref={titleRef}>
        PROJECTS
      </h2>
      <div className="project slide-in-left" ref={project1Ref}>
        <div className="projectBox">
          <img className="image" src={odigage} alt="어디가게 로고 이미지" />
          <div className="description">
            <h2>주요 기능</h2>
            <pre className="mainFunction">
              지역 상권과 관련된 다양한 데이터를 AI로 종합 분석하여 소상공인의
              <br />
              사업적 의사결정을 지원
            </pre>
            <br />
            <h2>Domain</h2>
            <div className="link">
              <a className="url" href="https://www.odigage.store/">
                https://www.odigage.store/
              </a>
            </div>
            <br />
            <h2>Github URL</h2>
            <div className="link">
              {repos[0] && (
                <a
                  className="url"
                  href={repos[0].html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo 바로가기
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="project slide-in-right" ref={project2Ref}>
        <div className="projectBox">
          <img
            className="image"
            src={avoid_bomb}
            alt="폭탄 피하기 게임 로고 이미지"
          />
          <div className="description">
            <h2>주요 기능</h2>
            <pre className="mainFunction">
              하늘에서 떨어지는 폭탄을 피하는 게임
            </pre>
            <br />
            <h2>Download</h2>
            <div className="link">
              <a
                className="url"
                href="https://www.dropbox.com/scl/fi/ht85nxqek1qvz85rp37xp/.zip?rlkey=o6ctgvdsn0ir2895caorj9mcp&st=11nrv2vf&dl=0"
              >
                다운로드 바로가기
              </a>
            </div>
            <br />
            <h2>Github URL</h2>
            <div className="link">
              {repos[1] && (
                <a
                  className="url"
                  href={repos[1].html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo 바로가기
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
