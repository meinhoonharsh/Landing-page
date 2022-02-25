import React from "react";
import "./styles/Roadmap.scss";

export default function Roadmap() {
  const Initiatives = [
    ["Q4 2021", "Ideation, prototyping, Advisory", "lightblue"],
    [
      "Q1 2022",
      "Market validation, community building, MVP, fundraising",
      "primaryblue"
    ],
    [
      "Q2 2022",
      "Product Launch, First Property Listing, pre-ICO/ICO launch, legal structuring",
      "violet"
    ],
    [
      "Q3 2022",
      "Partnerships, Pipeline of projects, adding new features like NFT liquidity pools",
      "pink"
    ]
  ];
  return (
    <div className="roadmap">
      <h2>Roadmap</h2>
      <div class="initiativescontainer">
        {Initiatives.map((initiative, index) => {
          return (
            <div class={"initiativediv  " + initiative[2]}>
              <div class=" iniiconbox">
                <img
                  src={"/assets/img/roadmapicons/" + (index + 1) + ".png"}
                  style={{
                    position: "relative",
                    transition: "0.5s ease",
                    width: "100%"
                  }}
                  alt=""
                />
                <div class="shadowdiv"></div>
              </div>
              <div class="iniinfo">
                <h4>{initiative[0]}</h4>
                <p>{initiative[1]}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="content">
        <span>
          To stay updated about upcoming <i class="gtext">investment opportunities</i> and our <i class="gtext">ICO</i> &nbsp;
          launch, please join our discord server
        </span>

        <a
          href="https://discord.gg/SPkGXSeV2m"
          className="filled-button w-button"
        >
          Join Discord
        </a>
      </div>
    </div>
  );
}
