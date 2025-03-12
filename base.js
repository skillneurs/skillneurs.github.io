//btn menu
const btnLeave = document.getElementById("closeButton");
const boutons = document.querySelectorAll('.BoutonMinecraft'); 

//son btn minecraft
const son = new Audio('song/btn.mp3');

//son btn play
boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        son.play();  
    });
});



const btnswitchbg = document.querySelector('.btnnether');
const btnswitchbg2 = document.querySelector('.btnend');
const sonnether = new Audio('song/nethersongtp.mp3');

btnswitchbg.addEventListener('click', () => { // Correction ici
    sonnether.play();
});



//btn qui ferme la page web
btnLeave.addEventListener("click", function() {
 window.close();
});

//ne afficher l'inventaire au lencement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("InventoryList").style.display = "none";
   
});

// Affiche/retire l'inventaire au clic du btn
const btninv = document.getElementById("ItemList");
const InventoryList = document.getElementById("InventoryList");

btninv.addEventListener("click", () => {
    InventoryList.style.display = (InventoryList.style.display === "block") ? "none" : "block";
});

//changer de bg 


const body = document.body;

btnswitchbg.addEventListener("click", () => {
    const currentBg = getComputedStyle(body).backgroundImage;

    
    body.style.backgroundImage = "url('background/netherteleportation.jpg')";

    setTimeout(() => {
        if (currentBg.includes("OverworldBG.jpg")) {
            body.style.backgroundImage = "url('background/netherBG.jpg')";
        } else {
            body.style.backgroundImage = "url('background/OverworldBG.jpg')";
        } 

    }, 1000); 

});

btnswitchbg2.addEventListener("click", () => {
    const currentBg2 = getComputedStyle(body).backgroundImage;

    
    body.style.backgroundImage = "url('background/ENDtransitionscreen.png')";

    setTimeout(() => {
        if (currentBg2.includes("OverworldBG.jpg")) {
            body.style.backgroundImage = "url('background/endBG.jpg')";
        } else {
            body.style.backgroundImage = "url('background/OverworldBG.jpg')";
        }
    }, 1000); 
   
});




