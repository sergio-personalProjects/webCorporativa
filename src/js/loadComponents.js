async function loadComponent(targetId, filePath) {
  const target = document.getElementById(targetId);

  if (!target) return;

  const res = await fetch(filePath);
  const html = await res.text();
  target.innerHTML = html;

  if (typeof applyTranslations === "function") {
    applyTranslations();
  }
}

loadComponent("header", "src/components/header.html");
loadComponent("navBar", "src/components/navBar.html");
loadComponent("article1", "src/components/article1.html");
//loadComponent("showSpecialists", "src/components/showSpecialist.html");
loadComponent("article3-cards", "src/components/article3.html");
loadComponent("article4", "src/components/article4.html");
loadComponent("article5", "src/components/article5.html");
loadComponent("article6", "src/components/article6.html");
loadComponent("feedback", "src/components/feedback.html");
loadComponent("lastNews", "src/components/lastNews.html");
loadComponent("footer", "src/components/footer.html");

/*cargas para pagina quienes somos*/
loadComponent("whoWeAreComponent", "src/components/whoWeAreComponent.html");
loadComponent("articleHistory", "src/components/articleHistory.html");
loadComponent("teamMembers", "src/components/teamMembers.html");


/*Cargas para página research*/
loadComponent("article1_research", "src/components/article1_research.html");

/*Cargas para página notices*/
loadComponent("noticesComponent", "src/components/noticesComponent.html");

/*Cargas para página contact*/
loadComponent("contactComponent", "src/components/contactComponent.html");