/* =========================================================
   NEXORA — GLOBAL LANGUAGE & UI SYSTEM
   script.js
   Version: 1.0.0
   Built from zero
   ========================================================= */

"use strict";

/* =========================================================
   01. NEXORA GLOBAL CONFIGURATION
   ========================================================= */

const NEXORA = {

    name: "NEXORA",

    version: "1.0.0",

    storage: {
        language: "nexora_language",
        theme: "nexora_theme",
        direction: "nexora_direction"
    },

    defaults: {
        language: "en",
        theme: "system",
        direction: "ltr"
    },

    supportedPages: [
        "index",
        "dashboard",
        "analytics",
        "products",
        "orders",
        "customers",
        "messages",
        "settings",
        "profile"
    ],

    selectors: {
        language: [
            "[data-language]",
            "[data-lang]",
            ".language-option",
            ".language-item"
        ],

        theme: [
            "[data-theme]",
            ".theme-option"
        ],

        translatable: [
            "[data-i18n]",
            "[data-translate]"
        ]
    }

};


/* =========================================================
   02. SUPPORTED LANGUAGES — 21 LANGUAGES
   ========================================================= */

const LANGUAGES = [

    {
        code: "en",
        name: "English",
        nativeName: "English",
        direction: "ltr",
        locale: "en-US"
    },

    {
        code: "ar",
        name: "Arabic",
        nativeName: "العربية",
        direction: "rtl",
        locale: "ar-SA"
    },

    {
        code: "fr",
        name: "French",
        nativeName: "Français",
        direction: "ltr",
        locale: "fr-FR"
    },

    {
        code: "es",
        name: "Spanish",
        nativeName: "Español",
        direction: "ltr",
        locale: "es-ES"
    },

    {
        code: "de",
        name: "German",
        nativeName: "Deutsch",
        direction: "ltr",
        locale: "de-DE"
    },

    {
        code: "it",
        name: "Italian",
        nativeName: "Italiano",
        direction: "ltr",
        locale: "it-IT"
    },

    {
        code: "pt",
        name: "Portuguese",
        nativeName: "Português",
        direction: "ltr",
        locale: "pt-PT"
    },

    {
        code: "tr",
        name: "Turkish",
        nativeName: "Türkçe",
        direction: "ltr",
        locale: "tr-TR"
    },

    {
        code: "nl",
        name: "Dutch",
        nativeName: "Nederlands",
        direction: "ltr",
        locale: "nl-NL"
    },

    {
        code: "ru",
        name: "Russian",
        nativeName: "Русский",
        direction: "ltr",
        locale: "ru-RU"
    },

    {
        code: "zh",
        name: "Chinese",
        nativeName: "中文",
        direction: "ltr",
        locale: "zh-CN"
    },

    {
        code: "ja",
        name: "Japanese",
        nativeName: "日本語",
        direction: "ltr",
        locale: "ja-JP"
    },

    {
        code: "ko",
        name: "Korean",
        nativeName: "한국어",
        direction: "ltr",
        locale: "ko-KR"
    },

    {
        code: "hi",
        name: "Hindi",
        nativeName: "हिन्दी",
        direction: "ltr",
        locale: "hi-IN"
    },

    {
        code: "id",
        name: "Indonesian",
        nativeName: "Bahasa Indonesia",
        direction: "ltr",
        locale: "id-ID"
    },

    {
        code: "vi",
        name: "Vietnamese",
        nativeName: "Tiếng Việt",
        direction: "ltr",
        locale: "vi-VN"
    },

    {
        code: "pl",
        name: "Polish",
        nativeName: "Polski",
        direction: "ltr",
        locale: "pl-PL"
    },

    {
        code: "uk",
        name: "Ukrainian",
        nativeName: "Українська",
        direction: "ltr",
        locale: "uk-UA"
    },

    {
        code: "sv",
        name: "Swedish",
        nativeName: "Svenska",
        direction: "ltr",
        locale: "sv-SE"
    },

    {
        code: "el",
        name: "Greek",
        nativeName: "Ελληνικά",
        direction: "ltr",
        locale: "el-GR"
    },

    {
        code: "he",
        name: "Hebrew",
        nativeName: "עברית",
        direction: "rtl",
        locale: "he-IL"
    }

];


/* =========================================================
   03. LANGUAGE HELPERS
   ========================================================= */

/**
 * Find language information by language code.
 */
function getLanguage(code) {

    return LANGUAGES.find(
        language => language.code === code
    ) || LANGUAGES.find(
        language => language.code === NEXORA.defaults.language
    );

}


/**
 * Check whether a language is supported.
 */
function isLanguageSupported(code) {

    return LANGUAGES.some(
        language => language.code === code
    );

}


/**
 * Get browser language.
 */
function getBrowserLanguage() {

    const browserLanguage =
        navigator.language ||
        navigator.userLanguage ||
        NEXORA.defaults.language;

    const shortCode =
        browserLanguage
            .toLowerCase()
            .split("-")[0]
            .split("_")[0];

    return isLanguageSupported(shortCode)
        ? shortCode
        : NEXORA.defaults.language;

}


/* =========================================================
   04. STORAGE HELPERS
   ========================================================= */

/**
 * Safely read a value from localStorage.
 */
function getStorage(key, fallback = null) {

    try {

        const value = localStorage.getItem(key);

        return value !== null
            ? value
            : fallback;

    } catch (error) {

        console.warn(
            "[NEXORA] Unable to read localStorage:",
            error
        );

        return fallback;

    }

}


/**
 * Safely save a value to localStorage.
 */
function setStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            value
        );

        return true;

    } catch (error) {

        console.warn(
            "[NEXORA] Unable to write localStorage:",
            error
        );

        return false;

    }

}


/**
 * Safely remove a stored value.
 */
function removeStorage(key) {

    try {

        localStorage.removeItem(key);

        return true;

    } catch (error) {

        console.warn(
            "[NEXORA] Unable to remove localStorage:",
            error
        );

        return false;

    }

}


/* =========================================================
   05. CURRENT LANGUAGE
   ========================================================= */

let currentLanguage = null;


/**
 * Determine the initial language.
 *
 * Priority:
 * 1. Saved NEXORA language
 * 2. Browser language
 * 3. English fallback
 */
function detectInitialLanguage() {

    const savedLanguage = getStorage(
        NEXORA.storage.language
    );

    if (
        savedLanguage &&
        isLanguageSupported(savedLanguage)
    ) {

        return savedLanguage;

    }

    return getBrowserLanguage();

}


/**
 * Get current language code.
 */
function getCurrentLanguage() {

    return currentLanguage || detectInitialLanguage();

}


/**
 * Set current language in memory and storage.
 */
function setCurrentLanguage(code) {

    if (!isLanguageSupported(code)) {

        console.warn(
            `[NEXORA] Unsupported language: ${code}`
        );

        code = NEXORA.defaults.language;

    }

    currentLanguage = code;

    setStorage(
        NEXORA.storage.language,
        code
    );

    return getLanguage(code);

}


/* =========================================================
   06. DIRECTION SYSTEM — RTL / LTR
   ========================================================= */

/**
 * Apply language direction to the entire document.
 */
function applyDirection(languageCode) {

    const language = getLanguage(languageCode);

    if (!language) {
        return;
    }

    const direction = language.direction;

    document.documentElement.dir = direction;

    document.documentElement.lang =
        language.code;

    document.body.dir = direction;

    setStorage(
        NEXORA.storage.direction,
        direction
    );

    /*
     * Useful CSS hooks.
     */
    document.documentElement.classList.toggle(
        "rtl",
        direction === "rtl"
    );

    document.documentElement.classList.toggle(
        "ltr",
        direction === "ltr"
    );

}


/* =========================================================
   07. LANGUAGE ATTRIBUTE HELPERS
   ========================================================= */

/**
 * Add language information to the document.
 */
function applyLanguageMetadata(languageCode) {

    const language = getLanguage(languageCode);

    if (!language) {
        return;
    }

    document.documentElement.setAttribute(
        "lang",
        language.code
    );

    document.documentElement.setAttribute(
        "dir",
        language.direction
    );

}


/* =========================================================
   08. PAGE DETECTION
   ========================================================= */

/**
 * Detect the current NEXORA page.
 *
 * Examples:
 * /pages/products.html -> products
 * /pages/orders -> orders
 * /index.html -> index
 */
function getCurrentPage() {

    const pathname =
        window.location.pathname
            .toLowerCase();

    const cleanPath =
        pathname
            .replace(/\/+$/, "")
            .split("/")
            .pop() || "index";

    const pageName =
        cleanPath
            .replace(".html", "")
            .replace(".htm", "");

    if (
        pageName === "" ||
        pageName === "index"
    ) {

        return "index";

    }

    return pageName;

}


/* =========================================================
   09. DOM READY STATE
   ========================================================= */

function onDOMReady(callback) {

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            callback,
            {
                once: true
            }
        );

    } else {

        callback();

    }

}


/* =========================================================
   10. NEXORA GLOBAL STATE
   ========================================================= */

const NEXORA_STATE = {

    initialized: false,

    language: null,

    direction: null,

    page: null,

    theme: null,

    translating: false,

    observers: [],

    listeners: []

};


/* =========================================================
   11. THEME SYSTEM
   ========================================================= */

/**
 * Read saved theme.
 */
function getSavedTheme() {

    return getStorage(
        NEXORA.storage.theme,
        NEXORA.defaults.theme
    );

}


/**
 * Apply selected theme.
 */
function applyTheme(theme) {

    const validThemes = [
        "light",
        "dark",
        "system"
    ];

    if (
        !validThemes.includes(theme)
    ) {

        theme = "system";

    }

    NEXORA_STATE.theme = theme;

    setStorage(
        NEXORA.storage.theme,
        theme
    );

    const root =
        document.documentElement;

    root.setAttribute(
        "data-theme",
        theme
    );

    root.classList.remove(
        "theme-light",
        "theme-dark",
        "theme-system"
    );

    root.classList.add(
        `theme-${theme}`
    );

    /*
     * System theme support.
     */
    if (theme === "system") {

        const prefersDark =
            window.matchMedia &&
            window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

        root.classList.toggle(
            "dark",
            prefersDark
        );

        root.classList.toggle(
            "light",
            !prefersDark
        );

    } else {

        root.classList.toggle(
            "dark",
            theme === "dark"
        );

        root.classList.toggle(
            "light",
            theme === "light"
        );

    }

}


/**
 * Change theme.
 */
function setTheme(theme) {

    applyTheme(theme);

    /*
     * Notify other components.
     */
    document.dispatchEvent(
        new CustomEvent(
            "nexora:themechange",
            {
                detail: {
                    theme
                }
            }
        )
    );

}


/* =========================================================
   12. LANGUAGE CHANGE EVENT
   ========================================================= */

/**
 * Dispatch global language event.
 */
function dispatchLanguageChange(
    languageCode
) {

    const language =
        getLanguage(languageCode);

    document.dispatchEvent(
        new CustomEvent(
            "nexora:languagechange",
            {
                detail: {
                    code: language.code,
                    name: language.name,
                    nativeName: language.nativeName,
                    direction: language.direction,
                    locale: language.locale
                }
            }
        )
    );

}


/* =========================================================
   13. MAIN LANGUAGE APPLICATION
   ========================================================= */

/**
 * Apply a language globally.
 *
 * Translation itself will be connected
 * to the dictionary in the next section.
 */
function applyLanguage(
    languageCode,
    options = {}
) {

    const {
        save = true,
        translate = true
    } = options;

    const language =
        getLanguage(languageCode);

    if (!language) {

        console.warn(
            "[NEXORA] Language not found:",
            languageCode
        );

        return false;

    }

    currentLanguage =
        language.code;

    NEXORA_STATE.language =
        language.code;

    NEXORA_STATE.direction =
        language.direction;

    if (save) {

        setStorage(
            NEXORA.storage.language,
            language.code
        );

    }

    applyLanguageMetadata(
        language.code
    );

    applyDirection(
        language.code
    );

    if (
        translate &&
        typeof translatePage === "function"
    ) {

        translatePage(
            language.code
        );

    }

    dispatchLanguageChange(
        language.code
    );

    return true;

}


/**
 * Public language switcher.
 */
function changeLanguage(languageCode) {

    if (
        !isLanguageSupported(languageCode)
    ) {

        console.warn(
            `[NEXORA] "${languageCode}" is not supported.`
        );

        return false;

    }

    return applyLanguage(
        languageCode
    );

}


/* =========================================================
   14. LANGUAGE SELECTOR EVENTS
   ========================================================= */

function initializeLanguageControls() {

    const elements = document.querySelectorAll(
        "[data-language], " +
        "[data-lang], " +
        ".language-option, " +
        ".language-item"
    );

    elements.forEach(element => {

        if (
            element.dataset.nexoraLanguageBound ===
            "true"
        ) {

            return;

        }

        const code =
            element.dataset.language ||
            element.dataset.lang ||
            element.getAttribute(
                "data-language"
            ) ||
            element.getAttribute(
                "data-lang"
            );

        if (
            !code ||
            !isLanguageSupported(code)
        ) {

            return;

        }

        element.addEventListener(
            "click",
            event => {

                event.preventDefault();

                changeLanguage(code);

            }
        );

        element.dataset.nexoraLanguageBound =
            "true";

    });

}


/* =========================================================
   15. CURRENT LANGUAGE UI STATE
   ========================================================= */

function updateLanguageControls() {

    const activeLanguage =
        getCurrentLanguage();

    const elements = document.querySelectorAll(
        "[data-language], " +
        "[data-lang], " +
        ".language-option, " +
        ".language-item"
    );

    elements.forEach(element => {

        const code =
            element.dataset.language ||
            element.dataset.lang ||
            element.getAttribute(
                "data-language"
            ) ||
            element.getAttribute(
                "data-lang"
            );

        const isActive =
            code === activeLanguage;

        element.classList.toggle(
            "active",
            isActive
        );

        element.setAttribute(
            "aria-selected",
            String(isActive)
        );

        if (isActive) {

            element.setAttribute(
                "data-active-language",
                "true"
            );

        } else {

            element.removeAttribute(
                "data-active-language"
            );

        }

    });

}


/* =========================================================
   16. LANGUAGE CHANGE LISTENER
   ========================================================= */

document.addEventListener(
    "nexora:languagechange",
    event => {

        const language =
            event.detail;

        updateLanguageControls();

        /*
         * Update elements that explicitly
         * display the current language.
         */
        document
            .querySelectorAll(
                "[data-current-language]"
            )
            .forEach(element => {

                element.textContent =
                    language.nativeName;

            });

    }
);


/* =========================================================
   17. SYSTEM THEME DETECTION
   ========================================================= */

function initializeSystemThemeListener() {

    if (!window.matchMedia) {
        return;
    }

    const mediaQuery =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

    const handleChange = () => {

        if (
            getSavedTheme() === "system"
        ) {

            applyTheme("system");

        }

    };

    if (
        typeof mediaQuery.addEventListener ===
        "function"
    ) {

        mediaQuery.addEventListener(
            "change",
            handleChange
        );

    } else if (
        typeof mediaQuery.addListener ===
        "function"
    ) {

        mediaQuery.addListener(
            handleChange
        );

    }

}


/* =========================================================
   18. THEME CONTROLS
   ========================================================= */

function initializeThemeControls() {

    const elements =
        document.querySelectorAll(
            "[data-theme]"
        );

    elements.forEach(element => {

        if (
            element.dataset.nexoraThemeBound ===
            "true"
        ) {

            return;

        }

        const theme =
            element.dataset.theme;

        if (
            ![
                "light",
                "dark",
                "system"
            ].includes(theme)
        ) {

            return;

        }

        element.addEventListener(
            "click",
            event => {

                event.preventDefault();

                setTheme(theme);

            }
        );

        element.dataset.nexoraThemeBound =
            "true";

    });

}


/* =========================================================
   19. GLOBAL DEBUG INFORMATION
   ========================================================= */

function getNexoraState() {

    return {

        ...NEXORA_STATE,

        languageInfo:
            getLanguage(
                getCurrentLanguage()
            ),

        page:
            getCurrentPage(),

        supportedLanguages:
            LANGUAGES.map(
                language => language.code
            )

    };

}


/* =========================================================
   20. EXPOSE PUBLIC API
   ========================================================= */

window.NEXORA = NEXORA;

window.NEXORA_LANGUAGES =
    LANGUAGES;

window.NEXORA_STATE =
    NEXORA_STATE;

window.NEXORA_API = {

    getLanguage,

    getCurrentLanguage,

    changeLanguage,

    applyLanguage,

    isLanguageSupported,

    getCurrentPage,

    getNexoraState,

    setTheme,

    applyTheme,

    getSavedTheme,

    getStorage,

    setStorage,

    removeStorage

};


/* =========================================================
   21. INITIALIZATION
   ========================================================= */

function initializeNexora() {

    if (
        NEXORA_STATE.initialized
    ) {

        return;

    }

    NEXORA_STATE.initialized =
        true;

    NEXORA_STATE.page =
        getCurrentPage();

    /*
     * Detect and apply language.
     */
    const initialLanguage =
        detectInitialLanguage();

    /*
     * Apply saved/system theme.
     */
    const initialTheme =
        getSavedTheme();

    applyTheme(
        initialTheme
    );

    /*
     * Apply language.
     *
     * Translation function will be available
     * once the dictionary section is added.
     */
    applyLanguage(
        initialLanguage,
        {
            save: true,
            translate: true
        }
    );

    /*
     * Initialize controls.
     */
    initializeLanguageControls();

    initializeThemeControls();

    initializeSystemThemeListener();

    updateLanguageControls();

    /*
     * Notify the application.
     */
    document.dispatchEvent(
        new CustomEvent(
            "nexora:ready",
            {
                detail:
                    getNexoraState()
            }
        )
    );

    console.info(
        `[NEXORA] Initialized — page: ${NEXORA_STATE.page}, language: ${NEXORA_STATE.language}`
    );

}


/* =========================================================
   22. START NEXORA
   ========================================================= */

onDOMReady(
    initializeNexora
);


/* =========================================================
   END OF FOUNDATION
   ========================================================= */
/* =========================================================
   NEXORA — TRANSLATION ENGINE
   PART 02 — MASTER DICTIONARY CORE
   ========================================================= */


/* =========================================================
   23. TRANSLATION DICTIONARY
   ========================================================= */

const TRANSLATIONS = {

    /* =====================================================
       ENGLISH
       ===================================================== */

    en: {

        /* General */
        "Dashboard": "Dashboard",
        "Welcome back! Here's what's happening today.": "Welcome back! Here's what's happening today.",
        "Analytics": "Analytics",
        "Products": "Products",
        "Orders": "Orders",
        "Customers": "Customers",
        "Messages": "Messages",
        "Settings": "Settings",
        "Profile": "Profile",
        "Administrator": "Administrator",

        /* Dashboard */
        "Total Revenue": "Total Revenue",
        "Total Orders": "Total Orders",
        "Conversion Rate": "Conversion Rate",
        "Revenue Overview": "Revenue Overview",
        "Your revenue performance over the last 7 months.": "Your revenue performance over the last 7 months.",
        "Last 7 months": "Last 7 months",
        "Last 30 days": "Last 30 days",
        "Last 12 months": "Last 12 months",

        /* Activity */
        "Recent Activity": "Recent Activity",
        "Latest activity from your store.": "Latest activity from your store.",
        "View all": "View all",
        "New order received": "New order received",
        "New customer registered": "New customer registered",
        "Payment received": "Payment received",
        "Product stock updated": "Product stock updated",
        "Order completed": "Order completed",

        /* Orders */
        "Recent Orders": "Recent Orders",
        "Track your latest customer orders.": "Track your latest customer orders.",
        "View all orders →": "View all orders →",
        "Order": "Order",
        "Order ID": "Order ID",
        "Customer": "Customer",
        "Product": "Product",
        "Date": "Date",
        "Amount": "Amount",
        "Total": "Total",
        "Status": "Status",
        "All Orders": "All Orders",
        "Completed": "Completed",
        "Processing": "Processing",
        "Pending": "Pending",
        "Order Revenue": "Order Revenue",
        "Orders in progress": "Orders in progress",
        "Order Status": "Order Status",
        "Current order distribution.": "Current order distribution.",
        "Order Insights": "Order Insights",
        "Quick overview of sales activity.": "Quick overview of sales activity.",
        "Average Order Value": "Average Order Value",
        "Average amount per order": "Average amount per order",
        "Growth": "Growth",
        "Compared with last month": "Compared with last month",
        "Visitors who placed an order": "Visitors who placed an order",

        /* Products */
        "Product Catalog": "Product Catalog",
        "Manage your products and inventory.": "Manage your products and inventory.",
        "Manage your products, inventory and pricing.": "Manage your products, inventory and pricing.",
        "+ Add Product": "+ Add Product",
        "Category": "Category",
        "Price": "Price",
        "Stock": "Stock",
        "Inventory Status": "Inventory Status",
        "Current inventory overview.": "Current inventory overview.",
        "In Stock": "In Stock",
        "Low Stock": "Low Stock",
        "Out of Stock": "Out of Stock",
        "Total Products": "Total Products",
        "Products with healthy inventory": "Products with healthy inventory",
        "Products that need restocking": "Products that need restocking",
        "Products currently unavailable": "Products currently unavailable",
        "Categories": "Categories",
        "Products by category.": "Products by category.",
        "124 products": "124 products",
        "76 products": "76 products",
        "48 products": "48 products",

        /* Product names */
        "Wireless Headphones": "Wireless Headphones",
        "Smart Watch Pro": "Smart Watch Pro",
        "Premium Backpack": "Premium Backpack",
        "Mechanical Keyboard": "Mechanical Keyboard",
        "USB-C Hub": "USB-C Hub",

        /* Categories */
        "Electronics": "Electronics",
        "Accessories": "Accessories",
        "Home & Lifestyle": "Home & Lifestyle",

        /* Customers */
        "Manage your customers and their activity.": "Manage your customers and their activity.",
        "Total Customers": "Total Customers",
        "New Customers": "New Customers",
        "Active Customers": "Active Customers",
        "Average Spend": "Average Spend",
        "Customer Directory": "Customer Directory",
        "View and manage your customers.": "View and manage your customers.",
        "+ Add Customer": "+ Add Customer",
        "Email": "Email",
        "Orders": "Orders",
        "Total Spent": "Total Spent",
        "Joined": "Joined",
        "Active": "Active",
        "Inactive": "Inactive",

        /* Customer activity */
        "Customer Activity": "Customer Activity",
        "Recent customer engagement.": "Recent customer engagement.",
        "New customer": "New customer",
        "joined your store": "joined your store",
        "New purchase": "New purchase",
        "placed an order": "placed an order",
        "Customer verified": "Customer verified",
        "verified his email": "verified his email",
        "Returning customer": "Returning customer",
        "made another purchase": "made another purchase",

        /* Customer insights */
        "Customer Insights": "Customer Insights",
        "Important customer statistics.": "Important customer statistics.",
        "Returning Customers": "Returning Customers",
        "Customers who purchased before": "Customers who purchased before",
        "Average Customer Value": "Average Customer Value",
        "Average lifetime spending": "Average lifetime spending",
        "Average Orders": "Average Orders",
        "Orders per customer": "Orders per customer",

        /* Messages */
        "Stay connected with your customers and support team.": "Stay connected with your customers and support team.",
        "Total Messages": "Total Messages",
        "Unread": "Unread",
        "Resolved": "Resolved",
        "Avg. Response": "Avg. Response",
        "Customer Conversations": "Customer Conversations",
        "Recent messages from your customers.": "Recent messages from your customers.",
        "All Messages": "All Messages",
        "Support Overview": "Support Overview",
        "Current customer support activity.": "Current customer support activity.",
        "Open Conversations": "Open Conversations",
        "Customers waiting for a response": "Customers waiting for a response",
        "Resolved Today": "Resolved Today",
        "Conversations successfully resolved": "Conversations successfully resolved",
        "Response Rate": "Response Rate",
        "Messages answered within 24 hours": "Messages answered within 24 hours",
        "Quick Support": "Quick Support",
        "Useful support information.": "Useful support information.",
        "Fastest Response": "Fastest Response",
        "Best response time today": "Best response time today",
        "Customer Satisfaction": "Customer Satisfaction",
        "Average support rating": "Average support rating",
        "Messages Today": "Messages Today",
        "Total conversations today": "Total conversations today",

        /* Customer messages */
        "Hi! I wanted to ask about my recent order...": "Hi! I wanted to ask about my recent order...",
        "Is the Smart Watch Pro available in black?": "Is the Smart Watch Pro available in black?",
        "Thank you for the quick delivery!": "Thank you for the quick delivery!",
        "Can I change the delivery address?": "Can I change the delivery address?",
        "I received my package. Everything looks perfect.": "I received my package. Everything looks perfect.",
        "Could you help me with a refund request?": "Could you help me with a refund request?",

        /* Settings */
        "Manage your store preferences and account settings.": "Manage your store preferences and account settings.",
        "Store Settings": "Store Settings",
        "Configure your store information.": "Configure your store information.",
        "Store Name": "Store Name",
        "Store Email": "Store Email",
        "Currency": "Currency",
        "USD — US Dollar": "USD — US Dollar",
        "EUR — Euro": "EUR — Euro",
        "GBP — British Pound": "GBP — British Pound",
        "Timezone": "Timezone",

        /* Notifications */
        "Notifications": "Notifications",
        "Choose how you receive updates.": "Choose how you receive updates.",
        "New Orders": "New Orders",
        "Get notified when a new order is placed.": "Get notified when a new order is placed.",
        "New Customers": "New Customers",
        "Receive notifications when customers register.": "Receive notifications when customers register.",
        "Customer Messages": "Customer Messages",
        "Get notified when a customer sends a message.": "Get notified when a customer sends a message.",
        "Weekly Reports": "Weekly Reports",
        "Receive a weekly summary of store performance.": "Receive a weekly summary of store performance.",

        /* Security */
        "Security": "Security",
        "Manage your account security preferences.": "Manage your account security preferences.",
        "Two-Factor Authentication": "Two-Factor Authentication",
        "Add an extra layer of security to your account.": "Add an extra layer of security to your account.",
        "Login Alerts": "Login Alerts",
        "Receive an alert when a new login is detected.": "Receive an alert when a new login is detected.",
        "Session Protection": "Session Protection",
        "Automatically secure inactive sessions.": "Automatically secure inactive sessions.",

        /* Appearance */
        "Appearance": "Appearance",
        "Customize the dashboard experience.": "Customize the dashboard experience.",
        "Theme": "Theme",
        "Light": "Light",
        "Dark": "Dark",
        "System Default": "System Default",
        "Language": "Language",

        /* Languages */
        "English": "English",
        "French": "French",
        "Spanish": "Spanish",
        "German": "German",
        "Italian": "Italian",
        "Portuguese": "Portuguese",
        "Turkish": "Turkish",
        "Dutch": "Dutch",
        "Russian": "Russian",
        "Chinese": "Chinese",
        "Japanese": "Japanese",
        "Korean": "Korean",
        "Hindi": "Hindi",
        "Indonesian": "Indonesian",
        "Vietnamese": "Vietnamese",
        "Polish": "Polish",
        "Ukrainian": "Ukrainian",
        "Swedish": "Swedish",
        "Greek": "Greek",
        "Hebrew": "Hebrew",

        /* Profile */
        "Personal Information": "Personal Information",
        "Update your personal account information.": "Update your personal account information.",
        "First Name": "First Name",
        "Last Name": "Last Name",
        "Email Address": "Email Address",
        "Phone Number": "Phone Number",
        "Role": "Role",
        "Account Status": "Account Status",
        "Your current account information.": "Your current account information.",
        "Account Verified": "Account Verified",
        "Your account is fully verified.": "Your account is fully verified.",
        "Member Since": "Member Since",
        "January 2026": "January 2026",
        "Active and secure": "Active and secure",
        "Password": "Password",
        "Last changed 30 days ago.": "Last changed 30 days ago.",
        "Change": "Change",
        "Login Notifications": "Login Notifications",
        "Get notified about new account logins.": "Get notified about new account logins.",
        "Account Activity": "Account Activity",
        "Recent activity on your account.": "Recent activity on your account.",
        "Successful Login": "Successful Login",
        "Today at 08:42 AM": "Today at 08:42 AM",
        "Settings Updated": "Settings Updated",
        "Yesterday at 04:18 PM": "Yesterday at 04:18 PM",
        "Password Updated": "Password Updated",
        "30 days ago": "30 days ago",

        /* Footer */
        "Cancel": "Cancel",
        "Save Changes": "Save Changes",
        "Documentation": "Documentation",
        "Support": "Support",

        /* Time */
        "this month": "this month",
        "from last month": "from last month",
        "of orders": "of orders",
        "of customers": "of customers",
        "available": "available",
        "Needs attention": "Needs attention",
        "resolution rate": "resolution rate",
        "faster": "faster",

        /* Months */
        "Jan": "Jan",
        "Feb": "Feb",
        "Mar": "Mar",
        "Apr": "Apr",
        "May": "May",
        "Jun": "Jun",
        "Jul": "Jul"

    },


    /* =====================================================
       ARABIC
       ===================================================== */

    ar: {

        "Dashboard": "لوحة التحكم",
        "Welcome back! Here's what's happening today.": "مرحباً بعودتك! إليك ما يحدث اليوم.",
        "Analytics": "التحليلات",
        "Products": "المنتجات",
        "Orders": "الطلبات",
        "Customers": "العملاء",
        "Messages": "الرسائل",
        "Settings": "الإعدادات",
        "Profile": "الملف الشخصي",
        "Administrator": "مسؤول",

        "Total Revenue": "إجمالي الإيرادات",
        "Total Orders": "إجمالي الطلبات",
        "Conversion Rate": "معدل التحويل",
        "Revenue Overview": "نظرة عامة على الإيرادات",
        "Your revenue performance over the last 7 months.": "أداء إيراداتك خلال آخر 7 أشهر.",
        "Last 7 months": "آخر 7 أشهر",
        "Last 30 days": "آخر 30 يوماً",
        "Last 12 months": "آخر 12 شهراً",

        "Recent Activity": "النشاط الأخير",
        "Latest activity from your store.": "أحدث نشاط في متجرك.",
        "View all": "عرض الكل",
        "New order received": "تم استلام طلب جديد",
        "New customer registered": "تم تسجيل عميل جديد",
        "Payment received": "تم استلام دفعة",
        "Product stock updated": "تم تحديث مخزون المنتج",
        "Order completed": "اكتمل الطلب",

        "Recent Orders": "أحدث الطلبات",
        "Track your latest customer orders.": "تتبّع أحدث طلبات عملائك.",
        "View all orders →": "عرض جميع الطلبات →",
        "Order": "الطلب",
        "Order ID": "معرّف الطلب",
        "Customer": "العميل",
        "Product": "المنتج",
        "Date": "التاريخ",
        "Amount": "المبلغ",
        "Total": "الإجمالي",
        "Status": "الحالة",
        "All Orders": "كل الطلبات",
        "Completed": "مكتملة",
        "Processing": "قيد المعالجة",
        "Pending": "معلّقة",
        "Order Revenue": "إيرادات الطلبات",
        "Orders in progress": "طلبات قيد التنفيذ",
        "Order Status": "حالة الطلب",
        "Current order distribution.": "توزيع الطلبات الحالي.",
        "Order Insights": "إحصاءات الطلبات",
        "Quick overview of sales activity.": "نظرة سريعة على نشاط المبيعات.",
        "Average Order Value": "متوسط قيمة الطلب",
        "Average amount per order": "متوسط المبلغ لكل طلب",
        "Growth": "النمو",
        "Compared with last month": "مقارنة بالشهر الماضي",
        "Visitors who placed an order": "الزوار الذين أجروا طلباً",

        "Product Catalog": "كتالوج المنتجات",
        "Manage your products and inventory.": "إدارة منتجاتك ومخزونك.",
        "Manage your products, inventory and pricing.": "إدارة منتجاتك ومخزونك وأسعارك.",
        "+ Add Product": "+ إضافة منتج",
        "Category": "الفئة",
        "Price": "السعر",
        "Stock": "المخزون",
        "Inventory Status": "حالة المخزون",
        "Current inventory overview.": "نظرة عامة على المخزون الحالي.",
        "In Stock": "متوفر في المخزون",
        "Low Stock": "مخزون منخفض",
        "Out of Stock": "نفد المخزون",
        "Total Products": "إجمالي المنتجات",
        "Products with healthy inventory": "منتجات ذات مخزون جيد",
        "Products that need restocking": "منتجات تحتاج إلى إعادة تخزين",
        "Products currently unavailable": "منتجات غير متوفرة حالياً",
        "Categories": "الفئات",
        "Products by category.": "المنتجات حسب الفئة.",
        "124 products": "124 منتجاً",
        "76 products": "76 منتجاً",
        "48 products": "48 منتجاً",

        "Wireless Headphones": "سماعات لاسلكية",
        "Smart Watch Pro": "ساعة Smart Watch Pro",
        "Premium Backpack": "حقيبة ظهر فاخرة",
        "Mechanical Keyboard": "لوحة مفاتيح ميكانيكية",
        "USB-C Hub": "موزّع USB-C",

        "Electronics": "الإلكترونيات",
        "Accessories": "الإكسسوارات",
        "Home & Lifestyle": "المنزل ونمط الحياة",

        "Total Customers": "إجمالي العملاء",
        "New Customers": "عملاء جدد",
        "Active Customers": "العملاء النشطون",
        "Average Spend": "متوسط الإنفاق",
        "Customer Directory": "دليل العملاء",
        "View and manage your customers.": "عرض العملاء وإدارتهم.",
        "+ Add Customer": "+ إضافة عميل",
        "Email": "البريد الإلكتروني",
        "Total Spent": "إجمالي الإنفاق",
        "Joined": "تاريخ الانضمام",
        "Active": "نشط",
        "Inactive": "غير نشط",

        "Customer Activity": "نشاط العملاء",
        "Recent customer engagement.": "أحدث تفاعل مع العملاء.",
        "New customer": "عميل جديد",
        "joined your store": "انضم إلى متجرك",
        "New purchase": "عملية شراء جديدة",
        "placed an order": "أجرى طلباً",
        "Customer verified": "تم التحقق من العميل",
        "verified his email": "تحقق من بريده الإلكتروني",
        "Returning customer": "عميل عائد",
        "made another purchase": "أجرى عملية شراء أخرى",

        "Customer Insights": "إحصاءات العملاء",
        "Important customer statistics.": "إحصاءات مهمة عن العملاء.",
        "Returning Customers": "العملاء العائدون",
        "Customers who purchased before": "العملاء الذين اشتروا سابقاً",
        "Average Customer Value": "متوسط قيمة العميل",
        "Average lifetime spending": "متوسط الإنفاق طوال فترة العميل",
        "Average Orders": "متوسط الطلبات",
        "Orders per customer": "الطلبات لكل عميل",

        "Stay connected with your customers and support team.": "ابقَ على تواصل مع عملائك وفريق الدعم.",
        "Total Messages": "إجمالي الرسائل",
        "Unread": "غير مقروءة",
        "Resolved": "تم حلها",
        "Avg. Response": "متوسط الاستجابة",
        "Customer Conversations": "محادثات العملاء",
        "Recent messages from your customers.": "أحدث رسائل عملائك.",
        "All Messages": "كل الرسائل",
        "Support Overview": "نظرة عامة على الدعم",
        "Current customer support activity.": "نشاط دعم العملاء الحالي.",
        "Open Conversations": "المحادثات المفتوحة",
        "Customers waiting for a response": "عملاء ينتظرون الرد",
        "Resolved Today": "تم حلها اليوم",
        "Conversations successfully resolved": "المحادثات التي تم حلها بنجاح",
        "Response Rate": "معدل الرد",
        "Messages answered within 24 hours": "الرسائل التي تم الرد عليها خلال 24 ساعة",
        "Quick Support": "الدعم السريع",
        "Useful support information.": "معلومات مفيدة للدعم.",
        "Fastest Response": "أسرع استجابة",
        "Best response time today": "أفضل وقت استجابة اليوم",
        "Customer Satisfaction": "رضا العملاء",
        "Average support rating": "متوسط تقييم الدعم",
        "Messages Today": "رسائل اليوم",
        "Total conversations today": "إجمالي المحادثات اليوم",

        "Hi! I wanted to ask about my recent order...": "مرحباً! أردت أن أسأل عن طلبي الأخير...",
        "Is the Smart Watch Pro available in black?": "هل ساعة Smart Watch Pro متوفرة باللون الأسود؟",
        "Thank you for the quick delivery!": "شكراً على التوصيل السريع!",
        "Can I change the delivery address?": "هل يمكنني تغيير عنوان التوصيل؟",
        "I received my package. Everything looks perfect.": "استلمت طردي. كل شيء يبدو رائعاً.",
        "Could you help me with a refund request?": "هل يمكنك مساعدتي في طلب استرداد المبلغ؟",

        "Store Settings": "إعدادات المتجر",
        "Configure your store information.": "تهيئة معلومات متجرك.",
        "Store Name": "اسم المتجر",
        "Store Email": "بريد المتجر",
        "Currency": "العملة",
        "USD — US Dollar": "USD — الدولار الأمريكي",
        "EUR — Euro": "EUR — اليورو",
        "GBP — British Pound": "GBP — الجنيه الإسترليني",
        "Timezone": "المنطقة الزمنية",

        "Notifications": "الإشعارات",
        "Choose how you receive updates.": "اختر طريقة تلقي التحديثات.",
        "New Orders": "طلبات جديدة",
        "Get notified when a new order is placed.": "تلقي إشعار عند تسجيل طلب جديد.",
        "New Customers": "عملاء جدد",
        "Receive notifications when customers register.": "تلقي إشعار عند تسجيل العملاء.",
        "Customer Messages": "رسائل العملاء",
        "Get notified when a customer sends a message.": "تلقي إشعار عند إرسال عميل رسالة.",
        "Weekly Reports": "التقارير الأسبوعية",
        "Receive a weekly summary of store performance.": "تلقي ملخص أسبوعي لأداء المتجر.",

        "Security": "الأمان",
        "Manage your account security preferences.": "إدارة تفضيلات أمان حسابك.",
        "Two-Factor Authentication": "المصادقة الثنائية",
        "Add an extra layer of security to your account.": "إضافة طبقة أمان إضافية إلى حسابك.",
        "Login Alerts": "تنبيهات تسجيل الدخول",
        "Receive an alert when a new login is detected.": "تلقي تنبيه عند اكتشاف تسجيل دخول جديد.",
        "Session Protection": "حماية الجلسة",
        "Automatically secure inactive sessions.": "تأمين الجلسات غير النشطة تلقائياً.",

        "Appearance": "المظهر",
        "Customize the dashboard experience.": "تخصيص تجربة لوحة التحكم.",
        "Theme": "السمة",
        "Light": "فاتح",
        "Dark": "داكن",
        "System Default": "إعدادات النظام",
        "Language": "اللغة",

        "English": "الإنجليزية",
        "French": "الفرنسية",
        "Spanish": "الإسبانية",
        "German": "الألمانية",
        "Italian": "الإيطالية",
        "Portuguese": "البرتغالية",
        "Turkish": "التركية",
        "Dutch": "الهولندية",
        "Russian": "الروسية",
        "Chinese": "الصينية",
        "Japanese": "اليابانية",
        "Korean": "الكورية",
        "Hindi": "الهندية",
        "Indonesian": "الإندونيسية",
        "Vietnamese": "الفيتنامية",
        "Polish": "البولندية",
        "Ukrainian": "الأوكرانية",
        "Swedish": "السويدية",
        "Greek": "اليونانية",
        "Hebrew": "العبرية",

        "Personal Information": "المعلومات الشخصية",
        "Update your personal account information.": "تحديث معلومات حسابك الشخصية.",
        "First Name": "الاسم الأول",
        "Last Name": "اسم العائلة",
        "Email Address": "عنوان البريد الإلكتروني",
        "Phone Number": "رقم الهاتف",
        "Role": "الدور",
        "Account Status": "حالة الحساب",
        "Your current account information.": "معلومات حسابك الحالية.",
        "Account Verified": "الحساب موثّق",
        "Your account is fully verified.": "حسابك موثّق بالكامل.",
        "Member Since": "عضو منذ",
        "January 2026": "يناير 2026",
        "Active and secure": "نشط وآمن",
        "Password": "كلمة المرور",
        "Last changed 30 days ago.": "تم تغييرها قبل 30 يوماً.",
        "Change": "تغيير",
        "Login Notifications": "إشعارات تسجيل الدخول",
        "Get notified about new account logins.": "تلقي إشعار عند تسجيل دخول جديد إلى الحساب.",
        "Account Activity": "نشاط الحساب",
        "Recent activity on your account.": "أحدث نشاط على حسابك.",
        "Successful Login": "تسجيل دخول ناجح",
        "Today at 08:42 AM": "اليوم الساعة 08:42 صباحاً",
        "Settings Updated": "تم تحديث الإعدادات",
        "Yesterday at 04:18 PM": "أمس الساعة 04:18 مساءً",
        "Password Updated": "تم تحديث كلمة المرور",
        "30 days ago": "قبل 30 يوماً",

        "Cancel": "إلغاء",
        "Save Changes": "حفظ التغييرات",
        "Documentation": "التوثيق",
        "Support": "الدعم",

        "this month": "هذا الشهر",
        "from last month": "مقارنة بالشهر الماضي",
        "of orders": "من الطلبات",
        "of customers": "من العملاء",
        "available": "متاح",
        "Needs attention": "يحتاج إلى انتباه",
        "resolution rate": "معدل الحل",
        "faster": "أسرع",

        "Jan": "يناير",
        "Feb": "فبراير",
        "Mar": "مارس",
        "Apr": "أبريل",
        "May": "مايو",
        "Jun": "يونيو",
        "Jul": "يوليو"

    }

};


/* =========================================================
   24. TRANSLATION FALLBACK SYSTEM
   ========================================================= */

/**
 * Return the translated phrase.
 *
 * Priority:
 * 1. Requested language
 * 2. English
 * 3. Original text
 */
function translateText(
    phrase,
    languageCode = getCurrentLanguage()
) {

    if (
        typeof phrase !== "string"
    ) {

        return phrase;

    }

    const language =
        isLanguageSupported(languageCode)
            ? languageCode
            : NEXORA.defaults.language;

    const dictionary =
        TRANSLATIONS[language];

    if (
        dictionary &&
        Object.prototype.hasOwnProperty.call(
            dictionary,
            phrase
        )
    ) {

        return dictionary[phrase];

    }

    const englishDictionary =
        TRANSLATIONS.en;

    if (
        englishDictionary &&
        Object.prototype.hasOwnProperty.call(
            englishDictionary,
            phrase
        )
    ) {

        return englishDictionary[phrase];

    }

    return phrase;

}


/* =========================================================
   25. TRANSLATION KEY NORMALIZATION
   ========================================================= */

function normalizeTranslationKey(
    value
) {

    if (
        typeof value !== "string"
    ) {

        return "";

    }

    return value
        .replace(/\s+/g, " ")
        .trim();

}


/* =========================================================
   26. TRANSLATION LOOKUP
   ========================================================= */

function t(
    phrase,
    languageCode = getCurrentLanguage()
) {

    const key =
        normalizeTranslationKey(
            phrase
        );

    if (!key) {
        return phrase;
    }

    return translateText(
        key,
        languageCode
    );

}


/* =========================================================
   27. DICTIONARY ACCESS
   ========================================================= */

function getDictionary(
    languageCode = getCurrentLanguage()
) {

    if (
        TRANSLATIONS[languageCode]
    ) {

        return TRANSLATIONS[
            languageCode
        ];

    }

    return TRANSLATIONS.en;

}


/* =========================================================
   28. DICTIONARY STATISTICS
   ========================================================= */

function getTranslationStats() {

    const stats = {};

    LANGUAGES.forEach(
        language => {

            const dictionary =
                TRANSLATIONS[
                    language.code
                ];

            stats[
                language.code
            ] = dictionary
                ? Object.keys(
                    dictionary
                ).length
                : 0;

        }
    );

    return stats;

}


/* =========================================================
   29. MISSING TRANSLATION DETECTOR
   ========================================================= */

function getMissingTranslations(
    languageCode
) {

    if (
        !isLanguageSupported(
            languageCode
        )
    ) {

        return [];

    }

    const english =
        TRANSLATIONS.en || {};

    const target =
        TRANSLATIONS[
            languageCode
        ] || {};

    return Object.keys(
        english
    ).filter(
        key =>
            !Object.prototype.hasOwnProperty.call(
                target,
                key
            )
    );

}


/* =========================================================
   30. TRANSLATION COMPLETENESS
   ========================================================= */

function getTranslationCompleteness(
    languageCode
) {

    const englishCount =
        Object.keys(
            TRANSLATIONS.en || {}
        ).length;

    if (
        englishCount === 0
    ) {

        return 100;

    }

    const translatedCount =
        Object.keys(
            TRANSLATIONS[
                languageCode
            ] || {}
        ).length;

    return Math.min(
        100,
        Math.round(
            (
                translatedCount /
                englishCount
            ) * 100
        )
    );

}


/* =========================================================
   31. TRANSLATABLE DOM ATTRIBUTES
   ========================================================= */

const TRANSLATABLE_ATTRIBUTES = [

    "placeholder",
    "title",
    "aria-label",
    "aria-description",
    "data-tooltip",
    "alt"

];


/* =========================================================
   32. TEXT NODE TRANSLATION
   ========================================================= */

function translateTextNode(
    textNode,
    languageCode
) {

    if (
        !textNode ||
        textNode.nodeType !==
            Node.TEXT_NODE
    ) {

        return;

    }

    const original =
        textNode.nodeValue;

    if (
        !original ||
        !original.trim()
    ) {

        return;

    }

    /*
     * Preserve whitespace around
     * the actual phrase.
     */
    const leading =
        original.match(
            /^\s*/
        )?.[0] || "";

    const trailing =
        original.match(
                   /\s*$/
        )?.[0] || "";


    /*
     * Extract the actual visible phrase
     * without surrounding whitespace.
     */
    const phrase =
        original.trim();


    /*
     * Translate the phrase.
     */
    const translated =
        translateText(
            phrase,
            languageCode
        );


    /*
     * If there is no translation,
     * preserve the original content.
     */
    if (
        typeof translated !== "string" ||
        translated === phrase
    ) {

        return;

    }


    /*
     * Preserve the original whitespace
     * around the translated phrase.
     */
    textNode.nodeValue =
        leading +
        translated +
        trailing;

}


/* =========================================================
   33. ELEMENT ATTRIBUTE TRANSLATION
   ========================================================= */

/**
 * Translate supported HTML attributes.
 *
 * Supported attributes are defined inside
 * TRANSLATABLE_ATTRIBUTES.
 */
function translateElementAttributes(
    element,
    languageCode
) {

    if (
        !element ||
        element.nodeType !== Node.ELEMENT_NODE
    ) {

        return;

    }


    TRANSLATABLE_ATTRIBUTES.forEach(
        attribute => {

            if (
                !element.hasAttribute(
                    attribute
                )
            ) {

                return;

            }


            const original =
                element.getAttribute(
                    attribute
                );


            if (
                !original ||
                !original.trim()
            ) {

                return;

            }


            const translated =
                translateText(
                    original.trim(),
                    languageCode
                );


            /*
             * Only update the attribute
             * when an actual translation exists.
             */
            if (
                typeof translated === "string" &&
                translated !== original.trim()
            ) {

                element.setAttribute(
                    attribute,
                    translated
                );

            }

        }
    );

}


/* =========================================================
   34. DOM TRANSLATION ENGINE
   ========================================================= */

/**
 * Translate all visible text and supported
 * attributes inside a specific root element.
 *
 * The function intentionally skips elements
 * where translating their contents could
 * interfere with application logic.
 */
function translateDOM(
    root = document.body,
    languageCode = getCurrentLanguage()
) {

    if (
        !root ||
        !document.body
    ) {

        return;

    }


    if (
        !isLanguageSupported(
            languageCode
        )
    ) {

        languageCode =
            NEXORA.defaults.language;

    }


    /*
     * Elements that should never be translated
     * automatically.
     */
    const ignoredSelectors = [

        "script",
        "style",
        "noscript",
        "template",
        "svg",
        "code",
        "pre",
        "textarea"

    ];


    /*
     * Translate attributes first.
     */
    if (
        root.nodeType === Node.ELEMENT_NODE
    ) {

        translateElementAttributes(
            root,
            languageCode
        );

    }


    /*
     * Translate attributes on descendants.
     */
    const elements =
        root.querySelectorAll
            ? root.querySelectorAll("*")
            : [];


    elements.forEach(
        element => {

            if (
                ignoredSelectors.some(
                    selector =>
                        element.matches(
                            selector
                        )
                )
            ) {

                return;

            }


            translateElementAttributes(
                element,
                languageCode
            );

        }
    );


    /*
     * Walk through every text node.
     */
    const walker =
        document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {

                acceptNode(node) {

                    const parent =
                        node.parentElement;


                    if (
                        !parent
                    ) {

                        return NodeFilter.FILTER_REJECT;

                    }


                    if (
                        ignoredSelectors.some(
                            selector =>
                                parent.closest(
                                    selector
                                )
                        )
                    ) {

                        return NodeFilter.FILTER_REJECT;

                    }


                    /*
                     * Ignore empty text nodes.
                     */
                    if (
                        !node.nodeValue ||
                        !node.nodeValue.trim()
                    ) {

                        return NodeFilter.FILTER_REJECT;

                    }


                    return NodeFilter.FILTER_ACCEPT;

                }

            }
        );


    const textNodes = [];


    let currentNode;


    while (
        (
            currentNode =
                walker.nextNode()
        )
    ) {

        textNodes.push(
            currentNode
        );

    }


    textNodes.forEach(
        textNode => {

            translateTextNode(
                textNode,
                languageCode
            );

        }
    );

}


/* =========================================================
   35. DATA-I18N SUPPORT
   ========================================================= */

/**
 * Translate elements using:
 *
 * data-i18n="Translation Key"
 *
 * This allows HTML to explicitly define
 * which dictionary key should be used.
 */
function translateDataI18n(
    root = document.body,
    languageCode = getCurrentLanguage()
) {

    if (
        !root ||
        !root.querySelectorAll
    ) {

        return;

    }


    const elements =
        root.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(
        element => {

            const key =
                normalizeTranslationKey(
                    element.getAttribute(
                        "data-i18n"
                    )
                );


            if (!key) {

                return;

            }


            const translated =
                translateText(
                    key,
                    languageCode
                );


            if (
                typeof translated !== "string"
            ) {

                return;

            }


            /*
             * data-i18n-html can optionally
             * be used when the element is
             * intentionally designed to contain
             * HTML markup.
             */
            if (
                element.hasAttribute(
                    "data-i18n-html"
                )
            ) {

                element.innerHTML =
                    translated;

            } else {

                element.textContent =
                    translated;

            }

        }
    );

}


/* =========================================================
   36. DATA-I18N ATTRIBUTE SUPPORT
   ========================================================= */

/**
 * Translate an attribute using:
 *
 * data-i18n-placeholder="Placeholder"
 * data-i18n-title="Tooltip"
 * data-i18n-aria-label="Label"
 *
 * Any attribute can be used by following
 * the data-i18n-{attribute} pattern.
 */
function translateDataI18nAttributes(
    root = document.body,
    languageCode = getCurrentLanguage()
) {

    if (
        !root ||
        !root.querySelectorAll
    ) {

        return;

    }


    const elements =
        root.querySelectorAll(
            "*"
        );


    elements.forEach(
        element => {

            Array.from(
                element.attributes
            ).forEach(
                attribute => {

                    const name =
                        attribute.name;


                    if (
                        !name.startsWith(
                            "data-i18n-"
                        )
                    ) {

                        return;

                    }


                    if (
                        name === "data-i18n"
                    ) {

                        return;

                    }


                    const targetAttribute =
                        name.substring(
                            "data-i18n-".length
                        );


                    if (
                        !targetAttribute
                    ) {

                        return;

                    }


                    const key =
                        normalizeTranslationKey(
                            attribute.value
                        );


                    if (!key) {

                        return;

                    }


                    const translated =
                        translateText(
                            key,
                            languageCode
                        );


                    if (
                        typeof translated !==
                            "string"
                    ) {

                        return;

                    }


                    element.setAttribute(
                        targetAttribute,
                        translated
                    );

                }
            );

        }
    );

}


/* =========================================================
   37. COMPLETE TRANSLATION PASS
   ========================================================= */

/**
 * Runs every translation mechanism.
 *
 * This is the main function that should be
 * called whenever the active language changes.
 */
function applyTranslations(
    languageCode = getCurrentLanguage()
) {

    if (
        !document.body
    ) {

        return;

    }


    if (
        !isLanguageSupported(
            languageCode
        )
    ) {

        languageCode =
            NEXORA.defaults.language;

    }


    /*
     * 1. Explicit data-i18n keys.
     */
    translateDataI18n(
        document.body,
        languageCode
    );


    /*
     * 2. Explicit translated attributes.
     */
    translateDataI18nAttributes(
        document.body,
        languageCode
    );


    /*
     * 3. Automatic DOM translation.
     */
    translateDOM(
        document.body,
        languageCode
    );


    /*
     * 4. Update document language.
     */
    document.documentElement.setAttribute(
        "lang",
        languageCode
    );


    /*
     * 5. Arabic requires RTL.
     */
    if (
        languageCode === "ar"
    ) {

        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );

    } else {

        document.documentElement.setAttribute(
            "dir",
            "ltr"
        );

    }


    /*
     * 6. Store active language.
     */
    if (
        NEXORA.state
    ) {

        NEXORA.state.language =
            languageCode;

    }

}


/* =========================================================
   38. TRANSLATION OBSERVER
   ========================================================= */

/**
 * Watches dynamically generated dashboard
 * content and translates newly inserted nodes.
 */
let translationObserver = null;


function initializeTranslationObserver() {

    if (
        translationObserver
    ) {

        translationObserver.disconnect();

        translationObserver = null;

    }


    if (
        typeof MutationObserver ===
            "undefined" ||
        !document.body
    ) {

        return;

    }


    translationObserver =
        new MutationObserver(
            mutations => {

                const languageCode =
                    getCurrentLanguage();


                mutations.forEach(
                    mutation => {

                        mutation.addedNodes.forEach(
                            node => {

                                if (
                                    node.nodeType !==
                                        Node.ELEMENT_NODE &&
                                    node.nodeType !==
                                        Node.TEXT_NODE
                                ) {

                                    return;

                                }


                                if (
                                    node.nodeType ===
                                        Node.TEXT_NODE
                                ) {

                                    translateTextNode(
                                        node,
                                        languageCode
                                    );

                                    return;

                                }


                                translateDataI18n(
                                    node,
                                    languageCode
                                );


                                translateDataI18nAttributes(
                                    node,
                                    languageCode
                                );


                                translateDOM(
                                    node,
                                    languageCode
                                );

                            }
                        );

                    }
                );

            }
        );


    translationObserver.observe(
        document.body,
        {

            childList: true,
            subtree: true

        }
    );

}


/* =========================================================
   39. LANGUAGE SELECTOR SYNCHRONIZATION
   ========================================================= */

/**
 * Synchronize every language selector
 * with the current application language.
 */
function synchronizeLanguageSelectors(
    languageCode = getCurrentLanguage()
) {

    const selectors =
        document.querySelectorAll(
            "[data-language-selector], #languageSelector, .language-selector"
        );


    selectors.forEach(
        selector => {

            if (
                selector.tagName ===
                    "SELECT"
            ) {

                selector.value =
                    languageCode;

            }


            selector.setAttribute(
                "data-active-language",
                languageCode
            );

        }
    );

}


/* =========================================================
   40. LANGUAGE CHANGE EVENT
   ========================================================= */

/**
 * Central language-change handler.
 */
function handleLanguageChange(
    languageCode
) {

    if (
        !isLanguageSupported(
            languageCode
        )
    ) {

        return false;

    }


    /*
     * Update application state.
     */
    if (
        NEXORA.state
    ) {

        NEXORA.state.language =
            languageCode;

    }


    /*
     * Persist language preference.
     */
    try {

        localStorage.setItem(
            "nexora_language",
            languageCode
        );

    } catch (
        error
    ) {

        console.warn(
            "NEXORA: Unable to save language preference.",
            error
        );

    }


    /*
     * Apply translations.
     */
    applyTranslations(
        languageCode
    );


    /*
     * Synchronize selectors.
     */
    synchronizeLanguageSelectors(
        languageCode
    );


    /*
     * Dispatch a global event.
     */
    document.dispatchEvent(
        new CustomEvent(
            "nexora:languagechange",
            {

                detail: {

                    language:
                        languageCode

                }

            }
        )
    );


    return true;

}


/* =========================================================
   41. LANGUAGE SELECTOR INITIALIZATION
   ========================================================= */

function initializeLanguageSelectors() {

    const selectors =
        document.querySelectorAll(
            "[data-language-selector], #languageSelector, .language-selector"
        );


    selectors.forEach(
        selector => {

            if (
                selector.dataset
                    .languageBound === "true"
            ) {

                return;

            }


            selector.dataset
                .languageBound = "true";


            selector.addEventListener(
                "change",
                event => {

                    const value =
                        event.target.value;


                    handleLanguageChange(
                        value
                    );

                }
            );

        }
    );

}


/* =========================================================
   42. LANGUAGE INITIALIZATION
   ========================================================= */

function initializeTranslations() {

    let language =
        getCurrentLanguage();


    /*
     * Recover persisted language.
     */
    try {

        const storedLanguage =
            localStorage.getItem(
                "nexora_language"
            );


        if (
            storedLanguage &&
            isLanguageSupported(
                storedLanguage
            )
        ) {

            language =
                storedLanguage;

        }

    } catch (
        error
    ) {

        console.warn(
            "NEXORA: Unable to read saved language.",
            error
        );

    }


    if (
        NEXORA.state
    ) {

        NEXORA.state.language =
            language;

    }


    applyTranslations(
        language
    );


    synchronizeLanguageSelectors(
        language
    );


    initializeLanguageSelectors();


    initializeTranslationObserver();

}


/* =========================================================
   43. TRANSLATION API
   ========================================================= */

/**
 * Public translation API.
 *
 * Other NEXORA modules can use:
 *
 * NEXORA.i18n.t("Dashboard")
 * NEXORA.i18n.setLanguage("ar")
 * NEXORA.i18n.getLanguage()
 */
const NEXORA_I18N = {

    t(
        phrase,
        languageCode
    ) {

        return translateText(
            phrase,
            languageCode
        );

    },


    translate(
        phrase,
        languageCode
    ) {

        return translateText(
            phrase,
            languageCode
        );

    },


    setLanguage(
        languageCode
    ) {

        return handleLanguageChange(
            languageCode
        );

    },


    getLanguage() {

        return getCurrentLanguage();

    },


    getDictionary(
        languageCode
    ) {

        return getDictionary(
            languageCode
        );

    },


    getStats() {

        return getTranslationStats();

    },


    getMissing(
        languageCode
    ) {

        return getMissingTranslations(
            languageCode
        );

    },


    getCompleteness(
        languageCode
    ) {

        return getTranslationCompleteness(
            languageCode
        );

    },


    apply(
        languageCode
    ) {

        applyTranslations(
            languageCode ||
            getCurrentLanguage()
        );

    }

};


/* =========================================================
   44. EXPOSE I18N ENGINE
   ========================================================= */

if (
    typeof window !== "undefined"
) {

    window.NEXORA_I18N =
        NEXORA_I18N;

}


/* =========================================================
   45. TRANSLATION READY EVENT
   ========================================================= */

function dispatchTranslationReady() {

    document.dispatchEvent(
        new CustomEvent(
            "nexora:i18nready",
            {

                detail: {

                    language:
                        getCurrentLanguage(),

                    statistics:
                        getTranslationStats()

                }

            }
        )
    );

}


/* =========================================================
   46. AUTO INITIALIZATION
   ========================================================= */

function bootTranslationEngine() {

    if (
        document.readyState ===
            "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            () => {

                initializeTranslations();

                dispatchTranslationReady();

            },
            {
                once: true
            }
        );

    } else {

        initializeTranslations();

        dispatchTranslationReady();

    }

}


bootTranslationEngine();


/* =========================================================
   END OF TRANSLATION ENGINE
   ========================================================= */
