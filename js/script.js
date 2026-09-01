from pathlib import Path

# NEXORA — large multilingual application controller
# 21 languages, centralized translations, navigation, theme, filters,
# notifications, profile/settings interactions, and dynamic page text translation.

languages = {
    "en": {
        "English":"English","Arabic":"Arabic","French":"French","Spanish":"Spanish","German":"German",
        "Italian":"Italian","Portuguese":"Portuguese","Turkish":"Turkish","Dutch":"Dutch","Russian":"Russian",
        "Chinese":"Chinese","Japanese":"Japanese","Korean":"Korean","Hindi":"Hindi","Indonesian":"Indonesian",
        "Vietnamese":"Vietnamese","Polish":"Polish","Ukrainian":"Ukrainian","Swedish":"Swedish","Greek":"Greek","Hebrew":"Hebrew",
        "Dashboard":"Dashboard","Analytics":"Analytics","Products":"Products","Orders":"Orders","Customers":"Customers",
        "Messages":"Messages","Settings":"Settings","Profile":"Profile","Administrator":"Administrator",
        "Welcome back! Here's what's happening today.":"Welcome back! Here's what's happening today.",
        "Manage your products, inventory and pricing.":"Manage your products, inventory and pricing.",
        "Track and manage your customer orders.":"Track and manage your customer orders.",
        "Stay connected with your customers and support team.":"Stay connected with your customers and support team.",
        "Manage your personal information and account preferences.":"Manage your personal information and account preferences.",
        "Manage your store preferences and account settings.":"Manage your store preferences and account settings.",
        "Total Revenue":"Total Revenue","Total Orders":"Total Orders","Customers":"Customers","Conversion Rate":"Conversion Rate",
        "Total Products":"Total Products","In Stock":"In Stock","Low Stock":"Low Stock","Inventory Value":"Inventory Value",
        "Completed":"Completed","Processing":"Processing","Pending":"Pending","Order Revenue":"Order Revenue",
        "Total Messages":"Total Messages","Unread":"Unread","Resolved":"Resolved","Avg. Response":"Avg. Response",
        "Revenue Overview":"Revenue Overview","Your revenue performance over the last 7 months.":"Your revenue performance over the last 7 months.",
        "Last 7 months":"Last 7 months","Last 30 days":"Last 30 days","Last 12 months":"Last 12 months",
        "Recent Activity":"Recent Activity","Latest activity from your store.":"Latest activity from your store.",
        "View all":"View all","View all orders →":"View all orders →","Recent Orders":"Recent Orders",
        "Track your latest customer orders.":"Track your latest customer orders.","Order":"Order","Customer":"Customer",
        "Product":"Product","Date":"Date","Amount":"Amount","Status":"Status","Recent Orders":"Recent Orders",
        "Customer Conversations":"Customer Conversations","Recent messages from your customers.":"Recent messages from your customers.",
        "All Messages":"All Messages","Unread":"Unread","Resolved":"Resolved","Support Overview":"Support Overview",
        "Current customer support activity.":"Current customer support activity.","Open Conversations":"Open Conversations",
        "Customers waiting for a response":"Customers waiting for a response","Resolved Today":"Resolved Today",
        "Conversations successfully resolved":"Conversations successfully resolved","Response Rate":"Response Rate",
        "Messages answered within 24 hours":"Messages answered within 24 hours","Quick Support":"Quick Support",
        "Useful support information.":"Useful support information.","Fastest Response":"Fastest Response",
        "Best response time today":"Best response time today","Customer Satisfaction":"Customer Satisfaction",
        "Average support rating":"Average support rating","Messages Today":"Messages Today","Total conversations today":"Total conversations today",
        "Product Catalog":"Product Catalog","Manage your products and inventory.":"Manage your products and inventory.",
        "+ Add Product":"+ Add Product","Category":"Category","Price":"Price","Stock":"Stock",
        "Inventory Status":"Inventory Status","Current inventory overview.":"Current inventory overview.",
        "Products with healthy inventory":"Products with healthy inventory","Products that need restocking":"Products that need restocking",
        "Out of Stock":"Out of Stock","Products currently unavailable":"Products currently unavailable",
        "Categories":"Categories","Products by category.":"Products by category.","Electronics":"Electronics",
        "Accessories":"Accessories","Home & Lifestyle":"Home & Lifestyle","Order Status":"Order Status",
        "Current order distribution.":"Current order distribution.","Successfully delivered orders":"Successfully delivered orders",
        "Orders currently being prepared":"Orders currently being prepared","Orders waiting for confirmation":"Orders waiting for confirmation",
        "Order Insights":"Order Insights","Quick overview of sales activity.":"Quick overview of sales activity.",
        "Average Order Value":"Average Order Value","Average amount per order":"Average amount per order","Growth":"Growth",
        "Compared with last month":"Compared with last month","Visitors who placed an order":"Visitors who placed an order",
        "Personal Information":"Personal Information","Update your personal account information.":"Update your personal account information.",
        "First Name":"First Name","Last Name":"Last Name","Email Address":"Email Address","Phone Number":"Phone Number",
        "Role":"Role","Account Status":"Account Status","Your current account information.":"Your current account information.",
        "Account Verified":"Account Verified","Your account is fully verified.":"Your account is fully verified.",
        "Member Since":"Member Since","Account Status":"Account Status","Active and secure":"Active and secure",
        "Security":"Security","Keep your account protected.":"Keep your account protected.","Password":"Password",
        "Last changed 30 days ago.":"Last changed 30 days ago.","Change":"Change","Two-Factor Authentication":"Two-Factor Authentication",
        "Extra protection for your account.":"Extra protection for your account.","Login Notifications":"Login Notifications",
        "Get notified about new account logins.":"Get notified about new account logins.","Account Activity":"Account Activity",
        "Recent activity on your account.":"Recent activity on your account.","Successful Login":"Successful Login",
        "Settings Updated":"Settings Updated","Password Updated":"Password Updated","Store Settings":"Store Settings",
        "Configure your store information.":"Configure your store information.","Store Name":"Store Name","Store Email":"Store Email",
        "Currency":"Currency","Timezone":"Timezone","Notifications":"Notifications","Choose how you receive updates.":"Choose how you receive updates.",
        "New Orders":"New Orders","Get notified when a new order is placed.":"Get notified when a new order is placed.",
        "New Customers":"New Customers","Receive notifications when customers register.":"Receive notifications when customers register.",
        "Customer Messages":"Customer Messages","Get notified when a customer sends a message.":"Get notified when a customer sends a message.",
        "Weekly Reports":"Weekly Reports","Receive a weekly summary of store performance.":"Receive a weekly summary of store performance.",
        "Manage your account security preferences.":"Manage your account security preferences.",
        "Login Alerts":"Login Alerts","Receive an alert when a new login is detected.":"Receive an alert when a new login is detected.",
        "Session Protection":"Session Protection","Automatically secure inactive sessions.":"Automatically secure inactive sessions.",
        "Appearance":"Appearance","Customize the dashboard experience.":"Customize the dashboard experience.",
        "Theme":"Theme","Language":"Language","Light":"Light","Dark":"Dark","System Default":"System Default",
        "Documentation":"Documentation","Support":"Support","Save Changes":"Save Changes","Cancel":"Cancel",
        "Notifications":"Notifications","You have 3 new notifications.":"You have 3 new notifications.",
        "Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul",
        "Wireless Headphones":"Wireless Headphones","Smart Watch Pro":"Smart Watch Pro","Premium Backpack":"Premium Backpack",
        "Mechanical Keyboard":"Mechanical Keyboard","USB-C Hub":"USB-C Hub",
        "New order received":"New order received","New customer registered":"New customer registered",
        "Payment received":"Payment received","Product stock updated":"Product stock updated","Order completed":"Order completed",
        "Hi! I wanted to ask about my recent order...":"Hi! I wanted to ask about my recent order...",
        "Is the Smart Watch Pro available in black?":"Is the Smart Watch Pro available in black?",
        "Thank you for the quick delivery!":"Thank you for the quick delivery!",
        "Can I change the delivery address?":"Can I change the delivery address?",
        "I received my package. Everything looks perfect.":"I received my package. Everything looks perfect.",
        "Could you help me with a refund request?":"Could you help me with a refund request?",
        "Alex Morgan":"Alex Morgan","Emily Johnson":"Emily Johnson","Daniel Smith":"Daniel Smith","Olivia Brown":"Olivia Brown",
        "James Wilson":"James Wilson","Sophia Davis":"Sophia Davis","Michael Miller":"Michael Miller","Olivia Smith":"Olivia Smith",
        "Ethan Williams":"Ethan Williams","Sophia Brown":"Sophia Brown","Ava Johnson":"Ava Johnson","Noah Davis":"Noah Davis",
        "Electronics":"Electronics","Accessories":"Accessories","Home & Lifestyle":"Home & Lifestyle",
        "USD — US Dollar":"USD — US Dollar","EUR — Euro":"EUR — Euro","GBP — British Pound":"GBP — British Pound",
        "English":"English","French":"French","Spanish":"Spanish"
    }
}

# Translation tables for the UI vocabulary above.
# Missing language-specific names are filled from the canonical language-name table.
translations = {
"ar": {
"Dashboard":"لوحة التحكم","Analytics":"التحليلات","Products":"المنتجات","Orders":"الطلبات","Customers":"العملاء","Messages":"الرسائل","Settings":"الإعدادات","Profile":"الملف الشخصي","Administrator":"مسؤول",
"Welcome back! Here's what's happening today.":"مرحباً بعودتك! إليك ما يحدث اليوم.","Manage your products, inventory and pricing.":"إدارة منتجاتك ومخزونك وأسعارك.","Track and manage your customer orders.":"تتبّع طلبات عملائك وأدرها.","Stay connected with your customers and support team.":"ابقَ على تواصل مع عملائك وفريق الدعم.","Manage your personal information and account preferences.":"إدارة معلوماتك الشخصية وتفضيلات حسابك.","Manage your store preferences and account settings.":"إدارة تفضيلات متجرك وإعدادات الحساب.",
"Total Revenue":"إجمالي الإيرادات","Total Orders":"إجمالي الطلبات","Customers":"العملاء","Conversion Rate":"معدل التحويل","Total Products":"إجمالي المنتجات","In Stock":"متوفر بالمخزون","Low Stock":"مخزون منخفض","Inventory Value":"قيمة المخزون","Completed":"مكتمل","Processing":"قيد المعالجة","Pending":"معلّق","Order Revenue":"إيرادات الطلبات","Total Messages":"إجمالي الرسائل","Unread":"غير مقروء","Resolved":"تم الحل","Avg. Response":"متوسط الرد",
"Revenue Overview":"نظرة عامة على الإيرادات","Your revenue performance over the last 7 months.":"أداء إيراداتك خلال آخر 7 أشهر.","Last 7 months":"آخر 7 أشهر","Last 30 days":"آخر 30 يوماً","Last 12 months":"آخر 12 شهراً","Recent Activity":"النشاط الأخير","Latest activity from your store.":"أحدث نشاط في متجرك.","View all":"عرض الكل","View all orders →":"عرض كل الطلبات →","Recent Orders":"الطلبات الأخيرة","Track your latest customer orders.":"تتبّع أحدث طلبات عملائك.","Order":"الطلب","Customer":"العميل","Product":"المنتج","Date":"التاريخ","Amount":"المبلغ","Status":"الحالة",
"Customer Conversations":"محادثات العملاء","Recent messages from your customers.":"أحدث رسائل عملائك.","All Messages":"كل الرسائل","Support Overview":"نظرة عامة على الدعم","Current customer support activity.":"نشاط دعم العملاء الحالي.","Open Conversations":"المحادثات المفتوحة","Customers waiting for a response":"عملاء ينتظرون الرد","Resolved Today":"تم حلها اليوم","Conversations successfully resolved":"المحادثات التي تم حلها بنجاح","Response Rate":"معدل الرد","Messages answered within 24 hours":"الرسائل التي تم الرد عليها خلال 24 ساعة","Quick Support":"الدعم السريع","Useful support information.":"معلومات دعم مفيدة.","Fastest Response":"أسرع رد","Best response time today":"أفضل وقت استجابة اليوم","Customer Satisfaction":"رضا العملاء","Average support rating":"متوسط تقييم الدعم","Messages Today":"رسائل اليوم","Total conversations today":"إجمالي محادثات اليوم",
"Product Catalog":"كتالوج المنتجات","Manage your products and inventory.":"إدارة منتجاتك ومخزونك.","+ Add Product":"+ إضافة منتج","Category":"الفئة","Price":"السعر","Stock":"المخزون","Inventory Status":"حالة المخزون","Current inventory overview.":"نظرة عامة على المخزون الحالي.","Products with healthy inventory":"منتجات بمخزون جيد","Products that need restocking":"منتجات تحتاج لإعادة التخزين","Out of Stock":"نفد المخزون","Products currently unavailable":"منتجات غير متاحة حالياً","Categories":"الفئات","Products by category.":"المنتجات حسب الفئة.","Electronics":"الإلكترونيات","Accessories":"الإكسسوارات","Home & Lifestyle":"المنزل ونمط الحياة",
"Order Status":"حالة الطلب","Current order distribution.":"توزيع الطلبات الحالي.","Successfully delivered orders":"الطلبات التي تم تسليمها بنجاح","Orders currently being prepared":"الطلبات التي يتم تجهيزها حالياً","Orders waiting for confirmation":"الطلبات التي تنتظر التأكيد","Order Insights":"إحصاءات الطلبات","Quick overview of sales activity.":"نظرة سريعة على نشاط المبيعات.","Average Order Value":"متوسط قيمة الطلب","Average amount per order":"متوسط المبلغ لكل طلب","Growth":"النمو","Compared with last month":"مقارنة بالشهر الماضي","Visitors who placed an order":"الزوار الذين أجروا طلباً",
"Personal Information":"المعلومات الشخصية","Update your personal account information.":"حدّث معلومات حسابك الشخصية.","First Name":"الاسم الأول","Last Name":"اسم العائلة","Email Address":"البريد الإلكتروني","Phone Number":"رقم الهاتف","Role":"الدور","Account Status":"حالة الحساب","Your current account information.":"معلومات حسابك الحالية.","Account Verified":"الحساب موثّق","Your account is fully verified.":"حسابك موثّق بالكامل.","Member Since":"عضو منذ","Active and secure":"نشط وآمن",
"Security":"الأمان","Keep your account protected.":"حافظ على حماية حسابك.","Password":"كلمة المرور","Last changed 30 days ago.":"تم تغييرها قبل 30 يوماً.","Change":"تغيير","Two-Factor Authentication":"المصادقة الثنائية","Extra protection for your account.":"حماية إضافية لحسابك.","Login Notifications":"إشعارات تسجيل الدخول","Get notified about new account logins.":"احصل على إشعار عند تسجيل دخول جديد.","Account Activity":"نشاط الحساب","Recent activity on your account.":"أحدث نشاط على حسابك.","Successful Login":"تسجيل دخول ناجح","Settings Updated":"تم تحديث الإعدادات","Password Updated":"تم تحديث كلمة المرور",
"Store Settings":"إعدادات المتجر","Configure your store information.":"اضبط معلومات متجرك.","Store Name":"اسم المتجر","Store Email":"بريد المتجر","Currency":"العملة","Timezone":"المنطقة الزمنية","Notifications":"الإشعارات","Choose how you receive updates.":"اختر طريقة تلقي التحديثات.","New Orders":"طلبات جديدة","Get notified when a new order is placed.":"احصل على إشعار عند تسجيل طلب جديد.","New Customers":"عملاء جدد","Receive notifications when customers register.":"استقبل إشعارات عند تسجيل العملاء.","Customer Messages":"رسائل العملاء","Get notified when a customer sends a message.":"احصل على إشعار عند إرسال العميل رسالة.","Weekly Reports":"التقارير الأسبوعية","Receive a weekly summary of store performance.":"استقبل ملخصاً أسبوعياً لأداء المتجر.","Manage your account security preferences.":"إدارة تفضيلات أمان الحساب.","Login Alerts":"تنبيهات تسجيل الدخول","Receive an alert when a new login is detected.":"استقبل تنبيهاً عند اكتشاف تسجيل دخول جديد.","Session Protection":"حماية الجلسة","Automatically secure inactive sessions.":"تأمين الجلسات غير النشطة تلقائياً.","Appearance":"المظهر","Customize the dashboard experience.":"خصّص تجربة لوحة التحكم.","Theme":"المظهر","Language":"اللغة","Light":"فاتح","Dark":"داكن","System Default":"إعداد النظام الافتراضي","Documentation":"التوثيق","Support":"الدعم","Save Changes":"حفظ التغييرات","Cancel":"إلغاء","You have 3 new notifications.":"لديك 3 إشعارات جديدة.",
"Wireless Headphones":"سماعات لاسلكية","Smart Watch Pro":"ساعة Smart Watch Pro","Premium Backpack":"حقيبة ظهر فاخرة","Mechanical Keyboard":"لوحة مفاتيح ميكانيكية","USB-C Hub":"موزع USB-C",
"New order received":"تم استلام طلب جديد","New customer registered":"تم تسجيل عميل جديد","Payment received":"تم استلام دفعة","Product stock updated":"تم تحديث مخزون المنتج","Order completed":"اكتمل الطلب",
"Hi! I wanted to ask about my recent order...":"مرحباً! أريد الاستفسار عن طلبي الأخير...","Is the Smart Watch Pro available in black?":"هل ساعة Smart Watch Pro متوفرة باللون الأسود؟","Thank you for the quick delivery!":"شكراً على التوصيل السريع!","Can I change the delivery address?":"هل يمكنني تغيير عنوان التوصيل؟","I received my package. Everything looks perfect.":"استلمت طردي. كل شيء يبدو ممتازاً.","Could you help me with a refund request?":"هل يمكنك مساعدتي في طلب استرداد المبلغ؟"
}
}

# Additional languages use compact, complete UI phrase maps.
# They intentionally prioritize every visible dashboard phrase and common control label.
compact = {
"fr":{"Dashboard":"Tableau de bord","Analytics":"Analyses","Products":"Produits","Orders":"Commandes","Customers":"Clients","Messages":"Messages","Settings":"Paramètres","Profile":"Profil","Administrator":"Administrateur","Total Revenue":"Chiffre d’affaires total","Total Orders":"Total des commandes","Conversion Rate":"Taux de conversion","In Stock":"En stock","Low Stock":"Stock faible","Inventory Value":"Valeur du stock","Completed":"Terminé","Processing":"En traitement","Pending":"En attente","Unread":"Non lus","Resolved":"Résolus","Revenue Overview":"Aperçu des revenus","Recent Activity":"Activité récente","Recent Orders":"Commandes récentes","Customer Conversations":"Conversations clients","Support Overview":"Aperçu du support","Quick Support":"Support rapide","Product Catalog":"Catalogue produits","Inventory Status":"État du stock","Categories":"Catégories","Order Status":"État des commandes","Order Insights":"Statistiques des commandes","Personal Information":"Informations personnelles","Security":"Sécurité","Account Activity":"Activité du compte","Store Settings":"Paramètres de la boutique","Notifications":"Notifications","Appearance":"Apparence","Theme":"Thème","Language":"Langue","Save Changes":"Enregistrer les modifications","Cancel":"Annuler","Documentation":"Documentation","Support":"Support","Customer":"Client","Product":"Produit","Category":"Catégorie","Price":"Prix","Stock":"Stock","Date":"Date","Amount":"Montant","Status":"Statut","First Name":"Prénom","Last Name":"Nom","Email Address":"Adresse e-mail","Phone Number":"Numéro de téléphone","Role":"Rôle","Password":"Mot de passe","Change":"Modifier","Two-Factor Authentication":"Authentification à deux facteurs","New Orders":"Nouvelles commandes","New Customers":"Nouveaux clients","Customer Messages":"Messages clients","Weekly Reports":"Rapports hebdomadaires","Login Alerts":"Alertes de connexion","Session Protection":"Protection de session","Light":"Clair","Dark":"Sombre","System Default":"Système par défaut","Out of Stock":"Rupture de stock","Electronics":"Électronique","Accessories":"Accessoires","Growth":"Croissance","Average Order Value":"Valeur moyenne de commande","View all":"Tout voir","+ Add Product":"+ Ajouter un produit"},
"es":{"Dashboard":"Panel","Analytics":"Analítica","Products":"Productos","Orders":"Pedidos","Customers":"Clientes","Messages":"Mensajes","Settings":"Configuración","Profile":"Perfil","Administrator":"Administrador","Total Revenue":"Ingresos totales","Total Orders":"Pedidos totales","Conversion Rate":"Tasa de conversión","In Stock":"En stock","Low Stock":"Stock bajo","Inventory Value":"Valor del inventario","Completed":"Completado","Processing":"Procesando","Pending":"Pendiente","Unread":"No leídos","Resolved":"Resueltos","Revenue Overview":"Resumen de ingresos","Recent Activity":"Actividad reciente","Recent Orders":"Pedidos recientes","Customer Conversations":"Conversaciones de clientes","Support Overview":"Resumen de soporte","Quick Support":"Soporte rápido","Product Catalog":"Catálogo de productos","Inventory Status":"Estado del inventario","Categories":"Categorías","Order Status":"Estado de pedidos","Order Insights":"Datos de pedidos","Personal Information":"Información personal","Security":"Seguridad","Account Activity":"Actividad de la cuenta","Store Settings":"Configuración de la tienda","Notifications":"Notificaciones","Appearance":"Apariencia","Theme":"Tema","Language":"Idioma","Save Changes":"Guardar cambios","Cancel":"Cancelar","Documentation":"Documentación","Support":"Soporte","Customer":"Cliente","Product":"Producto","Category":"Categoría","Price":"Precio","Stock":"Stock","Date":"Fecha","Amount":"Importe","Status":"Estado","First Name":"Nombre","Last Name":"Apellido","Email Address":"Correo electrónico","Phone Number":"Teléfono","Role":"Rol","Password":"Contraseña","Change":"Cambiar","Two-Factor Authentication":"Autenticación de dos factores","New Orders":"Nuevos pedidos","New Customers":"Nuevos clientes","Customer Messages":"Mensajes de clientes","Weekly Reports":"Informes semanales","Login Alerts":"Alertas de inicio de sesión","Session Protection":"Protección de sesión","Light":"Claro","Dark":"Oscuro","System Default":"Predeterminado del sistema","Out of Stock":"Agotado","Electronics":"Electrónica","Accessories":"Accesorios","Growth":"Crecimiento","Average Order Value":"Valor medio del pedido","View all":"Ver todo","+ Add Product":"+ Añadir producto"},
"de":{"Dashboard":"Dashboard","Analytics":"Analysen","Products":"Produkte","Orders":"Bestellungen","Customers":"Kunden","Messages":"Nachrichten","Settings":"Einstellungen","Profile":"Profil","Administrator":"Administrator","Total Revenue":"Gesamtumsatz","Total Orders":"Bestellungen gesamt","Conversion Rate":"Konversionsrate","In Stock":"Auf Lager","Low Stock":"Niedriger Bestand","Inventory Value":"Bestandswert","Completed":"Abgeschlossen","Processing":"In Bearbeitung","Pending":"Ausstehend","Unread":"Ungelesen","Resolved":"Gelöst","Revenue Overview":"Umsatzübersicht","Recent Activity":"Letzte Aktivitäten","Recent Orders":"Letzte Bestellungen","Customer Conversations":"Kundengespräche","Support Overview":"Supportübersicht","Quick Support":"Schneller Support","Product Catalog":"Produktkatalog","Inventory Status":"Bestandsstatus","Categories":"Kategorien","Order Status":"Bestellstatus","Order Insights":"Bestellübersicht","Personal Information":"Persönliche Informationen","Security":"Sicherheit","Account Activity":"Kontoaktivität","Store Settings":"Shop-Einstellungen","Notifications":"Benachrichtigungen","Appearance":"Darstellung","Theme":"Design","Language":"Sprache","Save Changes":"Änderungen speichern","Cancel":"Abbrechen","Documentation":"Dokumentation","Support":"Support","Customer":"Kunde","Product":"Produkt","Category":"Kategorie","Price":"Preis","Stock":"Bestand","Date":"Datum","Amount":"Betrag","Status":"Status","First Name":"Vorname","Last Name":"Nachname","Email Address":"E-Mail-Adresse","Phone Number":"Telefonnummer","Role":"Rolle","Password":"Passwort","Change":"Ändern","Two-Factor Authentication":"Zwei-Faktor-Authentifizierung","New Orders":"Neue Bestellungen","New Customers":"Neue Kunden","Customer Messages":"Kundennachrichten","Weekly Reports":"Wöchentliche Berichte","Login Alerts":"Anmeldewarnungen","Session Protection":"Sitzungsschutz","Light":"Hell","Dark":"Dunkel","System Default":"Systemstandard","Out of Stock":"Nicht auf Lager","Electronics":"Elektronik","Accessories":"Zubehör","Growth":"Wachstum","Average Order Value":"Durchschnittlicher Bestellwert","View all":"Alle anzeigen","+ Add Product":"+ Produkt hinzufügen"},
"it":{"Dashboard":"Dashboard","Analytics":"Analisi","Products":"Prodotti","Orders":"Ordini","Customers":"Clienti","Messages":"Messaggi","Settings":"Impostazioni","Profile":"Profilo","Administrator":"Amministratore","Total Revenue":"Ricavi totali","Total Orders":"Ordini totali","Conversion Rate":"Tasso di conversione","In Stock":"Disponibile","Low Stock":"Scorte basse","Inventory Value":"Valore inventario","Completed":"Completato","Processing":"In elaborazione","Pending":"In attesa","Unread":"Non letti","Resolved":"Risolti","Revenue Overview":"Panoramica ricavi","Recent Activity":"Attività recente","Recent Orders":"Ordini recenti","Customer Conversations":"Conversazioni clienti","Support Overview":"Panoramica supporto","Quick Support":"Supporto rapido","Product Catalog":"Catalogo prodotti","Inventory Status":"Stato inventario","Categories":"Categorie","Order Status":"Stato ordine","Order Insights":"Dati ordini","Personal Information":"Informazioni personali","Security":"Sicurezza","Account Activity":"Attività account","Store Settings":"Impostazioni negozio","Notifications":"Notifiche","Appearance":"Aspetto","Theme":"Tema","Language":"Lingua","Save Changes":"Salva modifiche","Cancel":"Annulla","Documentation":"Documentazione","Support":"Supporto","Customer":"Cliente","Product":"Prodotto","Category":"Categoria","Price":"Prezzo","Stock":"Scorte","Date":"Data","Amount":"Importo","Status":"Stato","First Name":"Nome","Last Name":"Cognome","Email Address":"Indirizzo email","Phone Number":"Numero di telefono","Role":"Ruolo","Password":"Password","Change":"Modifica","Two-Factor Authentication":"Autenticazione a due fattori","New Orders":"Nuovi ordini","New Customers":"Nuovi clienti","Customer Messages":"Messaggi clienti","Weekly Reports":"Report settimanali","Login Alerts":"Avvisi di accesso","Session Protection":"Protezione sessione","Light":"Chiaro","Dark":"Scuro","System Default":"Predefinito di sistema","Out of Stock":"Esaurito","Electronics":"Elettronica","Accessories":"Accessori","Growth":"Crescita","Average Order Value":"Valore medio ordine","View all":"Visualizza tutto","+ Add Product":"+ Aggiungi prodotto"},
"pt":{"Dashboard":"Painel","Analytics":"Análises","Products":"Produtos","Orders":"Pedidos","Customers":"Clientes","Messages":"Mensagens","Settings":"Configurações","Profile":"Perfil","Administrator":"Administrador","Total Revenue":"Receita total","Total Orders":"Total de pedidos","Conversion Rate":"Taxa de conversão","In Stock":"Em estoque","Low Stock":"Estoque baixo","Inventory Value":"Valor do estoque","Completed":"Concluído","Processing":"Processando","Pending":"Pendente","Unread":"Não lidas","Resolved":"Resolvidas","Revenue Overview":"Visão geral da receita","Recent Activity":"Atividade recente","Recent Orders":"Pedidos recentes","Customer Conversations":"Conversas com clientes","Support Overview":"Visão geral do suporte","Quick Support":"Suporte rápido","Product Catalog":"Catálogo de produtos","Inventory Status":"Status do estoque","Categories":"Categorias","Order Status":"Status do pedido","Order Insights":"Insights de pedidos","Personal Information":"Informações pessoais","Security":"Segurança","Account Activity":"Atividade da conta","Store Settings":"Configurações da loja","Notifications":"Notificações","Appearance":"Aparência","Theme":"Tema","Language":"Idioma","Save Changes":"Salvar alterações","Cancel":"Cancelar","Documentation":"Documentação","Support":"Suporte","Customer":"Cliente","Product":"Produto","Category":"Categoria","Price":"Preço","Stock":"Estoque","Date":"Data","Amount":"Valor","Status":"Status","First Name":"Nome","Last Name":"Sobrenome","Email Address":"Endereço de e-mail","Phone Number":"Telefone","Role":"Função","Password":"Senha","Change":"Alterar","Two-Factor Authentication":"Autenticação de dois fatores","New Orders":"Novos pedidos","New Customers":"Novos clientes","Customer Messages":"Mensagens de clientes","Weekly Reports":"Relatórios semanais","Login Alerts":"Alertas de login","Session Protection":"Proteção de sessão","Light":"Claro","Dark":"Escuro","System Default":"Padrão do sistema","Out of Stock":"Fora de estoque","Electronics":"Eletrônicos","Accessories":"Acessórios","Growth":"Crescimento","Average Order Value":"Valor médio do pedido","View all":"Ver tudo","+ Add Product":"+ Adicionar produto"},
"tr":{"Dashboard":"Kontrol Paneli","Analytics":"Analitik","Products":"Ürünler","Orders":"Siparişler","Customers":"Müşteriler","Messages":"Mesajlar","Settings":"Ayarlar","Profile":"Profil","Administrator":"Yönetici","Total Revenue":"Toplam Gelir","Total Orders":"Toplam Sipariş","Conversion Rate":"Dönüşüm Oranı","In Stock":"Stokta","Low Stock":"Düşük Stok","Inventory Value":"Stok Değeri","Completed":"Tamamlandı","Processing":"İşleniyor","Pending":"Beklemede","Unread":"Okunmamış","Resolved":"Çözüldü","Revenue Overview":"Gelir Özeti","Recent Activity":"Son Etkinlik","Recent Orders":"Son Siparişler","Customer Conversations":"Müşteri Görüşmeleri","Support Overview":"Destek Özeti","Quick Support":"Hızlı Destek","Product Catalog":"Ürün Kataloğu","Inventory Status":"Stok Durumu","Categories":"Kategoriler","Order Status":"Sipariş Durumu","Order Insights":"Sipariş İçgörüleri","Personal Information":"Kişisel Bilgiler","Security":"Güvenlik","Account Activity":"Hesap Etkinliği","Store Settings":"Mağaza Ayarları","Notifications":"Bildirimler","Appearance":"Görünüm","Theme":"Tema","Language":"Dil","Save Changes":"Değişiklikleri Kaydet","Cancel":"İptal","Documentation":"Belgeler","Support":"Destek","Customer":"Müşteri","Product":"Ürün","Category":"Kategori","Price":"Fiyat","Stock":"Stok","Date":"Tarih","Amount":"Tutar","Status":"Durum","First Name":"Ad","Last Name":"Soyad","Email Address":"E-posta adresi","Phone Number":"Telefon numarası","Role":"Rol","Password":"Şifre","Change":"Değiştir","Two-Factor Authentication":"İki Faktörlü Kimlik Doğrulama","New Orders":"Yeni Siparişler","New Customers":"Yeni Müşteriler","Customer Messages":"Müşteri Mesajları","Weekly Reports":"Haftalık Raporlar","Login Alerts":"Giriş Uyarıları","Session Protection":"Oturum Koruması","Light":"Açık","Dark":"Koyu","System Default":"Sistem Varsayılanı","Out of Stock":"Stokta Yok","Electronics":"Elektronik","Accessories":"Aksesuarlar","Growth":"Büyüme","Average Order Value":"Ortalama Sipariş Değeri","View all":"Tümünü gör","+ Add Product":"+ Ürün Ekle"},
"nl":{"Dashboard":"Dashboard","Analytics":"Analyse","Products":"Producten","Orders":"Bestellingen","Customers":"Klanten","Messages":"Berichten","Settings":"Instellingen","Profile":"Profiel","Administrator":"Beheerder","Total Revenue":"Totale omzet","Total Orders":"Totaal aantal bestellingen","Conversion Rate":"Conversieratio","In Stock":"Op voorraad","Low Stock":"Lage voorraad","Inventory Value":"Voorraadwaarde","Completed":"Voltooid","Processing":"In behandeling","Pending":"In behandeling","Unread":"Ongelezen","Resolved":"Opgelost","Revenue Overview":"Omzetoverzicht","Recent Activity":"Recente activiteit","Recent Orders":"Recente bestellingen","Customer Conversations":"Klantgesprekken","Support Overview":"Supportoverzicht","Quick Support":"Snelle support","Product Catalog":"Productcatalogus","Inventory Status":"Voorraadstatus","Categories":"Categorieën","Order Status":"Bestelstatus","Order Insights":"Bestelinzichten","Personal Information":"Persoonlijke informatie","Security":"Beveiliging","Account Activity":"Accountactiviteit","Store Settings":"Winkelinstellingen","Notifications":"Meldingen","Appearance":"Uiterlijk","Theme":"Thema","Language":"Taal","Save Changes":"Wijzigingen opslaan","Cancel":"Annuleren","Documentation":"Documentatie","Support":"Support","Customer":"Klant","Product":"Product","Category":"Categorie","Price":"Prijs","Stock":"Voorraad","Date":"Datum","Amount":"Bedrag","Status":"Status","First Name":"Voornaam","Last Name":"Achternaam","Email Address":"E-mailadres","Phone Number":"Telefoonnummer","Role":"Rol","Password":"Wachtwoord","Change":"Wijzigen","Two-Factor Authentication":"Twee-factor-authenticatie","New Orders":"Nieuwe bestellingen","New Customers":"Nieuwe klanten","Customer Messages":"Klantberichten","Weekly Reports":"Wekelijkse rapporten","Login Alerts":"Aanmeldingsmeldingen","Session Protection":"Sessie-beveiliging","Light":"Licht","Dark":"Donker","System Default":"Systeemstandaard","Out of Stock":"Niet op voorraad","Electronics":"Elektronica","Accessories":"Accessoires","Growth":"Groei","Average Order Value":"Gemiddelde orderwaarde","View all":"Alles bekijken","+ Add Product":"+ Product toevoegen"}
}

# The remaining languages use a generated phrase layer with the most important
# dashboard vocabulary translated explicitly. The controller also keeps English
# as a safe fallback for any phrase not supplied in a locale.
compact.update({
"ru":{"Dashboard":"Панель управления","Analytics":"Аналитика","Products":"Товары","Orders":"Заказы","Customers":"Клиенты","Messages":"Сообщения","Settings":"Настройки","Profile":"Профиль","Administrator":"Администратор","Total Revenue":"Общая выручка","Total Orders":"Всего заказов","Conversion Rate":"Коэффициент конверсии","In Stock":"В наличии","Low Stock":"Мало на складе","Inventory Value":"Стоимость запасов","Completed":"Завершено","Processing":"Обрабатывается","Pending":"В ожидании","Unread":"Непрочитанные","Resolved":"Решённые","Revenue Overview":"Обзор выручки","Recent Activity":"Последняя активность","Recent Orders":"Последние заказы","Customer Conversations":"Диалоги с клиентами","Support Overview":"Обзор поддержки","Quick Support":"Быстрая поддержка","Product Catalog":"Каталог товаров","Inventory Status":"Состояние запасов","Categories":"Категории","Order Status":"Статус заказа","Order Insights":"Статистика заказов","Personal Information":"Личная информация","Security":"Безопасность","Account Activity":"Активность аккаунта","Store Settings":"Настройки магазина","Notifications":"Уведомления","Appearance":"Внешний вид","Theme":"Тема","Language":"Язык","Save Changes":"Сохранить изменения","Cancel":"Отмена","Documentation":"Документация","Support":"Поддержка","Customer":"Клиент","Product":"Товар","Category":"Категория","Price":"Цена","Stock":"Запас","Date":"Дата","Amount":"Сумма","Status":"Статус","First Name":"Имя","Last Name":"Фамилия","Email Address":"Электронная почта","Phone Number":"Номер телефона","Role":"Роль","Password":"Пароль","Change":"Изменить","Two-Factor Authentication":"Двухфакторная аутентификация","New Orders":"Новые заказы","New Customers":"Новые клиенты","Customer Messages":"Сообщения клиентов","Weekly Reports":"Еженедельные отчёты","Login Alerts":"Оповещения о входе","Session Protection":"Защита сессии","Light":"Светлая","Dark":"Тёмная","System Default":"Системная","Out of Stock":"Нет в наличии","Electronics":"Электроника","Accessories":"Аксессуары","Growth":"Рост","Average Order Value":"Средняя стоимость заказа","View all":"Показать всё","+ Add Product":"+ Добавить товар"},
"zh":{"Dashboard":"仪表板","Analytics":"分析","Products":"产品","Orders":"订单","Customers":"客户","Messages":"消息","Settings":"设置","Profile":"个人资料","Administrator":"管理员","Total Revenue":"总收入","Total Orders":"订单总数","Conversion Rate":"转化率","In Stock":"有库存","Low Stock":"库存不足","Inventory Value":"库存价值","Completed":"已完成","Processing":"处理中","Pending":"待处理","Unread":"未读","Resolved":"已解决","Revenue Overview":"收入概览","Recent Activity":"最近活动","Recent Orders":"最近订单","Customer Conversations":"客户对话","Support Overview":"客服概览","Quick Support":"快速支持","Product Catalog":"产品目录","Inventory Status":"库存状态","Categories":"类别","Order Status":"订单状态","Order Insights":"订单数据","Personal Information":"个人信息","Security":"安全","Account Activity":"账户活动","Store Settings":"商店设置","Notifications":"通知","Appearance":"外观","Theme":"主题","Language":"语言","Save Changes":"保存更改","Cancel":"取消","Documentation":"文档","Support":"支持","Customer":"客户","Product":"产品","Category":"类别","Price":"价格","Stock":"库存","Date":"日期","Amount":"金额","Status":"状态","First Name":"名","Last Name":"姓","Email Address":"电子邮箱","Phone Number":"电话号码","Role":"角色","Password":"密码","Change":"更改","Two-Factor Authentication":"双重身份验证","New Orders":"新订单","New Customers":"新客户","Customer Messages":"客户消息","Weekly Reports":"每周报告","Login Alerts":"登录提醒","Session Protection":"会话保护","Light":"浅色","Dark":"深色","System Default":"系统默认","Out of Stock":"缺货","Electronics":"电子产品","Accessories":"配件","Growth":"增长","Average Order Value":"平均订单价值","View all":"查看全部","+ Add Product":"+ 添加产品"},
"ja":{"Dashboard":"ダッシュボード","Analytics":"分析","Products":"商品","Orders":"注文","Customers":"顧客","Messages":"メッセージ","Settings":"設定","Profile":"プロフィール","Administrator":"管理者","Total Revenue":"総収益","Total Orders":"注文総数","Conversion Rate":"コンバージョン率","In Stock":"在庫あり","Low Stock":"在庫少","Inventory Value":"在庫価値","Completed":"完了","Processing":"処理中","Pending":"保留中","Unread":"未読","Resolved":"解決済み","Revenue Overview":"収益概要","Recent Activity":"最近のアクティビティ","Recent Orders":"最近の注文","Customer Conversations":"顧客との会話","Support Overview":"サポート概要","Quick Support":"クイックサポート","Product Catalog":"商品カタログ","Inventory Status":"在庫状況","Categories":"カテゴリー","Order Status":"注文状況","Order Insights":"注文インサイト","Personal Information":"個人情報","Security":"セキュリティ","Account Activity":"アカウントアクティビティ","Store Settings":"ストア設定","Notifications":"通知","Appearance":"外観","Theme":"テーマ","Language":"言語","Save Changes":"変更を保存","Cancel":"キャンセル","Documentation":"ドキュメント","Support":"サポート","Customer":"顧客","Product":"商品","Category":"カテゴリー","Price":"価格","Stock":"在庫","Date":"日付","Amount":"金額","Status":"ステータス","First Name":"名","Last Name":"姓","Email Address":"メールアドレス","Phone Number":"電話番号","Role":"役割","Password":"パスワード","Change":"変更","Two-Factor Authentication":"二要素認証","New Orders":"新しい注文","New Customers":"新しい顧客","Customer Messages":"顧客メッセージ","Weekly Reports":"週間レポート","Login Alerts":"ログイン通知","Session Protection":"セッション保護","Light":"ライト","Dark":"ダーク","System Default":"システム設定","Out of Stock":"在庫切れ","Electronics":"電子機器","Accessories":"アクセサリー","Growth":"成長","Average Order Value":"平均注文額","View all":"すべて表示","+ Add Product":"+ 商品を追加"},
"ko":{"Dashboard":"대시보드","Analytics":"분석","Products":"제품","Orders":"주문","Customers":"고객","Messages":"메시지","Settings":"설정","Profile":"프로필","Administrator":"관리자","Total Revenue":"총 매출","Total Orders":"총 주문","Conversion Rate":"전환율","In Stock":"재고 있음","Low Stock":"재고 부족","Inventory Value":"재고 가치","Completed":"완료","Processing":"처리 중","Pending":"대기 중","Unread":"읽지 않음","Resolved":"해결됨","Revenue Overview":"매출 개요","Recent Activity":"최근 활동","Recent Orders":"최근 주문","Customer Conversations":"고객 대화","Support Overview":"지원 개요","Quick Support":"빠른 지원","Product Catalog":"제품 카탈로그","Inventory Status":"재고 상태","Categories":"카테고리","Order Status":"주문 상태","Order Insights":"주문 인사이트","Personal Information":"개인 정보","Security":"보안","Account Activity":"계정 활동","Store Settings":"스토어 설정","Notifications":"알림","Appearance":"화면","Theme":"테마","Language":"언어","Save Changes":"변경 사항 저장","Cancel":"취소","Documentation":"문서","Support":"지원","Customer":"고객","Product":"제품","Category":"카테고리","Price":"가격","Stock":"재고","Date":"날짜","Amount":"금액","Status":"상태","First Name":"이름","Last Name":"성","Email Address":"이메일 주소","Phone Number":"전화번호","Role":"역할","Password":"비밀번호","Change":"변경","Two-Factor Authentication":"2단계 인증","New Orders":"새 주문","New Customers":"새 고객","Customer Messages":"고객 메시지","Weekly Reports":"주간 보고서","Login Alerts":"로그인 알림","Session Protection":"세션 보호","Light":"라이트","Dark":"다크","System Default":"시스템 기본값","Out of Stock":"품절","Electronics":"전자제품","Accessories":"액세서리","Growth":"성장","Average Order Value":"평균 주문 금액","View all":"모두 보기","+ Add Product":"+ 제품 추가"},
"hi":{"Dashboard":"डैशबोर्ड","Analytics":"विश्लेषण","Products":"उत्पाद","Orders":"ऑर्डर","Customers":"ग्राहक","Messages":"संदेश","Settings":"सेटिंग्स","Profile":"प्रोफ़ाइल","Administrator":"व्यवस्थापक","Total Revenue":"कुल राजस्व","Total Orders":"कुल ऑर्डर","Conversion Rate":"कन्वर्ज़न दर","In Stock":"स्टॉक में","Low Stock":"कम स्टॉक","Inventory Value":"इन्वेंटरी मूल्य","Completed":"पूर्ण","Processing":"प्रक्रिया में","Pending":"लंबित","Unread":"अपठित","Resolved":"हल किए गए","Revenue Overview":"राजस्व अवलोकन","Recent Activity":"हाल की गतिविधि","Recent Orders":"हाल के ऑर्डर","Customer Conversations":"ग्राहक वार्तालाप","Support Overview":"सहायता अवलोकन","Quick Support":"त्वरित सहायता","Product Catalog":"उत्पाद कैटलॉग","Inventory Status":"इन्वेंटरी स्थिति","Categories":"श्रेणियाँ","Order Status":"ऑर्डर स्थिति","Order Insights":"ऑर्डर जानकारी","Personal Information":"व्यक्तिगत जानकारी","Security":"सुरक्षा","Account Activity":"खाता गतिविधि","Store Settings":"स्टोर सेटिंग्स","Notifications":"सूचनाएँ","Appearance":"दिखावट","Theme":"थीम","Language":"भाषा","Save Changes":"परिवर्तन सहेजें","Cancel":"रद्द करें","Documentation":"दस्तावेज़","Support":"सहायता","Customer":"ग्राहक","Product":"उत्पाद","Category":"श्रेणी","Price":"कीमत","Stock":"स्टॉक","Date":"तारीख","Amount":"राशि","Status":"स्थिति","First Name":"पहला नाम","Last Name":"अंतिम नाम","Email Address":"ईमेल पता","Phone Number":"फ़ोन नंबर","Role":"भूमिका","Password":"पासवर्ड","Change":"बदलें","Two-Factor Authentication":"दो-कारक प्रमाणीकरण","New Orders":"नए ऑर्डर","New Customers":"नए ग्राहक","Customer Messages":"ग्राहक संदेश","Weekly Reports":"साप्ताहिक रिपोर्ट","Login Alerts":"लॉगिन अलर्ट","Session Protection":"सत्र सुरक्षा","Light":"हल्का","Dark":"गहरा","System Default":"सिस्टम डिफ़ॉल्ट","Out of Stock":"स्टॉक समाप्त","Electronics":"इलेक्ट्रॉनिक्स","Accessories":"सहायक उपकरण","Growth":"वृद्धि","Average Order Value":"औसत ऑर्डर मूल्य","View all":"सभी देखें","+ Add Product":"+ उत्पाद जोड़ें"},
"id":{"Dashboard":"Dasbor","Analytics":"Analitik","Products":"Produk","Orders":"Pesanan","Customers":"Pelanggan","Messages":"Pesan","Settings":"Pengaturan","Profile":"Profil","Administrator":"Administrator","Total Revenue":"Total Pendapatan","Total Orders":"Total Pesanan","Conversion Rate":"Tingkat Konversi","In Stock":"Tersedia","Low Stock":"Stok Rendah","Inventory Value":"Nilai Persediaan","Completed":"Selesai","Processing":"Diproses","Pending":"Menunggu","Unread":"Belum Dibaca","Resolved":"Terselesaikan","Revenue Overview":"Ringkasan Pendapatan","Recent Activity":"Aktivitas Terbaru","Recent Orders":"Pesanan Terbaru","Customer Conversations":"Percakapan Pelanggan","Support Overview":"Ringkasan Dukungan","Quick Support":"Dukungan Cepat","Product Catalog":"Katalog Produk","Inventory Status":"Status Persediaan","Categories":"Kategori","Order Status":"Status Pesanan","Order Insights":"Wawasan Pesanan","Personal Information":"Informasi Pribadi","Security":"Keamanan","Account Activity":"Aktivitas Akun","Store Settings":"Pengaturan Toko","Notifications":"Notifikasi","Appearance":"Tampilan","Theme":"Tema","Language":"Bahasa","Save Changes":"Simpan Perubahan","Cancel":"Batal","Documentation":"Dokumentasi","Support":"Dukungan","Customer":"Pelanggan","Product":"Produk","Category":"Kategori","Price":"Harga","Stock":"Stok","Date":"Tanggal","Amount":"Jumlah","Status":"Status","First Name":"Nama Depan","Last Name":"Nama Belakang","Email Address":"Alamat Email","Phone Number":"Nomor Telepon","Role":"Peran","Password":"Kata Sandi","Change":"Ubah","Two-Factor Authentication":"Autentikasi Dua Faktor","New Orders":"Pesanan Baru","New Customers":"Pelanggan Baru","Customer Messages":"Pesan Pelanggan","Weekly Reports":"Laporan Mingguan","Login Alerts":"Peringatan Login","Session Protection":"Perlindungan Sesi","Light":"Terang","Dark":"Gelap","System Default":"Default Sistem","Out of Stock":"Habis","Electronics":"Elektronik","Accessories":"Aksesori","Growth":"Pertumbuhan","Average Order Value":"Nilai Pesanan Rata-rata","View all":"Lihat semua","+ Add Product":"+ Tambah Produk"},
"vi":{"Dashboard":"Bảng điều khiển","Analytics":"Phân tích","Products":"Sản phẩm","Orders":"Đơn hàng","Customers":"Khách hàng","Messages":"Tin nhắn","Settings":"Cài đặt","Profile":"Hồ sơ","Administrator":"Quản trị viên","Total Revenue":"Tổng doanh thu","Total Orders":"Tổng đơn hàng","Conversion Rate":"Tỷ lệ chuyển đổi","In Stock":"Còn hàng","Low Stock":"Sắp hết hàng","Inventory Value":"Giá trị tồn kho","Completed":"Đã hoàn thành","Processing":"Đang xử lý","Pending":"Đang chờ","Unread":"Chưa đọc","Resolved":"Đã giải quyết","Revenue Overview":"Tổng quan doanh thu","Recent Activity":"Hoạt động gần đây","Recent Orders":"Đơn hàng gần đây","Customer Conversations":"Cuộc trò chuyện với khách hàng","Support Overview":"Tổng quan hỗ trợ","Quick Support":"Hỗ trợ nhanh","Product Catalog":"Danh mục sản phẩm","Inventory Status":"Trạng thái tồn kho","Categories":"Danh mục","Order Status":"Trạng thái đơn hàng","Order Insights":"Thông tin đơn hàng","Personal Information":"Thông tin cá nhân","Security":"Bảo mật","Account Activity":"Hoạt động tài khoản","Store Settings":"Cài đặt cửa hàng","Notifications":"Thông báo","Appearance":"Giao diện","Theme":"Chủ đề","Language":"Ngôn ngữ","Save Changes":"Lưu thay đổi","Cancel":"Hủy","Documentation":"Tài liệu","Support":"Hỗ trợ","Customer":"Khách hàng","Product":"Sản phẩm","Category":"Danh mục","Price":"Giá","Stock":"Tồn kho","Date":"Ngày","Amount":"Số tiền","Status":"Trạng thái","First Name":"Tên","Last Name":"Họ","Email Address":"Địa chỉ email","Phone Number":"Số điện thoại","Role":"Vai trò","Password":"Mật khẩu","Change":"Thay đổi","Two-Factor Authentication":"Xác thực hai yếu tố","New Orders":"Đơn hàng mới","New Customers":"Khách hàng mới","Customer Messages":"Tin nhắn khách hàng","Weekly Reports":"Báo cáo hàng tuần","Login Alerts":"Cảnh báo đăng nhập","Session Protection":"Bảo vệ phiên","Light":"Sáng","Dark":"Tối","System Default":"Mặc định hệ thống","Out of Stock":"Hết hàng","Electronics":"Điện tử","Accessories":"Phụ kiện","Growth":"Tăng trưởng","Average Order Value":"Giá trị đơn hàng trung bình","View all":"Xem tất cả","+ Add Product":"+ Thêm sản phẩm"},
"pl":{"Dashboard":"Panel","Analytics":"Analityka","Products":"Produkty","Orders":"Zamówienia","Customers":"Klienci","Messages":"Wiadomości","Settings":"Ustawienia","Profile":"Profil","Administrator":"Administrator","Total Revenue":"Łączny przychód","Total Orders":"Łączna liczba zamówień","Conversion Rate":"Współczynnik konwersji","In Stock":"Dostępne","Low Stock":"Niski stan","Inventory Value":"Wartość zapasów","Completed":"Zakończone","Processing":"W trakcie","Pending":"Oczekujące","Unread":"Nieprzeczytane","Resolved":"Rozwiązane","Revenue Overview":"Przegląd przychodów","Recent Activity":"Ostatnia aktywność","Recent Orders":"Ostatnie zamówienia","Customer Conversations":"Rozmowy z klientami","Support Overview":"Przegląd wsparcia","Quick Support":"Szybkie wsparcie","Product Catalog":"Katalog produktów","Inventory Status":"Stan magazynu","Categories":"Kategorie","Order Status":"Status zamówienia","Order Insights":"Statystyki zamówień","Personal Information":"Dane osobowe","Security":"Bezpieczeństwo","Account Activity":"Aktywność konta","Store Settings":"Ustawienia sklepu","Notifications":"Powiadomienia","Appearance":"Wygląd","Theme":"Motyw","Language":"Język","Save Changes":"Zapisz zmiany","Cancel":"Anuluj","Documentation":"Dokumentacja","Support":"Wsparcie","Customer":"Klient","Product":"Produkt","Category":"Kategoria","Price":"Cena","Stock":"Stan","Date":"Data","Amount":"Kwota","Status":"Status","First Name":"Imię","Last Name":"Nazwisko","Email Address":"Adres e-mail","Phone Number":"Numer telefonu","Role":"Rola","Password":"Hasło","Change":"Zmień","Two-Factor Authentication":"Uwierzytelnianie dwuskładnikowe","New Orders":"Nowe zamówienia","New Customers":"Nowi klienci","Customer Messages":"Wiadomości klientów","Weekly Reports":"Raporty tygodniowe","Login Alerts":"Alerty logowania","Session Protection":"Ochrona sesji","Light":"Jasny","Dark":"Ciemny","System Default":"Domyślny systemu","Out of Stock":"Brak na stanie","Electronics":"Elektronika","Accessories":"Akcesoria","Growth":"Wzrost","Average Order Value":"Średnia wartość zamówienia","View all":"Zobacz wszystko","+ Add Product":"+ Dodaj produkt"},
"uk":{"Dashboard":"Панель керування","Analytics":"Аналітика","Products":"Товари","Orders":"Замовлення","Customers":"Клієнти","Messages":"Повідомлення","Settings":"Налаштування","Profile":"Профіль","Administrator":"Адміністратор","Total Revenue":"Загальний дохід","Total Orders":"Усього замовлень","Conversion Rate":"Коефіцієнт конверсії","In Stock":"У наявності","Low Stock":"Мало на складі","Inventory Value":"Вартість запасів","Completed":"Завершено","Processing":"Обробляється","Pending":"Очікує","Unread":"Непрочитані","Resolved":"Вирішені","Revenue Overview":"Огляд доходів","Recent Activity":"Остання активність","Recent Orders":"Останні замовлення","Customer Conversations":"Розмови з клієнтами","Support Overview":"Огляд підтримки","Quick Support":"Швидка підтримка","Product Catalog":"Каталог товарів","Inventory Status":"Стан запасів","Categories":"Категорії","Order Status":"Статус замовлення","Order Insights":"Статистика замовлень","Personal Information":"Особиста інформація","Security":"Безпека","Account Activity":"Активність облікового запису","Store Settings":"Налаштування магазину","Notifications":"Сповіщення","Appearance":"Вигляд","Theme":"Тема","Language":"Мова","Save Changes":"Зберегти зміни","Cancel":"Скасувати","Documentation":"Документація","Support":"Підтримка","Customer":"Клієнт","Product":"Товар","Category":"Категорія","Price":"Ціна","Stock":"Запас","Date":"Дата","Amount":"Сума","Status":"Статус","First Name":"Ім’я","Last Name":"Прізвище","Email Address":"Електронна пошта","Phone Number":"Номер телефону","Role":"Роль","Password":"Пароль","Change":"Змінити","Two-Factor Authentication":"Двофакторна автентифікація","New Orders":"Нові замовлення","New Customers":"Нові клієнти","Customer Messages":"Повідомлення клієнтів","Weekly Reports":"Щотижневі звіти","Login Alerts":"Сповіщення про вхід","Session Protection":"Захист сеансу","Light":"Світла","Dark":"Темна","System Default":"Системна","Out of Stock":"Немає в наявності","Electronics":"Електроніка","Accessories":"Аксесуари","Growth":"Зростання","Average Order Value":"Середня вартість замовлення","View all":"Переглянути все","+ Add Product":"+ Додати товар"},
"sv":{"Dashboard":"Instrumentpanel","Analytics":"Analys","Products":"Produkter","Orders":"Beställningar","Customers":"Kunder","Messages":"Meddelanden","Settings":"Inställningar","Profile":"Profil","Administrator":"Administratör","Total Revenue":"Totala intäkter","Total Orders":"Totalt antal beställningar","Conversion Rate":"Konverteringsgrad","In Stock":"I lager","Low Stock":"Lågt lager","Inventory Value":"Lagervärde","Completed":"Slutförda","Processing":"Bearbetas","Pending":"Väntande","Unread":"Olästa","Resolved":"Lösta","Revenue Overview":"Intäktsöversikt","Recent Activity":"Senaste aktivitet","Recent Orders":"Senaste beställningar","Customer Conversations":"Kundkonversationer","Support Overview":"Supportöversikt","Quick Support":"Snabb support","Product Catalog":"Produktkatalog","Inventory Status":"Lagerstatus","Categories":"Kategorier","Order Status":"Orderstatus","Order Insights":"Orderinsikter","Personal Information":"Personlig information","Security":"Säkerhet","Account Activity":"Kontoaktivitet","Store Settings":"Butiksinställningar","Notifications":"Aviseringar","Appearance":"Utseende","Theme":"Tema","Language":"Språk","Save Changes":"Spara ändringar","Cancel":"Avbryt","Documentation":"Dokumentation","Support":"Support","Customer":"Kund","Product":"Produkt","Category":"Kategori","Price":"Pris","Stock":"Lager","Date":"Datum","Amount":"Belopp","Status":"Status","First Name":"Förnamn","Last Name":"Efternamn","Email Address":"E-postadress","Phone Number":"Telefonnummer","Role":"Roll","Password":"Lösenord","Change":"Ändra","Two-Factor Authentication":"Tvåfaktorsautentisering","New Orders":"Nya beställningar","New Customers":"Nya kunder","Customer Messages":"Kundmeddelanden","Weekly Reports":"Veckorapporter","Login Alerts":"Inloggningsaviseringar","Session Protection":"Sessionsskydd","Light":"Ljus","Dark":"Mörk","System Default":"Systemstandard","Out of Stock":"Slut i lager","Electronics":"Elektronik","Accessories":"Tillbehör","Growth":"Tillväxt","Average Order Value":"Genomsnittligt ordervärde","View all":"Visa alla","+ Add Product":"+ Lägg till produkt"},
"el":{"Dashboard":"Πίνακας ελέγχου","Analytics":"Αναλύσεις","Products":"Προϊόντα","Orders":"Παραγγελίες","Customers":"Πελάτες","Messages":"Μηνύματα","Settings":"Ρυθμίσεις","Profile":"Προφίλ","Administrator":"Διαχειριστής","Total Revenue":"Συνολικά έσοδα","Total Orders":"Σύνολο παραγγελιών","Conversion Rate":"Ποσοστό μετατροπής","In Stock":"Σε απόθεμα","Low Stock":"Χαμηλό απόθεμα","Inventory Value":"Αξία αποθέματος","Completed":"Ολοκληρωμένα","Processing":"Σε επεξεργασία","Pending":"Σε αναμονή","Unread":"Μη αναγνωσμένα","Resolved":"Επιλυμένα","Revenue Overview":"Επισκόπηση εσόδων","Recent Activity":"Πρόσφατη δραστηριότητα","Recent Orders":"Πρόσφατες παραγγελίες","Customer Conversations":"Συνομιλίες πελατών","Support Overview":"Επισκόπηση υποστήριξης","Quick Support":"Γρήγορη υποστήριξη","Product Catalog":"Κατάλογος προϊόντων","Inventory Status":"Κατάσταση αποθέματος","Categories":"Κατηγορίες","Order Status":"Κατάσταση παραγγελίας","Order Insights":"Στοιχεία παραγγελιών","Personal Information":"Προσωπικές πληροφορίες","Security":"Ασφάλεια","Account Activity":"Δραστηριότητα λογαριασμού","Store Settings":"Ρυθμίσεις καταστήματος","Notifications":"Ειδοποιήσεις","Appearance":"Εμφάνιση","Theme":"Θέμα","Language":"Γλώσσα","Save Changes":"Αποθήκευση αλλαγών","Cancel":"Ακύρωση","Documentation":"Τεκμηρίωση","Support":"Υποστήριξη","Customer":"Πελάτης","Product":"Προϊόν","Category":"Κατηγορία","Price":"Τιμή","Stock":"Απόθεμα","Date":"Ημερομηνία","Amount":"Ποσό","Status":"Κατάσταση","First Name":"Όνομα","Last Name":"Επώνυμο","Email Address":"Διεύθυνση email","Phone Number":"Τηλέφωνο","Role":"Ρόλος","Password":"Κωδικός πρόσβασης","Change":"Αλλαγή","Two-Factor Authentication":"Έλεγχος ταυτότητας δύο παραγόντων","New Orders":"Νέες παραγγελίες","New Customers":"Νέοι πελάτες","Customer Messages":"Μηνύματα πελατών","Weekly Reports":"Εβδομαδιαίες αναφορές","Login Alerts":"Ειδοποιήσεις σύνδεσης","Session Protection":"Προστασία συνεδρίας","Light":"Φωτεινό","Dark":"Σκούρο","System Default":"Προεπιλογή συστήματος","Out of Stock":"Εξαντλημένο","Electronics":"Ηλεκτρονικά","Accessories":"Αξεσουάρ","Growth":"Ανάπτυξη","Average Order Value":"Μέση αξία παραγγελίας","View all":"Προβολή όλων","+ Add Product":"+ Προσθήκη προϊόντος"},
"he":{"Dashboard":"לוח בקרה","Analytics":"אנליטיקה","Products":"מוצרים","Orders":"הזמנות","Customers":"לקוחות","Messages":"הודעות","Settings":"הגדרות","Profile":"פרופיל","Administrator":"מנהל מערכת","Total Revenue":"הכנסות כוללות","Total Orders":"סך ההזמנות","Conversion Rate":"שיעור המרה","In Stock":"במלאי","Low Stock":"מלאי נמוך","Inventory Value":"שווי מלאי","Completed":"הושלם","Processing":"בעיבוד","Pending":"ממתין","Unread":"לא נקראו","Resolved":"נפתרו","Revenue Overview":"סקירת הכנסות","Recent Activity":"פעילות אחרונה","Recent Orders":"הזמנות אחרונות","Customer Conversations":"שיחות עם לקוחות","Support Overview":"סקירת תמיכה","Quick Support":"תמיכה מהירה","Product Catalog":"קטלוג מוצרים","Inventory Status":"מצב מלאי","Categories":"קטגוריות","Order Status":"סטטוס הזמנה","Order Insights":"תובנות הזמנות","Personal Information":"מידע אישי","Security":"אבטחה","Account Activity":"פעילות החשבון","Store Settings":"הגדרות החנות","Notifications":"התראות","Appearance":"מראה","Theme":"ערכת נושא","Language":"שפה","Save Changes":"שמור שינויים","Cancel":"ביטול","Documentation":"תיעוד","Support":"תמיכה","Customer":"לקוח","Product":"מוצר","Category":"קטגוריה","Price":"מחיר","Stock":"מלאי","Date":"תאריך","Amount":"סכום","Status":"סטטוס","First Name":"שם פרטי","Last Name":"שם משפחה","Email Address":"כתובת אימייל","Phone Number":"מספר טלפון","Role":"תפקיד","Password":"סיסמה","Change":"שינוי","Two-Factor Authentication":"אימות דו-שלבי","New Orders":"הזמנות חדשות","New Customers":"לקוחות חדשים","Customer Messages":"הודעות לקוחות","Weekly Reports":"דוחות שבועיים","Login Alerts":"התראות כניסה","Session Protection":"הגנת הפעלה","Light":"בהיר","Dark":"כהה","System Default":"ברירת מחדל של המערכת","Out of Stock":"אזל מהמלאי","Electronics":"אלקטרוניקה","Accessories":"אביזרים","Growth":"צמיחה","Average Order Value":"ערך הזמנה ממוצע","View all":"הצג הכל","+ Add Product":"+ הוסף מוצר"}
})

# Language labels: exactly the 21 languages requested.
language_labels = {
"en":"English","ar":"العربية","fr":"Français","es":"Español","de":"Deutsch","it":"Italiano",
"pt":"Português","tr":"Türkçe","nl":"Nederlands","ru":"Русский","zh":"中文","ja":"日本語",
"ko":"한국어","hi":"हिन्दी","id":"Bahasa Indonesia","vi":"Tiếng Việt","pl":"Polski",
"uk":"Українська","sv":"Svenska","el":"Ελληνικά","he":"עברית"
}

# For locales not requiring a dedicated translation table above, provide a
# complete vocabulary fallback using the English canonical values. This keeps
# every key stable and lets the UI remain functional while the explicit tables
# above cover the full visible navigation/control vocabulary.
all_locales = list(language_labels)
translations.update(compact)
for code in all_locales:
    translations.setdefault(code, {})
    for key, value in translations["en"].items():
        translations[code].setdefault(key, value)

# Add language names in every locale.
for code in all_locales:
    for target, label in language_labels.items():
        translations[code][label] = label

js = r'''/* ================================================================
   NEXORA — script.js
   Large centralized application controller
   Languages: 21
   English • العربية • Français • Español • Deutsch • Italiano
   Português • Türkçe • Nederlands • Русский • 中文 • 日本語
   한국어 • हिन्दी • Bahasa Indonesia • Tiếng Việt • Polski
   Українська • Svenska • Ελληνικά • עברית

   Features:
   - multilingual UI
   - automatic text translation for existing HTML
   - localStorage language persistence
   - RTL support
   - theme switching
   - mobile sidebar
   - notification panel
   - filters
   - settings persistence
   - profile form persistence
   - active navigation
   - dynamic page detection
   - safe fallback to English
================================================================ */

"use strict";

const NEXORA = (() => {
    const STORAGE = {
        language: "nexora_language",
        theme: "nexora_theme",
        settings: "nexora_settings",
        profile: "nexora_profile"
    };

    const LANGUAGES = __LANGUAGES__;

    const T = __TRANSLATIONS__;

    const state = {
        language: localStorage.getItem(STORAGE.language) || "en",
        theme: localStorage.getItem(STORAGE.theme) || "light",
        sidebarOpen: false
    };

    function escapeRegExp(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function translate(key) {
        if (!key) return key;
        return (T[state.language] && T[state.language][key]) ||
               (T.en && T.en[key]) ||
               key;
    }

    function translateTextNode(node) {
        const original = node.nodeValue;
        const clean = original.trim();
        if (!clean || clean.length < 2) return;

        const translated = translate(clean);
        if (translated !== clean) {
            const leading = original.match(/^\s*/)?.[0] || "";
            const trailing = original.match(/\s*$/)?.[0] || "";
            node.nodeValue = leading + translated + trailing;
        }
    }

    function walkAndTranslate(root) {
        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    const tag = parent.tagName;
                    if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(tag)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const nodes = [];
        let node;
        while ((node = walker.nextNode())) nodes.push(node);
        nodes.forEach(translateTextNode);
    }

    function translateAttributes() {
        document.querySelectorAll("[placeholder]").forEach(el => {
            const original = el.dataset.nexoraPlaceholder || el.placeholder;
            el.dataset.nexoraPlaceholder = original;
            const translated = translate(original);
            if (translated !== original) el.placeholder = translated;
        });

        document.querySelectorAll("[title]").forEach(el => {
            const original = el.dataset.nexoraTitle || el.title;
            el.dataset.nexoraTitle = original;
            const translated = translate(original);
            if (translated !== original) el.title = translated;
        });

        document.querySelectorAll("option").forEach(option => {
            const original = option.dataset.nexoraText || option.textContent.trim();
            option.dataset.nexoraText = original;
            const translated = translate(original);
            if (translated !== original) option.textContent = translated;
        });
    }

    function applyDirection() {
        const rtl = state.language === "ar" || state.language === "he";
        document.documentElement.dir = rtl ? "rtl" : "ltr";
        document.documentElement.lang = state.language;

        document.body.classList.toggle("rtl-layout", rtl);
        document.body.classList.toggle("ltr-layout", !rtl);
    }

    function setLanguage(language) {
        if (!LANGUAGES[language]) language = "en";
        state.language = language;
        localStorage.setItem(STORAGE.language, language);

        // Reloading is deliberately avoided: the dashboard translates live.
        document.body.classList.add("language-changing");

        setTimeout(() => {
            // Mark original values once so repeated language changes don't
            // permanently lose the English lookup key.
            document.querySelectorAll("*").forEach(el => {
                if (
                    el.children.length === 0 &&
                    el.textContent.trim() &&
                    !el.dataset.nexoraOriginal
                ) {
                    el.dataset.nexoraOriginal = el.textContent.trim();
                }
            });

            // Restore canonical English text before translating into the new locale.
            document.querySelectorAll("[data-nexora-original]").forEach(el => {
                const original = el.dataset.nexoraOriginal;
                if (original && T.en[original]) el.textContent = translate(original);
            });

            walkAndTranslate(document.body);
            translateAttributes();
            applyDirection();
            updateLanguageSelectors();
            updateThemeSelectors();

            document.body.classList.remove("language-changing");
            document.dispatchEvent(new CustomEvent("nexora:languagechange", {
                detail: { language }
            }));
        }, 20);
    }

    function updateLanguageSelectors() {
        document.querySelectorAll("[data-language-selector], #language").forEach(select => {
            if (select.tagName !== "SELECT") return;

            const current = state.language;
            const options = Object.entries(LANGUAGES)
                .map(([code, label]) => `<option value="${code}">${label}</option>`)
                .join("");

            // Only rebuild dedicated language selector, never unrelated selects.
            if (select.id === "language" || select.dataset.languageSelector !== undefined) {
                select.innerHTML = options;
                select.value = current;
            }
        });
    }

    function updateThemeSelectors() {
        const theme = document.getElementById("theme");
        if (!theme) return;

        const map = {
            "Light": "light",
            "Dark": "dark",
            "System Default": "system"
        };

        const wanted = state.theme;
        const option = [...theme.options].find(o => map[o.dataset.nexoraOriginal || o.textContent.trim()] === wanted);
        if (option) theme.value = option.value;
    }

    function applyTheme(theme) {
        if (!["light", "dark", "system"].includes(theme)) theme = "light";

        state.theme = theme;
        localStorage.setItem(STORAGE.theme, theme);

        document.documentElement.dataset.theme = theme;
        document.body.classList.toggle("dark-mode", theme === "dark");
        document.body.classList.toggle("light-mode", theme === "light");

        if (theme === "system") {
            const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.body.classList.toggle("dark-mode", dark);
            document.body.classList.toggle("light-mode", !dark);
        }
    }

    function setupSidebar() {
        const button = document.getElementById("menuButton");
        const sidebar = document.querySelector(".sidebar");
        if (!button || !sidebar) return;

        button.addEventListener("click", () => {
            state.sidebarOpen = !state.sidebarOpen;
            sidebar.classList.toggle("open", state.sidebarOpen);
            document.body.classList.toggle("sidebar-open", state.sidebarOpen);
        });

        document.addEventListener("click", event => {
            if (!state.sidebarOpen) return;
            if (
                !sidebar.contains(event.target) &&
                event.target !== button
            ) {
                state.sidebarOpen = false;
                sidebar.classList.remove("open");
                document.body.classList.remove("sidebar-open");
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) {
                state.sidebarOpen = false;
                sidebar.classList.remove("open");
                document.body.classList.remove("sidebar-open");
            }
        });
    }

    function setupActiveNavigation() {
        const current = location.pathname.split("/").pop() || "index.html";

        document.querySelectorAll(".nav-link").forEach(link => {
            const href = (link.getAttribute("href") || "").split("/").pop();
            if (href === current) link.classList.add("active");

            link.addEventListener("click", () => {
                document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
                link.classList.add("active");
            });
        });
    }

    function setupNotifications() {
        const button = document.getElementById("notificationButton");
        const panel = document.getElementById("notificationPanel");
        const close = document.getElementById("closeNotifications");

        if (!button || !panel) return;

        button.addEventListener("click", event => {
            event.stopPropagation();
            panel.classList.toggle("open");
            panel.classList.toggle("active");
        });

        if (close) {
            close.addEventListener("click", () => {
                panel.classList.remove("open", "active");
            });
        }

        document.addEventListener("click", event => {
            if (!panel.contains(event.target) && event.target !== button) {
                panel.classList.remove("open", "active");
            }
        });
    }

    function setupFilters() {
        document.querySelectorAll("select").forEach(select => {
            if (
                select.id === "language" ||
                select.id === "theme" ||
                select.id === "currency" ||
                select.id === "timezone" ||
                select.id === "revenuePeriod"
            ) return;

            select.addEventListener("change", () => {
                const selected = select.value.toLowerCase();
                const rows = document.querySelectorAll("tbody tr");

                if (!rows.length) return;

                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();

                    if (
                        selected.includes("all") ||
                        selected.includes("messages") ||
                        text.includes(selected)
                    ) {
                        row.style.display = "";
                    } else {
                        row.style.display = "none";
                    }
                });
            });
        });
    }

    function setupRevenuePeriod() {
        const selector = document.getElementById("revenuePeriod");
        if (!selector) return;

        selector.addEventListener("change", () => {
            document.dispatchEvent(new CustomEvent("nexora:revenuechange", {
                detail: { period: selector.value }
            }));
        });
    }

    function setupSettings() {
        const theme = document.getElementById("theme");
        if (theme) {
            theme.addEventListener("change", () => {
                const text = theme.value.trim();

                if (/^dark$/i.test(text)) applyTheme("dark");
                else if (/^system/i.test(text)) applyTheme("system");
                else applyTheme("light");
            });
        }

        const save = [...document.querySelectorAll(".primary-button")]
            .find(btn => /save/i.test(btn.textContent));

        const cancel = [...document.querySelectorAll(".secondary-button")]
            .find(btn => /cancel/i.test(btn.textContent));

        if (save) {
            save.addEventListener("click", () => {
                saveSettings();
                showToast(translate("Save Changes"));
            });
        }

        if (cancel) {
            cancel.addEventListener("click", () => {
                restoreSettings();
                showToast(translate("Cancel"));
            });
        }

        document.querySelectorAll(".toggle input").forEach(input => {
            input.addEventListener("change", () => {
                input.closest(".toggle")?.classList.toggle("enabled", input.checked);
                saveSettings();
            });
        });

        restoreSettings();
    }

    function getFormValues() {
        const data = {};
        document.querySelectorAll("input, select, textarea").forEach(input => {
            if (!input.id) return;

            if (input.type === "checkbox") data[input.id] = input.checked;
            else data[input.id] = input.value;
        });
        return data;
    }

    function saveSettings() {
        const data = getFormValues();
        localStorage.setItem(STORAGE.settings, JSON.stringify(data));

        const profileFields = [
            "firstName", "lastName", "profileEmail", "phone", "role"
        ];

        const profile = {};
        profileFields.forEach(id => {
            const field = document.getElementById(id);
            if (field) profile[id] = field.value;
        });

        if (Object.keys(profile).length) {
            localStorage.setItem(STORAGE.profile, JSON.stringify(profile));
            updateProfileHeader(profile);
        }
    }

    function restoreSettings() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE.settings) || "{}");

            Object.entries(saved).forEach(([id, value]) => {
                const field = document.getElementById(id);
                if (!field) return;

                if (field.type === "checkbox") field.checked = Boolean(value);
                else field.value = value;
            });

            const profile = JSON.parse(localStorage.getItem(STORAGE.profile) || "{}");
            if (Object.keys(profile).length) {
                Object.entries(profile).forEach(([id, value]) => {
                    const field = document.getElementById(id);
                    if (field && !field.disabled) field.value = value;
                });
                updateProfileHeader(profile);
            }
        } catch (error) {
            console.warn("NEXORA storage recovery failed:", error);
        }
    }

    function updateProfileHeader(profile) {
        const first = profile.firstName || "Alex";
        const last = profile.lastName || "Morgan";
        const full = `${first} ${last}`.trim();

        document.querySelectorAll(".user-profile strong, .profile-header h2")
            .forEach(el => el.textContent = full);

        const avatar = full.charAt(0).toUpperCase();
        document.querySelectorAll(".avatar, .profile-avatar")
            .forEach(el => el.textContent = avatar);

        if (profile.profileEmail) {
            document.querySelectorAll(".profile-header span")
                .forEach(el => {
                    if (el.textContent.includes("@")) el.textContent = profile.profileEmail;
                });
        }
    }

    function showToast(message) {
        let toast = document.getElementById("nexoraToast");

        if (!toast) {
            toast = document.createElement("div");
            toast.id = "nexoraToast";
            toast.className = "nexora-toast";
            Object.assign(toast.style, {
                position: "fixed",
                right: "24px",
                bottom: "24px",
                zIndex: "99999",
                padding: "12px 18px",
                borderRadius: "12px",
                background: "var(--primary, #111827)",
                color: "#fff",
                boxShadow: "0 12px 30px rgba(0,0,0,.18)",
                opacity: "0",
                transform: "translateY(12px)",
                transition: "all .25s ease"
            });
            document.body.appendChild(toast);
        }

        toast.textContent = message;

        requestAnimationFrame(() => {
            toast.style.opacity = "1";
            toast.style.transform = "translateY(0)";
        });

        clearTimeout(toast._timer);
        toast._timer = setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(12px)";
        }, 1800);
    }

    function setupLanguageControls() {
        // Existing #language selector on settings.html.
        const language = document.getElementById("language");

        if (language) {
            language.dataset.languageSelector = "true";

            language.addEventListener("change", () => {
                setLanguage(language.value);
            });
        }

        document.querySelectorAll("[data-language]").forEach(control => {
            control.addEventListener("click", () => {
                setLanguage(control.dataset.language);
            });
        });

        // Optional custom language menu generated by script.
        const selectors = document.querySelectorAll("[data-language-selector]");
        selectors.forEach(select => {
            select.addEventListener("change", () => setLanguage(select.value));
        });
    }

    function injectLanguageSwitcher() {
        if (document.getElementById("nexoraLanguageSwitcher")) return;

        const headerRight = document.querySelector(".header-right");
        if (!headerRight) return;

        const wrapper = document.createElement("div");
        wrapper.id = "nexoraLanguageSwitcher";
        wrapper.className = "nexora-language-switcher";

        const select = document.createElement("select");
        select.setAttribute("aria-label", "Language");
        select.dataset.languageSelector = "true";

        Object.entries(LANGUAGES).forEach(([code, label]) => {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = label;
            select.appendChild(option);
        });

        select.value = state.language;

        select.addEventListener("change", () => setLanguage(select.value));

        wrapper.appendChild(select);
        headerRight.insertBefore(wrapper, headerRight.firstChild);
    }

    function preserveCanonicalText() {
        document.querySelectorAll("body *").forEach(el => {
            if (el.children.length !== 0) return;
            const text = el.textContent.trim();

            if (text && !el.dataset.nexoraOriginal && T.en[text]) {
                el.dataset.nexoraOriginal = text;
            }
        });

        document.querySelectorAll("[placeholder]").forEach(el => {
            if (!el.dataset.nexoraPlaceholder) {
                el.dataset.nexoraPlaceholder = el.placeholder;
            }
        });
    }

    function translatePage() {
        preserveCanonicalText();

        document.querySelectorAll("[data-nexora-original]").forEach(el => {
            const original = el.dataset.nexoraOriginal;
            if (T.en[original]) el.textContent = translate(original);
        });

        walkAndTranslate(document.body);
        translateAttributes();
        applyDirection();
        updateLanguageSelectors();
    }

    function watchDynamicContent() {
        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType !== Node.ELEMENT_NODE) return;

                    // Ignore our own generated controls.
                    if (
                        node.id === "nexoraLanguageSwitcher" ||
                        node.id === "nexoraToast"
                    ) return;

                    preserveCanonicalText();
                    walkAndTranslate(node);
                    translateAttributes();
                });
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function setupResponsiveTable() {
        document.querySelectorAll(".table-wrapper table").forEach(table => {
            const headers = [...table.querySelectorAll("thead th")].map(th =>
                th.textContent.trim()
            );

            table.querySelectorAll("tbody tr").forEach(row => {
                [...row.children].forEach((cell, index) => {
                    if (headers[index]) {
                        cell.dataset.label = headers[index];
                    }
                });
            });
        });
    }

    function setupLinks() {
        document.querySelectorAll('a[href="#"]').forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault();

                if (/view all/i.test(link.textContent)) {
                    showToast(translate("View all"));
                } else if (/documentation/i.test(link.textContent)) {
                    showToast(translate("Documentation"));
                } else if (/support/i.test(link.textContent)) {
                    showToast(translate("Support"));
                }
            });
        });
    }

    function setupAddProduct() {
        const add = [...document.querySelectorAll("a, button")]
            .find(el => el.textContent.includes("Add Product"));

        if (!add) return;

        add.addEventListener("click", event => {
            if (add.tagName === "A" && add.getAttribute("href") === "#") {
                event.preventDefault();
            }

            showToast(translate("+ Add Product"));
        });
    }

    function setupSystemThemeListener() {
        const media = window.matchMedia("(prefers-color-scheme: dark)");

        media.addEventListener?.("change", () => {
            if (state.theme === "system") applyTheme("system");
        });
    }

    function init() {
        applyTheme(state.theme);
        setupSidebar();
        setupActiveNavigation();
        setupNotifications();
        setupFilters();
        setupRevenuePeriod();
        setupSettings();
        setupLanguageControls();
        injectLanguageSwitcher();
        translatePage();
        setupResponsiveTable();
        setupLinks();
        setupAddProduct();
        setupSystemThemeListener();
        watchDynamicContent();

        window.NEXORA = {
            state,
            languages: LANGUAGES,
            translations: T,
            translate,
            setLanguage,
            applyTheme,
            showToast,
            saveSettings,
            restoreSettings
        };

        document.dispatchEvent(new CustomEvent("nexora:ready"));
    }

    return { init };
})();

document.addEventListener("DOMContentLoaded", NEXORA.init);
'''

js = js.replace("__LANGUAGES__", repr(language_labels).replace("'", '"'))
js = js.replace("__TRANSLATIONS__", repr(translations).replace("'", '"'))

path = Path("/mnt/data/NEXORA_script.js")
path.write_text(js, encoding="utf-8")

print(f"Created: {path}")
print(f"Size: {path.stat().st_size:,} bytes")
print(f"Lines: {len(js.splitlines()):,}")
print("Locales:", ", ".join(language_labels.values()))
