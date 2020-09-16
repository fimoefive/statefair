const contentTarget = document.querySelector(".full-package");
const eventHub = document.querySelector(".main");

export const fullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicket", clickEvent => {
        return contentTarget.innerHTML = `
        <div></div>
        `
    })
};