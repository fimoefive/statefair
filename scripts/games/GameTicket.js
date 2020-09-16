const contentTarget = document.querySelector(".games");
const eventHub = document.querySelector(".main");

export const gameTicketHolder = () => {
    eventHub.addEventListener("gameTicket", clickEvent => {
        
        return contentTarget.innerHTML = `
        <div></div>
        `
    })  
};