document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       NEXORA — GLOBAL APPLICATION
    ========================================= */

    const body = document.body;
    const sidebar = document.querySelector(".sidebar");

    let currentLanguage = localStorage.getItem("nexoraLanguage") || "en";
    let currentTheme = localStorage.getItem("nexoraTheme") || "light";


    /* =========================================
       TRANSLATIONS
    ========================================= */

    const translations = {

        en: {

            Dashboard: "Dashboard",
            Analytics: "Analytics",
            Products: "Products",
            Orders: "Orders",
            Customers: "Customers",
            Messages: "Messages",
            Settings: "Settings",
            Profile: "Profile",
            Administrator: "Administrator",

            "Welcome back! Here's what's happening today.":
                "Welcome back! Here's what's happening today.",

            "Track your business performance and growth.":
                "Track your business performance and growth.",

            "Manage your products, inventory and pricing.":
                "Manage your products, inventory and pricing.",

            "Track and manage your customer orders.":
                "Track and manage your customer orders.",

            "Revenue": "Revenue",
            "Total Revenue": "Total Revenue",
            "Total Orders": "Total Orders",
            "Customers": "Customers",
            "Conversion Rate": "Conversion Rate",

            "Revenue Overview":
                "Revenue Overview",

            "Your revenue performance over the last 7 months.":
                "Your revenue performance over the last 7 months.",

            "Recent Activity":
                "Recent Activity",

            "Latest activity from your store.":
                "Latest activity from your store.",

            "Recent Orders":
                "Recent Orders",

            "Track your latest customer orders.":
                "Track your latest customer orders.",

            "View all": "View all",
            "View all orders →": "View all orders →",
            "View products →": "View products →",

            "Sales Performance":
                "Sales Performance",

            "Monthly revenue performance.":
                "Monthly revenue performance.",

            "Traffic Sources":
                "Traffic Sources",

            "Where your customers come from.":
                "Where your customers come from.",

            "Top Products":
                "Top Products",

            "Best performing products this month.":
                "Best performing products this month.",

            "Product Catalog":
                "Product Catalog",

            "Manage your products and inventory.":
                "Manage your products and inventory.",

            "+ Add Product":
                "+ Add Product",

            "Inventory Status":
                "Inventory Status",

            "Current inventory overview.":
                "Current inventory overview.",

            "Categories":
                "Categories",

            "Products by category.":
                "Products by category.",

            "Order Status":
                "Order Status",

            "Current order distribution.":
                "Current order distribution.",

            "Order Insights":
                "Order Insights",

            "Quick overview of sales activity.":
                "Quick overview of sales activity.",

            "Notifications":
                "Notifications",

            "You have 3 new notifications.":
                "You have 3 new notifications.",

            "Documentation":
                "Documentation",

            "Support":
                "Support",

            "Completed":
                "Completed",

            "Processing":
                "Processing",

            "Pending":
                "Pending",

            "In Stock":
                "In Stock",

            "Low Stock":
                "Low Stock",

            "Out of Stock":
                "Out of Stock",

            "Electronics":
                "Electronics",

            "Accessories":
                "Accessories",

            "Home & Lifestyle":
                "Home & Lifestyle",

            "Organic Search":
                "Organic Search",

            "Social Media":
                "Social Media",

            "Referral":
                "Referral",

            "Direct":
                "Direct",

            "Wireless Headphones":
                "Wireless Headphones",

            "Smart Watch Pro":
                "Smart Watch Pro",

            "Premium Backpack":
                "Premium Backpack",

            "Mechanical Keyboard":
                "Mechanical Keyboard",

            "USB-C Hub":
                "USB-C Hub",

            "All Orders":
                "All Orders",

            "Last 7 months":
                "Last 7 months",

            "Last 30 days":
                "Last 30 days",

            "Last 12 months":
                "Last 12 months"

        },

        ar: {

            Dashboard: "لوحة التحكم",
            Analytics: "التحليلات",
            Products: "المنتجات",
            Orders: "الطلبات",
            Customers: "العملاء",
            Messages: "الرسائل",
            Settings: "الإعدادات",
            Profile: "الملف الشخصي",
            Administrator: "مسؤول",

            "Welcome back! Here's what's happening today.":
                "مرحبًا بعودتك! إليك ما يحدث اليوم.",

            "Track your business performance and growth.":
                "تابع أداء عملك ونموه.",

            "Manage your products, inventory and pricing.":
                "إدارة منتجاتك ومخزونك وأسعارك.",

            "Track and manage your customer orders.":
                "تتبع وإدارة طلبات عملائك.",

            "Revenue": "الإيرادات",
            "Total Revenue": "إجمالي الإيرادات",
            "Total Orders": "إجمالي الطلبات",
            "Customers": "العملاء",
            "Conversion Rate": "معدل التحويل",

            "Revenue Overview":
                "نظرة عامة على الإيرادات",

            "Your revenue performance over the last 7 months.":
                "أداء إيراداتك خلال آخر 7 أشهر.",

            "Recent Activity":
                "النشاط الأخير",

            "Latest activity from your store.":
                "آخر الأنشطة في متجرك.",

            "Recent Orders":
                "الطلبات الأخيرة",

            "Track your latest customer orders.":
                "تتبع أحدث طلبات العملاء.",

            "View all": "عرض الكل",
            "View all orders →": "عرض جميع الطلبات →",
            "View products →": "عرض المنتجات →",

            "Sales Performance":
                "أداء المبيعات",

            "Monthly revenue performance.":
                "أداء الإيرادات الشهري.",

            "Traffic Sources":
                "مصادر الزيارات",

            "Where your customers come from.":
                "من أين يأتي عملاؤك.",

            "Top Products":
                "أفضل المنتجات",

            "Best performing products this month.":
                "أفضل المنتجات أداءً هذا الشهر.",

            "Product Catalog":
                "كتالوج المنتجات",

            "Manage your products and inventory.":
                "إدارة المنتجات والمخزون.",

            "+ Add Product":
                "+ إضافة منتج",

            "Inventory Status":
                "حالة المخزون",

            "Current inventory overview.":
                "نظرة عامة على المخزون الحالي.",

            "Categories":
                "التصنيفات",

            "Products by category.":
                "المنتجات حسب التصنيف.",

            "Order Status":
                "حالة الطلبات",

            "Current order distribution.":
                "توزيع الطلبات الحالي.",

            "Order Insights":
                "إحصائيات الطلبات",

            "Quick overview of sales activity.":
                "نظرة سريعة على نشاط المبيعات.",

            "Notifications":
                "الإشعارات",

            "You have 3 new notifications.":
                "لديك 3 إشعارات جديدة.",

            "Documentation":
                "التوثيق",

            "Support":
                "الدعم",

            "Completed":
                "مكتمل",

            "Processing":
                "قيد المعالجة",

            "Pending":
                "معلّق",

            "In Stock":
                "متوفر",

            "Low Stock":
                "مخزون منخفض",

            "Out of Stock":
                "نفد المخزون",

            "Electronics":
                "إلكترونيات",

            "Accessories":
                "إكسسوارات",

            "Home & Lifestyle":
                "المنزل ونمط الحياة",

            "Organic Search":
                "البحث الطبيعي",

            "Social Media":
                "وسائل التواصل الاجتماعي",

            "Referral":
                "إحالات",

            "Direct":
                "زيارات مباشرة",

            "Wireless Headphones":
                "سماعات لاسلكية",

            "Smart Watch Pro":
                "ساعة ذكية Pro",

            "Premium Backpack":
                "حقيبة ظهر فاخرة",

            "Mechanical Keyboard":
                "لوحة مفاتيح ميكانيكية",

            "USB-C Hub":
                "موزع USB-C",

            "All Orders":
                "كل الطلبات",

            "Last 7 months":
                "آخر 7 أشهر",

            "Last 30 days":
                "آخر 30 يومًا",

            "Last 12 months":
                "آخر 12 شهرًا"

        }

    };


    /* =========================================
       TRANSLATE PAGE
    ========================================= */

    function translatePage() {

        document.documentElement.lang = currentLanguage;

        document.documentElement.dir =
            currentLanguage === "ar" ? "rtl" : "ltr";


        const dictionary =
            translations[currentLanguage];


        document.querySelectorAll(
            "h1, h2, h3, p, span, strong, small, th, td, a, button, option, label"
        ).forEach(element => {

            if (
                element.children.length === 0 &&
                element.textContent.trim()
            ) {

                const original =
                    element.dataset.originalText ||
                    element.textContent.trim();

                element.dataset.originalText = original;

                if (dictionary[original]) {
                    element.textContent =
                        dictionary[original];
                }

            }

        });


        /*
        Placeholders
        */

        document.querySelectorAll(
            "input, textarea"
        ).forEach(input => {

            const original =
                input.dataset.originalPlaceholder ||
                input.placeholder;

            if (original) {

                input.dataset.originalPlaceholder =
                    original;

                if (dictionary[original]) {
                    input.placeholder =
                        dictionary[original];
                }

            }

        });


        /*
        RTL layout
        */

        if (currentLanguage === "ar") {
            body.classList.add("rtl");
        } else {
            body.classList.remove("rtl");
        }

    }


    /* =========================================
       LANGUAGE SWITCHER
    ========================================= */

    function createLanguageButton() {

        if (document.getElementById("languageButton")) {
            return;
        }


        const headerRight =
            document.querySelector(".header-right");

        if (!headerRight) return;


        const button =
            document.createElement("button");

        button.id = "languageButton";
        button.className = "icon-button";
        button.title = "Language";
        button.innerHTML =
            currentLanguage === "ar" ? "ع" : "EN";


        button.addEventListener("click", () => {

            currentLanguage =
                currentLanguage === "en"
                    ? "ar"
                    : "en";


            localStorage.setItem(
                "nexoraLanguage",
                currentLanguage
            );


            translatePage();

            button.innerHTML =
                currentLanguage === "ar"
                    ? "ع"
                    : "EN";

        });


        headerRight.insertBefore(
            button,
            headerRight.firstChild
        );

    }


    /* =========================================
       THEME
    ========================================= */

    function applyTheme() {

        if (currentTheme === "dark") {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }

    }


    function createThemeButton() {

        if (document.getElementById("themeButton")) {
            return;
        }


        const headerRight =
            document.querySelector(".header-right");

        if (!headerRight) return;


        const button =
            document.createElement("button");

        button.id = "themeButton";
        button.className = "icon-button";
        button.title = "Toggle theme";

        button.innerHTML =
            currentTheme === "dark"
                ? "☀"
                : "☾";


        button.addEventListener("click", () => {

            currentTheme =
                currentTheme === "light"
                    ? "dark"
                    : "light";


            localStorage.setItem(
                "nexoraTheme",
                currentTheme
            );


            applyTheme();

            button.innerHTML =
                currentTheme === "dark"
                    ? "☀"
                    : "☾";

        });


        headerRight.insertBefore(
            button,
            headerRight.firstChild
        );

    }


    /* =========================================
       MOBILE SIDEBAR
    ========================================= */

    document.addEventListener("click", event => {

        const menu =
            event.target.closest("#menuButton");

        if (menu && sidebar) {

            sidebar.classList.toggle("open");

        }

    });


    /* =========================================
       NOTIFICATIONS
    ========================================= */

    document.addEventListener("click", event => {

        const notificationButton =
            event.target.closest(
                "#notificationButton"
            );

        const closeButton =
            event.target.closest(
                "#closeNotifications"
            );


        const panel =
            document.getElementById(
                "notificationPanel"
            );


        if (notificationButton && panel) {

            event.stopPropagation();

            panel.classList.toggle("show");

        }


        if (closeButton && panel) {

            panel.classList.remove("show");

        }

    });


    document.addEventListener("click", event => {

        const panel =
            document.getElementById(
                "notificationPanel"
            );


        const button =
            document.getElementById(
                "notificationButton"
            );


        if (
            panel &&
            panel.classList.contains("show") &&
            !panel.contains(event.target) &&
            !button?.contains(event.target)
        ) {

            panel.classList.remove("show");

        }

    });


    /* =========================================
       PAGE NAVIGATION — NO RELOAD
    ========================================= */

    async function loadPage(url, clickedLink = null) {

        try {

            const absoluteURL =
                new URL(
                    url,
                    window.location.href
                );


            const response =
                await fetch(absoluteURL.href);


            if (!response.ok) {
                throw new Error("Page not found");
            }


            const html =
                await response.text();


            const parser =
                new DOMParser();


            const newDocument =
                parser.parseFromString(
                    html,
                    "text/html"
                );


            const newMain =
                newDocument.querySelector(
                    ".main-content"
                );


            const currentMain =
                document.querySelector(
                    ".main-content"
                );


            if (!newMain || !currentMain) {

                window.location.href =
                    absoluteURL.href;

                return;

            }


            currentMain.innerHTML =
                newMain.innerHTML;


            /*
            Update active navigation
            */

            document.querySelectorAll(
                ".nav-link"
            ).forEach(link => {

                link.classList.remove(
                    "active"
                );

            });


            const targetPath =
                absoluteURL.pathname;


            document.querySelectorAll(
                ".nav-link"
            ).forEach(link => {

                const linkURL =
                    new URL(
                        link.href,
                        window.location.href
                    );


                if (
                    linkURL.pathname ===
                    targetPath
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });


            /*
            Browser history
            */

            history.pushState(
                {},
                "",
                absoluteURL.href
            );


            /*
            Update title
            */

            const newTitle =
                newDocument.querySelector(
                    "title"
                );


            if (newTitle) {
                document.title =
                    newTitle.textContent;
            }


            /*
            Close mobile sidebar
            */

            if (sidebar) {
                sidebar.classList.remove(
                    "open"
                );
            }


            /*
            Recreate dynamic controls
            */

            createLanguageButton();
            createThemeButton();

            translatePage();
            applyTheme();

            setupDynamicButtons();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        } catch (error) {

            console.error(
                "Navigation error:",
                error
            );

            window.location.href = url;

        }

    }


    /* =========================================
       INTERNAL LINKS
    ========================================= */

    function setupNavigation() {

        document.addEventListener(
            "click",
            event => {

                const link =
                    event.target.closest(
                        "a"
                    );


                if (!link) return;


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#" ||
                    href.startsWith(
                        "javascript:"
                    ) ||
                    href.startsWith(
                        "mailto:"
                    ) ||
                    href.startsWith(
                        "tel:"
                    ) ||
                    link.target === "_blank"
                ) {

                    return;

                }


                const url =
                    new URL(
                        href,
                        window.location.href
                    );


                if (
                    url.origin !==
                    window.location.origin
                ) {

                    return;

                }


                event.preventDefault();

                loadPage(
                    url.href,
                    link
                );

            }
        );

    }


    /* =========================================
       PROFILE
    ========================================= */

    function setupProfile() {

        document.addEventListener(
            "click",
            event => {

                const profile =
                    event.target.closest(
                        ".user-profile"
                    );


                if (!profile) return;


                const path =
                    window.location.pathname;


                const profileURL =
                    path.includes("/pages/")
                        ? "profile.html"
                        : "pages/profile.html";


                loadPage(profileURL);

            }
        );

    }


    /* =========================================
       STAT CARDS
    ========================================= */

    function setupStatCards() {

        document.addEventListener(
            "click",
            event => {

                const card =
                    event.target.closest(
                        ".stat-card"
                    );


                if (!card) return;


                const label =
                    card.querySelector(
                        ".stat-label"
                    );


                if (!label) return;


                const text =
                    label.textContent
                        .trim()
                        .toLowerCase();


                let page = null;


                if (
                    text.includes("revenue") ||
                    text.includes("conversion")
                ) {

                    page = "analytics.html";

                } else if (
                    text.includes("order")
                ) {

                    page = "orders.html";

                } else if (
                    text.includes("customer")
                ) {

                    page = "customers.html";

                } else if (
                    text.includes("product") ||
                    text.includes("inventory")
                ) {

                    page = "products.html";

                }


                if (!page) return;


                const finalURL =
                    window.location.pathname.includes(
                        "/pages/"
                    )
                        ? page
                        : `pages/${page}`;


                loadPage(finalURL);

            }
        );

    }


    /* =========================================
       ORDER FILTER
    ========================================= */

    function setupOrderFilter() {

        document.addEventListener(
            "change",
            event => {

                const select =
                    event.target;


                if (
                    !select.closest(
                        ".orders-card"
                    )
                ) {
                    return;
                }


                const value =
                    select.value
                        .trim()
                        .toLowerCase();


                const rows =
                    document.querySelectorAll(
                        ".orders-card tbody tr"
                    );


                rows.forEach(row => {

                    const status =
                        row.querySelector(
                            ".status"
                        );


                    if (
                        value === "all orders" ||
                        !value
                    ) {

                        row.style.display = "";

                        return;

                    }


                    if (!status) return;


                    const statusText =
                        status.textContent
                            .trim()
                            .toLowerCase();


                    row.style.display =
                        statusText === value
                            ? ""
                            : "none";

                });

            }
        );

    }


    /* =========================================
       REVENUE PERIOD
    ========================================= */

    function setupRevenuePeriod() {

        document.addEventListener(
            "change",
            event => {

                const select =
                    event.target;


                if (
                    select.id !==
                    "revenuePeriod"
                ) {
                    return;
                }


                const bars =
                    document.querySelectorAll(
                        ".chart .bar"
                    );


                const values = {

                    "Last 7 months":
                        [45, 58, 52, 70, 64, 82, 94],

                    "Last 30 days":
                        [35, 48, 42, 61, 55, 73, 88],

                    "Last 12 months":
                        [30, 38, 45, 50, 56, 63, 69]

                };


                const selected =
                    values[select.value];


                if (!selected) return;


                bars.forEach(
                    (bar, index) => {

                        if (
                            selected[index] !==
                            undefined
                        ) {

                            bar.style.height =
                                `${selected[index]}%`;

                        }

                    }
                );

            }
        );

    }


    /* =========================================
       DYNAMIC BUTTONS
    ========================================= */

    function setupDynamicButtons() {

        /*
        Add Product
        */

        document.querySelectorAll(
            ".view-all"
        ).forEach(button => {

            if (
                button.textContent
                    .includes("Add Product")
            ) {

                button.onclick = event => {

                    event.preventDefault();

                    showModal(
                        "Add Product",
                        `
                        <div class="settings-form">

                            <div class="form-group">
                                <label>Product Name</label>
                                <input type="text" placeholder="Product name">
                            </div>

                            <div class="form-group">
                                <label>Category</label>
                                <input type="text" placeholder="Category">
                            </div>

                            <div class="form-group">
                                <label>Price</label>
                                <input type="number" placeholder="Price">
                            </div>

                            <button class="primary-button" id="saveProduct">
                                Save Product
                            </button>

                        </div>
                        `
                    );

                };

            }

        });


        /*
        Documentation / Support
        */

        document.querySelectorAll(
            ".footer a"
        ).forEach(link => {

            link.onclick = event => {

                event.preventDefault();

                const title =
                    link.textContent.trim();


                showModal(
                    title,
                    `<p style="color:var(--muted);font-size:13px;">
                        ${title} section is available in the NEXORA dashboard.
                    </p>`
                );

            };

        });

    }


    /* =========================================
       MODAL SYSTEM
    ========================================= */

    function showModal(title, content) {

        const old =
            document.getElementById(
                "nexoraModal"
            );


        if (old) old.remove();


        const modal =
            document.createElement("div");


        modal.id = "nexoraModal";


        modal.innerHTML = `

            <div class="nexora-modal-overlay">

                <div class="nexora-modal">

                    <div class="notification-header">

                        <h3>${title}</h3>

                        <button id="closeNexoraModal">
                            ×
                        </button>

                    </div>

                    <div class="notification-content">
                        ${content}
                    </div>

                </div>

            </div>

        `;


        document.body.appendChild(modal);


        const close =
            () => modal.remove();


        modal.querySelector(
            "#closeNexoraModal"
        ).onclick = close;


        modal.querySelector(
            ".nexora-modal-overlay"
        ).addEventListener(
            "click",
            event => {

                if (
                    event.target.classList.contains(
                        "nexora-modal-overlay"
                    )
                ) {

                    close();

                }

            }
        );


        const save =
            modal.querySelector(
                "#saveProduct"
            );


        if (save) {

            save.onclick = () => {

                alert(
                    currentLanguage === "ar"
                        ? "تم حفظ المنتج بنجاح!"
                        : "Product saved successfully!"
                );

                close();

            };

        }

    }


    /* =========================================
       MODAL CSS
    ========================================= */

    function addModalStyles() {

        if (
            document.getElementById(
                "nexoraDynamicStyles"
            )
        ) {
            return;
        }


        const style =
            document.createElement("style");


        style.id =
            "nexoraDynamicStyles";


        style.textContent = `

            .nexora-modal-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,.45);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                z-index: 9999;
            }

            .nexora-modal {
                width: min(500px, 100%);
                background: var(--surface);
                border-radius: 16px;
                box-shadow: 0 25px 70px rgba(0,0,0,.2);
                padding: 20px;
            }

            body.dark-mode {
                background: #0f172a;
                color: #f8fafc;
            }

            body.dark-mode .dashboard-card,
            body.dark-mode .stat-card,
            body.dark-mode .icon-button,
            body.dark-mode .menu-button,
            body.dark-mode .nexora-modal {
                background: #1e293b;
                border-color: #334155;
                color: #f8fafc;
            }

            body.dark-mode .card-header p,
            body.dark-mode .stat-label,
            body.dark-mode .activity-text span,
            body.dark-mode .footer {
                color: #94a3b8;
            }

            body.dark-mode th {
                background: #172033;
            }

            body.dark-mode td {
                border-color: #334155;
            }

            body.rtl .header-left,
            body.rtl .header-right,
            body.rtl .user-profile,
            body.rtl .activity-item {
                direction: rtl;
            }

            body.rtl .sidebar {
                left: auto;
                right: 0;
            }

            body.rtl .main-content {
                margin-left: 0;
                margin-right: var(--sidebar-width);
            }

            @media (max-width: 760px) {

                body.rtl .sidebar {
                    transform: translateX(100%);
                }

                body.rtl .sidebar.open {
                    transform: translateX(0);
                }

                body.rtl .main-content {
                    margin-right: 0;
                }

            }

        `;


        document.head.appendChild(style);

    }


    /* =========================================
       INITIALIZE
    ========================================= */

    addModalStyles();

    applyTheme();

    createLanguageButton();

    createThemeButton();

    translatePage();

    setupNavigation();

    setupProfile();

    setupStatCards();

    setupOrderFilter();

    setupRevenuePeriod();

    setupDynamicButtons();

});
