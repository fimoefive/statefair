const contentTargetRide = document.querySelector(".rides");
const eventHub = document.querySelector(".state-fair");

export const rideTicketHolder = () => {
        eventHub.addEventListener("rideTicketPurchased", clickEvent => {
        contentTargetRide.innerHTML += `
        <div class="ride">rides</div>
        `
        })
};