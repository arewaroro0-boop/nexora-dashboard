```javascript
/* =========================================================
   NEXORA — Professional Dashboard Controller
   Version 2.0
   ========================================================= */

(() => {
    "use strict";

    /* =========================================================
       1. GLOBAL CONFIGURATION
       ========================================================= */

    const STORAGE = {
        language: "nexora_language",
        theme: "nexora_theme",
        notifications: "nexora_notifications"
    };

    const LANGUAGES = {
        en: { name: "English", flag: "🇬🇧", dir: "ltr" },
        ar: { name: "العربية", flag: "🇸🇦", dir: "rtl" },
        fr: { name: "Français", flag: "🇫🇷", dir: "ltr" },
        es: { name: "Español", flag: "🇪🇸", dir: "ltr" },
        de: { name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
        it: { name: "Italiano", flag: "🇮🇹", dir: "ltr" },
        pt: { name: "Português", flag: "🇵🇹", dir: "ltr" },
        ru: { name: "Русский", flag: "🇷🇺", dir: "ltr" },
        zh: { name: "中文", flag: "🇨🇳", dir: "ltr" },
        ja: { name: "日本語", flag: "🇯🇵", dir: "ltr" },
        ko: { name: "한국어", flag: "🇰🇷", dir: "ltr" },
        tr: { name: "Türkçe", flag: "🇹🇷", dir: "ltr" },
        nl: { name: "Nederlands", flag: "🇳🇱", dir: "ltr" },
        pl: { name: "Polski", flag: "🇵🇱", dir: "ltr" },
        sv: { name: "Svenska", flag: "🇸🇪", dir: "ltr" },
        hi: { name: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
        id: { name: "Bahasa Indonesia", flag: "🇮🇩", dir: "ltr" },
        vi: { name: "Tiếng Việt", flag: "🇻🇳", dir: "ltr" },
        th: { name: "ไทย", flag: "🇹🇭", dir: "ltr" },
        el: { name: "Ελληνικά", flag: "🇬🇷", dir: "ltr" },
        uk: { name: "Українська", flag: "🇺🇦", dir: "ltr" }
    };

    const translations = {

        en: {
            dashboard: "Dashboard",
            analytics: "Analytics",
            products: "Products",
            orders: "Orders",
            customers: "Customers",
            messages: "Messages",
            settings: "Settings",
            profile: "Profile",
            notifications: "Notifications",
            close: "Close",
            search: "Search",
            save: "Save Changes",
            cancel: "Cancel",
            add: "Add",
            edit: "Edit",
            delete: "Delete",
            viewAll: "View all",
            allOrders: "All Orders",
            completed: "Completed",
            processing: "Processing",
            pending: "Pending",
            inStock: "In Stock",
            lowStock: "Low Stock",
            outOfStock: "Out of Stock",
            totalRevenue: "Total Revenue",
            totalOrders: "Total Orders",
            customersCount: "Customers",
            conversionRate: "Conversion Rate",
            language: "Language",
            theme: "Theme",
            light: "Light",
            dark: "Dark",
            system: "System"
        },

        ar: {
            dashboard: "لوحة التحكم",
            analytics: "التحليلات",
            products: "المنتجات",
            orders: "الطلبات",
            customers: "العملاء",
            messages: "الرسائل",
            settings: "الإعدادات",
            profile: "الملف الشخصي",
            notifications: "الإشعارات",
            close: "إغلاق",
            search: "بحث",
            save: "حفظ التغييرات",
            cancel: "إلغاء",
            add: "إضافة",
            edit: "تعديل",
            delete: "حذف",
            viewAll: "عرض الكل",
            allOrders: "كل الطلبات",
            completed: "مكتمل",
            processing: "قيد المعالجة",
            pending: "معلّق",
            inStock: "متوفر",
            lowStock: "مخزون منخفض",
            outOfStock: "نفد المخزون",
            totalRevenue: "إجمالي الإيرادات",
            totalOrders: "إجمالي الطلبات",
            customersCount: "العملاء",
            conversionRate: "معدل التحويل",
            language: "اللغة",
            theme: "المظهر",
            light: "فاتح",
            dark: "داكن",
            system: "النظام"
        },

        fr: {
            dashboard: "Tableau de bord",
            analytics: "Analytique",
            products: "Produits",
            orders: "Commandes",
            customers: "Clients",
            messages: "Messages",
            settings: "Paramètres",
            profile: "Profil",
            notifications: "Notifications",
            close: "Fermer",
            search: "Rechercher",
            save: "Enregistrer",
            cancel: "Annuler",
            add: "Ajouter",
            edit: "Modifier",
            delete: "Supprimer",
            viewAll: "Voir tout",
            completed: "Terminée",
            processing: "En traitement",
            pending: "En attente",
            inStock: "En stock",
            lowStock: "Stock faible",
            outOfStock: "Rupture de stock",
            language: "Langue",
            theme: "Thème",
            light: "Clair",
            dark: "Sombre",
            system: "Système"
        },

        es: {
            dashboard: "Panel",
            analytics: "Analítica",
            products: "Productos",
            orders: "Pedidos",
            customers: "Clientes",
            messages: "Mensajes",
            settings: "Configuración",
            profile: "Perfil",
            notifications: "Notificaciones",
            close: "Cerrar",
            search: "Buscar",
            save: "Guardar cambios",
            cancel: "Cancelar",
            add: "Añadir",
            edit: "Editar",
            delete: "Eliminar",
            viewAll: "Ver todo",
            completed: "Completado",
            processing: "Procesando",
            pending: "Pendiente",
            inStock: "En stock",
            lowStock: "Stock bajo",
            outOfStock: "Agotado",
            language: "Idioma",
            theme: "Tema",
            light: "Claro",
            dark: "Oscuro",
            system: "Sistema"
        },

        de: {
            dashboard: "Dashboard",
            analytics: "Analysen",
            products: "Produkte",
            orders: "Bestellungen",
            customers: "Kunden",
            messages: "Nachrichten",
            settings: "Einstellungen",
            profile: "Profil",
            notifications: "Benachrichtigungen",
            close: "Schließen",
            search: "Suchen",
            save: "Änderungen speichern",
            cancel: "Abbrechen",
            add: "Hinzufügen",
            edit: "Bearbeiten",
            delete: "Löschen",
            viewAll: "Alle anzeigen",
            completed: "Abgeschlossen",
            processing: "In Bearbeitung",
            pending: "Ausstehend",
            inStock: "Auf Lager",
            lowStock: "Niedriger Bestand",
            outOfStock: "Nicht verfügbar",
            language: "Sprache",
            theme: "Design",
            light: "Hell",
            dark: "Dunkel",
            system: "System"
        },

        it: {
            dashboard: "Dashboard",
            analytics: "Analisi",
            products: "Prodotti",
            orders: "Ordini",
            customers: "Clienti",
            messages: "Messaggi",
            settings: "Impostazioni",
            profile: "Profilo",
            notifications: "Notifiche",
            close: "Chiudi",
            search: "Cerca",
            save: "Salva modifiche",
            cancel: "Annulla",
            add: "Aggiungi",
            edit: "Modifica",
            delete: "Elimina",
            viewAll: "Visualizza tutto",
            completed: "Completato",
            processing: "In elaborazione",
            pending: "In attesa",
            inStock: "Disponibile",
            lowStock: "Scorte basse",
            outOfStock: "Esaurito",
            language: "Lingua",
            theme: "Tema",
            light: "Chiaro",
            dark: "Scuro",
            system: "Sistema"
        },

        pt: {
            dashboard: "Painel",
            analytics: "Análises",
            products: "Produtos",
            orders: "Pedidos",
            customers: "Clientes",
            messages: "Mensagens",
            settings: "Configurações",
            profile: "Perfil",
            notifications: "Notificações",
            close: "Fechar",
            search: "Pesquisar",
            save: "Salvar alterações",
            cancel: "Cancelar",
            add: "Adicionar",
            edit: "Editar",
            delete: "Excluir",
            viewAll: "Ver tudo",
            completed: "Concluído",
            processing: "Processando",
            pending: "Pendente",
            inStock: "Em estoque",
            lowStock: "Estoque baixo",
            outOfStock: "Fora de estoque",
            language: "Idioma",
            theme: "Tema",
            light: "Claro",
            dark: "Escuro",
            system: "Sistema"
        },

        ru: {
            dashboard: "Панель управления",
            analytics: "Аналитика",
            products: "Товары",
            orders: "Заказы",
            customers: "Клиенты",
            messages: "Сообщения",
            settings: "Настройки",
            profile: "Профиль",
            notifications: "Уведомления",
            close: "Закрыть",
            search: "Поиск",
            save: "Сохранить",
            cancel: "Отмена",
            add: "Добавить",
            edit: "Изменить",
            delete: "Удалить",
            viewAll: "Показать все",
            completed: "Завершено",
            processing: "В обработке",
            pending: "Ожидает",
            inStock: "В наличии",
            lowStock: "Мало товара",
            outOfStock: "Нет в наличии",
            language: "Язык",
            theme: "Тема",
            light: "Светлая",
            dark: "Темная",
            system: "Система"
        },

        zh: {
            dashboard: "仪表板",
            analytics: "分析",
            products: "产品",
            orders: "订单",
            customers: "客户",
            messages: "消息",
            settings: "设置",
            profile: "个人资料",
            notifications: "通知",
            close: "关闭",
            search: "搜索",
            save: "保存更改",
            cancel: "取消",
            add: "添加",
            edit: "编辑",
            delete: "删除",
            viewAll: "查看全部",
            completed: "已完成",
            processing: "处理中",
            pending: "待处理",
            inStock: "有库存",
            lowStock: "库存不足",
            outOfStock: "缺货",
            language: "语言",
            theme: "主题",
            light: "浅色",
            dark: "深色",
            system: "系统"
        },

        ja: {
            dashboard: "ダッシュボード",
            analytics: "分析",
            products: "商品",
            orders: "注文",
            customers: "顧客",
            messages: "メッセージ",
            settings: "設定",
            profile: "プロフィール",
            notifications: "通知",
            close: "閉じる",
            search: "検索",
            save: "変更を保存",
            cancel: "キャンセル",
            add: "追加",
            edit: "編集",
            delete: "削除",
            viewAll: "すべて表示",
            completed: "完了",
            processing: "処理中",
            pending: "保留中",
            inStock: "在庫あり",
            lowStock: "在庫少",
            outOfStock: "在庫切れ",
            language: "言語",
            theme: "テーマ",
            light: "ライト",
            dark: "ダーク",
            system: "システム"
        },

        ko: {
            dashboard: "대시보드",
            analytics: "분석",
            products: "제품",
            orders: "주문",
            customers: "고객",
            messages: "메시지",
            settings: "설정",
            profile: "프로필",
            notifications: "알림",
            close: "닫기",
            search: "검색",
            save: "변경사항 저장",
            cancel: "취소",
            add: "추가",
            edit: "수정",
            delete: "삭제",
            viewAll: "모두 보기",
            completed: "완료",
            processing: "처리 중",
            pending: "대기 중",
            inStock: "재고 있음",
            lowStock: "재고 부족",
            outOfStock: "품절",
            language: "언어",
            theme: "테마",
            light: "라이트",
            dark: "다크",
            system: "시스템"
        },

        tr: {
            dashboard: "Kontrol Paneli",
            analytics: "Analiz",
            products: "Ürünler",
            orders: "Siparişler",
            customers: "Müşteriler",
            messages: "Mesajlar",
            settings: "Ayarlar",
            profile: "Profil",
            notifications: "Bildirimler",
            close: "Kapat",
            search: "Ara",
            save: "Değişiklikleri Kaydet",
            cancel: "İptal",
            add: "Ekle",
            edit: "Düzenle",
            delete: "Sil",
            viewAll: "Tümünü Gör",
            completed: "Tamamlandı",
            processing: "İşleniyor",
            pending: "Beklemede",
            inStock: "Stokta",
            lowStock: "Düşük Stok",
            outOfStock: "Stok Yok",
            language: "Dil",
            theme: "Tema",
            light: "Açık",
            dark: "Koyu",
            system: "Sistem"
        },

        nl: {
            dashboard: "Dashboard",
            analytics: "Analyse",
            products: "Producten",
            orders: "Bestellingen",
            customers: "Klanten",
            messages: "Berichten",
            settings: "Instellingen",
            profile: "Profiel",
            notifications: "Meldingen",
            close: "Sluiten",
            search: "Zoeken",
            save: "Wijzigingen opslaan",
            cancel: "Annuleren",
            add: "Toevoegen",
            edit: "Bewerken",
            delete: "Verwijderen",
            viewAll: "Alles bekijken",
            completed: "Voltooid",
            processing: "In behandeling",
            pending: "In afwachting",
            inStock: "Op voorraad",
            lowStock: "Lage voorraad",
            outOfStock: "Niet op voorraad",
            language: "Taal",
            theme: "Thema",
            light: "Licht",
            dark: "Donker",
            system: "Systeem"
        },

        pl: {
            dashboard: "Panel",
            analytics: "Analityka",
            products: "Produkty",
            orders: "Zamówienia",
            customers: "Klienci",
            messages: "Wiadomości",
            settings: "Ustawienia",
            profile: "Profil",
            notifications: "Powiadomienia",
            close: "Zamknij",
            search: "Szukaj",
            save: "Zapisz zmiany",
            cancel: "Anuluj",
            add: "Dodaj",
            edit: "Edytuj",
            delete: "Usuń",
            viewAll: "Zobacz wszystko",
            completed: "Ukończone",
            processing: "W trakcie",
            pending: "Oczekujące",
            inStock: "Dostępne",
            lowStock: "Niski stan",
            outOfStock: "Brak w magazynie",
            language: "Język",
            theme: "Motyw",
            light: "Jasny",
            dark: "Ciemny",
            system: "System"
        },

        sv: {
            dashboard: "Instrumentpanel",
            analytics: "Analys",
            products: "Produkter",
            orders: "Beställningar",
            customers: "Kunder",
            messages: "Meddelanden",
            settings: "Inställningar",
            profile: "Profil",
            notifications: "Aviseringar",
            close: "Stäng",
            search: "Sök",
            save: "Spara ändringar",
            cancel: "Avbryt",
            add: "Lägg till",
            edit: "Redigera",
            delete: "Ta bort",
            viewAll: "Visa alla",
            completed: "Slutförd",
            processing: "Bearbetas",
            pending: "Väntande",
            inStock: "I lager",
            lowStock: "Lågt lager",
            outOfStock: "Slut i lager",
            language: "Språk",
            theme: "Tema",
            light: "Ljust",
            dark: "Mörkt",
            system: "System"
        },

        hi: {
            dashboard: "डैशबोर्ड",
            analytics: "विश्लेषण",
            products: "उत्पाद",
            orders: "ऑर्डर",
            customers: "ग्राहक",
            messages: "संदेश",
            settings: "सेटिंग्स",
            profile: "प्रोफ़ाइल",
            notifications: "सूचनाएं",
            close: "बंद करें",
            search: "खोजें",
            save: "परिवर्तन सहेजें",
            cancel: "रद्द करें",
            add: "जोड़ें",
            edit: "संपादित करें",
            delete: "हटाएं",
            viewAll: "सभी देखें",
            completed: "पूर्ण",
            processing: "प्रक्रिया में",
            pending: "लंबित",
            inStock: "स्टॉक में",
            lowStock: "कम स्टॉक",
            outOfStock: "स्टॉक खत्म",
            language: "भाषा",
            theme: "थीम",
            light: "हल्का",
            dark: "गहरा",
            system: "सिस्टम"
        },

        id: {
            dashboard: "Dasbor",
            analytics: "Analitik",
            products: "Produk",
            orders: "Pesanan",
            customers: "Pelanggan",
            messages: "Pesan",
            settings: "Pengaturan",
            profile: "Profil",
            notifications: "Notifikasi",
            close: "Tutup",
            search: "Cari",
            save: "Simpan perubahan",
            cancel: "Batal",
            add: "Tambah",
            edit: "Edit",
            delete: "Hapus",
            viewAll: "Lihat semua",
            completed: "Selesai",
            processing: "Diproses",
            pending: "Tertunda",
            inStock: "Tersedia",
            lowStock: "Stok rendah",
            outOfStock: "Stok habis",
            language: "Bahasa",
            theme: "Tema",
            light: "Terang",
            dark: "Gelap",
            system: "Sistem"
        },

        vi: {
            dashboard: "Bảng điều khiển",
            analytics: "Phân tích",
            products: "Sản phẩm",
            orders: "Đơn hàng",
            customers: "Khách hàng",
            messages: "Tin nhắn",
            settings: "Cài đặt",
            profile: "Hồ sơ",
            notifications: "Thông báo",
            close: "Đóng",
            search: "Tìm kiếm",
            save: "Lưu thay đổi",
            cancel: "Hủy",
            add: "Thêm",
            edit: "Chỉnh sửa",
            delete: "Xóa",
            viewAll: "Xem tất cả",
            completed: "Hoàn thành",
            processing: "Đang xử lý",
            pending: "Đang chờ",
            inStock: "Còn hàng",
            lowStock: "Sắp hết hàng",
            outOfStock: "Hết hàng",
            language: "Ngôn ngữ",
            theme: "Chủ đề",
            light: "Sáng",
            dark: "Tối",
            system: "Hệ thống"
        },

        th: {
            dashboard: "แดชบอร์ด",
            analytics: "การวิเคราะห์",
            products: "สินค้า",
            orders: "คำสั่งซื้อ",
            customers: "ลูกค้า",
            messages: "ข้อความ",
            settings: "การตั้งค่า",
            profile: "โปรไฟล์",
            notifications: "การแจ้งเตือน",
            close: "ปิด",
            search: "ค้นหา",
            save: "บันทึกการเปลี่ยนแปลง",
            cancel: "ยกเลิก",
            add: "เพิ่ม",
            edit: "แก้ไข",
            delete: "ลบ",
            viewAll: "ดูทั้งหมด",
            completed: "เสร็จสมบูรณ์",
            processing: "กำลังดำเนินการ",
            pending: "รอดำเนินการ",
            inStock: "มีสินค้า",
            lowStock: "สินค้าใกล้หมด",
            outOfStock: "สินค้าหมด",
            language: "ภาษา",
            theme: "ธีม",
            light: "สว่าง",
            dark: "มืด",
            system: "ระบบ"
        },

        el: {
            dashboard: "Πίνακας ελέγχου",
            analytics: "Αναλυτικά",
            products: "Προϊόντα",
            orders: "Παραγγελίες",
            customers: "Πελάτες",
            messages: "Μηνύματα",
            settings: "Ρυθμίσεις",
            profile: "Προφίλ",
            notifications: "Ειδοποιήσεις",
            close: "Κλείσιμο",
            search: "Αναζήτηση",
            save: "Αποθήκευση αλλαγών",
            cancel: "Ακύρωση",
            add: "Προσθήκη",
            edit: "Επεξεργασία",
            delete: "Διαγραφή",
            viewAll: "Προβολή όλων",
            completed: "Ολοκληρώθηκε",
            processing: "Σε επεξεργασία",
            pending: "Σε αναμονή",
            inStock: "Σε απόθεμα",
            lowStock: "Χαμηλό απόθεμα",
            outOfStock: "Εξαντλημένο",
            language: "Γλώσσα",
            theme: "Θέμα",
            light: "Φωτεινό",
            dark: "Σκούρο",
            system: "Σύστημα"
        },

        uk: {
            dashboard: "Панель керування",
            analytics: "Аналітика",
            products: "Товари",
            orders: "Замовлення",
            customers: "Клієнти",
            messages: "Повідомлення",
            settings: "Налаштування",
            profile: "Профіль",
            notifications: "Сповіщення",
            close: "Закрити",
            search: "Пошук",
            save: "Зберегти зміни",
            cancel: "Скасувати",
            add: "Додати",
            edit: "Редагувати",
            delete: "Видалити",
            viewAll: "Переглянути все",
            completed: "Завершено",
            processing: "В обробці",
            pending: "Очікує",
            inStock: "У наявності",
            lowStock: "Мало товару",
            outOfStock: "Немає в наявності",
            language: "Мова",
            theme: "Тема",
            light: "Світла",
            dark: "Темна",
            system: "Система"
        }
    };

    /* =========================================================
       2. HELPERS
       ========================================================= */

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);

    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];

    const safeStorageGet = (key, fallback = null) => {
        try {
            return localStorage.getItem(key) ?? fallback;
        } catch {
            return fallback;
        }
    };

    const safeStorageSet = (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch {
            /* Storage unavailable — silently continue */
        }
    };

    const currentPage = () => {
        const path = window.location.pathname.toLowerCase();

        if (path.includes("/analytics")) return "analytics";
        if (path.includes("/products")) return "products";
        if (path.includes("/orders")) return "orders";
        if (path.includes("/customers")) return "customers";
        if (path.includes("/messages")) return "messages";
        if (path.includes("/settings")) return "settings";
        if (path.includes("/profile")) return "profile";

        return "dashboard";
    };

    const getTranslation = (key, language) => {
        return translations[language]?.[key]
            || translations.en[key]
            || key;
    };

    /* =========================================================
       3. LANGUAGE SYSTEM
       ========================================================= */

    function getCurrentLanguage() {
        const saved = safeStorageGet(STORAGE.language, "en");
        return LANGUAGES[saved] ? saved : "en";
    }

    function applyLanguage(language) {

        if (!LANGUAGES[language]) {
            language = "en";
        }

        const languageData = LANGUAGES[language];

        document.documentElement.lang = language;
        document.documentElement.dir = languageData.dir;

        document.body.classList.toggle(
            "rtl",
            languageData.dir === "rtl"
        );

        $$("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (!key) return;

            element.textContent =
                getTranslation(key, language);
        });

        $$("[data-i18n-placeholder]").forEach(element => {

            const key = element.dataset.i18nPlaceholder;

            element.placeholder =
                getTranslation(key, language);
        });

        $$("[data-language-name]").forEach(element => {
            element.textContent = languageData.name;
        });

        $$("[data-language-flag]").forEach(element => {
            element.textContent = languageData.flag;
        });

        safeStorageSet(STORAGE.language, language);

        updateLanguageControls(language);
    }

    function updateLanguageControls(language) {

        $$("[data-language]").forEach(button => {

            const active =
                button.dataset.language === language;

            button.classList.toggle("active", active);
            button.setAttribute("aria-selected", active);
        });

        const select = $("#languageSelect");

        if (select) {
            select.value = language;
        }
    }

    function createLanguageMenu() {

        const select = $("#languageSelect");

        if (select) {

            select.innerHTML = "";

            Object.entries(LANGUAGES).forEach(
                ([code, language]) => {

                    const option =
                        document.createElement("option");

                    option.value = code;
                    option.textContent =
                        `${language.flag} ${language.name}`;

                    select.appendChild(option);
                }
            );

            select.addEventListener("change", event => {
                applyLanguage(event.target.value);
            });
        }

        $$("[data-language]").forEach(button => {

            button.addEventListener("click", () => {

                const language =
                    button.dataset.language;

                applyLanguage(language);
            });
        });

        applyLanguage(getCurrentLanguage());
    }

    /* =========================================================
       4. SIDEBAR / MOBILE MENU
       ========================================================= */

    function initSidebar() {

        const menuButton = $("#menuButton");
        const sidebar = $(".sidebar");

        if (!menuButton || !sidebar) return;

        menuButton.addEventListener("click", event => {

            event.stopPropagation();

            sidebar.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                sidebar.classList.contains("open")
            );
        });

        document.addEventListener("click", event => {

            if (
                window.innerWidth <= 760 &&
                sidebar.classList.contains("open") &&
                !sidebar.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                sidebar.classList.remove("open");
                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        });

        $$(".nav-link", sidebar).forEach(link => {

            link.addEventListener("click", () => {

                if (window.innerWidth <= 760) {
                    sidebar.classList.remove("open");
                }
            });
        });
    }

    /* =========================================================
       5. ACTIVE NAVIGATION
       ========================================================= */

    function updateActiveNavigation() {

        const page = currentPage();

        $$(".nav-link").forEach(link => {

            const href =
                link.getAttribute("href") || "";

            link.classList.remove("active");

            if (
                page === "dashboard" &&
                (
                    href === "#" ||
                    href === "" ||
                    href === "index.html"
                )
            ) {
                link.classList.add("active");
            }

            if (
                href.includes(`${page}.html`)
            ) {
                link.classList.add("active");
            }
        });
    }

    /* =========================================================
       6. NOTIFICATIONS
       ========================================================= */

    function initNotifications() {

        const button = $("#notificationButton");
        const panel = $("#notificationPanel");
        const close = $("#closeNotifications");

        if (!button || !panel) return;

        const openPanel = () => {

            panel.classList.add("show");

            button.setAttribute(
                "aria-expanded",
                "true"
            );
        };

        const closePanel = () => {

            panel.classList.remove("show");

            button.setAttribute(
                "aria-expanded",
                "false"
            );
        };

        button.addEventListener("click", event => {

            event.stopPropagation();

            if (panel.classList.contains("show")) {
                closePanel();
            } else {
                openPanel();
            }
        });

        if (close) {
            close.addEventListener("click", closePanel);
        }

        document.addEventListener("click", event => {

            if (
                panel.classList.contains("show") &&
                !panel.contains(event.target) &&
                !button.contains(event.target)
            ) {
                closePanel();
            }
        });

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closePanel();
            }
        });
    }

    /* =========================================================
       7. PROFILE BUTTON
       ========================================================= */

    function initProfile() {

        const profile = $(".user-profile");

        if (!profile) return;

        profile.setAttribute("role", "button");
        profile.setAttribute("tabindex", "0");

        profile.addEventListener("click", () => {

            const page =
                currentPage() === "profile";

            if (page) return;

            navigateTo("profile.html");
        });

        profile.addEventListener("keydown", event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                profile.click();
            }
        });
    }

    /* =========================================================
       8. INTERNAL NAVIGATION
       ========================================================= */

    function navigateTo(target) {

        if (!target) return;

        const cleanTarget =
            target.split("#")[0];

        const targetPage =
            cleanTarget
                .split("/")
                .pop()
                .replace(".html", "")
                .toLowerCase();

        const validPages = [
            "index",
            "analytics",
            "products",
            "orders",
            "customers",
            "messages",
            "settings",
            "profile"
        ];

        if (!validPages.includes(targetPage)) {
            return;
        }

        window.location.href = target;
    }

    function initNavigation() {

        $$("a").forEach(link => {

            const href =
                link.getAttribute("href");

            if (!href) return;

            if (
                href.startsWith("#") &&
                href !== "#"
            ) {
                return;
            }

            if (
                href.includes("analytics.html") ||
                href.includes("products.html") ||
                href.includes("orders.html") ||
                href.includes("customers.html") ||
                href.includes("messages.html") ||
                href.includes("settings.html") ||
                href.includes("profile.html") ||
                href === "../index.html" ||
                href === "index.html"
            ) {

                link.addEventListener("click", event => {

                    const destination =
                        link.getAttribute("href");

                    if (!destination) return;

                    event.preventDefault();

                    navigateTo(destination);
                });
            }
        });

        updateActiveNavigation();
    }

    /* =========================================================
       9. ORDER FILTER
       ========================================================= */

    function initOrderFilter() {

        const select =
            $(".orders-card select");

        if (!select) return;

        const table =
            $(".orders-card table");

        if (!table) return;

        const rows =
            $$("tbody tr", table);

        select.addEventListener(
            "change",
            () => {

                const filter =
                    select.value.toLowerCase();

                rows.forEach(row => {

                    const status =
                        $(".status", row);

                    if (!status) return;

                    const value =
                        status.textContent
                            .trim()
                            .toLowerCase();

                    const visible =
                        filter === "all orders" ||
                        value === filter;

                    row.style.display =
                        visible ? "" : "none";
                });
            }
        );
    }

    /* =========================================================
       10. TABLE SEARCH
       ========================================================= */

    function initTableSearch() {

        const searchInputs =
            $$("[data-table-search]");

        searchInputs.forEach(input => {

            const selector =
                input.dataset.tableSearch;

            const table =
                $(selector);

            if (!table) return;

            const rows =
                $$("tbody tr", table);

            input.addEventListener(
                "input",
                () => {

                    const query =
                        input.value
                            .trim()
                            .toLowerCase();

                    rows.forEach(row => {

                        const text =
                            row.textContent
                                .toLowerCase();

                        row.style.display =
                            text.includes(query)
                                ? ""
                                : "none";
                    });
                }
            );
        });
    }

    /* =========================================================
       11. DASHBOARD CARDS
       ========================================================= */

    function initStatCards() {

        $$(".stat-card").forEach(card => {

            card.setAttribute(
                "tabindex",
                "0"
            );

            card.addEventListener(
                "keydown",
                event => {

                    if (event.key === "Enter") {
                        card.click();
                    }
                }
            );
        });
    }

    /* =========================================================
       12. VIEW ALL BUTTONS
       ========================================================= */

    function initViewAllButtons() {

        $$(".view-all").forEach(link => {

            const text =
                link.textContent.toLowerCase();

            let destination = null;

            if (text.includes("order")) {
                destination = "orders.html";
            }

            if (text.includes("product")) {
                destination = "products.html";
            }

            if (text.includes("customer")) {
                destination = "customers.html";
            }

            if (!destination) return;

            link.addEventListener("click", event => {

                event.preventDefault();

                navigateTo(destination);
            });
        });
    }

    /* =========================================================
       13. CHART INTERACTION
       ========================================================= */

    function initCharts() {

        $$(".bar").forEach(bar => {

            bar.addEventListener(
                "mouseenter",
                () => {
                    bar.style.opacity = "0.75";
                }
            );

            bar.addEventListener(
                "mouseleave",
                () => {
                    bar.style.opacity = "1";
                }
            );
        });

        const revenuePeriod =
            $("#revenuePeriod");

        if (revenuePeriod) {

            revenuePeriod.addEventListener(
                "change",
                event => {

                    document.dispatchEvent(
                        new CustomEvent(
                            "nexora:chart-period-change",
                            {
                                detail: {
                                    period:
                                        event.target.value
                                }
                            }
                        )
                    );
                }
            );
        }
    }

    /* =========================================================
       14. THEME SYSTEM
       ========================================================= */

    function initTheme() {

        const themeSelect =
            $("#themeSelect");

        const savedTheme =
            safeStorageGet(
                STORAGE.theme,
                "light"
            );

        applyTheme(savedTheme);

        if (!themeSelect) return;

        themeSelect.value = savedTheme;

        themeSelect.addEventListener(
            "change",
            event => {
                applyTheme(event.target.value);
            }
        );
    }

    function applyTheme(theme) {

        const root =
            document.documentElement;

        if (theme === "dark") {

            root.dataset.theme = "dark";

        } else if (theme === "light") {

            root.dataset.theme = "light";

        } else {

            root.dataset.theme = "system";
        }

        safeStorageSet(
            STORAGE.theme,
            theme
        );
    }

    /* =========================================================
       15. SETTINGS SAVE
       ========================================================= */

    function initSettings() {

        const form =
            $(".settings-form");

        if (!form) return;

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const data =
                    new FormData(form);

                data.forEach(
                    (value, key) => {
                        safeStorageSet(
                            `nexora_setting_${key}`,
                            value
                        );
                    }
                );

                showToast(
                    "Settings saved successfully."
                );
            }
        );
    }

    /* =========================================================
       16. TOAST SYSTEM
       ========================================================= */

    function showToast(message) {

        let toast =
            $("#nexoraToast");

        if (!toast) {

            toast =
                document.createElement("div");

            toast.id = "nexoraToast";

            Object.assign(
                toast.style,
                {
                    position: "fixed",
                    bottom: "24px",
                    right: "24px",
                    zIndex: "9999",
                    padding: "13px 18px",
                    borderRadius: "12px",
                    background: "#111827",
                    color: "#ffffff",
                    fontSize: "13px",
                    boxShadow:
                        "0 15px 35px rgba(0,0,0,.18)",
                    opacity: "0",
                    transform:
                        "translateY(10px)",
                    transition:
                        "all .25s ease"
                }
            );

            document.body.appendChild(toast);
        }

        toast.textContent = message;

        requestAnimationFrame(() => {

            toast.style.opacity = "1";
            toast.style.transform =
                "translateY(0)";
        });

        clearTimeout(
            toast._timeout
        );

        toast._timeout =
            setTimeout(() => {

                toast.style.opacity = "0";
                toast.style.transform =
                    "translateY(10px)";

            }, 2500);
    }

    /* =========================================================
       17. ACCESSIBILITY
       ========================================================= */

    function initAccessibility() {

        $$("button").forEach(button => {

            if (!button.hasAttribute("type")) {
                button.setAttribute(
                    "type",
                    "button"
                );
            }
        });

        $$(".icon-button").forEach(button => {

            if (!button.getAttribute(
                "aria-label"
            )) {

                button.setAttribute(
                    "aria-label",
                    "Notifications"
                );
            }
        });
    }

    /* =========================================================
       18. GLOBAL RESIZE HANDLER
       ========================================================= */

    function initResizeHandler() {

        let timeout;

        window.addEventListener(
            "resize",
            () => {

                clearTimeout(timeout);

                timeout =
                    setTimeout(() => {

                        const sidebar =
                            $(".sidebar");

                        if (
                            sidebar &&
                            window.innerWidth > 760
                        ) {
                            sidebar.classList.remove(
                                "open"
                            );
                        }

                    }, 150);
            }
        );
    }

    /* =========================================================
       19. INITIALIZATION
       ========================================================= */

    function init() {

        createLanguageMenu();

        initSidebar();

        initNavigation();

        initNotifications();

        initProfile();

        initOrderFilter();

        initTableSearch();

        initStatCards();

        initViewAllButtons();

        initCharts();

        initTheme();

        initSettings();

        initAccessibility();

        initResizeHandler();

        console.log(
            "NEXORA Dashboard initialized successfully."
        );
    }

    /* =========================================================
       20. START
       ========================================================= */

    if (
        document.readyState === "loading"
    ) {
        document.addEventListener(
            "DOMContentLoaded",
            init
        );
    } else {
        init();
    }

})();
```
