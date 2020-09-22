const contentTarget = document.querySelector(".full-package");
const contentTarget = document.querySelector(".game");
const contentTarget = document.querySelector(".food");
const contentTarget = document.querySelector(".rides");
const contentTarget = document.querySelector(".side-show");
const eventHub = document.querySelector(".state-fair");




export const fullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicket", clickEvent => {
        return contentTarget.innerHTML += `
        <div class="game"></div>
        <div class="food"></div>
        <div class="rides"></div>
        <div class="side-show"></div>
        <div class="full-package></div>
        `
    })
};