/* =========================================================
   NEXORA — MASTER SCRIPT.JS
   VERSION 2.0
   =========================================================
   • 21 Languages
   • Google Translate Integration
   • Manual Language Selector
   • "文" Language Button
   • Settings Language Synchronization
   • LocalStorage Language Memory
   • RTL / LTR Support
   • Automatic Page Translation
   • Dynamic Content Translation
   • Mobile Sidebar
   • Notifications Panel
   • Theme System
   • Cross-Page Language Persistence
   ========================================================= */


/* =========================================================
   01. NEXORA CONFIGURATION
   ========================================================= */

const NEXORA = {

    name: "NEXORA",

    version: "2.0.0",

    defaults: {

        language: "en",

        theme: "system"

    },

    storage: {

        language: "nexora_language",

        theme: "nexora_theme"

    },

    translation: {

        provider: "google",

        googleElementId: "google_translate_element",

        cookieName: "googtrans"

    }

};


/* =========================================================
   02. SUPPORTED LANGUAGES
   ========================================================= */

const LANGUAGES = [

    {
        code: "en",
        googleCode: "en",
        name: "English",
        nativeName: "English",
        direction: "ltr"
    },

    {
        code: "ar",
        googleCode: "ar",
        name: "Arabic",
        nativeName: "العربية",
        direction: "rtl"
    },

    {
        code: "fr",
        googleCode: "fr",
        name: "French",
        nativeName: "Français",
        direction: "ltr"
    },

    {
        code: "es",
        googleCode: "es",
        name: "Spanish",
        nativeName: "Español",
        direction: "ltr"
    },

    {
        code: "de",
        googleCode: "de",
        name: "German",
        nativeName: "Deutsch",
        direction: "ltr"
    },

    {
        code: "it",
        googleCode: "it",
        name: "Italian",
        nativeName: "Italiano",
        direction: "ltr"
    },

    {
        code: "pt",
        googleCode: "pt",
        name: "Portuguese",
        nativeName: "Português",
        direction: "ltr"
    },

    {
        code: "ru",
        googleCode: "ru",
        name: "Russian",
        nativeName: "Русский",
        direction: "ltr"
    },

    {
        code: "ja",
        googleCode: "ja",
        name: "Japanese",
        nativeName: "日本語",
        direction: "ltr"
    },

    {
        code: "ko",
        googleCode: "ko",
        name: "Korean",
        nativeName: "한국어",
        direction: "ltr"
    },

    {
        code: "zh-CN",
        googleCode: "zh-CN",
        name: "Chinese",
        nativeName: "简体中文",
        direction: "ltr"
    },

    {
        code: "tr",
        googleCode: "tr",
        name: "Turkish",
        nativeName: "Türkçe",
        direction: "ltr"
    },

    {
        code: "nl",
        googleCode: "nl",
        name: "Dutch",
        nativeName: "Nederlands",
        direction: "ltr"
    },

    {
        code: "pl",
        googleCode: "pl",
        name: "Polish",
        nativeName: "Polski",
        direction: "ltr"
    },

    {
        code: "uk",
        googleCode: "uk",
        name: "Ukrainian",
        nativeName: "Українська",
        direction: "ltr"
    },

    {
        code: "sv",
        googleCode: "sv",
        name: "Swedish",
        nativeName: "Svenska",
        direction: "ltr"
    },

    {
        code: "el",
        googleCode: "el",
        name: "Greek",
        nativeName: "Ελληνικά",
        direction: "ltr"
    },

    {
        code: "he",
        googleCode: "iw",
        name: "Hebrew",
        nativeName: "עברית",
        direction: "rtl"
    },

    {
        code: "hi",
        googleCode: "hi",
        name: "Hindi",
        nativeName: "हिन्दी",
        direction: "ltr"
    },

    {
        code: "id",
        googleCode: "id",
        name: "Indonesian",
        nativeName: "Bahasa Indonesia",
        direction: "ltr"
    },

    {
        code: "vi",
        googleCode: "vi",
        name: "Vietnamese",
        nativeName: "Tiếng Việt",
        direction: "ltr"
    }

];


/* =========================================================
   03. GLOBAL STATE
   ========================================================= */

const NEXORA_STATE = {

    initialized: false,

    languageMenuOpen: false,

    notificationOpen: false,

    sidebarOpen: false,

    currentLanguage: "en",

    currentTheme: "system",

    googleReady: false

};


/* =========================================================
   04. LANGUAGE HELPERS
   ========================================================= */

function isLanguageSupported(languageCode) {

    return LANGUAGES.some(

        language =>

            language.code === languageCode

    );

}


/* ---------------------------------------------------------
   Get language object
   --------------------------------------------------------- */

function getLanguage(languageCode) {

    return LANGUAGES.find(

        language =>

            language.code === languageCode

    ) || LANGUAGES[0];

}


/* ---------------------------------------------------------
   Get current language
   --------------------------------------------------------- */

function getCurrentLanguage() {

    const savedLanguage =

        localStorage.getItem(

            NEXORA.storage.language

        );


    if (

        savedLanguage &&

        isLanguageSupported(savedLanguage)

    ) {

        return savedLanguage;

    }


    return NEXORA.defaults.language;

}


/* ---------------------------------------------------------
   Get current language object
   --------------------------------------------------------- */

function getCurrentLanguageObject() {

    return getLanguage(

        getCurrentLanguage()

    );

}


/* =========================================================
   05. LANGUAGE STORAGE
   ========================================================= */

function saveLanguage(languageCode) {

    if (

        !isLanguageSupported(languageCode)

    ) {

        languageCode =

            NEXORA.defaults.language;

    }


    localStorage.setItem(

        NEXORA.storage.language,

        languageCode

    );


    NEXORA_STATE.currentLanguage =

        languageCode;

}


/* ---------------------------------------------------------
   Remove saved language
   --------------------------------------------------------- */

function clearSavedLanguage() {

    localStorage.removeItem(

        NEXORA.storage.language

    );

}


/* =========================================================
   06. RTL / LTR SYSTEM
   ========================================================= */

function applyLanguageDirection(languageCode) {

    const language =

        getLanguage(languageCode);


    document.documentElement.lang =

        language.code;


    document.documentElement.dir =

        language.direction;


    document.body.setAttribute(

        "data-language",

        language.code

    );


    document.body.setAttribute(

        "dir",

        language.direction

    );


    if (

        language.direction === "rtl"

    ) {

        document.body.classList.add(

            "rtl"

        );

        document.body.classList.remove(

            "ltr"

        );

    } else {

        document.body.classList.add(

            "ltr"

        );

        document.body.classList.remove(

            "rtl"

        );

    }

}


/* =========================================================
   07. LANGUAGE MENU CREATION
   ========================================================= */

function createLanguageMenu() {

    const existingMenu =

        document.getElementById(

            "nexoraLanguageMenu"

        );


    if (existingMenu) {

        existingMenu.remove();

    }


    const menu =

        document.createElement(

            "div"

        );


    menu.id =

        "nexoraLanguageMenu";


    menu.className =

        "nexora-language-menu";


    menu.setAttribute(

        "role",

        "menu"

    );


    LANGUAGES.forEach(

        language => {

            const button =

                document.createElement(

                    "button"

                );


            button.type = "button";


            button.className =

                "nexora-language-option";


            button.dataset.language =

                language.code;


            button.setAttribute(

                "role",

                "menuitem"

            );


            button.innerHTML = `

                <span class="language-native">

                    ${escapeHTML(language.nativeName)}

                </span>

                <span class="language-name">

                    ${escapeHTML(language.name)}

                </span>

            `;


            button.addEventListener(

                "click",

                () => {

                    selectLanguage(

                        language.code

                    );

                }

            );


            menu.appendChild(button);

        }

    );


    document.body.appendChild(menu);


    positionLanguageMenu(menu);


    updateLanguageMenuState();

}


/* =========================================================
   08. LANGUAGE BUTTON DETECTION
   ========================================================= */

function findLanguageButtons() {

    const buttons = [];


    const selectors = [

        "#languageButton",

        "#languageToggle",

        ".language-button",

        ".language-toggle",

        "[data-language-button]",

        "[data-language-selector]"

    ];


    selectors.forEach(

        selector => {

            document

                .querySelectorAll(selector)

                .forEach(button => {

                    if (

                        !buttons.includes(button)

                    ) {

                        buttons.push(button);

                    }

                });

        }

    );


    return buttons;

}


/* =========================================================
   09. CREATE DEFAULT 文 BUTTON
   ========================================================= */

function createDefaultLanguageButton() {

    const existingButtons =

        findLanguageButtons();


    if (

        existingButtons.length > 0

    ) {

        return existingButtons[0];

    }


    const topbar =

        document.querySelector(

            ".header-right"

        );


    if (!topbar) {

        return null;

    }


    const button =

        document.createElement(

            "button"

        );


    button.type = "button";


    button.id =

        "languageButton";


    button.className =

        "icon-button language-button";


    button.setAttribute(

        "aria-label",

        "Language"

    );


    button.setAttribute(

        "title",

        "Language"

    );


    button.textContent = "文";


    topbar.insertBefore(

        button,

        topbar.firstChild

    );


    return button;

}


/* =========================================================
   10. LANGUAGE MENU TOGGLE
   ========================================================= */

function toggleLanguageMenu() {

    const menu =

        document.getElementById(

            "nexoraLanguageMenu"

        );


    if (!menu) {

        return;

    }


    NEXORA_STATE.languageMenuOpen =

        !NEXORA_STATE.languageMenuOpen;


    if (

        NEXORA_STATE.languageMenuOpen

    ) {

        menu.classList.add("open");

    } else {

        menu.classList.remove("open");

    }

}


/* =========================================================
   11. CLOSE LANGUAGE MENU
   ========================================================= */

function closeLanguageMenu() {

    const menu =

        document.getElementById(

            "nexoraLanguageMenu"

        );


    if (!menu) {

        return;

    }


    menu.classList.remove("open");


    NEXORA_STATE.languageMenuOpen =

        false;

}


/* =========================================================
   12. POSITION LANGUAGE MENU
   ========================================================= */

function positionLanguageMenu(menu) {

    if (!menu) {

        return;

    }


    menu.style.position = "fixed";


    menu.style.zIndex = "99999";

}


/* =========================================================
   13. UPDATE LANGUAGE MENU
   ========================================================= */

function updateLanguageMenuState() {

    const currentLanguage =

        getCurrentLanguage();


    document

        .querySelectorAll(

            ".nexora-language-option"

        )

        .forEach(

            option => {

                const isCurrent =

                    option.dataset.language ===

                    currentLanguage;


                option.classList.toggle(

                    "active",

                    isCurrent

                );

                option.setAttribute(

                    "aria-selected",

                    String(isCurrent)

                );

            }

        );

}


/* =========================================================
   14. GOOGLE TRANSLATE COOKIE
   ========================================================= */

function setGoogleTranslateCookie(

    languageCode

) {

    const language =

        getLanguage(languageCode);


    const targetLanguage =

        language.googleCode;


    const cookieValue =

        `/en/${targetLanguage}`;


    document.cookie =

        `googtrans=${cookieValue};path=/`;


    document.cookie =

        `googtrans=${cookieValue};path=/;domain=${location.hostname}`;

}


/* =========================================================
   15. CLEAR GOOGLE TRANSLATE COOKIE
   ========================================================= */

function clearGoogleTranslateCookie() {

    document.cookie =

        "googtrans=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";


    document.cookie =

        `googtrans=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${location.hostname};`;

}


/* =========================================================
   16. SELECT LANGUAGE
   ========================================================= */

function selectLanguage(languageCode) {

    if (

        !isLanguageSupported(languageCode)

    ) {

        return;

    }


    saveLanguage(languageCode);


    applyLanguageDirection(

        languageCode

    );


    updateLanguageMenuState();


    updateAllLanguageControls(

        languageCode

    );


    closeLanguageMenu();


    if (

        languageCode === "en"

    ) {

        clearGoogleTranslateCookie();

        reloadForLanguage();

        return;

    }


    setGoogleTranslateCookie(

        languageCode

    );


    triggerGoogleTranslation(

        languageCode

    );

}


/* =========================================================
   17. RELOAD FOR LANGUAGE
   ========================================================= */

function reloadForLanguage() {

    const currentUrl =

        window.location.href;


    const cleanUrl =

        currentUrl.split("#")[0];


    window.location.href =

        cleanUrl;

}


/* =========================================================
   18. GOOGLE TRANSLATE TRIGGER
   ========================================================= */

function triggerGoogleTranslation(

    languageCode

) {

    const select =

        document.querySelector(

            ".goog-te-combo"

        );


    if (!select) {

        /*
         * Google Translate has not loaded yet.
         * The cookie is already saved.
         * Reloading allows Google Translate
         * to read the selected language.
         */

        reloadForLanguage();

        return;

    }


    const language =

        getLanguage(languageCode);


    const googleCode =

        language.googleCode;


    select.value =

        googleCode;


    select.dispatchEvent(

        new Event(

            "change"

        )

    );

}


/* =========================================================
   19. GOOGLE TRANSLATE INITIALIZATION
   ========================================================= */

function initializeGoogleTranslate() {

    if (

        typeof window.google ===

        "undefined"

    ) {

        return;

    }


    if (

        !google.translate ||

        !google.translate.TranslateElement

    ) {

        return;

    }


    try {

        new google.translate.TranslateElement(

            {

                pageLanguage: "en",

                includedLanguages:

                    LANGUAGES

                        .map(

                            language =>

                                language.googleCode

                        )

                        .join(","),

                autoDisplay: false,

                multilanguagePage: true

            },

            NEXORA.translation

                .googleElementId

        );


        NEXORA_STATE.googleReady =

            true;


        setTimeout(

            () => {

                const language =

                    getCurrentLanguage();


                if (

                    language !== "en"

                ) {

                    triggerGoogleTranslation(

                        language

                    );

                }

            },

            700

        );

    }

    catch (error) {

        console.warn(

            "NEXORA Google Translate initialization failed:",

            error

        );

    }

}


/* =========================================================
   20. GOOGLE CALLBACK
   ========================================================= */

window.googleTranslateElementInit =

    function () {

        initializeGoogleTranslate();

    };


/* =========================================================
   21. GOOGLE TRANSLATE LOADER
   ========================================================= */

function loadGoogleTranslateScript() {

    if (

        document.getElementById(

            "nexora-google-translate-script"

        )

    ) {

        return;

    }


    const container =

        document.createElement(

            "div"

        );


    container.id =

        NEXORA.translation

            .googleElementId;


    container.style.display =

        "none";


    document.body.appendChild(

        container

    );


    const script =

        document.createElement(

            "script"

        );


    script.id =

        "nexora-google-translate-script";


    script.src =

        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";


    script.async = true;


    document.head.appendChild(

        script

    );

}


/* =========================================================
   22. LANGUAGE CONTROLS SYNC
   ========================================================= */

function updateAllLanguageControls(

    languageCode

) {

    const language =

        getLanguage(languageCode);


    document

        .querySelectorAll(

            "[data-current-language]"

        )

        .forEach(

            element => {

                element.textContent =

                    language.nativeName;

            }

        );


    document

        .querySelectorAll(

            "[data-current-language-name]"

        )

        .forEach(

            element => {

                element.textContent =

                    language.name;

            }

        );


    document

        .querySelectorAll(

            "select[data-language-select]"

        )

        .forEach(

            select => {

                if (

                    select.value !==

                    languageCode

                ) {

                    select.value =

                        languageCode;

                }

            }

        );


    document

        .querySelectorAll(

            ".settings-language-option"

        )

        .forEach(

            option => {

                option.classList.toggle(

                    "active",

                    option.dataset.language ===

                    languageCode

                );

            }

        );

}


/* =========================================================
   23. SETTINGS LANGUAGE SELECTORS
   ========================================================= */

function initializeSettingsLanguageSelectors() {

    document

        .querySelectorAll(

            "select[data-language-select]"

        )

        .forEach(

            select => {

                const current =

                    getCurrentLanguage();


                if (

                    isLanguageSupported(current)

                ) {

                    select.value =

                        current;

                }


                select.addEventListener(

                    "change",

                    event => {

                        const code =

                            event.target.value;


                        if (

                            isLanguageSupported(code)

                        ) {

                            selectLanguage(code);

                        }

                    }

                );

            }

        );


    document

        .querySelectorAll(

            "[data-select-language]"

        )

        .forEach(

            element => {

                element.addEventListener(

                    "click",

                    () => {

                        const code =

                            element.dataset

                                .selectLanguage;


                        selectLanguage(code);

                    }

                );

            }

        );

}


/* =========================================================
   24. LANGUAGE BUTTON EVENTS
   ========================================================= */

function initializeLanguageButtons() {

    let buttons =

        findLanguageButtons();


    if (

        buttons.length === 0

    ) {

        const defaultButton =

            createDefaultLanguageButton();


        if (defaultButton) {

            buttons = [

                defaultButton

            ];

        }

    }


    buttons.forEach(

        button => {

            if (

                button.dataset

                    .nexoraLanguageReady ===

                "true"

            ) {

                return;

            }


            button.dataset

                .nexoraLanguageReady =

                "true";


            button.addEventListener(

                "click",

                event => {

                    event.stopPropagation();

                    toggleLanguageMenu();

                }

            );

        }

    );


    createLanguageMenu();

}


/* =========================================================
   25. SETTINGS LANGUAGE LIST GENERATOR
   ========================================================= */

function buildSettingsLanguageList(

    container

) {

    if (!container) {

        return;

    }
    container.innerHTML = "";

    LANGUAGES.forEach(language => {

        const option = document.createElement("button");

        option.type = "button";

        option.className = "settings-language-option";

        option.dataset.language = language.code;

        option.innerHTML = `
            <span class="language-native">
                ${escapeHTML(language.nativeName)}
            </span>

            <span class="language-name">
                ${escapeHTML(language.name)}
            </span>
        `;

        option.addEventListener("click", () => {

            selectLanguage(language.code);

        });

        container.appendChild(option);

    });

    updateSettingsLanguageList(container);

}
/* =========================================================
   26. UPDATE SETTINGS LANGUAGE LIST
   ========================================================= */

function updateSettingsLanguageList(container) {

    if (!container) {
        return;
    }

    const currentLanguage = getCurrentLanguage();

    container
        .querySelectorAll(".settings-language-option")
        .forEach(option => {

            const isCurrent =
                option.dataset.language === currentLanguage;

            option.classList.toggle(
                "active",
                isCurrent
            );

            option.setAttribute(
                "aria-selected",
                String(isCurrent)
            );

        });

}


/* =========================================================
   27. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}
/* =========================================================
   28. MOBILE SIDEBAR
   ========================================================= */

function initializeMobileSidebar() {

    const menuButton = document.getElementById("menuButton");
    const sidebar = document.querySelector(".sidebar");

    if (!menuButton || !sidebar) {
        return;
    }

    if (menuButton.dataset.nexoraSidebarReady === "true") {
        return;
    }

    menuButton.dataset.nexoraSidebarReady = "true";

    menuButton.addEventListener("click", event => {

        event.stopPropagation();

        NEXORA_STATE.sidebarOpen =
            !NEXORA_STATE.sidebarOpen;

        sidebar.classList.toggle(
            "open",
            NEXORA_STATE.sidebarOpen
        );

        document.body.classList.toggle(
            "sidebar-open",
            NEXORA_STATE.sidebarOpen
        );

    });

    document.addEventListener("click", event => {

        if (
            !NEXORA_STATE.sidebarOpen
        ) {
            return;
        }

        if (
            sidebar.contains(event.target) ||
            menuButton.contains(event.target)
        ) {
            return;
        }

        closeMobileSidebar();

    });

}


/* =========================================================
   29. CLOSE MOBILE SIDEBAR
   ========================================================= */

function closeMobileSidebar() {

    const sidebar =
        document.querySelector(".sidebar");

    if (!sidebar) {
        return;
    }

    NEXORA_STATE.sidebarOpen = false;

    sidebar.classList.remove("open");

    document.body.classList.remove(
        "sidebar-open"
    );

}


/* =========================================================
   30. NOTIFICATION PANEL
   ========================================================= */

function initializeNotifications() {

    const button =
        document.getElementById(
            "notificationButton"
        );

    const panel =
        document.getElementById(
            "notificationPanel"
        );

    const closeButton =
        document.getElementById(
            "closeNotifications"
        );

    if (!button || !panel) {
        return;
    }

    button.addEventListener("click", event => {

        event.stopPropagation();

        NEXORA_STATE.notificationOpen =
            !NEXORA_STATE.notificationOpen;

        panel.classList.toggle(
            "open",
            NEXORA_STATE.notificationOpen
        );

    });

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                closeNotifications();

            }
        );

    }

    document.addEventListener("click", event => {

        if (!NEXORA_STATE.notificationOpen) {
            return;
        }

        if (
            panel.contains(event.target) ||
            button.contains(event.target)
        ) {
            return;
        }

        closeNotifications();

    });

}


/* =========================================================
   31. CLOSE NOTIFICATIONS
   ========================================================= */

function closeNotifications() {

    const panel =
        document.getElementById(
            "notificationPanel"
        );

    if (!panel) {
        return;
    }

    NEXORA_STATE.notificationOpen = false;

    panel.classList.remove("open");

}
/* =========================================================
   32. THEME SYSTEM
   ========================================================= */

function getCurrentTheme() {

    const savedTheme =
        localStorage.getItem(
            NEXORA.storage.theme
        );

    if (
        savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system"
    ) {
        return savedTheme;
    }

    return NEXORA.defaults.theme;
}


/* ---------------------------------------------------------
   Save theme
   --------------------------------------------------------- */

function saveTheme(theme) {

    if (
        theme !== "light" &&
        theme !== "dark" &&
        theme !== "system"
    ) {
        theme = NEXORA.defaults.theme;
    }

    localStorage.setItem(
        NEXORA.storage.theme,
        theme
    );

    NEXORA_STATE.currentTheme = theme;

}


/* ---------------------------------------------------------
   Apply theme
   --------------------------------------------------------- */

function applyTheme(theme) {

    saveTheme(theme);

    const root =
        document.documentElement;

    root.setAttribute(
        "data-theme",
        theme
    );

    document.body.setAttribute(
        "data-theme",
        theme
    );

}


/* ---------------------------------------------------------
   Initialize theme controls
   --------------------------------------------------------- */

function initializeThemeControls() {

    const currentTheme =
        getCurrentTheme();

    NEXORA_STATE.currentTheme =
        currentTheme;

    applyTheme(currentTheme);

    document
        .querySelectorAll(
            "[data-theme-select]"
        )
        .forEach(select => {

            select.value =
                currentTheme;

            select.addEventListener(
                "change",
                event => {

                    applyTheme(
                        event.target.value
                    );

                }
            );

        });

    document
        .querySelectorAll(
            "[data-theme]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const theme =
                        button.dataset.theme;

                    applyTheme(theme);

                }
            );

        });

}
/* =========================================================
   33. INITIALIZE LANGUAGE SYSTEM
   ========================================================= */

function initializeLanguageSystem() {

    const currentLanguage =
        getCurrentLanguage();

    NEXORA_STATE.currentLanguage =
        currentLanguage;

    applyLanguageDirection(
        currentLanguage
    );

    initializeLanguageButtons();

    initializeSettingsLanguageSelectors();

    updateAllLanguageControls(
        currentLanguage
    );

    document
        .querySelectorAll(
            "[data-language-list]"
        )
        .forEach(container => {

            buildSettingsLanguageList(
                container
            );

        });

}


/* =========================================================
   34. INITIALIZE NEXORA
   ========================================================= */

function initializeNexora() {

    if (
        NEXORA_STATE.initialized
    ) {
        return;
    }

    NEXORA_STATE.initialized = true;

    initializeLanguageSystem();

    initializeMobileSidebar();

    initializeNotifications();

    initializeThemeControls();

    loadGoogleTranslateScript();

}


/* =========================================================
   35. DOM READY
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeNexora
    );

} else {

    initializeNexora();

}
