export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];

export type RouteKey =
  | "home"
  | "about"
  | "services"
  | "methodology"
  | "cases"
  | "insights"
  | "contact";

export const routePaths: Record<RouteKey, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  methodology: "/methodology",
  cases: "/cases",
  insights: "/insights",
  contact: "/contact"
};

export function localizedPath(locale: Locale, route: RouteKey) {
  const path = routePaths[route];
  if (locale === "zh") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export const navigation: Record<Locale, Array<{ key: RouteKey; label: string }>> = {
  zh: [
    { key: "about", label: "关于我" },
    { key: "services", label: "服务" },
    { key: "methodology", label: "方法论" },
    { key: "cases", label: "案例" },
    { key: "insights", label: "洞察" },
    { key: "contact", label: "联系" }
  ],
  en: [
    { key: "about", label: "About" },
    { key: "services", label: "Services" },
    { key: "methodology", label: "Method" },
    { key: "cases", label: "Cases" },
    { key: "insights", label: "Insights" },
    { key: "contact", label: "Contact" }
  ]
};

export const profile = {
  name: "Alfred",
  brand: "CXOEDX",
  email: "hello@cxoedx.com",
  domain: "CXOEDX.com"
};

export const content = {
  zh: {
    meta: {
      title: "CXOEDX | CEO 陪跑与增长咨询",
      description:
        "资深 CEO 陪跑顾问，30 年 CEO 经验，专注增长战略、精益生产、六西格玛、国际业务开发、销售体系建设与 CEO 深度陪跑。"
    },
    common: {
      language: "EN",
      consultation: "预约私密沟通",
      companyStyle: "CEO Advisory · Growth Strategy · Operating Excellence"
    },
    home: {
      eyebrow: "Senior CEO Advisor",
      title: "为企业一号位提供深度陪跑、增长战略与运营升级咨询",
      subtitle:
        "30 年 CEO 经验，横跨 GE 十年总经理、好孩子集团十年 CEO、美国十年创业实践，帮助创始人、董事长与 CEO 在关键阶段做出更高质量的经营决策。",
      primaryCta: "预约咨询",
      secondaryCta: "了解方法论",
      proof: [
        { value: "30年", label: "CEO 与总经理实战经验" },
        { value: "10年", label: "GE 总经理经验" },
        { value: "10年", label: "好孩子集团 CEO 经验" },
        { value: "10年", label: "美国创业与国际业务经验" }
      ],
      introTitle: "不是泛泛建议，而是站在 CEO 位置一起拆解增长、组织和执行。",
      introBody:
        "咨询重点放在企业真实问题：战略选择、增长突破、国际化、销售体系、精益运营、组织能力和 CEO 本人的决策节奏。每一次陪跑都服务于可落地的经营结果。",
      pillars: [
        "增长战略与商业模式升级",
        "精益生产与六西格玛运营体系",
        "国际业务开发与跨文化管理",
        "销售体系建设与高管团队协同"
      ]
    },
    about: {
      title: "关于我",
      subtitle: "我用 30 年 CEO 实战经验，帮助企业家看清局面、做对选择、带动组织。",
      sections: [
        { title: "GE 十年总经理经验", body: "在全球化管理体系中训练战略拆解、运营指标、人才梯队、精益管理和跨区域业务协同能力。" },
        { title: "好孩子集团十年 CEO 经验", body: "在复杂制造、品牌、渠道和国际市场环境中推动企业成长，兼顾规模、效率、质量与组织建设。" },
        { title: "美国十年创业经验", body: "亲历从零到一、市场验证、融资节奏、团队搭建和国际业务拓展，对创业者压力与 CEO 孤独有切身体会。" }
      ],
      statement:
        "我的角色不是替 CEO 做决定，而是成为高质量的外部镜面和经营伙伴：看见盲点，压实逻辑，陪你把关键动作推进到底。"
    },
    services: {
      title: "服务",
      subtitle: "围绕 CEO 的关键经营议题，提供私密、连续、结果导向的咨询与陪跑。",
      items: [
        { title: "CEO 深度陪跑", body: "面向创始人、董事长和 CEO 的一对一长期陪跑，聚焦重大决策、组织挑战、个人领导力和阶段性经营突破。" },
        { title: "企业增长战略", body: "重审市场定位、增长曲线、产品组合、客户结构与资源配置，形成清晰的战略选择和执行路线。" },
        { title: "精益生产与六西格玛", body: "帮助制造型和运营密集型企业降低浪费、提升质量、缩短周期，并建立持续改善的管理机制。" },
        { title: "国际业务开发", body: "支持企业进入海外市场，处理渠道、团队、合作伙伴、文化差异和区域经营节奏。" },
        { title: "销售体系建设", body: "从目标、组织、流程、激励、漏斗和关键客户管理入手，建立可复制的销售增长系统。" },
        { title: "高管团队工作坊", body: "围绕战略共识、经营复盘、组织协同和年度重点议题，设计高密度闭门工作坊。" }
      ]
    },
    methodology: {
      title: "方法论",
      subtitle: "用咨询公司的结构化方法，结合 CEO 级别的经营直觉与落地经验。",
      steps: [
        { title: "诊断真实问题", body: "通过 CEO 访谈、经营数据、组织访谈和关键会议观察，识别问题背后的问题。" },
        { title: "建立决策框架", body: "把复杂议题拆成战略、客户、财务、组织、运营和风险几个可讨论维度。" },
        { title: "设计关键动作", body: "聚焦少数高杠杆动作，明确负责人、资源、指标、时间表和复盘机制。" },
        { title: "陪伴执行复盘", body: "以月度或双周节奏追踪推进，及时校正方向，确保共识转化为组织行为。" }
      ],
      principles: [
        "事实优先：用数据和现场观察校准判断",
        "少即是多：抓住影响经营结果的少数关键变量",
        "CEO 视角：所有建议都回到一号位的取舍和责任",
        "结果闭环：咨询不止于方案，而要进入行动复盘"
      ]
    },
    cases: {
      title: "案例",
      subtitle: "以下为典型场景示例，可按行业和企业阶段进行保密化定制。",
      items: [
        { title: "制造企业精益运营升级", context: "一家增长放缓的制造企业面临交付周期长、质量波动和管理层协同不足。", result: "通过价值流诊断、关键指标重建和管理节奏优化，形成 90 天改善路线。" },
        { title: "消费品牌国际市场进入", context: "企业希望进入北美市场，但对渠道、定价、团队和合作模式缺少清晰判断。", result: "建立市场进入框架，筛选优先区域与渠道，明确试点路径和风险清单。" },
        { title: "CEO 年度战略陪跑", context: "创始人需要在增长、组织升级和二代管理团队建设之间做关键取舍。", result: "通过连续陪跑形成年度战略主题、季度战役和高管团队责任机制。" }
      ]
    },
    insights: {
      title: "洞察文章",
      subtitle: "预留给 CEO 经营笔记、增长战略观察和管理方法论文章。",
      posts: [
        { title: "CEO 最重要的工作：在不确定中建立组织确定性", date: "2026-06-09", excerpt: "企业越复杂，CEO 越需要把战略判断转化为清晰节奏、少数重点和可复盘的组织动作。" },
        { title: "精益生产不是降本工具，而是管理系统", date: "2026-06-09", excerpt: "真正的精益不是项目制改善，而是把现场、数据、人才和经营目标连接起来。" },
        { title: "国际业务开发前，先回答三个 CEO 问题", date: "2026-06-09", excerpt: "海外增长的本质不是复制国内打法，而是重新理解客户、渠道、组织和风险。" }
      ]
    },
    contact: {
      title: "联系方式",
      subtitle: "适合正在经历增长瓶颈、国际化转型、组织升级或重大决策窗口的企业一号位。",
      emailLabel: "邮箱",
      formTitle: "预约一次私密沟通",
      fields: { name: "姓名", company: "公司", email: "邮箱", message: "你正在思考的关键议题" },
      submit: "发送咨询邮件"
    }
  },
  en: {
    meta: {
      title: "CXOEDX | CEO Advisory and Growth Consulting",
      description: "Senior CEO advisor with 30 years of executive experience across GE, Goodbaby Group, and US entrepreneurship."
    },
    common: {
      language: "中文",
      consultation: "Request a private conversation",
      companyStyle: "CEO Advisory · Growth Strategy · Operating Excellence"
    },
    home: {
      eyebrow: "Senior CEO Advisor",
      title: "CEO advisory for growth, operating excellence, and strategic clarity",
      subtitle: "Thirty years of CEO and general management experience across GE, Goodbaby Group, and US entrepreneurship, supporting founders and CEOs through consequential decisions.",
      primaryCta: "Book a consultation",
      secondaryCta: "Explore the method",
      proof: [
        { value: "30 yrs", label: "CEO and general management experience" },
        { value: "10 yrs", label: "General Manager at GE" },
        { value: "10 yrs", label: "CEO at Goodbaby Group" },
        { value: "10 yrs", label: "US entrepreneurship and global business" }
      ],
      introTitle: "A practical partner for the CEO agenda.",
      introBody: "The work focuses on real executive questions: growth, global expansion, sales systems, lean operations, organizational capability, and the CEO's own decision cadence.",
      pillars: ["Growth strategy and business model renewal", "Lean manufacturing and Six Sigma operating systems", "International business development", "Sales systems and executive team alignment"]
    },
    about: {
      title: "About",
      subtitle: "Thirty years of CEO experience applied to high-stakes decisions and organizational execution.",
      sections: [
        { title: "Ten years as General Manager at GE", body: "Trained in strategy deployment, operating metrics, leadership pipelines, lean management, and cross-regional execution." },
        { title: "Ten years as CEO of Goodbaby Group", body: "Led growth across manufacturing, brand, channel, and global market complexity while balancing scale, quality, and organization." },
        { title: "Ten years of US entrepreneurship", body: "Built through market validation, fundraising, team formation, and international expansion." }
      ],
      statement: "My role is not to make decisions for the CEO. It is to become a rigorous external mirror and operating partner."
    },
    services: {
      title: "Services",
      subtitle: "Confidential, continuous, outcome-oriented advisory for the CEO agenda.",
      items: [
        { title: "CEO advisory", body: "One-on-one advisory for founders, chairpersons, and CEOs focused on key decisions, leadership, and execution." },
        { title: "Growth strategy", body: "Reassess market position, growth curves, product portfolio, customer mix, and resource allocation." },
        { title: "Lean and Six Sigma", body: "Reduce waste, improve quality, shorten cycles, and build a system for continuous improvement." },
        { title: "International business development", body: "Support market entry, channels, teams, partners, culture, and regional operating cadence." },
        { title: "Sales system building", body: "Build a repeatable sales engine across goals, organization, process, incentives, funnel, and key accounts." },
        { title: "Executive workshops", body: "High-density private workshops for strategic alignment, operating reviews, and leadership collaboration." }
      ]
    },
    methodology: {
      title: "Methodology",
      subtitle: "Structured consulting discipline, grounded in CEO-level operating experience.",
      steps: [
        { title: "Diagnose the real issue", body: "Use CEO interviews, operating data, team conversations, and meeting observation to find the issue behind the issue." },
        { title: "Build the decision frame", body: "Break complex questions into strategy, customer, finance, organization, operations, and risk." },
        { title: "Define the critical moves", body: "Focus on high-leverage actions with owners, resources, metrics, timing, and review cadence." },
        { title: "Review execution", body: "Track progress monthly or biweekly, correct course, and turn alignment into organizational behavior." }
      ],
      principles: ["Facts first", "Fewer, sharper priorities", "CEO-level tradeoffs", "Closed-loop execution"]
    },
    cases: {
      title: "Cases",
      subtitle: "Representative scenarios, anonymized and adaptable by industry and company stage.",
      items: [
        { title: "Lean operating upgrade for a manufacturer", context: "A manufacturer faced slower growth, long delivery cycles, quality variance, and weak management alignment.", result: "Created a 90-day improvement path through value-stream diagnosis, metrics, and operating cadence." },
        { title: "North American market entry for a consumer brand", context: "The company needed clarity on channels, pricing, team design, and partnership model.", result: "Built a market-entry frame, prioritized regions and channels, and defined pilot risks." },
        { title: "Annual CEO strategy advisory", context: "A founder needed to balance growth, organizational upgrade, and next-generation leadership.", result: "Created annual strategic themes, quarterly campaigns, and executive ownership mechanisms." }
      ]
    },
    insights: {
      title: "Insights",
      subtitle: "Reserved for CEO notes, growth strategy observations, and management essays.",
      posts: [
        { title: "The CEO's job: creating certainty inside uncertainty", date: "2026-06-09", excerpt: "As complexity rises, the CEO must turn judgment into cadence, priorities, and reviewable action." },
        { title: "Lean is not a cost tool. It is a management system.", date: "2026-06-09", excerpt: "True lean connects the floor, data, talent, and operating goals." },
        { title: "Three CEO questions before global expansion", date: "2026-06-09", excerpt: "International growth requires fresh thinking about customers, channels, organization, and risk." }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "For CEOs navigating growth bottlenecks, international expansion, organizational upgrades, or major decisions.",
      emailLabel: "Email",
      formTitle: "Request a private conversation",
      fields: { name: "Name", company: "Company", email: "Email", message: "Key issue you are considering" },
      submit: "Send inquiry"
    }
  }
} as const;
