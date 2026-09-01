/* =========================================================
   NEXORA — MASTER SCRIPT.JS
   VERSION 1.0
   =========================================================
   • 8 Languages
   • Complete Translation Dictionary
   • Automatic DOM Translation
   • RTL / LTR Support
   • LocalStorage Language Memory
   • Translation Fallback
   • Translation Statistics
   • Missing Translation Detector
   • Dynamic Content Support
   ========================================================= */


/* =========================================================
   01. NEXORA CONFIGURATION
   ========================================================= */

const NEXORA = {

    name: "NEXORA",

    version: "1.0.0",

    defaults: {
        language: "en",
        theme: "system"
    },

    storage: {
        language: "nexora_language",
        theme: "nexora_theme"
    }

};


/* =========================================================
   02. SUPPORTED LANGUAGES
   ========================================================= */

const LANGUAGES = [

    {
        code: "en",
        name: "English",
        nativeName: "English",
        direction: "ltr"
    },

    {
        code: "ar",
        name: "Arabic",
        nativeName: "العربية",
        direction: "rtl"
    },

    {
        code: "fr",
        name: "French",
        nativeName: "Français",
        direction: "ltr"
    },

    {
        code: "es",
        name: "Spanish",
        nativeName: "Español",
        direction: "ltr"
    },

    {
        code: "de",
        name: "German",
        nativeName: "Deutsch",
        direction: "ltr"
    },

    {
        code: "it",
        name: "Italian",
        nativeName: "Italiano",
        direction: "ltr"
    },

    {
        code: "tr",
        name: "Turkish",
        nativeName: "Türkçe",
        direction: "ltr"
    },

    {
        code: "ja",
        name: "Japanese",
        nativeName: "日本語",
        direction: "ltr"
    }

];


/* =========================================================
   03. LANGUAGE HELPERS
   ========================================================= */

function isLanguageSupported(languageCode) {

    return LANGUAGES.some(
        language => language.code === languageCode
    );

}


function getLanguage(languageCode) {

    return LANGUAGES.find(
        language => language.code === languageCode
    ) || LANGUAGES[0];

}


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


function getCurrentLanguageObject() {

    return getLanguage(
        getCurrentLanguage()
    );

}


/* =========================================================
   04. MASTER TRANSLATION DICTIONARY
   ========================================================= */

const TRANSLATIONS = {


    /* =====================================================
       ENGLISH
       ===================================================== */

    en: {

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

        "Total Revenue": "Total Revenue",
        "Total Orders": "Total Orders",
        "Conversion Rate": "Conversion Rate",
        "Revenue Overview": "Revenue Overview",
        "Your revenue performance over the last 7 months.": "Your revenue performance over the last 7 months.",
        "Last 7 months": "Last 7 months",
        "Last 30 days": "Last 30 days",
        "Last 12 months": "Last 12 months",

        "Recent Activity": "Recent Activity",
        "Latest activity from your store.": "Latest activity from your store.",
        "View all": "View all",
        "New order received": "New order received",
        "New customer registered": "New customer registered",
        "Payment received": "Payment received",
        "Product stock updated": "Product stock updated",
        "Order completed": "Order completed",

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

        "Wireless Headphones": "Wireless Headphones",
        "Smart Watch Pro": "Smart Watch Pro",
        "Premium Backpack": "Premium Backpack",
        "Mechanical Keyboard": "Mechanical Keyboard",
        "USB-C Hub": "USB-C Hub",

        "Electronics": "Electronics",
        "Accessories": "Accessories",
        "Home & Lifestyle": "Home & Lifestyle",

        "Manage your customers and their activity.": "Manage your customers and their activity.",
        "Total Customers": "Total Customers",
        "New Customers": "New Customers",
        "Active Customers": "Active Customers",
        "Average Spend": "Average Spend",
        "Customer Directory": "Customer Directory",
        "View and manage your customers.": "View and manage your customers.",
        "+ Add Customer": "+ Add Customer",
        "Email": "Email",
        "Total Spent": "Total Spent",
        "Joined": "Joined",
        "Active": "Active",
        "Inactive": "Inactive",

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

        "Customer Insights": "Customer Insights",
        "Important customer statistics.": "Important customer statistics.",
        "Returning Customers": "Returning Customers",
        "Customers who purchased before": "Customers who purchased before",
        "Average Customer Value": "Average Customer Value",
        "Average lifetime spending": "Average lifetime spending",
        "Average Orders": "Average Orders",
        "Orders per customer": "Orders per customer",

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

        "Hi! I wanted to ask about my recent order...": "Hi! I wanted to ask about my recent order...",
        "Is the Smart Watch Pro available in black?": "Is the Smart Watch Pro available in black?",
        "Thank you for the quick delivery!": "Thank you for the quick delivery!",
        "Can I change the delivery address?": "Can I change the delivery address?",
        "I received my package. Everything looks perfect.": "I received my package. Everything looks perfect.",
        "Could you help me with a refund request?": "Could you help me with a refund request?",

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

        "Security": "Security",
        "Manage your account security preferences.": "Manage your account security preferences.",
        "Two-Factor Authentication": "Two-Factor Authentication",
        "Add an extra layer of security to your account.": "Add an extra layer of security to your account.",
        "Login Alerts": "Login Alerts",
        "Receive an alert when a new login is detected.": "Receive an alert when a new login is detected.",
        "Session Protection": "Session Protection",
        "Automatically secure inactive sessions.": "Automatically secure inactive sessions.",

        "Appearance": "Appearance",
        "Customize the dashboard experience.": "Customize the dashboard experience.",
        "Theme": "Theme",
        "Light": "Light",
        "Dark": "Dark",
        "System Default": "System Default",
        "Language": "Language",

        "English": "English",
        "French": "French",
        "Spanish": "Spanish",
        "German": "German",
        "Italian": "Italian",
        "Turkish": "Turkish",
        "Japanese": "Japanese",

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

        "Cancel": "Cancel",
        "Save Changes": "Save Changes",
        "Documentation": "Documentation",
        "Support": "Support",

        "this month": "this month",
        "from last month": "from last month",
        "of orders": "of orders",
        "of customers": "of customers",
        "available": "available",
        "Needs attention": "Needs attention",
        "resolution rate": "resolution rate",
        "faster": "faster",

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

        "Manage your customers and their activity.": "إدارة عملائك ونشاطهم.",
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

        "Manage your store preferences and account settings.": "إدارة تفضيلات متجرك وإعدادات حسابك.",
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
        "Choose how you receive updates.": "اختر طريقة تل
