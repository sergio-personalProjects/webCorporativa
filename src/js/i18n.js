let translations = {};

async function loadLang(lang) {
  const res = await fetch(`lang/${lang}.json`);
  translations = await res.json();

  applyTranslations();
  localStorage.setItem("lang", lang);
}

function applyTranslations() {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[key] || key;
  });
}

function setLang(lang) {
  loadLang(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "es";
  loadLang(savedLang);
});