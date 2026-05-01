# Pitchflow Page Structure — Canonical Reference

Source of truth for the Pitchflow for Partners pitch page system. All skills, templates, and CMS schema decisions ground against this document.

---

## Page Structure Snapshot

| # | Section | Purpose served |
| :--- | :--- | :--- |
| 1 | Nav | Orientation |
| 2 | Hero | Demonstrate understanding and position Webflow Enterprise as the bridge |
| 2.5 | Strategic Case | Substantive argument: ambition, gap, platform role, agency role |
| 3 | Strategic Snapshot | Demonstrate research depth |
| 4 | Leadership Mapped | Cover the brand's actual buyer committee |
| 5 | What This Unlocks | Show brand-specific path with platform credibility |
| 6 | Capability Summary chips | Make Webflow Enterprise platform fit scannable |
| 7 | Why Agency Plus Proof | Combined credibility for agency and platform |
| 8 | CTA | Single soft invitation to a conversation |
| 9 | Footer | Closing band with confidentiality, attribution, security |

---

## Project Metadata

| Field | Value |
| :--- | :--- |
| Project name | Pitchflow for Partners |
| Orchestrator skill name | pitch-flow-orchestrator |
| Purpose | Repeatable agency pitch page for Partner Account Manager workflows |
| Conversion goal | Drive partner-sourced Webflow Enterprise SAOs |
| Audience | C-suite and key decision-makers at mid-market to enterprise brands |
| Personas | CTO, CMO, growth leaders, content leaders, digital leaders |
| Scan target | 75 seconds to recognition moment |
| Format | Single-page, CMS-driven, brand-themed per pitch |
| Sections | 9 plus one inline content block |
| Canonical product source | webflow.com/llms.txt |
| Webflow site ID | 69f4dc6b8ac97b00b3d21ab4 |
| Webflow project URL | pitchflow-for-partners.webflow.io |

---

## Build-Time Prerequisites (one-time, per agency or system change)

| Prerequisite | When | Why required |
| :--- | :--- | :--- |
| Webflow site stood up | Block 0 | Site ID must exist before MCP connector can target it |
| MAST design system injected | Block 2 | Page template depends on MAST variables and components |
| CMS schema published | Block 4 | All four collections must exist before items can be written |
| Pitch Pages template designed and bound to fields | Block 5 | Template must render every CMS field cleanly before first pitch is generated |
| Connector permissions scoped for full PAM team | Block 0 | Build assumes full PAM team rollout from day one even though pilot rolls to Allison and Jackie first; no rework when scaling |
| Agency profile authored and seeded into Agencies CMS | Per agency onboarded | Bottle Rocket seeded during pilot; additional agencies seeded as Ryan's team expands the program |
| Reference data files current | Quarterly | webflow-products.json, webflow-enterprise-logos.json, webflow-security-certs.json verified against canonical sources |

---

## PAM Prerequisites (every time PAM runs the skill)

| Prerequisite | What PAM does | Why required |
| :--- | :--- | :--- |
| Webflow MCP connector enabled in Claude | PAM connects Webflow MCP to their Claude account before invoking skill | Skill writes CMS items via MCP; without this, no items can be written |
| Webflow MCP connector authorized for Pitchflow site | PAM authorizes the connector for site ID 69f4dc6b8ac97b00b3d21ab4 | Connector defaults to all-site access; PAM confirms scope |
| Verify connection before first run | Skill runs a connector health check on first invocation | Catches auth issues before research kicks off |
| Agency identified | PAM has selected which agency partner the pitch is being prepared for | Required input — drives agency reference, all Section 7 bindings, CTA destination |
| Target brand identified | PAM has selected the prospective brand client | Required input — drives every brand-specific field across Sections 2 through 8 |
| AEO assessment already run for target brand | PAM has the assessment URL from the email Webflow sent | Required input — populates AEO Score, Framing, and three priorities |

---

## Webflow CMS Constraints Operating Within

| Constraint | Limit | This project |
| :--- | :--- | :--- |
| Fields per Collection | 60 max | Pitch Pages: 40, Capability Cards: 17, Brand Leaders: 11, Agencies: 28 |
| Reference fields per Collection | 20 max (Enterprise) | Pitch Pages: 3, others: 0 |
| Multi-reference items per item | 25 max | Brand Leaders: max 3, Capability Cards: max 3 |
| CMS items per site | Enterprise extensible | Estimated 4,000 items at 500 pitches |
| Collection list display | 100 items unpaginated | Not used (each Pitch Page renders its own data) |
| Built-in fields | Name, Slug, Created On, Last Updated, Last Published | All collections inherit these automatically |
| Schema changes | Require full-site publish | Lock schema before pilot, no changes during PAM rollout |
| Publishing referenced items | Auto-publishes when parent item publishes | PAM publishes Pitch Page once, all referenced items publish |

---

## Collection URL Slugs

| Collection | Collection URL slug | Public pages? |
| :--- | :--- | :--- |
| Pitch Pages | pitches | Yes (Collection page template) |
| Brand Leaders | brand-leaders | No |
| Capability Cards | capability-cards | No |
| Agencies | agencies | No |

---

## Slug Strategy

| Attribute | Value |
| :--- | :--- |
| URL pattern | /pitches/[brand-slug]-[agency-slug] |
| Brand slug format | Lowercase, hyphenated brand name |
| Agency slug format | Lowercase, hyphenated agency name |
| Slug field | Auto-generated from brand name + agency name, editable by PAM during review |
| Conflict handling | Overwrite existing Pitch Pages item when same brand + same agency combination already exists |
| Multi-agency support | Two agencies pitching the same brand produce two Pitch Pages items at distinct URLs (e.g., /pitches/7-eleven-bottle-rocket, /pitches/7-eleven-slalom) |

---

## SEO and Meta Field Spec

| Field | Type | Required | Default behavior |
| :--- | :--- | :--- | :--- |
| Meta title | PlainText | Yes | "[Brand Name] × Webflow Enterprise — Executive Brief" |
| Meta description | PlainText (max 160 chars) | Yes | One-sentence summary generated from hero subhead |
| Open Graph image | Image | Yes | Hero image from brand identity extraction |
| Open Graph title | PlainText | No | Falls back to meta title |
| Open Graph description | PlainText | No | Falls back to meta description |
| Twitter card type | Option | No | summary_large_image |
| Canonical URL | Link | No | Auto-generated from slug |

---

## Image Specifications

| Image | Dimensions | Format | Notes |
| :--- | :--- | :--- | :--- |
| Hero image | 1920 × 1080 minimum, 16:9 ratio | JPG or WebP | Sourced from brand site or PAM upload |
| Brand logo | 240 × 80 max, transparent background | SVG preferred, PNG fallback | Sourced from brand site nav |
| Executive avatar | 88 × 88, circular crop | Generated initials, no photo | Initials styled with branded gradient |
| Agency logo | 120 × 32 max, transparent background | SVG preferred | From agency profile |
| Webflow customer logo | 140 × 40 max, monochrome | SVG | From reference data |
| Footer agency logo | 60 × 16 max, low contrast | SVG | From agency profile |
| Open Graph image | 1200 × 630 | JPG or WebP | Auto-generated from hero or PAM upload |

---

## Brand Color Token Application Map

| Token | Where applied |
| :--- | :--- |
| Brand primary | Hero stripe (third bar), CTA button background, AEO score ring fill, capability card numbers, link colors |
| Brand accent | Hero stripe (first bar), priority list markers, outcome bullet markers, capability card hover state |
| Brand dark | Hero stripe (second bar), dark section backgrounds (Sections 8, 9), capability card titles on hover |
| Brand light | Page background base, section divider lines, card backgrounds |
| Semantic success | Strong indicators, positive proof points (stable across brands) |
| Semantic warning | Medium severity, attention markers (stable across brands) |
| Semantic critical | High severity, gap indicators (stable across brands) |
| Neutral palette | Body text, captions, borders (stable across brands) |

---

## Responsive Behavior Per Section

| Section | Desktop (1200+) | Tablet (768-1199) | Mobile (under 768) |
| :--- | :--- | :--- | :--- |
| 1 Nav | Three-slot horizontal | Three-slot horizontal | Logo + hamburger (title in drawer) |
| 2 Hero | Full-width, content lower-left | Full-width, content centered | Full-width, content stacked |
| 2.5 Strategic Case | Single paragraph, 720px max-width | Single paragraph, full-width | Single paragraph, full-width |
| 3 Strategic Snapshot | Score ring left, content right | Score ring above, content below | Stacked vertically |
| 4 Leadership Mapped | 3-card horizontal grid | 3-card horizontal grid | Stack vertically, 1 column |
| 5 What This Unlocks | 3-card horizontal grid | 3-card horizontal grid | Stack vertically, 1 column |
| 6 Capability Summary chips | Single row, 12 chips | Wraps to 2 rows | Wraps to 3-4 rows |
| 7 Why Agency Plus Proof | Stats and pillars left, logos right | Stats and pillars top, logos bottom | Stack vertically |
| 8 CTA | Centered, single button | Centered, single button | Centered, single button |
| 9 Footer | Single horizontal band | Wraps elements | Stack vertically |

---

## Reference Relationships and Cardinality

| From collection | To collection | Type | Cardinality | Required |
| :--- | :--- | :--- | :--- | :--- |
| Pitch Pages | Agencies | Reference | Single | Yes |
| Pitch Pages | Brand Leaders | MultiReference | Max 3 | Yes |
| Pitch Pages | Capability Cards | MultiReference | Max 3 | Yes |

---

## Section 1 — Nav

| Attribute | Value |
| :--- | :--- |
| Purpose | Orientation only |
| CTA button | None |
| Background | Dark, translucent |
| Visual weight | Light |
| Sticky | Yes |

| Element | Content | Data source | CMS field type | Required |
| :--- | :--- | :--- | :--- | :--- |
| Agency logo | Logo image | Reference: Agencies → Logo | Image | Yes |
| Document title | "[Brand Name] × Webflow Enterprise — Executive Brief" | Generated from Brand Name | PlainText | Yes |
| Prepared by line | "Prepared by [Agency]" | Reference: Agencies → Name | PlainText | Yes |

---

## Section 2 — Hero

| Attribute | Value |
| :--- | :--- |
| Purpose | Prove brand-moment understanding and frame Webflow Enterprise as the bridge |
| Background | Brand image with dark overlay |
| Visual weight | Heavy |
| Layout | Full-width, content lower-left |

| Element | Content | Data source | CMS field type | Required |
| :--- | :--- | :--- | :--- | :--- |
| Brand stripe | Decorative bars in brand colors | Static pattern, brand-themed | (template) | n/a |
| Brand logo | Brand mark | Pitch Pages → Brand Logo | Image | Yes |
| Brand hero image | Background image | Pitch Pages → Hero Image | Image | Yes |
| Headline | Brand achievement or ambition | Pitch Pages → Hero Headline | PlainText (max 200 chars) | Yes |
| Subhead | Three-clause structure | Pitch Pages → Hero Subhead | RichText (max 600 chars) | Yes |
| Hero metric 1 value | Brand-specific stat value | Pitch Pages → Hero Metric 1 Value | PlainText (max 20 chars) | Yes |
| Hero metric 1 label | Stat label | Pitch Pages → Hero Metric 1 Label | PlainText (max 50 chars) | Yes |
| Hero metric 2 value | Brand-specific stat value | Pitch Pages → Hero Metric 2 Value | PlainText (max 20 chars) | Yes |
| Hero metric 2 label | Stat label | Pitch Pages → Hero Metric 2 Label | PlainText (max 50 chars) | Yes |
| Hero metric 3 value | Brand-specific stat value | Pitch Pages → Hero Metric 3 Value | PlainText (max 20 chars) | Yes |
| Hero metric 3 label | Stat label | Pitch Pages → Hero Metric 3 Label | PlainText (max 50 chars) | Yes |

| Voice rule | Requirement |
| :--- | :--- |
| Headline tone | Lead with respect, not criticism |
| Subhead requirement | Name one specific platform from brand stack and frame Webflow Enterprise's structural role |
| Velocity rule | Growth-led brands surface speed-to-impact in one metric |

---

## Section 2.5 — Strategic Case (inline content block)

| Attribute | Value |
| :--- | :--- |
| Purpose | Substantive argument bridging Hero and Strategic Snapshot |
| Background | Light |
| Visual weight | Light |
| Layout | Single tight paragraph, no header, no card |
| Treatment | Two sentences of breathing room above and below |

| Element | Content | Data source | CMS field type | Required |
| :--- | :--- | :--- | :--- | :--- |
| Strategic case paragraph | Four-sentence structure | Pitch Pages → Strategic Case | RichText (max 800 chars) | Yes |

| Voice rule | Requirement |
| :--- | :--- |
| Sentence 1 | Names brand ambition |
| Sentence 2 | Names gap between ambition and current infrastructure |
| Sentence 3 | Names Webflow Enterprise's role in closing the gap |
| Sentence 4 | Names agency's role in delivering it |

---

## Section 3 — Strategic Snapshot

| Attribute | Value |
| :--- | :--- |
| Purpose | Single block proving research depth: AEO and business signals |
| Background | Light |
| Visual weight | Medium |
| Layout | Score ring left, priorities and signals right |

| Element | Content | Data source | CMS field type | Required |
| :--- | :--- | :--- | :--- | :--- |
| AEO score | Numeric overall maturity (1-5) | Pitch Pages → AEO Score | Number (1-5) | Yes |
| Score framing line | One-sentence summary | Pitch Pages → AEO Framing | PlainText (max 200 chars) | Yes |
| Top priority 1 | First AEO priority | Pitch Pages → AEO Priority 1 | PlainText (max 200 chars) | Yes |
| Top priority 2 | Second AEO priority | Pitch Pages → AEO Priority 2 | PlainText (max 200 chars) | Yes |
| Top priority 3 | Third AEO priority | Pitch Pages → AEO Priority 3 | PlainText (max 200 chars) | Yes |
| Business signal 1 value | Stat value | Pitch Pages → Signal 1 Value | PlainText (max 20 chars) | Yes |
| Business signal 1 label | Stat label | Pitch Pages → Signal 1 Label | PlainText (max 80 chars) | Yes |
| Business signal 2 value | Stat value | Pitch Pages → Signal 2 Value | PlainText (max 20 chars) | Yes |
| Business signal 2 label | Stat label | Pitch Pages → Signal 2 Label | PlainText (max 80 chars) | Yes |
| Business signal 3 value | Stat value (optional) | Pitch Pages → Signal 3 Value | PlainText (max 20 chars) | No |
| Business signal 3 label | Stat label (optional) | Pitch Pages → Signal 3 Label | PlainText (max 80 chars) | No |

---

## Section 4 — Leadership Mapped

| Attribute | Value |
| :--- | :--- |
| Purpose | Account-specific thinking through executive mapping |
| Background | Light or subtle tinted |
| Visual weight | Medium |
| Layout | Three-card horizontal grid |
| Card count | 3 |
| Reference | MultiReference to Brand Leaders, max 3 |

| Card element | Content | Data source | CMS field type | Required |
| :--- | :--- | :--- | :--- | :--- |
| Avatar | Initials in branded circle | Generated from name | (template) | n/a |
| Name | Executive full name | Brand Leaders → Name | PlainText (built-in) | Yes |
| Title | Executive role | Brand Leaders → Title | PlainText | Yes |
| Mandate label | Short tag | Brand Leaders → Mandate Label | PlainText | Yes |
| Outcome paragraph | Mandate-to-Webflow connection | Brand Leaders → Outcome | RichText | Yes |
| Display order | Position in grid (1-3) | Brand Leaders → Order | Number | Yes |

| Composition rule | Requirement |
| :--- | :--- |
| CTO card | Required where the technology decision is in scope; carries full stack acknowledgment |
| Growth or Brand role | At least one card maps to Head of Revenue, Growth, or Brand-equivalent |
| Regulatory threading | CTO card mandate adapts to regulatory context where applicable |
| Voice test | Each card must pass peer-not-pitcher test |

---

## Section 5 — What This Unlocks

| Attribute | Value |
| :--- | :--- |
| Purpose | Three outcome-led capability cards showing agency-platform partnership in action |
| Background | Light |
| Visual weight | Medium-heavy |
| Layout | Three-card horizontal grid |
| Card count | 3 |
| Reference | MultiReference to Capability Cards, max 3 |

| Card element | Content | Data source | CMS field type | Required |
| :--- | :--- | :--- | :--- | :--- |
| Card number | 01-03 | Generated from Order | (template) | n/a |
| Card title | Outcome-oriented label | Capability Cards → Title | PlainText | Yes |
| Brand priority tag | Pulled from brand 2026 goals | Capability Cards → Priority Tag | PlainText | Yes |
| Today paragraph | Current-state framing | Capability Cards → Today | RichText | Yes |
| With-Agency paragraph | "With [Agency] and Webflow, we…" | Capability Cards → With Agency | RichText | Yes |
| Outcome bullet 1 | Brand-specific outcome | Capability Cards → Bullet 1 | PlainText | Yes |
| Outcome bullet 2 | Brand-specific outcome | Capability Cards → Bullet 2 | PlainText | Yes |
| Outcome bullet 3 | Brand-specific outcome | Capability Cards → Bullet 3 | PlainText | Yes |
| Inline Webflow features | 2-3 feature pills | Capability Cards → Feature 1, 2, 3 | PlainText × 3 | Yes for 1-2, optional for 3 |

| Available service line mappings (skill picks 3 of 5 per brand) | Card title | Service line | Feature 1 | Feature 2 | Feature 3 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Personalization | Segment-Driven Buyer Experiences | Personalization Strategy | Optimize | CMS | Apps Marketplace |
| Content | AI-Cited Authority at Scale | Content Strategy | CMS | Edit Mode | AI Assistant |
| Mixed Media | Immersive, Conversion-Optimized Experiences | Mixed Media Strategy | Interactions & Animations | Page Building | Hosting |
| SEO and AEO | Winning the AI Search Battle vs. [Competitor] | SEO and AEO Optimization | SEO | Analyze | Design |
| Governance | Compliance-Grade Content Governance | Digital Asset Management Strategy | Shared Libraries | Collaboration | Security |

| Voice rule | Requirement |
| :--- | :--- |
| Card selection | Skill picks the 3 most relevant service lines based on brand's stated 2026 priorities |
| Ranking output | Brand Intelligence Researcher produces a ranked priority list (1-5 across the five service lines); skill always picks top 3 by rank |
| Opener | Every card opens "With [Agency] and Webflow, we…" |
| Redeployment framing | One card explicitly carries "engineers freed, marketers faster, both teams win" |
| Stack-naming discipline | Cards reference brand stack only where integration narrative warrants |
| Velocity rule | One outcome bullet across the three cards carries speed-to-impact for growth-led brands |
| Canonical naming | Feature names must match webflow.com/llms.txt exactly |

---

## Section 6 — Capability Summary Chips

| Attribute | Value |
| :--- | :--- |
| Purpose | Make Webflow Enterprise platform fit scannable in seconds |
| Background | Light, subtle separator |
| Visual weight | Light |
| Layout | Single row of pill chips |
| Chip count | 12 |
| Source | Static template, sourced from reference-data/webflow-products.json |

| Chip # | Feature name |
| :--- | :--- |
| 1 | CMS |
| 2 | Optimize |
| 3 | Analyze |
| 4 | Localization |
| 5 | SEO |
| 6 | Shared Libraries |
| 7 | Interactions & Animations |
| 8 | Page Building |
| 9 | Collaboration |
| 10 | Edit Mode |
| 11 | AI Assistant |
| 12 | Hosting |

---

## Section 7 — Why Agency Plus Proof

| Attribute | Value |
| :--- | :--- |
| Purpose | Combined credibility framed as Webflow Enterprise partnership |
| Background | Light |
| Visual weight | Medium |
| Layout | Framing line, then stats and pillars left, logo bar right |

| Element | Content | Data source | CMS field type | Required |
| :--- | :--- | :--- | :--- | :--- |
| Framing line | One sentence naming agency as Webflow Enterprise partner | Pitch Pages → Why Agency Framing | PlainText (max 200 chars) | Yes |
| Stat 1 value | Specialists count | Reference: Agencies → Stat 1 Value | PlainText | Yes |
| Stat 1 label | Stat label | Reference: Agencies → Stat 1 Label | PlainText | Yes |
| Stat 2 value | Clients count | Reference: Agencies → Stat 2 Value | PlainText | Yes |
| Stat 2 label | Stat label | Reference: Agencies → Stat 2 Label | PlainText | Yes |
| Stat 3 value | Projects count | Reference: Agencies → Stat 3 Value | PlainText | Yes |
| Stat 3 label | Stat label | Reference: Agencies → Stat 3 Label | PlainText | Yes |
| Stat 4 value | Years in business | Reference: Agencies → Stat 4 Value | PlainText | Yes |
| Stat 4 label | Stat label | Reference: Agencies → Stat 4 Label | PlainText | Yes |
| Stat 5 value | Distinguishing fact | Reference: Agencies → Stat 5 Value | PlainText | Yes |
| Stat 5 label | Stat label | Reference: Agencies → Stat 5 Label | PlainText | Yes |
| Pillar 1 title | Capability pillar title | Reference: Agencies → Pillar 1 Title | PlainText | Yes |
| Pillar 1 description | Pillar paragraph | Reference: Agencies → Pillar 1 Body | RichText | Yes |
| Pillar 2 title | Capability pillar title | Reference: Agencies → Pillar 2 Title | PlainText | Yes |
| Pillar 2 description | Pillar paragraph | Reference: Agencies → Pillar 2 Body | RichText | Yes |
| Pillar 3 title | Capability pillar title | Reference: Agencies → Pillar 3 Title | PlainText | Yes |
| Pillar 3 description | Pillar paragraph | Reference: Agencies → Pillar 3 Body | RichText | Yes |
| Pillar 4 title | Capability pillar title | Reference: Agencies → Pillar 4 Title | PlainText | Yes |
| Pillar 4 description | Pillar paragraph | Reference: Agencies → Pillar 4 Body | RichText | Yes |
| Logo bar | 8-12 customer logos | Static reference data | (template) | n/a |

| Logo bar rule | Requirement |
| :--- | :--- |
| Source of truth | webflow.com/customers (referenced live) |
| Verification | Each logo verified as Webflow Enterprise customer |
| Storage | reference-data/webflow-enterprise-logos.json (refreshed quarterly) |
| Brand recognition | Recognizable global brands only |
| Exclusion | No agency logos in the bar |

---

## Section 8 — CTA

| Attribute | Value |
| :--- | :--- |
| Purpose | Single soft invitation to a conversation |
| Background | Dark |
| Visual weight | Medium |
| Layout | Centered, single button |
| CTA count | 1 |

| Element | Content | Data source | CMS field type | Required |
| :--- | :--- | :--- | :--- | :--- |
| Brand stripe | Matching hero stripe | Static, brand-themed | (template) | n/a |
| Headline | "We'd love to explore what's possible together" or equivalent | Pitch Pages → CTA Headline | PlainText (max 120 chars) | Yes |
| Descriptor | One-sentence agency credentials | Reference: Agencies → CTA Descriptor | RichText | Yes |
| Framing line | One-sentence brand-moment line | Pitch Pages → CTA Framing | PlainText (max 200 chars) | Yes |
| CTA button label | "Let's Talk" | Static template | (template) | n/a |
| CTA button URL | Agency contact URL | Reference: Agencies → CTA URL | Link | Yes |

| Voice rule | Requirement |
| :--- | :--- |
| Urgency | No urgency-pressure language |
| CTA count | Single button only |
| Tone | Warm, peer-level, collaborative |

---

## Section 9 — Footer

| Attribute | Value |
| :--- | :--- |
| Purpose | Closing band with confidentiality, attribution, security |
| Background | Dark |
| Visual weight | Light |
| Layout | Single horizontal band |

| Element | Content | Data source | CMS field type | Required |
| :--- | :--- | :--- | :--- | :--- |
| Agency logo | Small, low-contrast | Reference: Agencies → Footer Logo | Image | Yes |
| Prepared by line | Linked to agency website | Reference: Agencies → Name + Website URL | PlainText + Link | Yes |
| Confidentiality note | Static legal line | Static reference data | (template) | n/a |
| Date | Generated date | Auto-generated at publish | (template) | n/a |
| Security cert band | Active Webflow Enterprise certs | Static reference data | (template) | n/a |

| Cert band rule | Requirement |
| :--- | :--- |
| Source of truth | webflow.com/security and trust.webflow.com (referenced live) |
| Verification | Each cert verified current and active |
| Storage | reference-data/webflow-security-certs.json (refreshed quarterly) |
| Confirmed certs (per llms.txt) | SOC 2 Type II, GDPR |
| Additional certs to verify | ISO 27001, ISO 27017, ISO 27018 |
| Regulatory modifier | Cert priority adapts to brand regulatory context |

---

## Pitch Pages Collection — CMS Field Summary

| Field name | Type | Required | Notes |
| :--- | :--- | :--- | :--- |
| Name | PlainText | Yes | Brand name (built-in) |
| Slug | Slug | Yes | Auto-generated from Name + Agency (built-in) |
| Brand Logo | Image | Yes | Section 2 |
| Hero Image | Image | Yes | Section 2 |
| Hero Headline | PlainText | Yes | Section 2 |
| Hero Subhead | RichText | Yes | Section 2 |
| Hero Metric 1 Value | PlainText | Yes | Section 2 |
| Hero Metric 1 Label | PlainText | Yes | Section 2 |
| Hero Metric 2 Value | PlainText | Yes | Section 2 |
| Hero Metric 2 Label | PlainText | Yes | Section 2 |
| Hero Metric 3 Value | PlainText | Yes | Section 2 |
| Hero Metric 3 Label | PlainText | Yes | Section 2 |
| Strategic Case | RichText | Yes | Section 2.5 |
| AEO Score | Number | Yes | Section 3 |
| AEO Framing | PlainText | Yes | Section 3 |
| AEO Priority 1 | PlainText | Yes | Section 3 |
| AEO Priority 2 | PlainText | Yes | Section 3 |
| AEO Priority 3 | PlainText | Yes | Section 3 |
| Signal 1 Value | PlainText | Yes | Section 3 |
| Signal 1 Label | PlainText | Yes | Section 3 |
| Signal 2 Value | PlainText | Yes | Section 3 |
| Signal 2 Label | PlainText | Yes | Section 3 |
| Signal 3 Value | PlainText | No | Section 3 (optional) |
| Signal 3 Label | PlainText | No | Section 3 (optional) |
| Brand Leaders | MultiReference | Yes | Section 4, max 3, ref to Brand Leaders |
| Capability Cards | MultiReference | Yes | Section 5, max 3, ref to Capability Cards |
| Why Agency Framing | PlainText | Yes | Section 7 |
| CTA Headline | PlainText | Yes | Section 8 |
| CTA Framing | PlainText | Yes | Section 8 |
| Agency | Reference | Yes | Single ref to Agencies |
| Brand Color Primary | Color | Yes | Brand theming |
| Brand Color Accent | Color | Yes | Brand theming |
| Brand Color Dark | Color | Yes | Brand theming |
| Regulatory Context | Option | No | Choices: None, Financial Services, Healthcare, Public Company, Other |
| Meta Title | PlainText | Yes | SEO |
| Meta Description | PlainText | Yes | SEO |
| Open Graph Image | Image | Yes | SEO |

**Total custom fields: 35. Plus 5 built-in. Total: 40 of 60 max. Comfortable headroom.**

---

## Capability Cards Collection — CMS Field Summary

| Field name | Type | Required | Notes |
| :--- | :--- | :--- | :--- |
| Name | PlainText | Yes | Card title (built-in, used as card label in CMS) |
| Slug | Slug | Yes | Auto-generated (built-in) |
| Title | PlainText | Yes | Card title displayed on page (may differ from Name) |
| Priority Tag | PlainText | Yes | Brand priority label |
| Today | RichText | Yes | Current-state paragraph |
| With Agency | RichText | Yes | "With [Agency] and Webflow…" paragraph |
| Bullet 1 | PlainText | Yes | Outcome bullet |
| Bullet 2 | PlainText | Yes | Outcome bullet |
| Bullet 3 | PlainText | Yes | Outcome bullet |
| Order | Number | Yes | Position in card grid (1-3) |
| Service Line | Option | Yes | Choices: Personalization, Content, Mixed Media, SEO and AEO, Governance |
| Feature 1 | PlainText | Yes | Webflow feature pill |
| Feature 2 | PlainText | Yes | Webflow feature pill |
| Feature 3 | PlainText | No | Webflow feature pill (optional) |

**Total custom fields: 12. Plus 5 built-in. Total: 17 of 60 max.**

---

## Brand Leaders Collection — CMS Field Summary

| Field name | Type | Required | Notes |
| :--- | :--- | :--- | :--- |
| Name | PlainText | Yes | Executive full name (built-in) |
| Slug | Slug | Yes | Auto-generated (built-in) |
| Title | PlainText | Yes | Executive role |
| Mandate Label | PlainText | Yes | Short tag |
| Outcome | RichText | Yes | Mandate-to-Webflow connection paragraph |
| Order | Number | Yes | Position in grid (1-3) |
| Role Type | Option | Yes | Choices: CEO, CTO, CMO, Growth, Brand, Content, Digital, Other |
| LinkedIn URL | Link | No | For verification trail |

**Total custom fields: 6. Plus 5 built-in. Total: 11 of 60 max.**

---

## Agencies Collection — CMS Field Summary

| Field name | Type | Required | Notes |
| :--- | :--- | :--- | :--- |
| Name | PlainText | Yes | Agency name (built-in) |
| Slug | Slug | Yes | Auto-generated (built-in) |
| Website URL | Link | Yes | Agency homepage |
| Logo | Image | Yes | Nav and Why Agency logo |
| Footer Logo | Image | Yes | Smaller footer treatment |
| Stat 1 Value | PlainText | Yes | Why Agency stats |
| Stat 1 Label | PlainText | Yes | Why Agency stats |
| Stat 2 Value | PlainText | Yes | Why Agency stats |
| Stat 2 Label | PlainText | Yes | Why Agency stats |
| Stat 3 Value | PlainText | Yes | Why Agency stats |
| Stat 3 Label | PlainText | Yes | Why Agency stats |
| Stat 4 Value | PlainText | Yes | Why Agency stats |
| Stat 4 Label | PlainText | Yes | Why Agency stats |
| Stat 5 Value | PlainText | Yes | Why Agency stats |
| Stat 5 Label | PlainText | Yes | Why Agency stats |
| Pillar 1 Title | PlainText | Yes | Why Agency pillars |
| Pillar 1 Body | RichText | Yes | Why Agency pillars |
| Pillar 2 Title | PlainText | Yes | Why Agency pillars |
| Pillar 2 Body | RichText | Yes | Why Agency pillars |
| Pillar 3 Title | PlainText | Yes | Why Agency pillars |
| Pillar 3 Body | RichText | Yes | Why Agency pillars |
| Pillar 4 Title | PlainText | Yes | Why Agency pillars |
| Pillar 4 Body | RichText | Yes | Why Agency pillars |
| CTA Descriptor | RichText | Yes | One-sentence credentials for CTA section |
| CTA URL | Link | Yes | Agency contact page URL |

**Total custom fields: 23. Plus 5 built-in. Total: 28 of 60 max.**

---

## Canonical Webflow Product Reference (from llms.txt)

| Category | Canonical name | URL |
| :--- | :--- | :--- |
| Build | Design | webflow.com/feature/design |
| Build | Edit Mode | webflow.com/feature/edit-mode |
| Build | Interactions & Animations | webflow.com/feature/interactions-animations |
| Build | Page Building | webflow.com/feature/page-building |
| Build | Shared Libraries | webflow.com/feature/shared-libraries |
| Build | Collaboration | webflow.com/feature/collaboration |
| Build | AI Site Builder | webflow.com/ai-site-builder |
| Manage | CMS | webflow.com/feature/cms |
| Manage | Hosting | webflow.com/feature/hosting |
| Manage | Localization | webflow.com/feature/localization |
| Manage | AI Assistant | webflow.com/feature/ai |
| Manage | Security | webflow.com/security |
| Optimize | SEO | webflow.com/feature/seo |
| Optimize | Analyze | webflow.com/feature/analyze |
| Optimize | Optimize | webflow.com/feature/optimize |
| Extend | Apps Marketplace | webflow.com/apps |
| Extend | Integrations | webflow.com/integrations |
| Extend | Webflow Cloud | webflow.com/feature/cloud |
| Extend | DevLink | webflow.com/feature/devlink |
| Extend | Figma to Webflow | webflow.com/feature/figma-to-webflow |

---

## Skill Voice Enforcement Rules (Cross-Section)

| Rule # | Rule | Applies to |
| :--- | :--- | :--- |
| 1 | Velocity priority | Section 2 metrics, Section 5 outcomes |
| 2 | Stack-naming discipline | Section 5 capability descriptions |
| 3 | Persona-coverage check | Section 4 leadership grid |
| 4 | Redeployment framing | Section 5 (one capability card) |
| 5 | Regulatory context threading | Sections 4, 5, 9 |
| 6 | Canonical product naming | Sections 5, 6 — feature names must match llms.txt exactly |
| 7 | Live source verification | Sections 7, 9 — logos and certs verified against webflow.com |
| 8 | Webflow Enterprise value framing | Section 2 subhead, Section 2.5 strategic case, Section 7 framing line |
| 9 | Agency-platform partnership voice | Section 5 (every card opener), Section 7 (framing line) |
| 10 | Capability card selection | Skill picks 3 of 5 service lines based on brand's stated 2026 priorities |
| 11 | Hero Metric and Business Signal fallback for thin public data | Sections 2, 3 — when public data is thin, skill uses industry-level signals or brand-claim fallbacks rather than fabricating specifics |
| 12 | Metric value plus label pairing | Sections 2, 3 — every metric value must pair with a label that names what it counts |

---

## Skill Module Architecture (pitch-flow-orchestrator)

| Module | CMS fields populated | Input contract | Output contract | Fallback |
| :--- | :--- | :--- | :--- | :--- |
| Connector Health Check | None | Webflow MCP token | Connection status (pass/fail), site access scope | If fail, skill halts and prompts PAM to connect Webflow MCP |
| Conflict Resolver | None | Brand name + agency slug | Existing Pitch Pages item ID if match found, otherwise null | If match found, surfaces overwrite confirmation prompt to PAM before research kicks off |
| Brand Identity Extractor (reworked page-cloner) | Brand Logo, Hero Image, Brand Color Primary/Accent/Dark | Brand URL | Identity JSON (logo URL, hero image URL, hex colors, font candidates). Normalize all extracted color values to `#RRGGBB` format before output. Reject or flag colors that cannot be normalized for PAM manual entry. | If extraction fails, prompt PAM for manual upload |
| AEO Parser | AEO Score, AEO Framing, AEO Priority 1/2/3 | AEO assessment URL | Score (1-5), framing string, priority strings. Accept any URL the PAM provides. Validate by attempting to fetch and parse the expected data structure (overall score, top three priorities). Use canonical pattern `webflow.com/aeo-assessment/{domain-with-dots-as-dash}` as a reference for documentation only, not as a hard gate. | If parse fails, surface to PAM with the URL they provided and ask them to verify |
| Brand Intelligence Researcher | Hero Headline, Hero Subhead, Hero Metric 2/3 values+labels, Strategic Case, Signal 1/2/3 values+labels, Why Agency Framing, CTA Framing, all Brand Leaders fields, Capability Cards Today/With Agency/Bullets/Priority Tag | Brand name, brand URL, regulatory context | Research JSON including ranked priority list (1-5 across five service lines), executive list with mandates, signal candidates, hero copy candidates | Voice rule 11 applies for thin data |
| Static Mapper | Hero Metric 1 Value/Label (AEO score), CTA Headline, all Capability Cards Title/Service Line/Features, Meta Title, all Section 6 chips | Brand name, AEO score, ranked priority list | Static field values | None — fully deterministic |
| Agency Profile Resolver | Agency reference, all Section 7 stat and pillar bindings | Agency selection | Agency CMS item ID for reference field | Halt if agency not in CMS; prompt PAM to confirm selection |
| Voice Enforcement | Cross-cuts every Generated and Researched field | Generated content + voice rules 1-12 | Validated or revised content | Surfaces violations to PAM during conversational review |
| CMS Hydrator | Writes items in dependency order | All approved field values + Webflow MCP connector. Before binding image URLs to image fields, upload assets to Webflow asset library via Data API, capture returned asset URLs, bind asset URLs to image fields. | Brand Leaders items → Capability Cards items → Pitch Pages item with multi-references resolved. If overwriting, updates existing item; otherwise creates new. | Halt and surface error to PAM if write fails |

---

## PAM Workflow End-to-End

| Step | PAM action | Skill action | CMS state |
| :--- | :--- | :--- | :--- |
| 0 | Confirms Webflow MCP connector connected | Connector Health Check runs | None |
| 1 | Invokes skill | Greets PAM, asks for inputs | None |
| 2 | Provides brand name, brand URL, agency selection, AEO assessment URL, optional regulatory context | Validates inputs, generates slug as `[brand]-[agency]` | None |
| 2.5 | (Waits) | Conflict Resolver checks for existing Pitch Pages item at this slug. If found, surfaces to PAM: "A pitch for [Brand] from [Agency] already exists. Continue and overwrite?" | None |
| 3 | (Waits) | Brand Identity Extractor runs on brand URL | None |
| 4 | (Waits) | Agency Profile Resolver verifies agency reference | None |
| 5 | (Waits) | AEO Parser runs on AEO URL | None |
| 6 | (Waits) | Brand Intelligence Researcher runs full research pass | None |
| 7 | (Waits) | Voice Enforcement validates all generated content | None |
| 8 | Reviews findings section by section in chat | Presents findings, flags risks (failed extractions, thin data, unverified executives) | None |
| 9 | Approves, edits, or asks for regeneration of specific sections | Iterates based on feedback | None |
| 10 | Approves all sections, asks to push to CMS | CMS Hydrator writes Brand Leaders → Capability Cards → Pitch Pages with multi-references resolved. If overwriting, updates existing item; otherwise creates new. | Items in Draft state |
| 11 | Reviews staged Pitch Page in Webflow Designer | Skill provides Designer link | Draft |
| 12 | Manually publishes Pitch Pages item from Webflow | (none — PAM-controlled publish) | Live |

Reference items auto-publish when the parent Pitch Page publishes, per Webflow's CMS behavior.

---

## PAM Inputs (5 total)

| # | Input | Required | Validation |
| :--- | :--- | :--- | :--- |
| 1 | Brand name | Yes | Non-empty string |
| 2 | Brand URL | Yes | Valid URL, reachable |
| 3 | Agency selection | Yes | Must exist in Agencies CMS |
| 4 | AEO assessment URL | Yes | Valid URL, fetch returns expected data structure (score and priorities). No hard pattern match. |
| 5 | Regulatory context | No | Option select |

---

## What the PAM Cannot Do

| Locked element | Why |
| :--- | :--- |
| Page template | Locked at Block 1 — ensures visual consistency |
| Brand color application map | Locked at Block 1 — ensures brand theming logic stays predictable |
| Section structure | Locked at Block 1 — page layout is the product |
| Bypass conversational review | Voice enforcement and source verification require PAM approval before CMS write |
| Edit agency-side fields per pitch | Agencies collection authored once during prototype; PAM never touches it |
| Direct CMS edits without skill | Skill is the canonical write path; manual edits create drift |

---

## Reference Data Files

| File | Purpose | Maintenance cadence | Source |
| :--- | :--- | :--- | :--- |
| reference-data/webflow-products.json | Canonical product names | Quarterly | webflow.com/llms.txt |
| reference-data/webflow-enterprise-logos.json | Verified customer logos | Quarterly | webflow.com/customers |
| reference-data/webflow-security-certs.json | Active certifications | Quarterly | webflow.com/security, trust.webflow.com |
| reference-data/webflow-personas.json | Canonical buyer personas | Quarterly | llms.txt Solutions by Audience |
| agencies/bottle-rocket.json | Agency profile | As needed | bottlerocketstudios.com |

---

## Known Follow-Ups

| # | Item | When to address |
| :--- | :--- | :--- |
| 1 | Connector permissions scoped down per role at scale | Block 10 hardening pass before full PAM rollout (note: build still assumes full team from day one) |
| 2 | Skill versioning policy with semver in skill name | Block 10 README at handoff |
