import React from 'react';

// Tech Stack Icons with SVG components
export const TechIcons = {
  // Languages
  JavaScript: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#F7DF1E" rx="2"/>
      <path d="M17.5 12.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5S12.07 9 14 9s3.5 1.57 3.5 3.5z" fill="#000"/>
      <path d="M6.5 7.5h4v9h-1.5V9H6.5V7.5z" fill="#000"/>
      <path d="M14 11.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" fill="#F7DF1E"/>
    </svg>
  ),
  
  TypeScript: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#3178C6" rx="2"/>
      <path d="M12.5 7.5V9h2v1.5h-2v3h2V15h-3.5V7.5h3.5z" fill="white"/>
      <path d="M8.5 9h1.5v6H8.5V9z" fill="white"/>
      <path d="M7.5 7.5h3v1.5h-3V7.5z" fill="white"/>
    </svg>
  ),
  
  Python: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#3776AB" rx="2"/>
      <path d="M12 2C8.5 2 8 2.5 8 4v2h8V5c0-1.5-.5-2-4-2zm-4 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H8z" fill="#FFD43B"/>
      <circle cx="10" cy="12" r="1" fill="#3776AB"/>
      <circle cx="14" cy="12" r="1" fill="#3776AB"/>
    </svg>
  ),
  
  Java: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#ED8B00" rx="2"/>
      <path d="M12 2c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4V6c0-2.2-1.8-4-4-4zm0 2c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2s-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="white"/>
      <circle cx="12" cy="10" r="1" fill="#ED8B00"/>
    </svg>
  ),
  
  HTML5: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#E34F26" rx="2"/>
      <path d="M12 2L5 4v16l7-2 7 2V4l-7-2z" fill="white"/>
      <path d="M12 6L8 7v10l4-1 4 1V7l-4-1z" fill="#E34F26"/>
    </svg>
  ),
  
  CSS3: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#1572B6" rx="2"/>
      <path d="M12 2L5 4v16l7-2 7 2V4l-7-2z" fill="white"/>
      <path d="M12 6L8 7v10l4-1 4 1V7l-4-1z" fill="#1572B6"/>
    </svg>
  ),
  
  SQL: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#336791" rx="2"/>
      <path d="M12 4c-4 0-8 1-8 3v10c0 2 4 3 8 3s8-1 8-3V7c0-2-4-3-8-3zm0 2c3 0 6 .5 6 1s-3 1-6 1-6-.5-6-1 3-1 6-1z" fill="white"/>
    </svg>
  ),
  
  // Frontend Frameworks & Libraries
  React: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#61DAFB" rx="2"/>
      <circle cx="12" cy="12" r="2" fill="#282C34"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#282C34" strokeWidth="1" fill="none"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#282C34" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#282C34" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  
  NextJS: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#000000" rx="2"/>
      <circle cx="12" cy="12" r="8" fill="white"/>
      <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="#000"/>
      <path d="M9 9h6v6H9V9z" fill="#000"/>
    </svg>
  ),
  
  Vue: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#4FC08D" rx="2"/>
      <path d="M12 2L4 20h16L12 2z" fill="white"/>
      <path d="M12 6L8 16h8L12 6z" fill="#4FC08D"/>
    </svg>
  ),
  
  Angular: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#DD0031" rx="2"/>
      <path d="M12 2L3 6l1.5 13L12 22l7.5-3L21 6l-9-4z" fill="white"/>
      <path d="M12 4L7 18h10L12 4z" fill="#DD0031"/>
    </svg>
  ),
  
  TailwindCSS: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#06B6D4" rx="2"/>
      <path d="M12 6c-2 0-3.5 1-4.5 3 1.5-1 3.25-.75 5.25.5C14 10.5 15.5 12 18 12c2 0 3.5-1 4.5-3-1.5 1-3.25.75-5.25-.5C16 7.5 14.5 6 12 6z" fill="white"/>
      <path d="M6 12c-2 0-3.5 1-4.5 3 1.5-1 3.25-.75 5.25.5C8 16.5 9.5 18 12 18c2 0 3.5-1 4.5-3-1.5 1-3.25.75-5.25-.5C10 13.5 8.5 12 6 12z" fill="white"/>
    </svg>
  ),
  
  Bootstrap: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#7952B3" rx="2"/>
      <path d="M8 6h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4V6z" fill="white"/>
      <path d="M8 12h5c1.1 0 2 .9 2 2s-.9 2-2 2H8v-4z" fill="white"/>
    </svg>
  ),
  
  // Backend Frameworks
  NodeJS: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#339933" rx="2"/>
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4z" fill="white"/>
      <path d="M12 4L7 7v10l5 2.5L17 17V7l-5-3z" fill="#339933"/>
    </svg>
  ),
  
  Flask: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#000000" rx="2"/>
      <path d="M12 2C8.5 2 8 3 8 4v4L4 16c-1 2 0 4 2 4h12c2 0 3-2 2-4l-4-8V4c0-1-.5-2-4-2z" fill="white"/>
      <circle cx="10" cy="10" r="1" fill="#000"/>
      <circle cx="14" cy="10" r="1" fill="#000"/>
    </svg>
  ),
  
  Express: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#000000" rx="2"/>
      <path d="M4 8h16M4 12h16M4 16h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  
  Django: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#092E20" rx="2"/>
      <path d="M8 4h2v16H8V4zm4 0h2v12h-2V4z" fill="white"/>
      <path d="M16 8h2v8h-2V8z" fill="white"/>
    </svg>
  ),
  
  FastAPI: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#009688" rx="2"/>
      <path d="M12 2L4 12h8l-4 10 12-10h-8l4-10z" fill="white"/>
    </svg>
  ),
  
  // Databases
  PostgreSQL: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#336791" rx="2"/>
      <path d="M12 2C8 2 6 4 6 8v8c0 4 2 6 6 6s6-2 6-6V8c0-4-2-6-6-6zm0 2c2 0 4 1 4 4v8c0 3-2 4-4 4s-4-1-4-4V8c0-3 2-4 4-4z" fill="white"/>
      <circle cx="12" cy="8" r="1" fill="#336791"/>
    </svg>
  ),
  
  MySQL: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#4479A1" rx="2"/>
      <path d="M12 2C8 2 6 4 6 8v8c0 4 2 6 6 6s6-2 6-6V8c0-4-2-6-6-6zm0 2c2 0 4 1 4 4v8c0 3-2 4-4 4s-4-1-4-4V8c0-3 2-4 4-4z" fill="white"/>
      <circle cx="12" cy="8" r="1" fill="#4479A1"/>
    </svg>
  ),
  
  MongoDB: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#47A248" rx="2"/>
      <path d="M12 2C8 2 6 6 6 10v4c0 6 4 8 6 8s6-2 6-8v-4c0-4-2-8-6-8zm0 18c-1 0-4-1-4-6v-4c0-3 1-6 4-6s4 3 4 6v4c0 5-3 6-4 6z" fill="white"/>
    </svg>
  ),
  
  Redis: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#DC382D" rx="2"/>
      <path d="M12 2L4 6v4l8-2 8 2V6l-8-4z" fill="white"/>
      <path d="M12 10L4 12v4l8-2 8 2v-4l-8-2z" fill="white"/>
      <path d="M12 16L4 18v2l8-2 8 2v-2l-8-2z" fill="white"/>
    </svg>
  ),
  
  // Cloud & DevOps
  AWS: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#FF9900" rx="2"/>
      <path d="M4 8h16v8H4V8zm2 2v4h12V10H6z" fill="white"/>
      <path d="M6 18h12v2H6v-2z" fill="white"/>
    </svg>
  ),
  
  GoogleCloud: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#4285F4" rx="2"/>
      <path d="M12 2C8 2 6 4 6 8c0 2 1 4 3 5v7h6v-7c2-1 3-3 3-5 0-4-2-6-6-6zm0 2c3 0 4 1 4 4 0 2-1 3-2 4H10c-1-1-2-2-2-4 0-3 1-4 4-4z" fill="white"/>
    </svg>
  ),
  
  Azure: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#0078D4" rx="2"/>
      <path d="M12 2L4 20h16L12 2z" fill="white"/>
      <path d="M12 6L8 16h8L12 6z" fill="#0078D4"/>
    </svg>
  ),
  
  Vercel: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#000000" rx="2"/>
      <path d="M12 4L4 20h16L12 4z" fill="white"/>
    </svg>
  ),
  
  Docker: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#2496ED" rx="2"/>
      <path d="M4 8h4v4H4V8zm5 0h4v4H9V8zm5 0h4v4h-4V8zM4 13h4v4H4v-4zm5 0h4v4H9v-4zm5 0h4v4h-4v-4z" fill="white"/>
    </svg>
  ),
  
  // Tools & Services
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#181717" rx="2"/>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.7-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z" fill="white"/>
    </svg>
  ),
  
  Git: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#F05032" rx="2"/>
      <path d="M12 2L4 10l8 8 8-8-8-8zm0 6l-4 4 4 4 4-4-4-4z" fill="white"/>
    </svg>
  ),
  
  VSCode: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#007ACC" rx="2"/>
      <path d="M16 2L6 12 16 22l6-3V5l-6-3z" fill="white"/>
      <path d="M16 6v12L9 12l7-6z" fill="#007ACC"/>
    </svg>
  ),
  
  Figma: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#F24E1E" rx="2"/>
      <circle cx="12" cy="12" r="4" fill="white"/>
      <circle cx="8" cy="8" r="2" fill="#FF7262"/>
      <circle cx="16" cy="8" r="2" fill="#A259FF"/>
      <circle cx="8" cy="16" r="2" fill="#1ABCFE"/>
      <circle cx="16" cy="16" r="2" fill="#0ACF83"/>
    </svg>
  ),
  
  // Testing & Quality
  Jest: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#C21325" rx="2"/>
      <path d="M12 2C8 2 6 4 6 8v8c0 4 2 6 6 6s6-2 6-6V8c0-4-2-6-6-6zm0 2c2 0 4 1 4 4v8c0 3-2 4-4 4s-4-1-4-4V8c0-3 2-4 4-4z" fill="white"/>
      <circle cx="12" cy="12" r="2" fill="#C21325"/>
    </svg>
  ),
  
  Postman: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#FF6C37" rx="2"/>
      <path d="M12 2L4 10l8 8 8-8-8-8zm0 6l-4 4 4 4 4-4-4-4z" fill="white"/>
    </svg>
  ),
  
  // AI & ML
  TensorFlow: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#FF6F00" rx="2"/>
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4z" fill="white"/>
      <path d="M12 4L7 7v10l5 2.5L17 17V7l-5-3z" fill="#FF6F00"/>
    </svg>
  ),
  
  PyTorch: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#EE4C2C" rx="2"/>
      <circle cx="12" cy="12" r="6" fill="white"/>
      <path d="M12 8l-4 4 4 4 4-4-4-4z" fill="#EE4C2C"/>
    </svg>
  ),
  
  OpenAI: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#412991" rx="2"/>
      <circle cx="12" cy="12" r="6" fill="white"/>
      <path d="M12 8l-4 4 4 4 4-4-4-4z" fill="#412991"/>
    </svg>
  ),
  
  // Additional Tools
  Slack: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#4A154B" rx="2"/>
      <path d="M8 6h2v4H8V6zm6 0h2v4h-2V6zM8 14h2v4H8v-4zm6 0h2v4h-2v-4z" fill="white"/>
      <path d="M6 8h4v2H6V8zm8 0h4v2h-4V8zM6 14h4v2H6v-2zm8 0h4v2h-4v-2z" fill="white"/>
    </svg>
  ),
  
  Jira: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#0052CC" rx="2"/>
      <path d="M12 2L4 10l8 8 8-8-8-8zm0 6l-2 2 2 2 2-2-2-2z" fill="white"/>
    </svg>
  ),
  
  Notion: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect width="24" height="24" fill="#000000" rx="2"/>
      <path d="M6 4h12v16H6V4zm2 2v12h8V6H8z" fill="white"/>
      <path d="M8 8h8v1H8V8zm0 3h8v1H8v-1zm0 3h6v1H8v-1z" fill="#000"/>
    </svg>
  )
};

// Tech stack data organized by category
export const techStackData = {
  languages: [
    { name: 'JavaScript', icon: TechIcons.JavaScript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: TechIcons.TypeScript, color: '#3178C6' },
    { name: 'Python', icon: TechIcons.Python, color: '#3776AB' },
    { name: 'Java', icon: TechIcons.Java, color: '#ED8B00' },
    { name: 'HTML5', icon: TechIcons.HTML5, color: '#E34F26' },
    { name: 'CSS3', icon: TechIcons.CSS3, color: '#1572B6' },
    { name: 'SQL', icon: TechIcons.SQL, color: '#336791' },
  ],
  frontend: [
    { name: 'React', icon: TechIcons.React, color: '#61DAFB' },
    { name: 'Next.js', icon: TechIcons.NextJS, color: '#000000' },
    { name: 'Vue.js', icon: TechIcons.Vue, color: '#4FC08D' },
    { name: 'Angular', icon: TechIcons.Angular, color: '#DD0031' },
    { name: 'Tailwind CSS', icon: TechIcons.TailwindCSS, color: '#06B6D4' },
    { name: 'Bootstrap', icon: TechIcons.Bootstrap, color: '#7952B3' },
  ],
  backend: [
    { name: 'Node.js', icon: TechIcons.NodeJS, color: '#339933' },
    { name: 'Flask', icon: TechIcons.Flask, color: '#000000' },
    { name: 'Express.js', icon: TechIcons.Express, color: '#000000' },
    { name: 'Django', icon: TechIcons.Django, color: '#092E20' },
    { name: 'FastAPI', icon: TechIcons.FastAPI, color: '#009688' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: TechIcons.PostgreSQL, color: '#336791' },
    { name: 'MySQL', icon: TechIcons.MySQL, color: '#4479A1' },
    { name: 'MongoDB', icon: TechIcons.MongoDB, color: '#47A248' },
    { name: 'Redis', icon: TechIcons.Redis, color: '#DC382D' },
  ],
  cloud: [
    { name: 'AWS', icon: TechIcons.AWS, color: '#FF9900' },
    { name: 'Google Cloud', icon: TechIcons.GoogleCloud, color: '#4285F4' },
    { name: 'Azure', icon: TechIcons.Azure, color: '#0078D4' },
    { name: 'Vercel', icon: TechIcons.Vercel, color: '#000000' },
    { name: 'Docker', icon: TechIcons.Docker, color: '#2496ED' },
  ],
  tools: [
    { name: 'GitHub', icon: TechIcons.GitHub, color: '#181717' },
    { name: 'Git', icon: TechIcons.Git, color: '#F05032' },
    { name: 'VS Code', icon: TechIcons.VSCode, color: '#007ACC' },
    { name: 'Figma', icon: TechIcons.Figma, color: '#F24E1E' },
    { name: 'Jest', icon: TechIcons.Jest, color: '#C21325' },
    { name: 'Postman', icon: TechIcons.Postman, color: '#FF6C37' },
  ],
  ai: [
    { name: 'TensorFlow', icon: TechIcons.TensorFlow, color: '#FF6F00' },
    { name: 'PyTorch', icon: TechIcons.PyTorch, color: '#EE4C2C' },
    { name: 'OpenAI', icon: TechIcons.OpenAI, color: '#412991' },
  ],
  collaboration: [
    { name: 'Slack', icon: TechIcons.Slack, color: '#4A154B' },
    { name: 'Jira', icon: TechIcons.Jira, color: '#0052CC' },
    { name: 'Notion', icon: TechIcons.Notion, color: '#000000' },
  ]
};

// Helper function to get all technologies as a flat array
export const getAllTechnologies = () => {
  return Object.values(techStackData).flat();
};

// Helper function to get technologies by category
export const getTechnologiesByCategory = (category: keyof typeof techStackData) => {
  return techStackData[category];
};

// Component to display a tech icon with hover effects
interface TechIconProps {
  tech: { name: string; icon: React.ComponentType; color: string };
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({ 
  tech, 
  size = 'md', 
  showLabel = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className="group flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
      <div className={`${sizeClasses[size]} group-hover:scale-110 transition-transform duration-300`}>
        <tech.icon />
      </div>
      {showLabel && (
        <span className="text-xs mt-2 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
          {tech.name}
        </span>
      )}
    </div>
  );
};

// Component to display tech stack by category
interface TechStackSectionProps {
  category: keyof typeof techStackData;
  title: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  category,
  title,
  size = 'md',
  showLabels = true
}) => {
  const technologies = getTechnologiesByCategory(category);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((tech) => (
          <TechIcon
            key={tech.name}
            tech={tech}
            size={size}
            showLabel={showLabels}
          />
        ))}
      </div>
    </div>
  );
};

export default TechIcon; 