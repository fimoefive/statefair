const contentTargetFull = document.querySelector(".full-package");
const contentTargetGame = document.querySelector(".game");
const contentTargetFood = document.querySelector(".food");
const contentTargetRide = document.querySelector(".rides");
const contentTargetSideShow = document.querySelector(".side-show");
const eventHub = document.querySelector(".state-fair");




export const fullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicket", clickEvent => {
        contentTargetGame.innerHTML += `<div class="game"></div>`
        contentTargetFood.innerHTML += `<div class="food"></div>`
        contentTargetRide.innerHTML += `<div class="rides"></div>`
        contentTargetSideShow.innerHTML += `<div class="side-show"></div>`
        contentTargetFull.innerHTML += `<div class="full-package></div>`
    })
};