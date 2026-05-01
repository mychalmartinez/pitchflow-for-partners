// Pitchflow for Partners. Brand-Agnostic Pitch Page Template.
// Single-file React artifact. Tailwind core utilities only. No required props.
// Every visible element traces to a CMS field (annotated inline).
// Every themed element traces to a brand color token (CSS variable).

const PITCH_PAGE = {
  // CMS: Pitch Pages → Brand Logo (Image, 240×80 max, transparent SVG/PNG)
  brandLogo: null,
  // CMS: Pitch Pages → Hero Image (Image, 1920×1080, JPG/WebP)
  heroImage: null,
  // CMS: Pitch Pages → Document Title (Generated). Per canonical: built from Brand Name at hydration time. Format: "[Brand Name] x Webflow Enterprise, Executive Brief".
  documentTitle: "[Brand Name] × Webflow Enterprise, Executive Brief",
  // CMS: Pitch Pages → Hero Headline (PlainText, max 200)
  heroHeadline: "[Brand achievement headline that respects the brand's current moment]",
  // CMS: Pitch Pages → Hero Subhead (RichText, max 600). Three-clause structure naming one specific platform from brand stack and Webflow Enterprise's structural role.
  heroSubhead:
    "[Brand] is [doing X, the transformation underway]; their [specific platform from current stack] handles [Y, the layer that stays]; Webflow Enterprise [closes Z, the structural gap], at the pace [Brand]'s growth demands.",
  // CMS: Pitch Pages → Hero Metric 1 Value/Label (static, AEO score)
  heroMetric1: { value: "3 / 5", label: "[AEO Maturity Score]" },
  // CMS: Pitch Pages → Hero Metric 2 Value/Label
  heroMetric2: { value: "[##M]", label: "[Brand-specific stat label]" },
  // CMS: Pitch Pages → Hero Metric 3 Value/Label
  heroMetric3: { value: "[$#B]", label: "[Brand-specific stat label]" },

  // CMS: Pitch Pages → Strategic Case (RichText, max 800). Four sentences in locked order.
  strategicCase:
    "[Sentence 1, names brand ambition: what the brand is building toward and why it matters now.] [Sentence 2, names the gap between that ambition and current digital infrastructure, in concrete terms.] [Sentence 3, names Webflow Enterprise's role in closing the gap, framed as structural, not incremental.] [Sentence 4, names the agency's role in delivering it, peer-to-peer, no pitch tone.]",

  // CMS: Pitch Pages → AEO Score (Number 1-5)
  aeoScore: 3,
  // CMS: Pitch Pages → AEO Framing (PlainText, max 200)
  aeoFraming:
    "[Brand] scores [N] of 5 on AEO maturity today; the gaps are concrete, named, and solvable on Webflow Enterprise before [the brand's named milestone].",
  // CMS: Pitch Pages → AEO Priority 1/2/3 (PlainText, max 200 each)
  aeoPriorities: [
    "[Priority 1, the highest-severity AEO gap with a concrete what-to-do].",
    "[Priority 2, the second-highest-severity gap, brand-specific].",
    "[Priority 3, the third-highest-severity gap, brand-specific].",
  ],
  // CMS: Pitch Pages → Signal 1/2/3 Value & Label
  signals: [
    { value: "[##]", label: "[Business signal label that names what it counts]" },
    { value: "[##%]", label: "[Business signal label that names what it counts]" },
    { value: "[##]", label: "[Business signal label, optional]" }, // Signal 3 optional
  ],

  // CMS: Pitch Pages → Why Agency Framing (PlainText, max 200)
  whyAgencyFraming:
    "[One sentence framing the agency as a Webflow Enterprise partner with a track record relevant to the brand's category.]",

  // CMS: Pitch Pages → CTA Headline (PlainText, max 120)
  ctaHeadline: "[We'd love to explore what's possible together]",
  // CMS: Pitch Pages → CTA Framing (PlainText, max 200)
  ctaFraming:
    "[One-sentence brand-moment line that closes the loop on the strategic case without urgency-pressure language.]",

  // CMS: Pitch Pages → Brand Color Primary / Accent / Dark (Color)
  // Light is a system token; primary/accent/dark hydrate per pitch.
  // Defaults below are deliberately neutral; real values come from the Pitch Pages CMS color fields.
};

const AGENCY = {
  // CMS: Agencies → Name (built-in PlainText)
  name: "[Agency Name]",
  // CMS: Agencies → Logo (Image, 120×32 max, SVG)
  logo: null,
  // CMS: Agencies → Footer Logo (Image, 60×16 max, SVG)
  footerLogo: null,
  // CMS: Agencies → Website URL (Link)
  websiteUrl: "#",
  // CMS: Agencies → Stat 1-5 Value & Label
  stats: [
    { value: "[###]", label: "[Specialists]" },
    { value: "[###]", label: "[Clients]" },
    { value: "[###]", label: "[Projects]" },
    { value: "[##]", label: "[Years]" },
    { value: "[Distinguishing fact]", label: "[Stat label]" },
  ],
  // CMS: Agencies → Pillar 1-4 Title & Body
  pillars: [
    {
      title: "[Capability pillar title]",
      body: "[Pillar paragraph naming what the agency does and the proof point that makes it credible to this brand.]",
    },
    {
      title: "[Capability pillar title]",
      body: "[Pillar paragraph naming what the agency does and the proof point that makes it credible to this brand.]",
    },
    {
      title: "[Capability pillar title]",
      body: "[Pillar paragraph naming what the agency does and the proof point that makes it credible to this brand.]",
    },
    {
      title: "[Capability pillar title]",
      body: "[Pillar paragraph naming what the agency does and the proof point that makes it credible to this brand.]",
    },
  ],
  // CMS: Agencies → CTA Descriptor (RichText)
  ctaDescriptor:
    "[One-sentence agency credentials line that earns the conversation without overclaiming.]",
  // CMS: Agencies → CTA URL (Link)
  ctaUrl: "#",
};

// CMS: Brand Leaders (MultiReference from Pitch Pages → max 3)
// Composition rule: Slot 1 carries CTO where tech decision is in scope. Slot 2 carries growth/brand/content. Slot 3 flexible.
const BRAND_LEADERS = [
  {
    // Brand Leaders → Name (built-in)
    name: "[Executive Name]",
    // Brand Leaders → Title
    title: "[Chief Technology Officer]",
    // Brand Leaders → Mandate Label
    mandateLabel: "[Stack Decision · Platform Fit]",
    // Brand Leaders → Outcome (RichText). Mandate-to-Webflow connection.
    outcome:
      "[Names the CTO's mandate in this brand's current moment, names the technical reality of full stack acknowledgment, and names how Webflow Enterprise complements the existing infrastructure rather than replacing it.]",
    // Brand Leaders → Order
    order: 1,
    // Brand Leaders → Role Type (Option)
    roleType: "CTO",
  },
  {
    name: "[Executive Name]",
    title: "[Chief Marketing Officer or Head of Growth]",
    mandateLabel: "[Growth · Brand Velocity]",
    outcome:
      "[Names the growth/brand mandate in this brand's current moment and names how Webflow Enterprise removes the bottleneck between marketing intent and live publishing.]",
    order: 2,
    roleType: "Growth",
  },
  {
    name: "[Executive Name]",
    title: "[Chief Content Officer or Digital Leader]",
    mandateLabel: "[Content · AI Discoverability]",
    outcome:
      "[Names the content/digital mandate in this brand's current moment and names how Webflow Enterprise turns publishing cadence into AI-cited authority at scale.]",
    order: 3,
    roleType: "Content",
  },
];

// CMS: Capability Cards (MultiReference from Pitch Pages → max 3)
// Skill picks 3 of 5 service lines based on brand's ranked 2026 priorities.
// Every card opens "With [Agency Name] and Webflow, we…"
const CAPABILITY_CARDS = [
  {
    // Capability Cards → Title
    title: "AI-Cited Authority at Scale",
    // Capability Cards → Service Line (Option)
    serviceLine: "Content",
    // Capability Cards → Priority Tag (PlainText). Pulled from brand 2026 goals.
    priorityTag: "[Brand priority pulled from 2026 goals]",
    // Capability Cards → Order
    order: 1,
    // Capability Cards → Today (RichText)
    today:
      "AI engines default to third-party sources for [Brand]'s [named growth stories: new format stores, delivery, loyalty]; their current [named CMS in stack] publishes through engineering, so AEO-critical content lags the news cycle.",
    // Capability Cards → With Agency (RichText). Must open with "With [Agency Name] and Webflow, we…".
    withAgency: `With ${AGENCY.name} and Webflow, we [build the content architecture that moves AEO from current score toward 5/5: structured FAQs, schema-tagged content, and a publishing cadence the brand's growth pace demands].`,
    // Capability Cards → Bullet 1/2/3 (PlainText, brand-specific outcomes)
    bullets: [
      "[Outcome bullet, schema-tagged content for every growth vector]",
      "[Outcome bullet, brand becomes the AI-cited authority in its category]",
      "[Outcome bullet, content freshness signals to AI crawlers, named cadence]",
    ],
    // Capability Cards → Feature 1/2/3 (canonical names from llms.txt)
    features: ["CMS", "Edit Mode", "AI Assistant"],
  },
  {
    title: "Immersive, Conversion-Optimized Experiences",
    serviceLine: "Mixed Media",
    priorityTag: "[Brand priority pulled from 2026 goals]",
    order: 2,
    today:
      "[Brand]'s [named flagship format] is delivering [named lift], yet the digital announcement layer is static; engineers absorb routine builds while marketers wait, and neither team is winning.",
    // This is the redeployment-framing card per voice rule 4.
    withAgency: `With ${AGENCY.name} and Webflow, we [design interactive experiences with native Webflow animations; engineers freed from routine builds, marketers faster on launch, both teams winning].`,
    bullets: [
      "[Outcome bullet, templatized launch pages at the brand's stated cadence]",
      "[Outcome bullet, interactive, conversion-tested experiences across audiences]",
      "[Outcome bullet, speed-to-impact: marketing publishes without engineering]", // velocity rule
    ],
    features: ["Interactions & Animations", "Page Building", "Hosting"],
  },
  {
    title: "Winning the AI Search Battle vs. [Competitor]",
    serviceLine: "SEO and AEO",
    priorityTag: "[Brand priority pulled from 2026 goals]",
    order: 3,
    today:
      "Schema is incomplete across [Brand]'s site, and [Competitor 1] and [Competitor 2] are filling the AI search vacuum on the highest-intent [category] queries.",
    withAgency: `With ${AGENCY.name} and Webflow, we [run continuous technical SEO, schema maintenance, and closed-loop AEO measurement tying AI discovery to the brand's named conversion event].`,
    bullets: [
      "[Outcome bullet, first LLM revenue attribution for the brand's growth motion]",
      "[Outcome bullet, continuous schema optimization across all pages]",
      "[Outcome bullet, closed-loop: AI discovery → conversion → revenue]",
    ],
    features: ["SEO", "Analyze", "Design"],
  },
];

// Section 6. Canonical 12 chips (exact names from canonical reference).
const CAPABILITY_CHIPS = [
  "CMS",
  "Optimize",
  "Analyze",
  "Localization",
  "SEO",
  "Shared Libraries",
  "Interactions & Animations",
  "Page Building",
  "Collaboration",
  "Edit Mode",
  "AI Assistant",
  "Hosting",
];

// Section 9. Security cert band (canonical reference, refreshed quarterly from webflow-security-certs.json).
const SECURITY_CERTS = ["SOC 2 Type II", "GDPR", "ISO 27001", "ISO 27017", "ISO 27018"];

// ---------- Components ----------

const BrandStripe = ({ size = "lg" }) => {
  const h = size === "lg" ? "h-[3px] w-9" : "h-[2px] w-6";
  return (
    <div className="flex gap-[3px]">
      <span className={`${h} rounded-sm`} style={{ background: "var(--color-brand-accent)" }} />
      <span className={`${h} rounded-sm`} style={{ background: "var(--color-brand-dark)" }} />
      <span className={`${h} rounded-sm`} style={{ background: "var(--color-brand-primary)" }} />
    </div>
  );
};

const SectionLabel = ({ children, onDark = false }) => (
  <span
    className="inline-block text-[10.5px] font-bold uppercase tracking-[0.2em] mb-2.5"
    style={{ color: onDark ? "var(--color-brand-primary)" : "var(--color-brand-primary)" }}
  >
    {children}
  </span>
);

const PlaceholderImage = ({ label, ratio = "16 / 9", className = "", onDark = false }) => (
  <div
    className={`relative overflow-hidden ${className}`}
    style={{
      aspectRatio: ratio,
      background: onDark
        ? "repeating-linear-gradient(135deg, #2a2a2e 0 12px, #1f1f23 12px 24px)"
        : "repeating-linear-gradient(135deg, var(--color-neutral-100) 0 12px, var(--color-neutral-200) 12px 24px)",
    }}
  >
    <div
      className="absolute inset-0 flex items-center justify-center font-mono text-[11px] uppercase tracking-wider"
      style={{ color: onDark ? "rgba(255,255,255,0.4)" : "var(--color-neutral-600)" }}
    >
      {label}
    </div>
  </div>
);

// PlaceholderLogoBox: w/h are numbers (CSS px); pass numeric values only.
const PlaceholderLogoBox = ({ label, w = 160, h = 40, onDark = false }) => (
  <div
    className="flex items-center justify-center rounded-sm font-mono text-[9.5px] uppercase tracking-wider"
    style={{
      width: w,
      height: h,
      background: onDark ? "rgba(255,255,255,0.04)" : "var(--color-neutral-100)",
      border: onDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--color-neutral-200)",
      color: onDark ? "rgba(255,255,255,0.45)" : "var(--color-neutral-600)",
    }}
  >
    {label}
  </div>
);

// Section 1. Nav.
const Nav = () => (
  <nav
    className="fixed top-0 left-0 right-0 z-50 px-10 h-[58px] flex items-center justify-between"
    style={{
      background: "rgba(20,20,22,0.92)",
      backdropFilter: "blur(24px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}
  >
    <div className="flex items-center gap-[18px]">
      {/* CMS: Reference Agencies → Logo (Image) */}
      <PlaceholderLogoBox label="agency logo" w={92} h={20} onDark />
      <div className="w-px h-[22px]" style={{ background: "rgba(255,255,255,0.12)" }} />
      {/* CMS: Pitch Pages → Document Title (Generated from Brand Name at hydration). */}
      <span className="text-[12px] font-medium tracking-[0.2px]" style={{ color: "rgba(255,255,255,0.8)" }}>
        {PITCH_PAGE.documentTitle}
      </span>
    </div>
    {/* CMS: Reference Agencies → Name → "Prepared by [Agency]" */}
    <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
      Prepared by {AGENCY.name}
    </div>
  </nav>
);

// Section 2. Hero.
const Hero = () => (
  <section className="hero-section relative min-h-[92vh] flex items-end overflow-hidden">
    {/* Solid dark fallback ensures legibility even before hero image hydrates */}
    <div className="absolute inset-0 z-0" style={{ background: "var(--color-brand-dark)" }} />
    {/* CMS: Pitch Pages → Hero Image (Image) */}
    <div className="absolute inset-0 z-0">
      <PlaceholderImage label="hero image · 1920×1080" className="w-full h-full hero-image-fill" onDark />
    </div>
    <div
      className="absolute inset-0 z-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(15,15,17,0.65) 0%, rgba(15,15,17,0.78) 45%, rgba(15,15,17,0.94) 80%, var(--color-brand-dark) 100%)",
      }}
    />
    <div className="hero-inner relative z-20 max-w-[1140px] mx-auto px-10 pb-[72px] w-full">
      {/* Brand stripe. Brand Accent / Brand Dark / Brand Primary. */}
      <div className="hero-stripe-wrap mb-7">
        <BrandStripe size="lg" />
      </div>
      {/* CMS: Pitch Pages → Brand Logo (Image, 240×80 max) */}
      <div className="hero-logo-wrap mb-6">
        <PlaceholderLogoBox label="brand logo" w={160} h={48} onDark />
      </div>
      {/* CMS: Pitch Pages → Hero Headline (PlainText, max 200) */}
      <h1
        className="font-extrabold leading-[1.12] max-w-[800px] mb-4 text-white"
        style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.4rem)" }}
      >
        {PITCH_PAGE.heroHeadline}
      </h1>
      {/* CMS: Pitch Pages → Hero Subhead (RichText, max 600) */}
      <p
        className="leading-[1.72] max-w-[660px] mb-11 font-normal"
        style={{
          color: "rgba(255,255,255,0.88)",
          fontSize: "clamp(0.92rem, 1.6vw, 1.05rem)",
        }}
      >
        {PITCH_PAGE.heroSubhead}
      </p>
      {/* CMS: Pitch Pages → Hero Metric 1/2/3 Value+Label */}
      <div className="hero-metrics grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[640px]">
        {[PITCH_PAGE.heroMetric1, PITCH_PAGE.heroMetric2, PITCH_PAGE.heroMetric3].map((m, i) => (
          <div
            key={i}
            className="rounded-[10px] px-[18px] py-4"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              className="text-[1.4rem] font-extrabold leading-[1.2]"
              style={{ color: "var(--color-brand-primary)" }}
            >
              {m.value}
            </div>
            <div
              className="text-[10.5px] mt-[3px] font-medium"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Section 2.5. Strategic Case.
const StrategicCase = () => (
  <section
    className="px-10"
    style={{
      paddingTop: "var(--space-section-y)",
      paddingBottom: "var(--space-section-y)",
      background: "var(--color-brand-light)",
    }}
  >
    <div className="max-w-[720px] mx-auto">
      {/* CMS: Pitch Pages → Strategic Case (RichText, max 800). Four-sentence locked structure. */}
      <p
        className="text-[1.05rem] leading-[1.8]"
        style={{ color: "var(--color-neutral-900)" }}
      >
        {PITCH_PAGE.strategicCase}
      </p>
    </div>
  </section>
);

// Section 3. Strategic Snapshot.
const ScoreRing = ({ value = 3, max = 5 }) => {
  const pct = (value / max) * 100;
  return (
    <div
      className="w-[110px] h-[110px] rounded-full flex items-center justify-center flex-shrink-0"
      style={{
        // Track uses neutral-200 (system token) by design: the inner circle is Brand Light,
        // so the unfilled track must NOT also be Brand Light or the ring loses its annular shape.
        // Outer track stays neutral so it contrasts with whatever Brand Light hydrates to.
        background: `conic-gradient(var(--color-brand-primary) 0% ${pct}%, var(--color-neutral-200) ${pct}% 100%)`,
      }}
    >
      <div
        className="w-[88px] h-[88px] rounded-full flex flex-col items-center justify-center"
        style={{ background: "var(--color-brand-light)" }}
      >
        <div className="text-[1.6rem] font-black leading-none" style={{ color: "var(--color-brand-dark)" }}>
          {value}
        </div>
        <div
          className="text-[10px] font-semibold uppercase tracking-wider mt-0.5"
          style={{ color: "var(--color-neutral-600)" }}
        >
          out of {max}
        </div>
      </div>
    </div>
  );
};

const StrategicSnapshot = () => (
  <section className="px-10" style={{ paddingTop: "var(--space-section-y)", paddingBottom: "var(--space-section-y)" }}>
    <div className="max-w-[1140px] mx-auto">
      <SectionLabel>AEO Assessment</SectionLabel>
      <BrandStripe size="sm" />
      <h2
        className="font-extrabold leading-[1.18] mb-3 mt-3"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", color: "var(--color-brand-dark)" }}
      >
        Where the brand stands today
      </h2>

      <div className="grid lg:grid-cols-[120px_1fr] gap-7 items-start mb-10 mt-8">
        {/* CMS: Pitch Pages → AEO Score (Number 1-5) */}
        <ScoreRing value={PITCH_PAGE.aeoScore} max={5} />
        <div>
          {/* CMS: Pitch Pages → AEO Framing (PlainText, max 200) */}
          <p
            className="text-[1rem] leading-[1.7] mt-2"
            style={{ color: "var(--color-neutral-900)" }}
          >
            {PITCH_PAGE.aeoFraming}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Priorities */}
        <div>
          <div
            className="text-[10.5px] font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--color-neutral-600)" }}
          >
            Top Priorities
          </div>
          <ol className="space-y-4">
            {/* CMS: Pitch Pages → AEO Priority 1, 2, 3 */}
            {PITCH_PAGE.aeoPriorities.map((p, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                  style={{
                    background: "var(--color-brand-accent)",
                    color: "white",
                  }}
                >
                  {i + 1}
                </span>
                <span className="text-[0.92rem] leading-[1.6]" style={{ color: "var(--color-neutral-900)" }}>
                  {p}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Business signals */}
        <div>
          <div
            className="text-[10.5px] font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--color-neutral-600)" }}
          >
            Business Signals
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* CMS: Pitch Pages → Signal 1/2/3 Value & Label (Signal 3 optional) */}
            {PITCH_PAGE.signals.map((s, i) => (
              <div
                key={i}
                className="p-5 rounded-[10px]"
                style={{
                  background: "var(--color-brand-light)",
                  border: "1px solid var(--color-neutral-200)",
                }}
              >
                <div
                  className="text-[1.5rem] font-black leading-[1.1]"
                  style={{ color: "var(--color-brand-dark)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[11px] mt-1.5 font-medium leading-[1.4]"
                  style={{ color: "var(--color-neutral-600)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Section 4. Leadership Mapped.
const LeaderCard = ({ leader }) => {
  const initials = "[XX]";
  return (
    <div
      className="p-6 rounded-[12px] transition-transform"
      style={{
        background: "white",
        border: "1px solid var(--color-neutral-200)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        {/* Generated avatar. Initials in branded circle. */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-extrabold text-[0.9rem] flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent))`,
          }}
        >
          {initials}
        </div>
        <div>
          {/* CMS: Brand Leaders → Name (built-in) */}
          <h4 className="text-[0.9rem] font-bold" style={{ color: "var(--color-brand-dark)" }}>
            {leader.name}
          </h4>
          {/* CMS: Brand Leaders → Title */}
          <div className="text-[0.72rem] leading-[1.35]" style={{ color: "var(--color-neutral-600)" }}>
            {leader.title}
          </div>
        </div>
      </div>
      {/* CMS: Brand Leaders → Mandate Label */}
      <div
        className="inline-block px-2 py-[3px] rounded-[5px] text-[9.5px] font-semibold mb-3"
        style={{
          background: "var(--color-brand-light)",
          color: "var(--color-brand-primary)",
          border: "1px solid var(--color-neutral-200)",
        }}
      >
        {leader.mandateLabel}
      </div>
      {/* CMS: Brand Leaders → Outcome (RichText) */}
      <p className="text-[0.82rem] leading-[1.65]" style={{ color: "var(--color-neutral-700)" }}>
        {leader.outcome}
      </p>
    </div>
  );
};

const LeadershipMapped = () => (
  <section
    className="px-10"
    style={{
      paddingTop: "var(--space-section-y)",
      paddingBottom: "var(--space-section-y)",
      background: "var(--color-brand-light)",
    }}
  >
    <div className="max-w-[1140px] mx-auto">
      <SectionLabel>Leadership Mapped</SectionLabel>
      <BrandStripe size="sm" />
      <h2
        className="font-extrabold leading-[1.18] mb-3 mt-3"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", color: "var(--color-brand-dark)" }}
      >
        Mapped to the brand's leadership mandates
      </h2>
      <p
        className="text-[0.95rem] leading-[1.7] max-w-[660px] mb-10"
        style={{ color: "var(--color-neutral-600)" }}
      >
        Every named executive has a mandate Webflow Enterprise directly serves.
      </p>
      {/* CMS: Pitch Pages → Brand Leaders (MultiReference, max 3) */}
      <div className="grid md:grid-cols-3 gap-3.5">
        {BRAND_LEADERS.map((l) => (
          <LeaderCard key={l.order} leader={l} />
        ))}
      </div>
    </div>
  </section>
);

// Section 5. What This Unlocks.
const CapabilityCard = ({ card, index }) => (
  <div
    className="p-6 rounded-[12px] flex flex-col"
    style={{
      background: "white",
      border: "1px solid var(--color-neutral-200)",
    }}
  >
    {/* Card number. Generated from Order. Color: Brand Primary per canonical color application map. */}
    <div
      className="text-[1.8rem] font-black leading-none mb-1"
      style={{ color: "var(--color-brand-primary)" }}
    >
      {String(index + 1).padStart(2, "0")}
    </div>
    {/* CMS: Capability Cards → Title */}
    <h3
      className="text-[1rem] font-extrabold mb-1.5"
      style={{ color: "var(--color-brand-dark)" }}
    >
      {card.title}
    </h3>
    {/* CMS: Capability Cards → Priority Tag */}
    <div
      className="inline-block self-start px-2 py-[3px] rounded-[5px] text-[9.5px] font-semibold mb-3"
      style={{
        background: "var(--color-brand-light)",
        color: "var(--color-brand-primary)",
      }}
    >
      {card.priorityTag}
    </div>

    {/* CMS: Capability Cards → Today */}
    <div
      className="text-[9.5px] font-bold uppercase tracking-[0.05em] mb-1"
      style={{ color: "var(--color-brand-accent)" }}
    >
      Today
    </div>
    <p className="text-[0.82rem] leading-[1.6] mb-3" style={{ color: "var(--color-neutral-600)" }}>
      {card.today}
    </p>

    {/* CMS: Capability Cards → With Agency. Must open with "With [Agency Name] and Webflow, we…". */}
    <div
      className="text-[9.5px] font-bold uppercase tracking-[0.05em] mb-1"
      style={{ color: "var(--color-brand-primary)" }}
    >
      With {AGENCY.name} and Webflow
    </div>
    <p className="text-[0.82rem] leading-[1.6] mb-4" style={{ color: "var(--color-neutral-700)" }}>
      {card.withAgency}
    </p>

    {/* CMS: Capability Cards → Bullet 1/2/3 */}
    <ul className="list-none p-0 mb-4 space-y-1">
      {card.bullets.map((b, i) => (
        <li
          key={i}
          className="text-[0.78rem] leading-[1.5] pl-4 relative"
          style={{ color: "var(--color-neutral-700)" }}
        >
          <span
            className="absolute left-0 font-bold text-[0.72rem]"
            style={{ color: "var(--color-brand-accent)" }}
          >
            →
          </span>
          {b}
        </li>
      ))}
    </ul>

    {/* CMS: Capability Cards → Feature 1/2/3. Canonical names from llms.txt. */}
    <div className="flex flex-wrap gap-1.5 mt-auto pt-3" style={{ borderTop: "1px solid var(--color-neutral-100)" }}>
      {card.features.map((f, i) => (
        <span
          key={i}
          className="px-2 py-[3px] rounded-full text-[9.5px] font-semibold"
          style={{
            background: "var(--color-brand-light)",
            color: "var(--color-brand-dark)",
            border: "1px solid var(--color-neutral-200)",
          }}
        >
          {f}
        </span>
      ))}
    </div>
  </div>
);

const WhatThisUnlocks = () => (
  <section className="px-10" style={{ paddingTop: "var(--space-section-y)", paddingBottom: "var(--space-section-y)" }}>
    <div className="max-w-[1140px] mx-auto">
      <SectionLabel>What This Unlocks</SectionLabel>
      <BrandStripe size="sm" />
      <h2
        className="font-extrabold leading-[1.18] mb-3 mt-3"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", color: "var(--color-brand-dark)" }}
      >
        Three capabilities, agency and platform delivered
      </h2>
      <p
        className="text-[0.95rem] leading-[1.7] max-w-[660px] mb-10"
        style={{ color: "var(--color-neutral-600)" }}
      >
        The skill picks the three most relevant service lines from the brand's ranked 2026 priorities.
      </p>
      {/* CMS: Pitch Pages → Capability Cards (MultiReference, max 3) */}
      <div className="grid md:grid-cols-3 gap-4">
        {CAPABILITY_CARDS.map((c, i) => (
          <CapabilityCard key={c.order} card={c} index={i} />
        ))}
      </div>
    </div>
  </section>
);

// Section 6. Capability Summary chips.
const CapabilitySummary = () => (
  <section
    className="px-10"
    style={{
      paddingTop: "var(--space-section-y)",
      paddingBottom: "var(--space-section-y)",
      background: "var(--color-brand-light)",
      borderTop: "1px solid var(--color-neutral-200)",
      borderBottom: "1px solid var(--color-neutral-200)",
    }}
  >
    <div className="max-w-[1140px] mx-auto">
      <SectionLabel>Webflow Enterprise Platform</SectionLabel>
      <BrandStripe size="sm" />
      <h2
        className="font-extrabold leading-[1.18] mb-7 mt-3"
        style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.7rem)", color: "var(--color-brand-dark)" }}
      >
        Twelve capabilities that make the platform fit
      </h2>
      {/* Static template. Sourced from reference-data/webflow-products.json. */}
      <div className="flex flex-wrap gap-2">
        {CAPABILITY_CHIPS.map((chip) => (
          <span
            key={chip}
            className="px-3.5 py-1.5 rounded-full text-[12px] font-medium"
            style={{
              background: "white",
              color: "var(--color-brand-dark)",
              border: "1px solid var(--color-neutral-200)",
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  </section>
);

// Section 7. Why Agency Plus Proof.
const WhyAgencyProof = () => (
  <section className="px-10" style={{ paddingTop: "var(--space-section-y)", paddingBottom: "var(--space-section-y)" }}>
    <div className="max-w-[1140px] mx-auto">
      <SectionLabel>Why {AGENCY.name}</SectionLabel>
      <BrandStripe size="sm" />
      <h2
        className="font-extrabold leading-[1.18] mb-3 mt-3"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", color: "var(--color-brand-dark)" }}
      >
        Agency credibility, framed as Webflow Enterprise partnership
      </h2>
      {/* CMS: Pitch Pages → Why Agency Framing (PlainText, max 200) */}
      <p
        className="text-[0.95rem] leading-[1.7] max-w-[760px] mb-10"
        style={{ color: "var(--color-neutral-700)" }}
      >
        {PITCH_PAGE.whyAgencyFraming}
      </p>

      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
        <div>
          {/* CMS: Reference Agencies → Stat 1-5 Value & Label */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-9">
            {AGENCY.stats.map((s, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-[10px]"
                style={{ background: "var(--color-brand-light)" }}
              >
                <div
                  className="text-[1.3rem] font-black leading-[1.1]"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[10.5px] mt-1 font-medium"
                  style={{ color: "var(--color-neutral-600)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CMS: Reference Agencies → Pillar 1-4 Title & Body */}
          <div className="grid sm:grid-cols-2 gap-3">
            {AGENCY.pillars.map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-[10px]"
                style={{ background: "white", border: "1px solid var(--color-neutral-200)" }}
              >
                <h4 className="text-[0.85rem] font-bold mb-1" style={{ color: "var(--color-brand-dark)" }}>
                  {p.title}
                </h4>
                <p className="text-[0.78rem] leading-[1.6]" style={{ color: "var(--color-neutral-600)" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo bar. Webflow Enterprise customers from webflow-enterprise-logos.json. */}
        <div className="lg:max-w-[280px] w-full">
          <div
            className="text-[10.5px] font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "var(--color-neutral-600)" }}
          >
            Brands on Webflow Enterprise
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* webflow-enterprise-logos.json hydrates 8-12 logos */}
            {Array.from({ length: 10 }).map((_, i) => (
              <PlaceholderLogoBox key={i} label={`logo ${i + 1}`} w="100%" h={36} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Section 8. CTA.
const CTA = () => (
  <section
    className="px-10 text-center relative overflow-hidden"
    style={{
      paddingTop: "calc(var(--space-section-y) * 1.2)",
      paddingBottom: "calc(var(--space-section-y) * 1.2)",
      background: "var(--color-brand-dark)",
    }}
  >
    <div
      className="absolute top-[-80px] left-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{
        transform: "translateX(-50%)",
        background: "radial-gradient(circle, color-mix(in oklab, var(--color-brand-primary) 14%, transparent), transparent 70%)",
      }}
    />
    <div className="relative z-10 max-w-[680px] mx-auto">
      <div className="flex justify-center mb-6">
        <BrandStripe size="lg" />
      </div>
      {/* CMS: Pitch Pages → CTA Headline (PlainText, max 120) */}
      <h2
        className="font-extrabold leading-[1.2] mb-4 text-white"
        style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)" }}
      >
        {PITCH_PAGE.ctaHeadline}
      </h2>
      {/* CMS: Reference Agencies → CTA Descriptor (RichText) */}
      <p
        className="text-[0.92rem] leading-[1.7] mb-2 max-w-[520px] mx-auto"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {AGENCY.ctaDescriptor}
      </p>
      {/* CMS: Pitch Pages → CTA Framing (PlainText, max 200) */}
      <p
        className="text-[0.92rem] leading-[1.7] mb-9 max-w-[520px] mx-auto"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {PITCH_PAGE.ctaFraming}
      </p>
      {/* CMS: Reference Agencies → CTA URL (Link). Static template label "Let's Talk". */}
      <a
        href={AGENCY.ctaUrl}
        className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full text-[0.88rem] font-bold no-underline transition-transform"
        style={{
          background: "var(--color-brand-primary)",
          color: "white",
        }}
      >
        Let's Talk
        <span aria-hidden>→</span>
      </a>
    </div>
  </section>
);

// Section 9. Footer.
const Footer = () => {
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return (
    <footer
      className="px-10 py-7"
      style={{
        background: "var(--color-brand-dark)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex items-center gap-3">
          {/* CMS: Reference Agencies → Footer Logo (Image, 60×16 max) */}
          <PlaceholderLogoBox label="agency" w={60} h={16} onDark />
          <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            {/* CMS: Reference Agencies → Name + Website URL */}
            Prepared by{" "}
            <a href={AGENCY.websiteUrl} className="underline" style={{ color: "rgba(255,255,255,0.65)" }}>
              {AGENCY.name}
            </a>
          </div>
        </div>
        <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
          {/* Static. Confidentiality line. */}
          Confidential. Prepared for the named recipient only. · {/* Auto-generated date */}
          {today}
        </div>
        <div className="flex flex-wrap gap-2">
          {/* Static. Security cert band, sourced from webflow-security-certs.json. */}
          {SECURITY_CERTS.map((c) => (
            <span
              key={c}
              className="px-2.5 py-1 rounded-full text-[10px] font-medium"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

// ---------- Page ----------
function PitchflowTemplate() {
  return (
    <div
      style={{
        background: "var(--color-brand-light)",
        color: "var(--color-neutral-900)",
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
    >
      <Nav />
      <div style={{ paddingTop: "58px" }}>
        <Hero />
        <StrategicCase />
        <StrategicSnapshot />
        <LeadershipMapped />
        <WhatThisUnlocks />
        <CapabilitySummary />
        <WhyAgencyProof />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

window.PitchflowTemplate = PitchflowTemplate;
