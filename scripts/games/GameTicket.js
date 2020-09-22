const contentTargetGame = document.querySelector(".game");
const eventHub = document.querySelector(".state-fair");

    
export const gameTicketHolder = () => {
eventHub.addEventListener
    ("gameTicketPurchased", clickEvent => {
      return contentTargetGame.innerHTML += `<div class="games">games</div>`
    })
};