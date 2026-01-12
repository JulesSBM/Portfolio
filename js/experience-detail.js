function getQueryParam(name){
  const url = new URL(location.href);
  return url.searchParams.get(name);
}

(async function(){
  const id = getQueryParam("id");
  const exps = await loadJSON("data/experiences.json");
  const e = exps.find(x => x.id === id);

  if(!e){
    document.querySelector("main").innerHTML = `
      <div class="container">
        <a class="contact-link" href="experience.html">← Retour</a>
        <div class="card card-pad" style="margin-top:14px;">
          <p style="margin:0; font-weight:900;">Expérience introuvable.</p>
        </div>
      </div>
    `;
    return;
  }

  document.getElementById("eTitle").textContent = e.title;

  document.getElementById("eMeta").innerHTML = `
    <div><b>Programme :</b> ${e.program}</div>
    <div><b>Année(s) :</b> ${e.year}</div>
    <div><b>Lieu :</b> ${e.location}</div>
  `;

  document.getElementById("eMainSkills").innerHTML =
    (e.mainSkills || []).map(s => `<span class="tag">${s}</span>`).join("");

  const descEl = document.getElementById("eDesc");
descEl.innerHTML = "";

(e.description || "").split("\n\n").forEach(p => {
  const para = document.createElement("p");
  para.textContent = p;
  descEl.appendChild(para);
});
})();