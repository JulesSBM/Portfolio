// ------------------------------
// 1) Définition des compétences
// ------------------------------
// Source initiale : Liste de compétence.txt (réorganisée en 3 groupes) :contentReference[oaicite:4]{index=4}
//
// "query" = ce qu’on envoie à projects.html?skill=...
// Astuce : on met des requêtes “courtes” pour matcher via includes() côté projects.js
const SKILLS = {
  traiter: [
    { label: "Traitement des données", query: "traitement des données" },
    { label: "SQL", query: "sql" },
    { label: "SQL Server Integration Services (SSIS)", query: "ssis" },
    { label: "Extract, Transform, Load (ETL)", query: "etl" },
    { label: "Microsoft Excel", query: "excel" },
    { label: "Tableau croisé dynamique Excel", query: "tableau croisé dynamique" },
    { label: "Google Sheets", query: "google sheets" },
    { label: "Microsoft Office", query: "microsoft office" },
  ],

  analyser: [
    { label: "Analyse des données", query: "analyse des données" },
    { label: "Exploration des données", query: "exploration des données" },
    { label: "Statistiques", query: "statistiques" },
    { label: "Analyse de données statistiques", query: "analyse de données statistiques" },
    { label: "Mathématiques", query: "mathématiques" },
    { label: "Sciences économiques", query: "sciences économiques" },
    { label: "Algorithmes", query: "algorithmes" },
    { label: "Compétences analytiques", query: "compétences analytiques" },
    { label: "Résolution de problèmes", query: "résolution de problèmes" },
    { label: "Esprit critique", query: "esprit critique" },
  ],

  valoriser: [
    { label: "Tableau de bord", query: "tableau de bord" },
    { label: "Indicateurs clés de performance", query: "indicateurs clés de performance" },
    { label: "Visualisation de données", query: "visualisation de données" },
    { label: "Microsoft Power BI", query: "power bi" },
    { label: "Microsoft PowerPoint", query: "powerpoint" },
    { label: "Présentations", query: "présentations" },
    { label: "Modélisation des données", query: "modélisation des données" },
    { label: "Conception de sondages", query: "conception de sondages" },
    { label: "Tableau (outil)", query: "tableau" },
  ]
};

// ------------------------------
// 2) Utilitaires
// ------------------------------
function norm(s) {
  return (s || "").toLowerCase().trim();
}

function makePillLink(el, buildUrl) {
  el.setAttribute("tabindex", "0");
  el.setAttribute("role", "link");

  const go = () => { window.location.href = buildUrl(el); };

  el.addEventListener("click", go);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go();
    }
  });
}

function countProjectsForSkill(projects, query) {
  const q = norm(query);
  if (!q) return 0;

  return projects.filter(p => {
    const skills = (p.skills || []).map(norm);
    return skills.some(s => s.includes(q));
  }).length;
}

function renderSkills(listEl, skills, projects) {
  listEl.innerHTML = skills.map(s => {
    const n = countProjectsForSkill(projects, s.query);
    return `
      <li class="pill tech pill-skill" data-skill="${s.query}">
        <span class="pill-label">${s.label}</span>
        <span class="pill-count" aria-label="Nombre de projets">${n}</span>
      </li>
    `;
  }).join("");

  listEl.querySelectorAll(".pill-skill").forEach(el => {
    makePillLink(el, (x) => {
      const q = x.dataset.skill || "";
      return `projects.html?skill=${encodeURIComponent(q)}`;
    });
  });
}

function applySearchFilter(rootIds, term) {
  const t = norm(term);
  rootIds.forEach(id => {
    const ul = document.getElementById(id);
    if (!ul) return;

    const items = Array.from(ul.querySelectorAll("li"));
    let visible = 0;

    items.forEach(li => {
      const text = norm(li.innerText);
      const ok = !t || text.includes(t);
      li.style.display = ok ? "" : "none";
      if (ok) visible += 1;
    });

    // update count badge if exists
    const countId =
      id === "skillsTraiter" ? "countTraiter" :
      id === "skillsAnalyser" ? "countAnalyser" :
      "countValoriser";

    const countEl = document.getElementById(countId);
    if (countEl) countEl.textContent = `${visible} affichées`;
  });
}

// ------------------------------
// 3) Boot
// ------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  const projects = await loadJSON("data/projects.json");

  const traiterEl = document.getElementById("skillsTraiter");
  const analyserEl = document.getElementById("skillsAnalyser");
  const valoriserEl = document.getElementById("skillsValoriser");

  renderSkills(traiterEl, SKILLS.traiter, projects);
  renderSkills(analyserEl, SKILLS.analyser, projects);
  renderSkills(valoriserEl, SKILLS.valoriser, projects);

  // Stats globales
  const total =
    SKILLS.traiter.length + SKILLS.analyser.length + SKILLS.valoriser.length;
  const stats = document.getElementById("skillsStats");
  if (stats) {
    stats.textContent = `${total} compétences • Cliquez pour filtrer les projets`;
  }

  // Compteurs init
  applySearchFilter(["skillsTraiter", "skillsAnalyser", "skillsValoriser"], "");

  // Recherche
  const search = document.getElementById("skillsSearch");
  if (search) {
    search.addEventListener("input", () => {
      applySearchFilter(["skillsTraiter", "skillsAnalyser", "skillsValoriser"], search.value);
    });
  }
});