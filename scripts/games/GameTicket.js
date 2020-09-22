const contentTargetGame = document.querySelector(".game");
const eventHub = document.querySelector(".state-fair");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticketPurchased: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(gameEvent);
    }
}) 
    
export const gameTicketHolder = () => {
eventHub.addEventListener
    ("gameTicketPurchased", clickEvent => {
      return contentTargetGame.innerHTML += `<div class="games">games</div>`
    })
};