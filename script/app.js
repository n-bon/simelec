// Nathan Bonin, tous droits réservés

document.getElementById("formulaire").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const conso = parseFloat(document.getElementById("conso").value);
  const prix = parseFloat(document.getElementById("prix").value);
  const pourcentage = parseFloat(document.getElementById("pourcentage").value);

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
    "Économies attendues : " + economie.toFixed(2) + " €";

  document.getElementById("phrase").textContent =
    "Sur la base de vos déclarations, vous pourriez économiser " +
    economie.toFixed(2) + " € par an si vous diminuez votre consommation d'électricité de " +
    pourcentage.toFixed(1) + " %.";
});

