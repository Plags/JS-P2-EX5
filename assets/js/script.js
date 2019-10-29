document.getElementById("image1").addEventListener("mouseover", function(event) {change(this.id)});
document.getElementById("image2").addEventListener("mouseover", function(event) {change(this.id)});
document.getElementById("image3").addEventListener("mouseover", function(event) {change(this.id)});
document.getElementById("image4").addEventListener("mouseover", function(event) {change(this.id)});
document.getElementById("image5").addEventListener("mouseover", function(event) {change(this.id)});
  function change(id) {
    document.getElementById(id).src=`assets/img/${id}_2.jpg`;
    /*Récupère l'id de l'image survolé. On la remplace par l'image de remplacement :
    on ne récupère que le numéro de l'image d'orgine que l'on réintroduit dans le chemin de l'image de remplacement*/

}
