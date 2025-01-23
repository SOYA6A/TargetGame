//select the element with the class 'container' and stocks it in the varible 'container'
let container = document.querySelector('.container');
//select the button with the class 'start_btn' and stockes it in the variable 'btn'
let btn = document.querySelector('.start_btn');
//select the element with the class 'score' to stock and display it in 'scoreContainer'
let scoreContainer = document.querySelector('.score');
//select the element with the class 'time' to stock and display it in 'timeContainer'
let timeContainer = document.querySelector('.time');
//définit une fonction qui sera exécutée lorsque le bouton est cliqué
btn.onclick = function(){
    //initialise la variable 'score' à 0 pour commencer le score du joueur 
    let score = 0;
    //initialise la variable 'time' a 10s pour la durée du jeu 
    let time = 10;
    //vide le contenu de 'containe'pour préparer le nouveau jeu
    container.innerHTML = "";
    //crée un intervalle qui exécute la fonction 'showTarget' toutes les 1000 millisecondes (1seconde)
    let interval = setInterval(function showTarget(){
// crée un nouvel élément 'img' pour représenter la cible
let target = document.createElement('img');
//définit l'id de l'image de la cible à 'target'
target.id="target";
//définit la source de l'image de la cible à 'target'
target.src="lapoule1.png";
//ajoute l'image de la cible au conteneur
container.appendChild(target);
//positionne la cible à un endroit aléatoire dans le conteneur
target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';


//définit un délai après lequel la cible sera supprimée
setTimeout(function(){
    target.remove();// supprime la cible après 2s
}, 2000)
//définit ce qui se passe lorsqu'on clique sur la cible
target.onclick = function(){
    score += 1 ;// augmente le score a 1 lorsque la cible est cliquée
    target.style.display = 'none';//cache la cible après qu'elle a été cliquée

}
//diminue le temps restant de 1 seconde 
time-= 1;
//met a jour l'affichage du score dans 'scoreContainer'
scoreContainer.innerHTML = `score : ${score}`
//met a jour l'affichage du temps restant dans 'timeContainer'
timeContainer.innerHTML = `time : ${time}`

//vérifie que le temp est écoulé
if(time == 0){
    clearInterval(interval);//arrête l'intervalle de la fonction 'showTarget'
    container.innerHTML = "END OF THE GAME"//affiche un message de fin de jeu 
}

}, 1000);//déclenche la fonction toutes les 1s
}