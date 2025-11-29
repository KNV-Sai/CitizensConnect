import React from "react";

const representatives = {
  chiefMinister: [
    {
      name: "N. Chandrababu Naidu",
      party: "Telugu Desam Party (TDP)",
      role: "Chief Minister of Andhra Pradesh (2024–present)",
      profileUrl: "https://en.wikipedia.org/wiki/N._Chandrababu_Naidu"
    }
  ],
  deputyChiefMinister: [
    {
      name: "Pawan Kalyan",
      party: "Jana Sena Party (JSP)",
      role: "Deputy Chief Minister of Andhra Pradesh (2024–present)",
      profileUrl: "https://en.wikipedia.org/wiki/Pawan_Kalyan"
    }
  ],
  cabinetMinisters: [
    {
      name: "Vangalapudi Anitha",
      party: "Telugu Desam Party (TDP)",
      role: "Minister of Home Affairs & Disaster Management",
      profileUrl: "https://en.wikipedia.org/wiki/Vangalapudi_Anitha"
    },
    {
      name: "T. G. Bharath",
      party: "Telugu Desam Party (TDP)",
      role: "Minister of Industries & Commerce",
      profileUrl: "https://en.wikipedia.org/wiki/T._G._Bharath"
    },
    {
      name: "K. S. Jawahar Babu",
      party: "Telugu Desam Party (TDP)",
      role: "Minister of Transport, Roads & Buildings",
      profileUrl: "https://en.wikipedia.org/wiki/K._S._Jawahar_Babu"
    },
    {
      name: "Gummadi Sandhya Rani",
      party: "Telugu Desam Party (TDP)",
      role: "Minister of Women & Child Welfare",
      profileUrl: "https://en.wikipedia.org/wiki/Gummadi_Sandhya_Rani"
    },
    {
      name: "K. Narayana Swamy",
      party: "Telugu Desam Party (TDP)",
      role: "Minister of Agriculture & Cooperation",
      profileUrl: "https://en.wikipedia.org/wiki/K._Narayana_Swamy"
    }
  ],
  membersOfParliament: [
    {
      name: "Y. S. Jagan Mohan Reddy",
      party: "YSR Congress Party (YSRCP)",
      role: "Member of Parliament, Lok Sabha (Kadapa)",
      profileUrl: "https://en.wikipedia.org/wiki/Y._S._Jaganmohan_Reddy"
    },
    {
      name: "Chandra Babu Naidu",
      party: "Telugu Desam Party (TDP)",
      role: "Member of Parliament, Lok Sabha (Kakinada)",
      profileUrl: "https://en.wikipedia.org/wiki/N._Chandrababu_Naidu"
    },
    {
      name: "Ram Mohan Naidu Kinjarapu",
      party: "Telugu Desam Party (TDP)",
      role: "Member of Parliament, Lok Sabha (Srikakulam)",
      profileUrl: "https://en.wikipedia.org/wiki/Ram_Mohan_Naidu_Kinjarapu"
    },
    {
      name: "Gandhi Rajendra Prasad",
      party: "Telugu Desam Party (TDP)",
      role: "Member of Parliament, Rajya Sabha",
      profileUrl: "https://en.wikipedia.org/wiki/K._Gandhi_Rajendra_Prasad"
    }
  ],
  membersOfLegislativeAssembly: [
    {
      name: "Ashok Bendalam",
      party: "Telugu Desam Party (TDP)",
      role: "MLA from Ichchapuram",
      profileUrl: "https://en.wikipedia.org/wiki/Ashok_Bendalam"
    },
    {
      name: "Botsa Satyanarayana",
      party: "YSR Congress Party (YSRCP)",
      role: "MLA from Cheepurupalli",
      profileUrl: "https://en.wikipedia.org/wiki/Botsa_Satyanarayana"
    },
    {
      name: "Chandrababu Naidu",
      party: "Telugu Desam Party (TDP)",
      role: "MLA from Kuppam (Former CM)",
      profileUrl: "https://en.wikipedia.org/wiki/N._Chandrababu_Naidu"
    },
    {
      name: "Pawan Kalyan",
      party: "Jana Sena Party (JSP)",
      role: "MLA from Gadwal",
      profileUrl: "https://en.wikipedia.org/wiki/Pawan_Kalyan"
    },
    {
      name: "Y. S. Jagan Mohan Reddy",
      party: "YSR Congress Party (YSRCP)",
      role: "MLA from Pulivendula (Former CM)",
      profileUrl: "https://en.wikipedia.org/wiki/Y._S._Jaganmohan_Reddy"
    }
  ],
  formerChiefMinisters: [
    {
      name: "Y. S. Jagan Mohan Reddy",
      party: "YSR Congress Party (YSRCP)",
      role: "Former Chief Minister (2019–2024)",
      profileUrl: "https://en.wikipedia.org/wiki/Y._S._Jaganmohan_Reddy"
    },
    {
      name: "N. Kiran Kumar Reddy",
      party: "Indian National Congress (INC)",
      role: "Former Chief Minister (2010–2014)",
      profileUrl: "https://en.wikipedia.org/wiki/N._Kiran_Kumar_Reddy"
    }
  ]
};

export default function Representatives() {
  const renderPoliticianSection = (title, politicians, level = 1) => (
    <div className="hierarchy-section" style={{ marginBottom: "40px" }}>
      <h3
        className="section-title"
        style={{
          color: "#6a47f2",
          fontWeight: 600,
          fontSize: level === 1 ? "28px" : level === 2 ? "24px" : "20px",
          marginBottom: "20px",
          borderBottom: "2px solid #e0e0e0",
          paddingBottom: "10px"
        }}
      >
        {title}
      </h3>

      <div className="reps-grid" role="list">
        {politicians.map((rep, idx) => (
          <article className="rep-card" key={idx} role="listitem" aria-labelledby={`rep-${level}-${idx}`}>
            <div>
              <div id={`rep-${level}-${idx}`} className="rep-name">{rep.name}</div>
              <div className="rep-party" style={{marginTop:8}}>{rep.party}</div>
              <div style={{marginTop:10,color:"#666", fontSize: "0.9rem", lineHeight: "1.4"}}>{rep.role}</div>
            </div>

            <div style={{marginTop:14}}>
              <a className="btn-primary" href={rep.profileUrl} target="_blank" rel="noreferrer">View profile</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <section style={{ maxWidth: 1400, margin: "40px auto", padding: "0 16px" }}>
      <h2 style={{ color: "#6a47f2", fontWeight: 700, fontSize: 32, textAlign: "center", marginBottom: "40px" }}>
        Andhra Pradesh Political Representatives & Their Roles
      </h2>

      {renderPoliticianSection("Chief Minister", representatives.chiefMinister, 1)}
      {renderPoliticianSection("Deputy Chief Minister", representatives.deputyChiefMinister, 1)}
      {renderPoliticianSection("Cabinet Ministers", representatives.cabinetMinisters, 2)}
      {renderPoliticianSection("Members of Parliament", representatives.membersOfParliament, 2)}
      {renderPoliticianSection("Members of Legislative Assembly", representatives.membersOfLegislativeAssembly, 3)}
      {renderPoliticianSection("Former Chief Ministers", representatives.formerChiefMinisters, 3)}
    </section>
  );
}
