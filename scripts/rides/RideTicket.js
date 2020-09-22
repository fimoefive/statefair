const contentTargetRide = document.querySelector(".rides");
const eventHub = document.querySelector(".state-fair");

eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
                detail: {
                ticketPurchased: clickEvent.target.value
                }
        })
        eventHub.dispatchEvent(rideEvent); 
        }       
})

export const rideTicketHolder = () => {
        eventHub.addEventListener("rideTicketPurchased", clickEvent => {
        contentTargetRide.innerHTML += `
        <div class="rides">rides</div>
        `
        })
};