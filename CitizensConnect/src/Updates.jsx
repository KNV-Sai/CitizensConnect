import React from "react";

export default function Updates(){
  return (
    <div style={{ maxWidth: 800, margin: "48px auto", padding: "0 20px" }}>
      <div className="card" style={{padding: "60px 40px", textAlign:"center", marginBottom: "40px"}}>
        <h2 style={{color:"#6a47f2", marginBottom: 20, fontSize: "2rem"}}>Latest Updates</h2>
        <p style={{color:"#666", fontSize: 18, marginBottom: 30, lineHeight: 1.6}}>
          Stay informed about the latest developments in your community and government initiatives.
        </p>

        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "40px"}}>
          <div style={{background: "#f8f9fa", padding: "24px", borderRadius: "12px", borderLeft: "4px solid #6a47f2"}}>
            <h3 style={{color: "#6a47f2", marginBottom: "12px", fontSize: "1.2rem"}}>Government Initiatives</h3>
            <p style={{color: "#555", margin: 0, lineHeight: 1.5}}>
              Track progress on government projects and civic initiatives in your area.
            </p>
          </div>

          <div style={{background: "#f8f9fa", padding: "24px", borderRadius: "12px", borderLeft: "4px solid #10b981"}}>
            <h3 style={{color: "#10b981", marginBottom: "12px", fontSize: "1.2rem"}}>Issue Resolutions</h3>
            <p style={{color: "#555", margin: 0, lineHeight: 1.5}}>
              Get notified when your reported issues are resolved by authorities.
            </p>
          </div>

          <div style={{background: "#f8f9fa", padding: "24px", borderRadius: "12px", borderLeft: "4px solid #f59e0b"}}>
            <h3 style={{color: "#f59e0b", marginBottom: "12px", fontSize: "1.2rem"}}>Community Events</h3>
            <p style={{color: "#555", margin: 0, lineHeight: 1.5}}>
              Stay updated on local events, meetings, and community gatherings.
            </p>
          </div>

          <div style={{background: "#f8f9fa", padding: "24px", borderRadius: "12px", borderLeft: "4px solid #dc2626"}}>
            <h3 style={{color: "#dc2626", marginBottom: "12px", fontSize: "1.2rem"}}>Website Updates</h3>
            <p style={{color: "#555", margin: 0, lineHeight: 1.5}}>
              Stay informed about new features, improvements, and platform enhancements.
            </p>
          </div>
        </div>

        <div style={{marginTop: "40px", padding: "20px", background: "#e8f4fd", borderRadius: "8px", border: "1px solid #b8e6f0"}}>
          <p style={{margin: 0, color: "#2c5aa0", fontWeight: "500"}}>📢 Updates will appear here as they become available from government sources and community reports.</p>
        </div>
      </div>
    </div>
  );
}
