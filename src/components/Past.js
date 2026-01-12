import "../styles/Past.css";
import { useState } from "react";

import awap19 from "../past/awap19-image.png";
import awap21 from "../past/awap21-image.png";
import awap22 from "../past/awap22-image.png";
import awap23 from "../past/awap23-image.png";
import awap24 from "../past/awap24-image.jpg";
import awap25 from "../past/awap25-image.jpg";

const YEARS = [
  {
    id: "2025",
    name: "Raid CMU Legends",
    image: awap25,
    title: "Raid CMU Legends - 2025",
    text: `AWAP 2025 took place on February 15–16, 2025 with the theme "Raid CMU Legends".
Players face off as rival kingdoms battling for control of Great Pittsburgia — capturing castles,
expanding armies, and crushing opponents in a medieval-style arena. Teams design algorithms
to deploy and train troops, explore for resources, and construct or destroy buildings to gain an upper hand.`,
  },
  {
    id: "2024",
    name: "Debris Defense",
    image: awap24,
    title: "Debris Defense - 2024",
    text: `AWAP 2024 was held on January 27–28, 2024. In Debris Defense, teams design algorithms
to manage limited energy and deploy powerful tools to keep orbital lanes safe. Players can
build new ships — each with unique cooldowns, ranges, and strengths — construct solar panels
to fuel long-term operations, or even redirect debris toward opponents to overload their defenses.`,
  },
  {
    id: "2023",
    name: "Mars Makeover",
    image: awap23,
    title: "Mars Makeover - 2023",
    text: `Mars Makeover was our largest event yet, where teams competed to use their fleet of
explorer robots to explore the planet, collect resources from metal deposits using miner robots,
expand their fleet, and terraform land tiles to take over the planet.`,
  },
  {
    id: "2022",
    name: "Wifi Rumble",
    image: awap22,
    title: "Wifi Rumble - 2022",
    text: `Returning from COVID, Wifi Rumble was a blast, with teams competing head-to-head in a
seeding round and subsequent double elimination bracket for the top prize. Players acted as
internet service providers to establish cell towers across Ohhiyo.`,
  },
  {
    id: "2021",
    name: "Commute Chaos",
    image: awap21,
    title: "Commute Chaos - 2021",
    text: `In 2021, AWAP was hosted virtually with a theme based on transportation management.
Teams designed subway networks to minimize travel time across stations with limited resources.`,
  },
  {
    id: "2019",
    name: "Career Fair Mayhem",
    image: awap19,
    title: "Career Fair Mayhem - 2019",
    text: `Teams navigated a chaotic career fair, choosing which companies to visit and when
to maximize their recruiting value without wasting time in long lines.`,
  },
];

export default function Past() {
  const [active, setActive] = useState("2025");

  const current = YEARS.find(y => y.id === active);

  return (
    <div className="past">
      <div className="past-content">
        <div className="section-header">Past Challenges</div>

        <div className="past-buttons">
          {YEARS.map(y => (
            <button
              key={y.id}
              className="year-button"
              style={{
                background:
                  active === y.id
                    ? "var(--main-color)"
                    : "var(--secondary-color)",
              }}
              onClick={() => setActive(y.id)}
            >
              <span className="schedule-header-word">{y.name}</span>
            </button>
          ))}
        </div>

        <div className="past-info-box">
          <div className="row">
            <div className="row two">
              <div className="past-image">
                <img src={current.image} height="300" alt={current.name} />
              </div>
            </div>

            <div className="row one">
              <div className="past-description">
                <div className="past-title">{current.title}</div>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "medium",
                    lineHeight: "1.5rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  {current.text}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
