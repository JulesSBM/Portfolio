(function(){
  const nav = document.getElementById("navbar");
  if(!nav) return;

  const path = location.pathname.split("/").pop() || "index.html";

  const isActive = (href) => {
    if (href === "index.html") return path === "" || path === "index.html";
    return path === href;
  };

  nav.innerHTML = `
    <div class="navbar">
      <div class="navbar-inner">
        <a class="brand" href="index.html">Jules SALANIE-BERTRAND</a>
        <div class="navlinks">
          <a href="index.html" class="${isActive("index.html") ? "active" : ""}">Accueil</a>
          <a href="skills.html" class="${isActive("skills.html") ? "active" : ""}">Compétences</a>
          <a href="projects.html" class="${isActive("projects.html") ? "active" : ""}">Projets</a>
          <a href="experience.html" class="${isActive("experience.html") ? "active" : ""}">Expérience</a>
        </div>
      </div>
    </div>
  `;
})();