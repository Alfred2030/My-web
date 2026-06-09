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
  brand: "CXODEX",
  email: "hello@cxodex.com",
  domain: "CXODEX.com"
};

export const content = {
  zh: {
    meta: {
      title: "CXODEX | CEO 陪跑与经营改善咨询",
      description:
        "资深 CEO 陪跑顾问，基于 30 年 CEO 与总经理经验，专注经营改善、增长战略、精益生产、六西格玛、国际化与销售体系建设。"
    },
    common: {
      language: "EN",
      consultation: "预约沟通",
      companyStyle: "CEO Advisory · Operating Improvement · International Growth"
    },
    home: {
      eyebrow: "CEO 实战顾问",
      title: "面向企业一号位的经营改善、增长战略与长期陪跑",
      subtitle:
        "我曾在 GE 担任 10 年总经理，在好孩子集团担任 10 年 CEO，并在美国有 10 年创业经历。现在以外部顾问身份，陪伴 CEO 处理增长、运营、国际化、销售体系与组织执行中的关键问题。",
      primaryCta: "预约一次沟通",
      secondaryCta: "了解工作方法",
      proof: [
        { value: "30年", label: "CEO 与总经理实战经历" },
        { value: "10年", label: "GE 总经理经历" },
        { value: "10年", label: "好孩子集团 CEO 经历" },
        { value: "10年", label: "美国创业与国际业务经历" }
      ],
      introTitle: "咨询的重点不是概念，而是经营判断、管理动作和持续复盘。",
      introBody:
        "我更关注企业已经发生的问题：增长放缓、销售体系不稳定、运营效率不足、国际化推进困难、管理层共识不够清晰。每一次合作都从真实经营处境出发，先澄清问题，再确定优先级和推进节奏。",
      pillars: [
        "CEO 深度陪跑与关键决策讨论",
        "经营改善、精益生产与六西格玛",
        "国际业务开发与跨文化经营",
        "销售增长与销售体系建设"
      ]
    },
    about: {
      title: "关于我",
      subtitle: "我将多年一线经营经验，转化为对 CEO 更实用、更克制的外部支持。",
      sections: [
        {
          title: "GE 十年总经理经历",
          body: "在跨国企业管理体系中长期参与战略分解、运营管理、质量改善、团队建设与跨区域协同。这段经历形成了我对流程、指标、组织节奏和管理纪律的基本理解。"
        },
        {
          title: "好孩子集团十年 CEO 经历",
          body: "在制造、品牌、渠道和国际市场交织的环境中担任 CEO，持续面对增长、效率、质量、组织能力和管理层协同等现实问题。"
        },
        {
          title: "美国十年创业经历",
          body: "在美国创业期间，直接经历市场验证、客户开发、团队搭建、资源约束与国际业务推进，对创业者和 CEO 的决策压力有切身体会。"
        }
      ],
      statement:
        "我不替 CEO 做决定，也不提供脱离现场的标准答案。我的工作是作为一个有经营经验的外部同行，帮助 CEO 看清问题、压实逻辑、明确取舍，并持续跟进关键动作。"
    },
    services: {
      title: "服务",
      subtitle: "服务对象主要是创始人、董事长、CEO 及承担实际经营责任的核心管理者。",
      items: [
        {
          title: "CEO 深度陪跑",
          body: "围绕重大经营判断、阶段性取舍、管理层协同和 CEO 个人决策节奏，进行一对一或小范围长期讨论与复盘。"
        },
        {
          title: "经营改善与增长战略",
          body: "梳理市场定位、客户结构、产品组合、资源投入和增长路径，帮助管理层把战略讨论转化为可执行的经营重点。"
        },
        {
          title: "精益生产与六西格玛",
          body: "面向制造型和运营密集型企业，识别流程浪费、质量波动、交付周期和现场管理问题，建立更稳定的改善机制。"
        },
        {
          title: "国际业务开发",
          body: "支持企业评估海外市场进入、渠道选择、合作伙伴、团队配置和跨文化管理，降低国际化推进中的判断成本。"
        },
        {
          title: "销售增长与体系建设",
          body: "从销售目标、客户分层、管道管理、关键客户、激励机制和例会节奏入手，提升销售增长的可管理性。"
        },
        {
          title: "高管团队工作坊",
          body: "为管理层设计闭门研讨，围绕经营复盘、战略共识、年度重点和跨部门协同，形成清晰的问题清单与行动安排。"
        }
      ]
    },
    methodology: {
      title: "方法论",
      subtitle: "方法保持简单：先看事实，再定优先级，最后进入执行复盘。",
      steps: [
        {
          title: "澄清经营问题",
          body: "通过 CEO 访谈、管理层沟通、经营数据和现场信息，区分表层症状与真正影响业务的关键问题。"
        },
        {
          title: "建立判断框架",
          body: "把复杂议题拆成市场、客户、产品、运营、财务、组织和风险几个维度，让讨论回到事实和取舍。"
        },
        {
          title: "确定少数重点",
          body: "避免同时推进过多项目，优先选择对经营质量影响较大的少数动作，明确负责人、节奏和衡量方式。"
        },
        {
          title: "持续复盘调整",
          body: "以固定节奏跟进推进情况，讨论偏差和阻力，在实际执行中校正判断，而不是停留在方案层面。"
        }
      ],
      principles: [
        "事实优先：少用口号，多看数据、现场和客户反馈",
        "克制表达：不承诺无法验证的结果",
        "CEO 视角：所有建议都回到一号位的责任和取舍",
        "持续复盘：把咨询变成可跟进的管理动作"
      ]
    },
    cases: {
      title: "匿名案例场景",
      subtitle: "以下为匿名化场景描述，用于说明典型咨询议题，不代表具体客户名单或可承诺结果。",
      items: [
        {
          title: "制造企业的精益运营改善",
          context: "一家制造企业在交付周期、质量稳定性和现场管理方面遇到压力，管理层也希望建立更清晰的运营指标和改善节奏。",
          result: "工作重点放在价值流梳理、关键指标选择、现场管理节奏和持续改善机制，帮助团队形成更可讨论、可跟进的运营改善路径。"
        },
        {
          title: "企业国际化前的进入判断",
          context: "一家企业准备拓展海外业务，但对目标市场、渠道模式、合作伙伴选择和团队配置尚未形成一致判断。",
          result: "工作重点放在市场进入逻辑、渠道与合作模式、组织准备度和主要风险识别，帮助 CEO 在投入前形成更清晰的决策框架。"
        },
        {
          title: "销售增长与管理体系重建",
          context: "一家企业的销售增长依赖少数个人能力，客户分层、管道管理、销售例会和关键客户机制不够稳定。",
          result: "工作重点放在销售流程梳理、客户分层、指标体系和管理节奏，帮助销售团队从个人驱动逐步转向体系化管理。"
        }
      ]
    },
    insights: {
      title: "洞察文章",
      subtitle: "预留给 CEO 经营笔记、精益与销售管理观察、国际化实践思考。",
      posts: [
        {
          title: "CEO 陪跑首先要处理的是经营问题，而不是管理概念",
          date: "2026-06-09",
          excerpt: "好的外部顾问应当帮助 CEO 回到事实、取舍和节奏，而不是增加更多抽象词汇。"
        },
        {
          title: "精益生产的价值，在于让管理问题可以被看见",
          date: "2026-06-09",
          excerpt: "精益不是单纯降本，而是让流程、质量、现场和管理节奏形成可持续的改善机制。"
        },
        {
          title: "国际化不是复制国内经验，而是重新做经营判断",
          date: "2026-06-09",
          excerpt: "海外业务需要重新理解客户、渠道、合作伙伴、团队能力和风险边界。"
        }
      ]
    },
    contact: {
      title: "联系方式",
      subtitle: "适合正在面对增长放缓、运营改善、国际化推进、销售体系建设或重大经营取舍的 CEO 与核心管理者。",
      emailLabel: "邮箱",
      formTitle: "预约一次私密沟通",
      fields: {
        name: "姓名",
        company: "公司",
        email: "邮箱",
        message: "你希望讨论的经营议题"
      },
      submit: "发送咨询邮件"
    }
  },
  en: {
    meta: {
      title: "CXODEX | CEO Advisory and Operating Improvement",
      description:
        "Senior CEO advisor with 30 years of executive experience across GE, Goodbaby Group, and US entrepreneurship."
    },
    common: {
      language: "中文",
      consultation: "Request a conversation",
      companyStyle: "CEO Advisory · Operating Improvement · International Growth"
    },
    home: {
      eyebrow: "CEO Operating Advisor",
      title: "CEO advisory for operating improvement, growth decisions, and international expansion",
      subtitle:
        "Thirty years of CEO and general management experience across GE, Goodbaby Group, and US entrepreneurship, applied to practical CEO decisions.",
      primaryCta: "Request a conversation",
      secondaryCta: "Explore the method",
      proof: [
        { value: "30 yrs", label: "CEO and general management experience" },
        { value: "10 yrs", label: "General Manager at GE" },
        { value: "10 yrs", label: "CEO at Goodbaby Group" },
        { value: "10 yrs", label: "US entrepreneurship and global business" }
      ],
      introTitle: "A practical partner for the CEO agenda.",
      introBody:
        "The work focuses on real operating questions: growth, global expansion, sales systems, lean operations, organizational capability, and the CEO's own decision cadence.",
      pillars: [
        "CEO advisory and decision support",
        "Operating improvement, lean, and Six Sigma",
        "International business development",
        "Sales growth and sales-system building"
      ]
    },
    about: {
      title: "About",
      subtitle: "Thirty years of CEO experience applied to high-stakes decisions and organizational execution.",
      sections: [
        {
          title: "Ten years as General Manager at GE",
          body: "Experience in strategy deployment, operating metrics, quality improvement, leadership pipelines, lean management, and cross-regional execution."
        },
        {
          title: "Ten years as CEO of Goodbaby Group",
          body: "Led through manufacturing, brand, channel, and international-market complexity while balancing growth, quality, efficiency, and organization."
        },
        {
          title: "Ten years of US entrepreneurship",
          body: "Built through market validation, customer development, resource constraints, team formation, and international business development."
        }
      ],
      statement:
        "My role is not to make decisions for the CEO. It is to provide an experienced external perspective, clarify tradeoffs, and follow through on critical operating actions."
    },
    services: {
      title: "Services",
      subtitle: "Confidential, continuous, outcome-oriented advisory for the CEO agenda.",
      items: [
        {
          title: "CEO advisory",
          body: "One-on-one advisory for founders, chairpersons, and CEOs focused on key operating decisions, leadership cadence, and execution."
        },
        {
          title: "Operating improvement and growth strategy",
          body: "Reassess market position, customer structure, product portfolio, resource allocation, and growth priorities."
        },
        {
          title: "Lean and Six Sigma",
          body: "Identify process waste, quality variance, delivery-cycle issues, and management-rhythm gaps in operations-heavy companies."
        },
        {
          title: "International business development",
          body: "Support market entry, channel selection, partners, team design, cultural differences, and regional operating cadence."
        },
        {
          title: "Sales growth and systems",
          body: "Build a more manageable sales system across goals, customer segmentation, pipeline, key accounts, incentives, and sales meetings."
        },
        {
          title: "Executive workshops",
          body: "Private workshops for operating reviews, strategic alignment, annual priorities, and cross-functional collaboration."
        }
      ]
    },
    methodology: {
      title: "Methodology",
      subtitle: "A simple method: facts first, fewer priorities, then execution review.",
      steps: [
        {
          title: "Clarify the operating issue",
          body: "Use CEO interviews, operating data, team conversations, and field observation to separate symptoms from root issues."
        },
        {
          title: "Build the decision frame",
          body: "Break complex questions into market, customer, product, operations, finance, organization, and risk."
        },
        {
          title: "Set a few priorities",
          body: "Focus on a small number of high-leverage actions with owners, cadence, and ways to review progress."
        },
        {
          title: "Review and adjust",
          body: "Track execution regularly and correct judgment through real operating feedback."
        }
      ],
      principles: [
        "Facts before slogans",
        "Restrained claims",
        "CEO-level tradeoffs",
        "Closed-loop execution"
      ]
    },
    cases: {
      title: "Anonymized Scenarios",
      subtitle: "Representative scenarios only. No client names or unverifiable results are claimed.",
      items: [
        {
          title: "Lean improvement in a manufacturing business",
          context: "A manufacturing company faced pressure around delivery cycle, quality stability, and shop-floor management rhythm.",
          result: "The work focused on value-stream review, operating metrics, management cadence, and a practical improvement path."
        },
        {
          title: "International market-entry judgment",
          context: "A company was preparing for overseas expansion without clear alignment on target market, channels, partners, and team design.",
          result: "The work focused on market-entry logic, channel model, organization readiness, and key risk boundaries."
        },
        {
          title: "Sales growth and management system",
          context: "A business relied heavily on individual sales capability and needed clearer pipeline, account, meeting, and incentive mechanisms.",
          result: "The work focused on sales process, customer segmentation, metrics, and management rhythm."
        }
      ]
    },
    insights: {
      title: "Insights",
      subtitle: "CEO notes on operating improvement, sales systems, lean management, and international growth.",
      posts: [
        {
          title: "CEO advisory should start with operating reality",
          date: "2026-06-09",
          excerpt: "Good advisory work helps the CEO return to facts, tradeoffs, and cadence."
        },
        {
          title: "Lean makes management problems visible",
          date: "2026-06-09",
          excerpt: "Lean is not only about cost. It connects process, quality, the field, and operating rhythm."
        },
        {
          title: "International expansion requires fresh operating judgment",
          date: "2026-06-09",
          excerpt: "Overseas growth means rethinking customers, channels, partners, team capability, and risk."
        }
      ]
    },
    contact: {
      title: "Contact",
      subtitle:
        "For CEOs and core executives facing growth slowdown, operating improvement, international expansion, sales-system building, or major tradeoffs.",
      emailLabel: "Email",
      formTitle: "Request a private conversation",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        message: "Operating issue you want to discuss"
      },
      submit: "Send inquiry"
    }
  }
} as const;
