document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.querySelector(".sidebar");

    /*
    ========================================
    MOBILE SIDEBAR
    ========================================
    */

    document.addEventListener("click", (event) => {

        const menuButton = event.target.closest("#menuButton");

        if (menuButton && sidebar) {
            sidebar.classList.toggle("open");
        }

    });


    /*
    ========================================
    NOTIFICATIONS
    ========================================
    */

    document.addEventListener("click", (event) => {

        const notificationButton =
            event.target.closest("#notificationButton");

        const closeButton =
            event.target.closest("#closeNotifications");

        const notificationPanel =
            document.getElementById("notificationPanel");


        if (notificationButton && notificationPanel) {

            event.stopPropagation();

            notificationPanel.classList.toggle("show");

            return;
        }


        if (closeButton && notificationPanel) {

            notificationPanel.classList.remove("show");

            return;
        }


        if (
            notificationPanel &&
            notificationPanel.classList.contains("show") &&
            !notificationPanel.contains(event.target)
        ) {

            notificationPanel.classList.remove("show");

        }

    });


    /*
    ========================================
    PAGE NAVIGATION
    ========================================
    */

    async function loadPage(url, clickedLink = null) {

        try {

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Page could not be loaded.");
            }

            const html = await response.text();

            const parser = new DOMParser();

            const documentPage =
                parser.parseFromString(html, "text/html");

            const newMain =
                documentPage.querySelector(".main-content");

            const currentMain =
                document.querySelector(".main-content");


            if (!newMain || !currentMain) {

                window.location.href = url;

                return;
            }


            /*
            Replace only the main interface.
            Sidebar stays exactly where it is.
            */

            currentMain.innerHTML = newMain.innerHTML;


            /*
            Update active sidebar item
            */

            document.querySelectorAll(".nav-link").forEach(link => {
                link.classList.remove("active");
            });


            if (clickedLink) {
                clickedLink.classList.add("active");
            }


            /*
            Close mobile sidebar
            */

            if (sidebar) {
                sidebar.classList.remove("open");
            }


            /*
            Close notifications
            */

            const notificationPanel =
                document.getElementById("notificationPanel");

            if (notificationPanel) {
                notificationPanel.classList.remove("show");
            }


            /*
            Scroll to top
            */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


            /*
            Change browser URL without reloading page
            */

            history.pushState(
                { page: url },
                "",
                url
            );


            /*
            Update page title
            */

            const newTitle =
                documentPage.querySelector("title");

            if (newTitle) {
                document.title = newTitle.textContent;
            }


            /*
            Make links inside the newly loaded interface
            work with the same system.
            */

            fixInternalLinks();

        }

        catch (error) {

            console.error(error);

            /*
            If something goes wrong,
            use normal navigation instead.
            */

            window.location.href = url;

        }

    }


    /*
    ========================================
    INTERNAL LINKS
    ========================================
    */

    function fixInternalLinks() {

        document.querySelectorAll("a").forEach(link => {

            const href = link.getAttribute("href");

            if (!href) return;

            if (
                href === "#" ||
                href.startsWith("http://") ||
                href.startsWith("https://") ||
                href.startsWith("mailto:")
            ) {
                return;
            }


            link.onclick = function(event) {

                event.preventDefault();

                const url =
                    new URL(
                        href,
                        window.location.href
                    ).pathname;

                loadPage(url, link);

            };

        });

    }


    /*
    ========================================
    SIDEBAR NAVIGATION
    ========================================
    */

    fixInternalLinks();


    /*
    ========================================
    USER PROFILE
    ========================================
    */

    document.addEventListener("click", event => {

        const profile =
            event.target.closest(".user-profile");

        if (!profile) return;

        event.preventDefault();

        const profilePage =
            window.location.pathname.includes("/pages/")
                ? "profile.html"
                : "pages/profile.html";


        loadPage(profilePage);

    });


    /*
    ========================================
    STAT CARDS
    ========================================
    */

    document.addEventListener("click", event => {

        const card =
            event.target.closest(".stat-card");

        if (!card) return;


        const label =
            card.querySelector(".stat-label");


        if (!label) return;


        const text =
            label.textContent.trim().toLowerCase();


        let target = null;


        if (
            text.includes("revenue") ||
            text.includes("conversion")
        ) {

            target =
                window.location.pathname.includes("/pages/")
                    ? "analytics.html"
                    : "pages/analytics.html";

        }


        else if (text.includes("order")) {

            target =
                window.location.pathname.includes("/pages/")
                    ? "orders.html"
                    : "pages/orders.html";

        }


        else if (text.includes("customer")) {

            target =
                window.location.pathname.includes("/pages/")
                    ? "customers.html"
                    : "pages/customers.html";

        }


        else if (
            text.includes("product") ||
            text.includes("inventory")
        ) {

            target =
                window.location.pathname.includes("/pages/")
                    ? "products.html"
                    : "pages/products.html";

        }


        if (target) {

            loadPage(target);

        }

    });


    /*
    ========================================
    BROWSER BACK / FORWARD
    ========================================
    */

    window.addEventListener("popstate", () => {

        const path =
            window.location.pathname;

        let url = path;


        if (!url || url === "/") {
            url = "index.html";
        }


        loadPage(url);

    });

});
