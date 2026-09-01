/* ============================================================
   NEXORA — PROFESSIONAL APPLICATION ENGINE
   ============================================================

   Version: 2.0
   Purpose:
   - Global navigation
   - SPA-like page transitions
   - 21-language interface
   - Notifications
   - Profile interactions
   - Mobile sidebar
   - Search
   - Filters
   - Product interactions
   - Order interactions
   - Customer interactions
   - Messages
   - Settings
   - LocalStorage persistence
   - Keyboard accessibility
   - Dynamic UI helpers
   - Responsive behavior

   Supported languages:
   1. English
   2. Arabic
   3. French
   4. Spanish
   5. German
   6. Italian
   7. Portuguese
   8. Turkish
   9. Dutch
   10. Russian
   11. Chinese
   12. Japanese
   13. Korean
   14. Hindi
   15. Indonesian
   16. Vietnamese
   17. Polish
   18. Ukrainian
   19. Swedish
   20. Greek
   21. Hebrew

   ============================================================ */

"use strict";

/* ============================================================
   01 — APPLICATION CONFIGURATION
   ============================================================ */

const NEXORA = {

    name: "NEXORA",

    version: "2.0.0",

    storage: {
        language: "nexora_language",
        theme: "nexora_theme",
        notifications: "nexora_notifications",
        settings: "nexora_settings",
        profile: "nexora_profile",
        sidebar: "nexora_sidebar",
        currency: "nexora_currency"
    },

    defaultLanguage: "en",

    languages: [
        {
            code: "en",
            name: "English",
            native: "English",
            direction: "ltr"
        },
        {
            code: "ar",
            name: "Arabic",
            native: "العربية",
            direction: "rtl"
        },
        {
            code: "fr",
            name: "French",
            native: "Français",
            direction: "ltr"
        },
        {
            code: "es",
            name: "Spanish",
            native: "Español",
            direction: "ltr"
        },
        {
            code: "de",
            name: "German",
            native: "Deutsch",
            direction: "ltr"
        },
        {
            code: "it",
            name: "Italian",
            native: "Italiano",
            direction: "ltr"
        },
        {
            code: "pt",
            name: "Portuguese",
            native: "Português",
            direction: "ltr"
        },
        {
            code: "tr",
            name: "Turkish",
            native: "Türkçe",
            direction: "ltr"
        },
        {
            code: "nl",
            name: "Dutch",
            native: "Nederlands",
            direction: "ltr"
        },
        {
            code: "ru",
            name: "Russian",
            native: "Русский",
            direction: "ltr"
        },
        {
            code: "zh",
            name: "Chinese",
            native: "中文",
            direction: "ltr"
        },
        {
            code: "ja",
            name: "Japanese",
            native: "日本語",
            direction: "ltr"
        },
        {
            code: "ko",
            name: "Korean",
            native: "한국어",
            direction: "ltr"
        },
        {
            code: "hi",
            name: "Hindi",
            native: "हिन्दी",
            direction: "ltr"
        },
        {
            code: "id",
            name: "Indonesian",
            native: "Bahasa Indonesia",
            direction: "ltr"
        },
        {
            code: "vi",
            name: "Vietnamese",
            native: "Tiếng Việt",
            direction: "ltr"
        },
        {
            code: "pl",
            name: "Polish",
            native: "Polski",
            direction: "ltr"
        },
        {
            code: "uk",
            name: "Ukrainian",
            native: "Українська",
            direction: "ltr"
        },
        {
            code: "sv",
            name: "Swedish",
            native: "Svenska",
            direction: "ltr"
        },
        {
            code: "el",
            name: "Greek",
            native: "Ελληνικά",
            direction: "ltr"
        },
        {
            code: "he",
            name: "Hebrew",
            native: "עברית",
            direction: "rtl"
        }
    ],

    routes: {
        dashboard: "index.html",
        analytics: "pages/analytics.html",
        products: "pages/products.html",
        orders: "pages/orders.html",
        customers: "pages/customers.html",
        messages: "pages/messages.html",
        settings: "pages/settings.html",
        profile: "pages/profile.html"
    }

};


/* ============================================================
   02 — APPLICATION STATE
   ============================================================ */

const AppState = {

    language: localStorage.getItem(NEXORA.storage.language)
        || NEXORA.defaultLanguage,

    theme: localStorage.getItem(NEXORA.storage.theme)
        || "light",

    notifications: [],

    currentRoute: "",

    sidebarOpen: false,

    loading: false,

    searchQuery: "",

    orderFilter: "All Orders",

    productFilter: "all",

    customerFilter: "all",

    messageFilter: "all",

    initialized: false

};


/* ============================================================
   03 — TRANSLATION DATABASE
   ============================================================ */

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

        "Welcome back! Here's what's happening today.":
            "Welcome back! Here's what's happening today.",

        "Manage your products, inventory and pricing.":
            "Manage your products, inventory and pricing.",

        "Track and manage your customer orders.":
            "Track and manage your customer orders.",

        "Total Revenue": "Total Revenue",
        "Total Orders": "Total Orders",
        Customers: "Customers",
        "Conversion Rate": "Conversion Rate",

        "In Stock": "In Stock",
        "Low Stock": "Low Stock",
        "Out of Stock": "Out of Stock",

        "Inventory Value": "Inventory Value",
        "Order Revenue": "Order Revenue",

        "Recent Orders": "Recent Orders",
        "Recent Activity": "Recent Activity",
        "Revenue Overview": "Revenue Overview",

        "Product Catalog": "Product Catalog",
        "Inventory Status": "Inventory Status",
        Categories: "Categories",
        "Order Status": "Order Status",
        "Order Insights": "Order Insights",

        Completed: "Completed",
        Processing: "Processing",
        Pending: "Pending",

        "Average Order Value": "Average Order Value",
        Growth: "Growth",

        "View all": "View all",
        "View all orders →": "View all orders →",
        "Add Product": "Add Product",

        Notifications: "Notifications",
        "You have 3 new notifications.":
            "You have 3 new notifications.",

        Close: "Close",
        Save: "Save",
        Cancel: "Cancel",
        Search: "Search",
        Filter: "Filter",
        Language: "Language",
        Theme: "Theme",
        Light: "Light",
        Dark: "Dark",
        "System Default": "System Default",

        Administrator: "Administrator",

        "Total Products": "Total Products",
        "Products by category.": "Products by category.",
        "Current inventory overview.": "Current inventory overview.",

        "Electronics": "Electronics",
        "Accessories": "Accessories",
        "Home & Lifestyle": "Home & Lifestyle",

        "Order ID": "Order ID",
        Customer: "Customer",
        Product: "Product",
        Date: "Date",
        Total: "Total",
        Amount: "Amount",
        Status: "Status",

        "All Orders": "All Orders",

        "Successfully delivered orders":
            "Successfully delivered orders",

        "Orders currently being prepared":
            "Orders currently being prepared",

        "Orders waiting for confirmation":
            "Orders waiting for confirmation",

        "Average amount per order":
            "Average amount per order",

        "Compared with last month":
            "Compared with last month",

        "Visitors who placed an order":
            "Visitors who placed an order",

        "Documentation": "Documentation",
        "Support": "Support",

        "No notifications": "No notifications",
        "Mark all as read": "Mark all as read",

        "Profile Settings": "Profile Settings",
        "Account Settings": "Account Settings",
        "General Settings": "General Settings",

        "Save Changes": "Save Changes",
        "Discard Changes": "Discard Changes",

        "Search products": "Search products",
        "Search customers": "Search customers",
        "Search orders": "Search orders",
        "Search messages": "Search messages",

        "No results found": "No results found",
        "Loading...": "Loading...",
        "Something went wrong": "Something went wrong",

        "January": "January",
        "February": "February",
        "March": "March",
        "April": "April",
        "May": "May",
        "June": "June",
        "July": "July",
        "August": "August",
        "September": "September",
        "October": "October",
        "November": "November",
        "December": "December"

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

        "Welcome back! Here's what's happening today.":
            "مرحبًا بعودتك! إليك ما يحدث اليوم.",

        "Manage your products, inventory and pricing.":
            "إدارة منتجاتك ومخزونك وأسعارك.",

        "Track and manage your customer orders.":
            "تتبع وإدارة طلبات عملائك.",

        "Total Revenue": "إجمالي الإيرادات",
        "Total Orders": "إجمالي الطلبات",
        Customers: "العملاء",
        "Conversion Rate": "معدل التحويل",

        "In Stock": "متوفر",
        "Low Stock": "مخزون منخفض",
        "Out of Stock": "نفد المخزون",

        "Inventory Value": "قيمة المخزون",
        "Order Revenue": "إيرادات الطلبات",

        "Recent Orders": "أحدث الطلبات",
        "Recent Activity": "آخر النشاطات",
        "Revenue Overview": "نظرة عامة على الإيرادات",

        "Product Catalog": "كتالوج المنتجات",
        "Inventory Status": "حالة المخزون",
        Categories: "الفئات",
        "Order Status": "حالة الطلبات",
        "Order Insights": "إحصائيات الطلبات",

        Completed: "مكتمل",
        Processing: "قيد المعالجة",
        Pending: "معلق",

        "Average Order Value": "متوسط قيمة الطلب",
        Growth: "النمو",

        "View all": "عرض الكل",
        "View all orders →": "عرض كل الطلبات →",
        "Add Product": "إضافة منتج",

        Notifications: "الإشعارات",
        "You have 3 new notifications.":
            "لديك 3 إشعارات جديدة.",

        Close: "إغلاق",
        Save: "حفظ",
        Cancel: "إلغاء",
        Search: "بحث",
        Filter: "تصفية",
        Language: "اللغة",
        Theme: "المظهر",
        Light: "فاتح",
        Dark: "داكن",
        "System Default": "إعداد النظام",

        Administrator: "مسؤول",

        "Total Products": "إجمالي المنتجات",
        "Products by category.": "المنتجات حسب الفئة.",
        "Current inventory overview.": "نظرة عامة على المخزون الحالي.",

        Electronics: "إلكترونيات",
        Accessories: "إكسسوارات",
        "Home & Lifestyle": "المنزل ونمط الحياة",

        "Order ID": "رقم الطلب",
        Customer: "العميل",
        Product: "المنتج",
        Date: "التاريخ",
        Total: "الإجمالي",
        Amount: "المبلغ",
        Status: "الحالة",

        "All Orders": "كل الطلبات",

        "Successfully delivered orders":
            "الطلبات التي تم تسليمها بنجاح",

        "Orders currently being prepared":
            "الطلبات التي يتم تجهيزها حاليًا",

        "Orders waiting for confirmation":
            "الطلبات التي تنتظر التأكيد",

        "Average amount per order":
            "متوسط المبلغ لكل طلب",

        "Compared with last month":
            "مقارنة بالشهر الماضي",

        "Visitors who placed an order":
            "الزوار الذين قاموا بطلب",

        Documentation: "التوثيق",
        Support: "الدعم",

        "No notifications": "لا توجد إشعارات",
        "Mark all as read": "تحديد الكل كمقروء",

        "Profile Settings": "إعدادات الملف الشخصي",
        "Account Settings": "إعدادات الحساب",
        "General Settings": "الإعدادات العامة",

        "Save Changes": "حفظ التغييرات",
        "Discard Changes": "تجاهل التغييرات",

        "Search products": "البحث عن المنتجات",
        "Search customers": "البحث عن العملاء",
        "Search orders": "البحث عن الطلبات",
        "Search messages": "البحث عن الرسائل",

        "No results found": "لم يتم العثور على نتائج",
        "Loading...": "جارٍ التحميل...",
        "Something went wrong": "حدث خطأ ما",

        January: "يناير",
        February: "فبراير",
        March: "مارس",
        April: "أبريل",
        May: "مايو",
        June: "يونيو",
        July: "يوليو",
        August: "أغسطس",
        September: "سبتمبر",
        October: "أكتوبر",
        November: "نوفمبر",
        December: "ديسمبر"

    },

    fr: {

        Dashboard: "Tableau de bord",
        Analytics: "Analyses",
        Products: "Produits",
        Orders: "Commandes",
        Customers: "Clients",
        Messages: "Messages",
        Settings: "Paramètres",
        Profile: "Profil",

        "Welcome back! Here's what's happening today.":
            "Bon retour ! Voici ce qui se passe aujourd'hui.",

        "Manage your products, inventory and pricing.":
            "Gérez vos produits, votre stock et vos prix.",

        "Track and manage your customer orders.":
            "Suivez et gérez les commandes de vos clients.",

        "Total Revenue": "Chiffre d'affaires total",
        "Total Orders": "Total des commandes",
        Customers: "Clients",
        "Conversion Rate": "Taux de conversion",

        "In Stock": "En stock",
        "Low Stock": "Stock faible",
        "Out of Stock": "Rupture de stock",

        "Inventory Value": "Valeur du stock",
        "Order Revenue": "Revenus des commandes",

        "Recent Orders": "Commandes récentes",
        "Recent Activity": "Activité récente",
        "Revenue Overview": "Aperçu des revenus",

        "Product Catalog": "Catalogue produits",
        "Inventory Status": "État du stock",
        Categories: "Catégories",
        "Order Status": "État des commandes",
        "Order Insights": "Aperçu des commandes",

        Completed: "Terminée",
        Processing: "En traitement",
        Pending: "En attente",

        "Average Order Value": "Valeur moyenne de commande",
        Growth: "Croissance",

        "View all": "Tout voir",
        "Add Product": "Ajouter un produit",

        Notifications: "Notifications",
        Close: "Fermer",
        Save: "Enregistrer",
        Cancel: "Annuler",
        Search: "Rechercher",
        Filter: "Filtrer",
        Language: "Langue",
        Theme: "Thème",
        Light: "Clair",
        Dark: "Sombre",

        Administrator: "Administrateur",

        "Order ID": "ID commande",
        Customer: "Client",
        Product: "Produit",
        Date: "Date",
        Total: "Total",
        Amount: "Montant",
        Status: "Statut",

        "All Orders": "Toutes les commandes",

        Documentation: "Documentation",
        Support: "Support",

        "No notifications": "Aucune notification",
        "Mark all as read": "Tout marquer comme lu",

        "Save Changes": "Enregistrer les modifications",
        "Discard Changes": "Annuler les modifications",

        "No results found": "Aucun résultat",
        "Loading...": "Chargement...",
        "Something went wrong": "Une erreur est survenue"

    },

    es: {

        Dashboard: "Panel",
        Analytics: "Analítica",
        Products: "Productos",
        Orders: "Pedidos",
        Customers: "Clientes",
        Messages: "Mensajes",
        Settings: "Configuración",
        Profile: "Perfil",

        "Total Revenue": "Ingresos totales",
        "Total Orders": "Pedidos totales",
        Customers: "Clientes",
        "Conversion Rate": "Tasa de conversión",

        "In Stock": "En stock",
        "Low Stock": "Stock bajo",
        "Out of Stock": "Agotado",

        "Recent Orders": "Pedidos recientes",
        "Recent Activity": "Actividad reciente",
        "Revenue Overview": "Resumen de ingresos",

        "Product Catalog": "Catálogo de productos",
        "Inventory Status": "Estado del inventario",
        Categories: "Categorías",
        "Order Status": "Estado de pedidos",
        "Order Insights": "Información de pedidos",

        Completed: "Completado",
        Processing: "Procesando",
        Pending: "Pendiente",

        "Average Order Value": "Valor medio del pedido",
        Growth: "Crecimiento",

        "View all": "Ver todo",
        "Add Product": "Añadir producto",

        Notifications: "Notificaciones",
        Close: "Cerrar",
        Save: "Guardar",
        Cancel: "Cancelar",
        Search: "Buscar",
        Filter: "Filtrar",
        Language: "Idioma",
        Theme: "Tema",
        Light: "Claro",
        Dark: "Oscuro",

        Administrator: "Administrador",

        "Order ID": "ID del pedido",
        Customer: "Cliente",
        Product: "Producto",
        Date: "Fecha",
        Total: "Total",
        Amount: "Cantidad",
        Status: "Estado",

        "All Orders": "Todos los pedidos",

        Documentation: "Documentación",
        Support: "Soporte",

        "No notifications": "Sin notificaciones",
        "Mark all as read": "Marcar todo como leído",

        "No results found": "No se encontraron resultados",
        "Loading...": "Cargando...",
        "Something went wrong": "Algo salió mal"

    },

    de: {

        Dashboard: "Dashboard",
        Analytics: "Analysen",
        Products: "Produkte",
        Orders: "Bestellungen",
        Customers: "Kunden",
        Messages: "Nachrichten",
        Settings: "Einstellungen",
        Profile: "Profil",

        "Total Revenue": "Gesamtumsatz",
        "Total Orders": "Bestellungen gesamt",
        Customers: "Kunden",
        "Conversion Rate": "Conversion-Rate",

        "In Stock": "Auf Lager",
        "Low Stock": "Niedriger Bestand",
        "Out of Stock": "Nicht vorrätig",

        "Recent Orders": "Letzte Bestellungen",
        "Recent Activity": "Letzte Aktivitäten",
        "Revenue Overview": "Umsatzübersicht",

        "Product Catalog": "Produktkatalog",
        "Inventory Status": "Bestandsstatus",
        Categories: "Kategorien",
        "Order Status": "Bestellstatus",
        "Order Insights": "Bestellübersicht",

        Completed: "Abgeschlossen",
        Processing: "In Bearbeitung",
        Pending: "Ausstehend",

        "Average Order Value": "Durchschnittlicher Bestellwert",
        Growth: "Wachstum",

        "View all": "Alle anzeigen",
        "Add Product": "Produkt hinzufügen",

        Notifications: "Benachrichtigungen",
        Close: "Schließen",
        Save: "Speichern",
        Cancel: "Abbrechen",
        Search: "Suchen",
        Filter: "Filtern",
        Language: "Sprache",
        Theme: "Design",
        Light: "Hell",
        Dark: "Dunkel",

        Administrator: "Administrator",

        "Order ID": "Bestellnummer",
        Customer: "Kunde",
        Product: "Produkt",
        Date: "Datum",
        Total: "Gesamt",
        Amount: "Betrag",
        Status: "Status",

        "All Orders": "Alle Bestellungen",

        Documentation: "Dokumentation",
        Support: "Support",

        "No notifications": "Keine Benachrichtigungen",
        "Mark all as read": "Alle als gelesen markieren",

        "No results found": "Keine Ergebnisse",
        "Loading...": "Wird geladen...",
        "Something went wrong": "Etwas ist schiefgelaufen"

    },

    it: {

        Dashboard: "Dashboard",
        Analytics: "Analisi",
        Products: "Prodotti",
        Orders: "Ordini",
        Customers: "Clienti",
        Messages: "Messaggi",
        Settings: "Impostazioni",
        Profile: "Profilo",

        "Total Revenue": "Entrate totali",
        "Total Orders": "Ordini totali",
        Customers: "Clienti",
        "Conversion Rate": "Tasso di conversione",

        "In Stock": "Disponibile",
        "Low Stock": "Scorte basse",
        "Out of Stock": "Esaurito",

        "Recent Orders": "Ordini recenti",
        "Recent Activity": "Attività recente",
        "Revenue Overview": "Panoramica delle entrate",

        "Product Catalog": "Catalogo prodotti",
        "Inventory Status": "Stato inventario",
        Categories: "Categorie",
        "Order Status": "Stato ordine",
        "Order Insights": "Statistiche ordini",

        Completed: "Completato",
        Processing: "In elaborazione",
        Pending: "In attesa",

        "Average Order Value": "Valore medio dell'ordine",
        Growth: "Crescita",

        "View all": "Visualizza tutto",
        "Add Product": "Aggiungi prodotto",

        Notifications: "Notifiche",
        Close: "Chiudi",
        Save: "Salva",
        Cancel: "Annulla",
        Search: "Cerca",
        Filter: "Filtra",
        Language: "Lingua",
        Theme: "Tema",
        Light: "Chiaro",
        Dark: "Scuro",

        Administrator: "Amministratore",

        "Order ID": "ID ordine",
        Customer: "Cliente",
        Product: "Prodotto",
        Date: "Data",
        Total: "Totale",
        Amount: "Importo",
        Status: "Stato",

        "All Orders": "Tutti gli ordini",

        Documentation: "Documentazione",
        Support: "Supporto",

        "No notifications": "Nessuna notifica",
        "Mark all as read": "Segna tutto come letto",

        "No results found": "Nessun risultato",
        "Loading...": "Caricamento...",
        "Something went wrong": "Qualcosa è andato storto"

    },

    pt: {

        Dashboard: "Painel",
        Analytics: "Análises",
        Products: "Produtos",
        Orders: "Pedidos",
        Customers: "Clientes",
        Messages: "Mensagens",
        Settings: "Configurações",
        Profile: "Perfil",

        "Total Revenue": "Receita total",
        "Total Orders": "Total de pedidos",
        Customers: "Clientes",
        "Conversion Rate": "Taxa de conversão",

        "In Stock": "Em estoque",
        "Low Stock": "Estoque baixo",
        "Out of Stock": "Fora de estoque",

        "Recent Orders": "Pedidos recentes",
        "Recent Activity": "Atividade recente",
        "Revenue Overview": "Visão geral da receita",

        "Product Catalog": "Catálogo de produtos",
        "Inventory Status": "Status do estoque",
        Categories: "Categorias",
        "Order Status": "Status dos pedidos",
        "Order Insights": "Informações dos pedidos",

        Completed: "Concluído",
        Processing: "Processando",
        Pending: "Pendente",

        "Average Order Value": "Valor médio do pedido",
        Growth: "Crescimento",

        "View all": "Ver tudo",
        "Add Product": "Adicionar produto",

        Notifications: "Notificações",
        Close: "Fechar",
        Save: "Salvar",
        Cancel: "Cancelar",
        Search: "Pesquisar",
        Filter: "Filtrar",
        Language: "Idioma",
        Theme: "Tema",
        Light: "Claro",
        Dark: "Escuro",

        Administrator: "Administrador",

        "Order ID": "ID do pedido",
        Customer: "Cliente",
        Product: "Produto",
        Date: "Data",
        Total: "Total",
        Amount: "Valor",
        Status: "Status",

        "All Orders": "Todos os pedidos",

        Documentation: "Documentação",
        Support: "Suporte",

        "No notifications": "Nenhuma notificação",
        "Mark all as read": "Marcar tudo como lido",

        "No results found": "Nenhum resultado encontrado",
        "Loading...": "Carregando...",
        "Something went wrong": "Algo deu errado"

    },

    tr: {

        Dashboard: "Kontrol Paneli",
        Analytics: "Analitik",
        Products: "Ürünler",
        Orders: "Siparişler",
        Customers: "Müşteriler",
        Messages: "Mesajlar",
        Settings: "Ayarlar",
        Profile: "Profil",

        "Total Revenue": "Toplam Gelir",
        "Total Orders": "Toplam Sipariş",
        Customers: "Müşteriler",
        "Conversion Rate": "Dönüşüm Oranı",

        "In Stock": "Stokta",
        "Low Stock": "Düşük Stok",
        "Out of Stock": "Stokta Yok",

        "Recent Orders": "Son Siparişler",
        "Recent Activity": "Son Etkinlik",
        "Revenue Overview": "Gelir Özeti",

        "Product Catalog": "Ürün Kataloğu",
        "Inventory Status": "Stok Durumu",
        Categories: "Kategoriler",
        "Order Status": "Sipariş Durumu",
        "Order Insights": "Sipariş İstatistikleri",

        Completed: "Tamamlandı",
        Processing: "İşleniyor",
        Pending: "Beklemede",

        "Average Order Value": "Ortalama Sipariş Değeri",
        Growth: "Büyüme",

        "View all": "Tümünü görüntüle",
        "Add Product": "Ürün Ekle",

        Notifications: "Bildirimler",
        Close: "Kapat",
        Save: "Kaydet",
        Cancel: "İptal",
        Search: "Ara",
        Filter: "Filtrele",
        Language: "Dil",
        Theme: "Tema",
        Light: "Açık",
        Dark: "Koyu",

        Administrator: "Yönetici",

        "Order ID": "Sipariş ID",
        Customer: "Müşteri",
        Product: "Ürün",
        Date: "Tarih",
        Total: "Toplam",
        Amount: "Tutar",
        Status: "Durum",

        "All Orders": "Tüm Siparişler",

        Documentation: "Dokümantasyon",
        Support: "Destek",

        "No notifications": "Bildirim yok",
        "Mark all as read": "Tümünü okundu olarak işaretle",

        "No results found": "Sonuç bulunamadı",
        "Loading...": "Yükleniyor...",
        "Something went wrong": "Bir şeyler yanlış gitti"

    },

    nl: {

        Dashboard: "Dashboard",
        Analytics: "Analyse",
        Products: "Producten",
        Orders: "Bestellingen",
        Customers: "Klanten",
        Messages: "Berichten",
        Settings: "Instellingen",
        Profile: "Profiel",

        "Total Revenue": "Totale omzet",
        "Total Orders": "Totaal aantal bestellingen",
        Customers: "Klanten",
        "Conversion Rate": "Conversieratio",

        "In Stock": "Op voorraad",
        "Low Stock": "Lage voorraad",
        "Out of Stock": "Niet op voorraad",

        "Recent Orders": "Recente bestellingen",
        "Recent Activity": "Recente activiteit",
        "Revenue Overview": "Omzetoverzicht",

        "Product Catalog": "Productcatalogus",
        "Inventory Status": "Voorraadstatus",
        Categories: "Categorieën",
        "Order Status": "Bestelstatus",
        "Order Insights": "Besteloverzicht",

        Completed: "Voltooid",
        Processing: "In behandeling",
        Pending: "In afwachting",

        "Average Order Value": "Gemiddelde bestelwaarde",
        Growth: "Groei",

        "View all": "Alles bekijken",
        "Add Product": "Product toevoegen",

        Notifications: "Meldingen",
        Close: "Sluiten",
        Save: "Opslaan",
        Cancel: "Annuleren",
        Search: "Zoeken",
        Filter: "Filteren",
        Language: "Taal",
        Theme: "Thema",
        Light: "Licht",
        Dark: "Donker",

        Administrator: "Beheerder",

        "Order ID": "Bestel-ID",
        Customer: "Klant",
        Product: "Product",
        Date: "Datum",
        Total: "Totaal",
        Amount: "Bedrag",
        Status: "Status",

        "All Orders": "Alle bestellingen",

        Documentation: "Documentatie",
        Support: "Ondersteuning",

        "No notifications": "Geen meldingen",
        "Mark all as read": "Alles als gelezen markeren",

        "No results found": "Geen resultaten gevonden",
        "Loading...": "Laden...",
        "Something went wrong": "Er is iets misgegaan"

    },

    ru: {

        Dashboard: "Панель управления",
        Analytics: "Аналитика",
        Products: "Товары",
        Orders: "Заказы",
        Customers: "Клиенты",
        Messages: "Сообщения",
        Settings: "Настройки",
        Profile: "Профиль",

        "Total Revenue": "Общий доход",
        "Total Orders": "Всего заказов",
        Customers: "Клиенты",
        "Conversion Rate": "Коэффициент конверсии",

        "In Stock": "В наличии",
        "Low Stock": "Мало на складе",
        "Out of Stock": "Нет в наличии",

        "Recent Orders": "Последние заказы",
        "Recent Activity": "Последняя активность",
        "Revenue Overview": "Обзор доходов",

        "Product Catalog": "Каталог товаров",
        "Inventory Status": "Состояние запасов",
        Categories: "Категории",
        "Order Status": "Статус заказа",
        "Order Insights": "Статистика заказов",

        Completed: "Завершено",
        Processing: "Обрабатывается",
        Pending: "Ожидание",

        "Average Order Value": "Средняя стоимость заказа",
        Growth: "Рост",

        "View all": "Показать все",
        "Add Product": "Добавить товар",

        Notifications: "Уведомления",
        Close: "Закрыть",
        Save: "Сохранить",
        Cancel: "Отмена",
        Search: "Поиск",
        Filter: "Фильтр",
        Language: "Язык",
        Theme: "Тема",
        Light: "Светлая",
        Dark: "Тёмная",

        Administrator: "Администратор",

        "Order ID": "ID заказа",
        Customer: "Клиент",
        Product: "Товар",
        Date: "Дата",
        Total: "Итого",
        Amount: "Сумма",
        Status: "Статус",

        "All Orders": "Все заказы",

        Documentation: "Документация",
        Support: "Поддержка",

        "No notifications": "Нет уведомлений",
        "Mark all as read": "Отметить всё как прочитанное",

        "No results found": "Результаты не найдены",
        "Loading...": "Загрузка...",
        "Something went wrong": "Что-то пошло не так"

    },

    zh: {

        Dashboard: "仪表板",
        Analytics: "分析",
        Products: "产品",
        Orders: "订单",
        Customers: "客户",
        Messages: "消息",
        Settings: "设置",
        Profile: "个人资料",

        "Total Revenue": "总收入",
        "Total Orders": "订单总数",
        Customers: "客户",
        "Conversion Rate": "转化率",

        "In Stock": "有库存",
        "Low Stock": "库存不足",
        "Out of Stock": "缺货",

        "Recent Orders": "最近订单",
        "Recent Activity": "最近活动",
        "Revenue Overview": "收入概览",

        "Product Catalog": "产品目录",
        "Inventory Status": "库存状态",
        Categories: "类别",
        "Order Status": "订单状态",
        "Order Insights": "订单分析",

        Completed: "已完成",
        Processing: "处理中",
        Pending: "待处理",

        "Average Order Value": "平均订单金额",
        Growth: "增长",

        "View all": "查看全部",
        "Add Product": "添加产品",

        Notifications: "通知",
        Close: "关闭",
        Save: "保存",
        Cancel: "取消",
        Search: "搜索",
        Filter: "筛选",
        Language: "语言",
        Theme: "主题",
        Light: "浅色",
        Dark: "深色",

        Administrator: "管理员",

        "Order ID": "订单编号",
        Customer: "客户",
        Product: "产品",
        Date: "日期",
        Total: "总计",
        Amount: "金额",
        Status: "状态",

        "All Orders": "所有订单",

        Documentation: "文档",
        Support: "支持",

        "No notifications": "没有通知",
        "Mark all as read": "全部标记为已读",

        "No results found": "未找到结果",
        "Loading...": "加载中...",
        "Something went wrong": "出现错误"

    },

    ja: {

        Dashboard: "ダッシュボード",
        Analytics: "分析",
        Products: "商品",
        Orders: "注文",
        Customers: "顧客",
        Messages: "メッセージ",
        Settings: "設定",
        Profile: "プロフィール",

        "Total Revenue": "総収益",
        "Total Orders": "総注文数",
        Customers: "顧客",
        "Conversion Rate": "コンバージョン率",

        "In Stock": "在庫あり",
        "Low Stock": "在庫少",
        "Out of Stock": "在庫切れ",

        "Recent Orders": "最近の注文",
        "Recent Activity": "最近のアクティビティ",
        "Revenue Overview": "収益概要",

        "Product Catalog": "商品カタログ",
        "Inventory Status": "在庫状況",
        Categories: "カテゴリー",
        "Order Status": "注文状況",
        "Order Insights": "注文分析",

        Completed: "完了",
        Processing: "処理中",
        Pending: "保留中",

        "Average Order Value": "平均注文額",
        Growth: "成長",

        "View all": "すべて表示",
        "Add Product": "商品を追加",

        Notifications: "通知",
        Close: "閉じる",
        Save: "保存",
        Cancel: "キャンセル",
        Search: "検索",
        Filter: "フィルター",
        Language: "言語",
        Theme: "テーマ",
        Light: "ライト",
        Dark: "ダーク",

        Administrator: "管理者",

        "Order ID": "注文ID",
        Customer: "顧客",
        Product: "商品",
        Date: "日付",
        Total: "合計",
        Amount: "金額",
        Status: "ステータス",

        "All Orders": "すべての注文",

        Documentation: "ドキュメント",
        Support: "サポート",

        "No notifications": "通知はありません",
        "Mark all as read": "すべて既読にする",

        "No results found": "結果が見つかりません",
        "Loading...": "読み込み中...",
        "Something went wrong": "問題が発生しました"

    },

    ko: {

        Dashboard: "대시보드",
        Analytics: "분석",
        Products: "제품",
        Orders: "주문",
        Customers: "고객",
        Messages: "메시지",
        Settings: "설정",
        Profile: "프로필",

        "Total Revenue": "총 수익",
        "Total Orders": "총 주문",
        Customers: "고객",
        "Conversion Rate": "전환율",

        "In Stock": "재고 있음",
        "Low Stock": "재고 부족",
        "Out of Stock": "품절",

        "Recent Orders": "최근 주문",
        "Recent Activity": "최근 활동",
        "Revenue Overview": "수익 개요",

        "Product Catalog": "제품 카탈로그",
        "Inventory Status": "재고 상태",
        Categories: "카테고리",
        "Order Status": "주문 상태",
        "Order Insights": "주문 인사이트",

        Completed: "완료",
        Processing: "처리 중",
        Pending: "대기 중",

        "Average Order Value": "평균 주문 금액",
        Growth: "성장",

        "View all": "모두 보기",
        "Add Product": "제품 추가",

        Notifications: "알림",
        Close: "닫기",
        Save: "저장",
        Cancel: "취소",
        Search: "검색",
        Filter: "필터",
        Language: "언어",
        Theme: "테마",
        Light: "라이트",
        Dark: "다크",

        Administrator: "관리자",

        "Order ID": "주문 ID",
        Customer: "고객",
        Product: "제품",
        Date: "날짜",
        Total: "총액",
        Amount: "금액",
        Status: "상태",

        "All Orders": "모든 주문",

        Documentation: "문서",
        Support: "지원",

        "No notifications": "알림이 없습니다",
        "Mark all as read": "모두 읽음으로 표시",

        "No results found": "결과가 없습니다",
        "Loading...": "로딩 중...",
        "Something went wrong": "문제가 발생했습니다"

    },

    hi: {

        Dashboard: "डैशबोर्ड",
        Analytics: "विश्लेषण",
        Products: "उत्पाद",
        Orders: "ऑर्डर",
        Customers: "ग्राहक",
        Messages: "संदेश",
        Settings: "सेटिंग्स",
        Profile: "प्रोफ़ाइल",

        "Total Revenue": "कुल राजस्व",
        "Total Orders": "कुल ऑर्डर",
        Customers: "ग्राहक",
        "Conversion Rate": "कन्वर्ज़न दर",

        "In Stock": "स्टॉक में",
        "Low Stock": "कम स्टॉक",
        "Out of Stock": "स्टॉक समाप्त",

        "Recent Orders": "हाल के ऑर्डर",
        "Recent Activity": "हाल की गतिविधि",
        "Revenue Overview": "राजस्व अवलोकन",

        "Product Catalog": "उत्पाद कैटलॉग",
        "Inventory Status": "इन्वेंटरी स्थिति",
        Categories: "श्रेणियाँ",
        "Order Status": "ऑर्डर स्थिति",
        "Order Insights": "ऑर्डर जानकारी",

        Completed: "पूर्ण",
        Processing: "प्रक्रिया में",
        Pending: "लंबित",

        "Average Order Value": "औसत ऑर्डर मूल्य",
        Growth: "वृद्धि",

        "View all": "सभी देखें",
        "Add Product": "उत्पाद जोड़ें",

        Notifications: "सूचनाएँ",
        Close: "बंद करें",
        Save: "सहेजें",
        Cancel: "रद्द करें",
        Search: "खोजें",
        Filter: "फ़िल्टर",
        Language: "भाषा",
        Theme: "थीम",
        Light: "हल्का",
        Dark: "गहरा",

        Administrator: "व्यवस्थापक",

        "Order ID": "ऑर्डर आईडी",
        Customer: "ग्राहक",
        Product: "उत्पाद",
        Date: "तारीख",
        Total: "कुल",
        Amount: "राशि",
        Status: "स्थिति",

        "All Orders": "सभी ऑर्डर",

        Documentation: "दस्तावेज़",
        Support: "सहायता",

        "No notifications": "कोई सूचना नहीं",
        "Mark all as read": "सभी को पढ़ा हुआ चिह्नित करें",

        "No results found": "कोई परिणाम नहीं मिला",
        "Loading...": "लोड हो रहा है...",
        "Something went wrong": "कुछ गलत हो गया"

    },

    id: {

        Dashboard: "Dasbor",
        Analytics: "Analitik",
        Products: "Produk",
        Orders: "Pesanan",
        Customers: "Pelanggan",
        Messages: "Pesan",
        Settings: "Pengaturan",
        Profile: "Profil",

        "Total Revenue": "Total Pendapatan",
        "Total Orders": "Total Pesanan",
        Customers: "Pelanggan",
        "Conversion Rate": "Tingkat Konversi",

        "In Stock": "Tersedia",
        "Low Stock": "Stok Rendah",
        "Out of Stock": "Stok Habis",

        "Recent Orders": "Pesanan Terbaru",
        "Recent Activity": "Aktivitas Terbaru",
        "Revenue Overview": "Ringkasan Pendapatan",

        "Product Catalog": "Katalog Produk",
        "Inventory Status": "Status Inventaris",
        Categories: "Kategori",
        "Order Status": "Status Pesanan",
        "Order Insights": "Wawasan Pesanan",

        Completed: "Selesai",
        Processing: "Diproses",
        Pending: "Menunggu",

        "Average Order Value": "Nilai Pesanan Rata-rata",
        Growth: "Pertumbuhan",

        "View all": "Lihat semua",
        "Add Product": "Tambah Produk",

        Notifications: "Notifikasi",
        Close: "Tutup",
        Save: "Simpan",
        Cancel: "Batal",
        Search: "Cari",
        Filter: "Filter",
        Language: "Bahasa",
        Theme: "Tema",
        Light: "Terang",
        Dark: "Gelap",

        Administrator: "Administrator",

        "Order ID": "ID Pesanan",
        Customer: "Pelanggan",
        Product: "Produk",
        Date: "Tanggal",
        Total: "Total",
        Amount: "Jumlah",
        Status: "Status",

        "All Orders": "Semua Pesanan",

        Documentation: "Dokumentasi",
        Support: "Dukungan",

        "No notifications": "Tidak ada notifikasi",
        "Mark all as read": "Tandai semua telah dibaca",

        "No results found": "Tidak ada hasil",
        "Loading...": "Memuat...",
        "Something went wrong": "Terjadi kesalahan"

    },

    vi: {

        Dashboard: "Bảng điều khiển",
        Analytics: "Phân tích",
        Products: "Sản phẩm",
        Orders: "Đơn hàng",
        Customers: "Khách hàng",
        Messages: "Tin nhắn",
        Settings: "Cài đặt",
        Profile: "Hồ sơ",

        "Total Revenue": "Tổng doanh thu",
        "Total Orders": "Tổng đơn hàng",
        Customers: "Khách hàng",
        "Conversion Rate": "Tỷ lệ chuyển đổi",

        "In Stock": "Còn hàng",
        "Low Stock": "Sắp hết hàng",
        "Out of Stock": "Hết hàng",

        "Recent Orders": "Đơn hàng gần đây",
        "Recent Activity": "Hoạt động gần đây",
        "Revenue Overview": "Tổng quan doanh thu",

        "Product Catalog": "Danh mục sản phẩm",
        "Inventory Status": "Trạng thái kho",
        Categories: "Danh mục",
        "Order Status": "Trạng thái đơn hàng",
        "Order Insights": "Thông tin đơn hàng",

        Completed: "Hoàn thành",
        Processing: "Đang xử lý",
        Pending: "Đang chờ",

        "Average Order Value": "Giá trị đơn hàng trung bình",
        Growth: "Tăng trưởng",

        "View all": "Xem tất cả",
        "Add Product": "Thêm sản phẩm",

        Notifications: "Thông báo",
        Close: "Đóng",
        Save: "Lưu",
        Cancel: "Hủy",
        Search: "Tìm kiếm",
        Filter: "Lọc",
        Language: "Ngôn ngữ",
        Theme: "Chủ đề",
        Light: "Sáng",
        Dark: "Tối",

        Administrator: "Quản trị viên",

        "Order ID": "Mã đơn hàng",
        Customer: "Khách hàng",
        Product: "Sản phẩm",
        Date: "Ngày",
        Total: "Tổng",
        Amount: "Số tiền",
        Status: "Trạng thái",

        "All Orders": "Tất cả đơn hàng",

        Documentation: "Tài liệu",
        Support: "Hỗ trợ",

        "No notifications": "Không có thông báo",
        "Mark all as read": "Đánh dấu tất cả đã đọc",

        "No results found": "Không tìm thấy kết quả",
        "Loading...": "Đang tải...",
        "Something went wrong": "Đã xảy ra lỗi"

    },

    pl: {

        Dashboard: "Panel",
        Analytics: "Analityka",
        Products: "Produkty",
        Orders: "Zamówienia",
        Customers: "Klienci",
        Messages: "Wiadomości",
        Settings: "Ustawienia",
        Profile: "Profil",

        "Total Revenue": "Całkowity przychód",
        "Total Orders": "Łączna liczba zamówień",
        Customers: "Klienci",
        "Conversion Rate": "Współczynnik konwersji",

        "In Stock": "Na stanie",
        "Low Stock": "Niski stan",
        "Out of Stock": "Brak w magazynie",

        "Recent Orders": "Ostatnie zamówienia",
        "Recent Activity": "Ostatnia aktywność",
        "Revenue Overview": "Przegląd przychodów",

        "Product Catalog": "Katalog produktów",
        "Inventory Status": "Stan magazynu",
        Categories: "Kategorie",
        "Order Status": "Status zamówienia",
        "Order Insights": "Informacje o zamówieniach",

        Completed: "Ukończone",
        Processing: "W trakcie",
        Pending: "Oczekujące",

        "Average Order Value": "Średnia wartość zamówienia",
        Growth: "Wzrost",

        "View all": "Zobacz wszystko",
        "Add Product": "Dodaj produkt",

        Notifications: "Powiadomienia",
        Close: "Zamknij",
        Save: "Zapisz",
        Cancel: "Anuluj",
        Search: "Szukaj",
        Filter: "Filtruj",
        Language: "Język",
        Theme: "Motyw",
        Light: "Jasny",
        Dark: "Ciemny",

        Administrator: "Administrator",

        "Order ID": "ID zamówienia",
        Customer: "Klient",
        Product: "Produkt",
        Date: "Data",
        Total: "Suma",
        Amount: "Kwota",
        Status: "Status",

        "All Orders": "Wszystkie zamówienia",

        Documentation: "Dokumentacja",
        Support: "Wsparcie",

        "No notifications": "Brak powiadomień",
        "Mark all as read": "Oznacz wszystko jako przeczytane",

        "No results found": "Nie znaleziono wyników",
        "Loading...": "Ładowanie...",
        "Something went wrong": "Coś poszło nie tak"

    },

    uk: {

        Dashboard: "Панель керування",
        Analytics: "Аналітика",
        Products: "Товари",
        Orders: "Замовлення",
        Customers: "Клієнти",
        Messages: "Повідомлення",
        Settings: "Налаштування",
        Profile: "Профіль",

        "Total Revenue": "Загальний дохід",
        "Total Orders": "Усього замовлень",
        Customers: "Клієнти",
        "Conversion Rate": "Коефіцієнт конверсії",

        "In Stock": "В наявності",
        "Low Stock": "Малий запас",
        "Out of Stock": "Немає в наявності",

        "Recent Orders": "Останні замовлення",
        "Recent Activity": "Остання активність",
        "Revenue Overview": "Огляд доходів",

        "Product Catalog": "Каталог товарів",
        "Inventory Status": "Стан запасів",
        Categories: "Категорії",
        "Order Status": "Статус замовлення",
        "Order Insights": "Статистика замовлень",

        Completed: "Завершено",
        Processing: "Обробляється",
        Pending: "Очікує",

        "Average Order Value": "Середня вартість замовлення",
        Growth: "Зростання",

        "View all": "Переглянути все",
        "Add Product": "Додати товар",

        Notifications: "Сповіщення",
        Close: "Закрити",
        Save: "Зберегти",
        Cancel: "Скасувати",
        Search: "Пошук",
        Filter: "Фільтр",
        Language: "Мова",
        Theme: "Тема",
        Light: "Світла",
        Dark: "Темна",

        Administrator: "Адміністратор",

        "Order ID": "ID замовлення",
        Customer: "Клієнт",
        Product: "Товар",
        Date: "Дата",
        Total: "Разом",
        Amount: "Сума",
        Status: "Статус",

        "All Orders": "Усі замовлення",

        Documentation: "Документація",
        Support: "Підтримка",

        "No notifications": "Немає сповіщень",
        "Mark all as read": "Позначити все як прочитане",

        "No results found": "Результатів не знайдено",
        "Loading...": "Завантаження...",
        "Something went wrong": "Щось пішло не так"

    },

    sv: {

        Dashboard: "Instrumentpanel",
        Analytics: "Analys",
        Products: "Produkter",
        Orders: "Beställningar",
        Customers: "Kunder",
        Messages: "Meddelanden",
        Settings: "Inställningar",
        Profile: "Profil",

        "Total Revenue": "Totala intäkter",
        "Total Orders": "Totalt antal beställningar",
        Customers: "Kunder",
        "Conversion Rate": "Konverteringsgrad",

        "In Stock": "I lager",
        "Low Stock": "Lågt lager",
        "Out of Stock": "Slut i lager",

        "Recent Orders": "Senaste beställningar",
        "Recent Activity": "Senaste aktivitet",
        "Revenue Overview": "Intäktsöversikt",

        "Product Catalog": "Produktkatalog",
        "Inventory Status": "Lagerstatus",
        Categories: "Kategorier",
        "Order Status": "Orderstatus",
        "Order Insights": "Orderinsikter",

        Completed: "Slutförd",
        Processing: "Bearbetas",
        Pending: "Väntande",

        "Average Order Value": "Genomsnittligt ordervärde",
        Growth: "Tillväxt",

        "View all": "Visa alla",
        "Add Product": "Lägg till produkt",

        Notifications: "Aviseringar",
        Close: "Stäng",
        Save: "Spara",
        Cancel: "Avbryt",
        Search: "Sök",
        Filter: "Filtrera",
        Language: "Språk",
        Theme: "Tema",
        Light: "Ljust",
        Dark: "Mörkt",

        Administrator: "Administratör",

        "Order ID": "Order-ID",
        Customer: "Kund",
        Product: "Produkt",
        Date: "Datum",
        Total: "Totalt",
        Amount: "Belopp",
        Status: "Status",

        "All Orders": "Alla beställningar",

        Documentation: "Dokumentation",
        Support: "Support",

        "No notifications": "Inga aviseringar",
        "Mark all as read": "Markera alla som lästa",

        "No results found": "Inga resultat hittades",
        "Loading...": "Laddar...",
        "Something went wrong": "Något gick fel"

    },

    el: {

        Dashboard: "Πίνακας ελέγχου",
        Analytics: "Αναλυτικά",
        Products: "Προϊόντα",
        Orders: "Παραγγελίες",
        Customers: "Πελάτες",
        Messages: "Μηνύματα",
        Settings: "Ρυθμίσεις",
        Profile: "Προφίλ",

        "Total Revenue": "Συνολικά έσοδα",
        "Total Orders": "Συνολικές παραγγελίες",
        Customers: "Πελάτες",
        "Conversion Rate": "Ποσοστό μετατροπής",

        "In Stock": "Σε απόθεμα",
        "Low Stock": "Χαμηλό απόθεμα",
        "Out of Stock": "Εξαντλημένο",

        "Recent Orders": "Πρόσφατες παραγγελίες",
        "Recent Activity": "Πρόσφατη δραστηριότητα",
        "Revenue Overview": "Επισκόπηση εσόδων",

        "Product Catalog": "Κατάλογος προϊόντων",
        "Inventory Status": "Κατάσταση αποθέματος",
        Categories: "Κατηγορίες",
        "Order Status": "Κατάσταση παραγγελίας",
        "Order Insights": "Στοιχεία παραγγελιών",

        Completed: "Ολοκληρώθηκε",
        Processing: "Σε επεξεργασία",
        Pending: "Σε αναμονή",

        "Average Order Value": "Μέση αξία παραγγελίας",
        Growth: "Ανάπτυξη",

        "View all": "Προβολή όλων",
        "Add Product": "Προσθήκη προϊόντος",

        Notifications: "Ειδοποιήσεις",
        Close: "Κλείσιμο",
        Save: "Αποθήκευση",
        Cancel: "Ακύρωση",
        Search: "Αναζήτηση",
        Filter: "Φίλτρο",
        Language: "Γλώσσα",
        Theme: "Θέμα",
        Light: "Φωτεινό",
        Dark: "Σκούρο",

        Administrator: "Διαχειριστής",

        "Order ID": "ID παραγγελίας",
        Customer: "Πελάτης",
        Product: "Προϊόν",
        Date: "Ημερομηνία",
        Total: "Σύνολο",
        Amount: "Ποσό",
        Status: "Κατάσταση",

        "All Orders": "Όλες οι παραγγελίες",

        Documentation: "Τεκμηρίωση",
        Support: "Υποστήριξη",

        "No notifications": "Δεν υπάρχουν ειδοποιήσεις",
        "Mark all as read": "Σήμανση όλων ως αναγνωσμένων",

        "No results found": "Δεν βρέθηκαν αποτελέσματα",
        "Loading...": "Φόρτωση...",
        "Something went wrong": "Κάτι πήγε στραβά"

    },

    he: {

        Dashboard: "לוח בקרה",
        Analytics: "אנליטיקה",
        Products: "מוצרים",
        Orders: "הזמנות",
        Customers: "לקוחות",
        Messages: "הודעות",
        Settings: "הגדרות",
        Profile: "פרופיל",

        "Total Revenue": "הכנסה כוללת",
        "Total Orders": "סך ההזמנות",
        Customers: "לקוחות",
        "Conversion Rate": "שיעור המרה",

        "In Stock": "במלאי",
        "Low Stock": "מלאי נמוך",
        "Out of Stock": "אזל מהמלאי",

        "Recent Orders": "הזמנות אחרונות",
        "Recent Activity": "פעילות אחרונה",
        "Revenue Overview": "סקירת הכנסות",

        "Product Catalog": "קטלוג מוצרים",
        "Inventory Status": "מצב מלאי",
        Categories: "קטגוריות",
        "Order Status": "מצב הזמנה",
        "Order Insights": "תובנות הזמנות",

        Completed: "הושלם",
        Processing: "בעיבוד",
        Pending: "ממתין",

        "Average Order Value": "ערך הזמנה ממוצע",
        Growth: "צמיחה",

        "View all": "הצג הכל",
        "Add Product": "הוסף מוצר",

        Notifications: "התראות",
        Close: "סגור",
        Save: "שמור",
        Cancel: "ביטול",
        Search: "חיפוש",
        Filter: "סינון",
        Language: "שפה",
        Theme: "ערכת נושא",
        Light: "בהיר",
        Dark: "כהה",

        Administrator: "מנהל",

        "Order ID": "מזהה הזמנה",
        Customer: "לקוח",
        Product: "מוצר",
        Date: "תאריך",
        Total: "סה״כ",
        Amount: "סכום",
        Status: "סטטוס",

        "All Orders": "כל ההזמנות",

        Documentation: "תיעוד",
        Support: "תמיכה",

        "No notifications": "אין התראות",
        "Mark all as read": "סמן הכל כנקרא",

        "No results found": "לא נמצאו תוצאות",
        "Loading...": "טוען...",
        "Something went wrong": "משהו השתבש"

    }

};


/* ============================================================
   04 — UTILITY FUNCTIONS
   ============================================================ */

function $(selector, parent = document) {
    return parent.querySelector(selector);
}


function $$(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
}


function safeText(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function getTranslation(text) {

    const language = translations[AppState.language];

    if (!language) {
        return text;
    }

    return language[text] || text;
}


function normalizeText(text) {

    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


function debounce(callback, delay = 250) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);

    };

}


function wait(ms) {

    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });

}


function getCurrentPage() {

    const path = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    if (!path || path === "index.html") {
        return "dashboard";
    }

    return path.replace(".html", "");

}


function routeToFile(route) {

    return NEXORA.routes[route] || NEXORA.routes.dashboard;

}


function getRouteFromURL() {

    const path = window.location.pathname
        .replace(/\\/g, "/")
        .toLowerCase();

    if (path.endsWith("/index.html") || path.endsWith("/")) {
        return "dashboard";
    }

    if (path.includes("/analytics")) {
        return "analytics";
    }

    if (path.includes("/products")) {
        return "products";
    }

    if (path.includes("/orders")) {
        return "orders";
    }

    if (path.includes("/customers")) {
        return "customers";
    }

    if (path.includes("/messages")) {
        return "messages";
    }

    if (path.includes("/settings")) {
        return "settings";
    }

    if (path.includes("/profile")) {
        return "profile";
    }

    return "dashboard";

}


/* ============================================================
   05 — LOCAL STORAGE
   ============================================================ */

function readStorage(key, fallback = null) {

    try {

        const value = localStorage.getItem(key);

        if (value === null) {
            return fallback;
        }

        return JSON.parse(value);

    } catch {

        return fallback;

    }

}


function writeStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch {

        console.warn("NEXORA: LocalStorage unavailable.");

    }

}


function removeStorage(key) {

    try {

        localStorage.removeItem(key);

    } catch {

        return;

    }

}


/* ============================================================
   06 — LANGUAGE ENGINE
   ============================================================ */

function initializeLanguage() {

    const savedLanguage =
        localStorage.getItem(NEXORA.storage.language);

    if (
        savedLanguage &&
        NEXORA.languages.some(
            language => language.code === savedLanguage
        )
    ) {

        AppState.language = savedLanguage;

    } else {

        AppState.language = NEXORA.defaultLanguage;

    }

    applyLanguage();

}


function applyLanguage() {

    const languageObject =
        NEXORA.languages.find(
            language => language.code === AppState.language
        );

    if (!languageObject) {
        return;
    }

    document.documentElement.lang =
        languageObject.code;

    document.documentElement.dir =
        languageObject.direction;

    document.body.dir =
        languageObject.direction;

    translatePage();

    updateLanguageSelectors();

}


function translatePage() {

    const language =
        translations[AppState.language] || {};

    $$("body *").forEach(element => {

        if (
            element.children.length > 0 &&
            !["OPTION"].includes(element.tagName)
        ) {
            return;
        }

        const original =
            element.getAttribute("data-original-text")
            || element.textContent.trim();

        if (!original) {
            return;
        }

        if (!element.hasAttribute("data-original-text")) {

            element.setAttribute(
                "data-original-text",
                original
            );

        }

        if (language[original]) {

            element.textContent =
                language[original];

        }

    });

    $$("input, textarea").forEach(element => {

        const placeholder =
            element.getAttribute("data-original-placeholder")
            || element.placeholder;

        if (!placeholder) {
            return;
        }

        if (
            !element.hasAttribute(
                "data-original-placeholder"
            )
        ) {

            element.setAttribute(
                "data-original-placeholder",
                placeholder
            );

        }

        if (language[placeholder]) {

            element.placeholder =
                language[placeholder];

        }

    });

}


function updateLanguageSelectors() {

    $$("[data-language-select]").forEach(select => {

        select.value = AppState.language;

    });

}


function setLanguage(languageCode) {

    const exists =
        NEXORA.languages.some(
            language => language.code === languageCode
        );

    if (!exists) {
        return;
    }

    AppState.language = languageCode;

    localStorage.setItem(
        NEXORA.storage.language,
        languageCode
    );

    applyLanguage();

    showToast(
        getTranslation("Language") +
        ": " +
        NEXORA.languages.find(
            language => language.code === languageCode
        ).native
    );

}


function createLanguageMenu() {

    const existing =
        $("#nexoraLanguageMenu");

    if (existing) {
        existing.remove();
    }

    const wrapper =
        document.createElement("div");

    wrapper.id =
        "nexoraLanguageMenu";

    wrapper.className =
        "nexora-language-menu";

    wrapper.innerHTML = `

        <div class="nexora-language-title">
            ${safeText(getTranslation("Language"))}
        </div>

        <div class="nexora-language-grid">

            ${NEXORA.languages.map(language => `

                <button
                    type="button"
                    class="nexora-language-option ${
                        language.code === AppState.language
                            ? "selected"
                            : ""
                    }"
                    data-language="${language.code}"
                >

                    <span class="language-native">
                        ${safeText(language.native)}
                    </span>

                    <span class="language-name">
                        ${safeText(language.name)}
                    </span>

                </button>

            `).join("")}

        </div>
    `;

    document.body.appendChild(wrapper);

    $$("[data-language]", wrapper).forEach(button => {

        button.addEventListener("click", () => {

            setLanguage(
                button.dataset.language
            );

            wrapper.remove();

        });

    });

}


/* ============================================================
   07 — LANGUAGE BUTTON
   ============================================================ */

function addLanguageButton() {

    const headerRight =
        $(".header-right");

    if (!headerRight) {
        return;
    }

    if ($("#nexoraLanguageButton")) {
        return;
    }

    const button =
        document.createElement("button");

    button.id =
        "nexoraLanguageButton";

    button.className =
        "icon-button nexora-language-button";

    button.type =
        "button";

    button.title =
        getTranslation("Language");

    button.innerHTML =
        "文";

    headerRight.insertBefore(
        button,
        headerRight.firstChild
    );

    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const existing =
                $("#nexoraLanguageMenu");

            if (existing) {

                existing.remove();

            } else {

                createLanguageMenu();

            }

        }
    );

}


/* ============================================================
   08 — NAVIGATION ENGINE
   ============================================================ */

function normalizeNavigationLinks() {

    const currentRoute =
        getRouteFromURL();

    $$(".nav-link").forEach(link => {

        const href =
            link.getAttribute("href");

        if (!href || href === "#") {
            return;
        }

        const clean =
            href
                .replace(/\\/g, "/")
                .split("/")
                .pop()
                .replace(".html", "");

        const route =
            clean === "index"
                ? "dashboard"
                : clean;

        link.classList.toggle(
            "active",
            route === currentRoute
        );

    });

}


function isInternalNexoraLink(link) {

    if (!link) {
        return false;
    }

    const href =
        link.getAttribute("href");

    if (!href) {
        return false;
    }

    if (
        href === "#" ||
        href.startsWith("javascript:")
    ) {
        return false;
    }

    if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:")
    ) {
        return false;
    }

    return (
        href.endsWith(".html") ||
        href.startsWith("pages/")
    );

}


function setupNavigation() {

    document.addEventListener(
        "click",
        event => {

            const link =
                event.target.closest("a");

            if (!link) {
                return;
            }

            if (!isInternalNexoraLink(link)) {
                return;
            }

            if (
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            event.preventDefault();

            navigateTo(
                link.getAttribute("href")
            );

        }
    );

}


async function navigateTo(target) {

    if (AppState.loading) {
        return;
    }

    let url =
        target;

    if (!url) {
        return;
    }

    if (
        url === "#" ||
        url === "javascript:void(0)"
    ) {
        return;
    }

    AppState.loading = true;

    showPageLoader();

    try {

        const response =
            await fetch(url, {
                cache: "no-cache"
            });

        if (!response.ok) {
            throw new Error(
                `HTTP ${response.status}`
            );
        }

        const html =
            await response.text();

        const parser =
            new DOMParser();

        const documentObject =
            parser.parseFromString(
                html,
                "text/html"
            );

        const incomingMain =
            documentObject.querySelector(
                ".main-content"
            );

        const currentMain =
            $(".main-content");

        if (!incomingMain || !currentMain) {

            window.location.href =
                url;

            return;

        }

        currentMain.innerHTML =
            incomingMain.innerHTML;

        const title =
            documentObject.querySelector("title");

        if (title) {
            document.title =
                title.textContent;
        }

        history.pushState(
            {
                nexora: true,
                url
            },
            "",
            url
        );

        AppState.currentRoute =
            getRouteFromURL();

        closeSidebar();

        closeNotificationPanel();

        initializePageFeatures();

        applyLanguage();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } catch (error) {

        console.error(
            "NEXORA navigation error:",
            error
        );

        /*
         * Fallback:
         * If AJAX loading fails, the normal page
         * navigation still works.
         */

        window.location.href =
            url;

    } finally {

        AppState.loading =
            false;

        hidePageLoader();

    }

}


function setupHistoryNavigation() {

    window.addEventListener(
        "popstate",
        () => {

            const route =
                getRouteFromURL();

            navigateTo(
                routeToFile(route)
            );

        }
    );

}


/* ============================================================
   09 — PAGE LOADER
   ============================================================ */

function createPageLoader() {

    if ($("#nexoraPageLoader")) {
        return;
    }

    const loader =
        document.createElement("div");

    loader.id =
        "nexoraPageLoader";

    loader.innerHTML = `
        <div class="nexora-loader-bar"></div>
    `;

    document.body.appendChild(loader);

}


function showPageLoader() {

    const loader =
        $("#nexoraPageLoader");

    if (!loader) {
        return;
    }

    loader.classList.add("active");

}


function hidePageLoader() {

    const loader =
        $("#nexoraPageLoader");

    if (!loader) {
        return;
    }

    loader.classList.remove("active");

}


/* ============================================================
   10 — MOBILE SIDEBAR
   ============================================================ */

function setupSidebar() {

    const menuButton =
        $("#menuButton");

    const sidebar =
        $(".sidebar");

    if (!menuButton || !sidebar) {
        return;
    }

    menuButton.onclick =
        event => {

            event.stopPropagation();

            toggleSidebar();

        };


    sidebar.addEventListener(
        "click",
        event => {

            const link =
                event.target.closest(
                    ".nav-link"
                );

            if (link && window.innerWidth <= 760) {

                setTimeout(
                    closeSidebar,
                    150
                );

            }

        }
    );

}


function toggleSidebar() {

    const sidebar =
        $(".sidebar");

    if (!sidebar) {
        return;
    }

    AppState.sidebarOpen =
        !AppState.sidebarOpen;

    sidebar.classList.toggle(
        "open",
        AppState.sidebarOpen
    );

    createSidebarOverlay();

}


function closeSidebar() {

    const sidebar =
        $(".sidebar");

    if (!sidebar) {
        return;
    }

    AppState.sidebarOpen =
        false;

    sidebar.classList.remove("open");

    const overlay =
        $("#nexoraSidebarOverlay");

    if (overlay) {
        overlay.classList.remove("show");
    }

}


function createSidebarOverlay() {

    let overlay =
        $("#nexoraSidebarOverlay");

    if (!overlay) {

        overlay =
            document.createElement("div");

        overlay.id =
            "nexoraSidebarOverlay";

        overlay.addEventListener(
            "click",
            closeSidebar
        );

        document.body.appendChild(
            overlay
        );

    }

    overlay.classList.toggle(
        "show",
        AppState.sidebarOpen
    );

}


/* ============================================================
   11 — NOTIFICATION SYSTEM
   ============================================================ */

function initializeNotifications() {

    const saved =
        readStorage(
            NEXORA.storage.notifications,
            null
        );

    if (Array.isArray(saved)) {

        AppState.notifications =
            saved;

    } else {

        AppState.notifications = [

            {
                id: 1,
                title: "New order received",
                text: "Order #NX-10482 has been received.",
                time: "2m",
                read: false
            },

            {
                id: 2,
                title: "New customer",
                text: "Emily Johnson registered.",
                time: "18m",
                read: false
            },

            {
                id: 3,
                title: "Payment received",
                text: "$249.00 payment received.",
                time: "42m",
                read: false
            }

        ];

        saveNotifications();

    }

    updateNotificationDot();

}


function saveNotifications() {

    writeStorage(
        NEXORA.storage.notifications,
        AppState.notifications
    );

}


function updateNotificationDot() {

    const button =
        $("#notificationButton");

    if (!button) {
        return;
    }

    const unread =
        AppState.notifications.filter(
            notification =>
                !notification.read
        ).length;

    const dot =
        button.querySelector(
            ".notification-dot"
        );

    if (dot) {

        dot.style.display =
            unread > 0
                ? "block"
                : "none";

    }

}


function setupNotifications() {

    const button =
        $("#notificationButton");

    if (!button) {
        return;
    }

    button.onclick =
        event => {

            event.stopPropagation();

            toggleNotificationPanel();

        };

    updateNotificationDot();

}


function toggleNotificationPanel() {

    let panel =
        $("#notificationPanel");

    if (!panel) {

        panel =
            createNotificationPanel();

    }

    panel.classList.toggle("show");

}


function closeNotificationPanel() {

    const panel =
        $("#notificationPanel");

    if (panel) {

        panel.classList.remove(
            "show"
        );

    }

}


function createNotificationPanel() {

    const panel =
        document.createElement("div");

    panel.id =
        "notificationPanel";

    panel.className =
        "notification-panel";

    document.body.appendChild(
        panel
    );

    renderNotifications(
        panel
    );

    return panel;

}


function renderNotifications(panel) {

    const unread =
        AppState.notifications.filter(
            notification =>
                !notification.read
        ).length;

    panel.innerHTML = `

        <div class="notification-header">

            <h3>
                ${safeText(
                    getTranslation(
                        "Notifications"
                    )
                )}
            </h3>

            <button
                type="button"
                id="closeNotifications"
                aria-label="Close"
            >
                ×
            </button>

        </div>

        <div class="nexora-notification-actions">

            ${
                unread > 0
                ? `
                    <button
                        type="button"
                        id="markAllNotifications"
                    >
                        ${safeText(
                            getTranslation(
                                "Mark all as read"
                            )
                        )}
                    </button>
                  `
                : ""
            }

        </div>

        <div class="notification-content">

            ${
                AppState.notifications.length
                ? AppState.notifications.map(
                    notification => `

                        <button
                            type="button"
                            class="
                                nexora-notification-item
                                ${
                                    notification.read
                                        ? "read"
                                        : "unread"
                                }
                            "
                            data-notification-id="${
                                notification.id
                            }"
                        >

                            <strong>
                                ${safeText(
                                    notification.title
                                )}
                            </strong>

                            <span>
                                ${safeText(
                                    notification.text
                                )}
                            </span>

                            <small>
                                ${safeText(
                                    notification.time
                                )}
                            </small>

                        </button>

                    `
                ).join("")
                : `
                    <p>
                        ${safeText(
                            getTranslation(
                                "No notifications"
                            )
                        )}
                    </p>
                `
            }

        </div>

    `;

    const close =
        $("#closeNotifications", panel);

    if (close) {

        close.onclick =
            () => {

                panel.classList.remove(
                    "show"
                );

            };

    }


    const markAll =
        $("#markAllNotifications", panel);

    if (markAll) {

        markAll.onclick =
            () => {

                AppState.notifications =
                    AppState.notifications.map(
                        notification => ({
                            ...notification,
                            read: true
                        })
                    );

                saveNotifications();

                renderNotifications(
                    panel
                );

                updateNotificationDot();

            };

    }


    $$(
        "[data-notification-id]",
        panel
    ).forEach(item => {

        item.addEventListener(
            "click",
            () => {

                const id =
                    Number(
                        item.dataset.notificationId
                    );

                markNotificationRead(
                    id
                );

                item.classList.add("read");

                updateNotificationDot();

            }
        );

    });

}


function markNotificationRead(id) {

    AppState.notifications =
        AppState.notifications.map(
            notification => {

                if (
                    notification.id === id
                ) {

                    return {
                        ...notification,
                        read: true
                    };

                }

                return notification;

            }
        );

    saveNotifications();

}


/* ============================================================
   12 — CLICK OUTSIDE HANDLER
   ============================================================ */

function setupGlobalClickHandler() {

    document.addEventListener(
        "click",
        event => {

            const notificationPanel =
                $("#notificationPanel");

            const notificationButton =
                $("#notificationButton");

            if (
                notificationPanel &&
                notificationPanel.classList.contains(
                    "show"
                ) &&
                !notificationPanel.contains(
                    event.target
                ) &&
                !notificationButton?.contains(
                    event.target
                )
            ) {

                closeNotificationPanel();

            }

            const languageMenu =
                $("#nexoraLanguageMenu");

            const languageButton =
                $("#nexoraLanguageButton");

            if (
                languageMenu &&
                !languageMenu.contains(
                    event.target
                ) &&
                !languageButton?.contains(
                    event.target
                )
            ) {

                languageMenu.remove();

            }

        }
    );

}


/* ============================================================
   13 — PROFILE MENU
   ============================================================ */

function setupProfile() {

    const profile =
        $(".user-profile");

    if (!profile) {
        return;
    }

    profile.style.cursor =
        "pointer";

    profile.setAttribute(
        "tabindex",
        "0"
    );

    profile.addEventListener(
        "click",
        event => {

            if (
                event.target.closest(
                    "button"
                )
            ) {
                return;
            }

            navigateTo(
                routeToFile("profile")
            );

        }
    );

    profile.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                navigateTo(
                    routeToFile("profile")
                );

            }

        }
    );

}


/* ============================================================
   14 — SEARCH ENGINE
   ============================================================ */

function setupSearchInputs() {

    $$(
        "input[type='search'], " +
        "input[data-search], " +
        ".search-input"
    ).forEach(input => {

        input.addEventListener(
            "input",
            debounce(
                () => {

                    AppState.searchQuery =
                        normalizeText(
                            input.value
                        );

                    performSearch(
                        AppState.searchQuery
                    );

                },
                180
            )
        );

    });

}


function performSearch(query) {

    const tables =
        $$("table");

    tables.forEach(table => {

        const rows =
            $$("tbody tr", table);

        if (!rows.length) {
            return;
        }

        rows.forEach(row => {

            const text =
                normalizeText(
                    row.textContent
                );

            row.style.display =
                !query ||
                text.includes(query)
                    ? ""
                    : "none";

        });

    });

    const items =
        $$(".activity-item");

    items.forEach(item => {

        const text =
            normalizeText(
                item.textContent
            );

        item.style.display =
            !query ||
            text.includes(query)
                ? ""
                : "none";

    });

}


/* ============================================================
   15 — ORDER FILTER
   ============================================================ */

function setupOrderFilter() {

    $$("select").forEach(select => {

        const options =
            Array.from(
                select.options
            ).map(
                option =>
                    normalizeText(
                        option.textContent
                    )
            );

        if (
            options.includes(
                "all orders"
            )
        ) {

            select.addEventListener(
                "change",
                () => {

                    AppState.orderFilter =
                        select.value;

                    filterOrders(
                        select.value
                    );

                }
            );

        }

    });

}


function filterOrders(filter) {

    const table =
        $("table");

    if (!table) {
        return;
    }

    const rows =
        $$("tbody tr", table);

    const normalized =
        normalizeText(filter);

    rows.forEach(row => {

        if (
            normalized ===
            normalizeText(
                "All Orders"
            )
        ) {

            row.style.display = "";

            return;

        }

        const status =
            normalizeText(
                row.querySelector(
                    ".status"
                )?.textContent
            );

        row.style.display =
            status === normalized
                ? ""
                : "none";

    });

}


/* ============================================================
   16 — TABLE INTERACTIONS
   ============================================================ */

function setupTableInteractions() {

    $$("tbody tr").forEach(row => {

        row.addEventListener(
            "click",
            event => {

                if (
                    event.target.closest(
                        "button, a, select, input"
                    )
                ) {
                    return;
                }

                row.classList.toggle(
                    "selected-row"
                );

            }
        );

        row.addEventListener(
            "dblclick",
            () => {

                showToast(
                    row.textContent
                        .replace(/\s+/g, " ")
                        .trim()
                );

            }
        );

    });

}


/* ============================================================
   17 — PRODUCT ACTIONS
   ============================================================ */

function setupProductPage() {

    const heading =
        $("h1");

    if (
        !heading ||
        normalizeText(
            heading.textContent
        ) !== "products"
    ) {
        return;
    }

    const addButton =
        $(
            ".card-header a"
        );

    if (
        addButton &&
        normalizeText(
            addButton.textContent
        ).includes(
            "add product"
        )
    ) {

        addButton.addEventListener(
            "click",
            event => {

                event.preventDefault();

                openProductModal();

            }
        );

    }

}


/* ============================================================
   18 — PRODUCT MODAL
   ============================================================ */

function openProductModal() {

    closeModal();

    const modal =
        document.createElement("div");

    modal.id =
        "nexoraModal";

    modal.className =
        "nexora-modal-overlay";

    modal.innerHTML = `

        <div
            class="nexora-modal"
            role="dialog"
            aria-modal="true"
        >

            <div class="nexora-modal-header">

                <div>

                    <h2>
                        ${safeText(
                            getTranslation(
                                "Add Product"
                            )
                        )}
                    </h2>

                    <p>
                        Create a new product.
                    </p>

                </div>

                <button
                    type="button"
                    class="nexora-modal-close"
                    id="nexoraModalClose"
                >
                    ×
                </button>

            </div>

            <form id="nexoraProductForm">

                <div class="nexora-form-group">

                    <label>
                        Product name
                    </label>

                    <input
                        name="productName"
                        required
                        autocomplete="off"
                    >

                </div>

                <div class="nexora-form-group">

                    <label>
                        Category
                    </label>

                    <select name="category">

                        <option>
                            Electronics
                        </option>

                        <option>
                            Accessories
                        </option>

                        <option>
                            Home & Lifestyle
                        </option>

                    </select>

                </div>

                <div class="nexora-form-row">

                    <div class="nexora-form-group">

                        <label>
                            Price
                        </label>

                        <input
                            type="number"
                            name="price"
                            min="0"
                            step="0.01"
                            required
                        >

                    </div>

                    <div class="nexora-form-group">

                        <label>
                            Stock
                        </label>

                        <input
                            type="number"
                            name="stock"
                            min="0"
                            required
                        >

                    </div>

                </div>

                <div class="nexora-modal-actions">

                    <button
                        type="button"
                        class="secondary-button"
                        id="nexoraCancelProduct"
                    >
                        ${safeText(
                            getTranslation(
                                "Cancel"
                            )
                        )}
                    </button>

                    <button
                        type="submit"
                        class="primary-button"
                    >
                        ${safeText(
                            getTranslation(
                                "Save"
                            )
                        )}
                    </button>

                </div>

            </form>

        </div>

    `;

    document.body.appendChild(
        modal
    );

    $("#nexoraModalClose").onclick =
        closeModal;

    $("#nexoraCancelProduct").onclick =
        closeModal;

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );

    $("#nexoraProductForm").addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const form =
                event.currentTarget;

            const formData =
                new FormData(form);

            const product = {

                name:
                    formData.get(
                        "productName"
                    ),

                category:
                    formData.get(
                        "category"
                    ),

                price:
                    formData.get(
                        "price"
                    ),

                stock:
                    formData.get(
                        "stock"
                    )

            };

            addProductToTable(
                product
            );

            closeModal();

            showToast(
                "Product added successfully"
            );

        }
    );

}


function closeModal() {

    const modal =
        $("#nexoraModal");

    if (modal) {
        modal.remove();
    }

}


function addProductToTable(product) {

    const table =
        $("table");

    if (!table) {
        return;
    }

    const tbody =
        $("tbody", table);

    if (!tbody) {
        return;
    }

    const stock =
        Number(
            product.stock
        );

    const status =
        stock <= 10
            ? "Low Stock"
            : "In Stock";

    const statusClass =
        stock <= 10
            ? "pending"
            : "completed";

    const row =
        document.createElement("tr");

    row.innerHTML = `

        <td>
            <strong>
                ${safeText(product.name)}
            </strong>
        </td>

        <td>
            ${safeText(product.category)}
        </td>

        <td>
            <strong>
                $${Number(product.price).toFixed(2)}
            </strong>
        </td>

        <td>
            ${stock}
        </td>

        <td>

            <span class="status ${statusClass}">
                ${safeText(
                    getTranslation(status)
                )}
            </span>

        </td>

    `;

    tbody.prepend(row);

    setupTableInteractions();

}


/* ============================================================
   19 — ANALYTICS PAGE
   ============================================================ */

function setupAnalyticsPage() {

    const heading =
        $("h1");

    if (!heading) {
        return;
    }

    if (
        normalizeText(
            heading.textContent
        ) !== "analytics"
    ) {
        return;
    }

    const selects =
        $$("select");

    selects.forEach(select => {

        select.addEventListener(
            "change",
            () => {

                animateAnalytics();

            }
        );

    });

}


function animateAnalytics() {

    $$(".bar").forEach(
        (bar, index) => {

            const original =
                bar.style.height;

            bar.style.height =
                "0%";

            setTimeout(
                () => {

                    bar.style.height =
                        original ||
                        `${45 + index * 7}%`;

                },
                80 + index * 50
            );

        }
    );

}


/* ============================================================
   20 — SETTINGS PAGE
   ============================================================ */

function setupSettingsPage() {

    const heading =
        $("h1");

    if (!heading) {
        return;
    }

    if (
        normalizeText(
            heading.textContent
        ) !== "settings"
    ) {
        return;
    }

    loadSavedSettings();

    $$(
        ".settings-form input, " +
        ".settings-form select"
    ).forEach(input => {

        input.addEventListener(
            "change",
            markSettingsChanged
        );

        input.addEventListener(
            "input",
            markSettingsChanged
        );

    });


    $$(".primary-button").forEach(
        button => {

            if (
                normalizeText(
                    button.textContent
                ).includes(
                    "save"
                )
            ) {

                button.addEventListener(
                    "click",
                    saveSettings
                );

            }

        }
    );


    $$(".secondary-button").forEach(
        button => {

            if (
                normalizeText(
                    button.textContent
                ).includes(
                    "cancel"
                ) ||
                normalizeText(
                    button.textContent
                ).includes(
                    "discard"
                )
            ) {

                button.addEventListener(
                    "click",
                    resetSettings
                );

            }

        }
    );

}


function markSettingsChanged() {

    document.body.dataset.settingsChanged =
        "true";

}


function loadSavedSettings() {

    const saved =
        readStorage(
            NEXORA.storage.settings,
            {}
        );

    Object.entries(saved).forEach(
        ([name, value]) => {

            const input =
                document.querySelector(
                    `[name="${name}"]`
                );

            if (!input) {
                return;
            }

            if (
                input.type === "checkbox"
            ) {

                input.checked =
                    Boolean(value);

            } else {

                input.value =
                    value;

            }

        }
    );

}


function saveSettings() {

    const settings = {};

    $$(
        ".settings-form input, " +
        ".settings-form select"
    ).forEach(input => {

        if (!input.name) {
            return;
        }

        settings[input.name] =
            input.type === "checkbox"
                ? input.checked
                : input.value;

    });

    writeStorage(
        NEXORA.storage.settings,
        settings
    );

    document.body.dataset.settingsChanged =
        "false";

    showToast(
        getTranslation(
            "Save Changes"
        )
    );

}


function resetSettings() {

    const form =
        $(".settings-form");

    if (!form) {
        return;
    }

    form.reset();

    removeStorage(
        NEXORA.storage.settings
    );

    document.body.dataset.settingsChanged =
        "false";

    showToast(
        getTranslation(
            "Discard Changes"
        )
    );

}


/* ============================================================
   21 — PROFILE PAGE
   ============================================================ */

function setupProfilePage() {

    const heading =
        $("h1");

    if (!heading) {
        return;
    }

    if (
        normalizeText(
            heading.textContent
        ) !== "profile"
    ) {
        return;
    }

    const savedProfile =
        readStorage(
            NEXORA.storage.profile,
            {}
        );

    Object.entries(
        savedProfile
    ).forEach(
        ([name, value]) => {

            const input =
                document.querySelector(
                    `[name="${name}"]`
                );

            if (input) {
                input.value =
                    value;
            }

        }
    );


    $$(
        "form"
    ).forEach(form => {

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const profile = {};

                $$(
                    "input, textarea, select",
                    form
                ).forEach(input => {

                    if (input.name) {

                        profile[input.name] =
                            input.value;

                    }

                });

                writeStorage(
                    NEXORA.storage.profile,
                    profile
                );

                showToast(
                    getTranslation(
                        "Save Changes"
                    )
                );

            }
        );

    });

}


/* ============================================================
   22 — MESSAGES PAGE
   ============================================================ */

function setupMessagesPage() {

    const heading =
        $("h1");

    if (!heading) {
        return;
    }

    if (
        normalizeText(
            heading.textContent
        ) !== "messages"
    ) {
        return;
    }

    $$(".activity-item").forEach(
        item => {

            item.style.cursor =
                "pointer";

            item.addEventListener(
                "click",
                () => {

                    openMessageViewer(
                        item
                    );

                }
            );

        }
    );

}


function openMessageViewer(item) {

    const title =
        item.querySelector(
            "strong"
        )?.textContent ||
        "Message";

    const text =
        item.querySelector(
            "span"
        )?.textContent ||
        "No message content available.";

    const modal =
        document.createElement("div");

    modal.className =
        "nexora-modal-overlay";

    modal.id =
        "nexoraMessageModal";

    modal.innerHTML = `

        <div class="nexora-modal">

            <div class="nexora-modal-header">

                <div>

                    <h2>
                        ${safeText(title)}
                    </h2>

                    <p>
                        ${safeText(text)}
                    </p>

                </div>

                <button
                    type="button"
                    class="nexora-modal-close"
                >
                    ×
                </button>

            </div>

            <div class="nexora-message-body">

                <p>
                    This conversation is ready
                    to be reviewed.
                </p>

            </div>

            <div class="nexora-modal-actions">

                <button
                    type="button"
                    class="primary-button"
                    id="nexoraMessageClose"
                >
                    ${safeText(
                        getTranslation(
                            "Close"
                        )
                    )}
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(
        modal
    );

    const close =
        () => modal.remove();

    $(".nexora-modal-close", modal)
        .onclick = close;

    $("#nexoraMessageClose", modal)
        .onclick = close;

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {
                close();
            }

        }
    );

}


/* ============================================================
   23 — CUSTOMERS PAGE
   ============================================================ */

function setupCustomersPage() {

    const heading =
        $("h1");

    if (!heading) {
        return;
    }

    if (
        normalizeText(
            heading.textContent
        ) !== "customers"
    ) {
        return;
    }

    $$("tbody tr").forEach(
        row => {

            row.style.cursor =
                "pointer";

            row.addEventListener(
                "click",
                () => {

                    openCustomerDetails(
                        row
                    );

                }
            );

        }
    );

}


function openCustomerDetails(row) {

    const cells =
        $$("td", row);

    const values =
        cells.map(
            cell =>
                cell.textContent
                    .replace(/\s+/g, " ")
                    .trim()
        );

    const modal =
        document.createElement("div");

    modal.className =
        "nexora-modal-overlay";

    modal.innerHTML = `

        <div class="nexora-modal">

            <div class="nexora-modal-header">

                <div>

                    <h2>
                        ${safeText(
                            values[1] ||
                            "Customer"
                        )}
                    </h2>

                    <p>
                        Customer information
                    </p>

                </div>

                <button
                    class="nexora-modal-close"
                    type="button"
                >
                    ×
                </button>

            </div>

            <div class="nexora-customer-details">

                ${values.map(
                    (value, index) => `

                        <div
                            class="
                                nexora-detail-row
                            "
                        >

                            <span>
                                ${index + 1}
                            </span>

                            <strong>
                                ${safeText(value)}
                            </strong>

                        </div>

                    `
                ).join("")}

            </div>

        </div>

    `;

    document.body.appendChild(
        modal
    );

    const close =
        () => modal.remove();

    $(".nexora-modal-close", modal)
        .onclick = close;

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {
                close();
            }

        }
    );

}


/* ============================================================
   24 — DASHBOARD QUICK ACTIONS
   ============================================================ */

function setupDashboardPage() {

    const heading =
        $("h1");

    if (!heading) {
        return;
    }

    if (
        normalizeText(
            heading.textContent
        ) !== "dashboard"
    ) {
        return;
    }

    $$(".view-all").forEach(
        link => {

            const text =
                normalizeText(
                    link.textContent
                );

            if (
                text.includes(
                    "view all orders"
                )
            ) {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        navigateTo(
                            routeToFile(
                                "orders"
                            )
                        );

                    }
                );

            }

            else if (
                text === "view all"
            ) {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        navigateTo(
                            routeToFile(
                                "analytics"
                            )
                        );

                    }
                );

            }

        }
    );

}


/* ============================================================
   25 — FOOTER LINKS
   ============================================================ */

function setupFooterLinks() {

    $$(".footer a").forEach(
        link => {

            const text =
                normalizeText(
                    link.textContent
                );

            if (
                text === "documentation"
            ) {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        showInfoModal(
                            "Documentation",
                            "NEXORA documentation is available from the project resources."
                        );

                    }
                );

            }

            if (
                text === "support"
            ) {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        showInfoModal(
                            "Support",
                            "NEXORA support center is ready to help."
                        );

                    }
                );

            }

        }
    );

}


/* ============================================================
   26 — INFORMATION MODAL
   ============================================================ */

function showInfoModal(
    title,
    message
) {

    closeModal();

    const modal =
        document.createElement("div");

    modal.id =
        "nexoraInfoModal";

    modal.className =
        "nexora-modal-overlay";

    modal.innerHTML = `

        <div class="nexora-modal">

            <div class="nexora-modal-header">

                <div>

                    <h2>
                        ${safeText(title)}
                    </h2>

                </div>

                <button
                    type="button"
                    class="nexora-modal-close"
                >
                    ×
                </button>

            </div>

            <div class="nexora-message-body">

                <p>
                    ${safeText(message)}
                </p>

            </div>

            <div class="nexora-modal-actions">

                <button
                    type="button"
                    class="primary-button"
                    data-close-info
                >
                    ${safeText(
                        getTranslation(
                            "Close"
                        )
                    )}
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(
        modal
    );

    const close =
        () => modal.remove();

    $(".nexora-modal-close", modal)
        .onclick = close;

    $("[data-close-info]", modal)
        .onclick = close;

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {
                close();
            }

        }
    );

}


/* ============================================================
   27 — TOAST SYSTEM
   ============================================================ */

function createToastContainer() {

    if (
        $("#nexoraToastContainer")
    ) {
        return;
    }

    const container =
        document.createElement("div");

    container.id =
        "nexoraToastContainer";

    document.body.appendChild(
        container
    );

}


function showToast(
    message,
    duration = 2600
) {

    createToastContainer();

    const container =
        $("#nexoraToastContainer");

    const toast =
        document.createElement("div");

    toast.className =
        "nexora-toast";

    toast.innerHTML = `

        <span class="nexora-toast-icon">
            ✓
        </span>

        <span class="nexora-toast-message">
            ${safeText(message)}
        </span>

    `;

    container.appendChild(
        toast
    );

    requestAnimationFrame(
        () => {

            toast.classList.add(
                "show"
            );

        }
    );

    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

            setTimeout(
                () => toast.remove(),
                250
            );

        },
        duration
    );

}


/* ============================================================
   28 — KEYBOARD SHORTCUTS
   ============================================================ */

function setupKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeModal();

                closeNotificationPanel();

                closeSidebar();

                const languageMenu =
                    $("#nexoraLanguageMenu");

                if (languageMenu) {
                    languageMenu.remove();
                }

            }

            if (
                (event.ctrlKey ||
                 event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                const input =
                    $(
                        "input[type='search'], " +
                        "input[data-search], " +
                        ".search-input"
                    );

                if (input) {
                    input.focus();
                }

            }

        }
    );

}


/* ============================================================
   29 — RESPONSIVE BEHAVIOR
   ============================================================ */

function setupResponsiveBehavior() {

    window.addEventListener(
        "resize",
        debounce(
            () => {

                if (
                    window.innerWidth > 760
                ) {

                    closeSidebar();

                }

            },
            150
        )
    );

}


/* ============================================================
   30 — ACCESSIBILITY
   ============================================================ */

function improveAccessibility() {

    $$(
        "button"
    ).forEach(button => {

        if (
            !button.hasAttribute(
                "type"
            )
        ) {

            button.setAttribute(
                "type",
                "button"
            );

        }

    });


    $$(".nav-link").forEach(
        link => {

            const text =
                link.textContent
                    .replace(/\s+/g, " ")
                    .trim();

            if (!link.getAttribute("aria-label")) {

                link.setAttribute(
                    "aria-label",
                    text
                );

            }

        }
    );


    const notificationButton =
        $("#notificationButton");

    if (
        notificationButton &&
        !notificationButton.getAttribute(
            "aria-label"
        )
    ) {

        notificationButton.setAttribute(
            "aria-label",
            "Notifications"
        );

    }

}


/* ============================================================
   31 — DYNAMIC CSS
   ============================================================ */

function injectApplicationStyles() {

    if (
        $("#nexoraDynamicStyles")
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "nexoraDynamicStyles";

    style.textContent = `

        /* -----------------------------------------
           Page loader
        ----------------------------------------- */

        #nexoraPageLoader {

            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            z-index: 99999;
            pointer-events: none;
            opacity: 0;
            transition: opacity .2s ease;

        }

        #nexoraPageLoader.active {

            opacity: 1;

        }

        .nexora-loader-bar {

            width: 35%;
            height: 100%;
            background: var(--primary);
            animation:
                nexoraLoading 1s
                infinite ease-in-out;

        }

        @keyframes nexoraLoading {

            0% {
                transform: translateX(-100%);
            }

            50% {
                transform: translateX(180%);
            }

            100% {
                transform: translateX(350%);
            }

        }


        /* -----------------------------------------
           Sidebar overlay
        ----------------------------------------- */

        #nexoraSidebarOverlay {

            display: none;
            position: fixed;
            inset: 0;
            background:
                rgba(17, 24, 39, .42);
            backdrop-filter: blur(2px);
            z-index: 999;

        }

        #nexoraSidebarOverlay.show {

            display: block;

        }


        /* -----------------------------------------
           Language menu
        ----------------------------------------- */

        .nexora-language-menu {

            position: fixed;
            top: 76px;
            right: 30px;
            width: 390px;
            max-width: calc(100vw - 30px);
            max-height: 70vh;
            overflow-y: auto;
            padding: 16px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 16px;
            box-shadow:
                0 20px 55px
                rgba(23, 32, 51, .18);
            z-index: 5000;
            animation:
                nexoraMenuIn .18s ease;

        }

        @keyframes nexoraMenuIn {

            from {
                opacity: 0;
                transform:
                    translateY(-8px)
                    scale(.98);
            }

            to {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1);
            }

        }

        .nexora-language-title {

            font-size: 13px;
            font-weight: 800;
            color: var(--text);
            padding: 4px 4px 12px;

        }

        .nexora-language-grid {

            display: grid;
            grid-template-columns:
                repeat(2, minmax(0, 1fr));
            gap: 7px;

        }

        .nexora-language-option {

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
            padding: 10px;
            border: 1px solid var(--border);
            border-radius: 10px;
            background: var(--surface);
            color: var(--text);
            cursor: pointer;
            transition:
                transform .18s ease,
                background .18s ease,
                border-color .18s ease;

        }

        .nexora-language-option:hover {

            transform: translateY(-1px);
            background: #f8f9fc;
            border-color: var(--primary);

        }

        .nexora-language-option.selected {

            border-color: var(--primary);
            background: #eeeefe;

        }

        .language-native {

            font-size: 12px;
            font-weight: 700;

        }

        .language-name {

            font-size: 9px;
            color: var(--muted);

        }


        /* -----------------------------------------
           Notifications
        ----------------------------------------- */

        .nexora-notification-actions {

            padding:
                10px 0 4px;
            text-align: right;

        }

        .nexora-notification-actions button {

            background: transparent;
            color: var(--primary);
            font-size: 11px;
            font-weight: 700;
            cursor: pointer;

        }

        .nexora-notification-item {

            display: flex;
            flex-direction: column;
            gap: 4px;
            width: 100%;
            text-align: left;
            padding: 12px;
            margin-top: 8px;
            border: 1px solid var(--border);
            border-radius: 10px;
            background: var(--surface);
            cursor: pointer;

        }

        .nexora-notification-item:hover {

            background: #fafbff;

        }

        .nexora-notification-item.unread {

            border-left:
                3px solid var(--primary);

        }

        .nexora-notification-item strong {

            font-size: 12px;
            color: var(--text);

        }

        .nexora-notification-item span {

            font-size: 11px;
            color: var(--muted);

        }

        .nexora-notification-item small {

            font-size: 9px;
            color: var(--muted);

        }


        /* -----------------------------------------
           Modal
        ----------------------------------------- */

        .nexora-modal-overlay {

            position: fixed;
            inset: 0;
            display: grid;
            place-items: center;
            padding: 20px;
            background:
                rgba(17, 24, 39, .48);
            backdrop-filter: blur(4px);
            z-index: 9000;
            animation:
                nexoraFadeIn .18s ease;

        }

        @keyframes nexoraFadeIn {

            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }

        }

        .nexora-modal {

            width: min(560px, 100%);
            max-height: 90vh;
            overflow-y: auto;
            background: var(--surface);
            border:
                1px solid var(--border);
            border-radius: 18px;
            box-shadow:
                0 30px 80px
                rgba(23, 32, 51, .22);
            padding: 22px;
            animation:
                nexoraModalIn .2s ease;

        }

        @keyframes nexoraModalIn {

            from {
                opacity: 0;
                transform:
                    translateY(12px)
                    scale(.98);
            }

            to {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1);
            }

        }

        .nexora-modal-header {

            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 20px;
            margin-bottom: 20px;

        }

        .nexora-modal-header h2 {

            font-size: 18px;
            margin-bottom: 5px;

        }

        .nexora-modal-header p {

            margin: 0;
            color: var(--muted);
            font-size: 11px;
            line-height: 1.6;

        }

        .nexora-modal-close {

            width: 34px;
            height: 34px;
            flex-shrink: 0;
            border-radius: 9px;
            background: #f3f4f6;
            color: var(--text);
            font-size: 20px;
            cursor: pointer;

        }

        .nexora-form-group {

            display: flex;
            flex-direction: column;
            gap: 7px;
            margin-bottom: 16px;

        }

        .nexora-form-group label {

            font-size: 11px;
            font-weight: 700;

        }

        .nexora-form-group input,
        .nexora-form-group select {

            width: 100%;
            padding: 11px 12px;
            border:
                1px solid var(--border);
            border-radius: 9px;
            background: var(--surface);
            color: var(--text);
            outline: none;

        }

        .nexora-form-group input:focus,
        .nexora-form-group select:focus {

            border-color:
                var(--primary);

            box-shadow:
                0 0 0 3px
                rgba(99,91,255,.1);

        }

        .nexora-form-row {

            display: grid;
            grid-template-columns:
                1fr 1fr;
            gap: 14px;

        }

        .nexora-modal-actions {

            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 22px;

        }

        .nexora-message-body {

            color: var(--muted);
            font-size: 12px;
            line-height: 1.7;

        }

        .nexora-detail-row {

            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 0;
            border-bottom:
                1px solid var(--border);

        }

        .nexora-detail-row span {

            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border-radius: 8px;
            background: #eeeefe;
            color: var(--primary);
            font-size: 10px;
            font-weight: 800;

        }

        .nexora-detail-row strong {

            font-size: 12px;

        }


        /* -----------------------------------------
           Toast
        ----------------------------------------- */

        #nexoraToastContainer {

            position: fixed;
            right: 22px;
            bottom: 22px;
            display: flex;
            flex-direction: column;
            gap: 9px;
            z-index: 10000;

        }

        .nexora-toast {

            min-width: 230px;
            max-width: 360px;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            background: var(--surface);
            border:
                1px solid var(--border);
            border-radius: 11px;
            box-shadow:
                0 15px 35px
                rgba(23,32,51,.15);
            transform:
                translateY(15px);
            opacity: 0;
            transition:
                transform .2s ease,
                opacity .2s ease;

        }

        .nexora-toast.show {

            transform:
                translateY(0);
            opacity: 1;

        }

        .nexora-toast-icon {

            width: 25px;
            height: 25px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            background: #e8f8f1;
            color: var(--success);
            font-weight: 800;

        }

        .nexora-toast-message {

            color: var(--text);
            font-size: 11px;
            font-weight: 600;

        }


        /* -----------------------------------------
           Selected table row
        ----------------------------------------- */

        .selected-row {

            background:
                #f5f4ff !important;

        }


        /* -----------------------------------------
           RTL
        ----------------------------------------- */

        html[dir="rtl"]
        .nexora-language-menu {

            right: auto;
            left: 30px;

        }

        html[dir="rtl"]
        .nexora-notification-item {

            text-align: right;
            border-left: none;
            border-right: 1px solid var(--border);

        }

        html[dir="rtl"]
        .nexora-notification-item.unread {

            border-right:
                3px solid var(--primary);

        }

        html[dir="rtl"]
        #nexoraToastContainer {

            right: auto;
            left: 22px;

        }


        /* -----------------------------------------
           Mobile
        ----------------------------------------- */

        @media (max-width: 760px) {

            #nexoraSidebarOverlay.show {

                display: block;

            }

            .nexora-language-menu {

                top: 70px;
                right: 12px;
                left: 12px;
                width: auto;
                max-width: none;

            }

            html[dir="rtl"]
            .nexora-language-menu {

                right: 12px;
                left: 12px;

            }

            .nexora-language-grid {

                grid-template-columns:
                    1fr 1fr;

            }

            .nexora-modal {

                padding: 18px;
                border-radius: 15px;

            }

            .nexora-form-row {

                grid-template-columns:
                    1fr;

            }

            .nexora-modal-actions {

                flex-direction: column;

            }

            .nexora-modal-actions button {

                width: 100%;

            }

            #nexoraToastContainer {

                right: 12px;
                left: 12px;
                bottom: 12px;

            }

            html[dir="rtl"]
            #nexoraToastContainer {

                right: 12px;
                left: 12px;

            }

            .nexora-toast {

                min-width: 0;
                width: 100%;

            }

        }

    `;

    document.head.appendChild(
        style
    );

}


/* ============================================================
   32 — ACTIVE PAGE INITIALIZER
   ============================================================ */

function initializePageFeatures() {

    normalizeNavigationLinks();

    setupSidebar();

    setupNotifications();

    setupProfile();

    setupSearchInputs();

    setupOrderFilter();

    setupTableInteractions();

    setupProductPage();

    setupAnalyticsPage();

    setupSettingsPage();

    setupProfilePage();

    setupMessagesPage();

    setupCustomersPage();

    setupDashboardPage();

    setupFooterLinks();

    improveAccessibility();

    addLanguageButton();

    translatePage();

}


/* ============================================================
   33 — DOCUMENTATION / SUPPORT FALLBACK
   ============================================================ */

function setupGenericButtons() {

    $$(
        "button"
    ).forEach(button => {

        if (
            button.id === "menuButton" ||
            button.id === "notificationButton" ||
            button.id === "closeNotifications"
        ) {
            return;
        }

        if (
            button.dataset.nexoraBound
        ) {
            return;
        }

        button.dataset.nexoraBound =
            "true";

    });

}


/* ============================================================
   34 — THEME ENGINE
   ============================================================ */

function initializeTheme() {

    const saved =
        localStorage.getItem(
            NEXORA.storage.theme
        );

    AppState.theme =
        saved || "light";

    applyTheme();

}


function applyTheme() {

    document.documentElement.dataset.theme =
        AppState.theme;

    if (
        AppState.theme === "dark"
    ) {

        injectDarkModeStyles();

    }

}


function setTheme(theme) {

    if (
        theme !== "light" &&
        theme !== "dark"
    ) {
        return;
    }

    AppState.theme =
        theme;

    localStorage.setItem(
        NEXORA.storage.theme,
        theme
    );

    applyTheme();

    showToast(
        theme === "dark"
            ? getTranslation("Dark")
            : getTranslation("Light")
    );

}


function injectDarkModeStyles() {

    if (
        $("#nexoraDarkModeStyles")
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "nexoraDarkModeStyles";

    style.textContent = `

        html[data-theme="dark"] body {

            background:
                #0b1120;

            color:
                #f3f4f6;

        }

        html[data-theme="dark"]
        .dashboard-card,
        html[data-theme="dark"]
        .stat-card,
        html[data-theme="dark"]
        .icon-button,
        html[data-theme="dark"]
        .menu-button,
        html[data-theme="dark"]
        .nexora-modal,
        html[data-theme="dark"]
        .nexora-language-menu,
        html[data-theme="dark"]
        .nexora-language-option,
        html[data-theme="dark"]
        .nexora-toast,
        html[data-theme="dark"]
        .notification-panel {

            background:
                #111827;

            border-color:
                #253047;

            color:
                #f3f4f6;

        }

        html[data-theme="dark"]
        .header-left h1,
        html[data-theme="dark"]
        .card-header h2,
        html[data-theme="dark"]
        .stat-value,
        html[data-theme="dark"]
        .activity-text strong,
        html[data-theme="dark"]
        td,
        html[data-theme="dark"]
        th {

            color:
                #f3f4f6;

        }

        html[data-theme="dark"]
        th {

            background:
                #182235;

        }

        html[data-theme="dark"]
        tbody tr:hover {

            background:
                #182235;

        }

        html[data-theme="dark"]
        .form-group input,
        html[data-theme="dark"]
        .form-group select,
        html[data-theme="dark"]
        .nexora-form-group input,
        html[data-theme="dark"]
        .nexora-form-group select {

            background:
                #0f172a;

            color:
                #f3f4f6;

            border-color:
                #334155;

        }

        html[data-theme="dark"]
        .nexora-language-option:hover {

            background:
                #182235;

        }

    `;

    document.head.appendChild(
        style
    );

}


/* ============================================================
   35 — CURRENCY HELPERS
   ============================================================ */

function formatCurrency(
    value,
    currency = "USD"
) {

    const amount =
        Number(value);

    if (
        Number.isNaN(amount)
    ) {
        return "$0.00";
    }

    try {

        return new Intl.NumberFormat(
            undefined,
            {
                style: "currency",
                currency
            }
        ).format(amount);

    } catch {

        return `$${amount.toFixed(2)}`;

    }

}


/* ============================================================
   36 — DATE HELPERS
   ============================================================ */

function formatDate(
    date = new Date()
) {

    try {

        return new Intl.DateTimeFormat(
            AppState.language,
            {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        ).format(
            new Date(date)
        );

    } catch {

        return String(date);

    }

}


/* ============================================================
   37 — REAL-TIME CLOCK
   ============================================================ */

function createClock() {

    const clock =
        document.createElement("span");

    clock.id =
        "nexoraClock";

    clock.style.cssText = `
        color: var(--muted);
        font-size: 10px;
        white-space: nowrap;
    `;

    return clock;

}


function setupClock() {

    const headerLeft =
        $(".header-left");

    if (!headerLeft) {
        return;
    }

    if (
        $("#nexoraClock")
    ) {
        return;
    }

    const clock =
        createClock();

    const update =
        () => {

            const now =
                new Date();

            clock.textContent =
                now.toLocaleTimeString(
                    AppState.language,
                    {
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                );

        };

    headerLeft.appendChild(
        clock
    );

    update();

    setInterval(
        update,
        30000
    );

}


/* ============================================================
   38 — STAT CARD MICRO INTERACTION
   ============================================================ */

function setupStatCards() {

    $$(".stat-card").forEach(
        card => {

            if (
                card.dataset.motionReady
            ) {
                return;
            }

            card.dataset.motionReady =
                "true";

            card.addEventListener(
                "mouseenter",
                () => {

                    card.style.zIndex =
                        "2";

                }
            );

            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.zIndex =
                        "";

                }
            );

        }
    );

}


/* ============================================================
   39 — CHART ANIMATION
   ============================================================ */

function setupCharts() {

    const bars =
        $$(".bar");

    if (!bars.length) {
        return;
    }

    bars.forEach(
        bar => {

            const target =
                bar.style.height;

            if (!target) {
                return;
            }

            bar.style.height =
                "0%";

            requestAnimationFrame(
                () => {

                    setTimeout(
                        () => {

                            bar.style.height =
                                target;

                        },
                        100
                    );

                }
            );

        }
    );

}


/* ============================================================
   40 — ORDER STATUS QUICK FILTERS
   ============================================================ */

function createOrderQuickFilters() {

    const table =
        $("table");

    if (!table) {
        return;
    }

    const heading =
        $("h1");

    if (!heading) {
        return;
    }

    if (
        normalizeText(
            heading.textContent
        ) !== "orders"
    ) {
        return;
    }

    if (
        $("#nexoraOrderQuickFilters")
    ) {
        return;
    }

    const wrapper =
        document.createElement("div");

    wrapper.id =
        "nexoraOrderQuickFilters";

    wrapper.style.cssText = `
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        margin-bottom:18px;
    `;

    [
        "All Orders",
        "Completed",
        "Processing",
        "Pending"
    ].forEach(
        status => {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.textContent =
                getTranslation(status);

            button.style.cssText = `
                padding:8px 12px;
                border:1px solid var(--border);
                border-radius:9px;
                background:var(--surface);
                color:var(--text);
                font-size:11px;
                font-weight:700;
                cursor:pointer;
            `;

            button.addEventListener(
                "click",
                () => {

                    filterOrders(status);

                    $$(
                        "#nexoraOrderQuickFilters button"
                    ).forEach(
                        item => {

                            item.style.borderColor =
                                "var(--border)";

                        }
                    );

                    button.style.borderColor =
                        "var(--primary)";

                }
            );

            wrapper.appendChild(
                button
            );

        }
    );

    const card =
        table.closest(
            ".dashboard-card"
        );

    if (card) {

        card.insertBefore(
            wrapper,
            table.parentElement
        );

    }

}


/* ============================================================
   41 — DATA REFRESH SIMULATION
   ============================================================ */

function refreshDashboardData() {

    const stats =
        $$(".stat-value");

    stats.forEach(
        stat => {

            stat.animate(
                [
                    {
                        opacity: 0.35,
                        transform:
                            "translateY(3px)"
                    },
                    {
                        opacity: 1,
                        transform:
                            "translateY(0)"
                    }
                ],
                {
                    duration: 350,
                    easing: "ease-out"
                }
            );

        }
    );

}


/* ============================================================
   42 — AUTO REFRESH EVENT
   ============================================================ */

function setupAutoRefresh() {

    setInterval(
        () => {

            if (
                document.visibilityState ===
                "visible"
            ) {

                refreshDashboardData();

                updateNotificationDot();

            }

        },
        60000
    );

}


/* ============================================================
   43 — UNSAVED CHANGES PROTECTION
   ============================================================ */

function setupUnsavedChangesProtection() {

    window.addEventListener(
        "beforeunload",
        event => {

            if (
                document.body.dataset.settingsChanged ===
                "true"
            ) {

                event.preventDefault();

                event.returnValue =
                    "";

            }

        }
    );

}


/* ============================================================
   44 — BROKEN HASH LINKS
   ============================================================ */

function fixHashLinks() {

    $$(
        "a[href='#']"
    ).forEach(
        link => {

            if (
                link.dataset.hashFixed
            ) {
                return;
            }

            link.dataset.hashFixed =
                "true";

            const text =
                normalizeText(
                    link.textContent
                );

            if (
                text.includes(
                    "view all orders"
                )
            ) {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        navigateTo(
                            routeToFile(
                                "orders"
                            )
                        );

                    }
                );

                return;

            }

            if (
                text.includes(
                    "view all"
                )
            ) {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        navigateTo(
                            routeToFile(
                                "analytics"
                            )
                        );

                    }
                );

                return;

            }

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                }
            );

        }
    );

}


/* ============================================================
   45 — PAGE TITLE MANAGEMENT
   ============================================================ */

function updatePageTitle() {

    const route =
        getRouteFromURL();

    const titles = {

        dashboard:
            "NEXORA — Modern Admin Dashboard",

        analytics:
            "NEXORA — Analytics",

        products:
            "NEXORA — Products",

        orders:
            "NEXORA — Orders",

        customers:
            "NEXORA — Customers",

        messages:
            "NEXORA — Messages",

        settings:
            "NEXORA — Settings",

        profile:
            "NEXORA — Profile"

    };

    if (titles[route]) {

        document.title =
            titles[route];

    }

}


/* ============================================================
   46 — ACTIVE ROUTE
   ============================================================ */

function updateApplicationRoute() {

    AppState.currentRoute =
        getRouteFromURL();

    normalizeNavigationLinks();

    updatePageTitle();

}


/* ============================================================
   47 — LANGUAGE CHANGE EVENT
   ============================================================ */

function setupLanguageEvents() {

    document.addEventListener(
        "change",
        event => {

            const select =
                event.target.closest(
                    "[data-language-select]"
                );

            if (!select) {
                return;
            }

            setLanguage(
                select.value
            );

        }
    );

}


/* ============================================================
   48 — DETECT NATIVE LANGUAGE
   ============================================================ */

function detectBrowserLanguage() {

    const saved =
        localStorage.getItem(
            NEXORA.storage.language
        );

    if (saved) {
        return saved;
    }

    const browser =
        navigator.language
            ?.slice(0, 2)
            .toLowerCase();

    const supported =
        NEXORA.languages.some(
            language =>
                language.code === browser
        );

    if (supported) {
        return browser;
    }

    return "en";

}


/* ============================================================
   49 — INITIAL LANGUAGE
   ============================================================ */

function initializeDetectedLanguage() {

    if (
        localStorage.getItem(
            NEXORA.storage.language
        )
    ) {
        return;
    }

    AppState.language =
        detectBrowserLanguage();

    localStorage.setItem(
        NEXORA.storage.language,
        AppState.language
    );

}


/* ============================================================
   50 — APPLICATION INITIALIZATION
   ============================================================ */

function initializeNexora() {

    if (
        AppState.initialized
    ) {
        return;
    }

    AppState.initialized =
        true;

    injectApplicationStyles();

    createPageLoader();

    createToastContainer();

    initializeDetectedLanguage();

    initializeLanguage();

    initializeNotifications();

    initializeTheme();

    setupNavigation();

    setupHistoryNavigation();

    setupGlobalClickHandler();

    setupKeyboardShortcuts();

    setupResponsiveBehavior();

    setupLanguageEvents();

    initializePageFeatures();

    setupClock();

    setupStatCards();

    setupCharts();

    createOrderQuickFilters();

    setupAutoRefresh();

    setupUnsavedChangesProtection();

    fixHashLinks();

    setupGenericButtons();

    updateApplicationRoute();

}


/* ============================================================
   51 — DOM READY
   ============================================================ */

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


/* ============================================================
   52 — GLOBAL API
   ============================================================ */

window.NEXORA = {

    version:
        NEXORA.version,

    state:
        AppState,

    languages:
        NEXORA.languages,

    translations,

    navigate:
        navigateTo,

    setLanguage,

    setTheme,

    showToast,

    openProduct:
        openProductModal,

    closeModal,

    openCustomer:
        openCustomerDetails,

    markNotificationRead,

    formatCurrency,

    formatDate

};


/* ============================================================
   END OF NEXORA APPLICATION ENGINE
   ============================================================ */
