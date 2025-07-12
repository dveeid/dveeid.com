// Analytics utility functions for tracking user interactions

export interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

/**
 * Track project card clicks as viewing project details
 * @param projectSlug - The slug of the project being viewed
 * @param source - Where the click originated from (e.g., 'featured', 'projects_page')
 */
export const trackProjectCardClick = (projectSlug: string, source: string = 'unknown') => {
  const event: AnalyticsEvent = {
    event: 'project_card_click',
    category: 'project_engagement',
    action: 'view_project_details',
    label: projectSlug,
    custom_parameters: {
      project_slug: projectSlug,
      source: source,
      timestamp: new Date().toISOString(),
    }
  };

  // Console log for development
  console.log('📊 Analytics Event:', event);

  // Add your analytics provider integration here
  // Example integrations:

  // Google Analytics 4
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', event.event, {
  //     event_category: event.category,
  //     event_label: event.label,
  //     custom_parameters: event.custom_parameters
  //   });
  // }

  // Mixpanel
  // if (typeof mixpanel !== 'undefined') {
  //   mixpanel.track(event.event, event.custom_parameters);
  // }

  // Segment
  // if (typeof analytics !== 'undefined') {
  //   analytics.track(event.event, event.custom_parameters);
  // }

  // PostHog
  // if (typeof posthog !== 'undefined') {
  //   posthog.capture(event.event, event.custom_parameters);
  // }

  // You can also send to your own analytics endpoint
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(event)
  // });
};

/**
 * Track demo link clicks
 * @param projectSlug - The slug of the project
 * @param demoUrl - The demo URL being visited
 */
export const trackDemoLinkClick = (projectSlug: string, demoUrl: string) => {
  const event: AnalyticsEvent = {
    event: 'demo_link_click',
    category: 'external_links',
    action: 'visit_demo',
    label: projectSlug,
    custom_parameters: {
      project_slug: projectSlug,
      demo_url: demoUrl,
      timestamp: new Date().toISOString(),
    }
  };

  console.log('📊 Analytics Event:', event);
  // Add your analytics provider integration here
};

/**
 * Track GitHub link clicks
 * @param projectSlug - The slug of the project
 * @param githubUrl - The GitHub URL being visited
 */
export const trackGithubLinkClick = (projectSlug: string, githubUrl: string) => {
  const event: AnalyticsEvent = {
    event: 'github_link_click',
    category: 'external_links',
    action: 'visit_github',
    label: projectSlug,
    custom_parameters: {
      project_slug: projectSlug,
      github_url: githubUrl,
      timestamp: new Date().toISOString(),
    }
  };

  console.log('📊 Analytics Event:', event);
  // Add your analytics provider integration here
};

/**
 * Track view details button clicks
 * @param projectSlug - The slug of the project
 */
export const trackViewDetailsClick = (projectSlug: string) => {
  const event: AnalyticsEvent = {
    event: 'view_details_click',
    category: 'project_engagement',
    action: 'view_project_details',
    label: projectSlug,
    custom_parameters: {
      project_slug: projectSlug,
      timestamp: new Date().toISOString(),
    }
  };

  console.log('📊 Analytics Event:', event);
  // Add your analytics provider integration here
};

/**
 * Track page views
 * @param pagePath - The path of the page being viewed
 * @param pageTitle - The title of the page
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  const event: AnalyticsEvent = {
    event: 'page_view',
    category: 'navigation',
    action: 'view_page',
    label: pagePath,
    custom_parameters: {
      page_path: pagePath,
      page_title: pageTitle,
      timestamp: new Date().toISOString(),
    }
  };

  console.log('📊 Analytics Event:', event);
  // Add your analytics provider integration here
}; 