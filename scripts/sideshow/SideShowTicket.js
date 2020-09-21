const contentTarget = document.querySelector(".side-show");
const eventHub = document.querySelector(".main");

eventHub.addEventListener
("sideshowTicket", clickEvent => {
    return contentTarget.innerHTML += `<div class="sideshow"></div>`
})

export const sideshowTicketHolder = () => {
    eventHub.addEventListener("sideshowTicket", clickEvent => {
        return contentTarget.innerHTML = `
        <div></div>`
    })
};