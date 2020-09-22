const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector(".main");

eventHub.addEventListener("rideTicket", CustomEvent => {
        contentTarget.innerHTML += `<div class="rider"></div>`
})

export const rideTicketHolder = () => {
        eventHub.addEventListener("rideTicket", clickEvent => {
        return contentTarget.innerHTML = `<div></div>
        `
        })
};