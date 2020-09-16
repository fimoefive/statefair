const contentTarget = document.querySelector(".food");
const eventHub = document.querySelector(".main");

export const foodTicketHolder = () => {
    eventHub.addEventListener("foodTicket", clickEvent => {
        
        return contentTarget.innerHTML = `
        <div></div>
        `
    })
};