// Hard skills -> filtre projets
document.querySelectorAll(".pill.tech").forEach(el => {
  el.setAttribute("tabindex","0");
  el.setAttribute("role","link");

  const go = () => {
    const skill = el.dataset.skill || "";
    location.href = `projects.html?skill=${encodeURIComponent(skill)}`;
  };

  el.addEventListener("click", go);
  el.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
  });
});

// Copier email
const copyBtn = document.getElementById("copyEmailBtn");
const emailTextEl = document.getElementById("emailText");
const feedbackEl = document.getElementById("copyFeedback");

if (copyBtn && emailTextEl) {
  copyBtn.addEventListener("click", async () => {
    const email = emailTextEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const temp = document.createElement("textarea");
      temp.value = email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    if (feedbackEl) {
      feedbackEl.textContent = "Copié";
      setTimeout(() => (feedbackEl.textContent = ""), 1200);
    }
  });
}

// Aperçu photo (lightbox)
const profilePhoto = document.getElementById("profilePhoto");
const photoOverlay = document.getElementById("photoOverlay");

if (profilePhoto && photoOverlay) {
  profilePhoto.addEventListener("click", () => {
    photoOverlay.style.display = "flex";
    photoOverlay.setAttribute("aria-hidden", "false");
  });

  photoOverlay.addEventListener("click", () => {
    photoOverlay.style.display = "none";
    photoOverlay.setAttribute("aria-hidden", "true");
  });

  // Fermer avec Échap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      photoOverlay.style.display = "none";
      photoOverlay.setAttribute("aria-hidden", "true");
    }
  });
}