const contentTargetRide = document.querySelector(".rides");
const eventHub = document.querySelector(".state-fair");

eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "rideSelected") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
                detail: {
                        ticketPurchased: clickEvent.target.value
                }
        })

        }  
        eventHub.dispatchEvent(rideEvent);      
})

export const rideTicketHolder = () => {
        eventHub.addEventListener("rideTicket", rideEvent => {
        return contentTargetRide.innerHTML += `<div class="rides"></div>
        `
        })
};