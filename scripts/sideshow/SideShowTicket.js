const contentTarget = document.querySelector(".side-show");
const eventHub = document.querySelector(".main");

export const sideshowTicketHolder = () => {
    eventHub.addEventListener("sideshowTicket", clickEvent => {
        
        return contentTarget.innerHTML = `
        <div></div>
    `
    })
};