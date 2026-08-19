const assetsGlob = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,svg,mp4,mov,webp}', { eager: true, query: '?url', import: 'default' });

export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  const resolvedPath = `../assets/${path}`;
  if (assetsGlob[resolvedPath]) {
    return assetsGlob[resolvedPath];
  }
  console.warn(`Asset not found: ${resolvedPath}`);
  return path;
};

export const CASE_STUDY_PASSWORD = "0325";

export const isCaseStudyUnlocked = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('portfolio_case_study_unlocked') === 'true';
};

export const unlockCaseStudies = (inputPassword) => {
  const cleanInput = (inputPassword || '').trim();
  const validPasswords = [CASE_STUDY_PASSWORD.toLowerCase(), '0325'];
  if (validPasswords.includes(cleanInput.toLowerCase())) {
    localStorage.setItem('portfolio_case_study_unlocked', 'true');
    return true;
  }
  return false;
};

export const caseStudies = [
  {
    id: "prelight",
    title: "Prelight.ai",
    shortDescription: "Brand Asset Management & AI Layer",
    tags: ["Prelight Internship", "2026"],
    role: [
      "My Role: Design Engineer Intern (UX/UI & Frontend)",
      "Collaborators: 1 PM, 1 Backend Engineer"
    ],
    projectType: "AI & DAM",
    projectCategory: "Internship Project",
    timeline: "10 Weeks",
    tools: ["Figma", "Vue.js", "TypeScript", "Tailwind CSS", "Claude Code", "Figma Make"],
    coverImage: getAssetUrl("case_studies/Prelight/Prelight.png"),
    headerImage: getAssetUrl("case_studies/Prelight/Prelight.png"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "Redesigning Brand Asset Management for AI",
            paragraphs: [
              "Prelight is a private MCP layer that makes brand knowledge machine-readable — giving IP-rich enterprises full control over their brand identity in an AI-native world.",
              "As a Design Engineer Intern, I ran UX/UI audits, identified friction points, and redesigned key parts of the interface, shipping my work on the front end while partnering closely with a backend engineer to bring each feature to production."
            ]
          },
          {
            heading: "My Focus: Atlas — The Central Branding Hub",
            paragraphs: [
              "My primary work over the summer was on Atlas, an AI-powered digital asset management (DAM) tool within the Prelight.ai webapp."
            ],
            image: getAssetUrl("case_studies/Prelight/atlas.png")
          },
          {
            heading: "What is Atlas?",
            paragraphs: [
              "Atlas is where users upload files that make up a brand's identity — assets, guidelines, and rules — and it gets automatically categorized and has key information extracted from each file. That structured brand context can then flow into other tools via MCP connectors (like Claude or Lovable) or directly into Stage, Prelight's video creation section, to ground generated storyboards and cinematic videos in the brand's identity."
            ],
            image: getAssetUrl("case_studies/Prelight/atlas_diagram.png")
          },
          {
            heading: "I worked across two sections of Atlas",
            image: getAssetUrl("case_studies/Prelight/3.png")
          }
        ]
      },
      {
        id: "projects-list",
        subtitle: "02 / Project 1",
        content: [
          {
            heading: "Challenge 1: Fixing the Core UX Gaps in Atlas’s Brand Management Entry Point",
            paragraphs: [
              "As users' first touchpoint in Atlas, this page sets the tone for the product — but it was built as a simple display layer that has not scaled with how organizations actually use it."
            ]
          },
          {
            heading: "What I Found",
            paragraphs: [
              "Through user feedback and a heuristic evaluation, I identified four core gaps:"
            ],
            image: getAssetUrl("case_studies/Prelight/list_problem.png")
          },
          {
            heading: "What I Shipped",
            featureRows: [
              {
                title: "Brand Card & Creation Flow Redesign",
                description: "Redesigned brand cards to surface thumbnails for faster visual identification. Rebuilt the 'Add Brand' modal to support thumbnail uploads with a modernized UI. The pattern I established here was later adopted platform-wide across other creation flows.",
                video: getAssetUrl("case_studies/Prelight/creation_flow.mov")
              },
              {
                title: "Scalability Infrastructure",
                description: "Introduced pagination and a card-display limit (2 rows per page), plus filtering — giving the brand grid a predictable structure that holds up as organizations' libraries grow.",
                video: getAssetUrl("case_studies/Prelight/sort_workflow.mov")
              },
              {
                title: "Edit/Delete System",
                description: "Designed and implemented an end-to-end edit/delete workflow, including a 'Recently Deleted' recovery page and confirmation modals to prevent accidental data loss.",
                video: getAssetUrl("case_studies/Prelight/delete_workflow.mov")
              }
            ]
          },
          {
            heading: "Role-Based Access Control: Admin vs. Regular Member View",
            paragraphs: [
              "To prevent unauthorized modifications while keeping brand assets accessible across teams, I designed differentiated views for Admins and Regular Members:"
            ],
            insightCards: [
              {
                title: "Admin Users",
                text: "Brand managers and platform admins who need full governance — brand creation, editing, archiving, and deletion."
              },
              {
                title: "Regular Users",
                text: "Creatives and other day-to-day contributors — a streamlined experience focused on finding and using assets, without administrative clutter or risk of accidental data loss."
              }
            ],
            images: [
              {
                src: getAssetUrl("case_studies/Prelight/admin_view.png"),
                description: "Admin View — Full management controls, brand creation, and edit/delete permissions."
              },
              {
                src: getAssetUrl("case_studies/Prelight/regular_full.png"),
                description: "Regular Member View — Read-only catalog browsing with management actions safely hidden."
              }
            ]
          },
          {
            heading: "Outcome & Impact",
            insightCards: [
              {
                title: "Faster Brand Identification",
                text: "Thumbnail‑forward brand cards cut visual scanning time and made brand selection immediate."
              },
              {
                title: "Scalable Brand Libraries",
                text: "Pagination, filtering, and structured card limits ensured the grid stays usable as organizations grow."
              },
              {
                title: "Safer, Role‑Appropriate Governance",
                text: "A full edit/delete system plus differentiated Admin vs. Member views reduced accidental data loss and prevented unauthorized changes."
              }
            ]
          }
        ]
      },
      {
        id: "catalog-page",
        subtitle: "03 / Project 2",
        content: [
          {
            heading: "Challenge 2: Revealing Atlas’s Hidden Intelligence to Build a Searchable, Explainable Asset Catalog",
            paragraphs: [
              "Atlas’s catalog page currently acts mostly as a system storage. Assets are uploaded, automatically categorized by AI, and made available to other MCP tools — but users see almost none of the intelligence happening behind the scenes. "
            ]
          },
          {
            heading: "What Was Missing",
            paragraphs: [
              "Atlas’s AI intelligence remained largely invisible in the UI, leaving brand teams without the context they needed to understand, trust, or act on how their assets were interpreted and categorized."
            ],
            image: getAssetUrl("case_studies/Prelight/catalog_problems.png")
          },
          { centeredText: "Atlas needed to evolve from a hidden AI engine into a transparent, descriptive, brand‑ready knowledge base that actually improves user workflows." },

          {
            heading: "Why This Matters",
            paragraphs: [
              "Atlas's AI engine already does the work — but if brand teams can't see or trust its reasoning, they fall back to manual workarounds, support tickets pile up, and the product's core value never lands. Surfacing that intelligence transforms Atlas from an unseen process into a trusted, brand-ready system teams actually rely on."
            ]
          },

          {
            heading: "How I Approached It",
            highlightBox: {
              text: "How might we reveal Atlas’s AI intelligence in a way that helps teams confidently find, interpret, and rely on their assets?",
              borderColor: "#26afff",
              bgColor: "rgba(38, 175, 255, 0.08)"
            }
          },
          {
            heading: "What I Shipped",
            featureRows: [
              {
                title: "1. Faster Asset Discovery",
                description: "<p><strong>Before:</strong> Users were limited to digging through folders and filenames, with an underpowered search bar labeled “search documents” that didn’t reflect the system’s actual capabilities.</p><p><strong>Now:</strong> Users search semantically — by mood, tone, usage, brand elements, scenes.</p><p><strong>Workflow impact:</strong></p><ul><li>Creative teams find “calm lifestyle shots” or “blue‑toned product images” instantly</li><li>No more guessing filenames</li><li>Search time drops significantly</li></ul>",
                video: getAssetUrl("case_studies/Prelight/search.mov")
              },
              {
                title: "2. Clearer Understanding of Each Asset",
                description: "<p><strong>Before:</strong> Users had to rely on external MCP tools like Claude to interpret an asset — the web app itself offered no way to view meaningful file information.</p><p><strong>Now:</strong> Atlas surfaces mood, tone, visual style, usage context, brand elements, and more.</p><p><strong>Workflow impact:</strong></p><ul><li>Designers quickly validate emotional fit</li><li>Marketers confirm brand consistency</li><li>Editors understand usage context without moving or downloading files</li></ul>",
                video: getAssetUrl("case_studies/Prelight/metadata.mov")
              },
              {
                title: "3. Trustworthy AI Decisions (Provenance)",
                description: "<p><strong>Before:</strong> The Decision Trail lived on a separate page, making AI classification feel hidden with no clear signal of which assets needed attention.</p><p><strong>Now:</strong> The redesign introduces provenance details and status tags like 'auto‑approved' / 'needs review' directly in the catalog list, creating an immediate pathway to the Decision Trail.</p><p><strong>Workflow impact:</strong></p><ul><li>Users verify why an asset was tagged</li><li>Compliance teams audit decisions easily</li><li>Brand teams trust the system</li></ul>",
                image: getAssetUrl("case_studies/Prelight/file_tag.png"),
                video: getAssetUrl("case_studies/Prelight/human_approved.mov")
              }
            ]
          },
          {
            heading: "Outcome & Impact",
            insightCards: [
              {
                title: "Semantic Discovery Unlocked",
                text: "Search shifted from filename‑guessing to meaning‑based queries, dramatically reducing time to find the right asset."
              },
              {
                title: "Instant Asset Comprehension",
                text: "Rich metadata surfaced directly in the UI, enabling designers, marketers, and editors to understand an asset without external tools or downloads."
              },
              {
                title: "Visible, Trustworthy AI Decisions",
                text: "Provenance details and status tags made AI classification explainable, improving confidence, reducing support tickets, and strengthening brand governance."
              }
            ]
          }
        ]
      },
      {
        id: "process",
        subtitle: "04 / My Process",
        content: [
          {
            heading: "End-to-End Design & Engineering Workflow",
            paragraphs: [
              "Bridging user research, fast prototyping, and frontend code delivery:"
            ]
          },
          {
            insightCards: [
              {
                title: "1. Audit",
                text: "Competitive analysis and journey mapping together gave me a clear picture of where Atlas lagged behind industry standards and how users actually moved through the experience, revealing the friction points that shaped the redesign.",
                images: [
                  getAssetUrl("case_studies/Prelight/analysis.png"),
                  getAssetUrl("case_studies/Prelight/audit.png")
                ]
              }
            ]
          },
          {
            insightCards: [
              {
                title: "2. Validating & Planning",
                text: "Aligned with my manager and the backend engineer to scope what was feasible and worth prioritizing."
              },
              {
                title: "3. Design & Iteration",
                text: "Built mockups, ran lightweight A/B testing, and gathered feedback wherever possible (internal stakeholders, connections working in agencies/creative fields). Used Figma Make to generate feature explorations faster."
              },
              {
                title: "4. Code & Handoff",
                text: "Connected the Figma MCP to Claude Code to help implement features directly from design files into the frontend application."
              }
            ]
          }
        ]
      },
      {
        id: "reflection",
        subtitle: "05 / Reflections & Takeaways",
        content: [
          {
            heading: "Challenges & Key Takeaways",
            bullets: [
              "<strong>Finding the Quick Wins</strong> — Working at a startup means limited time and resources — there's no room to design and build everything. A big part of the work was figuring out which problems were worth solving first and which fixes would deliver the most value for the least lift.",
              "<strong>Building a Design to Code Workflow</strong> — Coming in as one of the first UX/UI hires, there were no design files — the design system lived only in the codebase. To speed up the entire workflow, I extracted the existing tokens and component patterns and used Figma Make and Claude to rebuild them as a working Figma library. It wasn't perfect, but it gave me a solid starting point for quick prototyping and ideation.",
              "<strong>Using AI Intentionally to Elevate UX</strong> — I learned to use AI meaningfully by understanding its actual capabilities, identifying where it could genuinely improve workflows, and leveraging existing backend intelligence — like metadata extraction and auto‑tagging — to enhance the user experience."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "pennies",
    title: "Pennies",
    shortDescription: "A Banking App For Parents & Teens",
    tags: ["Personal Project", "2026"],
    role: "UX/UI Designer (End-to-End)",
    projectType: "Mobile Application",
    projectCategory: "Personal Project",
    timeline: "12 Weeks",
    tools: ["Figma", "FigmaMake", "Miro"],
    coverImage: getAssetUrl("case_studies/Pennies/pennies_thumbnail.webp"),
    headerImage: getAssetUrl("case_studies/Pennies/p_thumbnail2.webp"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "Context",
            paragraphs: [
              "Bank accounts are opening earlier than ever, and with the rise of banking programs and services built for younger generations, I saw a market I wanted to tap into. What started as a UX class assignment became personal when I recognized a problem in my own family: the dynamic around money — where parents want to teach financial responsibility without lecturing, while still giving their child room to learn.",
            ]
          },
          {
            heading: "The Problem",
            paragraphs: [
              "Most people open their first bank account between ages 13 and 17, a formative window where real-world financial habits begin to take shape. Yet teens in this stage often lack meaningful financial literacy, while parental oversight can easily slip into micro‑management — creating friction, confusion, and ultimately abandonment of traditional banking apps."
            ],
            image: getAssetUrl("case_studies/Pennies/info1_1.webp"),
            highlightBox: {
              text: "How might we help teens learn by doing while giving parents the peace of mind that their teens are supported, not left alone?"
            }
          },

          {
            heading: "The Solution: Turning Real Spending Habits Into Guided Learning",
            paragraphs: [
              "Pennies turns everyday spending into learning moments. Penni, an in-app assistant, gives teens personalized insights and goal-based nudges, while parents retain configurable oversight — replacing surveillance with guided independence."
            ],
            stackedSpread: true,
            images: [
              {
                src: getAssetUrl("case_studies/Pennies/solution1.webp"),
                description: "1. Keep track of spendings"
              },
              {
                src: getAssetUrl("case_studies/Pennies/solution2.webp"),
                description: "2. Get personalized advice and tips"
              },
              {
                src: getAssetUrl("case_studies/Pennies/solution3.webp"),
                description: "3. Set tangible goals with guidance"
              }
            ]
          }
        ]
      },
      {
        id: "research",
        subtitle: "02 / Research",
        content: [
          {
            heading: "The Core Tension: Uncertainty on Both Sides",
            paragraphs: [
              "I spoke with five parent-teen pairs to understand where financial learning breaks down. What emerged was a shared sense of uncertainty:"
            ],
            povGrid: [
              {
                tag: getAssetUrl("case_studies/Pennies/parents_pov.webp"),
                problems: [
                  "1. Unsure how to teach financial skills effectively",
                  "2. Limited visibility into teen spending",
                  "3. Balancing control with independence"
                ],
                opportunityTitle: "Opportunity #1",
                opportunities: [
                  "1. Provide guided, age appropriate financial education tools for parents",
                  "2. Support gradual financial independence where teens earn autonomy step by step",
                  "3. Reinforce good habits with feedback"
                ]
              },
              {
                tag: getAssetUrl("case_studies/Pennies/teen_pov.webp"),
                problems: [
                  "1. Lack of financial education in school",
                  "2. Inconsistent income which makes makes planning and saving difficult",
                  "3. Difficulty separate needs from wants, leading to frequent impulse purchases"
                ],
                opportunityTitle: "Opportunity #2",
                opportunities: [
                  "1. Make saving feel tangible and rewarding",
                  "2. Increase awareness around spending decisions, distinguishing needs vs. wants",
                  "3. Support budgeting with flexible systems"
                ]
              }
            ],
            centeredText: "These conversations revealed two parallel needs: parents needed tools to <em>guide without controlling</em>, and teens needed support that <em>felt empowering</em> rather than punitive. This became the foundation for the design direction."
          },
          {
            heading: "Where the Market Falls Short",
            paragraphs: [
              "Next, I analyzed competitors in the market to identify gaps that had not yet been addressed."
            ],
            imagePovSplit: {
              image: getAssetUrl("case_studies/Pennies/info2.webp"),
              problemCard: {
                title: "Market Gap:",
                text: "Few offer personalized, real-time financial guidance that adapts to teens' actual spending behaviors"
              },
              opportunityCard: {
                title: "Opportunity #3",
                text: "Provide a personalized experience that gives real, actionable insights"
              }
            },
            centeredText: "With both the emotional and market gaps clear, the next step was translating these insights into a solution.",

          },
          {
            heading: "AI Inspiration: Turning Spending Into Guided Learning",
            paragraphs: [
              "Financial apps already use AI for transaction intelligence, risk detection, and predictive modeling. Tools from Capital One, Revolut, Amex, and Bank of America’s Erica categorize spending and surface contextual insights."
            ],
            insightCards: [
              {
                title: "Transaction Intelligence",
                text: "Auto‑categorizes purchases and identifies spending patterns — the same AI used by Capital One and Revolut.<br/><br/><strong>Application in Pennies:</strong> Translate raw purchase logs into simple, teen‑friendly insights and visual categories."
              },
              {
                title: "Risk & Anomaly Detection",
                text: "Models used by American Express and Chase flag unusual behavior.<br/><br/><strong>Application in Pennies:</strong> Highlight overspending trends before budget limits are breached."
              },
              {
                title: "Personalized Coaching",
                text: "Apps like Erica and Cleo already deliver behavior‑based nudges.<br/><br/><strong>Application in Pennies:</strong> Deliver goal‑aligned guidance tied to the account's prepaid spending."
              },
              {
                title: "Conversational Assistance",
                text: "LLM‑powered assistants help users understand their finances.<br/><br/><strong>Application in Pennies:</strong> Introduce financial guidance through supportive conversations."
              },
              {
                title: "Predictive Modeling",
                text: "Financial institutions use ML to forecast spending and detect risky patterns.<br/><br/><strong>Application in Pennies:</strong> Anticipate moments where users may overspend."
              }
            ]
          },
          {
            heading: "Setting Up The Foundation: A Prepaid Model",
            paragraphs: [
              "A prepaid card model mirrors how leading youth‑banking apps like Greenlight, GoHenry, BusyKid, and FamZoo operate — giving teens a safe, capped spending environment while giving parents flexible oversight. It’s the industry‑proven foundation that Penni’s AI guidance can build on."
            ],
            image: getAssetUrl("case_studies/Pennies/info4.webp")
          },
          {
            heading: "AI‑Powered Guidance: Research That Supports Penni",
            paragraphs: [
              "Penni builds on research showing that personalized, behavior‑based nudges significantly improve teen financial habits, and studies on character‑driven conversational AI demonstrate higher engagement and learning. Layered onto a prepaid model, AI turns everyday purchases into safe, contextual learning moments that help teens build confidence while giving parents peace of mind."
            ],
            image: getAssetUrl("case_studies/Pennies/penni_ai.png")
          },
          {
            heading: "Defining The User Journey",
            paragraphs: [
              "Before designing screens, I mapped the ideal journey: a teen making everyday purchases, receiving gentle guidance, and gradually gaining autonomy while parents stay informed through lightweight oversight."
            ],
            image: getAssetUrl("case_studies/Pennies/info3.webp")
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "1. Pivoting Toward Long Term Behavior Change",
            paragraphs: [
              "My first concept focused on real‑time “out of budget” alerts. Teens users ignored them. They felt restrictive instead of helpful.",
              "This was a turning point. Instead of reacting to mistakes, the solution needed to guide teens users before the moment of purchase. This insight shifted the entire product toward proactive, goal‑driven learning.",
            ],
            image: getAssetUrl("case_studies/Pennies/info5_1.webp"),

          },
          {
            image: getAssetUrl("case_studies/Pennies/info5_2.webp")
          },
          {
            heading: "2. Making Financial Insights Approachable",
            paragraphs: [
              "After the first round of testing, I created a higher fidelity prototype and ran quick tests on existing features. Some major iterations includes adding a spending patterns graph for teens and a friendly system that flags overspending trends while offering guidance rather than warnings.",

            ],
            image: getAssetUrl("case_studies/Pennies/info6.webp"),

          },
          {
            heading: "3. Personalized Guidance Through A Friendly Character",
            paragraphs: [
              "Next, I introduced a character called Penni to make financial guidance feel more human, approachable, and engaging for teens. Instead of interacting with a generic AI chatbot, Penni offers a consistent personality and tone, helping users build trust and stay motivated. This shift transforms budgeting from something intimidating into a supportive experience, making financial learning feel less like a task and more like a conversation.",
            ],
            image: getAssetUrl("case_studies/Pennies/info7.webp"),

          },
          {
            heading: "4. Unlocking Progress Through Incentives",
            paragraphs: [
              "Finally a major addition was a \"Customize\" feature, where teens can unlock fun accessories for Penni by completing tasks related to their account. This gamified approach encourages consistent engagement, turning financial management into a motivating and rewarding experience."
            ],
            image: getAssetUrl("case_studies/Pennies/info9.webp"),

          },
          {
            heading: "Design System",
            paragraphs: [
              "For the high fidelity mockup, I created a design system as guidelines for my final design with a clear branding and ensuring that all the components are consistent throughout."
            ],
            image: getAssetUrl("case_studies/Pennies/info10.webp"),

          }
        ]
      },
      {
        id: "features",
        subtitle: "04 / Final Features",
        content: [
          {
            heading: "Onboarding",
            paragraphs: [
              "A simple sign up flow where both users get to discuss rules and restrictions together, signing a parent-teen agreement at the end."
            ],
            image: getAssetUrl("case_studies/Pennies/onboarding.webp")
          },
          {
            heading: "Home Page",
            paragraphs: [
              "The homepage provides transaction overviews for both teens and parents, plus savings progress and tips for parent"
            ],
            image: getAssetUrl("case_studies/Pennies/homepage.webp")
          },
          {
            heading: "Ask Penni",

            grid: {
              items: [
                {
                  video: getAssetUrl("case_studies/Pennies/ask1.mp4"),
                  title: "1. Customize",
                  description: "Customize cards, choose layout preferences, and select visual themes."
                },
                {
                  video: getAssetUrl("case_studies/Pennies/ask2.mp4"),
                  title: "2. Ask",
                  description: "Ask Penni financial questions and receive real-time personalized tips."
                },
                {
                  video: getAssetUrl("case_studies/Pennies/ask3.mp4"),
                  title: "3. Apply",
                  description: "Apply recommendations to your budget and track goals easily."
                }
              ]
            }
          },
          {
            heading: "Budget",
            paragraphs: [
              "Budget tracking for teens, with parental spending controls."
            ],
            image: getAssetUrl("case_studies/Pennies/budget.webp")
          },
          {
            heading: "What success looks like",
            metrics: [
              {
                title: "For Teens",
                bullets: [
                  "<strong>2×</strong> increase in checking weekly spending",
                  "<strong>>50%</strong> reach at least one savings goal",
                  "Rewards engagement",
                  "Higher confidence in understanding where their money goes"
                ]
              },
              {
                title: "For Parents",
                bullets: [
                  "Fewer tense money conversations reported",
                  "Clearer visibility into spending patterns",
                  "More collaborative goal-setting moments outside of the app"
                ]
              },
              {
                title: "For Pennies",
                bullets: [
                  "Increased engagement with contextual tips",
                  "Consistent use of budgeting and goal-tracking features"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "reflection",
        subtitle: "05 / Reflection",
        content: [
          {
            heading: "Key Takeaways",
            paragraphs: [
              "<strong>Designing for Multi-User Dynamics</strong> - This project taught me how to balance a delicate ecosystem where two users have conflicting goals. Designing for trust requires transparency on both sides of the interface.",
              "<strong>AI as a Feature vs. AI as a Solution</strong> - I learned that AI shouldn’t just automate budgeting — it should support it. By integrating AI contextually, the experience shifted from a tedious digital task into a more human, guided partnership."
            ]
          }

        ]
      }
    ]
  },
  {
    id: "Build-A-Box",
    title: "Hershey's: Build A Box",
    shortDescription: "E-Commerce Customization Flow",
    tags: ["Dentsu Internship", "2025"],
    protected: true,
    role: [
      "My Role: UX/UI Design Intern",
      "Collaborators: 1 Frontend Engineer, 1 PM, 1 Design Lead"
    ],
    projectType: "E-Commerce Web Design",
    projectCategory: "Internship Project",
    timeline: "3 Weeks",
    tools: ["Figma"],
    coverImage: getAssetUrl("case_studies/Hershey/hershey_header.webp"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Project Overview",
        content: [
          {
            heading: "Designing a Customizable Shopping Experience",
            paragraphs: [
              "During my internship at Dentsu, I worked on a page for Hershey’s e-commerce site that let customers build their own assortment of Skinny Packs for a Back‑to‑School campaign. My role focused on shaping an intuitive customization flow that felt familiar within the existing site ecosystem while introducing new interaction patterns that supported personalization."
            ]
          },
          {
            heading: "My Role & Contributions: Leading UI While Supporting UX Strategy",
            paragraphs: [
              "I led the UI design and contributed to UX strategy across the page’s layout, interaction patterns, and decision logic. My work included creating high‑fidelity Figma mockups aligned with brand guidelines and collaborating closely with the client team to refine the experience."
            ],
            metrics: [
              {
                title: "UI design",
                text: "Designed around 50 high‑fidelity screens and UI explorations on Figma"
              },
              {
                title: "UX strategy",
                text: "Mapped out the user flow, page layouts, and interaction patterns directly with a UX Design Lead"
              },
              {
                title: "Aligning with cilents",
                text: "3 rounds of feedback cycles presenting directly to client stakeholders (the Hershey's team)"
              }
            ]
          },
          {
            heading: "Client Request: A Fast, Flexible Customization Page",
            paragraphs: [
              "The  Hershey's team needed a dedicated page that allowed customers to build a 24‑item pack with specific rules: a minimum of four bags per flavor, real‑time editing, and a clear path to checkout. The project had a tight three‑week turnaround, requiring a design that balanced speed, feasibility, and brand consistency."
            ],
          },
          { centeredText: "🔒 Due to NDA I can only show a highlevel overview of my work" },

        ]
      },

      {
        id: "final-deliverable",
        subtitle: "02 / Final Deliverable",
        content: [
          {
            heading: "Final Deliverable",
            paragraphs: [
              "The final design launched on Hershey’s online store from August 2025 to May 2026."
            ],


            image: getAssetUrl("case_studies/Hershey/1.webp"),
          },
          {
            image: getAssetUrl("case_studies/Hershey/final_mobile.webp"),
          },
          {
            heading: "Key UX Decisions",
            paragraphs: [
              "I designed three main components to address the client’s requirements:"
            ],
            featureRows: [
              {
                title: "Header",
                description: "A header that displayed the total amounts needed and minimum-per-flavor constraints, giving users clear context of what was required.",
                image: getAssetUrl("case_studies/Hershey/key1.webp")
              },
              {
                title: "Mini Cart",
                description: "A summary that updated in real time as users added or removed items, supporting an intuitive editing flow and giving users constant visibility into their progress.",
                image: getAssetUrl("case_studies/Hershey/key2.webp")
              },
              {
                title: "Item Selector",
                description: "A clear grid layout that let users easily adjust quantities for each flavor, enforcing the minimum-per-flavor rule through real‑time validation.",
                image: getAssetUrl("case_studies/Hershey/key3.webp")
              }
            ]
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "Balancing Needs, Constraints, and Speed",
            paragraphs: [
              "With only three weeks to deliver a final design, I began with an MVP approach that met essential client requirements while staying within developer constraints. I reused existing components where possible and introduced new ones only when they meaningfully improved clarity or usability.",
              "I moved through three rounds of iteration, presenting directly to the client team each time. These sessions helped validate assumptions, refine layout decisions, and ensure feasibility before handing the design off to development."
            ],
            images: [
              {
                src: getAssetUrl("case_studies/Hershey/iteration1.webp"),
                description: "Round 1 — MVP Scoping"
              },
              {
                src: getAssetUrl("case_studies/Hershey/iteration2.webp"),
                description: "Round 2 — Refined Layout"
              },
              {
                src: getAssetUrl("case_studies/Hershey/iteration3.webp"),
                description: "Round 3 — Final Handoff"
              }
            ]
          },
          {
            heading: "Translating Features to Mobile",
            paragraphs: [
              "Once the desktop design was finalized, I explored different approaches for the mobile layout, leading multiple iterations to refine the user flow.",
            ],
            image: getAssetUrl("case_studies/Hershey/mobile.webp")
          }
        ]
      },
      {
        id: "takeaways",
        subtitle: "04 / Key Takeaways",
        content: [
          {
            heading: "What This Project Taught Me",
            bullets: [
              "<strong>Designing Within Constraints</strong> — Working under tight timelines taught me how to prioritize tasks. I learned to distinguish between “nice‑to‑have” ideas and the core interactions that truly shaped the user experience.",
              "<strong>Embracing Feedback</strong> — Balancing input from both the client and developers pushed me to refine how I evaluate feedback. I learned to identify what improves usability versus what introduces unnecessary complexity.",
              "<strong>Future Scoping</strong> — Even while shipping fast, I learned the value of presenting thoughtful future‑state concepts; showing how the experience could evolve often helped clients see the long‑term potential and green‑light improvements beyond the MVP."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cysana",
    title: "Cysana",
    shortDescription: "Redesigning A Malware Detection Dashboard",
    tags: ["Conatix", "2024"],
    protected: true,
    role: [
      "My Role: Product Design Intern (UX/UI)",
      "Collaborators: 2 Full Stack Engineers, 1 Data Scientist, 1 PM"
    ],
    projectType: "Enterprise SaaS Dashboard",
    projectCategory: "Internship Project",
    timeline: "10 Weeks",
    tools: ["Figma"],
    coverImage: getAssetUrl("case_studies/Cysana/conatix_header.webp"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Project Overview",
        content: [
          {
            heading: "Redesigning Malware Detection & Threat Monitoring",
            paragraphs: [
              "During my internship at Conatix, I worked on Cysana — an enterprise malware detection dashboard designed for security administrators. My role focused on shaping an intuitive monitoring experience, streamlining data visualizations, and establishing clear workflows for real-time threat response."
            ]
          },
          {
            heading: "My Role & Contributions",
            paragraphs: [
              "I led the dashboard redesign across layout, data visualization, and information architecture. My work included creating high-fidelity Figma mockups, establishing color severity guidelines, and collaborating with backend engineers to ensure data accuracy."
            ]
          },
          {
            heading: "The Problem",
            paragraphs: [
              "Security admins were overwhelmed by dense data logs and fragmented views. The project required designing a unified dashboard that balanced data density, fast decision-making, and visual clarity under tight engineering constraints."
            ],
          }
        ]
      },
      {
        id: "The Solution",
        subtitle: "02 / Solution",
        content: [
          {
            heading: "Key Features",
            paragraphs: [
              "The redesigned Cysana dashboard introduced core features that made threat detection intuitive and actionable:"
            ],
            image: getAssetUrl("case_studies/Cysana/solution.webp"),
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "Restructuring Information Architecture: Existing vs. New State",
            paragraphs: [
              "The distinct tabs are shown in blue, with their corresponding sections outlined below. After mapping out the pages and reviewing user feedback the team had gathered, it became clear that much of the information was repetitive, and several pages could be consolidated. Additionally, there were opportunities to introduce new features to improve the user experience."
            ],
            image: getAssetUrl("case_studies/Cysana/before.webp")

          },
          {
            heading: "New State",
            paragraphs: [
              "Sections moved are outlined in light blue, and newly added sections are in purple. The final page structure allowed for streamlined information and incorporate essential features, including a filtering system and notifications."
            ],
            image: getAssetUrl("case_studies/Cysana/after.webp")

          },
          {
            heading: "1. Making Critical Files Impossible to Miss",
            insightCards: [
              {
                title: "Pain Point",
                text: "Lack of visual indicators made it hard to quickly scan files."
              },
              {
                title: "Research & Insights",
                text: "Users wanted to be immediately alerted to flagged files and status changes."
              },
              {
                title: "Outcome",
                text: "Introduced a color-coded alert system and a dedicated section for critical files, enabling faster detection and response."
              }
            ],
            beforeAfterSlider: {
              beforeImage: getAssetUrl("case_studies/Cysana/main_before.webp"),
              afterImage: getAssetUrl("case_studies/Cysana/main_after.webp"),
              beforeLabel: "Before",
              afterLabel: "After"
            }
          },
          {
            heading: "2. Cutting the Clicks: A Unified File Review Experience",
            insightCards: [
              {
                title: "Pain Point",
                text: "Users had to jump between multiple pages to review files, slowing down their workflow."
              },
              {
                title: "Research & Insights",
                text: "Interviews revealed users cared more about reviewing files than the type of malware detected."
              },
              {
                title: "Outcome",
                text: "A single-page design with tabs streamlined file review and significantly improved usability."
              }
            ],
            beforeAfterSlider: {
              beforeImage: getAssetUrl("case_studies/Cysana/file_before.webp"),
              afterImage: getAssetUrl("case_studies/Cysana/file_after.webp"),
              beforeLabel: "Before",
              afterLabel: "After"
            }

          },
          {
            heading: "3. Reducing Support Tickets with Self-Service Answers",
            insightCards: [
              {
                title: "Pain Point",
                text: "Users lacked a clear resource hub for troubleshooting and common questions."
              },
              {
                title: "Research & Insights",
                text: "Research showed users wanted a simple, centralized place to quickly find answers without contacting support."
              },
              {
                title: "Outcome",
                text: "Created a scalable FAQ & Support page that addressed this gap, improved self-service, and allowed easy expansion as new information emerged."
              }
            ],
            image: getAssetUrl("case_studies/Cysana/faq.webp")
          },
          {
            heading: "Impact & Validation",
            paragraphs: [
              "By restructuring the information architecture and refining key user workflows, the redesign achieved measurable improvements across core metrics:"
            ],
            metrics: [
              {
                title: "Simplified the Client-Facing UI",
                text: "Cut information overload by relocating granular data to the admin dashboard and restructuring the IA — giving client users a cleaner, faster view of what matters most."
              },
              {
                title: "Reduced task completion time by 20%",
                text: "Surfaced system health, recent detections, and critical stats in a single glance, reducing the steps needed to assess and respond to threats."
              },
              {
                title: "Introduced Features That Moved Satisfaction",
                text: "Created filters, protection statuses, and alerting — driving a 50%+ increase in user satisfaction scores in usability surveys."
              }
            ]
          }
        ]
      },
      {
        id: "takeaways",
        subtitle: "04 / Key Takeaways",
        content: [
          {
            heading: "What This Project Taught Me",
            bullets: [
              "<strong>Prioritizing User Feedback as a Driver for IA Changes</strong> — User interviews revealed what truly mattered (fast file review, clear alerts, self‑service answers), guiding the consolidation of pages and the introduction of features like unified review tabs and a scalable FAQ hub.",
              "<strong>Not to be Afraid to Ask Questions</strong> — Especially when I didn’t fully understand how the data was being extracted or how analysts worked. It was important to speak up since that curiosity was essential for designing a system that actually fit real security workflows."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "petals-worth",
    title: "A Petal's Worth",
    shortDescription: "Building A Collaborative Digital Garden",
    featured: false,
    tags: ["Senior Thesis", "2026"],
    role: "Design Engineer (UX/UI, Front-End Development)",
    projectType: "Creative Development & Design",
    projectCategory: "Personal Project",
    timeline: "14 Weeks",
    tools: ["Figma", "React", "Tailwind CSS", "Gemini", "Claude Code"],
    coverImage: getAssetUrl("case_studies/Petal/header.webp"),
    headerImage: getAssetUrl("case_studies/Petal/header.webp"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "Background",
            paragraphs: [
              "A Petal's Worth is a shared digital garden where people can pause, breathe, and make something simple together.",
              "This was my undergrad senior thesis project, and instead of creating another static prototype, I challenged myself to design, build, and ship a fully functional interactive product using Gemini and Claude Code. I ultimately wanted to create a live experience for people to enjoy and interact with, exploring ways I can promote group interactions."
            ],
            image: getAssetUrl("case_studies/Petal/overview.webp")
          },
          {
            heading: "The Problem",
            paragraphs: [
              "Modern digital interaction often feels noisy, performative, and overwhelming. While social platforms connect us constantly, they rarely offer spaces for quiet reflection or low-pressure, collective expression."
            ]
          },
          {
            heading: "The Goal & Question",
            paragraphs: [
              "How do we turn a simple act of sharing into an interactive visual system that builds a sense of connection?"
            ]
          },
          {
            heading: "Launch Impact & Validation",
            paragraphs: [],
            metrics: [
              {
                number: "50+",
                text: "users explored the garden on demo day"
              },
              {
                number: "100+",
                text: "submissions in week one (~2x repeat engagement)"
              }
            ]
          }
        ]
      },
      {
        id: "research",
        subtitle: "02 / Research",
        content: [
          {
            heading: "Framing the Experience",
            paragraphs: [
              "To understand what makes digital spaces feel calm rather than burdensome, I looked into daily habit apps and mindfulness tools. I found three key insights that shaped the product requirements:"
            ],
            insightCards: [
              {
                title: "Lowering the Barrier to Entry",
                text: "Users experience prompt fatigue when asked for long-form text responses. Visual and symbolic expressions feel lower-stakes and more playful."
              },
              {
                title: "Shared Presence Over Likes",
                text: "People feel connected through shared space and visual momentum, not necessarily through comments, follower counts, or performative engagement metrics."
              },
              {
                title: "Ritual over Retention",
                text: "A daily reset encourages intentional micro-moments rather than prolonged screen time."
              }
            ]
          },
          {
            heading: "User Research & Key Insights",
            paragraphs: [
              "User interviews confirmed that people value low-pressure, abstract expression and shared visual presence over text-heavy posts or public feeds."
            ],
            "povGrid": [
              {
                "assumptionTitle": "Finding 1: Privacy & Comfort in Expression",
                "tag": "User Insight",
                "problems": [
                  "Users feel hesitant to share deeply personal text in open or public digital spaces."
                ],
                "opportunityTitle": "Design Response",
                "opportunities": [
                  "Replaced text-heavy inputs with symbolic forms (seeds, petals) as the primary medium, lowering the barrier to entry."
                ]
              },
              {
                "assumptionTitle": "Finding 2: Shared Presence Over Performance",
                "tag": "User Insight",
                "problems": [
                  "Users seek quiet, reflective moments and connect better through subtle visual cues rather than performative metrics."
                ],
                "opportunityTitle": "Design Response",
                "opportunities": [
                  "Prioritized dynamic visual growth over traditional 'likes', comments, or public follower feeds."
                ]
              },
              {
                "assumptionTitle": "Finding 3: Close-Knit Spaces First",
                "tag": "User Insight",
                "problems": [
                  "Meaningful digital interactions happen most naturally within trusted, smaller circles of friends or family."
                ],
                "opportunityTitle": "Design Response",
                "opportunities": [
                  "Built private room sessions into the core architecture to give communities intimate, isolated spaces."
                ]
              }
            ]
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "The User Journey",
            image: getAssetUrl("case_studies/Petal/user_flow.webp")
          },
          {
            heading: "01. Garden View Architecture",
            paragraphs: [
              "<strong>Focus: Transitioning from rigid layout to organic visual expansion.</strong>",
              "Before: A rigid, fixed grid made the garden feel restrictive and capped visual capacity quickly as submissions grew.",
              "After: Pivoted to an organic, free-placement model to keep the space feeling open, dynamic, and limitless."
            ],
            image: getAssetUrl("case_studies/Petal/iteration1.webp")
          },
          {
            heading: "02. Capacity & Scaling Logic",
            paragraphs: [
              "<strong>Focus: Managing performance and preventing visual overcrowding.</strong>",
              "Before: Gardens had no capacity caps, risking severe visual clutter and performance drops as user submissions scaled.",
              "After: Introduced room capacity limits and automated archive storage to seamlessly spin up fresh gardens without overcrowding active spaces."
            ],
            image: getAssetUrl("case_studies/Petal/iteration2.webp")
          },
          {
            heading: "03. Session Management & Persistence",
            paragraphs: [
              "<strong>Focus: Balancing user retention with privacy.</strong>",
              "Before: Stateless rooms allowed anyone to jump into spaces anonymously, but provided zero session continuity or memory for returning users.",
              "After (MVP): Built a lightweight password-protected account system to persist user nicknames and last-visited room sessions in a database, enabling instant re-entry while securing room access."
            ],
            image: getAssetUrl("case_studies/Petal/iteration3.webp")
          }
        ]
      },
      {
        id: "features",
        subtitle: "04 / Final Features",
        content: [
          {
            heading: "Group Spaces",
            paragraphs: [
              "Users can create private rooms for friends, teams, or communities that others can easily access with a room code."
            ],
            video: getAssetUrl("case_studies/Petal/group.mov")
          },
          {
            heading: "Daily Form Creation",
            paragraphs: [
              "A lightweight daily flow that begins with a single prompt. Users answer the question, then move directly into creating their form. This prompt resets daily, allowing for new entries."
            ],
            video: getAssetUrl("case_studies/Petal/form.mov")
          },
          {
            heading: "Expressive Forms",
            paragraphs: [
              "Users select a symbolic form that matches their mood, then shape it using intuitive draw and paint controls. Once customized, they submit their reflection and place the finished form into the garden."
            ],
            video: getAssetUrl("case_studies/Petal/expressive.mp4")
          },
          {
            heading: "Shared Garden View + Interaction",
            paragraphs: [
              "All forms appear together in an interactive garden view. Users can explore the landscape, tap into others’ forms, and watch the garden grow."
            ],
            video: getAssetUrl("case_studies/Petal/shared.mov")
          },
          {
            heading: "Persistent Data Storage",
            paragraphs: [
              "All forms are saved and retrievable, allowing gardens to grow organically over time."
            ],
            video: getAssetUrl("case_studies/Petal/storage.mov")
          }
        ]
      },
      {
        id: "reflection",
        subtitle: "05 / Reflection",
        content: [
          {
            heading: "What I Learned",
            bullets: [
              "<strong>Shipping a real product</strong> — Building a deployed system taught me to design for persistence, error states, and real daily return patterns.",
              "<strong>AI as a creative partner</strong> — Gemini and Claude Code accelerated technical execution while keeping design intentional and user-centered.",
              "<strong>Simplicity builds connection</strong> — Users felt connected not because the system was complex, but because it was simple and expressive."
            ],
            image: getAssetUrl("case_studies/Petal/showcase.webp")
          }
        ]
      }
    ]
  },
  {
    id: "expedia",
    title: "Expedia",
    shortDescription: "Reimagining A Flight Booking Experience",
    tags: ["Personal Project", "2025"],
    role: "UX/UI Designer (End-to-End)",
    projectType: "Web UX/UI Redesign",
    projectCategory: "Personal Project",
    timeline: "4 Weeks",
    tools: ["Figma", "Figjam"],
    coverImage: getAssetUrl("case_studies/Expedia/header_img2.webp"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "The Challenge",
            paragraphs: [
              "Expedia helps millions of travelers book flights every year, but the comparison experience falls short. Without a clear, intuitive way to evaluate options, users often feel overwhelmed, lose track of their selections, and ultimately miss out on the best deals."
            ],
            image: getAssetUrl("case_studies/Expedia/the_user.webp")
          },
          {
            heading: "The Solution: Simplifying Flight Choices",
            paragraphs: [
              "Therefore, by introducing a streamlined flight-saving and comparison feature, it aimed to help users track options with ease."
            ],
            video: getAssetUrl("case_studies/Expedia/demo_video.mp4")
          },
          {
            heading: "The Results: ",
            paragraphs: [
              "After testing the final prototype through an unmoderated session with 18 users, here are some success metrics I measured."
            ],
            metrics: [
              {
                title: "Task Success Rate",
                number: "88%",
                text: "of testers performed a core action of clicking \"Save\" or \"Add to Watchlist\" from the search results page."
              },
              {
                title: "Conversion Rate",
                number: "100%",
                text: "of testers who saved a flight booked a trip directly from the Saved Flights page, compared to users who book via the traditional search results loop."
              },
              {
                title: "Reduced Task Completion Time",
                number: "40% ↓",
                text: "in reduction time of users spent evaluating flights, dropping from about 4 minutes down to just 2.5."
              }
            ]
          }
        ]
      },
      {
        id: "research",
        subtitle: "02 / Research",
        content: [
          {
            heading: "Understanding The Problem",
            paragraphs: [
              "To start, in order understand the pain points and uncover opportunities for improvement, I mapped out a research plan that included user interviews and competitive analysis. I wanted to know:"
            ],
            insightGrid: [
              {
                label: "Question 1",
                text: "How do users currently search for and compare flights across different sites?"
              },
              {
                label: "Question 2",
                text: "What challenges do users face when trying to keep track of flights they're interested in?"
              },
              {
                label: "Question 3",
                text: "What workarounds or external tools do users rely on to manage their flight search?"
              }
            ]
          },
          {
            heading: "User Struggles",
            researchSplit: {
              left: {
                paragraphs: [
                  "I conducted 1:1 user interviews and send out surveys to the targeted users."
                ],
                demographic: {
                  title: "Demographic:",
                  lines: [
                    "Current users aged 19-23",
                    "Looking for budget friendly flights"
                  ]
                }
              },
              right: {
                title: "Research methodologies:",
                image: getAssetUrl("case_studies/Expedia/research.webp")
              }
            }
          },
          {
            heading: "Key Findings",
            findingsCards: [
              {
                title: "Multi-Tab Comparison",
                metric: "73%",
                description: "use multiple tabs/sites to compare flights",
                sampleSize: "(17 out of 23 survey respondents)",
                insightLabel: "Insight 1",
                insightText: "Users often have multiple tabs open and switch between sites to compare prices and options."
              },
              {
                title: "Losing Track of Flights",
                metric: "81%",
                description: "reported difficulty returning to a flight",
                sampleSize: "(9 out of 11 interviews)",
                insightLabel: "Insight 2",
                insightText: "Once they find a flight they like, it can be difficult to return to that specific option after navigating away from the page."
              },
              {
                title: "External Tools Usage",
                metric: "57%",
                description: "rely on external tools to save or compare",
                sampleSize: "(13 out of 23 survey respondents)",
                insightLabel: "Insight 3",
                insightText: "Many users resort to external tools like Google Flights, notes apps, or screenshots to compare flights."
              }
            ]
          },
          {
            heading: "Therefore...",
            highlightBox: {
              text: "How might we create a more intuitive flight comparison experience on Expedia, allowing users to seamlessly track and organize their travel choices without feeling overwhelmed or frustrated?"
            }
          },
          {
            heading: "Who Are We Designing For?",
            paragraphs: [
              "Before going into brainstorming solutions, I created a user persona to understand our target user based on insights from the initial user research. Meet Molly, a college student who is interested in quickly finding budget friendly flights that matches with her travel plans."
            ],
            image: getAssetUrl("case_studies/Expedia/persona.webp")
          },
          {
            heading: "The Current User Journey",
            paragraphs: [
              "In addition to a user persona, I mapped out what Molly potentially says, thinks, feels, and does during the flight search process. The key here to is identify the low points and pain points along the way."
            ],
            image: getAssetUrl("case_studies/Expedia/journeymap.webp")
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "Steps To Solution",
            paragraphs: [
              "From looking at different flight booking platforms, I learned that there's an increasing emphasis on seamless flight comparison, price tracking, and user-friendly interfaces without overwhelming upsells or redirection.",
              "Therefore, top platforms like Google Flights, that can balance affordable, competitive pricing with organized, transparent flight details are well-positioned to attract and retain users."
            ],
            image: getAssetUrl("case_studies/Expedia/IA.webp")
          },
          {
            heading: "The Best Option",
            paragraphs: [
              "With the insights in hand, I began brainstorming solutions to improve the flight comparison process on Expedia. The key challenge was to create a feature that allowed users to evaulate flights options seamlessly without disrupting their workflow."

            ],
            image: getAssetUrl("case_studies/Expedia/chart.webp")
          },
          {
            heading: "Envisioning The New User Flow",
            paragraphs: [
              "Then I reimagined the user flow with the new feature and how it would help minimalize the frustration of going back to the beginning of the search process."

            ],
            image: getAssetUrl("case_studies/Expedia/full_userflow.webp")
          }
        ]
      },
      {
        id: "outcome",
        subtitle: "04 / Outcome",
        content: [
          {
            heading: "Initial Wireframes And User Testing",
            paragraphs: [
              "Before moving on to digital wireframes, I quickly sketched out some low-fidelity paper wireframes that showcased how the “Pin It” feature would integrate into the flight search experience. This way I can get quickly get ideas out receive some initial feedback before building the design on Figma."
            ],
            image: getAssetUrl("case_studies/Expedia/testing2.webp")
          },
          {
            heading: "Transitioning from Mid-fi to Hi-fi",
            paragraphs: [

            ],

            image: getAssetUrl("case_studies/Expedia/final.webp")
          }
        ]
      },
      {
        id: "reflection",
        subtitle: "05 / Reflection",
        content: [
          {
            heading: "Key Takeaways",
            paragraphs: [
              "1. Testing Early: Rapid prototyping and user feedback helped me refine the interface especially around visibility, usability, and how comparison data was displayed.",
              "‍2. Iterating with Constraints in Mind: Working within Expedia’s existing design system taught me how to ideate creatively while respecting branding, UI consistency, and technical feasibility",
              "‍3. Scoping for MVP: I practiced scoping features for a minimum viable product, prioritizing functions that solve the core user problem while leaving room for future enhancements."


            ]
          }
        ]
      }


    ]
  },
  {
    id: "tiktok-shop",
    title: "Tiktok Shop",
    shortDescription: "Designing For Customer Loyalty",
    tags: ["Personal Project", "2024"],
    role: [
      "My Role: UX/UI Designer",
      "Collaborator: Cher W. (UX/UI Designer)"
    ],
    projectType: "Mobile UX/UI Design",
    projectCategory: "Personal Project",
    timeline: "3 Weeks",
    tools: ["Figma", "Miro", "Notion"],
    coverImage: getAssetUrl("case_studies/Tiktok/header2.webp"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "The Challenge: Low Engagement Despite Interest",
            paragraphs: [
              "Although TikTok Shop has seen success with deals and affordable pricing, only 29% of weekly users have made a purchase. Meanwhile, 26% are interested but have not made a purchase, revealing a crucial gap between interest and action.",
              "This hesitation presents both a trust barrier and a missed opportunity for TikTok to convert engaged users into active buyers."
            ],
            image: getAssetUrl("case_studies/Tiktok/info1.webp")
          },
          {
            heading: "The Solution",
            paragraphs: [
              "Introducing a point‑based rewards system for TikTok Shop to boost product engagement, incentivize first‑time purchases, and encourage repeat buyers."
            ],
            video: getAssetUrl("case_studies/Tiktok/solution.mov")
          },
          {
            heading: "Impact & Validation",
            paragraphs: [
              "Our approach showed positive results, as shown by the following user feedback:"
            ],
            metrics: [
              {
                number: "80%",
                text: "of user expressed interest in interacting with the rewards system"
              },
              {
                number: "70%",
                text: "of users bought a product because of the rewards feature"
              },
              {
                title: "Conversation Rate",
                number: "100%",
                text: "effective in encouraging users to purchase their first product"
              }
            ]
          }
        ]
      },
      {
        id: "Research",
        subtitle: "02 / Research",
        content: [
          {
            heading: "Users hesitate to shop on TikTok due to low trust, strong loyalty to existing platforms, and a lack of social proof.",
            paragraphs: [
              "To understand what drives user behavior, we conducted interviews with both existing TikTok users and newcomers to TikTok Shop. Our goal was to uncover pain points that prevent or disincentivize users from making purchases.",
              "Here are some key takeaways:"
            ],
            insightCards: [
              {
                title: "✨ Existing Brand Loyalty:",
                text: "Many users are already loyal to platforms and stores they frequently shop from."
              },
              {
                title: "👥 Social Proof & Trust:",
                text: "Users expressed hesitation due to a lack of social proof. Since they don't know anyone who uses TikTok Shop, they see no compelling reason to try it."
              },
              {
                title: "👑 Membership & Perks:",
                text: "Users would use the same platforms because they see value in loyalty programs and memberships."
              }
            ]
          },
          {
            heading: "Defining The Users",
            paragraphs: [
              "Then, based on interview data and behavioral trends, we identified two key personas:"
            ],
            image: getAssetUrl("case_studies/Tiktok/persona.webp")
          },
          {
            heading: "💡 Key Insight: Trust and loyalty are the biggest drivers of conversion",
            paragraphs: [
              "Users are unlikely to make the switch unless TikTok Shop delivers personalized value and a sense of trust. Without recognizable benefits or confidence in the platform, there’s little motivation for users to take action."
            ]
          },
          {
            heading: "🤔 Which leads to the question...",
            highlightBox: {
              text: "How might we build trust on Tiktok shops, driving increased customer retention rates and attracting new customers?"
            },
          },
        ]
      },
      {
        id: "Process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "Integrating A Reward System Into TikTok Shop",
            paragraphs: [
              "To bring our concept to life, we mapped out a user flow that demonstrates how a reward system could be seamlessly integrated into the TikTok Shop experience. The flow highlights how the system would be:",
            ],
            image: getAssetUrl("case_studies/Tiktok/userflow.webp")
          },
          {
            heading: "Low Fidelity Wireframes",
            paragraphs: [
              "To quickly explore and communicate our ideas, we created a set of low-fidelity wireframes in Figma. Key elements include: onboarding moments, incentive touchpoints, and loyalty dashboard."
            ],
            image: getAssetUrl("case_studies/Tiktok/wireframe1.webp")
          },
          {
            heading: "Working Prototype",
            paragraphs: [
              "This interactive version allowed users to experience key features such as earning points, tracking progress, and redeeming rewards."
            ],
            image: getAssetUrl("case_studies/Tiktok/wireframe2.webp")
          },
          {
            heading: "Testing Results and Iterations",
            paragraphs: [
              "Here are some key pivots/changes we made according to the user test:"
            ],
            image: getAssetUrl("case_studies/Tiktok/feedback1.webp")
          },
          {
            image: getAssetUrl("case_studies/Tiktok/feedback2.webp")
          }
        ]
      },
      {
        id: "features",
        subtitle: "04 / Final Features",
        content: [
          {
            heading: "FYP Page: Discovery",
            paragraphs: [
              "Discover Tiktok Shop's new rewards system!"
            ],
            video: getAssetUrl("case_studies/Tiktok/final1.mp4")
          },
          {
            heading: "Rewards Page: Engagement",
            paragraphs: [
              "‍Check out fun challenges, gain Tokens, and earn gifts for free."
            ],
            video: getAssetUrl("case_studies/Tiktok/final2.mp4")
          },
          {
            heading: "Shop and Share: Social Trust",
            paragraphs: [
              "‍Buy and share products with friends to earn Tokens"
            ],
            video: getAssetUrl("case_studies/Tiktok/final3.mp4")
          },
          {
            heading: "Redeem And Checkout: Loyalty",
            paragraphs: [
              "Budget tracking for teens, with parental spending controls."
            ],
            video: getAssetUrl("case_studies/Tiktok/final4.mp4")
          }
        ]
      },
      {
        id: "reflection",
        subtitle: "05 / Reflection",
        content: [
          {
            heading: "What I Learned",
            paragraphs: [
              "1. Don't follow assumptions: It is okay to pviot. I learned to question my initial assumptions and let user feedback guide the direction. Instead of focusing on earning points, insights showed users cared more about the reward redemption experience, which led us to pivot our design for greater impact.",
              "‍2. Design with clarity: I learned that even small visual or wording changes can influence how users feel about completing tasks. For example, by simplifying reward tiers and adding clearer progress cues, we made users feel more motivated and in control of their goals. This is something I will keep in mind in my future designs."
            ]
          }
        ]
      }
    ]
  }

];

export const playWorks = [
  {
    id: "petals-worth",
    title: "A Petal's Worth",
    category: "Interactive Design & Case Study",
    video: getAssetUrl('Play_assets/petals_teaser_vid.mp4'),
    link: "/case-studies/petals-worth"
  },
  {
    id: "3d-hat",
    title: "3D Hat Animation",
    category: "3D Motion Design",
    video: getAssetUrl('Play_assets/hatvid.mp4')
  },
  {
    id: "underwater-vr",
    title: "Underwater VR Experience",
    category: "AR/VR Design",
    video: getAssetUrl('Play_assets/underwater_VR.mov')
  },
  {
    id: "logo-animation",
    title: "Logo Motion Design",
    category: "Motion Graphics",
    video: getAssetUrl('Play_assets/Cindy_Chen_Logo_Assignment.mp4')
  }
];
