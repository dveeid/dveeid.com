'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';
import { projectsData, getProjectsByCategory } from '@/data/projects';
import { trackProjectCardClick, trackDemoLinkClick, trackGithubLinkClick } from '@/utils/analytics';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'automation', name: 'Automation' },
  ];

  const filteredProjects = getProjectsByCategory(selectedCategory);

  const handleProjectCardClick = (projectSlug: string) => {
    // Track project card click as viewing project details
    trackProjectCardClick(projectSlug, 'projects_page');
  };

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
                My Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Here's a collection of projects I've worked on, showcasing my skills 
                in full-stack development, AI integration, and automation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/40 transition-all duration-300">
                      {/* Clickable Card Content */}
                      <Link
                        href={`/projects/${project.slug}`}
                        onClick={() => handleProjectCardClick(project.slug)}
                        className="block cursor-pointer"
                      >
                        {/* Project Image */}
                        <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                          {project.image && !project.image.includes('placeholder') ? (
                            <>
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                            </>
                          ) : (
                            <>
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                                {project.title.split(/[.\s]/)[0]}
                              </div>
                            </>
                          )}
                          {project.featured && (
                            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                              Featured
                            </div>
                          )}
                        </div>

                        {/* Project Content */}
                        <div className="p-6 pb-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                            {project.shortDescription}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>

                      {/* Project Links - Outside of clickable area */}
                      <div className="px-6 pb-6">
                        <div className="flex gap-3">
                          {(() => {
                            const demoLink = project.links.find(link => link.type === 'demo');
                            const isDisabled = demoLink?.disabled;
                            
                            return (
                              <motion.a
                                href={isDisabled ? undefined : project.liveUrl}
                                target={isDisabled ? undefined : "_blank"}
                                rel={isDisabled ? undefined : "noopener noreferrer"}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!isDisabled) {
                                    trackDemoLinkClick(project.slug, project.liveUrl);
                                  }
                                }}
                                whileHover={isDisabled ? {} : { scale: 1.05 }}
                                whileTap={isDisabled ? {} : { scale: 0.95 }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                                  isDisabled
                                    ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-50'
                                    : 'bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800'
                                }`}
                                style={isDisabled ? { pointerEvents: 'none' } : {}}
                              >
                                <ExternalLink size={16} />
                                {project.liveUrl.includes('github') ? 'View' : 'Live Demo'}
                              </motion.a>
                            );
                          })()}
                          
                          {(() => {
                            const githubLink = project.links.find(link => link.type === 'github');
                            if (!githubLink) return null;
                            
                            const isDisabled = githubLink.disabled;
                            
                            return (
                              <motion.a
                                href={isDisabled ? undefined : githubLink.url}
                                target={isDisabled ? undefined : "_blank"}
                                rel={isDisabled ? undefined : "noopener noreferrer"}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!isDisabled) {
                                    trackGithubLinkClick(project.slug, githubLink.url);
                                  }
                                }}
                                whileHover={isDisabled ? {} : { scale: 1.05 }}
                                whileTap={isDisabled ? {} : { scale: 0.95 }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                                  isDisabled
                                    ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-50'
                                    : 'bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700'
                                }`}
                                style={isDisabled ? { pointerEvents: 'none' } : {}}
                              >
                                <Github size={16} />
                                GitHub
                              </motion.a>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
} 