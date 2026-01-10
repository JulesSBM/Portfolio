(async function(){
  const wrap = document.getElementById("expList");
  if(!wrap) return;

  const exps = await loadJSON("data/experiences.json");

  // tri du plus récent au plus ancien : on garde l'ordre du JSON (mets le plus récent en 1er)
  wrap.innerHTML = exps.map(e => {
    const hard = (e.hardSkills || []).slice(0,4).map(s => `<span class="tag">${s}</span>`).join("");
    const soft = (e.softSkills || []).slice(0,4).map(s => `<span class="tag" style="background:#ecfbf2;color:#166534;">${s}</span>`).join("");
    return `
      <a class="item-card" style="border-left-color: var(--green);" href="experience-detail.html?id=${encodeURIComponent(e.id)}">
        <h3 class="item-title">${e.title}</h3>
        <p class="item-desc">${e.summary}</p>
        <div class="tags">${hard}${soft}</div>
      </a>
    `;
  }).join("");
})();