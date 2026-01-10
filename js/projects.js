function getQueryParam(name){
  const url = new URL(location.href);
  return url.searchParams.get(name);
}

function normalizeSkillSlug(s){
  return (s || "").toLowerCase().trim();
}

(async function(){
  const grid = document.getElementById("projectsGrid");
  const subtitle = document.getElementById("projectsSubtitle");
  if(!grid) return;

  const all = await loadJSON("data/projects.json");

  const skill = getQueryParam("skill"); // ex: "python"
  let filtered = all;

  if(skill){
    const s = normalizeSkillSlug(skill);
    filtered = all.filter(p => (p.skills || []).some(k => normalizeSkillSlug(k).includes(s)));
    subtitle.textContent = `Projets filtrés par compétence : ${decodeURIComponent(skill)} (${filtered.length})`;
  }

  grid.innerHTML = filtered.map(p => {
    const tags = (p.skills || []).slice(0,4).map(t => `<span class="tag">${t}</span>`).join("");
    return `
      <a class="item-card" href="project.html?id=${encodeURIComponent(p.id)}">
        <h3 class="item-title">${p.title}</h3>
        <p class="item-desc">${p.summary}</p>
        <div class="tags">${tags}</div>
      </a>
    `;
  }).join("");

  if(filtered.length === 0){
    grid.innerHTML = `
      <div class="card card-pad" style="grid-column:1/-1; text-align:center;">
        <p style="margin:0; color: var(--muted); font-weight:800;">Aucun projet trouvé pour ce filtre.</p>
      </div>
    `;
  }
})();