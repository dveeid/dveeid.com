'use client';

import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/PageWrapper';
import { Code, Database, Globe, Zap, GraduationCap, MapPin, Palette } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    icon: Code,
    description: 'Programming languages I use to build applications',
    technologies: ['JavaScript', 'Python', 'Java', 'TypeScript', 'HTML/CSS', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Palette,
    description: 'Frameworks and libraries for efficient development',
    technologies: ['React.js', 'Flask', 'Node.js', 'NumPy'],
  },
  {
    category: 'Databases',
    icon: Database,
    description: 'Database systems and data management',
    technologies: ['PostgreSQL', 'Database Design', 'SQL Optimization'],
  },
  {
    category: 'Tools & Platforms',
    icon: Zap,
    description: 'Development tools and cloud platforms',
    technologies: ['GitHub', 'Vercel', 'Render', 'Google Cloud', 'GitHub Actions'],
  },
  {
    category: 'APIs & Automation',
    icon: Globe,
    description: 'API integration and automation tools',
    technologies: ['Instagram Graph API', 'Swagger', 'Postman', 'n8n', 'Flowise'],
  },
];

const experience = [
  {
    year: '2024 - Present',
    title: 'Full Stack Software Developer',
    company: 'Freelance',
    description: 'Building impactful systems with modern UI, automation, and deployment strategies. Specializing in AI-powered applications and business automation.',
  },
  {
    year: '2023 - 2024',
    title: 'Senior Capstone Project',
    company: 'VCU Computer Science',
    description: 'Developed ParadisePortfolios - AI-powered content generation platform for affiliate marketing with Sandals/Beaches.',
  },
  {
    year: '2022 - 2023',
    title: 'Software Engineering Student',
    company: 'VCU',
    description: 'Focused on full-stack development, database design, and modern web technologies. Completed projects in AI integration and automation.',
  },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I'm a Full Stack Software Developer with a B.S. in Computer Science from VCU, 
                specializing in building impactful systems with modern UI, automation, and deployment strategies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Here are the technologies and tools I work with to bring ideas to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl dark:hover:shadow-gray-900/40 transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {skill.category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Experience & Education
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                My journey in software development and computer science.
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                      Virginia Commonwealth University (VCU)
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Concentration: Software Engineering
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>Richmond, VA</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Current Focus */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Full Stack Software Developer
                    </h3>
                    <p className="text-lg text-green-600 dark:text-green-400 mb-2">
                      Currently Available
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Focused on building impactful systems with modern UI, automation, and deployment strategies. 
                      Specializing in React.js, Flask, Python, and PostgreSQL development.
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>Richmond, VA</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Personal Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Beyond Code
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                When I'm not coding, here's what drives my passion for technology and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900/20"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code that solves real problems. 
                  My focus is on creating user-friendly applications that make a positive impact. 
                  I enjoy working with modern technologies and staying up-to-date with industry best practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900/20"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm always interested in discussing new opportunities, collaborating on projects, 
                  or just chatting about technology. Feel free to reach out if you'd like to work together 
                  or have any questions about my experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
} 