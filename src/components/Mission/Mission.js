import React, { useState, useEffect } from "react";
import "./Mission.css"

export const Mission = () => {
  
  const [colorMap, setColorMap] = useState({
    word1: "#008384",
    word2: "#008384",
    word3: "black",
    word4: "black",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let updatedColors = {
        word1: "#008384",
        word2: "black",
        word3: "black",
        word4: "black",
      };

      if (scrollPosition >= 50 && scrollPosition < 100) {
        updatedColors = {
          word1: "#1b73b0",
          word2: "black",
          word3: "#042f67",
          word4: "black",
        };
      } else if (scrollPosition >= 100 && scrollPosition < 200) {
        updatedColors = {
          word1: "#1b73b0",
          word2: "#042f67",
          word3: "#042f67",
          word4: "black",
        };
      } else if (scrollPosition >= 200) {
        updatedColors = {
          word1: "#008384",
          word2: "#042f67",
          word3: "#042f67",
          word4: "#008384",
        };
      }

      setColorMap(updatedColors);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="content-fluid content-fluid-mission" id="mission-view">
      <div className="row">
        <div className="col-6 justify-content-center d-flex">
          <div className="card card-main">
            <h1 className="card-title">Mission</h1>
            <section>
              <h4>
                Empowering people to take control of their financial well-being
                through <span style={{ color: colorMap.word1 }}>simple</span>,{" "}
                <span style={{ color: colorMap.word2 }}>visual</span>, and{" "}
                <span style={{ color: colorMap.word3 }}>personalized</span>{" "}
                tools that allow them to manage their income, control their
                expenses, and improve their{" "}
                <span style={{ color: colorMap.word4 }}>financial health</span>.
              </h4>
            </section>
          </div>
        </div>
        <div className="col-6 justify-content-center d-flex">
          <div className="card card-main">
            <h1 className="card-title">Vision</h1>
            <section>
              <h4>
                To become <span style={{ color: colorMap.word1 }}>the leading personal financial</span> management platform,{" "}
                <span style={{ color: colorMap.word2 }}>helping millions of people</span>{" "}
                achieve financial stability, 
                <span style={{ color: colorMap.word3 }}>make informed financial decisions, and create healthy 
                habits</span>{" "} that drive <span style={{ color: colorMap.word4 }}>their long-term financial well-being</span>. 
              </h4>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

