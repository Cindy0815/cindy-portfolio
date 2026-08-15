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
              "The final design launched on Hershey’s online store from August 2025 to May 2026. The page introduced three core features that made the customization process intuitive and error‑proof:"
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
            insightCards: [
              {
                title: "Header",
                text: "A header that displayed the total amounts needed and minimum-per-flavor constraints, giving users clear context of what was required.",
                image: getAssetUrl("case_studies/Hershey/key1.webp")
              },
              {
                title: "Mini Cart",
                text: "A summary that updated in real time as users added or removed items, supporting an intuitive editing flow and giving users constant visibility into their progress.",
                image: getAssetUrl("case_studies/Hershey/key2.webp")
              },
              {
                title: "Item Selector",
                text: "A clear grid layout that let users easily adjust quantities for each flavor, enforcing the minimum-per-flavor rule through real‑time validation.",
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
              "<strong>Collaborating Across Teams</strong> — Clear communication became essential. Early misalignment caused rework, but once I established a shared vocabulary with developers and the client, the process became smoother and more efficient."
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
              "<strong>Designing for Technical Complexity</strong> — Working with security logs taught me how to distill dense technical data into clear, actionable visual hierarchy so admins can react quickly.",
              "<strong>Cross-Disciplinary Collaboration</strong> — Partnering closely with data scientists and engineers helped align visual layouts with real-world technical capabilities.",
              "<strong>Systems Thinking in Enterprise UI</strong> — Designing reusable dashboard modules ensured consistent interaction patterns and effortless scalability across security tools."
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
          },
          {
            heading: "Impact & Validation",
            paragraphs: [
              "In the end, I measured success through an evaluative usability testing with 5 parent-teen groups. Here are the results:"
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
            heading: "Defining The User Journey",
            paragraphs: [
              "Before designing screens, I mapped the ideal journey: a teen making everyday purchases, receiving gentle guidance, and gradually gaining autonomy while parents stay informed through lightweight oversight."
            ],
            image: getAssetUrl("case_studies/Pennies/info3.webp")
          },
          {
            heading: "Setting Up The Foundation: A Prepaid Model",
            paragraphs: [
              "To support this, I chose a prepaid card system as the foundation. Unlike a traditional debit or credit account, a prepaid model caps risk by design — teens can only spend what's been allocated, which gives parents peace of mind without requiring them to monitor every transaction. This structure became the base layer that Penni's guidance and insights could build on top of."
            ],
            image: getAssetUrl("case_studies/Pennies/info4.webp")
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
              "My first concept focused on real‑time “out of budget” alerts. Teens users ignored them. They felt punitive, not supportive.",
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
                title: "For Pennie",
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
              "1. Designing for Multi-User Dynamics: This project taught me how to balance a delicate ecosystem where two users have conflicting goals. Designing for trust requires transparency on both sides of the interface.",
              "2. AI as a Feature vs. AI as a Solution: I learned that AI shouldn't just automate tasks; it should humanize them. Integrating AI contextually made budgeting feel like a supportive partnership rather than a digital chore."
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
    id: "petals-teaser",
    title: "A Petal's Worth Teaser",
    category: "Motion Graphics",
    video: getAssetUrl('Play_assets/petals_teaser_vid.mp4')
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
