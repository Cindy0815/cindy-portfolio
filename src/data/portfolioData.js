const assetsGlob = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,svg,mp4,mov}', { eager: true, query: '?url', import: 'default' });

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

export const caseStudies = [
  {
    id: "pennies",
    title: "Pennies: AI-Powered Budget Management",
    shortDescription: "A dual interface financial literacy app for teens and parents powered by contextual AI and gamified learning.",
    tags: ["Fintech", "End-to-End UX/UI", "AI Integration"],
    role: "Lead Product Designer",
    timeline: "12 Weeks",
    tools: ["Figma", "FigmaMake", "Miro"],
    coverImage: getAssetUrl("case_studies/Pennies/pennies_thumbnail.png"),
    headerImage: getAssetUrl("case_studies/Pennies/p_thumbnail2.png"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "The Challenge",
            paragraphs: [
              "Teens (typically ages 13-17) lack real-world financial literacy, but parental oversight often crosses into micro-management, causing friction and abandonment of traditional banking apps."
            ],
            image: getAssetUrl("case_studies/Pennies/info1_1.png")
          },

          {
            heading: "The Solution",
            paragraphs: [
              "As a result, I set out to create an experience that turns everyday transactions into learning moments. Guided by Penni, a personalized in app assistant, teen users receive spending insights and goal based suggestions, while parents can still set account rules for added oversight and management."
            ],
            images: [
              {
                src: getAssetUrl("case_studies/Pennies/solution1.png"),
                description: "1. Keep track of spendings"
              },
              {
                src: getAssetUrl("case_studies/Pennies/solution2.png"),
                description: "2. Get personalized advice and tips"
              },
              {
                src: getAssetUrl("case_studies/Pennies/solution3.png"),
                description: "3. Set tangible goals with guidance"
              }
            ]
          },
          {
            heading: "Impact & Validation",
            paragraphs: [
              "In the end, I measured success through an evaluative usability testing with 5 parent-teen groups. Here are the results:"
            ],
            metrics: [
              {
                number: "80%",
                text: "of Tested Teens reported feeling \"coached rather than monitored\" by the Penni interface."
              },
              {
                number: "100%",
                text: "of Parents agreed that the mutual agreement dashboard would significantly reduce weekly verbal friction regarding spending rules."
              },
              {
                title: "Task Success Rate",
                number: "92%",
                text: "of teens successfully set up a automated savings goal and interaction flow without parental intervention."
              }
            ]
          }
        ]
      },
      {
        id: "features",
        subtitle: "02 / Final Features",
        content: [
          {
            heading: "Onboarding",
            paragraphs: [
              "A simple sign up flow where both users get to discuss rules and restrictions together, signing a parent-teen agreement at the end."
            ],
            image: getAssetUrl("case_studies/Pennies/onboarding.png")
          },
          {
            heading: "Home Page",
            paragraphs: [
              "The homepage provides transaction overviews for both teens and parents, plus savings progress and tips for parent"
            ],
            image: getAssetUrl("case_studies/Pennies/homepage.png")
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
            image: getAssetUrl("case_studies/Pennies/budget.png")
          }
        ]
      },
      {
        id: "research",
        subtitle: "03 / Research",
        content: [
          {
            heading: "The Core Tension",
            paragraphs: [
              "I spoke with five parent-teen pairs to understand where financial learning breaks down. What emerged was a shared sense of uncertainty:"
            ],
            povGrid: [
              {
                tag: getAssetUrl("case_studies/Pennies/parents_pov.png"),
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
                tag: getAssetUrl("case_studies/Pennies/teen_pov.png"),
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
            ]
          },
          {
            heading: "Market Insight",
            paragraphs: [
              "Next, I analyzed competitors in the market to identify gaps that had not yet been addressed."
            ],
            image: getAssetUrl("case_studies/Pennies/info2.png")
          },
          {
            heading: "Defining The User Journey",
            paragraphs: [
              "Before designing screens, I mapped the ideal journey: a teen making everyday purchases, receiving gentle guidance, and gradually gaining autonomy while parents stay informed through lightweight oversight."
            ],
            image: getAssetUrl("case_studies/Pennies/info3.png")
          },
          {
            heading: "Secure Payment Method",
            paragraphs: [
              "To support this, I chose a prepaid card system. It’s widely used, secure, and gives parents the structure they need while giving teens the freedom they want."
            ],
            image: getAssetUrl("case_studies/Pennies/info4.png")
          }
        ]
      },
      {
        id: "process",
        subtitle: "04 / Process",
        content: [
          {
            heading: "1. Pivoting Toward Long Term Behavior Change",
            paragraphs: [
              "My first concept focused on real‑time “out of budget” alerts. Teens users ignored them. They felt punitive, not supportive.",
              "This was a turning point. Instead of reacting to mistakes, the solution needed to guide teens users before the moment of purchase. This insight shifted the entire product toward proactive, goal‑driven learning.",
            ],
            image: getAssetUrl("case_studies/Pennies/info5_1.png"),

          },
          {
            image: getAssetUrl("case_studies/Pennies/info5_2.png")
          },
          {
            heading: "2. Making Financial Insights Approachable",
            paragraphs: [
              "After the first round of testing, I created a higher fidelity prototype and ran quick tests on existing features. Some major iterations includes adding a spending patterns graph for teens and a friendly system that flags overspending trends while offering guidance rather than warnings.",

            ],
            image: getAssetUrl("case_studies/Pennies/info6.png"),

          },
          {
            heading: "3. Personalized Guidance Through A Friendly Character",
            paragraphs: [
              "Next, I introduced a character called Penni to make financial guidance feel more human, approachable, and engaging for teens. Instead of interacting with a generic AI chatbot, Penni offers a consistent personality and tone, helping users build trust and stay motivated. This shift transforms budgeting from something intimidating into a supportive experience, making financial learning feel less like a task and more like a conversation.",
            ],
            image: getAssetUrl("case_studies/Pennies/info7.png"),

          },

          {
            heading: "4. Accessibility Check",
            paragraphs: [
              "Before finalizing the design, I audited the color palette and implemented a system to ensure all colors met WCAG accessibility standards. This review led to several key visual adjustments to improve contrast and readability."
            ],
            image: getAssetUrl("case_studies/Pennies/info8.png"),

          },
          {
            heading: "Design System",
            paragraphs: [
              "For the high fidelity mockup, I created a design system as guidelines for my final design with a clear branding and ensuring that all the components are consistent throughout."
            ],
            image: getAssetUrl("case_studies/Pennies/info10.png"),

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
          },
          {
            heading: "Future Steps",
            paragraphs: [
              "If I had another 3 months on this project, I would dive deeper into the AI interaction, designing the conversational edge cases, error states, and strict safety guardrails required for an AI interacting with minors. For example, this may include designing 'system fallback' interfaces for when the AI cannot confidently answer a complex financial question, routing the user to pre-made or pre-approved educational resources instead."
            ]
          }

        ]
      }
    ]
  },
  {
    id: "expedia",
    title: "Expedia: Browsing and Booking Experience",
    shortDescription: "Improving discoverability and helping users make faster, informed flight booking decisions.",
    tags: ["Mobile App", "Healthcare", "UX/UI"],
    role: "UX/UI Designer",
    timeline: "12 Weeks",
    tools: ["Figma", "After Effects", "Notion"],
    coverImage: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=2081",
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "Project Goals",
            paragraphs: [
              "Vitals is a conceptual app designed to make health tracking less tedious and more rewarding through gamification and intuitive logging."
            ]
          }
        ]
      },
      {
        id: "problem",
        subtitle: "02 / The Problem",
        content: [
          {
            heading: "User Struggles",
            paragraphs: [
              "Most health tracking apps are either too complex or too basic. Users wanted a middle ground that offered robust data without the steep learning curve."
            ]
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "Steps to Solution",
            paragraphs: [
              "Competitive Analysis: Analyzed top 5 health apps to identify feature gaps and usability issues.",
              "Visual Design: Developed a calming, modern aesthetic using soft gradients and friendly typography to reduce anxiety around health data."
            ]
          }
        ]
      },
      {
        id: "outcomes",
        subtitle: "04 / Outcomes",
        content: [
          {
            heading: "Final Delivery",
            paragraphs: [
              "Created a comprehensive design system and a fully interactive prototype that received overwhelming positive feedback during usability testing."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "Build-Your-Box",
    title: "Hershey's: Build Your Box",
    shortDescription: "Designing a personalized and simple shopping experience.",
    tags: ["Website", "E-Commerce", "UX/UI Design Intern"],
    role: "UX/UI Designer",
    timeline: "12 Weeks",
    tools: ["Figma", "After Effects", "Notion"],
    coverImage: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=2081",
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "Project Goals",
            paragraphs: [
              "Vitals is a conceptual app designed to make health tracking less tedious and more rewarding through gamification and intuitive logging."
            ]
          }
        ]
      },
      {
        id: "problem",
        subtitle: "02 / The Problem",
        content: [
          {
            heading: "User Struggles",
            paragraphs: [
              "Most health tracking apps are either too complex or too basic. Users wanted a middle ground that offered robust data without the steep learning curve."
            ]
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "Steps to Solution",
            paragraphs: [
              "Competitive Analysis: Analyzed top 5 health apps to identify feature gaps and usability issues.",
              "Visual Design: Developed a calming, modern aesthetic using soft gradients and friendly typography to reduce anxiety around health data."
            ]
          }
        ]
      },
      {
        id: "outcomes",
        subtitle: "04 / Outcomes",
        content: [
          {
            heading: "Final Delivery",
            paragraphs: [
              "Created a comprehensive design system and a fully interactive prototype that received overwhelming positive feedback during usability testing."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tiktok-shop",
    title: "Tiktok Shop: Rewards and Loyalty",
    shortDescription: "End-to-end design of a social commerce rewards program to boost customer loyalty and streamline the shopping experience.",
    tags: ["Mobile App", "Healthcare", "UX/UI"],
    role: "UX/UI Designer",
    timeline: "12 Weeks",
    tools: ["Figma", "After Effects", "Notion"],
    coverImage: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=2081",
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "Project Goals",
            paragraphs: [
              "Vitals is a conceptual app designed to make health tracking less tedious and more rewarding through gamification and intuitive logging."
            ]
          }
        ]
      },
      {
        id: "problem",
        subtitle: "02 / The Problem",
        content: [
          {
            heading: "User Struggles",
            paragraphs: [
              "Most health tracking apps are either too complex or too basic. Users wanted a middle ground that offered robust data without the steep learning curve."
            ]
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "Steps to Solution",
            paragraphs: [
              "Competitive Analysis: Analyzed top 5 health apps to identify feature gaps and usability issues.",
              "Visual Design: Developed a calming, modern aesthetic using soft gradients and friendly typography to reduce anxiety around health data."
            ]
          }
        ]
      },
      {
        id: "outcomes",
        subtitle: "04 / Outcomes",
        content: [
          {
            heading: "Final Delivery",
            paragraphs: [
              "Created a comprehensive design system and a fully interactive prototype that received overwhelming positive feedback during usability testing."
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
