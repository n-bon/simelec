// Nathan Bonin, tous droits réservés
//Gestion de l'affichage

function recommencer() {
    const replayButton = document.querySelector(".app--replay");
    replayButton.addEventListener("click", function(event) {
        const formulaire = document.querySelector(".app--formContainer");
        const resultats = document.querySelector(".app--resultats");
        const cta = document.querySelector(".app--cta");
        const replay = document.querySelector(".app--replay");  
        
        formulaire.classList.remove("app__hidden");
        resultats.classList.add("app__hidden");
        cta.classList.add("app__hidden");
        replay.classList.add("app__hidden");
    });
};

//Gestion du formulaire
document.getElementById("formulaire").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const conso = parseFloat(document.getElementById("conso").value);
  const prix = parseFloat(document.getElementById("prix").value);
  const pourcentage = parseFloat(document.getElementById("pourcentage").value);
  const formulaire = document.querySelector(".app--formContainer");
  const resultats = document.querySelector(".app--resultats");
  const cta = document.querySelector(".app--cta");
  const replay = document.querySelector(".app--replay");

  resultats.classList.remove("app__hidden")
  if (isNaN(conso) || isNaN(prix) || isNaN(pourcentage)) {
    document.getElementById("resultat").textContent = "Veuillez saisir toutes les valeurs.";
    document.getElementById("phrase").textContent = "";
    return;
  }

  if (pourcentage < 5 || pourcentage > 20) {
    document.getElementById("resultat").textContent = "Le pourcentage doit être compris entre 5 et 20.";
    document.getElementById("phrase").textContent = "";
    return;
  }

  const economie = conso * prix * (pourcentage / 100);

  document.getElementById("resultat").textContent =
    "Vos économies potentielles " + economie.toFixed(0) + " €";

  document.getElementById("phrase").textContent =
    "Sur la base de vos déclarations, vous pourriez économiser " +
    economie.toFixed(0) + " € par an si vous diminuez votre consommation d'électricité de " +
    pourcentage.toFixed(0) + " %.";

  cta.classList.remove("app__hidden");
  replay.classList.remove("app__hidden");
  formulaire.classList.add("app__hidden");

  recommencer();

});

