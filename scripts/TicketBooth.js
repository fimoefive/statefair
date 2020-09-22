let totalTicketSold = 0;

const contentTargetTickets = document.querySelector(".customers");
const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector(".state-fair");

eventHub.addEventListener("ticketSelected", clickEvent => {
    if (clickEvent.target.selectedTicket === "ticketSelected") {
    const ticketEvent = new CustomEvent ("ticketPurchased", {
        detail: {
            ticketPurchased: clickEvent.target.selectedticket
        }
    })
    eventHub.dispatchEvent(ticketEvent);
    }
});

export const ticketBooth = () => {
    totalTickets();
    return contentTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="foodTicket">Food Ticket</button>
    <button id="gameTicket">Game Ticket</button>
    <button id="rideTicket">Ride Ticket</button>
    <button id="sideshowTicket">SideShow Ticket</button>
    <button id="fullPackageTicket">Full Package Ticket</button>
    </div>
    `
};

const totalTickets = () => {
    contentTargetTickets.innerHTML += `Total tickets purchased: ${totalTicketSold}`
};