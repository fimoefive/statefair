const contentTargetSideShow = document.querySelector(".side-show");
const eventHub = document.querySelector(".state-fair");


export const sideshowTicketHolder = () => {
    eventHub.addEventListener("sideshowTicketPurchased", clickEvent => {
        return contentTargetSideShow.innerHTML += `
        <div class="side-show">sideshow</div>`
    })
};