
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

export const ticketBooth = () => {
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

/*
const rideEvent = new CustomEvent("rideTicketPurchased");
const flowerSelectedEvent = new CustomEvent("flowerSelected", {
    detail: {
        selectedFlower: "Daisy"
    }
});
*/