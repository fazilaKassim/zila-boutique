import { start } from "repl";
import { compileFunction } from "vm";

document.addEventListener('DOMContentLoaded', function () {
    let stars = document.querySelectorAll('.star');
    stars.forEach(function (star) {
        star.addEventListener('click', setRating);
        
    });

    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});

function setRating(ev) {
    let span = ev.currentTarget;
    let stars = document.querySelectorAll('.star');
    let match = false;
    let num = 0;
    stars.forEach(function (star, index) {
        if (match) {
            star.classList.remove('rated');
        } else {
            star.classList.add('rated');
        }
        if (star === span) {
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.stars').setAttribute('data-rating', num);
}

// ---------------------------ajouter commentaire------------------------

const btn = document.querySelector('.avis')
const clientRating = document.getElementById('stars');
const clientComment = document.getElementById('commentaire');

// clientComment.innerHTML = ""


function afficherCom() {
    document.querySelector('.com').innerHTML += clientComment.value ;

};

// ecoute evenement

btn.addEventListener('click', afficherCom);


















// ----------------------effacer champs-------------------

function effaceChamp(){
    document.getElementById('commentaire').value = "";
}

btn.addEventListener('click', effaceChamp);

// --------------------------------------------


// function afficherCom() {
//     clientRating.innerHTML += "<li>clientComment.value</li>"


// };

// btn.addEventListener('click', afficherCom);

