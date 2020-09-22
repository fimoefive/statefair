const contentTarget = document.querySelector(".food");
const eventHub = document.querySelector(".state-fair");

eventHub.addEventListener
("foodTicket", clickEvent => {
    return contentTarget.innerHTML = `<div class="foods"></div>`
})

export const foodTicketHolder = () => {
    eventHub.addEventListener("foodTicket", clickEvent => {
        return contentTarget.innerHTML += `
        <div class="food"></div>
        `
    })
};