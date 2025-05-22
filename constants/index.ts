import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

// Add this to your constants.ts

export const MY_SKILLS = [
  {
    category: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP (spaCy, OpenAI GPT)",
      "Computer Vision (OpenCV)",
      "Reinforcement Learning",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "Jakarta EE",
      "Laravel",
    ],
  },
  {
    category: "Frontend & Web",
    skills: ["React", "Next.js", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    category: "Databases & Vector Stores",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Oracle (PL/SQL)",
      "Neo4j",
      "Pinecone",
      "FAISS",
    ],
  },
  {
    category: "ML/DL Frameworks & Libraries",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "XGBoost",
      "U-Net",
      "DeepLabV3+",
    ],
  },
  {
    category: "Cloud, Tools & Automation",
    skills: [
      "AWS (S3, Lambda)",
      "Firebase",
      "Render",
      "Railway",
      "Docker",
      "Git",
      "n8n",
    ],
  },
] as const;

export const BLOGS = [
  {
    title: "How I Built My AI-Powered Trading Assistant",
    content: "Step-by-step breakdown of building a real-time trading bot using reinforcement learning, WebSockets, and market APIs.",
    date: "2024-12-01",
    mark: 5,
  },
  {
    title: "Scaling FastAPI on AWS with ECS and CI/CD",
    content: "Learn how to deploy FastAPI apps using Docker, GitHub Actions, and AWS ECS with full scalability and monitoring.",
    date: "2024-11-15",
    mark: 4,
  },
  {
    title: "Building a Multilingual RAG Chatbot with Pinecone & Google PaLM 2",
    content: "Tutorial on how to build a Retrieval-Augmented Generation (RAG) chatbot that supports Arabic and English queries.",
    date: "2024-10-28",
    mark: 5,
  },
  {
    title: "Real-Time Audio Transcription with FasterWhisper & WebSockets",
    content: "A guide to implementing live transcription in React using FasterWhisper and a FastAPI backend.",
    date: "2024-10-05",
    mark: 4,
  },
  {
    title: "Advanced Prompt Engineering with OpenAI Functions",
    content: "Techniques for chaining, memory, and control flow in OpenAI chat completions using function calling.",
    date: "2024-09-17",
    mark: 5,
  },
  {
    title: "How to Fine-Tune LLMs on Your Custom Dataset",
    content: "Walkthrough of LLaMA and Mistral fine-tuning using Hugging Face and LoRA adapters on limited GPU resources.",
    date: "2024-09-01",
    mark: 5,
  },
  {
    title: "Production-Grade Vector Search: FAISS vs Pinecone vs Weaviate",
    content: "Comparison of top vector databases for fast semantic search in modern AI applications.",
    date: "2024-08-20",
    mark: 3,
  },
  {
    title: "LangChain vs CrewAI: Which Agent Framework Should You Use?",
    content: "A practical guide to building LLM agents with memory, tools, and human handoff using modern frameworks.",
    date: "2024-08-10",
    mark: 4,
  }
];


export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
