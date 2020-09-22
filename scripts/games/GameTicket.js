const contentTarget = document.querySelector(".game");
const eventHub = document.querySelector(".main");

eventHub.addEventListener("gameTicket", clickEvent => {
    return contentTarget.innerHTML += ` 
        <div class="player></div>`
    }) 
    
export const gameTicketHolder = () => {
eventHub.addEventListener
    ("gameTicket", clickEvent
    => {
        return contentTarget.innerHTML = `<div>player</div>`
    })
};