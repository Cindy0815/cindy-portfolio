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
    id: "petals-worth",
    title: "A Petal's Worth",
    shortDescription: "A dual interface financial literacy app for teens and parents powered by contextual AI and gamified learning.",
    tags: ["Fintech", "End-to-End UX/UI", "AI Integration"],
    role: "Lead Product Designer",
    timeline: "12 Weeks",
    tools: ["Figma", "FigmaMake", "Miro"],
    coverImage: getAssetUrl("case_studies/Pennies/pennies_thumbnail.png"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "The Challenge",
            paragraphs: [
              "The existing dashboard was cluttered and difficult for users to extract meaningful insights. Our goal was to simplify the data visualization and improve the overall information architecture."
            ]
          }
        ]
      },
      {
        id: "problem",
        subtitle: "02 / The Problem",
        content: [
          {
            heading: "Understanding the Pain Points",
            paragraphs: [
              "Users were overwhelmed by data density and struggling to find key financial metrics quickly, leading to decreased engagement and increased support tickets."
            ]
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "Design Methodology",
            paragraphs: [
              "Research: Conducted 15 user interviews with financial analysts and surveyed 200+ users to identify pain points.",
              "Ideation & Wireframing: Explored multiple layout structures focusing on modular widgets and customizable views.",
              "Prototyping & Testing: Tested high-fidelity prototypes with 10 users, resulting in a 40% improvement in task completion speed."
            ]
          }
        ]
      },
      {
        id: "outcomes",
        subtitle: "04 / Outcomes",
        content: [
          {
            heading: "Results & Learnings",
            paragraphs: [
              "The new design led to a 25% increase in daily active users and a 30% reduction in support tickets related to data finding."
            ]
          }
        ]
      }
    ]
  },
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
              "Teens lack real-world financial literacy, but parental oversight often crosses into micro-management, causing friction and abandonment of traditional banking apps."
            ],
            image: getAssetUrl("case_studies/Pennies/info1_1.png")
          },

          {
            heading: "The Solution",
            paragraphs: [
              "As a result, I set out to create an experience that turns everyday transactions into learning moments. Guided by Penni, a personalized in app assistant, teen users receive spending insights and goal based suggestions, while parents can still set account rules for added oversight and management."
            ],
            image: getAssetUrl("case_studies/Pennies/info1.png")
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
        id: "features",
        subtitle: "02 / Final Features",
        content: [
          {
            heading: "Onboarding",
            paragraphs: [
              "A simple sign up flow where both users get to discuss rules and restrictions together, signing a parent-teen agreement at the end."
            ],
            image: getAssetUrl("case_studies/Pennies/info3.png")
          },
          {
            heading: "Home Page",
            paragraphs: [
              "The homepage provides transaction overviews for both teens and parents, plus savings progress and tips for parent"
            ],
            image: getAssetUrl("case_studies/Pennies/info3.png")
          },
          {
            heading: "Customize, Ask, And Apply",
            paragraphs: [
              "Teen users can customize, ask questions, and apply goals."
            ],
            image: getAssetUrl("case_studies/Pennies/info2.png")
          },
          {
            heading: "Budget",
            paragraphs: [
              "Budget tracking for teens, with parental spending controls."
            ],
            image: getAssetUrl("case_studies/Pennies/info3.png")
          }
        ]
      },
      {
        id: "research",
        subtitle: "03 / Research",
        content: [
          {
            heading: "Understanding The Problem",
            paragraphs: [
              "I spoke with five parent-teen pairs to understand where financial learning breaks down. What emerged was a shared sense of uncertainty:"
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
            heading: "Learnings & Future Steps",
            paragraphs: [
              "This project pushed me to design for a user group I didn't personally identify with. It taught me to validate assumptions, listen deeply, and design with empathy for both sides of a relationship."
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
