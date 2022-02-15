import React from "react";

export default function Roadmap() {
  const Initiatives = [
    ["Q3 2021", "Ideation, prototyping, Advisory", "primaryblue"],
    [
      "Q1 2022",
      "Market validation, community building, MVP, fundraising",
      "primaryblue"
    ],
    [
      "Q2 2022",
      "Product Launch, First Property Listing, pre-ICO/ICO launch, legal structuring",
      "primaryblue"
    ],
    [
      "Q3 2022",
      "Partnerships, Pipeline of projects, adding new features like NFT liquidity pools",
      "primaryblue"
    ]
  ];
  return (
    <div className="roadmap">
      {Initiatives.map((initiative, index) => {
        return (
          <a href="" class={"initiativediv  " + initiative[2]}>
            <div class=" iniiconbox">
              <img
                src={"/assets/img/icons/" + index + ".png"}
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
          </a>
        );
      })}
    </div>
  );
}
