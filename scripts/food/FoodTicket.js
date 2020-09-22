const contentTarget = document.querySelector(".food");
const eventHub = document.querySelector(".main");

eventHub.addEventListener
("foodTicket", clickEvent => {
    return contentTarget.innerHTML = `<div class="foods"></div>`
})

export const foodTicketHolder = () => {
    eventHub.addEventListener("foodTicket", clickEvent => {
        return contentTarget.innerHTML = `
        <div></div>
        `
    })
};