const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector(".main");

export const rideTicketHolder = () => {
        eventHub.addEventListener("rideTicket", clickEvent => {

        return contentTarget.innerHTML = `
        <div></div>
        `
        })
};