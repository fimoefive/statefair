const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector(".state-fair");

eventHub.addEventListener("rideTicket", clickEvent => {
        if (clickEvent.target.id === "rideSelected") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
                detail: {
                        rideTicket: clickEvent.target.id
                }
        })

        }  
        eventHub.dispatchEvent(rideEvent);      
})

export const rideTicketHolder = () => {
        eventHub.addEventListener("rideTicket", clickEvent => {
        return contentTarget.innerHTML += `<div class="rides"></div>
        `
        })
};