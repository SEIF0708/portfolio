export const contact = {
  whatsapp: "https://wa.me/905059439566",
  whatsappLabel: "+90 505 943 9566",
  email: "benabdallahsaif8@gmail.com",
  linkedin: "https://www.linkedin.com/in/seif-ben-abdallah/",
  github: "https://github.com/SEIF0708",
  site: "https://portfolio-theta-gold-88.vercel.app/en",
};

export const nav = [
  ["home", "Home"], ["about", "About"], ["work", "Work"], ["business", "Business"],
  ["experience", "Experience"], ["tech", "Tech Stack"], ["contact", "Contact"],
] as const;

export const help = [
  ["Build", "Web applications, SaaS platforms and digital products."],
  ["Digitalize", "Websites, automation, business processes and digital workflows."],
  ["Connect", "B2B introductions, partnerships and commercial opportunities."],
  ["Develop", "Turn business ideas into practical digital solutions."],
];

export type Project = {
  id: string; name: string; tag: string; desc: string; tech: string[];
  links: [string, string][]; sections: [string, string | string[]][];
};

export const projects: Project[] = [
  {
    id: "bonplan", name: "BONPLAN", tag: "QR Menu SaaS",
    desc: "A multilingual QR menu SaaS concept for restaurants and cafés, combining restaurant management tools with a mobile-first customer experience.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    links: [["Source", "https://github.com/SEIF0708/menu-qr"], ["Live demo", "https://menu-qr-rho.vercel.app/"]],
    sections: [
      ["Problem", "Restaurants and cafés often rely on printed menus that are slow to update and hard to offer in several languages."],
      ["Solution", "A QR-based menu that owners manage from a dashboard and customers open instantly on their phone, in their own language."],
      ["Key features", ["Restaurant dashboard", "Menu, category and product management", "Images and descriptions", "Multilingual menu experience", "QR-based restaurant menus", "Customer-facing mobile interface"]],
      ["Technical architecture", "Next.js and TypeScript front end, with Supabase providing the PostgreSQL database, authentication and infrastructure. Multi-tenant design so each restaurant manages its own menu. Deployed on Vercel."],
      ["Business model", "Subscription model exploration for restaurants and cafés. This is a concept and not an established commercial product."],
      ["What I learned", "Designing multi-tenant data models, structuring a dashboard around real owner workflows, and building mobile-first interfaces for customers."],
    ],
  },
  {
    id: "skin", name: "SKIN LESION CLASSIFICATION", tag: "Computer Vision / Deep Learning",
    desc: "An academic machine-learning project classifying skin lesion images with a ResNet50 backbone, transfer learning and an attention head.",
    tech: ["Python", "PyTorch", "ResNet50", "Albumentations", "Google Colab"],
    links: [["GitHub profile", "https://github.com/SEIF0708"]],
    sections: [
      ["Problem", "Classify skin lesion images as a binary task, where class imbalance makes plain accuracy misleading."],
      ["Dataset / preprocessing", "Image preprocessing and augmentation with Albumentations to improve generalization on limited data."],
      ["Model architecture", "ResNet50 backbone using transfer learning, with a dual-pooling attention head."],
      ["Training strategy", ["Binary Focal Loss for class imbalance", "Frozen-head training first", "Then fine-tuning of the backbone", "Early stopping", "Trained on GPU with Google Colab"]],
      ["Evaluation", "Evaluated on a held-out test set, using Test-Time Augmentation (TTA) at inference."],
      ["Limitations", "An academic project, not a clinical tool. Limited data and no external validation."],
      ["What I learned", "Handling imbalanced data, staged training and fine-tuning, and evaluating a model beyond a single accuracy number."],
    ],
  },
  {
    id: "carthagene", name: "CARTHAGENE", tag: "Website",
    desc: "A landing website project built as a web presence for the Carthagene brand.",
    tech: ["HTML", "CSS"],
    links: [["Source", "https://github.com/SEIF0708/carthagene-landing"]],
    sections: [["Overview", "A landing page giving the brand a clear online presence. Details are kept intentionally brief; ask me for more."]],
  },
  {
    id: "rajhi", name: "RAJHI & FERJANI", tag: "Business / Digital Project",
    desc: "A corporate trade website presenting products and the company to international B2B audiences.",
    tech: ["JavaScript", "HTML", "CSS"],
    links: [["Source", "https://github.com/SEIF0708/rajhi-ferjani-trade-landing"]],
    sections: [["Focus", ["Corporate web presence", "Product presentation", "B2B communication", "International business positioning", "Digital presence"]]],
  },
];

export const beyond = [
  ["01", "Digital Solutions", "Software • Websites • SaaS • Automation • Digital Products", "Helping businesses improve their digital presence and turn operational needs into practical technology solutions."],
  ["02", "B2B Partnerships", "Suppliers • Buyers • Partnerships • Market Opportunities", "Connecting businesses and exploring commercial opportunities across international markets."],
  ["03", "Technology Strategy", "Ideas • Product Development • Digitalization", "Translating business requirements into practical technical solutions and digital products."],
];

export const approach = [
  ["Understand", "Identify the actual user and business problem before choosing a technical solution."],
  ["Design", "Define the architecture, data model, API boundaries and user experience."],
  ["Build", "Develop iteratively with reusable components, version control and clean separation of concerns."],
  ["Test", "Validate functionality, edge cases and important user flows."],
  ["Improve", "Iterate based on feedback, simplify complexity and improve reliability."],
];

export const journey = [
  ["Education", "Haliç University", "Software Engineering"],
  ["Professional experience", "LEONI — Internship", "Built internal workflow automation with Microsoft Power Apps and Power Automate, supporting employee induction processes, with Excel and OneDrive-based data handling."],
  ["Independent projects", "BonPlan · Skin Lesion Classification", "QR Menu SaaS and an AI / computer vision project."],
  ["Business development", "B2B Commercial Representation", "In development. An initiative and model I am currently building, not an established company."],
];

export type Level = "Project experience" | "Working knowledge" | "Familiar";
export const stack: [string, [string, Level][]][] = [
  ["Frontend", [["TypeScript", "Project experience"], ["JavaScript", "Project experience"], ["React", "Project experience"], ["Next.js", "Project experience"], ["HTML/CSS", "Project experience"], ["Tailwind CSS", "Project experience"]]],
  ["Backend", [["Node.js", "Working knowledge"], ["Express", "Working knowledge"], ["REST APIs", "Working knowledge"], ["PostgreSQL", "Project experience"], ["SQL", "Working knowledge"], ["Prisma", "Familiar"]]],
  ["Cloud / Infrastructure", [["Git", "Project experience"], ["GitHub", "Project experience"], ["Vercel", "Project experience"], ["Supabase", "Project experience"], ["Docker", "Familiar"], ["AWS", "Familiar"], ["CI/CD", "Familiar"]]],
  ["AI / ML", [["Python", "Project experience"], ["PyTorch", "Project experience"], ["Computer Vision", "Project experience"], ["LLM APIs", "Familiar"], ["RAG", "Familiar"]]],
];

export const repos = [
  ["menu-qr", "QR menu application behind the BonPlan concept.", "TypeScript", "https://github.com/SEIF0708/menu-qr"],
  ["carthagene-landing", "Landing website for the Carthagene project.", "HTML", "https://github.com/SEIF0708/carthagene-landing"],
  ["rajhi-ferjani-trade-landing", "Corporate trade website for Rajhi & Ferjani.", "JavaScript", "https://github.com/SEIF0708/rajhi-ferjani-trade-landing"],
];

export const open = [
  ["Software Engineering", "Full-stack, frontend or software engineering roles where I can continue developing strong engineering fundamentals."],
  ["Digital Projects", "Websites, SaaS products, automation and digital solutions for businesses."],
  ["B2B Collaboration", "Partnerships and commercial opportunities involving technology, suppliers, buyers or digital services."],
];

export const reasons = ["Software Engineering", "Digital Project", "B2B Partnership", "Business Opportunity", "Other"];
