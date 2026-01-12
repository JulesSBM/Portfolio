// ------------------------------
// 1) Définition des compétences
// ------------------------------
// "query" = ce qu’on envoie à projects.html?skill=...
// Astuce : requêtes “courtes” pour matcher via includes() côté projects.js

console.log("skills.js chargé");


const SKILLS = {
  traiter: [
    { label: "Traitement des données", query: "traitement" },
    { label: "Nettoyage & préparation des données", query: "nettoyage" },

    { label: "SQL", query: "sql" },
    { label: "PostgreSQL", query: "postgresql" },
    { label: "SQL Server / SSIS", query: "SSIS" },

    { label: "ETL", query: "etl" },
    { label: "Datawarehouse", query: "datawarehouse" },
    { label: "Modélisation dimensionnelle", query: "modélisation dimensionnelle" },
    { label: "Automatisation", query: "automatisation" },

    { label: "Recettage", query: "recettage" },

    { label: "MongoDB (NoSQL)", query: "mongodb" },

    { label: "Excel (dont TCD)", query: "excel" },
  ],

  analyser: [
    { label: "Analyse des données", query: "analyse des données" },
    { label: "Exploration des données (EDA)", query: "exploration" },

    { label: "Statistiques", query: "statistiques" },
    { label: "Statistiques inférentielles", query: "inférentielles" },
    { label: "ANOVA", query: "anova" },

    { label: "Modélisation statistique", query: "modélisation" },
    { label: "Régression", query: "régression" },
    { label: "Classification", query: "classification" },
    { label: "Machine Learning", query: "machine learning" },
    { label: "Validation croisée", query: "validation croisée" },

    { label: "Analyse multivariée", query: "analyse multivariée" },
    { label: "ACP", query: "acp" },
    { label: "AFC", query: "afc" },
    { label: "Clustering", query: "clustering" },

    { label: "Séries temporelles", query: "séries temporelles" },
    { label: "ARIMA", query: "arima" },

    { label: "Python", query: "python" },
    { label: "R", query: " r" }
  ],

  valoriser: [
    { label: "Tableaux de bord", query: "tableau de bord" },
    { label: "KPI (indicateurs)", query: "kpi" },
    { label: "Reporting", query: "reporting" },

    { label: "Datavisualisation", query: "visualisation" },
    { label: "Cartographie", query: "cartographie" },
    { label: "Design d'information", query: "design" },

    { label: "Tableau Desktop", query: "tableau desktop" },
    { label: "R Shiny", query: "shiny" },

    { label: "SAP BusinessObjects", query: "webi" },

    { label: "Sphinx", query: "sphinx" },

    { label: "Synthèse & data storytelling", query: "storytelling" },
    { label: "Tableau Desktop", query: "tableaudt" },
    { label: "Power BI", query: "powerbi" },

    { label: "RGPD & conformité", query: "rgpd" },
    { label: "Gouvernance des données", query: "gouvernance" }
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