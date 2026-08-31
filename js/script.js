const menuButton = document.getElementById("menuButton");
const sidebar = document.querySelector(".sidebar");

if (menuButton && sidebar) {
    menuButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
}


const notificationButton =
    document.getElementById("notificationButton");

const notificationPanel =
    document.getElementById("notificationPanel");

const closeNotifications =
    document.getElementById("closeNotifications");


if (notificationButton && notificationPanel) {
    notificationButton.addEventListener("click", () => {
        notificationPanel.classList.toggle("show");
    });
}


if (closeNotifications && notificationPanel) {
    closeNotifications.addEventListener("click", () => {
        notificationPanel.classList.remove("show");
    });
}


document.addEventListener("click", (event) => {

    if (
        notificationPanel &&
        notificationButton &&
        notificationPanel.classList.contains("show") &&
        !notificationPanel.contains(event.target) &&
        !notificationButton.contains(event.target)
    ) {
        notificationPanel.classList.remove("show");
    }

});
