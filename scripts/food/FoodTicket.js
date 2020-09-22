const contentTargetFood = document.querySelector(".food");
const eventHub = document.querySelector(".state-fair");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticketPurchased: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(foodEvent);
    }
})

export const foodTicketHolder = () => {
    eventHub.addEventListener("foodTicketPurchased", clickEvent => {
        contentTargetFood.innerHTML += `
        <div class="food">foods</div>
        `
    })
};