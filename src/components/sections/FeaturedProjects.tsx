'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';
import { trackProjectCardClick, trackDemoLinkClick, trackGithubLinkClick } from '@/utils/analytics';

const featuredProjects = getFeaturedProjects();

export default function FeaturedProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const handleProjectCardClick = (projectSlug: string) => {
    // Track project card click as viewing project details
    trackProjectCardClick(projectSlug, 'featured');
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, AI integration, and automation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
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
                        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                          {project.title.split('.')[0]}
                        </div>
                      </>
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
                        <div className="flex flex-col">
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
                          {isDisabled && githubLink.note && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs">
                              {githubLink.note}
                            </p>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 group"
            >
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 