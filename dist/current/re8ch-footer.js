(() => {
const currentScript = document.currentScript;
const scriptElement = currentScript || document.querySelector('script[src*="/dist/re8ch-footer.js"], script[src*="/dist/current/re8ch-footer.js"]');
const scriptUrl = new URL(scriptElement?.src || 'https://brand-assets.re8ch.com/dist/re8ch-footer.js', document.baseURI);
const componentBaseUrl = scriptUrl.href.replace(/\/re8ch-footer\.js(?:\?.*)?$/, '');
const assetBaseUrl = componentBaseUrl.replace(/\/dist(?:\/current)?$/, '');
const trustMarkBaseUrl = `${assetBaseUrl}/dist/trust-marks`;
const assetQuery = scriptUrl.search || '';

const RE8CH_FOOTER_CONFIG = {
  brand: {
    logoSrc: '/logo.svg',
    name: 'RE8CH',
    cnName: '锐奇创想',
    badge: 'Flagship Brand',
    description: '统一产品视觉、运行层级与外部核验入口。',
    homeHref: 'https://re8ch.com/',
  },
  layout: {
    maxWidth: '1600px',
    productsLabel: 'Products',
    recordsVisible: 8,
  },
  products: [
    { id: 'compocv', label: 'CompoCV', href: 'https://compocv.re8ch.com', icon: 'PRODUCTS/compocv/SVG/icon.svg', brandColor: '#2563eb' },
    { id: 'ledger', label: 'Ledger', href: 'https://ledger.re8ch.com', icon: 'PRODUCTS/lizhang-ledger/SVG/icon.svg', brandColor: '#2563eb' },
    { id: 'anysite', label: 'AnySite', href: 'https://anysiteonearth.re8ch.com', icon: 'PRODUCTS/anysiteonearth/SVG/icon.svg', brandColor: '#14b8c4' },
    { id: 'anycam', label: 'Anycam', href: 'https://anycam.re8ch.com', icon: 'PRODUCTS/anycam/SVG/icon.svg', brandColor: '#16a34a' },
    { id: 'aesthete', label: 'Aesthete', href: 'https://aesthete.re8ch.com', icon: 'PRODUCTS/aesthete/SVG/icon.svg', brandColor: '#d6a23e' },
    { id: 'phonaid', label: 'Phonaid', href: { en: 'https://phonaid.com/' }, icon: 'PRODUCTS/phonaid/SVG/icon.svg', brandColor: '#8b5cf6' },
    { id: 'cluster', label: 'Cluster', href: 'https://cluster.re8ch.com', icon: 'PRODUCTS/cluster/SVG/icon-no-edge.svg', brandColor: '#00b559' },
    { id: 'observable', label: 'Observable', href: 'https://observable.re8ch.com', icon: 'PRODUCTS/observable/SVG/icon.svg', brandColor: '#f81018' },
    { id: 'registry-image', label: 'Registry Image', href: 'https://image.re8ch.com', icon: 'PRODUCTS/registry/SVG/icon.svg', brandColor: '#0a7fbe' },
    { id: 'user-hub', label: 'User Hub', href: { en: 'https://auth.re8ch.com/' }, icon: 'PRODUCTS/user-hub/SVG/icon.svg', brandColor: '#0a7fbe' },
    { id: 'advfab', label: 'AdvFab', href: { en: 'https://advfab.org/', 'zh-CN': 'https://advfab.org/zh-CN/' }, icon: 'PRODUCTS/advfab/SVG/icon.svg', brandColor: '#0d9488' },
    { id: 'among-clusters', label: 'Among Clusters', href: { en: 'https://among-clusters.github.io/website/en/', 'zh-CN': 'https://among-clusters.github.io/website/zh-CN/' }, icon: 'PRODUCTS/among-clusters/SVG/icon.svg', brandColor: '#6d5dfc' },
    { id: 'public-edge', label: 'Public Edge', href: { en: 'https://public-edge.github.io/website/en/', 'zh-CN': 'https://public-edge.github.io/website/zh-CN/' }, icon: 'PRODUCTS/public-edge/SVG/icon.svg', brandColor: '#e0700b' },
  ],
  companyRecords: [
    {
      id: 'reachieve-certificate',
      name: { en: 'Reachieve LLC certificate', 'zh-CN': 'Reachieve LLC 存续证明', 'zh-TW': 'Reachieve LLC 存續證明' },
      description: { en: 'Watermarked public copy · issued 2023-08-30', 'zh-CN': '加水印公开副本 · 2023-08-30 签发', 'zh-TW': '加浮水印公開副本 · 2023-08-30 簽發' },
      detail: { en: 'Historical Certificate of Existence issued by the Montana Secretary of State. This copy is not proof of current status.', 'zh-CN': '蒙大拿州州务卿签发的历史存续证明。公开副本不能替代实时状态查询。', 'zh-TW': '蒙大拿州州務卿簽發的歷史存續證明。公開副本不能替代即時狀態查詢。' },
      action: { en: 'View public copy', 'zh-CN': '查看公开副本', 'zh-TW': '查看公開副本' },
      href: `${assetBaseUrl}/company/documents/reachieve-llc-certificate-of-existence-public.pdf`,
      logo: 'montana-sos.webp',
      icon: 'certificate',
      brandColor: '#8f1d1d',
    },
    {
      id: 'china-business-license',
      name: { en: 'China business license', 'zh-CN': '锐奇软件开发工作室营业执照', 'zh-TW': '銳奇軟體開發工作室營業執照' },
      description: { en: 'Watermarked public copy · registered 2023-09-06', 'zh-CN': '加水印公开副本 · 2023-09-06 登记', 'zh-TW': '加浮水印公開副本 · 2023-09-06 登記' },
      detail: { en: 'Public display copy of the business license. Verify current registration with the National Enterprise Credit Information Publicity System.', 'zh-CN': '营业执照公开展示副本；当前登记状态请以国家企业信用信息公示系统为准。', 'zh-TW': '營業執照公開展示副本；目前登記狀態請以國家企業信用資訊公示系統為準。' },
      action: { en: 'View public copy', 'zh-CN': '查看公开副本', 'zh-TW': '查看公開副本' },
      href: `${assetBaseUrl}/company/documents/reach-software-studio-business-license-public.webp`,
      logo: 'china-credit.svg',
      icon: 'certificate',
      brandColor: '#b42318',
    },
    {
      id: 'montana-sos',
      name: 'Montana Secretary of State',
      description: 'Company Registry',
      detail: '在 Montana Secretary of State Business Search 中搜索 RE8CH / Reachieve LLC 核验公司注册记录。',
      action: 'View Record',
      href: 'https://biz.sosmt.gov/search/business',
      logo: 'montana-sos.webp',
      icon: 'building',
      brandColor: '#47657f',
    },
    {
      id: 'duns',
      name: 'D-U-N-S Number',
      description: '12-474-2472',
      detail: 'D-U-N-S Number: 12-474-2472。请在 D&B / D-U-N-S 查询入口自行搜索核验。',
      action: 'View Profile',
      href: 'https://www.dnb.com/duns-number/lookup.html',
      logo: 'duns.svg',
      icon: 'duns',
      brandColor: '#2aa8c8',
    },
    {
      id: 'icp',
      name: 'ICP 备案',
      description: '湘ICP备2025130798号-4',
      detail: 'ICP备案号: 湘ICP备2025130798号-4。请在工信部备案管理系统自行搜索核验。',
      action: 'View Filing',
      href: 'https://beian.miit.gov.cn',
      logo: 'national-emblem.png',
      icon: 'certificate',
      brandColor: '#2563eb',
    },
    {
      id: 'mps',
      name: '公安备案',
      description: '湘公网安备43138202000213号',
      detail: '公安备案号: 湘公网安备43138202000213号。可前往全国互联网安全管理服务平台核验。',
      action: 'View Filing',
      href: 'https://beian.mps.gov.cn/#/query/webSearch?code=43138202000213',
      logo: 'mps.png',
      icon: 'shield',
      brandColor: '#c81e1e',
    },
    {
      id: 'china-credit',
      name: '国家企业信用信息公示系统',
      description: 'China Credit',
      detail: '请在国家企业信用信息公示系统中搜索主体名称，核验企业公开登记信息。',
      action: 'View Record',
      href: 'https://www.gsxt.gov.cn/index.html',
      logo: 'china-credit.svg',
      icon: 'shield',
      brandColor: '#d92323',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Company Page',
      detail: 'LinkedIn 企业主页，用于核验公开公司资料和联系方式。',
      action: 'View Profile',
      href: 'https://www.linkedin.com/company/107777110',
      logo: 'linkedin.svg',
      icon: 'linkedin',
      brandColor: '#0a66c2',
    },
    {
      id: 'crunchbase',
      name: 'Crunchbase',
      description: 'Company Page',
      detail: 'Crunchbase 企业主页，用于核验公开公司资料、产品与组织信息。',
      action: 'View Profile',
      href: 'https://www.crunchbase.com/organization/re8ch',
      logo: 'crunchbase.svg',
      icon: 'crunchbase',
      brandColor: '#146aff',
    },
  ],
  contacts: [
    { id: 'contact', label: 'Contact Us', href: 'mailto:contact@re8ch.com', title: 'contact@re8ch.com', icon: 'mail' },
    { id: 'career', label: 'Join Us', href: 'mailto:career@re8ch.com', title: 'career@re8ch.com', icon: 'person' },
    { id: 'founder', label: 'Founder Profile', href: 'https://2wood.cn/', title: 'Woomoo Neo · 2wood.cn', icon: 'person' },
  ],
  legal: {
    copyright: '© 2026 RE8CH / 涟源市杨市镇锐奇软件开发工作室 / Reachieve LLC. All rights reserved.',
    icp: '湘ICP备2025130798号-4',
    icpHref: 'https://beian.miit.gov.cn',
    icpLogo: 'national-emblem.png',
    mps: '湘公网安备43138202000213号',
    mpsHref: 'https://beian.mps.gov.cn/#/query/webSearch?code=43138202000213',
    mpsLogo: 'mps.png',
    address: 'Where We Are',
    addressTitle: '湖南省娄底市涟源市杨市镇锐奇软件开发工作室',
  },
};

const FOOTER_LOCALE_COPY = {
  en: {
    productsLabel: 'Products',
    recordsLabel: 'Company records and public profiles',
    contact: 'Contact Us',
    career: 'Join Us',
    address: 'Where We Are',
    productSuffix: 'product',
    currentProduct: 'current product',
    scrollLeft: 'Scroll left',
    scrollRight: 'Scroll right',
  },
  'zh-CN': {
    productsLabel: '产品网络',
    recordsLabel: '公司记录与公开资料',
    contact: '联系我们',
    career: '加入我们',
    founder: '创始人档案',
    address: '我们在哪里',
    productSuffix: '产品',
    currentProduct: '当前产品',
    scrollLeft: '向左滚动',
    scrollRight: '向右滚动',
  },
  'zh-TW': {
    productsLabel: '產品網路',
    recordsLabel: '公司紀錄與公開資料',
    contact: '聯絡我們',
    career: '加入我們',
    founder: '創辦人檔案',
    address: '我們在哪裡',
    productSuffix: '產品',
    currentProduct: '目前產品',
    scrollLeft: '向左捲動',
    scrollRight: '向右捲動',
  },
  es: { productsLabel: 'Productos', recordsLabel: 'Registros y perfiles públicos', contact: 'Contacto', career: 'Únete', address: 'Dónde estamos', productSuffix: 'producto', currentProduct: 'producto actual', scrollLeft: 'Desplazar a la izquierda', scrollRight: 'Desplazar a la derecha' },
  ar: { productsLabel: 'المنتجات', recordsLabel: 'سجلات الشركة والملفات العامة', contact: 'اتصل بنا', career: 'انضم إلينا', address: 'أين نحن', productSuffix: 'منتج', currentProduct: 'المنتج الحالي', scrollLeft: 'مرر لليسار', scrollRight: 'مرر لليمين' },
  hi: { productsLabel: 'उत्पाद', recordsLabel: 'कंपनी रिकॉर्ड और सार्वजनिक प्रोफाइल', contact: 'संपर्क करें', career: 'हमसे जुड़ें', address: 'हम कहाँ हैं', productSuffix: 'उत्पाद', currentProduct: 'वर्तमान उत्पाद', scrollLeft: 'बाएँ स्क्रॉल करें', scrollRight: 'दाएँ स्क्रॉल करें' },
  'pt-BR': { productsLabel: 'Produtos', recordsLabel: 'Registros e perfis públicos', contact: 'Fale conosco', career: 'Junte-se a nós', address: 'Onde estamos', productSuffix: 'produto', currentProduct: 'produto atual', scrollLeft: 'Rolar para a esquerda', scrollRight: 'Rolar para a direita' },
  bn: { productsLabel: 'পণ্য', recordsLabel: 'কোম্পানি রেকর্ড ও পাবলিক প্রোফাইল', contact: 'যোগাযোগ করুন', career: 'আমাদের সাথে যোগ দিন', address: 'আমরা কোথায়', productSuffix: 'পণ্য', currentProduct: 'বর্তমান পণ্য', scrollLeft: 'বামে স্ক্রল করুন', scrollRight: 'ডানে স্ক্রল করুন' },
  ru: { productsLabel: 'Продукты', recordsLabel: 'Записи компании и публичные профили', contact: 'Связаться', career: 'Присоединиться', address: 'Где мы', productSuffix: 'продукт', currentProduct: 'текущий продукт', scrollLeft: 'Прокрутить влево', scrollRight: 'Прокрутить вправо' },
  ja: { productsLabel: 'プロダクト', recordsLabel: '会社記録と公開プロフィール', contact: 'お問い合わせ', career: '採用情報', address: '所在地', productSuffix: 'プロダクト', currentProduct: '現在のプロダクト', scrollLeft: '左へスクロール', scrollRight: '右へスクロール' },
  fr: { productsLabel: 'Produits', recordsLabel: 'Registres et profils publics', contact: 'Nous contacter', career: 'Nous rejoindre', address: 'Où nous sommes', productSuffix: 'produit', currentProduct: 'produit actuel', scrollLeft: 'Faire défiler à gauche', scrollRight: 'Faire défiler à droite' },
  de: { productsLabel: 'Produkte', recordsLabel: 'Unternehmensregister und öffentliche Profile', contact: 'Kontakt', career: 'Mitmachen', address: 'Wo wir sind', productSuffix: 'Produkt', currentProduct: 'aktuelles Produkt', scrollLeft: 'Nach links scrollen', scrollRight: 'Nach rechts scrollen' },
  ko: { productsLabel: '제품', recordsLabel: '회사 기록 및 공개 프로필', contact: '문의하기', career: '함께하기', address: '위치', productSuffix: '제품', currentProduct: '현재 제품', scrollLeft: '왼쪽으로 스크롤', scrollRight: '오른쪽으로 스크롤' },
  id: { productsLabel: 'Produk', recordsLabel: 'Catatan perusahaan dan profil publik', contact: 'Hubungi kami', career: 'Bergabung', address: 'Lokasi kami', productSuffix: 'produk', currentProduct: 'produk saat ini', scrollLeft: 'Gulir ke kiri', scrollRight: 'Gulir ke kanan' },
  tr: { productsLabel: 'Ürünler', recordsLabel: 'Şirket kayıtları ve herkese açık profiller', contact: 'Bize ulaşın', career: 'Bize katılın', address: 'Neredeyiz', productSuffix: 'ürün', currentProduct: 'geçerli ürün', scrollLeft: 'Sola kaydır', scrollRight: 'Sağa kaydır' },
  vi: { productsLabel: 'Sản phẩm', recordsLabel: 'Hồ sơ công ty và hồ sơ công khai', contact: 'Liên hệ', career: 'Tham gia', address: 'Chúng tôi ở đâu', productSuffix: 'sản phẩm', currentProduct: 'sản phẩm hiện tại', scrollLeft: 'Cuộn sang trái', scrollRight: 'Cuộn sang phải' },
  it: { productsLabel: 'Prodotti', recordsLabel: 'Registri aziendali e profili pubblici', contact: 'Contattaci', career: 'Unisciti a noi', address: 'Dove siamo', productSuffix: 'prodotto', currentProduct: 'prodotto corrente', scrollLeft: 'Scorri a sinistra', scrollRight: 'Scorri a destra' },
  fa: { productsLabel: 'محصولات', recordsLabel: 'سوابق شرکت و پروفایل‌های عمومی', contact: 'تماس با ما', career: 'به ما بپیوندید', address: 'ما کجا هستیم', productSuffix: 'محصول', currentProduct: 'محصول فعلی', scrollLeft: 'اسکرول به چپ', scrollRight: 'اسکرول به راست' },
  ur: { productsLabel: 'مصنوعات', recordsLabel: 'کمپنی ریکارڈز اور عوامی پروفائلز', contact: 'رابطہ کریں', career: 'ہمارے ساتھ شامل ہوں', address: 'ہم کہاں ہیں', productSuffix: 'مصنوعہ', currentProduct: 'موجودہ مصنوعہ', scrollLeft: 'بائیں اسکرول کریں', scrollRight: 'دائیں اسکرول کریں' },
  th: { productsLabel: 'ผลิตภัณฑ์', recordsLabel: 'ทะเบียนบริษัทและโปรไฟล์สาธารณะ', contact: 'ติดต่อเรา', career: 'ร่วมงานกับเรา', address: 'เราอยู่ที่ไหน', productSuffix: 'ผลิตภัณฑ์', currentProduct: 'ผลิตภัณฑ์ปัจจุบัน', scrollLeft: 'เลื่อนไปทางซ้าย', scrollRight: 'เลื่อนไปทางขวา' },
  pl: { productsLabel: 'Produkty', recordsLabel: 'Rejestry firmy i profile publiczne', contact: 'Kontakt', career: 'Dołącz do nas', address: 'Gdzie jesteśmy', productSuffix: 'produkt', currentProduct: 'bieżący produkt', scrollLeft: 'Przewiń w lewo', scrollRight: 'Przewiń w prawo' },
  nl: { productsLabel: 'Producten', recordsLabel: 'Bedrijfsrecords en openbare profielen', contact: 'Contact', career: 'Werk met ons', address: 'Waar we zijn', productSuffix: 'product', currentProduct: 'huidig product', scrollLeft: 'Naar links scrollen', scrollRight: 'Naar rechts scrollen' },
  sw: { productsLabel: 'Bidhaa', recordsLabel: 'Rekodi za kampuni na wasifu wa umma', contact: 'Wasiliana nasi', career: 'Jiunge nasi', address: 'Tulipo', productSuffix: 'bidhaa', currentProduct: 'bidhaa ya sasa', scrollLeft: 'Sogeza kushoto', scrollRight: 'Sogeza kulia' },
  ms: { productsLabel: 'Produk', recordsLabel: 'Rekod syarikat dan profil awam', contact: 'Hubungi kami', career: 'Sertai kami', address: 'Di mana kami', productSuffix: 'produk', currentProduct: 'produk semasa', scrollLeft: 'Tatal ke kiri', scrollRight: 'Tatal ke kanan' },
  fil: { productsLabel: 'Mga produkto', recordsLabel: 'Mga rekord ng kumpanya at pampublikong profile', contact: 'Makipag-ugnayan', career: 'Sumali sa amin', address: 'Nasaan kami', productSuffix: 'produkto', currentProduct: 'kasalukuyang produkto', scrollLeft: 'Mag-scroll pakaliwa', scrollRight: 'Mag-scroll pakanan' },
  uk: { productsLabel: 'Продукти', recordsLabel: 'Записи компанії та публічні профілі', contact: 'Зв’язатися', career: 'Приєднатися', address: 'Де ми', productSuffix: 'продукт', currentProduct: 'поточний продукт', scrollLeft: 'Прокрутити ліворуч', scrollRight: 'Прокрутити праворуч' },
  he: { productsLabel: 'מוצרים', recordsLabel: 'רשומות חברה ופרופילים ציבוריים', contact: 'צרו קשר', career: 'הצטרפו אלינו', address: 'איפה אנחנו', productSuffix: 'מוצר', currentProduct: 'המוצר הנוכחי', scrollLeft: 'גלול שמאלה', scrollRight: 'גלול ימינה' },
};

const FOOTER_CONTENT = {
  "en": {
    "brand": "RE8CH",
    "products": {
      "compocv": "CV builder",
      "anycam": "Camera",
      "anysite": "Places",
      "cluster": "Cluster",
      "ledger": "Ledger",
      "observable": "Observability",
      "aesthete": "Makeup simulation",
      "phonaid": "Call assistant",
      "registry-image": "Image registry",
      "user-hub": "Account center",
      "advfab": "Network evidence",
      "among-clusters": "Cluster peering",
      "public-edge": "Public ingress"
    },
    "records": {
      "montana-sos": "Montana registry",
      "duns": "D-U-N-S number",
      "icp": "ICP filing",
      "mps": "Public security filing",
      "china-credit": "China business registry"
    },
    "kinds": [
      "Company registry",
      "Company profile",
      "Founder network",
      "Co-founder community"
    ],
    "detail": "View public information for {name}. Use the linked service to look up and verify the organization or profile.",
    "action": "View details",
    "pause": "Pause automatic scrolling",
    "founder": "Founder profile",
    "home": "Home",
    "filings": "Website filings"
  },
  "zh-CN": {
    "brand": "锐奇 RE8CH",
    "products": {
      "compocv": "简历制作",
      "anycam": "相机",
      "anysite": "地点",
      "cluster": "集群",
      "ledger": "账本",
      "observable": "可观测",
      "aesthete": "妆效模拟",
      "phonaid": "通话助手",
      "registry-image": "镜像仓库",
      "user-hub": "个人中心",
      "advfab": "网络证据",
      "among-clusters": "集群互联",
      "public-edge": "公共入口"
    },
    "records": {
      "montana-sos": "蒙大拿州企业登记",
      "duns": "邓白氏编码",
      "icp": "ICP备案",
      "mps": "公安备案",
      "china-credit": "国家企业信用信息公示系统"
    },
    "kinds": [
      "企业登记",
      "企业主页",
      "创始人网络",
      "联合创始人社区"
    ],
    "detail": "查看{name}的公开信息，可在对应服务中查询并核验企业或档案。",
    "action": "查看详情",
    "pause": "暂停自动滚动",
    "founder": "创始人档案",
    "home": "首页",
    "filings": "网站备案"
  },
  "zh-TW": {
    "brand": "銳奇 RE8CH",
    "products": {
      "compocv": "履歷製作",
      "anycam": "相機",
      "anysite": "地點",
      "cluster": "叢集",
      "ledger": "帳本",
      "observable": "可觀測",
      "aesthete": "妝效模擬",
      "phonaid": "通話助理",
      "registry-image": "映像倉庫",
      "user-hub": "個人中心",
      "advfab": "網路證據",
      "among-clusters": "叢集互聯",
      "public-edge": "公共入口"
    },
    "records": {
      "montana-sos": "蒙大拿州企業登記",
      "duns": "鄧白氏編碼",
      "icp": "ICP備案",
      "mps": "公安備案",
      "china-credit": "國家企業信用資訊公示系統"
    },
    "kinds": [
      "企業登記",
      "企業專頁",
      "創辦人網路",
      "共同創辦人社群"
    ],
    "detail": "查看{name}的公開資訊，可在對應服務中查詢並核驗企業或檔案。",
    "action": "查看詳情",
    "pause": "暫停自動捲動",
    "founder": "創辦人檔案",
    "home": "首頁",
    "filings": "網站備案"
  },
  "es": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Creador de CV",
      "anycam": "Cámara",
      "anysite": "Lugares",
      "cluster": "Clúster",
      "ledger": "Libro contable",
      "observable": "Observabilidad",
      "aesthete": "Simulación de maquillaje",
      "phonaid": "Asistente de llamadas",
      "registry-image": "Registro de imágenes",
      "user-hub": "Centro de cuenta",
      "advfab": "Evidencia de red",
      "among-clusters": "Interconexión de clústeres",
      "public-edge": "Entrada pública"
    },
    "records": {
      "montana-sos": "Registro de Montana",
      "duns": "Número D-U-N-S",
      "icp": "Registro ICP",
      "mps": "Registro de seguridad pública",
      "china-credit": "Registro empresarial de China"
    },
    "kinds": [
      "Registro mercantil",
      "Perfil de empresa",
      "Red de fundadores",
      "Comunidad de cofundadores"
    ],
    "detail": "Consulta la información pública de {name}. Usa el servicio enlazado para buscar y verificar la organización o el perfil.",
    "action": "Ver detalles",
    "pause": "Pausar desplazamiento automático",
    "founder": "Perfil del fundador",
    "home": "Inicio",
    "filings": "Registros del sitio"
  },
  "ar": {
    "brand": "RE8CH",
    "products": {
      "compocv": "منشئ السيرة الذاتية",
      "anycam": "كاميرا",
      "anysite": "أماكن",
      "cluster": "عنقود",
      "ledger": "دفتر حسابات",
      "observable": "قابلية الرصد",
      "aesthete": "محاكاة المكياج",
      "phonaid": "مساعد المكالمات",
      "registry-image": "سجل الصور",
      "user-hub": "مركز الحساب",
      "advfab": "أدلة الشبكة",
      "among-clusters": "ربط العناقيد",
      "public-edge": "مدخل عام"
    },
    "records": {
      "montana-sos": "سجل مونتانا",
      "duns": "رقم D-U-N-S",
      "icp": "تسجيل ICP",
      "mps": "تسجيل الأمن العام",
      "china-credit": "سجل الشركات الصيني"
    },
    "kinds": [
      "سجل الشركات",
      "ملف الشركة",
      "شبكة المؤسسين",
      "مجتمع الشركاء المؤسسين"
    ],
    "detail": "اعرض المعلومات العامة عن {name}. استخدم الخدمة المرتبطة للبحث عن المؤسسة أو الملف والتحقق منه.",
    "action": "عرض التفاصيل",
    "pause": "إيقاف التمرير التلقائي",
    "founder": "ملف المؤسس",
    "home": "الرئيسية",
    "filings": "تسجيلات الموقع"
  },
  "hi": {
    "brand": "RE8CH",
    "products": {
      "compocv": "बायोडाटा निर्माता",
      "anycam": "कैमरा",
      "anysite": "स्थान",
      "cluster": "क्लस्टर",
      "ledger": "खाता बही",
      "observable": "अवलोकनीयता",
      "aesthete": "मेकअप सिमुलेशन",
      "phonaid": "कॉल सहायक",
      "registry-image": "इमेज रजिस्ट्री",
      "user-hub": "खाता केंद्र",
      "advfab": "नेटवर्क साक्ष्य",
      "among-clusters": "क्लस्टर पीयरिंग",
      "public-edge": "सार्वजनिक इनग्रेस"
    },
    "records": {
      "montana-sos": "मोंटाना रजिस्ट्री",
      "duns": "D-U-N-S संख्या",
      "icp": "ICP पंजीकरण",
      "mps": "सार्वजनिक सुरक्षा पंजीकरण",
      "china-credit": "चीनी व्यापार रजिस्ट्री"
    },
    "kinds": [
      "कंपनी रजिस्ट्री",
      "कंपनी प्रोफ़ाइल",
      "संस्थापक नेटवर्क",
      "सह-संस्थापक समुदाय"
    ],
    "detail": "{name} की सार्वजनिक जानकारी देखें। संगठन या प्रोफ़ाइल खोजने और सत्यापित करने के लिए लिंक की गई सेवा का उपयोग करें।",
    "action": "विवरण देखें",
    "pause": "स्वचालित स्क्रॉल रोकें",
    "founder": "संस्थापक की प्रोफ़ाइल",
    "home": "मुखपृष्ठ",
    "filings": "वेबसाइट पंजीकरण"
  },
  "pt-BR": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Criador de currículo",
      "anycam": "Câmera",
      "anysite": "Lugares",
      "cluster": "Cluster",
      "ledger": "Livro contábil",
      "observable": "Observabilidade",
      "aesthete": "Simulação de maquiagem",
      "phonaid": "Assistente de chamadas",
      "registry-image": "Registro de imagens",
      "user-hub": "Central da conta",
      "advfab": "Evidências de rede",
      "among-clusters": "Interconexão de clusters",
      "public-edge": "Entrada pública"
    },
    "records": {
      "montana-sos": "Registro de Montana",
      "duns": "Número D-U-N-S",
      "icp": "Registro ICP",
      "mps": "Registro de segurança pública",
      "china-credit": "Registro empresarial chinês"
    },
    "kinds": [
      "Registro empresarial",
      "Perfil da empresa",
      "Rede de fundadores",
      "Comunidade de cofundadores"
    ],
    "detail": "Veja as informações públicas de {name}. Use o serviço vinculado para pesquisar e verificar a organização ou o perfil.",
    "action": "Ver detalhes",
    "pause": "Pausar rolagem automática",
    "founder": "Perfil do fundador",
    "home": "Início",
    "filings": "Registros do site"
  },
  "bn": {
    "brand": "RE8CH",
    "products": {
      "compocv": "জীবনবৃত্তান্ত নির্মাতা",
      "anycam": "ক্যামেরা",
      "anysite": "স্থান",
      "cluster": "ক্লাস্টার",
      "ledger": "হিসাবের খাতা",
      "observable": "পর্যবেক্ষণযোগ্যতা",
      "aesthete": "মেকআপ সিমুলেশন",
      "phonaid": "কল সহকারী",
      "registry-image": "ইমেজ রেজিস্ট্রি",
      "user-hub": "অ্যাকাউন্ট কেন্দ্র",
      "advfab": "নেটওয়ার্ক প্রমাণ",
      "among-clusters": "ক্লাস্টার পিয়ারিং",
      "public-edge": "পাবলিক ইনগ্রেস"
    },
    "records": {
      "montana-sos": "মন্টানা নিবন্ধন",
      "duns": "D-U-N-S নম্বর",
      "icp": "ICP নিবন্ধন",
      "mps": "জননিরাপত্তা নিবন্ধন",
      "china-credit": "চীনা ব্যবসা নিবন্ধন"
    },
    "kinds": [
      "কোম্পানি নিবন্ধন",
      "কোম্পানির প্রোফাইল",
      "প্রতিষ্ঠাতা নেটওয়ার্ক",
      "সহপ্রতিষ্ঠাতা সম্প্রদায়"
    ],
    "detail": "{name}-এর প্রকাশ্য তথ্য দেখুন। প্রতিষ্ঠান বা প্রোফাইল খুঁজে যাচাই করতে সংযুক্ত পরিষেবা ব্যবহার করুন।",
    "action": "বিস্তারিত দেখুন",
    "pause": "স্বয়ংক্রিয় স্ক্রল থামান",
    "founder": "প্রতিষ্ঠাতার প্রোফাইল",
    "home": "হোম",
    "filings": "ওয়েবসাইট নিবন্ধন"
  },
  "ru": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Конструктор резюме",
      "anycam": "Камера",
      "anysite": "Места",
      "cluster": "Кластер",
      "ledger": "Бухгалтерская книга",
      "observable": "Наблюдаемость",
      "aesthete": "Симуляция макияжа",
      "phonaid": "Помощник звонков",
      "registry-image": "Реестр образов",
      "user-hub": "Центр аккаунта",
      "advfab": "Сетевые доказательства",
      "among-clusters": "Связь кластеров",
      "public-edge": "Публичный вход"
    },
    "records": {
      "montana-sos": "Реестр Монтаны",
      "duns": "Номер D-U-N-S",
      "icp": "Регистрация ICP",
      "mps": "Регистрация общественной безопасности",
      "china-credit": "Реестр компаний Китая"
    },
    "kinds": [
      "Реестр компаний",
      "Профиль компании",
      "Сеть основателей",
      "Сообщество сооснователей"
    ],
    "detail": "Просмотрите открытые сведения о {name}. Используйте сервис по ссылке для поиска и проверки организации или профиля.",
    "action": "Подробнее",
    "pause": "Приостановить автопрокрутку",
    "founder": "Профиль основателя",
    "home": "Главная",
    "filings": "Регистрации сайта"
  },
  "ja": {
    "brand": "RE8CH",
    "products": {
      "compocv": "履歴書作成",
      "anycam": "カメラ",
      "anysite": "場所",
      "cluster": "クラスター",
      "ledger": "会計帳簿",
      "observable": "可観測性",
      "aesthete": "メイクシミュレーション",
      "phonaid": "通話アシスタント",
      "registry-image": "イメージレジストリ",
      "user-hub": "アカウントセンター",
      "advfab": "ネットワーク証跡",
      "among-clusters": "クラスター間接続",
      "public-edge": "パブリック入口"
    },
    "records": {
      "montana-sos": "モンタナ州企業登記",
      "duns": "D-U-N-S番号",
      "icp": "ICP登録",
      "mps": "公安登録",
      "china-credit": "中国企業信用情報"
    },
    "kinds": [
      "企業登記",
      "企業プロフィール",
      "創業者ネットワーク",
      "共同創業者コミュニティ"
    ],
    "detail": "{name}の公開情報を表示します。リンク先のサービスで組織やプロフィールを検索・確認できます。",
    "action": "詳細を見る",
    "pause": "自動スクロールを一時停止",
    "founder": "創業者プロフィール",
    "home": "ホーム",
    "filings": "サイト登録情報"
  },
  "fr": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Créateur de CV",
      "anycam": "Caméra",
      "anysite": "Lieux",
      "cluster": "Cluster",
      "ledger": "Grand livre",
      "observable": "Observabilité",
      "aesthete": "Simulation de maquillage",
      "phonaid": "Assistant d’appels",
      "registry-image": "Registre d’images",
      "user-hub": "Espace compte",
      "advfab": "Preuves réseau",
      "among-clusters": "Interconnexion de clusters",
      "public-edge": "Entrée publique"
    },
    "records": {
      "montana-sos": "Registre du Montana",
      "duns": "Numéro D-U-N-S",
      "icp": "Enregistrement ICP",
      "mps": "Enregistrement de sécurité publique",
      "china-credit": "Registre des entreprises chinoises"
    },
    "kinds": [
      "Registre des entreprises",
      "Profil de l’entreprise",
      "Réseau de fondateurs",
      "Communauté de cofondateurs"
    ],
    "detail": "Consultez les informations publiques de {name}. Utilisez le service lié pour rechercher et vérifier l’organisation ou le profil.",
    "action": "Voir les détails",
    "pause": "Suspendre le défilement automatique",
    "founder": "Profil du fondateur",
    "home": "Accueil",
    "filings": "Enregistrements du site"
  },
  "de": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Lebenslauf-Editor",
      "anycam": "Kamera",
      "anysite": "Orte",
      "cluster": "Cluster",
      "ledger": "Hauptbuch",
      "observable": "Beobachtbarkeit",
      "aesthete": "Make-up-Simulation",
      "phonaid": "Anrufassistent",
      "registry-image": "Image-Registry",
      "user-hub": "Kontozentrale",
      "advfab": "Netzwerknachweise",
      "among-clusters": "Cluster-Peering",
      "public-edge": "Öffentlicher Eingang"
    },
    "records": {
      "montana-sos": "Register von Montana",
      "duns": "D-U-N-S-Nummer",
      "icp": "ICP-Registrierung",
      "mps": "Registrierung der öffentlichen Sicherheit",
      "china-credit": "Chinesisches Unternehmensregister"
    },
    "kinds": [
      "Unternehmensregister",
      "Unternehmensprofil",
      "Gründernetzwerk",
      "Mitgründer-Community"
    ],
    "detail": "Öffentliche Informationen zu {name} anzeigen. Suchen und prüfen Sie die Organisation oder das Profil beim verlinkten Dienst.",
    "action": "Details anzeigen",
    "pause": "Automatisches Scrollen pausieren",
    "founder": "Gründerprofil",
    "home": "Startseite",
    "filings": "Website-Registrierungen"
  },
  "ko": {
    "brand": "RE8CH",
    "products": {
      "compocv": "이력서 작성",
      "anycam": "카메라",
      "anysite": "장소",
      "cluster": "클러스터",
      "ledger": "회계 장부",
      "observable": "관측 가능성",
      "aesthete": "메이크업 시뮬레이션",
      "phonaid": "통화 도우미",
      "registry-image": "이미지 레지스트리",
      "user-hub": "계정 센터",
      "advfab": "네트워크 증거",
      "among-clusters": "클러스터 피어링",
      "public-edge": "공개 인그레스"
    },
    "records": {
      "montana-sos": "몬태나 기업 등록부",
      "duns": "D-U-N-S 번호",
      "icp": "ICP 등록",
      "mps": "공안 등록",
      "china-credit": "중국 기업 신용 정보"
    },
    "kinds": [
      "기업 등록부",
      "기업 프로필",
      "창업자 네트워크",
      "공동 창업자 커뮤니티"
    ],
    "detail": "{name}의 공개 정보를 확인하세요. 연결된 서비스에서 조직이나 프로필을 검색하고 확인할 수 있습니다.",
    "action": "상세 보기",
    "pause": "자동 스크롤 일시 정지",
    "founder": "창업자 프로필",
    "home": "홈",
    "filings": "웹사이트 등록"
  },
  "id": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Pembuat CV",
      "anycam": "Kamera",
      "anysite": "Tempat",
      "cluster": "Klaster",
      "ledger": "Buku besar",
      "observable": "Observabilitas",
      "aesthete": "Simulasi riasan",
      "phonaid": "Asisten panggilan",
      "registry-image": "Registri citra",
      "user-hub": "Pusat akun",
      "advfab": "Bukti jaringan",
      "among-clusters": "Peering klaster",
      "public-edge": "Ingress publik"
    },
    "records": {
      "montana-sos": "Registri Montana",
      "duns": "Nomor D-U-N-S",
      "icp": "Pendaftaran ICP",
      "mps": "Pendaftaran keamanan publik",
      "china-credit": "Registri bisnis Tiongkok"
    },
    "kinds": [
      "Registri perusahaan",
      "Profil perusahaan",
      "Jaringan pendiri",
      "Komunitas rekan pendiri"
    ],
    "detail": "Lihat informasi publik tentang {name}. Gunakan layanan tertaut untuk mencari dan memverifikasi organisasi atau profil.",
    "action": "Lihat detail",
    "pause": "Jeda gulir otomatis",
    "founder": "Profil pendiri",
    "home": "Beranda",
    "filings": "Pendaftaran situs"
  },
  "tr": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Özgeçmiş oluşturucu",
      "anycam": "Kamera",
      "anysite": "Yerler",
      "cluster": "Küme",
      "ledger": "Muhasebe defteri",
      "observable": "Gözlemlenebilirlik",
      "aesthete": "Makyaj simülasyonu",
      "phonaid": "Arama asistanı",
      "registry-image": "İmaj kayıt deposu",
      "user-hub": "Hesap merkezi",
      "advfab": "Ağ kanıtı",
      "among-clusters": "Küme eşleme",
      "public-edge": "Genel giriş"
    },
    "records": {
      "montana-sos": "Montana sicili",
      "duns": "D-U-N-S numarası",
      "icp": "ICP kaydı",
      "mps": "Kamu güvenliği kaydı",
      "china-credit": "Çin işletme sicili"
    },
    "kinds": [
      "Şirket sicili",
      "Şirket profili",
      "Kurucu ağı",
      "Ortak kurucu topluluğu"
    ],
    "detail": "{name} hakkındaki herkese açık bilgileri görüntüleyin. Kuruluşu veya profili aramak ve doğrulamak için bağlantılı hizmeti kullanın.",
    "action": "Ayrıntıları görüntüle",
    "pause": "Otomatik kaydırmayı duraklat",
    "founder": "Kurucu profili",
    "home": "Ana sayfa",
    "filings": "Site kayıtları"
  },
  "vi": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Tạo CV",
      "anycam": "Máy ảnh",
      "anysite": "Địa điểm",
      "cluster": "Cụm",
      "ledger": "Sổ kế toán",
      "observable": "Khả năng quan sát",
      "aesthete": "Mô phỏng trang điểm",
      "phonaid": "Trợ lý cuộc gọi",
      "registry-image": "Kho ảnh",
      "user-hub": "Trung tâm tài khoản",
      "advfab": "Bằng chứng mạng",
      "among-clusters": "Kết nối cụm",
      "public-edge": "Cổng vào công khai"
    },
    "records": {
      "montana-sos": "Đăng ký Montana",
      "duns": "Mã D-U-N-S",
      "icp": "Đăng ký ICP",
      "mps": "Đăng ký an ninh công cộng",
      "china-credit": "Đăng ký doanh nghiệp Trung Quốc"
    },
    "kinds": [
      "Đăng ký doanh nghiệp",
      "Hồ sơ công ty",
      "Mạng lưới nhà sáng lập",
      "Cộng đồng đồng sáng lập"
    ],
    "detail": "Xem thông tin công khai về {name}. Sử dụng dịch vụ được liên kết để tìm kiếm và xác minh tổ chức hoặc hồ sơ.",
    "action": "Xem chi tiết",
    "pause": "Tạm dừng cuộn tự động",
    "founder": "Hồ sơ nhà sáng lập",
    "home": "Trang chủ",
    "filings": "Đăng ký trang web"
  },
  "it": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Creatore di CV",
      "anycam": "Fotocamera",
      "anysite": "Luoghi",
      "cluster": "Cluster",
      "ledger": "Libro contabile",
      "observable": "Osservabilità",
      "aesthete": "Simulazione del trucco",
      "phonaid": "Assistente chiamate",
      "registry-image": "Registro immagini",
      "user-hub": "Centro account",
      "advfab": "Evidenze di rete",
      "among-clusters": "Interconnessione cluster",
      "public-edge": "Ingresso pubblico"
    },
    "records": {
      "montana-sos": "Registro del Montana",
      "duns": "Numero D-U-N-S",
      "icp": "Registrazione ICP",
      "mps": "Registrazione di pubblica sicurezza",
      "china-credit": "Registro imprese cinese"
    },
    "kinds": [
      "Registro imprese",
      "Profilo aziendale",
      "Rete di fondatori",
      "Comunità di cofondatori"
    ],
    "detail": "Consulta le informazioni pubbliche di {name}. Usa il servizio collegato per cercare e verificare l’organizzazione o il profilo.",
    "action": "Vedi dettagli",
    "pause": "Pausa scorrimento automatico",
    "founder": "Profilo del fondatore",
    "home": "Home",
    "filings": "Registrazioni del sito"
  },
  "fa": {
    "brand": "RE8CH",
    "products": {
      "compocv": "رزومه‌ساز",
      "anycam": "دوربین",
      "anysite": "مکان‌ها",
      "cluster": "خوشه",
      "ledger": "دفتر حساب",
      "observable": "مشاهده‌پذیری",
      "aesthete": "شبیه‌سازی آرایش",
      "phonaid": "دستیار تماس",
      "registry-image": "مخزن تصاویر",
      "user-hub": "مرکز حساب",
      "advfab": "شواهد شبکه",
      "among-clusters": "اتصال خوشه‌ها",
      "public-edge": "ورودی عمومی"
    },
    "records": {
      "montana-sos": "ثبت مونتانا",
      "duns": "شماره D-U-N-S",
      "icp": "ثبت ICP",
      "mps": "ثبت امنیت عمومی",
      "china-credit": "ثبت شرکت‌های چین"
    },
    "kinds": [
      "ثبت شرکت",
      "نمایه شرکت",
      "شبکه بنیان‌گذاران",
      "جامعه هم‌بنیان‌گذاران"
    ],
    "detail": "اطلاعات عمومی {name} را ببینید. برای جستجو و تأیید سازمان یا نمایه از سرویس پیوندشده استفاده کنید.",
    "action": "نمایش جزئیات",
    "pause": "توقف پیمایش خودکار",
    "founder": "نمایه بنیان‌گذار",
    "home": "خانه",
    "filings": "ثبت‌های وب‌سایت"
  },
  "ur": {
    "brand": "RE8CH",
    "products": {
      "compocv": "سی وی بنانے والا",
      "anycam": "کیمرہ",
      "anysite": "مقامات",
      "cluster": "کلسٹر",
      "ledger": "حساب کی کتاب",
      "observable": "مشاہدہ پذیری",
      "aesthete": "میک اپ سمولیشن",
      "phonaid": "کال معاون",
      "registry-image": "امیج رجسٹری",
      "user-hub": "اکاؤنٹ سینٹر",
      "advfab": "نیٹ ورک شواہد",
      "among-clusters": "کلسٹر پیئرنگ",
      "public-edge": "عوامی داخلہ"
    },
    "records": {
      "montana-sos": "مونٹانا رجسٹری",
      "duns": "D-U-N-S نمبر",
      "icp": "ICP رجسٹریشن",
      "mps": "عوامی سلامتی رجسٹریشن",
      "china-credit": "چینی کاروباری رجسٹری"
    },
    "kinds": [
      "کمپنی رجسٹری",
      "کمپنی پروفائل",
      "بانیوں کا نیٹ ورک",
      "شریک بانیوں کی کمیونٹی"
    ],
    "detail": "{name} کی عوامی معلومات دیکھیں۔ تنظیم یا پروفائل تلاش کرنے اور تصدیق کے لیے منسلک سروس استعمال کریں۔",
    "action": "تفصیلات دیکھیں",
    "pause": "خودکار اسکرول روکیں",
    "founder": "بانی کا پروفائل",
    "home": "صفحۂ اول",
    "filings": "ویب سائٹ رجسٹریشن"
  },
  "th": {
    "brand": "RE8CH",
    "products": {
      "compocv": "สร้างเรซูเม่",
      "anycam": "กล้อง",
      "anysite": "สถานที่",
      "cluster": "คลัสเตอร์",
      "ledger": "สมุดบัญชี",
      "observable": "การสังเกตการณ์",
      "aesthete": "การจำลองการแต่งหน้า",
      "phonaid": "ผู้ช่วยโทรศัพท์",
      "registry-image": "คลังอิมเมจ",
      "user-hub": "ศูนย์บัญชี",
      "advfab": "หลักฐานเครือข่าย",
      "among-clusters": "การเชื่อมคลัสเตอร์",
      "public-edge": "ทางเข้าสาธารณะ"
    },
    "records": {
      "montana-sos": "ทะเบียนมอนแทนา",
      "duns": "หมายเลข D-U-N-S",
      "icp": "การจดทะเบียน ICP",
      "mps": "ทะเบียนความปลอดภัยสาธารณะ",
      "china-credit": "ทะเบียนธุรกิจจีน"
    },
    "kinds": [
      "ทะเบียนบริษัท",
      "โปรไฟล์บริษัท",
      "เครือข่ายผู้ก่อตั้ง",
      "ชุมชนผู้ร่วมก่อตั้ง"
    ],
    "detail": "ดูข้อมูลสาธารณะของ {name} ใช้บริการที่เชื่อมโยงเพื่อค้นหาและตรวจสอบองค์กรหรือโปรไฟล์",
    "action": "ดูรายละเอียด",
    "pause": "หยุดเลื่อนอัตโนมัติชั่วคราว",
    "founder": "โปรไฟล์ผู้ก่อตั้ง",
    "home": "หน้าแรก",
    "filings": "ทะเบียนเว็บไซต์"
  },
  "pl": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Kreator CV",
      "anycam": "Aparat",
      "anysite": "Miejsca",
      "cluster": "Klaster",
      "ledger": "Księga rachunkowa",
      "observable": "Obserwowalność",
      "aesthete": "Symulacja makijażu",
      "phonaid": "Asystent połączeń",
      "registry-image": "Rejestr obrazów",
      "user-hub": "Centrum konta",
      "advfab": "Dowody sieciowe",
      "among-clusters": "Łączenie klastrów",
      "public-edge": "Publiczne wejście"
    },
    "records": {
      "montana-sos": "Rejestr Montany",
      "duns": "Numer D-U-N-S",
      "icp": "Rejestracja ICP",
      "mps": "Rejestracja bezpieczeństwa publicznego",
      "china-credit": "Chiński rejestr firm"
    },
    "kinds": [
      "Rejestr firm",
      "Profil firmy",
      "Sieć założycieli",
      "Społeczność współzałożycieli"
    ],
    "detail": "Zobacz publiczne informacje o {name}. Skorzystaj z podanej usługi, aby wyszukać i zweryfikować organizację lub profil.",
    "action": "Zobacz szczegóły",
    "pause": "Wstrzymaj automatyczne przewijanie",
    "founder": "Profil założyciela",
    "home": "Strona główna",
    "filings": "Rejestracje witryny"
  },
  "nl": {
    "brand": "RE8CH",
    "products": {
      "compocv": "CV-maker",
      "anycam": "Camera",
      "anysite": "Plaatsen",
      "cluster": "Cluster",
      "ledger": "Grootboek",
      "observable": "Observeerbaarheid",
      "aesthete": "Make-upsimulatie",
      "phonaid": "Belassistent",
      "registry-image": "Imageregister",
      "user-hub": "Accountcentrum",
      "advfab": "Netwerkbewijs",
      "among-clusters": "Cluster-peering",
      "public-edge": "Publieke ingang"
    },
    "records": {
      "montana-sos": "Register van Montana",
      "duns": "D-U-N-S-nummer",
      "icp": "ICP-registratie",
      "mps": "Registratie openbare veiligheid",
      "china-credit": "Chinees bedrijfsregister"
    },
    "kinds": [
      "Bedrijfsregister",
      "Bedrijfsprofiel",
      "Oprichtersnetwerk",
      "Gemeenschap van medeoprichters"
    ],
    "detail": "Bekijk openbare informatie over {name}. Gebruik de gekoppelde dienst om de organisatie of het profiel te zoeken en te controleren.",
    "action": "Details bekijken",
    "pause": "Automatisch scrollen pauzeren",
    "founder": "Oprichtersprofiel",
    "home": "Home",
    "filings": "Websiteregistraties"
  },
  "sw": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Kitengeneza wasifu",
      "anycam": "Kamera",
      "anysite": "Maeneo",
      "cluster": "Kundi",
      "ledger": "Daftari la hesabu",
      "observable": "Uangalizi",
      "aesthete": "Uigaji wa vipodozi",
      "phonaid": "Msaidizi wa simu",
      "registry-image": "Sajili ya picha",
      "user-hub": "Kituo cha akaunti",
      "advfab": "Ushahidi wa mtandao",
      "among-clusters": "Kuunganisha klasta",
      "public-edge": "Lango la umma"
    },
    "records": {
      "montana-sos": "Sajili ya Montana",
      "duns": "Nambari ya D-U-N-S",
      "icp": "Usajili wa ICP",
      "mps": "Usajili wa usalama wa umma",
      "china-credit": "Sajili ya biashara ya China"
    },
    "kinds": [
      "Sajili ya kampuni",
      "Wasifu wa kampuni",
      "Mtandao wa waanzilishi",
      "Jumuiya ya waanzilishi wenza"
    ],
    "detail": "Tazama taarifa za umma za {name}. Tumia huduma iliyounganishwa kutafuta na kuthibitisha shirika au wasifu.",
    "action": "Tazama maelezo",
    "pause": "Sitisha kusogeza kiotomatiki",
    "founder": "Wasifu wa mwanzilishi",
    "home": "Mwanzo",
    "filings": "Usajili wa tovuti"
  },
  "ms": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Pembina CV",
      "anycam": "Kamera",
      "anysite": "Tempat",
      "cluster": "Kluster",
      "ledger": "Lejar",
      "observable": "Kebolehcerapan",
      "aesthete": "Simulasi solekan",
      "phonaid": "Pembantu panggilan",
      "registry-image": "Daftar imej",
      "user-hub": "Pusat akaun",
      "advfab": "Bukti rangkaian",
      "among-clusters": "Persandingan kluster",
      "public-edge": "Laluan masuk awam"
    },
    "records": {
      "montana-sos": "Daftar Montana",
      "duns": "Nombor D-U-N-S",
      "icp": "Pendaftaran ICP",
      "mps": "Pendaftaran keselamatan awam",
      "china-credit": "Daftar perniagaan China"
    },
    "kinds": [
      "Daftar syarikat",
      "Profil syarikat",
      "Rangkaian pengasas",
      "Komuniti pengasas bersama"
    ],
    "detail": "Lihat maklumat awam tentang {name}. Gunakan perkhidmatan dipautkan untuk mencari dan mengesahkan organisasi atau profil.",
    "action": "Lihat butiran",
    "pause": "Jeda tatal automatik",
    "founder": "Profil pengasas",
    "home": "Utama",
    "filings": "Pendaftaran laman"
  },
  "fil": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Gumagawa ng CV",
      "anycam": "Kamera",
      "anysite": "Mga lugar",
      "cluster": "Kumpol",
      "ledger": "Libro ng kuwenta",
      "observable": "Pagmamasid",
      "aesthete": "Simulasyon ng makeup",
      "phonaid": "Katulong sa tawag",
      "registry-image": "Rehistro ng imahe",
      "user-hub": "Account center",
      "advfab": "Ebidensya ng network",
      "among-clusters": "Pag-uugnay ng cluster",
      "public-edge": "Pampublikong pasukan"
    },
    "records": {
      "montana-sos": "Rehistro ng Montana",
      "duns": "Numero ng D-U-N-S",
      "icp": "Rehistrasyon ng ICP",
      "mps": "Rehistrasyon sa kaligtasang pampubliko",
      "china-credit": "Rehistro ng negosyo sa Tsina"
    },
    "kinds": [
      "Rehistro ng kumpanya",
      "Profile ng kumpanya",
      "Network ng mga tagapagtatag",
      "Komunidad ng mga kapwa tagapagtatag"
    ],
    "detail": "Tingnan ang pampublikong impormasyon ng {name}. Gamitin ang naka-link na serbisyo upang hanapin at beripikahin ang organisasyon o profile.",
    "action": "Tingnan ang detalye",
    "pause": "I-pause ang awtomatikong pag-scroll",
    "founder": "Profile ng tagapagtatag",
    "home": "Home",
    "filings": "Rehistrasyon ng website"
  },
  "uk": {
    "brand": "RE8CH",
    "products": {
      "compocv": "Конструктор резюме",
      "anycam": "Камера",
      "anysite": "Місця",
      "cluster": "Кластер",
      "ledger": "Бухгалтерська книга",
      "observable": "Спостережуваність",
      "aesthete": "Симуляція макіяжу",
      "phonaid": "Помічник дзвінків",
      "registry-image": "Реєстр образів",
      "user-hub": "Центр акаунта",
      "advfab": "Мережеві докази",
      "among-clusters": "З’єднання кластерів",
      "public-edge": "Публічний вхід"
    },
    "records": {
      "montana-sos": "Реєстр Монтани",
      "duns": "Номер D-U-N-S",
      "icp": "Реєстрація ICP",
      "mps": "Реєстрація громадської безпеки",
      "china-credit": "Реєстр компаній Китаю"
    },
    "kinds": [
      "Реєстр компаній",
      "Профіль компанії",
      "Мережа засновників",
      "Спільнота співзасновників"
    ],
    "detail": "Перегляньте відкриті відомості про {name}. Скористайтеся сервісом за посиланням, щоб знайти й перевірити організацію або профіль.",
    "action": "Докладніше",
    "pause": "Призупинити автопрокручування",
    "founder": "Профіль засновника",
    "home": "Головна",
    "filings": "Реєстрації сайту"
  },
  "he": {
    "brand": "RE8CH",
    "products": {
      "compocv": "בונה קורות חיים",
      "anycam": "מצלמה",
      "anysite": "מקומות",
      "cluster": "אשכול",
      "ledger": "ספר חשבונות",
      "observable": "יכולת תצפית",
      "aesthete": "הדמיית איפור",
      "phonaid": "עוזר שיחות",
      "registry-image": "מאגר תמונות",
      "user-hub": "מרכז חשבון",
      "advfab": "ראיות רשת",
      "among-clusters": "קישור אשכולות",
      "public-edge": "כניסה ציבורית"
    },
    "records": {
      "montana-sos": "מרשם מונטנה",
      "duns": "מספר D-U-N-S",
      "icp": "רישום ICP",
      "mps": "רישום ביטחון הציבור",
      "china-credit": "מרשם העסקים הסיני"
    },
    "kinds": [
      "מרשם חברות",
      "פרופיל חברה",
      "רשת מייסדים",
      "קהילת מייסדים שותפים"
    ],
    "detail": "הצגת מידע ציבורי על {name}. השתמשו בשירות המקושר כדי לחפש ולאמת את הארגון או הפרופיל.",
    "action": "הצגת פרטים",
    "pause": "השהיית גלילה אוטומטית",
    "founder": "פרופיל המייסד",
    "home": "בית",
    "filings": "רישומי האתר"
  }
};

const ICONS = {
  mark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 21 19H3L12 3Z"/><path d="M12 7.5 17 17H7L12 7.5Z"/><path d="M12 7.5 9 17M12 7.5 15 17"/></svg>',
  badge: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.8 18.5 6v5.4c0 4.1-2.2 7.1-6.5 8.8-4.3-1.7-6.5-4.7-6.5-8.8V6L12 3.8Z"/><path d="m9.4 12 1.8 1.8 3.7-4"/></svg>',
  box: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.8 7.4 4.2v8L12 20.2 4.6 16V8L12 3.8Z"/><path d="M5 8.2 12 12l7-3.8M12 12v8"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c3.2 3.1 4.8 6.1 4.8 9 0 2.1-.8 3.9-2.4 5.5H9.6C8 15.9 7.2 14.1 7.2 12c0-2.9 1.6-5.9 4.8-9Z"/><path d="M7.5 13.4 4.5 17.5 8.9 16M16.5 13.4l3 4.1-4.4-1.5"/><circle cx="12" cy="10.4" r="1.9"/></svg>',
  ledger: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 4.5h9.8a2 2 0 0 1 2 2v13H8.8a2.4 2.4 0 0 1-2.4-2.4V4.5Z"/><path d="M9.2 4.5v15M9.2 16.5h9"/><path d="M12.3 9h3.4M12.3 12h2.8"/></svg>',
  registry: '<svg viewBox="222 220 650 640" aria-hidden="true"><path d="M291 777 L505 413 L571 532 L494 666 Z" fill="#ffd619" stroke="none"/><path d="M516 390 L582 275 L792 638 L657 638 Z" fill="#0a7fbe" stroke="none"/></svg>',
  camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 8.7c0-1.4.8-2.2 2.2-2.2h2.7l1.4-2h3.4l1.4 2h2.7c1.4 0 2.2.8 2.2 2.2v8.1c0 1.4-.8 2.2-2.2 2.2H6.7c-1.4 0-2.2-.8-2.2-2.2V8.7Z"/><circle cx="12" cy="13" r="4"/><circle cx="12" cy="13" r="1.2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8.5" y="3.5" width="7" height="11" rx="3.5"/><path d="M5.5 11.2c0 4 2.3 6.2 6.5 6.2s6.5-2.2 6.5-6.2M12 17.4v3.1M9 20.5h6"/><path d="M4 9.6c-1.3 1.9-1.3 4 0 5.9M20 9.6c1.3 1.9 1.3 4 0 5.9"/></svg>',
  building: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h16M6 18V9l6-4 6 4v9M9 18v-5M12 18v-5M15 18v-5M8 10h8"/></svg>',
  certificate: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  duns: '<svg viewBox="0 0 24 24" aria-hidden="true"><text x="4" y="15.5" font-size="6.8" font-weight="800">D&amp;B</text></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2 2.2 3 4.8 3 8s-1 5.8-3 8M12 4c-2 2.2-3 4.8-3 8s1 5.8 3 8"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.8 18.5 6v5.4c0 4.1-2.2 7.1-6.5 8.8-4.3-1.7-6.5-4.7-6.5-8.8V6L12 3.8Z"/><path d="m9.3 12 1.8 1.8 3.8-4"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h3v10H5zM6.5 5.5v.1M11 9h3v1.5c.7-1.1 1.7-1.7 3-1.7 2 0 3 1.3 3 4V19h-3v-5.3c0-1.1-.5-1.8-1.5-1.8S14 12.7 14 14v5h-3z"/></svg>',
  crunchbase: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7v10M6 12h3a3 3 0 1 1 0 6H6"/><path d="M18 15.7a3 3 0 1 1 0-3.4"/></svg>',
  angellist: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 20c-1.5-2-2.2-4.1-2.2-6.4V6.2C6.8 4.4 8.2 3 10 3l2 7 2-7c1.8 0 3.2 1.4 3.2 3.2v7.4c0 2.3-.7 4.4-2.2 6.4"/><path d="M7 12h10M8 16h8"/></svg>',
  yc: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="m8.5 8.5 3.5 4 3.5-4M12 12.5v4"/></svg>',
  coffee: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h10v5a5 5 0 0 1-5 5 5 5 0 0 1-5-5Z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M7 4c1.2.8 1.2 1.6 0 2.4M11 4c1.2.8 1.2 1.6 0 2.4M15 4c1.2.8 1.2 1.6 0 2.4"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="m5.5 8 6.5 5 6.5-5"/></svg>',
  person: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.4" r="3"/><path d="M5.8 19c.8-4 2.9-6 6.2-6s5.4 2 6.2 6"/></svg>',
  location: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s6-5.2 6-10a6 6 0 0 0-12 0c0 4.8 6 10 6 10Z"/><circle cx="12" cy="10" r="2"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
};

function mergeConfig(base, override) {
  if (!override || typeof override !== 'object') return structuredCloneSafe(base);
  const output = structuredCloneSafe(base);
  for (const [key, value] of Object.entries(override)) {
    if (Array.isArray(value)) {
      output[key] = value;
    } else if (value && typeof value === 'object' && output[key] && !Array.isArray(output[key])) {
      output[key] = mergeConfig(output[key], value);
    } else {
      output[key] = value;
    }
  }
  return output;
}

function structuredCloneSafe(value) {
  return JSON.parse(JSON.stringify(value));
}

function baseConfig() {
  const data = structuredCloneSafe(RE8CH_FOOTER_CONFIG);
  const isPhonaid = /(^|\.)phonaid\.com$/i.test(window.location.hostname);
  const filing = isPhonaid
    ? { icp: '湘ICP备2025130798号-2', mps: '湘公网安备43138202000214号', code: '43138202000214' }
    : { icp: '湘ICP备2025130798号-4', mps: '湘公网安备43138202000213号', code: '43138202000213' };

  data.legal.icp = filing.icp;
  data.legal.mps = filing.mps;
  data.legal.mpsHref = `https://beian.mps.gov.cn/#/query/webSearch?code=${filing.code}`;

  data.companyRecords = data.companyRecords.map((record) => {
    if (record.id === 'icp') {
      return { ...record, description: filing.icp, detail: `ICP备案号: ${filing.icp}。请在工信部备案管理系统自行搜索核验。` };
    }
    if (record.id === 'mps') {
      return { ...record, description: filing.mps, detail: `公安备案号: ${filing.mps}。可前往全国互联网安全管理服务平台核验。`, href: data.legal.mpsHref };
    }
    return record;
  });
  return mergeConfig(data, window.RE8CH_FOOTER_CONFIG);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function icon(name) {
  return ICONS[name] || ICONS.mark;
}

function productIcon(value) {
  const raw = String(value || '').trim();
  if (!raw) return icon('mark');
  if (ICONS[raw]) return icon(raw);
  if (/\.(svg|png|webp|jpe?g|gif)$/i.test(raw) || raw.includes('/')) {
    const src = /^(https?:|data:|\/)/.test(raw) ? raw : `${assetBaseUrl}/${raw.replace(/^\/+/, '')}${assetQuery}`;
    return `<img class="re8ch-footer__product-icon" src="${escapeHtml(src)}" alt="" loading="lazy" decoding="async">`;
  }
  return icon(raw);
}

function normalizeProductId(value) {
  const key = String(value || '').trim().toLowerCase();
  if (key === 'anysiteonearth' || key === 'earth') return 'anysite';
  if (key === 'image' || key === 'registry') return 'registry-image';
  if (key === 'userhub' || key === 'auth') return 'user-hub';
  return key;
}

function boolAttr(value) {
  return value === '' || value === 'true' || value === true;
}

function splitIds(value) {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeLocale(value) {
  const raw = String(value || 'en');
  if (raw === 'zh') return 'zh-CN';
  if (raw === 'zh-Hant') return 'zh-TW';
  return FOOTER_LOCALE_COPY[raw] ? raw : 'en';
}

function localeCopy(locale) {
  return FOOTER_LOCALE_COPY[normalizeLocale(locale)] || FOOTER_LOCALE_COPY.en;
}

function contentCopy(locale) {
  return FOOTER_CONTENT[normalizeLocale(locale)];
}

function translated(value, locale, fallback = '') {
  if (value && typeof value === 'object') return value[normalizeLocale(locale)] || value.en || fallback;
  return value || fallback;
}

function localeProductLabel(product, locale) {
  return translated(product.label, locale, product.id);
}

function localizedRecord(record, locale) {
  const copy = contentCopy(locale);
  const standard = RE8CH_FOOTER_CONFIG.companyRecords.find((item) => item.id === record.id);
  if (!standard || ['reachieve-certificate', 'china-business-license'].includes(record.id)) return Object.fromEntries(Object.entries(record).map(([key, value]) =>
    [key, ['name', 'description', 'detail', 'action'].includes(key) ? translated(value, locale) : value]));
  const kind = ['montana-sos', 'china-credit', 'icp', 'mps', 'duns'].includes(record.id) ? 0
    : record.id === 'yc-cofounder' ? 2 : record.id === 'coffeespace' ? 3 : 1;
  const name = typeof record.name === 'object' ? translated(record.name, locale) : (copy.records[record.id] || record.name);
  const identifier = ['duns', 'icp', 'mps'].includes(record.id) ? record.description : '';
  return { ...record, name,
    description: typeof record.description === 'object' ? translated(record.description, locale) : identifier || copy.kinds[kind],
    detail: typeof record.detail === 'object' ? translated(record.detail, locale) : copy.detail.replace('{name}', name),
    action: typeof record.action === 'object' ? translated(record.action, locale) : copy.action };
}

function localizedHref(href, locale) {
  const normalized = normalizeLocale(locale);
  if (!href || normalized === 'en') return href;
  try {
    const url = new URL(href);
    url.pathname = `/${normalized}/`;
    return url.href.replace(/\/$/, '/');
  } catch {
    return href;
  }
}

// A per-locale href map ({ en, 'zh-CN' }) is used as is, for sites that do not
// serve every locale path; a plain URL gets the /<locale>/ path rewrite.
function productHref(href, locale) {
  return href && typeof href === 'object' ? translated(href, locale) : localizedHref(href, locale);
}

function assetUrl(value) {
  if (!value) return '';
  if (/^(https?:|data:|\/)/.test(value)) return value;
  return `${trustMarkBaseUrl}/${value}${assetQuery}`;
}

function setContact(contacts, id, label, hrefPrefix = '') {
  if (!label) return contacts;
  return contacts.map((contact) => {
    if (contact.id !== id) return contact;
    return {
      ...contact,
      label,
      title: label,
      href: hrefPrefix ? `${hrefPrefix}${label}` : label,
    };
  });
}

class Re8chFooter extends HTMLElement {
  static observedAttributes = [
    'active-product',
    'theme',
    'locale',
    'language-options',
    'language-mode',
    'compact',
    'variant',
    'max-width',
    'brand-logo',
    'brand-name',
    'brand-cn-name',
    'brand-href',
    'brand-description',
    'brand-badge',
    'products-label',
    'product-ids',
    'record-ids',
    'records-visible',
    'hide-products',
    'hide-records',
    'copyright',
    'icp',
    'icp-href',
    'mps',
    'mps-href',
    'address',
    'address-title',
    'contact-email',
    'career-email',
    'contact-label',
    'career-label',
  ];

  connectedCallback() {
    this.render();
    window.addEventListener('resize', this.handleViewportChange);
  }

  disconnectedCallback() {
    cancelAnimationFrame(this.marqueeFrame);
    this.railObserver?.disconnect();
    this.railAbort?.abort();
    this.startMarquee = null;
    window.removeEventListener('resize', this.handleViewportChange);
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  handleViewportChange = () => {
    this.updateScrollRails();
  };

  componentConfig() {
    const data = baseConfig();
    const locale = normalizeLocale(this.getAttribute('locale') || document.documentElement.lang || 'en');
    const copy = { ...localeCopy(locale), ...contentCopy(locale) };
    const attrMap = [
      ['brand-logo', data.brand, 'logoSrc'],
      ['brand-name', data.brand, 'name'],
      ['brand-cn-name', data.brand, 'cnName'],
      ['brand-href', data.brand, 'homeHref'],
      ['brand-description', data.brand, 'description'],
      ['brand-badge', data.brand, 'badge'],
      ['products-label', data.layout, 'productsLabel'],
      ['copyright', data.legal, 'copyright'],
      ['icp', data.legal, 'icp'],
      ['icp-href', data.legal, 'icpHref'],
      ['mps', data.legal, 'mps'],
      ['mps-href', data.legal, 'mpsHref'],
      ['address', data.legal, 'address'],
      ['address-title', data.legal, 'addressTitle'],
    ];

    attrMap.forEach(([attr, target, key]) => {
      if (this.hasAttribute(attr)) target[key] = this.getAttribute(attr);
    });

    if (!this.hasAttribute('products-label')) data.layout.productsLabel = copy.productsLabel;
    if (!this.hasAttribute('contact-label')) {
      data.contacts = data.contacts.map((contact) => contact.id === 'contact' ? { ...contact, label: copy.contact } : contact);
    }
    if (!this.hasAttribute('career-label')) {
      data.contacts = data.contacts.map((contact) => contact.id === 'career' ? { ...contact, label: copy.career } : contact);
    }
    data.contacts = data.contacts.map((contact) => contact.id === 'founder' ? { ...contact, label: copy.founder || contact.label } : contact);
    if (!this.hasAttribute('address')) data.legal.address = copy.address;

    data.contacts = setContact(data.contacts, 'contact', this.getAttribute('contact-email'), 'mailto:');
    data.contacts = setContact(data.contacts, 'career', this.getAttribute('career-email'), 'mailto:');
    if (this.hasAttribute('contact-label')) {
      data.contacts = data.contacts.map((contact) => contact.id === 'contact'
        ? { ...contact, label: this.getAttribute('contact-label') }
        : contact);
    }
    if (this.hasAttribute('career-label')) {
      data.contacts = data.contacts.map((contact) => contact.id === 'career'
        ? { ...contact, label: this.getAttribute('career-label') }
        : contact);
    }

    if (!this.hasAttribute('brand-name')) data.brand.name = translated(data.brand.name === 'RE8CH' ? copy.brand : data.brand.name, locale);
    data.companyRecords = data.companyRecords.map((record) => localizedRecord(record, locale));
    data.locale = locale;
    data.copy = copy;

    const productIds = splitIds(this.getAttribute('product-ids'));
    if (productIds.length) {
      data.products = data.products.filter((product) => productIds.includes(product.id));
    }

    const recordIds = splitIds(this.getAttribute('record-ids'));
    if (recordIds.length) {
      data.companyRecords = data.companyRecords.filter((record) => recordIds.includes(record.id));
    }

    data.layout.maxWidth = this.getAttribute('max-width') || data.layout.maxWidth || '1600px';
    if (this.hasAttribute('records-visible')) {
      const recordsVisible = Number(this.getAttribute('records-visible'));
      if (Number.isFinite(recordsVisible) && recordsVisible > 0) data.layout.recordsVisible = recordsVisible;
    }
    return data;
  }

  render() {
    const data = this.componentConfig();
    const activeProduct = this.getAttribute('active-product') || '';
    const theme = this.getAttribute('theme') || 'light';
    const compact = boolAttr(this.getAttribute('compact'));
    const variant = this.getAttribute('variant') || 'standard';

    this.lang = data.locale;
    this.dataset.theme = theme === 'dark' ? 'dark' : 'light';
    this.dataset.compact = compact ? 'true' : 'false';
    this.dataset.variant = variant;
    this.style.setProperty('--re8ch-footer-max-width', data.layout.maxWidth);

    this.innerHTML = `
      <footer class="re8ch-footer" aria-label="RE8CH footer">
        <div class="re8ch-footer__inner">
          ${this.hasAttribute('hide-products') ? '' : this.renderProducts(data.products, activeProduct, data.layout.productsLabel, data.brand, data.locale, data.copy)}
          ${this.hasAttribute('hide-records') ? '' : this.renderCompanyRecords(data.companyRecords, data.layout.recordsVisible, data.copy)}
          ${this.renderBottom(data.contacts, data.legal, data.copy)}
        </div>
      </footer>`;

    this.setupScrollRails();
    requestAnimationFrame(() => this.updateScrollRails());
  }

  renderProducts(products, activeProduct, label, brand, locale, copy) {
    const items = `
      <a class="re8ch-footer__rail-label" href="${escapeHtml(localizedHref(brand.homeHref, locale))}" aria-label="${escapeHtml(brand.name)} · ${escapeHtml(copy.home)}">
        <img src="${escapeHtml(brand.logoSrc)}" alt="" loading="lazy">
        <span>${escapeHtml(brand.name)}</span>
      </a>
      ${products.map((product) => this.renderProduct(product, activeProduct, locale, copy)).join('')}`;
    return this.renderScrollRail('products', label || copy.productsLabel, items, {}, copy);
  }

  renderProduct(product, activeProduct, locale, copy) {
    const isActive = normalizeProductId(product.id) === normalizeProductId(activeProduct);
    const style = product.brandColor ? ` style="--item-color: ${escapeHtml(product.brandColor)}"` : '';
    const label = localeProductLabel(product, locale);
    const description = translated(product.description, locale) || copy.products[product.id] || '';
    const aria = `${label} · ${description} ${copy.productSuffix}${isActive ? `, ${copy.currentProduct}` : ''}`;
    return `
      <a class="re8ch-footer__product-link" href="${escapeHtml(productHref(product.href, locale))}" data-product-id="${escapeHtml(product.id)}" data-active="${isActive ? 'true' : 'false'}" title="${escapeHtml(aria)}" aria-label="${escapeHtml(aria)}" ${isActive ? 'aria-current="page"' : ''}${style}>
        ${productIcon(product.icon)}
        <span dir="auto">${escapeHtml(label)}${description && locale !== 'en' ? ` · ${escapeHtml(description)}` : ''}</span>
      </a>`;
  }

  renderCompanyRecords(records, recordsVisible, copy) {
    const items = records.map((record) => this.renderCompanyRecord(record)).join('');
    return `
      <section class="re8ch-footer__records-section" aria-label="${escapeHtml(copy.recordsLabel)}">
        ${this.renderScrollRail('records', copy.recordsLabel, items, {}, copy)}
      </section>`;
  }

  renderCompanyRecord(record) {
    const style = record.brandColor ? ` style="--item-color: ${escapeHtml(record.brandColor)}"` : '';
    const aria = `${record.name}. ${record.description}. ${record.detail || record.action}`;
    return `
      <a class="re8ch-footer__trust-mark" href="${escapeHtml(record.href)}" rel="noopener" target="_blank" aria-label="${escapeHtml(aria)}" title="${escapeHtml(record.description)}"${style}>
        <span class="re8ch-footer__trust-logo">
          ${record.logo ? `<img src="${escapeHtml(assetUrl(record.logo))}" alt="" loading="eager" decoding="async">` : icon(record.icon)}
          <span class="re8ch-footer__trust-fallback">${icon(record.icon)}</span>
        </span>
        <strong dir="auto">${escapeHtml(record.name)}</strong>
      </a>`;
  }

  renderScrollRail(kind, ariaLabel, items, options = {}, copy = FOOTER_LOCALE_COPY.en) {
    return `
      <div class="re8ch-footer__rail-shell re8ch-footer__rail-shell--${escapeHtml(kind)}" data-scroll-rail data-can-left="false" data-can-right="false">
        <button class="re8ch-footer__marquee-toggle" type="button" data-marquee-pause hidden aria-pressed="false" aria-label="${escapeHtml(copy.pause)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5v14M15 5v14"/></svg></button>
        <span class="re8ch-footer__rail-fade re8ch-footer__rail-fade--left" aria-hidden="true"></span>
        <button class="re8ch-footer__rail-button re8ch-footer__rail-button--left" type="button" data-scroll-dir="-1" aria-label="${escapeHtml(copy.scrollLeft)}">${icon('chevronLeft')}</button>
        <div class="re8ch-footer__rail-viewport" data-scroll-viewport role="region" aria-label="${escapeHtml(ariaLabel)}" tabindex="0">
          <div class="re8ch-footer__rail-track">
            ${items}
          </div>
        </div>
        <span class="re8ch-footer__rail-fade re8ch-footer__rail-fade--right" aria-hidden="true"></span>
        <button class="re8ch-footer__rail-button re8ch-footer__rail-button--right" type="button" data-scroll-dir="1" aria-label="${escapeHtml(copy.scrollRight)}">${icon('chevronRight')}</button>
      </div>`;
  }

  renderBottom(contacts, legal, copy) {
    return `
      <div class="re8ch-footer__bottom">
        <span class="re8ch-footer__copyright">${escapeHtml(legal.copyright)}</span>
        <nav class="re8ch-footer__contact-row" aria-label="${escapeHtml(copy.contact)}">
          ${contacts.map((contact) => `
            <a href="${escapeHtml(contact.href)}" aria-label="${escapeHtml(contact.title || contact.label)}" title="${escapeHtml(contact.title || contact.label)}">${icon(contact.icon)}<span>${escapeHtml(contact.label)}</span></a>
          `).join('')}
          <span title="${escapeHtml(legal.addressTitle || legal.address)}">${icon('location')}<span>${escapeHtml(legal.address)}</span></span>
        </nav>
        <nav class="re8ch-footer__filings" aria-label="${escapeHtml(copy.filings)}">
          <a href="https://re8ch.com/${escapeHtml(normalizeLocale(this.getAttribute('locale') || 'en'))}/company/" rel="noopener"><span>${escapeHtml(copy.recordsLabel)}</span></a>
          <a href="${escapeHtml(legal.icpHref)}" rel="noopener" target="_blank"><img src="${escapeHtml(assetUrl(legal.icpLogo))}" alt=""><span>${escapeHtml(legal.icp)}</span></a>
          <a href="${escapeHtml(legal.mpsHref)}" rel="noopener" target="_blank"><img src="${escapeHtml(assetUrl(legal.mpsLogo))}" alt=""><span>${escapeHtml(legal.mps)}</span></a>
        </nav>
      </div>`;
  }

  prefersReducedMotion() {
    return matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.re8chReduceMotion === 'true';
  }

  setupScrollRails() {
    cancelAnimationFrame(this.marqueeFrame);
    this.marqueeFrame = 0;
    this.startMarquee = null;
    this.railObserver?.disconnect();
    this.railAbort?.abort();
    this.railAbort = new AbortController();
    const { signal } = this.railAbort;
    const rails = [...this.querySelectorAll('[data-scroll-rail]')];
    this.railObserver = new ResizeObserver(() => this.updateScrollRails());
    rails.forEach((rail) => {
      const viewport = rail.querySelector('[data-scroll-viewport]');
      const track = rail.querySelector('.re8ch-footer__rail-track');
      this.railObserver.observe(viewport);
      this.railObserver.observe(track);
      viewport.addEventListener('scroll', () => this.updateScrollRail(rail), { passive: true, signal });
      // Respect manual wheel/touch/keyboard navigation instead of fighting it.
      const manual = () => { rail.resumeAt = performance.now() + 3000; rail.autoPosition = undefined; };
      for (const event of ['wheel', 'pointerdown', 'keydown']) viewport.addEventListener(event, manual, { passive: true, signal });
      rail.querySelector('[data-marquee-pause]').addEventListener('click', (event) => {
        rail.dataset.paused = String(rail.dataset.paused !== 'true');
        event.currentTarget.setAttribute('aria-pressed', rail.dataset.paused);
      }, { signal });
      rail.querySelectorAll('[data-scroll-dir]').forEach((button) => {
        button.addEventListener('click', () => {
          manual();
          viewport.scrollBy({ left: Number(button.dataset.scrollDir) * Math.max(100, viewport.clientWidth * .65),
            behavior: this.prefersReducedMotion() ? 'auto' : 'smooth' });
        }, { signal });
      });
    });
    this.updateScrollRails();
    let previous = 0;
    const tick = (now) => {
      this.marqueeFrame = 0;
      const elapsed = Math.min(now - (previous || now), 64);
      previous = now;
      const blocked = this.prefersReducedMotion() || document.hidden || this.matches(':hover, :focus-within');
      for (const rail of rails) {
        const viewport = rail.querySelector('[data-scroll-viewport]');
        const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
        if (blocked || max <= 2 || rail.dataset.paused === 'true' || now < (rail.resumeAt || 0)) {
          rail.autoPosition = undefined;
          continue;
        }
        const direction = rail.autoDirection || 1;
        const next = Math.max(0, Math.min(max, (rail.autoPosition ?? viewport.scrollLeft) + direction * elapsed * .012));
        viewport.scrollLeft = next;
        rail.autoPosition = next;
        if ((direction > 0 && next === max) || (direction < 0 && next === 0)) {
          rail.autoDirection = -direction;
          rail.resumeAt = now + 1400;
        }
      }
      this.startMarquee();
    };
    this.startMarquee = () => {
      if (!this.marqueeFrame && rails.some((rail) => rail.dataset.overflow === 'true')) {
        this.marqueeFrame = requestAnimationFrame(tick);
      }
    };
    this.startMarquee();
  }

  updateScrollRails() {
    this.querySelectorAll('[data-scroll-rail]').forEach((rail) => this.updateScrollRail(rail));
    this.startMarquee?.();
  }

  updateScrollRail(rail) {
    const viewport = rail.querySelector('[data-scroll-viewport]');
    if (!viewport) return;
    const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const overflow = max > 2;
    rail.dataset.overflow = String(overflow);
    rail.dataset.canLeft = String(overflow && viewport.scrollLeft > 2);
    rail.dataset.canRight = String(overflow && viewport.scrollLeft < max - 2);
    rail.querySelector('[data-marquee-pause]').hidden = !overflow;
    rail.querySelectorAll('[data-scroll-dir]').forEach((button) => {
      button.hidden = !overflow;
      button.disabled = Number(button.dataset.scrollDir) < 0 ? viewport.scrollLeft <= 2 : viewport.scrollLeft >= max - 2;
    });
    if (!overflow) {
      viewport.scrollLeft = 0;
      rail.autoPosition = undefined;
      rail.autoDirection = 1;
    }
  }

}

window.RE8CH_FOOTER_DEFAULT_CONFIG = RE8CH_FOOTER_CONFIG;
window.Re8chFooter = Re8chFooter;

if (!customElements.get('re8ch-footer')) {
  customElements.define('re8ch-footer', Re8chFooter);
}

})();
