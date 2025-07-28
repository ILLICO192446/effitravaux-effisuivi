import React, { useState } from "react";

export default function EFFISUIVI() {
  const [data, setData] = useState([
    {
      nom: "Sylvain Mauger",
      agence: "Brive",
      ambition: 100000,
      caSigne: 60000,
      caEncaisse: 45000,
      RO: true,
      R1: true,
      R2: false,
      R3: false,
      R4: false,
    },
    {
      nom: "Jean-François Mendes",
      agence: "Tulle",
      ambition: 120000,
      caSigne: 90000,
      caEncaisse: 70000,
      RO: true,
      R1: true,
      R2: true,
      R3: false,
      R4: false,
    },
  ]);

  return (
    <div style={{ padding: "2rem", maxWidth: 600, margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>EFFISUIVI</h2>
      {data.map((collab, idx) => {
        const progression = Math.round((collab.caSigne / collab.ambition) * 100);
        return (
          <div key={idx} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h3>{collab.nom} ({collab.agence})</h3>
                <p>Ambition : {collab.ambition.toLocaleString()} €</p>
                <p>CA signé : {collab.caSigne.toLocaleString()} €</p>
                <p>CA encaissé : {collab.caEncaisse.toLocaleString()} €</p>
              </div>
              <div style={{ width: 120 }}>
                <div style={{ background: "#eee", borderRadius: 4, height: 10, position: "relative" }}>
                  <div
                    style={{
                      width: `${progression}%`,
                      height: '100%',
                      background: "#3B82F6",
                      borderRadius: 4,
                    }}
                  />
                </div>
                <div style={{ textAlign: "right", fontSize: "0.8rem" }}>{progression}%</div>
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              {["RO","R1","R2","R3","R4"].map(phase => (
                <label key={phase} style={{ marginRight: '1rem' }}>
                  <input
                    type="checkbox"
                    checked={collab[phase]}
                    onChange={() => {
                      const updated = [...data];
                      updated[idx][phase] = !updated[idx][phase];
                      setData(updated);
                    }}
                  /> {phase}
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}