import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";
import { ArticleRating } from "@/components/site/article-rating";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/tax-accounting-service";
const OG_IMAGE = "/tax-accounting-service.jpg";
const TITLE = "Professional, reputable, low-cost, full-package tax accounting service";
const DESCRIPTION =
  "Full-package tax accounting services help businesses save costs while keeping records compliant with the law. Explore what is included, pricing, benefits and the workflow of TAF's tax accounting service.";

export const Route = createFileRoute("/tax-accounting-service")({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "tax accounting service, full accounting service, accounting services in Ho Chi Minh City, outsourced accounting, tax reporting service, TAF",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PATH },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          image: `${SITE_ORIGIN}${OG_IMAGE}`,
          author: { "@type": "Organization", name: "TAF Audit Consulting Company Limited" },
          publisher: { "@type": "Organization", name: "TAF" },
          mainEntityOfPage: `${SITE_ORIGIN}${PATH}`,
        }),
      },
    ],
  }),
  component: ArticlePage,
});

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";

const TOC: { id: string; label: string }[] = [
  { id: "what", label: "What are accounting services?" },
  { id: "why", label: "Why do businesses need full-package tax accounting?" },
  { id: "conditions", label: "Conditions for practicing accounting services" },
  { id: "included", label: "What TAF's full tax accounting service includes" },
  { id: "pricing", label: "Price list for full accounting services at TAF" },
  { id: "benefits", label: "Benefits of using TAF's accounting services" },
  { id: "who", label: "Who should use tax accounting services?" },
  { id: "workflow", label: "TAF workflow" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "conclusion", label: "Conclusion" },
];

const PRICE_TRADE: [string, string][] = [
  ["No transactions arise", "300,000"],
  ["Under 10 documents", "500,000 – 800,000"],
  ["11 – 22 documents", "800,000 – 1,100,000"],
  ["21 – 30 documents", "1,100,000 – 1,400,000"],
  ["31 – 50 documents", "1,400,000 – 1,700,000"],
  ["51 – 70 documents", "1,700,000 – 2,000,000"],
  ["71 – 100 documents", "2,000,000 – 2,300,000"],
  ["101 – 150 documents", "2,300,000 – 2,900,000"],
  ["151 – 200 documents", "2,900,000 – 3,300,000"],
  ["Over 200 documents", "Two-party agreement"],
];

const PRICE_BUILD: [string, string][] = [
  ["No transactions arise", "300,000"],
  ["Under 10 documents", "600,000 – 900,000"],
  ["11 – 22 documents", "900,000 – 1,200,000"],
  ["21 – 30 documents", "1,200,000 – 1,500,000"],
  ["31 – 50 documents", "1,500,000 – 1,800,000"],
  ["51 – 70 documents", "1,800,000 – 2,100,000"],
  ["71 – 100 documents", "2,100,000 – 2,600,000"],
  ["101 – 150 documents", "2,600,000 – 3,100,000"],
  ["151 – 200 documents", "3,100,000 – 3,600,000"],
  ["Over 200 documents", "Two-party agreement"],
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Does TAF's full accounting service work nationwide?",
    a: "Yes. TAF provides full accounting services nationwide. No matter which province or city your company is located in, please contact us for specific advice and the most suitable cooperation plan.",
  },
  {
    q: "Is there a contract commitment when using the service?",
    a: "Yes. Customers sign a commitment contract that is agreed between both parties to comply with the law, on time and to standards. The contract includes penalty clauses in case of errors; TAF has legal status and bears responsibility based on the terms of the contract.",
  },
  {
    q: "Does a company with no VAT invoices still have to file tax reports?",
    a: "Yes. According to the law, whether or not invoices are issued, businesses must still submit tax reports and financial reports.",
  },
  {
    q: "Do I need a digital signature to use the service?",
    a: "Yes. Businesses are required to use a digital signature to declare business information, financial reports, taxes and to keep records.",
  },
  {
    q: "After hiring the service, do I still need an internal accountant?",
    a: "Not necessarily. A full accounting service can take care of the work of the internal accounting department, allowing the company to focus on developing its business activities.",
  },
];

function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="t-h2 md:text-[1.9rem] text-foreground mt-12 mb-4 scroll-mt-24"
    >
      {children}
    </h2>
  );
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="t-h3 text-foreground mt-7 mb-2.5">{children}</h3>;
}
function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-[1.0625rem] text-foreground/85 font-serif leading-[1.75] mb-4">{children}</p>
  );
}
function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="my-5 space-y-2.5">
      {items.map((it, i) => (
        <li
          key={i}
          className="text-[1.0625rem] text-foreground/85 font-serif leading-relaxed flex gap-3 before:content-['—'] before:text-accent-foreground before:shrink-0"
        >
          {it}
        </li>
      ))}
    </ul>
  );
}
function PriceTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="my-5 border border-border rounded-[2px] overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoices / month (input + output)</TableHead>
            <TableHead className="text-right">Price (VND)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(([k, v]) => (
            <TableRow key={k}>
              <TableCell className="font-medium text-foreground">{k}</TableCell>
              <TableCell className="text-right">{v}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function ArticlePage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Tin tức", to: "/tin-tuc" }, { label: "Tax accounting service" }]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Resources · TAF</Eyebrow>
          <h1 className="t-h2 md:text-[2.6rem] text-foreground">
            Professional, reputable, low-cost, full-package tax accounting service
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="text-accent-foreground" /> Updated 2026
            </span>
            <span className="h-3 w-px bg-border" />
            <span>By the TAF team</span>
          </div>
        </div>
        {/* Cover image — right under the title */}
        <div className="max-w-3xl mt-6">
          <img
            src={OG_IMAGE}
            alt="Professional, reputable, low-cost, full-package tax accounting service - TAF"
            width={1280}
            height={720}
            className="w-full rounded-[3px] border border-border"
          />
        </div>
        <div className="max-w-3xl">
          <div className="rule-gold mt-8" />
        </div>
      </Section>

      <Section className="!pt-0">
        <article className="max-w-3xl">
          {/* Intro */}
          <P>
            Keeping accounting records accurate and compliant is a constant challenge for many
            companies, especially newly established or small businesses with limited resources. A{" "}
            <strong className="font-medium text-foreground">full-package tax accounting service</strong>{" "}
            is a practical solution that helps businesses save costs while ensuring documents comply
            with legal regulations. With experience working alongside thousands of large and small
            companies, TAF provides professional, reputable and reasonably priced accounting
            services. This article explains what accounting services are, why your business may need
            them, what is included, the indicative pricing and the workflow — so you can decide on
            the solution that best fits your real needs.
          </P>

          {/* Mục lục */}
          <nav aria-label="Table of contents" className="my-8 rounded-[3px] border border-border bg-cream/50 p-5">
            <p className="t-cta flex items-center gap-2 font-bold text-accent-foreground mb-3">
              <ListTree size={15} className="text-brand-red" /> Table of contents
            </p>
            <ol className="space-y-1.5">
              {TOC.map((t, i) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="inline-flex gap-2 text-sm text-foreground/80 hover:text-brand-red-ink transition-colors"
                  >
                    <span className="font-mono text-xs text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* 1 */}
          <H2 id="what">What are accounting services?</H2>
          <P>
            Accounting plays an important role in companies — managing revenues and expenditures,
            handling taxes, preparing financial reports and completing related legal documents. At
            large enterprises, this is built into a dedicated department. For newly established or
            small companies with few invoices, however, hiring full-time accounting staff can be
            costly. A full accounting service meets the needs of an in-house accountant at a much
            lower cost.
          </P>

          {/* 2 */}
          <H2 id="why">Why do businesses need full-package tax accounting?</H2>
          <P>Outsourcing tax accounting brings several practical advantages:</P>
          <Bullets
            items={[
              "Cost savings: avoid the full salary of in-house staff plus investment in machinery, equipment and accounting software.",
              "Professional operations: experienced specialists handle complex paperwork accurately and in compliance with the law.",
              "No interruptions: the process of completing paperwork and tax declarations is not disrupted by staff turnover.",
              "Financial risk monitoring: based on periodic reports, the team can monitor your financial situation and flag potential risks.",
            ]}
          />

          {/* 3 */}
          <H2 id="conditions">Conditions for practicing accounting services</H2>
          <P>
            Under the Accounting Law 2015 and Circular 296/2016/TT-BTC of the Ministry of Finance
            (effective 1 January 2017), the conditions for practicing accounting services include:
          </P>
          <Bullets
            items={[
              "Holding an accountant certificate or auditor certificate in accordance with the Law on Independent Auditing.",
              "Having full civil act capacity.",
              "Having practical experience in finance, accounting or auditing for 36 months or more after graduating from university.",
              "Fully participating in the required knowledge-update program.",
            ]}
          />

          {/* 4 */}
          <H2 id="included">What TAF's full tax accounting service includes</H2>
          <H3>Full tax accounting</H3>
          <Bullets
            items={[
              "Prepare complete corporate/individual tax documents.",
              "Advise on and notify invoice issuance.",
              "Prepare and pay taxes monthly, quarterly and annually in accordance with the law.",
              "Build a system to control and store internal information.",
              "Support explanations before the authorities when required.",
            ]}
          />
          <H3>Accounting and document completion</H3>
          <P>
            TAF prepares periodic financial reports, maintains internal records, and completes
            reporting procedures and submissions in accordance with state regulations — including
            printing, binding and storing accounting books.
          </P>

          {/* 5 */}
          <H2 id="pricing">Price list for full accounting services at TAF</H2>
          <P>
            Indicative pricing is based on the number of invoices per month. Fees below exclude
            taxes, VAT and statutory fees payable to the state, and may change for companies with
            import–export activities or foreign investment.
          </P>
          <H3>Commercial and service industries</H3>
          <PriceTable rows={PRICE_TRADE} />
          <H3>Manufacturing and construction industries</H3>
          <PriceTable rows={PRICE_BUILD} />

          {/* 6 */}
          <H2 id="benefits">Benefits of using TAF's accounting services</H2>
          <Bullets
            items={[
              "Cost optimization: service packages are divided by workload so you only pay for what you need.",
              "Fast and effective: documents and tax items are received, processed and completed accurately and on time.",
              "A representative that understands the law: TAF can work directly with tax authorities to protect your legal rights when issues arise.",
              "Complete records for tax finalization: documents are prepared and stored, ready for inspection or declaration at any time, with strong confidentiality.",
              "Insurance support: TAF advises on mandatory insurance declarations (social, health, unemployment) and completes related paperwork.",
            ]}
          />
          <P>
            For full-package accounting tailored to your operations, you can refer to TAF's{" "}
            <Link
              to="/dich-vu-ke-toan-tron-goi-tphcm"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              full-package accounting service
            </Link>
            .
          </P>

          {/* 7 */}
          <H2 id="who">Who should use tax accounting services?</H2>
          <Bullets
            items={[
              "Newly established companies that do not yet have an accountant and need a quick, reliable solution.",
              "Small and medium-sized companies with few documents that want to save on fees while staying compliant.",
              "Business owners who are not familiar with accounting procedures or unsure how to evaluate an accountant's capability.",
              "Businesses that want to restructure their accounting system while resolving previous outstanding issues.",
            ]}
          />
          <P>
            Household businesses also have legal obligations similar to companies. For this group,
            TAF offers dedicated{" "}
            <Link
              to="/dich-vu-ke-toan-thue-cho-ho-kinh-doanh"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              accounting services for business households
            </Link>{" "}
            covering bookkeeping, tax declaration and related tasks.
          </P>

          {/* 8 */}
          <H2 id="workflow">TAF workflow</H2>
          <Bullets
            items={[
              "Step 1 — Receive documents: requests are received via phone, email or website; a consultant then contacts you to discuss in detail.",
              "Step 2 — Survey and quote: understand the company's situation and provide a preliminary quote and service terms.",
              "Step 3 — Sign the contract: both parties' legal representatives sign after agreeing on all items.",
              "Step 4 — Deploy and report: the accountant reviews documents and data, resolves issues and exchanges regularly with the business.",
              "Step 5 — Store records: set up and store records on accounting software.",
            ]}
          />

          {/* 9 */}
          <H2 id="faq">Frequently asked questions</H2>
          <Accordion type="single" collapsible className="border-t border-border">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="font-display text-base md:text-lg text-foreground py-5 text-left">
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="t-body text-foreground/80 pl-10 pr-2">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Slogan */}
          <p className="t-h3 my-10 text-center md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Conclusion */}
          <H2 id="conclusion">Conclusion</H2>
          <P>
            A professional, full-package tax accounting service helps businesses stay compliant,
            control costs and avoid disruptions — while freeing the team to focus on growth. Choosing
            an experienced provider with a clear price list, proper licensing and strong
            confidentiality commitments makes all the difference.
          </P>
          <P>
            Contact TAF today for advice on the solution that best fits your business needs.
          </P>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/lien-he"
              className="group inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all"
            >
              <span className="uppercase tracking-[0.14em]">Contact us now</span>
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={`tel:${HOTLINE_TEL}`}
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:border-accent transition"
            >
              <Phone size={16} /> Hotline / Zalo · {HOTLINE_DISPLAY}
            </a>
          </div>

          {/* Footer */}
          <div className="mt-10 rounded-[3px] border border-border bg-primary text-primary-foreground p-6 md:p-7">
            <p className="font-display text-lg text-primary-foreground">
              TAF AUDIT CONSULTING COMPANY LIMITED
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/85 font-serif">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                Head office: 62A Pham Ngoc Thach, Xuan Hoa Ward, Ho Chi Minh City
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-accent shrink-0" />
                Hotline / Zalo:{" "}
                <a href={`tel:${HOTLINE_TEL}`} className="hover:text-accent transition-colors">
                  {HOTLINE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-accent shrink-0" />
                Email:{" "}
                <a href="mailto:info@taf.vn" className="hover:text-accent transition-colors">
                  info@taf.vn
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={16} className="text-accent shrink-0" />
                Website: taf.vn
              </li>
            </ul>
          </div>
        </article>
      </Section>

      <ArticleRating title={TITLE} slug="tax-accounting-service" />
      <RelatedArticles currentHref={PATH} />
    </>
  );
}
