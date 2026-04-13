import { useState } from "react";
import "./ghost.scss";

function Ghost() {
  const [search, setSearch] = useState("");
  const [selectedEvidence, setSelectedEvidence] = useState([]);

  const ghosts = [
    {
      name: "Spirit",
      evidence: ["EMF Level 5", "Spirit Box", "Ghost Writing"],
    },
    {
      name: "Wraith",
      evidence: ["EMF Level 5", "Spirit Box", "D.O.T.S Projector"],
    },
    {
      name: "Phantom",
      evidence: ["Spirit Box", "Ultraviolet", "D.O.T.S Projector"],
    },
    {
      name: "Poltergeist",
      evidence: ["Spirit Box", "Ultraviolet", "Ghost Writing"],
    },
    {
      name: "Banshee",
      evidence: ["Ultraviolet", "Ghost Orbs", "D.O.T.S Projector"],
    },
    {
      name: "Jinn",
      evidence: ["EMF Level 5", "Ultraviolet", "Freezing Temperatures"],
    },
    {
      name: "Mare",
      evidence: ["Spirit Box", "Ghost Orbs", "Ghost Writing"],
    },
    {
      name: "Revenant",
      evidence: ["Ghost Orbs", "Ghost Writing", "Freezing Temperatures"],
    },
    {
      name: "Shade",
      evidence: ["EMF Level 5", "Ghost Writing", "Freezing Temperatures"],
    },
    {
      name: "Demon",
      evidence: ["Ultraviolet", "Ghost Writing", "Freezing Temperatures"],
    },
    {
      name: "Yurei",
      evidence: ["Ghost Orbs", "Freezing Temperatures", "D.O.T.S Projector"],
    },
    {
      name: "Oni",
      evidence: ["EMF Level 5", "Freezing Temperatures", "D.O.T.S Projector"],
    },
    {
      name: "Yokai",
      evidence: ["Spirit Box", "Ghost Orbs", "D.O.T.S Projector"],
    },
    {
      name: "Hantu",
      evidence: ["Ultraviolet", "Ghost Orbs", "Freezing Temperatures"],
    },
    {
      name: "Goryo",
      evidence: ["EMF Level 5", "Ultraviolet", "D.O.T.S Projector"],
    },
  ];

  const evidenceList = [
    "EMF Level 5",
    "Spirit Box",
    "Ghost Writing",
    "Ultraviolet",
    "Ghost Orbs",
    "Freezing Temperatures",
    "D.O.T.S Projector",
  ];

  const filteredGhosts = ghosts.filter((ghost) => {
    const matchesSearch = ghost.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesEvidence =
      selectedEvidence.length === 0 ||
      selectedEvidence.every((evi) => ghost.evidence.includes(evi));

    return matchesSearch && matchesEvidence;
  });

  return (
    <div className="ghost-page">
      <h1>Ghosts</h1>

      <input
        type="text"
        placeholder="Search ghost..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="ghost-search"
      />

      <div className="evidence-bar">
        {evidenceList.map((evi, index) => (
          <button
            key={index}
            className={selectedEvidence.includes(evi) ? "active" : ""}
            onClick={() => {
              if (selectedEvidence.includes(evi)) {
                setSelectedEvidence(
                  selectedEvidence.filter((item) => item !== evi),
                );
              } else if (selectedEvidence.length < 3) {
                setSelectedEvidence([...selectedEvidence, evi]);
              }
            }}
          >
            {evi}
          </button>
        ))}
      </div>

      <div className="ghost-grid">
        {filteredGhosts.map((ghost, index) => (
          <div className="ghost-card" key={index}>
            <div className="ghost-card-top">
              <h2>{ghost.name}</h2>
            </div>

            <div className="ghost-card-bottom">
              <h3>Evidence</h3>
              <ul>
                {ghost.evidence.map((evi, i) => (
                  <li key={i}>{evi}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {filteredGhosts.length === 0 && (
        <p className="no-results">No ghosts match these evidences.</p>
      )}
    </div>
  );
}

export default Ghost;
