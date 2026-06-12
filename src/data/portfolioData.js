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
    tags: ["Fintech", "Mobile App", "AI Integration"],
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
    tags: ["Search Experience", "Webpage", "UX/UI Redesign"],
    role: "UX/UI Designer",
    timeline: "4 Weeks",
    tools: ["Figma", "Figjam"],
    coverImage: getAssetUrl("case_studies/Expedia/header_img2.png"),
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
             image: getAssetUrl("case_studies/Expedia/the_user.png")
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
                number: "40%",
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
                image: getAssetUrl("case_studies/Expedia/research.png")
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
            heading: "Problem Statement",
            paragraphs: [
              "How might we create a more intuitive flight comparison experience on Expedia, allowing users to seamlessly track and organize their travel choices without feeling overwhelmed or frustrated?"
            ]
          },
          {
            heading: "Who Are We Designing For?",
            paragraphs: [
              "Before going into brainstorming solutions, I created a user persona to understand our target user based on insights from the initial user research. Meet Molly, a college student who is interested in quickly finding budget friendly flights that matches with her travel plans."
            ],
              image: getAssetUrl("case_studies/Expedia/persona.png")
          },
          {
            heading: "The Current User Journey",
            paragraphs: [
              "In addition to a user persona, I mapped out what Molly potentially says, thinks, feels, and does during the flight search process. The key here to is identify the low points and pain points along the way."
            ],
              image: getAssetUrl("case_studies/Expedia/journeymap.png")
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
              image: getAssetUrl("case_studies/Expedia/IA.png")
          },
          {
            heading: "The Best Option",
            paragraphs: [
              "With the insights in hand, I began brainstorming solutions to improve the flight comparison process on Expedia. The key challenge was to create a feature that allowed users to evaulate flights options seamlessly without disrupting their workflow."

            ],
              image: getAssetUrl("case_studies/Expedia/chart.png")
          },
           {
            heading: "Envisioning The New User Flow",
            paragraphs: [
              "Then I reimagined the user flow with the new feature and how it would help minimalize the frustration of going back to the beginning of the search process."

            ],
             image: getAssetUrl("case_studies/Expedia/full_userflow.png")
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
             image: getAssetUrl("case_studies/Expedia/testing2.png")
          },
          {
            heading: "Transitioning from Mid-fi to Hi-fi",
            paragraphs: [

            ],
            
             image: getAssetUrl("case_studies/Expedia/final.png")
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
    tags: ["Mobile App", "E-Commerce", "UX/UI"],
    role: "UX/UI Designer",
    timeline: "12 Weeks",
    tools: ["Figma", "Miro", "Notion"],
     coverImage: getAssetUrl("case_studies/Tiktok/header2.png"),
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
            image: getAssetUrl("case_studies/Tiktok/info1.png")
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
