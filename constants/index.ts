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
      "RESTful APIs",
      "GraphQL",
      "Jakarta EE",
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
    content:
      "A detailed walkthrough of designing, training, and deploying a fully automated trading assistant using reinforcement learning, real-time data pipelines, and broker APIs. Covers market data ingestion using WebSockets and Kafka, stateful order book tracking, and strategy optimization using Proximal Policy Optimization (PPO) with Stable Baselines3. Includes modular signal generation pipelines, risk control layers, and execution via broker APIs like MEXC and OKX. Real-time performance is visualized through a React + Tailwind dashboard. The system is containerized with Docker, monitored with Prometheus + Grafana, and deployed using AWS ECS Fargate. Model lifecycle is tracked using MLflow and managed with Prefect for pipeline orchestration.",
    date: "2024-12-01",
    mark: 5,
  },
  {
    title: "Scaling FastAPI on AWS with ECS and CI/CD",
    content:
      "Comprehensive guide on building production-grade FastAPI applications and deploying them at scale using AWS ECS (Fargate), Docker, and GitHub Actions. Covers best practices for container security, API throttling, load balancing with AWS ALB, and horizontal scaling with ECS Service Auto Scaling. Introduces GitHub Actions workflows for automated testing, linting, image building, and zero-downtime ECS blue/green deployments using AWS CodeDeploy. Discusses configuration management with AWS Secrets Manager, logging with CloudWatch, and distributed tracing with OpenTelemetry. Includes optional monitoring stack with Prometheus + Grafana and real-world techniques for graceful shutdowns, health checks, and debugging in production environments.",
    date: "2024-11-15",
    mark: 4,
  },
  
  {
    title: "Building a Multilingual RAG Chatbot with Pinecone & Gemini 1.5",
    content:
      "An in-depth guide to building a production-grade Retrieval-Augmented Generation (RAG) chatbot that supports both Arabic and English. Covers document preprocessing with LangChain, multilingual embedding using BGE-M3, semantic indexing via Pinecone, and reranking with HuggingFace cross-encoders. Integrates Gemini 1.5 Pro for context-aware response generation, with dynamic prompt templating and fallback routing. The system includes a React + Tailwind frontend, a FastAPI backend, and features such as session memory, user feedback capture, and real-time context injection. Includes full deployment using Docker, Uvicorn with Gunicorn, and CI/CD via GitHub Actions.",
    date: "2024-10-28",
    mark: 5,
  },
  {
    title: "Real-Time Audio Transcription with FasterWhisper & WebSockets",
    content:
      "A step-by-step tutorial for implementing real-time audio transcription using FasterWhisper for low-latency speech-to-text and FastAPI with WebSockets for bi-directional streaming. Demonstrates audio chunking in React, backend buffering with asyncio, and transcript streaming to the UI. Covers speaker diarization, silence trimming, and confidence scoring. Optimized for edge inference using quantized models on CPU/GPU with PyTorch, and includes optional integration with multilingual intent classifiers and token-authenticated WebSocket connections. Ideal for AI-powered call centers and meeting assistants.",
    date: "2025-04-05",
    mark: 4,
  },
  {
    title: "Advanced Prompt Engineering with OpenAI Functions",
    content:
      "A deep dive into advanced prompt design patterns using OpenAI’s function calling and tool-use capabilities. Explores dynamic role-switching, multi-step prompt chaining, conditional logic execution, and memory structuring using `tool_choice`, `function_call`, and `metadata` fields in GPT-4o. Includes techniques for agent-style orchestration using LangChain and CrewAI, multi-modal prompt design with image and audio inputs, and best practices for reducing hallucination while maintaining output control. Covers both REST and OpenAI SDK usage for production deployment.",
    date: "2024-09-17",
    mark: 5,
  },
  {
    title: "How to Fine-Tune LLMs on Your Custom Dataset",
    content:
      "Comprehensive walkthrough of fine-tuning LLMs like LLaMA 3 and Mistral using Hugging Face Transformers with LoRA and QLoRA adapters. Focuses on training with limited GPU resources (e.g. single A100/RTX 4090) using techniques like 8-bit quantization, Flash Attention 2, and gradient checkpointing. Covers dataset preparation with DPO/ChatML formats, tokenizer alignment, inference benchmarking, and PEFT integration for low-latency deployment. Also discusses offline training environments and best practices for evaluating safety, coherence, and performance with LLM-as-a-judge frameworks.",
    date: "2024-09-01",
    mark: 5,
  },  
  {
    title: "Production-Grade Vector Search: FAISS vs Pinecone vs Weaviate",
    content:
      "An in-depth comparison of the leading vector databases used for semantic search in AI-driven applications. Evaluates FAISS (open-source, GPU-optimized), Pinecone (fully managed, real-time updates), and Weaviate (schema-aware with hybrid search) across metrics like latency, scalability, indexing speed, multi-tenancy, cost-efficiency, and compatibility with embeddings (OpenAI, BGE, Cohere). Includes benchmarks for multilingual retrieval with BGE-M3, GPU-accelerated recall with FAISS+IVFPQ, and production deployment via Docker/K8s. Concludes with architecture recommendations based on use cases like RAG chatbots, document Q&A, and personalized search.",
    date: "2024-08-20",
    mark: 5,
  },
  {
    title: "LangChain vs CrewAI: Which Agent Framework Should You Use?",
    content:
      "A hands-on comparison of LangChain and CrewAI for building autonomous LLM agents with memory, function calling, and multi-role coordination. Breaks down core primitives like tools, memory types (buffer, summary, entity), and agent types (reactive vs multi-step planning). Highlights CrewAI’s structured agent collaboration, task delegation, and built-in human handoff via interrupt policies. Benchmarks include latency per task, tool-use success rate, and context retention accuracy. Ideal for developers building RAG pipelines, AI copilots, or multi-agent research environments.",
    date: "2024-08-10",
    mark: 5
  }
  
];


export const PROJECTS = [
  {
    title: "AI Powered Call Center Solution",
    description:
    "Led the full-stack development of a real-time AI-powered call center platform using Next.js (frontend), Django (admin & auth), and FastAPI (AI services). Architected and implemented core features including real-time transcription with FasterWhisper, intelligent query handling via Google LLM, semantic search with Pinecone vector DB, and RAG-based pipelines for accurate AI responses. Developed a smart escalation mechanism for unresolved queries and enabled live WebSocket communication. The system supports multilingual interaction (English and Arabic) and includes a modular admin dashboard for service management Builted in a month. MVP stage.",
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "ChatLLM Teams",
    description:
    "Architected and implemented the backend for a multi-user enterprise conversational assistant platform leveraging Abacus.AI. Focused on real-time LLM orchestration, I developed token-based access control, dynamic memory context handling, and multi-agent prompt chaining logic. The platform supports secure, scalable collaboration across teams, enabling contextual AI-driven conversations, agent coordination, and persistent user sessions. My work emphasized reliability, latency optimization, and modular design for enterprise deployment. Built in 7 month, Real Production",
    image: "/projects/project-2.png",
    link: "https://chatllm.abacus.ai/",
  },
  {
    title: "Real Estate Property Finder",
    description:
      "Independently developed a full-stack, space-themed real estate discovery platform using Next.js for the frontend and Django for the backend and admin panel. I implemented a custom vector search engine for intelligent property matching based on semantic similarity, integrated geolocation filtering, and built LLM-powered modules for dynamic property description generation. The platform also features a responsive UI, user authentication, and an optimized deployment pipeline designed for performance and scalability in production environments. Built in 4 month, Real Production",
    image: "/projects/project-3.png",
    link: "https://www.propertyfinder.ae",
  },
] as const;


export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/marcio-grazianni",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/marcio-grazianni-41910665/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "marcio.grazianni05@gmail.com",
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
