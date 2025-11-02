import Link from "next/link";

const timeline = [
  {
    step: "01",
    title: "Capture the Brief",
    body:
      "Product owners create living briefs with goals, personas, constraints, and success metrics. AI highlights blind spots and proposes research tasks so teams start from a well-aligned source of truth."
  },
  {
    step: "02",
    title: "Co-Design With AI",
    body:
      "DesignArena’s canvas blends whiteboarding, component libraries, and generative design agents. Designers sketch ideas, drop components, and invite AI to explore variations that remain on-brand."
  },
  {
    step: "03",
    title: "Validate Continuously",
    body:
      "Interactive prototypes spin up instantly. Stakeholders and testers leave timestamped feedback, AI summarizes sentiment, and insights feed back into the brief so decisions are always transparent."
  },
  {
    step: "04",
    title: "Ship With Confidence",
    body:
      "Design tokens sync to code repos, Jira issues update automatically, and production rollouts are guarded by experiment templates and QA gates. Teams hand off faster without losing fidelity."
  }
];

const pillars = [
  {
    title: "Unified Operating System",
    description:
      "Unifies briefs, research, blockers, decisions, and design artifacts in a single, versioned workspace. Granular permissions ensure the right context meets the right teammate.",
    bullets: [
      "Adaptive briefs with goal tracking",
      "Design debt dashboard and audit trails",
      "Role-based workspaces & governance"
    ]
  },
  {
    title: "AI-Augmented Craft",
    description:
      "Intelligent copilots accelerate ideation without replacing craft. Ask it to remix flows, transform wireframes into high-fidelity UI, or stress test designs against heuristics.",
    bullets: [
      "Generative explorations within guardrails",
      "Auto-accessibility and usability checks",
      "Multiplayer prompts that learn your brand"
    ]
  },
  {
    title: "Connected Delivery",
    description:
      "DesignArena speaks directly to engineering and product tools so nothing slips through the cracks. Every decision can trace back to customer evidence.",
    bullets: [
      "Design tokens synced to code repositories",
      "Live status mirroring in Jira, Linear & Notion",
      "One-click spec exports with implementation hints"
    ]
  },
  {
    title: "Insights That Stick",
    description:
      "Research, feedback, and telemetry feed into a canonical insights graph. Patterns surface automatically, keeping roadmaps aligned with customer truth.",
    bullets: [
      "Automated note synthesis from interviews",
      "Signal scoring across cohorts and personas",
      "Decision impact tracking over time"
    ]
  }
];

const metrics = [
  {
    stat: "4.2×",
    label: "Faster concept-to-dev handoff across pilot teams"
  },
  {
    stat: "92%",
    label: "Stakeholder confidence score on design decisions"
  },
  {
    stat: "68%",
    label: "Reduction in duplicative design exploration efforts"
  }
];

const faqs = [
  {
    question: "Is DesignArena only for designers?",
    answer:
      "No. Product managers, researchers, engineers, and leadership can collaborate in shared workspaces. Permissions and tailored views keep each role focused on what matters while working from the same source of truth."
  },
  {
    question: "How does the AI stay on-brand?",
    answer:
      "DesignArena trains a private model on your design tokens, past work, tone, and brand guidelines. Guardrails check outputs against accessibility and governance policies before they reach the team."
  },
  {
    question: "Can we plug it into our current stack?",
    answer:
      "Yes. The platform ships with integrations for Figma, Jira, Linear, Notion, GitHub, Slack, Segment, and custom webhooks. REST and GraphQL APIs allow further automation."
  },
  {
    question: "What about security and compliance?",
    answer:
      "Data is isolated per tenant, encrypted in transit and at rest, with SOC 2 Type II and GDPR compliance. Optional on-prem inference keeps sensitive IP off shared infrastructure."
  }
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="pill">Platform Deep Dive</span>
          <h1 className="hero-heading">How DesignArena Works</h1>
          <p className="hero-subheading">
            DesignArena orchestrates the entire product design lifecycle—from the
            first spark of a brief to production rollout—by combining shared
            context, AI copilots, and connected delivery workflows.
          </p>

          <div className="hero-visual">
            <div className="hero-diagram">
              <div className="hero-diagram-row">
                <div className="badge">
                  <span />
                  Insight Graph
                </div>
                <div className="badge">
                  <span />
                  Journey Maps
                </div>
                <div className="badge">
                  <span />
                  Persona Models
                </div>
              </div>
              <div className="hero-diagram-row">
                <div className="badge">
                  <span />
                  Generative Canvas
                </div>
                <div className="badge">
                  <span />
                  Pattern Library
                </div>
                <div className="badge">
                  <span />
                  Multiplayer Prompts
                </div>
              </div>
              <div className="hero-diagram-row">
                <div className="badge">
                  <span />
                  Specs & Tokens
                </div>
                <div className="badge">
                  <span />
                  QA Gateways
                </div>
                <div className="badge">
                  <span />
                  Analytics Bridge
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">An Operating System for Design Teams</h2>
          <p className="section-intro">
            DesignArena connects every artifact, conversation, and insight
            through a composable workspace. Each pillar reinforces the next so
            teams design with clarity, iterate with speed, and ship with
            confidence.
          </p>

          <div className="cards">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <ul>
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">From Brief to Impact</h2>
          <p className="section-intro">
            Each stage builds shared context instead of creating handoff gaps.
            DesignArena keeps the narrative intact, whether you are exploring a
            new concept or iterating on a shipping experience.
          </p>

          <div className="timeline">
            {timeline.map((entry) => (
              <div key={entry.step} className="timeline-step" data-step={entry.step}>
                <h3>{entry.title}</h3>
                <p>{entry.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">Measured Outcomes</h2>
          <p className="section-intro">
            Adoption across product-led scale-ups shows immediate lift. Design
            partners highlight fewer design loops, stronger stakeholder trust,
            and end-to-end visibility.
          </p>

          <div className="split">
            <div className="stats">
              {metrics.map((metric) => (
                <div key={metric.stat} className="stat">
                  <strong>{metric.stat}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <article className="card">
              <h3>What Teams Notice First</h3>
              <p>
                The platform replaces a patchwork of tools with a shared canvas
                for discovery, design, validation, and delivery. AI copilots
                shorten decision loops by infusing insights where teams work.
              </p>
              <ul>
                <li>Briefs that evolve with every comment and research insight</li>
                <li>Realtime traceability from customer quote to shipped pixel</li>
                <li>Automated QA guardrails that protect quality at scale</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">FAQ</h2>
          <p className="section-intro">
            A quick look at common questions from product design, research, and
            engineering leaders evaluating DesignArena for their teams.
          </p>
          <div className="faq">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <h2>The Future of Product Design Is Shared, Insight-Driven, and AI Fluent</h2>
            <p>
              DesignArena stitches every part of the product design lifecycle
              into a living system. Bring your team into a space where AI boosts
              craftsmanship, knowledge stays trusted, and shipping is a
              predictable habit.
            </p>
            <div className="cta-actions">
              <Link
                href="https://designarena.ai/demo"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Book a Demo
              </Link>
              <Link
                href="https://designarena.ai/platform"
                className="button secondary"
                target="_blank"
                rel="noreferrer"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          Built with ❤️ to explain what powers DesignArena&apos;s collaborative
          design operating system.
        </div>
      </footer>
    </main>
  );
}
