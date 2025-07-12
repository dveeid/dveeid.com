'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb,
  BarChart3,
  Globe,
  Book,
  ChevronRight,
  X,
  ZoomIn
} from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import { getProjectBySlug } from '@/data/projects';
import { TechIcon, techStackData } from '@/components/shared/TechStackIcons';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    
    if (selectedImage) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const getTechIcon = (techName: string) => {
    const allTechs = Object.values(techStackData).flat();
    return allTechs.find(tech => 
      tech.name.toLowerCase().includes(techName.toLowerCase()) ||
      techName.toLowerCase().includes(tech.name.toLowerCase())
    );
  };

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'demo':
        return <Globe className="w-4 h-4" />;
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'documentation':
        return <Book className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header Section */}
        <section className="py-12 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Badge - positioned at the very top */}
            {project.featured && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Project
                </span>
              </motion.div>
            )}

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative lg:order-2"
              >
                <div className="relative h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden shadow-2xl">
                  {project.image && !project.image.includes('placeholder') ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                        {project.title.split(/[.\s]/)[0]}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:order-1"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.fullDescription}
                </p>

                {/* Project Meta */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <p className="text-gray-900 dark:text-white font-semibold">{project.duration}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 relative group">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Team</span>
                    </div>
                    <p className="text-gray-900 dark:text-white font-semibold cursor-pointer">
                      {project.teamSize} {project.teamSize === 1 ? 'Person' : 'People'}
                    </p>
                    
                    {/* Tooltip for team members - show for specific projects */}
                    {project.slug === 'anime-watchlist' && project.teamSize === 2 && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                        <div className="flex flex-col items-center">
                          <span className="font-medium">Adonias Daniel</span>
                          <span className="font-medium">David Newman</span>
                        </div>
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                      </div>
                    )}
                    
                    {/* Tooltip for Paradise Portfolios team members */}
                    {project.slug === 'paradise-portfolios' && project.teamSize === 4 && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                        <div className="flex flex-col items-center">
                          <span className="font-medium">David Newman</span>
                          <span className="font-medium">Ethan Dubrueler</span>
                          <span className="font-medium">Marcio Tejeda</span>
                          <span className="font-medium">Noah Davis</span>
                        </div>
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                      </div>
                    )}
                    
                    {/* Tooltip for Bartons Life and Health team members */}
                    {project.slug === 'bartons-life-health' && project.teamSize === 2 && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                        <div className="flex flex-col items-center">
                          <span className="font-medium">David Newman</span>
                          <span className="font-medium">Aidan Barton</span>
                        </div>
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 col-span-2">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                      <span className="text-sm">Role</span>
                    </div>
                    <p className="text-gray-900 dark:text-white font-semibold">{project.role}</p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <div key={link.title} className="flex flex-col">
                      <motion.a
                        href={link.disabled ? undefined : link.url}
                        target={link.disabled ? undefined : "_blank"}
                        rel={link.disabled ? undefined : "noopener noreferrer"}
                        whileHover={link.disabled ? {} : { scale: 1.05 }}
                        whileTap={link.disabled ? {} : { scale: 0.95 }}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-200 font-medium ${
                          link.disabled
                            ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-50'
                            : 'bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800'
                        }`}
                        style={link.disabled ? { pointerEvents: 'none' } : {}}
                      >
                        {getLinkIcon(link.type)}
                        {link.title}
                      </motion.a>
                      {link.disabled && link.note && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-xs">
                          {link.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        {project.metrics && (
          <section className="py-12 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {project.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mx-auto mb-3">
                      <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</p>
                    <p className="text-gray-600 dark:text-gray-300">{metric.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Key Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Core functionality and capabilities that make this project unique
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg dark:shadow-gray-900/20"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-200">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Technology Stack
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Technologies and tools used to build this project
              </p>
            </motion.div>

            <div className="space-y-8">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {technologies.map((tech) => {
                      const techIcon = getTechIcon(tech);
                      return (
                        <div key={tech} className="flex flex-col items-center text-center">
                          {techIcon ? (
                            <TechIcon tech={techIcon} size="sm" showLabel={true} />
                          ) : (
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg mb-2 flex items-center justify-center">
                                <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                                  {tech.charAt(0)}
                                </span>
                              </div>
                              <span className="text-xs text-gray-700 dark:text-gray-300">{tech}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                System Architecture
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {project.architecture.overview}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.architecture.components.map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-900/20"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {component.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {component.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="py-16 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Gallery
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Visual overview of the project architecture and design
                </p>
              </motion.div>

              <div className="space-y-8">
                {(() => {
                  // Helper function to check if item is a YouTube URL
                  const isYouTubeURL = (item: string) => {
                    return item.includes('youtube.com') || item.includes('youtu.be');
                  };
                  
                  // Helper function to get YouTube embed URL
                  const getYouTubeEmbedURL = (url: string) => {
                    if (url.includes('youtube.com/shorts/')) {
                      const videoId = url.split('shorts/')[1].split('?')[0];
                      return `https://www.youtube.com/embed/${videoId}`;
                    } else if (url.includes('youtu.be/')) {
                      const videoId = url.split('youtu.be/')[1].split('?')[0];
                      return `https://www.youtube.com/embed/${videoId}`;
                    }
                    return url;
                  };
                  
                  const workflowImages = project.gallery.filter(item => 
                    !item.includes('_1.png') && 
                    !item.includes('_2.png') && 
                    !item.includes('_3.png') &&
                    !item.includes('_9x16.mp4') &&
                    !item.includes('carnivlai-input.mov') &&
                    !item.includes('carnivlai-output.mp4') &&
                    !isYouTubeURL(item)
                  );
                  const dmScreenshots = project.gallery.filter(item => 
                    item.includes('_1.png') || 
                    item.includes('_2.png') || 
                    item.includes('_3.png')
                  ).sort();
                  const videos = project.gallery.filter(item => 
                    item.includes('_9x16.mp4') || (isYouTubeURL(item) && !item.includes('PtFVAwfhR2c'))
                  ).sort();
                  const inputOutputVideos = project.gallery.filter(item => 
                    item.includes('carnivlai-input.mov') || 
                    item.includes('carnivlai-output.mp4') ||
                    (isYouTubeURL(item) && item.includes('PtFVAwfhR2c'))
                  ).sort((a, b) => {
                    if (a.includes('input') || a.includes('PtFVAwfhR2c')) return -1;
                    if (b.includes('input') || b.includes('PtFVAwfhR2c')) return 1;
                    return 0;
                  });
                  
                  return (
                    <>
                      {/* Workflow/Architecture Images - Full Width */}
                      {workflowImages.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg dark:shadow-gray-900/20"
                        >
                          <div className="relative group cursor-pointer" onClick={() => setSelectedImage(image)}>
                            <img
                              src={image}
                              alt={`${project.title} architecture diagram`}
                              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-black/5 rounded-lg pointer-events-none group-hover:bg-black/10 transition-colors duration-300" />
                            
                            {/* Zoom Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                                <ZoomIn className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                              </div>
                            </div>
                            
                            {/* Click to zoom text */}
                            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Click to zoom
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      
                      {/* Input/Output Videos - Two in a Row */}
                      {inputOutputVideos.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                          {inputOutputVideos.map((video, index) => (
                            <div
                              key={index}
                              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 shadow-lg dark:shadow-gray-900/20"
                            >
                              <div className="relative group">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                                  {video.includes('input') || video.includes('PtFVAwfhR2c') ? 'Input' : 'Output'}
                                </h3>
                                {isYouTubeURL(video) ? (
                                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                      src={getYouTubeEmbedURL(video)}
                                      title="YouTube video"
                                      className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen
                                    />
                                  </div>
                                ) : (
                                  <video
                                    src={video}
                                    controls
                                    className="w-full h-auto rounded-lg shadow-lg"
                                    preload="metadata"
                                    playsInline
                                  >
                                    Your browser does not support the video tag.
                                  </video>
                                )}
                                <div className="absolute inset-0 bg-black/5 rounded-lg pointer-events-none group-hover:bg-black/10 transition-colors duration-300" />
                                
                                {/* Video label */}
                                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                                  {video.includes('input') || video.includes('PtFVAwfhR2c') ? 'User Input' : 'AI Generated'}
                                </div>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                      
                      {/* DM Screenshots - Three in a Row */}
                      {dmScreenshots.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                          {dmScreenshots.map((image, index) => (
                            <div
                              key={index}
                              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 shadow-lg dark:shadow-gray-900/20"
                            >
                              <div className="relative group cursor-pointer" onClick={() => setSelectedImage(image)}>
                                <img
                                  src={image}
                                  alt={`${project.title} DM screenshot ${index + 1}`}
                                  className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-black/5 rounded-lg pointer-events-none group-hover:bg-black/10 transition-colors duration-300" />
                                
                                {/* Zoom Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                                    <ZoomIn className="w-4 h-4 text-gray-700 dark:text-gray-200" />
                                  </div>
                                </div>
                                
                                {/* Click to zoom text */}
                                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Click to zoom
                                </div>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                      
                      {/* Videos - Three in a Row */}
                      {videos.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                          {videos.map((video, index) => (
                            <div
                              key={index}
                              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 shadow-lg dark:shadow-gray-900/20"
                            >
                              <div className="relative group">
                                {isYouTubeURL(video) ? (
                                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                      src={getYouTubeEmbedURL(video)}
                                      title="YouTube video"
                                      className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen
                                    />
                                  </div>
                                ) : (
                                  <video
                                    src={video}
                                    controls
                                    className="w-full h-auto rounded-lg shadow-lg"
                                    preload="metadata"
                                    playsInline
                                  >
                                    Your browser does not support the video tag.
                                  </video>
                                )}
                                <div className="absolute inset-0 bg-black/5 rounded-lg pointer-events-none group-hover:bg-black/10 transition-colors duration-300" />
                                
                                {/* Video label */}
                                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                                  {isYouTubeURL(video) ? 
                                    (video.includes('Ko5icFx2Xrg') ? 'AND THE GRENADINES' :
                                     video.includes('JoCgCnxc5Vs') ? 'MONTEGO BAY JAMAICA' :
                                     video.includes('1dvjx6uGFgo') ? 'WHITEHOUSE JAMAICA' :
                                     'YouTube Video') :
                                    `${video.split('/').pop()?.split('_')[0]} Video`
                                  }
                                </div>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </section>
        )}

        {/* Challenges & Solutions Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Challenges & Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Key obstacles encountered during development and how they were overcome
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                  Challenges
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4"
                    >
                      <p className="text-gray-700 dark:text-gray-200">{challenge}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-green-500" />
                  Solutions
                </h3>
                <div className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4"
                    >
                      <p className="text-gray-700 dark:text-gray-200">{solution}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Next Project Navigation */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Explore More Projects
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
                >
                  View All Projects
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:border-gray-400 dark:hover:border-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
                >
                  Contact Me
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl max-h-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Modal Image */}
              <motion.img
                src={selectedImage}
                alt={`${project.title} architecture diagram - zoomed view`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Instructions */}
              <div className="absolute -bottom-12 left-0 text-white text-sm">
                Press ESC or click outside to close
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </PageWrapper>
  );
} 