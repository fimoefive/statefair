let totalTicketSold = 0;

const contentTargetTickets = document.querySelector(".customers");
const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector(".state-fair");



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")
            totalTicketSold++
            totalTickets();
         
        
        eventHub.dispatchEvent(fullPackageEvent);
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
            totalTicketSold++
            totalTickets();

        eventHub.dispatchEvent(foodEvent);
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        totalTicketSold++
        totalTickets();
        eventHub.dispatchEvent(gameEvent);
    }
}) 

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
    const rideEvent = new CustomEvent("rideTicketPurchased")
            
    
    eventHub.dispatchEvent(rideEvent); 
    }       
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        totalTicketSold++
        totalTickets();

        eventHub.dispatchEvent(sideshowEvent);
    }
})

export const ticketBooth = () => {
    totalTickets();
    return contentTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="rideTicket">Ride Ticket</button>
    <button id="foodTicket">Food Ticket</button>
    <button id="gameTicket">Game Ticket</button>x
    <button id="sideshowTicket">SideShow Ticket</button>
    <button id="fullPackageTicket">Full Package Ticket</button>
    </div>
    `
};

export const totalTickets = () => {
contentTargetTickets.innerHTML = `Total tickets purchased: ${totalTicketSold}`
};