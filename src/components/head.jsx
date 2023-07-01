import React, { useEffect } from "react";
import $ from "jquery";

function Head() {
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.matchMedia("(min-width: 900px) and (max-width: 1200px)").matches;
      if (isMobile) {
        const PHead = document.getElementById("PHead");
        if (PHead) {
          PHead.style.backgroundSize = `${200 - window.pageYOffset / 60}%`;
          PHead.style.opacity = `${95 - window.pageYOffset / 100}%`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="HHH" className="scroll-wrapper ">
      <div className="scroll-wrapper2">
        <span id="PHead">
          {/* <img id="PHead" src="/imeges/P_20221211_154157-05.jpeg" alt="amaan"></img> */}
        </span>
        <span>
          <main className="Hcontainer">
            <div className="HCF">
              <img src="/imeges/code (1).png" alt="code"></img>
            </div>
            <div>
              <p>Hello 👋 I'm</p>
              <section className="animation">
                <div className="Hfirst">
                  <div>Syed Amaan</div>
                </div>
                <div className="Hsecond">
                  <div>Full Stack Engineer</div>
                </div>
                <div className="Hthird">
                  <div>Systems Engineer</div>
                </div>
              </section>
            </div>
            <div className="login-box">
              <form>
                <a href="https://syedamaan.vercel.app/about">
                  <div className="animate">
                    <svg
                      viewBox="45 60 400 320"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fff"
                        d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210"
                        mask="url(#knockout-text)"
                      ></path>
                      <mask id="knockout-text">
                        <rect
                          width="100%"
                          height="100%"
                          fill="#fff"
                          x="0"
                          y="0"
                        />
                        <text x="42%" y="70%" font-size="35">
                          Explore
                        </text>
                      </mask>
                    </svg>
                  </div>
                </a>
              </form>
            </div>
          </main>
        </span>
      </div>
    </div>
  );
}

export default Head;
