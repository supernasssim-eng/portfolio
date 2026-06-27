import { useState } from "react";

const projets = [
  {
    id: 1,
    titre: "💱 Convertisseur de Devises",
    description: "Application de conversion de devises en temps réel avec les taux du marché mondial.",
    technologies: ["React", "API ExchangeRate", "JavaScript"],
    lien: "https://app-devises.vercel.app",
    couleur: "#6c63ff"
  },
  {
    id: 2,
    titre: "🎬 Recherche de Films",
    description: "Application de recherche de films avec fiches détaillées, notes et système de favoris.",
    technologies: ["React", "API OMDB", "JavaScript"],
    lien: "https://app-films.vercel.app",
    couleur: "#ff6b6b"
  },
  {
    id: 3,
    titre: "😂 App de Blagues",
    description: "Application de blagues aléatoires avec système de favoris et compteur.",
    technologies: ["React", "JavaScript", "useState"],
    lien: "https://app-blagues.vercel.app",
    couleur: "#ffd93d"
  }
];

const competences = [
  { nom: "HTML/CSS", niveau: 80 },
  { nom: "JavaScript", niveau: 65 },
  { nom: "React", niveau: 60 },
  { nom: "Git & GitHub", niveau: 55 },
  { nom: "APIs REST", niveau: 60 },
];

function App() {
  const [section, setSection] = useState("accueil");

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", background: "#0f0f1a", minHeight: "100vh", color: "white" }}>
      <nav style={{ position: "fixed", top: 0, width: "100%", background: "rgba(15,15,26,0.95)", backdropFilter: "blur(10px)", padding: "15px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 100, boxSizing: "border-box" }}>
        <span style={{ fontSize: "20px", fontWeight: "bold", color: "#6c63ff" }}>Nassim.dev</span>
        <div style={{ display: "flex", gap: "25px" }}>
          {["accueil", "projets", "competences", "contact"].map(s => (
            <button key={s} onClick={() => setSection(s)} style={{ background: "none", border: "none", color: section === s ? "#6c63ff" : "rgba(255,255,255,0.6)", fontSize: "15px", cursor: "pointer", fontWeight: section === s ? "bold" : "normal" }}>
              {s === "competences" ? "Compétences" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ paddingTop: "80px" }}>

        {section === "accueil" && (
          <div style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "40px" }}>
            <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "linear-gradient(135deg, #6c63ff, #ff6b6b)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "50px", marginBottom: "30px" }}>
              👨‍💻
            </div>
            <h1 style={{ fontSize: "48px", marginBottom: "15px", background: "linear-gradient(135deg, #6c63ff, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Nassim
            </h1>
            <p style={{ fontSize: "22px", color: "rgba(255,255,255,0.7)", marginBottom: "15px" }}>
              Développeur Web Full Stack
            </p>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", maxWidth: "500px", lineHeight: "1.8", marginBottom: "35px" }}>
              Je crée des applications web modernes et performantes. Passionné par React et les nouvelles technologies.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <button onClick={() => setSection("projets")} style={{ padding: "15px 35px", background: "#6c63ff", color: "white", border: "none", borderRadius: "12px", fontSize: "16px", cursor: "pointer" }}>
                Voir mes projets
              </button>
              <button onClick={() => setSection("contact")} style={{ padding: "15px 35px", background: "transparent", color: "white", border: "2px solid rgba(255,255,255,0.3)", borderRadius: "12px", fontSize: "16px", cursor: "pointer" }}>
                Me contacter
              </button>
            </div>
          </div>
        )}

        {section === "projets" && (
          <div style={{ padding: "50px 40px" }}>
            <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "10px" }}>Mes Projets</h2>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: "50px" }}>Applications développées avec React et des APIs réelles</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "25px", maxWidth: "1000px", margin: "0 auto" }}>
              {projets.map(p => (
                <div key={p.id} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "20px", padding: "30px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>{p.titre}</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>{p.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "25px" }}>
                    {p.technologies.map(t => (
                      <span key={t} style={{ padding: "4px 12px", background: "rgba(108,99,255,0.2)", borderRadius: "20px", fontSize: "12px", color: "#6c63ff" }}>{t}</span>
                    ))}
                  </div>
                  <a href={p.lien} target="_blank" rel="noreferrer" style={{ display: "block", textAlign: "center", padding: "12px", background: p.couleur, color: "white", borderRadius: "10px", textDecoration: "none", fontSize: "14px", fontWeight: "bold" }}>
                    🔗 Voir le projet
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "competences" && (
          <div style={{ padding: "50px 40px", maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "10px" }}>Compétences</h2>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: "50px" }}>Technologies maîtrisées</p>
            {competences.map(c => (
              <div key={c.nom} style={{ marginBottom: "30px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "16px" }}>{c.nom}</span>
                  <span style={{ color: "#6c63ff", fontWeight: "bold" }}>{c.niveau}%</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "10px", height: "10px" }}>
                  <div style={{ width: `${c.niveau}%`, background: "linear-gradient(135deg, #6c63ff, #ff6b6b)", borderRadius: "10px", height: "10px" }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {section === "contact" && (
          <div style={{ padding: "50px 40px", maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "10px" }}>Contact</h2>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: "50px" }}>Tu as un projet ? Parlons-en !</p>
            <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "20px", padding: "40px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <form action="https://formspree.io/f/maqgjyzr" method="POST">
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.6)", marginBottom: "8px", fontSize: "14px" }}>Nom</label>
                  <input type="text" name="nom" placeholder="Ton nom" style={{ width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", color: "white", fontSize: "15px", outline: "none", boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.6)", marginBottom: "8px", fontSize: "14px" }}>Email</label>
                  <input type="email" name="email" placeholder="ton@email.com" style={{ width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", color: "white", fontSize: "15px", outline: "none", boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: "25px" }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.6)", marginBottom: "8px", fontSize: "14px" }}>Message</label>
                  <textarea name="message" placeholder="Décris ton projet..." rows={5} style={{ width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", color: "white", fontSize: "15px", outline: "none", resize: "none", boxSizing: "border-box" }} />
                </div>
                <button type="submit" style={{ width: "100%", padding: "15px", background: "#6c63ff", color: "white", border: "none", borderRadius: "10px", fontSize: "16px", cursor: "pointer" }}>
                  📩 Envoyer le message
                </button>
              </form>
            </div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "20px" }}>
              <a href="mailto:supernasssin@gmail.com" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "14px" }}>📧 supernasssin@gmail.com</a>
              <a href="https://github.com/supernasssim-eng" target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "14px" }}>🐙 GitHub</a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
