'use client';

import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/PageWrapper';
import { 
  TechStackSection, 
  TechIcon, 
  getAllTechnologies, 
  techStackData 
} from '@/components/shared/TechStackIcons';

export default function TechStackPage() {
  const allTechs = getAllTechnologies();

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
                Tech Stack Icons
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A comprehensive collection of technology icons for showcasing your skills and expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Technologies Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                All Technologies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Complete collection of {allTechs.length} technology icons
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
              {allTechs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <TechIcon tech={tech} size="md" showLabel={true} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies by Category */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies by Category
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Organized by technology type for easy browsing
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <TechStackSection
                  category="languages"
                  title="Programming Languages"
                  size="md"
                  showLabels={true}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <TechStackSection
                  category="frontend"
                  title="Frontend Frameworks & Libraries"
                  size="md"
                  showLabels={true}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TechStackSection
                  category="backend"
                  title="Backend Frameworks"
                  size="md"
                  showLabels={true}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <TechStackSection
                  category="databases"
                  title="Databases"
                  size="md"
                  showLabels={true}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <TechStackSection
                  category="cloud"
                  title="Cloud & DevOps"
                  size="md"
                  showLabels={true}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <TechStackSection
                  category="tools"
                  title="Development Tools"
                  size="md"
                  showLabels={true}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <TechStackSection
                  category="ai"
                  title="AI & Machine Learning"
                  size="md"
                  showLabels={true}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <TechStackSection
                  category="collaboration"
                  title="Collaboration Tools"
                  size="md"
                  showLabels={true}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Size Variations */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Different Sizes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Icons available in small, medium, and large sizes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Small Size */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Small Icons
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {techStackData.languages.slice(0, 4).map((tech) => (
                    <TechIcon
                      key={`small-${tech.name}`}
                      tech={tech}
                      size="sm"
                      showLabel={true}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Medium Size */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Medium Icons
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {techStackData.languages.slice(0, 4).map((tech) => (
                    <TechIcon
                      key={`medium-${tech.name}`}
                      tech={tech}
                      size="md"
                      showLabel={true}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Large Size */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Large Icons
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {techStackData.languages.slice(0, 4).map((tech) => (
                    <TechIcon
                      key={`large-${tech.name}`}
                      tech={tech}
                      size="lg"
                      showLabel={true}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Usage Examples
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                How to integrate these icons in your portfolio
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Example 1: Skills Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Skills Section
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Languages I Know
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStackData.languages.slice(0, 5).map((tech) => (
                        <TechIcon
                          key={`skills-${tech.name}`}
                          tech={tech}
                          size="sm"
                          showLabel={false}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Frontend Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStackData.frontend.slice(0, 4).map((tech) => (
                        <TechIcon
                          key={`frontend-${tech.name}`}
                          tech={tech}
                          size="sm"
                          showLabel={false}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Example 2: Project Tags */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Project Tags
                </h3>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Full Stack Web App
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Modern web application with authentication
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Built with:</span>
                      <div className="flex gap-1">
                        <TechIcon tech={techStackData.frontend[0]} size="sm" showLabel={false} />
                        <TechIcon tech={techStackData.backend[0]} size="sm" showLabel={false} />
                        <TechIcon tech={techStackData.databases[0]} size="sm" showLabel={false} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      AI/ML Project
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Machine learning model for data analysis
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Built with:</span>
                      <div className="flex gap-1">
                        <TechIcon tech={techStackData.languages[2]} size="sm" showLabel={false} />
                        <TechIcon tech={techStackData.ai[0]} size="sm" showLabel={false} />
                        <TechIcon tech={techStackData.ai[1]} size="sm" showLabel={false} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
} 