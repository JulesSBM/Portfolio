function getQueryParam(name){
  const url = new URL(location.href);
  return url.searchParams.get(name);
}

(async function(){
  const id = getQueryParam("id");
  const data = await loadJSON("data/projects.json");
  const p = data.find(x => x.id === id);

  if(!p){
    document.querySelector("main").innerHTML = `
      <div class="container">
        <a class="contact-link" href="projects.html">← Retour</a>
        <div class="card card-pad" style="margin-top:14px;">
          <p style="margin:0; font-weight:900;">Projet introuvable.</p>
        </div>
      </div>
    `;
    return;
  }

  document.getElementById("pTitle").textContent = p.title;
  document.getElementById("pSemester").textContent = `Semestre / période : ${p.semester}`;
  document.getElementById("pDesc").textContent = p.description || "";
  document.getElementById("pDetails").textContent = p.details || "";

  document.getElementById("pSkills").innerHTML =
    (p.skills || []).map(s => `<span class="tag">${s}</span>`).join("");
})();