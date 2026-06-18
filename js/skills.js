// ------------------------------
// 1) Définition des compétences
// ------------------------------
// "query" = ce qu’on envoie à projects.html?skill=...
// Astuce : requêtes “courtes” pour matcher via includes() côté projects.js

console.log("skills.js chargé");

const BUT_COMPETENCIES = [
  {
    title: "Traiter",
    color: "red",
    purpose: "Traiter des données à des fins décisionnelles.",
    context: "Dans le contexte de développement d'un système d'information décisionnel et de préparation des données à des fins d'analyse statistique.",
    essentials: [
      "Respecter les formalismes de notation.",
      "Comprendre les structures algorithmiques et de données.",
      "Prendre en compte le besoin du commanditaire ou du client.",
      "Respecter les bonnes pratiques et la réglementation."
    ],
    levels: [
      "Niveau 1 : Traiter des données structurées.",
      "Niveau 2 : Automatiser le traitement de données multidimensionnelles.",
      "Niveau 3 : Intégrer le traitement de données complexes."
    ],
    progress: 85,
    evolution: {
      firstYear: "En première année, mes productions étaient surtout des exercices encadrés en SQL, Python et R : importer des jeux de données simples, effectuer des nettoyages élémentaires, réaliser des jointures et produire des tableaux de synthèse.",
      now: "Aujourd'hui, notamment avec mon stage au CIRAD, je traite des données réelles issues de plusieurs études. Je produis des scripts R réutilisables, des fichiers de traçabilité, des règles de nommage et une méthode commune pour harmoniser des variables hétérogènes."
    },
    status: "C'est aujourd'hui ma compétence la plus solide. Mon stage au CIRAD m'a obligé à harmoniser plusieurs dizaines de jeux de données sur les caféiers et les cacaoyers, avec des formats, des noms de variables et des niveaux de qualité très différents.",
    limits: "Cette progression ne vient pas seulement de l'utilisation d'outils : elle vient surtout du fait d'avoir dû construire une méthode fiable, documentée et réutilisable avant même de pouvoir analyser les données.",
    evidence: [
      "Stage au CIRAD : harmonisation de bases café et cacao.",
      "Scripts R d'inventaire automatique et de traçabilité des variables.",
      "Définition de règles de nommage et de documentation.",
      "Projets SQL et bases de données réalisés pendant le BUT."
    ]
  },
  {
    title: "Analyser",
    color: "orange",
    purpose: "Analyser statistiquement les données.",
    context: "Dans le contexte de programmation d'un outil d'aide à la décision et d'un projet d'étude statistique.",
    essentials: [
      "Identifier la source et les caractéristiques des données.",
      "Choisir des méthodes adaptées à la décision.",
      "Comprendre les intérêts et limites des indicateurs.",
      "Apprécier les risques de mésinterprétation."
    ],
    levels: [
      "Niveau 1 : Mettre en œuvre une analyse descriptive.",
      "Niveau 2 : Mettre en œuvre une analyse exploratoire.",
      "Niveau 3 : Mettre en œuvre l'analyse exploratoire de données complexes."
    ],
    progress: 75,
    evolution: {
      firstYear: "En première année, les productions étaient principalement des SAE et exercices de statistiques descriptives, probabilités et analyses exploratoires, avec des méthodes vues en cours et des problématiques relativement cadrées.",
      now: "Aujourd'hui, j'analyse des données plus proches du terrain. Sur les attaques de charançons dans les plantations de cacao, j'ai dû interpréter les résultats, comparer des indicateurs, repérer des incohérences et adapter l'analyse aux limites des données."
    },
    status: "J'ai progressé sur cette compétence pendant mon stage au CIRAD, notamment en travaillant sur les attaques de charançons dans des plantations de cacao. L'enjeu n'était pas seulement d'appliquer une régression linéaire, mais de comprendre ce que les résultats permettaient vraiment de dire.",
    limits: "Cette expérience m'a montré qu'une analyse peut être fragile si les données de départ sont incohérentes. Par exemple, certaines valeurs de surface de parcelles devaient être vérifiées, car elles pouvaient biaiser les comparaisons d'infestation.",
    evidence: [
      "Étude des attaques de charançons sur les cacaoyers.",
      "Régressions linéaires et analyses exploratoires sous R.",
      "Analyse de corrélations entre galeries, nouvelles attaques et pieds infestés.",
      "Analyses multivariées réalisées lors du stage."
    ]
  },
  {
    title: "Valoriser",
    color: "yellow",
    purpose: "Valoriser une production dans un contexte professionnel.",
    context: "Dans le contexte de développement d'outils décisionnels et d'une étude statistique.",
    essentials: [
      "S'adapter au niveau d'expertise et aux usages du destinataire.",
      "Communiquer avec des moyens adaptés.",
      "Identifier les enjeux économiques et managériaux.",
      "Prendre en compte les limites et la conformité des résultats."
    ],
    levels: [
      "Niveau 1 : Contextualiser et présenter les données.",
      "Niveau 2 : Restituer et argumenter ses résultats.",
      "Niveau 3 : Intégrer et valoriser sa production dans l'écosystème de l'entreprise."
    ],
    progress: 70,
    evolution: {
      firstYear: "En première année, je valorisais surtout mon travail à travers des comptes rendus et des soutenances de SAE. L'objectif était d'apprendre à présenter clairement une démarche et des résultats.",
      now: "Aujourd'hui, mes productions ont une utilité plus directe : présentations régulières à ma tutrice, documentation destinée à d'autres utilisateurs, justification de choix méthodologiques et adaptation du vocabulaire à des interlocuteurs non spécialistes de la donnée."
    },
    status: "Je progresse sur cette compétence grâce aux soutenances du BUT et aux présentations régulières faites pendant mon stage. J'ai dû expliquer l'avancement de mes scripts, justifier mes choix de nommage et rendre compréhensible une démarche technique pour des personnes dont la spécialité n'était pas forcément la science des données.",
    limits: "Je sais présenter et documenter mon travail, mais je veux encore améliorer la manière dont je synthétise les résultats pour différents publics, surtout quand il faut aller vite sans perdre la précision.",
    evidence: [
      "Présentations régulières à ma tutrice et à l'équipe du CIRAD.",
      "Documentation des scripts pour permettre leur réutilisation.",
      "Soutenances de SAE pendant le BUT.",
      "Rédaction de rapports, comptes rendus et supports de présentation."
    ]
  },
  {
    title: "Modéliser",
    color: "green",
    purpose: "Modéliser les données dans un cadre statistique.",
    context: "Dans le contexte d'une analyse statistique et du développement statistique.",
    essentials: [
      "Choisir une modélisation adaptée à la situation.",
      "Comprendre les limites et conditions de validité du modèle.",
      "Valider ou nuancer une hypothèse statistique.",
      "Choisir les modèles adaptés aux données massives ou aux flux."
    ],
    levels: [
      "Niveau 1 : Mettre en œuvre un modèle statistique.",
      "Niveau 2 : Réaliser l'ensemble de la démarche de modélisation."
    ],
    progress: 65,
    evolution: {
      firstYear: "En première année, les modèles étaient surtout étudiés dans un cadre pédagogique : statistiques descriptives, probabilités et premières régressions appliquées sur des cas guidés.",
      now: "Aujourd'hui, j'ai consolidé les régressions linéaires, les analyses de corrélation et les analyses exploratoires. J'ai aussi commencé à manipuler des méthodes de classification et de machine learning, même si leur réglage et leur interprétation restent à renforcer."
    },
    status: "C'est la compétence que je considère encore la moins aboutie. Je suis à l'aise avec les statistiques descriptives, les régressions linéaires, les corrélations et les premières analyses exploratoires, mais les méthodes de machine learning avancées restent en cours d'acquisition.",
    limits: "Ce qui me manque surtout, ce sont davantage de cas réels pour comparer plusieurs modèles, régler leurs paramètres et interpréter leurs performances avec recul. Je veux donc continuer à renforcer cette compétence dans mes prochaines expériences.",
    evidence: [
      "Régressions linéaires et analyses de corrélation.",
      "Premières approches des arbres de décision, forêts aléatoires et classifications.",
      "Projets statistiques réalisés pendant le BUT.",
      "Projets personnels en Python."
    ]
  }
];

const PRODUCTION_EVOLUTION = [
  { year: "BUT 1", production: "SAE statistiques descriptives", skills: "Analyser, Modéliser" },
  { year: "BUT 1", production: "SAE bases de données SQL", skills: "Traiter" },
  { year: "BUT 1", production: "Premiers programmes Python et R", skills: "Traiter" },
  { year: "BUT 2", production: "Projets d'analyse statistique et de régression", skills: "Analyser, Modéliser" },
  { year: "BUT 2", production: "Soutenances et rapports de SAE", skills: "Valoriser" },
  { year: "BUT 3", production: "Stage au CIRAD", skills: "Traiter, Analyser, Valoriser" },
  { year: "BUT 3", production: "Scripts R automatisés", skills: "Traiter" },
  { year: "BUT 3", production: "Documentation et protocoles de traçabilité", skills: "Valoriser" },
  { year: "BUT 3", production: "Analyse des données de charançons sur cacaoyers", skills: "Analyser, Modéliser" }
];

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

function renderButCompetencies() {
  const root = document.getElementById("butCompetencies");
  if (!root) return;

  root.innerHTML = BUT_COMPETENCIES.map(item => `
    <article class="but-card but-card--${item.color}">
      <div class="but-card-top">
        <h3>${item.title}</h3>
        <span>${item.progress}%</span>
      </div>
      <p class="but-purpose">${item.purpose}</p>
      <p class="but-context">${item.context}</p>
      <div class="but-progress" aria-label="Progression ${item.progress}%">
        <span style="width:${item.progress}%"></span>
      </div>
      <div class="but-levels">
        ${item.levels.map(level => `<p>${level}</p>`).join("")}
      </div>
      <div class="but-evolution">
        <div>
          <h4>Au début du BUT</h4>
          <p>${item.evolution.firstYear}</p>
        </div>
        <div>
          <h4>Aujourd'hui</h4>
          <p>${item.evolution.now}</p>
        </div>
      </div>
      <ul class="but-essentials">
        ${item.essentials.map(essential => `<li>${essential}</li>`).join("")}
      </ul>
      <p class="but-status">${item.status}</p>
      <p class="but-limits">${item.limits}</p>
      <div class="but-evidence">
        <h4>Preuves concrètes</h4>
        <ul>
          ${item.evidence.map(proof => `<li>${proof}</li>`).join("")}
        </ul>
      </div>
    </article>
  `).join("");
}

function renderProductionEvolution() {
  const root = document.getElementById("productionEvolution");
  if (!root) return;

  root.innerHTML = PRODUCTION_EVOLUTION.map(item => `
    <tr>
      <td>${item.year}</td>
      <td>${item.production}</td>
      <td>${item.skills}</td>
    </tr>
  `).join("");
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

  document.querySelectorAll(".but-card").forEach(card => {
    const text = norm(card.innerText);
    card.style.display = !t || text.includes(t) ? "" : "none";
  });

  document.querySelectorAll(".production-evolution tbody tr").forEach(row => {
    const text = norm(row.innerText);
    row.style.display = !t || text.includes(t) ? "" : "none";
  });
}

// ------------------------------
// 3) Boot
// ------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  const projects = await loadJSON("data/projects.json");
  renderButCompetencies();
  renderProductionEvolution();

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
