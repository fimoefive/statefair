const contentTargetSideShow = document.querySelector(".side-show");
const eventHub = document.querySelector(".state-fair");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticketPurchased: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(sideshowEvent);
    }
})

export const sideshowTicketHolder = () => {
    eventHub.addEventListener("sideshowTicketPurchased", clickEvent => {
        return contentTargetSideShow.innerHTML += `
        <div class="side-show">sideshow</div>`
    })
};