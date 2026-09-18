const translations = {
  en: {
    "nav.about": "About", "nav.news": "News", "nav.publications": "Publications", "nav.education": "Education", "nav.contact": "Contact",
    "hero.eyebrow": "REMOTE SENSING · MULTIMODAL LEARNING · GEOSPATIAL AI",
    "hero.role": "Ph.D. Student · Beijing Forestry University",
    "hero.summary": "I build efficient vision and multimodal systems for understanding high-resolution Earth observation data, with current work spanning change detection, image restoration, and scalable geospatial intelligence.",
    "hero.viewPublications": "View publications", "hero.note": "Researcher in remote sensing and intelligent information systems",
    "about.eyebrow": "ABOUT ME", "about.title": "Research at the intersection of vision, language, and Earth observation.",
    "about.lead": "I am a Ph.D. student at Beijing Forestry University. My research combines remote sensing interpretation with multimodal learning and efficient neural architectures, aiming to make geospatial AI more accurate, explainable, and practical at scale.",
    "about.focus1": "Language-guided change detection and instruction-conditioned segmentation.",
    "about.focus2": "Lightweight restoration and recognition for high-resolution remote sensing imagery.",
    "about.focus3": "Big data systems for forest ecological monitoring and geospatial analytics.",
    "news.eyebrow": "LATEST NEWS", "news.title": "What is new",
    "news.item1.title": "HazeGroupNet", "news.item1.body": "is available online in Expert Systems with Applications (Article 134438).",
    "news.item2.title": "Change-LISA", "news.item2.body": "is available early access in IEEE Transactions on Geoscience and Remote Sensing.",
    "news.item3.title": "CSGANet", "news.item3.body": "is published in IEEE JSTARS as a lightweight architecture for remote sensing change detection.",
    "pubs.eyebrow": "SELECTED PUBLICATIONS", "pubs.title": "Selected work", "pubs.all": "View all ↗",
    "pubs.haze.desc": "A compact encoder–decoder that preserves native receptive-field groups and uses dual-cue, prior-centered residual calibration for efficient remote-sensing image dehazing.",
    "pubs.change.desc": "An instruction-conditioned multimodal framework that produces change masks from natural-language queries and suppresses false positives under counterfactual instructions.",
    "pubs.csganet.desc": "A compact Siamese architecture that balances local, directional, and global context while preserving boundary details under a lightweight computational budget.",
    "pubs.forest.desc": "A Hadoop- and HBase-based storage framework for heterogeneous forest ecological station data, with RowKey retrieval and secondary indexing through Elasticsearch.",
    "edu.eyebrow": "BACKGROUND", "edu.title": "Education & experience", "edu.education": "Education", "edu.experience": "Experience",
    "edu.meituan": "Applied AI and large-scale data systems", "edu.ant": "Data systems and intelligent applications", "edu.meituan2": "Big data engineering and applied analytics",
    "contact.eyebrow": "LET'S CONNECT", "contact.title": "Working on a remote sensing problem?", "contact.body": "I am open to research conversations, collaborations, and discussions around efficient geospatial AI.", "contact.email": "Send an email ↗",
    "footer.built": "Built for GitHub Pages · Updated 2026"
  },
  zh: {
    "nav.about": "关于我", "nav.news": "动态", "nav.publications": "论文", "nav.education": "经历", "nav.contact": "联系",
    "hero.eyebrow": "遥感 · 多模态学习 · 地理空间智能",
    "hero.role": "北京林业大学 · 博士研究生",
    "hero.summary": "我致力于构建高效的视觉与多模态系统，用于理解高分辨率地球观测数据。目前研究涵盖变化检测、图像复原和可扩展地理空间智能。 ",
    "hero.viewPublications": "查看论文", "hero.note": "遥感与智能信息处理方向研究者",
    "about.eyebrow": "关于我", "about.title": "在视觉、语言与地球观测的交叉处开展研究。",
    "about.lead": "我目前就读于北京林业大学，研究方向结合遥感解译、多模态学习与高效神经网络架构，致力于让地理空间人工智能更准确、更可解释，也更适合实际应用。",
    "about.focus1": "语言引导的变化检测与指令条件分割。",
    "about.focus2": "面向高分辨率遥感影像的轻量化复原与识别。",
    "about.focus3": "服务森林生态监测与地理空间分析的大数据系统。",
    "news.eyebrow": "最新动态", "news.title": "近期进展",
    "news.item1.title": "HazeGroupNet", "news.item1.body": "已在线发表于 Expert Systems with Applications（文章号 134438）。",
    "news.item2.title": "Change-LISA", "news.item2.body": "已在 IEEE Transactions on Geoscience and Remote Sensing 早期发表。",
    "news.item3.title": "CSGANet", "news.item3.body": "已发表于 IEEE JSTARS，面向高分辨率遥感变化检测。",
    "pubs.eyebrow": "精选论文", "pubs.title": "研究成果", "pubs.all": "查看全部 ↗",
    "pubs.haze.desc": "提出一种紧凑的编码器–解码器，通过保留原生感受野分组，并结合双线索、先验中心化残差校准，实现高效的遥感图像去雾。",
    "pubs.change.desc": "提出指令条件多模态框架，根据自然语言查询生成变化掩膜，并通过反事实指令抑制误检。",
    "pubs.csganet.desc": "提出轻量级孪生网络，在控制计算开销的同时融合局部、方向和全局上下文并保留边界细节。",
    "pubs.forest.desc": "面向森林生态站异构数据设计基于 Hadoop 与 HBase 的存储框架，并结合 RowKey 检索和 Elasticsearch 二级索引。",
    "edu.eyebrow": "个人经历", "edu.title": "教育与工作经历", "edu.education": "教育经历", "edu.experience": "工作经历",
    "edu.meituan": "应用人工智能与大规模数据系统", "edu.ant": "数据系统与智能应用", "edu.meituan2": "大数据工程与应用分析",
    "contact.eyebrow": "保持联系", "contact.title": "正在研究遥感问题？", "contact.body": "欢迎就高效地理空间智能开展学术交流、合作与讨论。", "contact.email": "发送邮件 ↗",
    "footer.built": "GitHub Pages 学术主页 · 2026 更新"
  }
};

const root = document.documentElement;
const langButton = document.getElementById("lang-toggle");
const themeButton = document.getElementById("theme-toggle");
const year = document.getElementById("year");
let language = localStorage.getItem("site-language") || "en";

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  langButton.textContent = language === "en" ? "中" : "EN";
  localStorage.setItem("site-language", language);
}

function applyTheme(nextTheme) {
  root.dataset.theme = nextTheme;
  themeButton.textContent = nextTheme === "dark" ? "☼" : "◐";
  localStorage.setItem("site-theme", nextTheme);
}

langButton.addEventListener("click", () => applyLanguage(language === "en" ? "zh" : "en"));
themeButton.addEventListener("click", () => applyTheme(root.dataset.theme === "dark" ? "light" : "dark"));
year.textContent = new Date().getFullYear();
applyLanguage(language);
applyTheme(localStorage.getItem("site-theme") || "light");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: .08 });
document.querySelectorAll(".content-section, .contact-section").forEach((section) => observer.observe(section));
