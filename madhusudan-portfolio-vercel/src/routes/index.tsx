import { createFileRoute } from "@tanstack/react-router";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madhusudan Sharma — QA Engineer Portfolio" },
      {
        name: "description",
        content:
          "Quality Assurance Engineer with 2.6+ years of experience in manual, mobile, API, performance and automation testing across web, Android and iOS platforms.",
      },
      { property: "og:title", content: "Madhusudan Sharma — QA Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio showcasing manual, mobile, API, performance and automation testing experience for CG Tourism, IIRS Expo 2026, Rice Mill ERP and more.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const stats = [
  { value: "2.6+", label: "Years in QA" },
  { value: "3", label: "Organizations" },
  { value: "5", label: "Major projects" },
  { value: "Web + Mobile", label: "Android & iOS" },
];

const experience = [
  {
    company: "Klaimify Private Limited",
    role: "Quality Assurance Engineer",
    period: "July 2025 – Present",
    points: [
      "Execute end-to-end manual testing to identify defects and validate application quality before release.",
      "Test mobile applications on Android and iOS, ensuring consistent functionality and user experience.",
      "Build and maintain automation suites to expand regression coverage and reduce release cycle time.",
      "Prepare clear, detailed test reports that track defect trends and communicate progress to stakeholders.",
      "Validate ERPNext modules and workflows, including custom reports, data migration and booking transactions.",
    ],
  },
  {
    company: "Ace Technosys",
    role: "Quality Assurance Engineer",
    period: "March 2025 – May 2025",
    points: [
      "Performed manual testing to catch functional defects and support release readiness during the internship.",
      "Validated mobile application features across devices to confirm stable end-user experience.",
      "Executed test cases, logged defects and collaborated with the team to improve product quality.",
    ],
  },
  {
    company: "NxtBigByte Solution Pvt Ltd",
    role: "Software Tester",
    period: "September 2023 – December 2024",
    points: [
      "Conducted manual and automated testing for web and mobile apps on Android and iOS.",
      "Ran functional, regression, API, performance and load tests using JMeter, Locust, Appium (Python) and Selenium WebDriver.",
      "Authored test plans, test cases and automation scripts to achieve broad feature coverage.",
      "Tracked and reported defects while working closely with developers to drive timely resolutions.",
      "Improved application stability and user experience through continuous, iterative testing.",
    ],
  },
];

const projects = [
  {
    name: "CG Tourism",
    org: "Klaimify Private Limited",
    link: "https://tourism.cgstate.gov.in",
    tags: ["Manual", "Automation", "CI/CD", "Allure", "ERPNext"],
    points: [
      "Led end-to-end manual and automation testing for the CG Tourism web platform.",
      "Validated the complete booking journey from login through hotel selection to payment gateway.",
      "Covered every Book Now category: CTB Properties, Register with Us, Tour Operator and Homestays.",
      "Tested the Android and iOS apps for functional consistency and user experience.",
      "Generated Allure execution reports for clear visibility into test results and trends.",
      "Set up a YAML-based CI/CD pipeline to trigger automated tests on every code push.",
      "Verified ERPNext admin workflows, including booking and transaction reporting.",
    ],
  },
  {
    name: "IIRS Expo 2026 (TREACG)",
    org: "Klaimify Private Limited",
    link: "https://treacg.in",
    tags: ["Manual", "Automation", "Responsive"],
    points: [
      "Performed end-to-end manual and automation testing for the event registration portal.",
      "Validated registration flows and form validations to ensure accurate data capture.",
      "Checked functionality and responsiveness across desktop, tablet and mobile devices.",
      "Logged, tracked and reported defects to deliver a smooth registration experience.",
    ],
  },
  {
    name: "Rice Mill ERP System",
    org: "Klaimify Private Limited",
    tags: ["ERPNext", "Role-based access", "Data migration", "Reports"],
    points: [
      "Tested the complete purchase workflow: APO → Delivery Note → Gate Entry → Weighment Entry → Quality Check → Procurement Receipt.",
      "Verified role-based access and permissions to enforce proper data security.",
      "Supported Tally to ERPNext data migration and validated record accuracy.",
      "Built custom reports: Delivery Note, Item-wise Sales/Purchase Register, Miller Brokerage and Delivery Note Summary.",
      "Provided accounting-module support to keep financial workflows aligned with business logic.",
    ],
  },
  {
    name: "Online Bidding Application",
    org: "Ace Technosys",
    tags: ["Manual", "Form validation"],
    points: [
      "Carried out end-to-end manual testing for an online profile-bidding platform.",
      "Validated the flow from profile creation through registration, login and bidding.",
      "Checked registration and login forms for validation rules and data accuracy.",
      "Reported defects and verified fixes to ensure a reliable bidding experience.",
    ],
  },
  {
    name: "School Management System",
    org: "NxtBigByte Solution Pvt Ltd",
    tags: ["Appium", "Selenium", "JMeter", "Locust", "API"],
    points: [
      "Tested Staff, Guardian, User, Transport, Fees, Events and Reports modules across web and mobile.",
      "Ran functional, regression, API, performance and load tests to confirm system reliability.",
      "Automated Android, iOS and web tests using Appium and Selenium WebDriver.",
      "Validated role-based permissions for staff, guardians, students and administrators.",
      "Verified payment gateway integration for fee transactions and report generation.",
      "Executed load tests with JMeter and Locust to analyse behaviour under high traffic.",
    ],
  },
];

const skills = [
  {
    group: "Manual & Automation Testing",
    items: ["Functional Testing", "Regression Testing", "UI/UX Testing", "End-to-End Testing", "Appium (Python)", "Selenium WebDriver", "Pytest"],
  },
  { group: "Mobile & API Testing", items: ["Android", "iOS", "Postman"] },
  { group: "Performance & Load", items: ["JMeter", "Locust"] },
  { group: "Reporting", items: ["Allure Reports", "Execution Summaries"] },
  { group: "CI/CD", items: ["YAML Pipelines", "Automated Test Runs"] },
  { group: "Test Management", items: ["Test Plans", "Test Cases", "Execution Tracking"] },
  { group: "Defect Tracking", items: ["Jira", "Trello", "ClickUp", "Excel"] },
  { group: "Version Control", items: ["Git", "GitHub"] },
  {
    group: "ERP",
    items: ["ERPNext Modules", "Admin Panel Testing", "Report Building", "Role-based Access", "Frappe Framework"],
  },
  { group: "Data & Support", items: ["Tally → ERPNext Migration", "Basic Accounting Support"] },
  { group: "Languages & Tools", items: ["Python", "Postman", "JMeter", "Locust"] },
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/8 font-display text-xs font-semibold text-primary">
        {index}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <span className="rule-soft h-px flex-1" />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
          <a href="#top" className="font-display text-base font-semibold tracking-tight">
            MS<span className="text-primary">.</span>qa
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-muted-foreground sm:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:text-foreground hover:after:w-full"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={resumeAsset.url}
            download
            className="rounded-lg bg-primary px-3.5 py-2 font-display text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Resume
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5">
        <section className="grid-bg relative -mx-5 overflow-hidden border-b border-border px-5 py-24 sm:py-32">
          <span className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <div className="tag tag-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Rewari, Haryana · India
            </div>
            <h1 className="gradient-text mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Madhusudan Sharma
            </h1>
            <p className="mt-4 font-display text-lg font-medium text-primary sm:text-xl">
              Quality Assurance Engineer
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Detail-oriented QA Engineer with 2.6+ years of experience delivering reliable software
              across web, Android and iOS platforms. Skilled in manual, mobile, API, performance and
              automation testing using Appium, Selenium, JMeter, Locust and ERPNext.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-primary px-6 py-2.5 font-display text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                View projects
              </a>
              <a
                href="mailto:madhusudan07.code@gmail.com"
                className="rounded-lg border border-border bg-card px-6 py-2.5 font-display text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary"
              >
                Get in touch
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="panel panel-hover p-5">
                  <dt className="font-display text-2xl font-semibold text-foreground">{s.value}</dt>
                  <dd className="mt-1.5 text-xs font-medium text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="about" className="border-b border-border py-20 sm:py-24">
          <SectionTitle index="01" title="About" />
          <div className="grid gap-7 md:grid-cols-3">
            <div className="panel panel-hover p-7 md:col-span-2">
              <p className="text-[15px] leading-7 text-muted-foreground">
                I make software releases predictable by writing clear test plans, running deep
                end-to-end passes across web and mobile, automating repeatable checks and keeping
                defect tracking transparent for the whole team. My recent work spans government
                tourism booking portals, event registration platforms and ERPNext-based ERP systems —
                including purchase workflows, role-based access and data migration.
              </p>
            </div>
            <div className="panel panel-hover p-7">
              <h3 className="font-display text-sm font-medium text-primary">Education</h3>
              <p className="mt-4 text-sm font-semibold text-foreground">Bachelor of Arts (B.A)</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Raj Rishi Bhartrihari Matsya University
              </p>
              <p className="mt-2 font-display text-xs font-medium text-muted-foreground">2023 – 2025</p>
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-border py-20 sm:py-24">
          <SectionTitle index="02" title="Experience" />
          <div className="space-y-6">
            {experience.map((job) => (
              <article key={job.company} className="panel panel-hover relative overflow-hidden p-7 sm:p-8">
                <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-primary to-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                    <p className="mt-0.5 text-sm font-medium text-accent">{job.company}</p>
                  </div>
                  <span className="tag">{job.period}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="border-b border-border py-20 sm:py-24">
          <SectionTitle index="03" title="Projects" />
          <div className="space-y-6">
            {projects.map((project) => (
              <article key={project.name} className="panel panel-hover p-7 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-display text-xs font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {project.link.replace("https://", "")} ↗
                    </a>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{project.org}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="tag tag-accent">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-3">
                  {project.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-b border-border py-20 sm:py-24">
          <SectionTitle index="04" title="Skills" />
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="panel panel-hover p-6 sm:p-7">
                <h3 className="flex items-center gap-2 font-display text-sm font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {s.group}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="tag">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 sm:py-24">
          <SectionTitle index="05" title="Contact" />
          <div className="panel grid gap-7 p-7 sm:grid-cols-2 sm:p-8">
            <a href="mailto:madhusudan07.code@gmail.com" className="group rounded-lg border border-border p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary">
              <p className="font-display text-xs font-medium text-muted-foreground">Email</p>
              <p className="mt-2 text-sm font-semibold text-foreground group-hover:text-primary">madhusudan07.code@gmail.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/madhusudan-sharma-7a85262b6/"
              target="_blank"
              rel="noreferrer noopener"
              className="group rounded-lg border border-border p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary"
            >
              <p className="font-display text-xs font-medium text-muted-foreground">LinkedIn</p>
              <p className="mt-2 text-sm font-semibold text-foreground group-hover:text-primary">madhusudan-sharma ↗</p>
            </a>
          </div>
          <a
            href={resumeAsset.url}
            download
            className="mt-10 inline-flex rounded-lg border border-border bg-card px-6 py-3 font-display text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary"
          >
            Download resume (PDF)
          </a>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <p className="mx-auto max-w-5xl px-5 font-display text-xs font-medium text-muted-foreground">
          © {new Date().getFullYear()} Madhusudan Sharma — QA Engineer
        </p>
      </footer>
    </div>
  );
}
