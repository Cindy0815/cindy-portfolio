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
    role: "UX/UI Designer (End-to-End)",
    projectType: "Mobile Application",
    projectCategory: "Personal Project",
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
            heading: "Background",
            paragraphs: [
              "Money was always a sensitive topic in my family — not because of the actual money involved, but the tension around it. Parents try to teach teens how to manage money, yet those conversations often slip into lectures. Teens want independence, but the fear of making mistakes holds them back. That push‑and‑pull is common in many households.",
              "Pennies began as a simple UX class assignment, but the research revealed a larger truth: parents want to guide, teens want autonomy, and both struggle to meet in the middle."
            ]
          },
          {
            heading: "Why The Knowledge Gap Creates Daily Friction?",
            paragraphs: [
              "Most people open their first bank account between ages 13 and 17, a formative window where real-world financial habits begin to take shape. Yet teens in this stage often lack meaningful financial literacy, while parental oversight can easily slip into micro‑management — creating friction, confusion, and ultimately abandonment of traditional banking apps."
            ],
            image: getAssetUrl("case_studies/Pennies/info1_1.png"),
            centeredText: "The challenge became clear...",
            highlightBox: {
              text: "How might we help teens learn by doing while giving parents the peace of mind that their teens are supported, not left alone?"
            }
          },

          {
            heading: "The Solution: Turning Real Spending Habits Into Guided Learning",
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
            heading: "Impact That Matters",
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
            ],
            centeredText: "These conversations revealed two parallel needs: parents needed tools to <em>guide without controlling</em>, and teens needed support that <em>felt empowering</em> rather than punitive. This became the foundation for the design direction."
          },
          {
            heading: "Market Insight",
            paragraphs: [
              "Next, I analyzed competitors in the market to identify gaps that had not yet been addressed."
            ],
            imagePovSplit: {
              image: getAssetUrl("case_studies/Pennies/info2.png"),
              problemCard: {
                title: "Market Gap:",
                text: "Few offer personalized, real-time financial guidance that adapts to teens' actual spending behaviors"
              },
              opportunityCard: {
                title: "Opportunity #3",
                text: "Provide a personalized experience that gives real, actionable insights"
              }
            }
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
    role: "UX/UI Designer (End-to-End)",
    projectType: "Web UX/UI Redesign",
    projectCategory: "Personal Project",
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
    id: "tiktok-shop",
    title: "Tiktok Shop: Rewards and Loyalty",
    shortDescription: "End-to-end design of a social commerce rewards program to boost customer loyalty and streamline the shopping experience.",
    tags: ["Mobile App", "E-Commerce", "UX/UI"],
    role: [
      "My Role: UX/UI Designer",
      "Collaborator: Cher W. (UX/UI Designer)"
    ],
    projectType: "Mobile UX/UI Design",
    projectCategory: "Personal Project",
    timeline: "3 Weeks",
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
        id: "features",
        subtitle: "02 / Final Features",
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
        id: "Research",
        subtitle: "03 / Research",
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
            image: getAssetUrl("case_studies/Tiktok/persona.png")
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
        subtitle: "04 / Process",
        content: [
          {
            heading: "Integrating A Reward System Into TikTok Shop",
            paragraphs: [
              "To bring our concept to life, we mapped out a user flow that demonstrates how a reward system could be seamlessly integrated into the TikTok Shop experience. The flow highlights how the system would be:",
            ],
            image: getAssetUrl("case_studies/Tiktok/userflow.png")
          },
          {
            heading: "Low Fidelity Wireframes",
            paragraphs: [
              "To quickly explore and communicate our ideas, we created a set of low-fidelity wireframes in Figma. Key elements include: onboarding moments, incentive touchpoints, and loyalty dashboard."
            ],
            image: getAssetUrl("case_studies/Tiktok/wireframe1.png")
          },
          {
            heading: "Working Prototype",
            paragraphs: [
              "This interactive version allowed users to experience key features such as earning points, tracking progress, and redeeming rewards."
            ],
            image: getAssetUrl("case_studies/Tiktok/wireframe2.png")
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
          },


        ]
      }
    ]
  },
  {
    id: "petals-worth",
    comingSoon: true,
    title: "A Petal's Worth",
    shortDescription: "A digital garden for shared reflection, where expressive forms grow into a living, interactive landscape.",
    tags: ["Product Design", "Full‑Stack Development", "Emotional UX"],
    role: "Design Engineer",
    projectType: "Creative Development & Design",
    projectCategory: "Personal Project",
    timeline: "14 Weeks",
    tools: ["React.js (Frontend)", " Node.js (Backend)", "Figma (Design)"],
    coverImage: getAssetUrl("case_studies/Petal/header.png"),
    headerImage: getAssetUrl("case_studies/Petal/header.png"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Overview",
        content: [
          {
            heading: "Background",
            paragraphs: [
              "A Petal's Worth is a shared digital garden where people can pause, breathe, and make something simple together.",
              "For my senior capstone, I had complete freedom to build anything. Instead of creating another static prototype, I challenged myself to design, build, and ship a fully functional interactive product using Gemini and Claude Code."
            ],
            image: getAssetUrl("case_studies/Petal/overview.png")
          },
          {
            heading: "I Started With A Question",
            paragraphs: [
              "How do we turn a simple act of sharing into an interactive visual system that builds a sense of connection?"
            ]
          },
          {
            heading: "Why A Garden?",
            paragraphs: [
              "Because a garden makes sharing feel simple — something you place and let grow, not something you fill out — and it also gives room for many symbolic forms, each carrying its own meaning."
            ]
          },
          {
            heading: "Results",
            paragraphs: [],
            metrics: [
              {
                number: "50+",
                text: "users explored the garden on launch day",
              },
              {
                number: "100+",
                text: "submissions created within the first week",
              },
              {
                text: "Fully deployed, real product used by groups and communities",
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
            heading: "Group Spaces",
            paragraphs: [
              "Users can create private gardens for friends, teams, or communities that others can easily access with a private code."
            ],
            video: getAssetUrl("case_studies/Petal/group.mov")
          },
          {
            heading: "Daily Form Creation",
            paragraphs: [
              "A lightweight daily flow that begins with a single prompt. Users answer the question, then move directly into creating their form. This prompt is reset daily allowing for new entries."
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
              "All forms are saved and retrievable, allowing gardens to grow over time."
            ],
            video: getAssetUrl("case_studies/Petal/storage.mov")
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / Process",
        content: [
          {
            heading: "Coming Soon...",
            paragraphs: [
            ],
          },
        ]
      },
      {
        id: "Reflection",
        subtitle: "04 / Reflection",
        content: [
          {
            heading: "What I Learned",
            bullets: [
              "<strong>Shipping a real product</strong> - Building a deployed system taught me to design for persistence, error states, and daily return patterns.",
              "<strong>AI as a creative partner</strong> - Gemini and Claude Code accelerated exploration while keeping design intentional.",
              "<strong>Simplicity builds connection</strong> - Users felt connected not because the system was complex, but because it was simple and expressive."
            ],
            image: getAssetUrl("case_studies/Petal/showcase.jpg")
          },
        ]
      },
    ]
  },
  {
    id: "Build-A-Box",
    title: "Hershey's: Build A Box",
    shortDescription: "Designing a personalized and simple shopping experience.",
    tags: ["Website", "E-Commerce", "UX/UI Design Intern"],
    role: [
      "My Role: UX/UI Design Intern",
      "Collaborators: 1 Frontend Engineer, 1 PM, 1 Design Lead"
    ],
    projectType: "E-Commerce Web Design",
    projectCategory: "Internship Project",
    timeline: "4 Weeks",
    tools: ["Figma"],
    coverImage: getAssetUrl("case_studies/Hershey/hershey_header.png"),
    sections: [
      {
        id: "overview",
        subtitle: "01 / Project Overview",
        content: [
          {
            heading: "Designing a Customizable Shopping Experience",
            paragraphs: [
              "During my internship at Dentsu, I worked on a high‑visibility e‑commerce feature for Hershey’s: a dedicated “Pick Your Pack” page that let customers build their own assortment of Skinny Packs for a Back‑to‑School campaign. My role focused on shaping an intuitive customization flow that felt familiar within the existing site ecosystem while introducing new interaction patterns that supported personalization."
            ]
          },
          {
            heading: "My Role & Contributions: Leading UI While Supporting UX Strategy",
            paragraphs: [
              "I led the UI design and contributed to UX strategy across the page’s layout, interaction patterns, and decision logic. My work included creating high‑fidelity Figma mockups aligned with brand guidelines, conducting usability testing, and collaborating closely with the client team to refine the experience."
            ],
            metrics: [
              {
                title: "UI design",
                text: "High‑fidelity mockups, component reuse, visual hierarchy"
              },
              {
                title: "UX strategy",
                text: "Flow mapping, decision logic, interaction patterns"
              },
              {
                title: "Usability testing",
                text: "Rapid feedback cycles with client stakeholders"
              }
            ]
          },
          {
            heading: "Client Request: A Fast, Flexible Customization Page",
            paragraphs: [
              "The client needed a dedicated page that allowed customers to build a 24‑item pack with specific rules: a minimum of four bags per flavor, real‑time editing, and a clear path to checkout. The project had a tight three‑week turnaround, requiring a design that balanced speed, feasibility, and brand consistency."
            ]
          }
        ]
      },
      {
        id: "final-deliverable",
        subtitle: "02 / Final Deliverable",
        content: [
          {
            heading: "Final Deliverable: A Live, Shippable Experience",
            paragraphs: [
              "The final design launched on Hershey’s site from August 2025 to May 2026. The page introduced three core features that made the customization process intuitive and error‑proof:"
            ],
            insightCards: [
              {
                title: "Progress Bar",
                text: "Guided users toward the required 24 items"
              },
              {
                title: "Live Summary Panel",
                text: "Real‑time visibility into selections and quantities"
              },
              {
                title: "Prominent CTA",
                text: "A clear, confident path to checkout once the box was complete"
              }
            ],
            image: getAssetUrl("case_studies/Hershey/1.png"),
          }
        ]
      },
      {
        id: "process",
        subtitle: "03 / The Process",
        content: [
          {
            heading: "Balancing Needs, Constraints, and Speed",
            paragraphs: [
              "With only three weeks to deliver a final design, I began with an MVP approach that met essential client requirements while staying within developer constraints. I reused existing components where possible and introduced new ones only when they meaningfully improved clarity or usability.",
              "I moved through three rounds of iteration, presenting directly to the client team each time. These sessions helped validate assumptions, refine layout decisions, and ensure feasibility before handing the design off to development."
            ],
            images: [
              {
                src: getAssetUrl("case_studies/Hershey/iteration1.png"),
                description: "Round 1 — MVP Scoping"
              },
              {
                src: getAssetUrl("case_studies/Hershey/iteration2.png"),
                description: "Round 2 — Refined Layout"
              },
              {
                src: getAssetUrl("case_studies/Hershey/iteration3.png"),
                description: "Round 3 — Final Handoff"
              }
            ]
          },
          {
            heading: "Translating Features to Mobile",
            paragraphs: [
              "Once the desktop design was finalized, I explored different approaches for the mobile layout, leading multiple iterations to refine the user flow.",
            ],
            image: getAssetUrl("case_studies/Hershey/mobile.png")
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
              "<strong>Designing Within Constraints</strong> — Working under tight timelines taught me how to prioritize ruthlessly. I learned to distinguish between “nice‑to‑have” ideas and the core interactions that truly shaped the user experience.",
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
    comingSoon: true,
    title: "Cysana",
    shortDescription: "Redesigning a malware detection dashboard to allow admins to quickly access essential security data.",
    tags: ["Dashboard Design", "UX/UI Design Intern"],
    role: [
      "My Role: Product Design Intern (UX/UI)",
      "Collaborators: 2 Full Stack Engineers, 1 Data Scientist, 1 PM"
    ],
    projectType: "Enterprise SaaS Dashboard",
    projectCategory: "Internship Project",
    timeline: "10 Weeks",
    tools: ["Figma"],
    coverImage: getAssetUrl("case_studies/Cysana/conatix_header.png"),
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
