import petalsTeaserVid from '../assets/Play_assets/petals_teaser_vid.mp4';
import hatVid from '../assets/Play_assets/hatvid.mp4';
import underwaterVR from '../assets/Play_assets/underwater_VR.mov';
import logoAssignment from '../assets/Play_assets/Cindy_Chen_Logo_Assignment.mp4';
import penniesThumbnail from '../assets/case_studies/Pennies/pennies_thumbnail.png';

export const caseStudies = [
  {
    id: "fintech-dashboard",
    title: "Pennies - AI-Powered Budget Management",
    shortDescription: "A dual interface financial literacy app for teens and parents powered by contextual AI and gamified learning.",
    tags: ["Fintech", "End-to-End UX/UI", "AI Integration"],
    role: "Sole Product Designer",
    timeline: "12 Weeks",
    tools: ["Figma", "FigmaMake", "Miro"],
    coverImage: penniesThumbnail,
    overview: "The existing dashboard was cluttered and difficult for users to extract meaningful insights. Our goal was to simplify the data visualization and improve the overall information architecture.",
    problemStatement: "Users were overwhelmed by data density and struggling to find key financial metrics quickly, leading to decreased engagement and increased support tickets.",
    process: [
      {
        phase: "Research",
        description: "Conducted 15 user interviews with financial analysts and surveyed 200+ users to identify pain points."
      },
      {
        phase: "Ideation & Wireframing",
        description: "Explored multiple layout structures focusing on modular widgets and customizable views."
      },
      {
        phase: "Prototyping & Testing",
        description: "Tested high-fidelity prototypes with 10 users, resulting in a 40% improvement in task completion speed."
      }
    ],
    outcomes: "The new design led to a 25% increase in daily active users and a 30% reduction in support tickets related to data finding."
  },
  {
    id: "health-tracking-app",
    title: "Vitals Health Tracking App",
    shortDescription: "A holistic mobile application for tracking daily health metrics and fostering healthy habits.",
    tags: ["Mobile App", "Healthcare", "UX/UI"],
    role: "UX/UI Designer",
    timeline: "12 Weeks",
    tools: ["Figma", "After Effects", "Notion"],
    coverImage: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=2081",
    overview: "Vitals is a conceptual app designed to make health tracking less tedious and more rewarding through gamification and intuitive logging.",
    problemStatement: "Most health tracking apps are either too complex or too basic. Users wanted a middle ground that offered robust data without the steep learning curve.",
    process: [
      {
        phase: "Competitive Analysis",
        description: "Analyzed top 5 health apps to identify feature gaps and usability issues."
      },
      {
        phase: "Visual Design",
        description: "Developed a calming, modern aesthetic using soft gradients and friendly typography to reduce anxiety around health data."
      }
    ],
    outcomes: "Created a comprehensive design system and a fully interactive prototype that received overwhelming positive feedback during usability testing."
  }
];

export const playWorks = [
  {
    id: "petals-teaser",
    title: "A Petal's Worth Teaser",
    category: "Motion Graphics",
    video: petalsTeaserVid
  },
  {
    id: "3d-hat",
    title: "3D Hat Animation",
    category: "3D Motion Design",
    video: hatVid
  },
  {
    id: "underwater-vr",
    title: "Underwater VR Experience",
    category: "AR/VR Design",
    video: underwaterVR
  },
  {
    id: "logo-animation",
    title: "Logo Motion Design",
    category: "Motion Graphics",
    video: logoAssignment
  }
];
