
const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector(".main");

eventHub.addEventListener("click", clickEvent => {

    const userChoiceElement = document.querySelector(".main")
    userChoiceElement.innerHTML = clickEvent.detail.selectedFlower
});

export const ticketBooth = () => {
    contentTarget.innerHTML = `
    <div class="ticketBooth">
    <button id=""></button>
    <button id=""></button>
    <button id=""></button>
    <button id=""></button>
    </div>
    `
};


const rideEvent = new CustomEvent("rideTicketPurchased");

const flowerSelectedEvent = new CustomEvent("flowerSelected", {
    detail: {
        selectedFlower: "Daisy"
    }
});

eventHub.addEventListener("click", clickEvent => {

    const userChoiceElement = document.querySelector(".main")
    userChoiceElement.innerHTML = clickEvent.detail.selectedFlower
});