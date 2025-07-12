export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  category: 'ai' | 'web' | 'automation';
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'archived';
  duration: string;
  role: string;
  teamSize: number;
  features: string[];
  challenges: string[];
  solutions: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
    tools: string[];
  };
  architecture: {
    overview: string;
    components: {
      name: string;
      description: string;
      technologies: string[];
    }[];
  };
  links: {
    title: string;
    url: string;
    type: 'demo' | 'github' | 'documentation' | 'blog' | 'other';
    disabled?: boolean;
    note?: string;
  }[];
  gallery?: string[];
  metrics?: {
    name: string;
    value: string;
  }[];
}

export const projectsData: ProjectData[] = [
  {
    id: 2,
    slug: 'paradise-portfolios',
    title: 'ParadisePortfolios',
    shortDescription: 'Senior Capstone Project - Partnered with affiliate marketing company for Sandals/Beaches to auto-generate short-form video ads from vacation listings.',
    fullDescription: 'ParadisePortfolios was developed as a senior capstone project in partnership with Amanda Roberts\' affiliate marketing company. The platform automatically generates compelling short-form video advertisements from vacation rental listings for Sandals and Beaches resorts. Using AI-powered image-to-video generation, AI powered script generation, and a custom voice model to enthusiastically communicate the listing, the system creates personalized short-form video content to be repurposesed on social media (Tiktok/Instagram Reels/Youtube Shorts/etc.). Additionally, we rebuilt their website featuring modern light and dark mode themes and integrated a chatbot to assist with answering questions and booking appointments/listings. Overall, a new website, chatbot, and video generation system, led to an increased volume of leads and lower conversion rates for vacation bookings in June 2025. The project was a success, and the client was able to generate 1000+ (15-45 second) videos in about a 2 day period with the final product being a 100% automated system.',
    image: '/paradise-portfolios.png',
    tags: ['Python', 'Flask', 'OpenAI API', 'Chatbot Framework'],
    category: 'ai',
    liveUrl: 'https://github.com/VCU-CS-Capstone/CS-25-335-Streamline-AI-Powered-Projects',
    githubUrl: 'https://github.com/VCU-CS-Capstone/CS-25-335-Streamline-AI-Powered-Projects',
    featured: true,
    status: 'completed',
    duration: '4 months',
    role: 'Lead Developer & Project Manager',
    teamSize: 4,
    features: [
      'Automated video generation from listing data',
      'AI-powered script generation and voiceovers',
      'Integration with Sandals/Beaches booking systems',
      'Analytics dashboard for conversion tracking',
      'Batch processing for multiple properties',
      'Custom branding and template management'
    ],
    challenges: [
      'Integrating with third-party booking APIs',
      'Creating compelling narratives from structured data',
      'Optimizing video generation for different social platforms',
      'Managing large datasets and processing pipelines',
      'Ensuring brand consistency across generated content'
    ],
    solutions: [
      'Developed custom API wrappers for booking system integration',
      'Implemented advanced prompt engineering for narrative generation including tools like Amazon Rekognition to display content that makes most contextual sense to the narrator\'s script',
      'Created platform-specific video formatting pipeline including full screen 9:16 and 16:9 resolutions for each outputed content',
      'Developed a pipeline in Python to manage the API calls and data output compilation',
      'Built comprehensive template system with brand guidelines'
    ],
    techStack: {
      frontend: ['React.js', 'Material-UI', 'Chart.js'],
      backend: ['Flask', 'Python', 'Pandas', 'FFmpeg'],
      database: ['PostgreSQL'],
      deployment: ['Google Cloud Platform', 'Docker'],
      tools: ['OpenAI', 'Amazon Rekognition', 'Minimax Image-to-Video Gen', 'Git']
    },
    architecture: {
      overview: 'Event-driven architecture with data pipeline for processing vacation listings, AI service for content generation, and analytics service for performance tracking.',
      components: [
        {
          name: 'Data Ingestion Service',
          description: 'Automated data collection from Sandals/Beaches APIs and listing databases',
          technologies: ['Python', 'REST APIs']
        },
        {
          name: 'AI Content Generator',
          description: 'Service for generating scripts, voiceovers, and video content using OpenAI and MiniMax models based all on information via Sandals API',
          technologies: ['OpenAI API', 'Python', 'FFmpeg']
        },
        {
          name: 'Chatbot Booking Agent',
          description: 'AI Agent successfully walks user through potential listings based on answering questions. Booking via Sandals wrapper API integration',
          technologies: ['OpenAI API', 'Python', 'Sandals API']
        }
      ]
    },
    links: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/VCU-CS-Capstone/CS-25-335-Streamline-AI-Powered-Projects',
        type: 'github'
      }
    ],
    gallery: ['/ParadisePortfoliosArchPoster.png', 'https://youtube.com/shorts/Ko5icFx2Xrg?feature=share', 'https://youtube.com/shorts/JoCgCnxc5Vs?feature=share', 'https://youtube.com/shorts/1dvjx6uGFgo'],
    metrics: [
      { name: 'Tiktok/Reels/Shorts marketing videos for Sandals/Beaches properties', value: '1000+ videos generated' },
      { name: 'Increased Volume of Client Leads (email/phone) in June 2025', value: '+45% Leads' },
      { name: 'Lead to Conversion Increase in June 2025', value: '+25% Conversions' },
      { name: 'Hyper-Fast Average Processing Times', value: '< 60s / video' }
    ]
  },
  {
    id: 3,
    slug: 'bartons-life-health',
    title: 'BartonsLifeAndHealth.com',
    shortDescription: 'Life Insurance Business Website & DM Bot - Responsive website with Instagram DM pipeline to auto-respond to inquiries and recommend policies.',
    fullDescription: 'A comprehensive digital solution for Barton\'s Life and Health insurance company, featuring a modern responsive website integrated with an intelligent Instagram DM automation system. The platform automatically responds to customer inquiries and provides personalized policy recommendations based on customer needs and demographics.',
    image: '/bartonslifeandhealth.png',
    tags: ['HTML/CSS', 'Bootstrap', 'JavaScript', 'n8n'],
    category: 'web',
    liveUrl: 'https://bartonslifeandhealth.com',
    githubUrl: 'https://github.com/dveeid/bartons-life-health',
    featured: true,
    status: 'completed',
    duration: '1 week',
    role: 'Full Stack Developer',
    teamSize: 2,
    features: [
      'Responsive business website with service information',
      'Instagram DM automation for customer inquiries',
      'AI-powered policy recommendation engine',
      'Contact form integration with CRM',
      'Quote request system',
      'Blog section for insurance education',
      'Customer testimonials and reviews'
    ],
    challenges: [
      'Integrating Instagram API for automated messaging',
      'Creating intelligent conversation flows',
      'Building responsive design for all devices',
      'Implementing secure form handling',
      'Managing customer data privacy compliance'
    ],
    solutions: [
      'Used n8n workflow automation for Instagram integration',
      'Implemented n8n for conversational AI logic',
      'Created mobile-first responsive design approach',
      'Added form validation and CAPTCHA protection',
      'Implemented GDPR-compliant data handling practices'
    ],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
      backend: ['Node.js', 'Express.js', 'n8n'],
      database: ['PostgreSQL'],
      deployment: ['Vercel', 'Netlify'],
      tools: ['Instagram Graph API', 'Git', 'VS Code', 'Figma']
    },
    architecture: {
      overview: 'Traditional web architecture with modern automation tools for social media integration and customer engagement. The Instagram chatbot uses a sophisticated n8n workflow that handles user management, conversation logging, and AI-powered responses through webhooks.',
      components: [
        {
          name: 'Static Website',
          description: 'Professional business website built with modern HTML, CSS, and JavaScript',
          technologies: ['HTML5', 'CSS3', 'Bootstrap']
        },
        {
          name: 'Instagram Webhook Handler',
          description: 'Receives Instagram DM events and triggers the automated response workflow',
          technologies: ['n8n', 'Instagram Graph API', 'Webhooks']
        },
        {
          name: 'User Management System',
          description: 'Checks if users exist in the system and creates new user profiles when needed',
          technologies: ['n8n', 'Database Integration']
        },
        {
          name: 'ChatGPT Response Engine',
          description: 'Generates intelligent responses to customer inquiries using OpenAI\'s ChatGPT',
          technologies: ['OpenAI API', 'ChatGPT']
        },
        {
          name: 'Conversation Logger',
          description: 'Logs all user messages and AI replies for tracking and analysis',
          technologies: ['n8n', 'Data Storage']
        },
        {
          name: 'N8n AI Agent',
          description: 'Conversational AI system for policy recommendations and customer support',
          technologies: ['N8n', 'OpenAI API']
        }
      ]
    },
    links: [
      {
        title: 'Live Website',
        url: 'https://bartonslifeandhealth.com',
        type: 'demo'
      },
      {
        title: 'Instagram DM Bot',
        url: 'https://instagram.com/bartonslifeandhealthllc',
        type: 'other'
      },
      {
        title: 'GitHub Repository',
        url: 'https://github.com/dveeid/bartons-life-health',
        type: 'github',
        disabled: true,
        note: 'Repository is set to private as requested by client'
      }
    ],
    gallery: ['/bartonslifeandhealth_ig_arch.png', '/bartonslifeandhealth_ig_arch_1.png', '/bartonslifeandhealth_ig_arch_2.png', '/bartonslifeandhealth_ig_arch_3.png']
  },
  {
    id: 1,
    slug: 'carnivl-ai',
    title: 'Carnivl.ai',
    shortDescription: 'Full Stack AI-Powered Content Generator - Personalized content automation platform generating TikToks/Reels/Shorts using over 30 pop culture character voices.',
    fullDescription: 'Carnivl.ai is an automated AI-powered content generation platform that revolutionizes social media content creation. The platform leverages advanced AI voice synthesis technology to generate TikTok-style videos featuring over 30 distinct pop culture character voices. Users have the option to automate videos based on certain presets and modifiers using triggers based on new news articles/stock-market updates/crypto updates/etc. Overall, the user has the most control over how their content is automated and produced and can share presets with other users. \n\nNote that this project is still under construction and no link is available yet, screenshots and video walkthroughs will be posted below.',
    image: '/carnival-ai.png',
    tags: ['React.js', 'Flask', 'Python', 'PostgreSQL', 'REST API'],
    category: 'ai',
    liveUrl: 'https://carnivl.ai',
    githubUrl: 'https://github.com/dveeid/carnivl-ai',
    featured: true,
    status: 'in-progress',
    duration: '4 months',
    role: 'Full Stack Developer & AI Integration Lead',
    teamSize: 1,
    features: [
      'AI-powered voice synthesis with 30+ character voices',
      'Real-time video generation and processing',
      'User authentication and profile management',
      'Content library and history tracking',
      'Social media optimization tools',
      'Custom voice training capabilities',
      'Batch processing for multiple videos',
      'API access for enterprise users'
    ],
    challenges: [
      'Integrating multiple AI models for seamless voice synthesis',
      'Optimizing video generation performance for real-time use',
      'Managing large media files and storage efficiently',
      'Creating responsive UI for complex video editing features',
      'Implementing robust user authentication and data security'
    ],
    solutions: [
      'Implemented microservices architecture for scalable AI processing',
      'Used Redis caching for improved response times',
      'Integrated AWS S3 for efficient media storage and CDN delivery',
      'Developed progressive web app features for mobile optimization',
      'Implemented JWT authentication with refresh token strategy'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'JavaScript', 'CSS'],
      backend: ['Flask', 'Python', 'SQLAlchemy', 'Celery'],
      database: ['PostgreSQL'],
      deployment: ['AWS EC2', 'Docker'],
      tools: ['Git', 'Postman', 'Figma', 'OpenAI API']
    },
    architecture: {
      overview: 'Microservices architecture with separate services for AI processing, user management, and content delivery. Frontend communicates with Flask API backend, which orchestrates AI model interactions and database operations.',
      components: [
        {
          name: 'React Frontend',
          description: 'Modern Webapp built with React and TypeScript, featuring responsive design and real-time updates',
          technologies: ['React.js', 'TypeScript', 'Tailwind CSS']
        },
        {
          name: 'Flask API Gateway',
          description: 'RESTful API handling authentication, content management, and AI service orchestration',
          technologies: ['Flask', 'Python', 'SQLAlchemy']
        },
        {
          name: 'AI Processing Service',
          description: 'Dedicated service for voice synthesis and video generation using multiple AI models',
          technologies: ['Python', 'ElevenLabs', 'OpenAI image-gen-1', 'MiniMax API']
        },
        {
          name: 'PostgreSQL Database',
          description: 'Primary database for user data, content metadata, and application state',
          technologies: ['PostgreSQL', 'SQLAlchemy']
        },
        {
          name: 'Redis Cache',
          description: 'Caching layer for session management and frequently accessed data',
          technologies: ['Redis', 'Celery']
        },
        {
          name: 'AWS S3 Storage',
          description: 'Scalable media storage for generated videos, audio files, and user uploads',
          technologies: ['AWS S3', 'CloudFront CDN']
        }
      ]
    },
    links: [
      {
        title: 'Live Application',
        url: 'https://carnivl.ai',
        type: 'demo',
        disabled: true,
        note: 'Project is under construction'
      },
      {
        title: 'GitHub Repository',
        url: 'https://github.com/dveeid/carnivl-ai',
        type: 'github',
        disabled: true,
        note: 'Project is under construction'
      },
      {
        title: 'API Documentation',
        url: 'https://docs.carnivl.ai',
        type: 'documentation',
        disabled: true,
        note: 'Project is under construction'
      }
    ],
    metrics: [
      { name: 'Pop-culture Voice Presets', value: '30+ Voices' },
      { name: 'AI-Video generation styles featuring script context and visual aid', value: '30+ Styles' },
      { name: 'Less than 2 minutes per video generation request', value: '< 2 min / video' }
    ],
    gallery: ['https://youtu.be/PtFVAwfhR2c', '/carnivlai-output.mp4']
  },
  {
    id: 4,
    slug: 'anime-watchlist',
    title: 'AnimeWatchList',
    shortDescription: 'School Project - Flask web application for users to track anime watchlists, genres, and progress with relational database design.',
    fullDescription: 'AnimeWatchList is a comprehensive web application developed as a school project to demonstrate full-stack development skills and relational database design. The platform allows anime enthusiasts to track their viewing progress, organize shows by genres, rate completed series, and discover new content based on their preferences.',
    image: '/anime-watchlist.png',
    tags: ['Python', 'Flask', 'SQL', 'Bootstrap'],
    category: 'web',
    liveUrl: 'https://animewatchlist-production.up.railway.app/',
    githubUrl: 'https://github.com/AdoniasDaniel/AnimeWatchlist',
    featured: false,
    status: 'completed',
    duration: '2 months',
    role: 'Software Engineer',
    teamSize: 2,
    features: [
      'User authentication and profile management',
      'Anime database with detailed information',
      'Personal watchlist tracking (watching, completed, plan to watch)',
      'Episode progress tracking',
      'Rating and review system',
      'Genre-based filtering and search',
      'Recommendation engine based on viewing history',
      'Statistics dashboard for viewing habits'
    ],
    challenges: [
      'Designing normalized database schema for complex anime data',
      'Implementing efficient search and filtering functionality',
      'Creating intuitive user interface for list management',
      'Handling large datasets for anime information',
      'Implementing recommendation algorithm'
    ],
    solutions: [
      'Designed comprehensive ERD with proper relationships',
      'Implemented full-text search with SQLAlchemy',
      'Created drag-and-drop interface for list management',
      'Used pagination and lazy loading for performance',
      'Built collaborative filtering recommendation system'
    ],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Jinja2'],
      backend: ['Python', 'Flask', 'SQLAlchemy', 'Flask-Login'],
      database: ['SQLite', 'PostgreSQL'],
      deployment: ['Heroku', 'PythonAnywhere'],
      tools: ['Git', 'VS Code', 'DB Browser for SQLite']
    },
    architecture: {
      overview: 'Traditional MVC architecture using Flask framework with server-side rendering and SQLAlchemy ORM for database operations.',
      components: [
        {
          name: 'Flask Application',
          description: 'Main web application handling routes, authentication, and business logic',
          technologies: ['Python', 'Flask', 'Jinja2']
        },
        {
          name: 'SQLAlchemy ORM',
          description: 'Database abstraction layer with models for users, anime, and watchlist data',
          technologies: ['SQLAlchemy', 'Flask-SQLAlchemy']
        },
        {
          name: 'Authentication System',
          description: 'User registration, login, and session management',
          technologies: ['Flask-Login', 'Werkzeug']
        }
      ]
    },
    links: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/AdoniasDaniel/AnimeWatchlist',
        type: 'github'
      },
      {
        title: 'Project Demo',
        url: 'https://animewatchlist-production.up.railway.app/',
        type: 'demo'
      }
    ],
    metrics: [
      { name: 'Anime Database Size', value: '1000+ anime show entries' },
      { name: 'User Registrations', value: '20+ users registered (classmates)' },
      { name: 'Total Watchlist Entries', value: '500+' },
      { name: 'Database Queries/sec', value: '<100ms' }
    ]
  }
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projectsData.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): ProjectData[] => {
  return projectsData.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): ProjectData[] => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
}; 