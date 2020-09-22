const contentTargetFood = document.querySelector(".food");
const eventHub = document.querySelector(".state-fair");



export const foodTicketHolder = () => {
    eventHub.addEventListener("foodTicketPurchased", clickEvent => {
        contentTargetFood.innerHTML += `
        <div class="food">foods</div>
        `
    })
};