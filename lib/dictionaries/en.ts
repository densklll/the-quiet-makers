import { Dictionary } from '../i18n';

export const en: Dictionary = {
  common: {
    appName: 'The Quiet Makers',
    nav: {
      projects: 'Projects',
      quiz: 'Find a project',
      about: 'About',
      favorites: 'Favorites'
    },
    auth: {
      login: 'Log in',
      register: 'Sign up',
      logout: 'Log out'
    },
    actions: {
      learnMore: 'Learn more',
      viewProjects: 'View projects',
      findProject: 'Find your project',
      backToProjects: 'Back to projects'
    },
    misc: {
      language: 'Language',
      english: 'English',
      russian: 'Русский'
    }
  },
  home: {
    hero: {
      title: 'Doing good is simple. Find a project that inspires you to help.',
      subtitle: 'The Quiet Makers is a place where everyone can find happiness in doing good. We connect people and projects, making help transparent and inspiring.',
      ctaPrimary: 'Find your project',
      ctaSecondary: 'Learn more about the platform',
      bannerBottom: 'Every action matters',
      statHelped: 'Already helped',
      statPeople: '12,458 people'
    },
    categories: {
      title: 'Choose how you want to help',
      subtitle: 'We support projects in different areas so everyone can find what resonates with their values',
      people: { title: 'Help for people', desc: 'Support projects that help people in difficult life situations, children, the elderly and people with special needs.', view: 'View projects' },
      animals: { title: 'Help for animals', desc: 'Support projects aimed at protecting and saving animals, creating shelters and fighting for their rights.', view: 'View projects' },
      environment: { title: 'Environment', desc: 'Support projects aimed at protecting the environment, preserving biodiversity and combating climate change.', view: 'View projects' }
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'We have simplified the process of finding and supporting charity projects',
      steps: {
        search: { title: 'Search', desc: 'Find projects by your interests, tags and impact.' },
        choose: { title: 'Choose', desc: 'Review details, transparency and goals of the project.' },
        support: { title: 'Support', desc: 'Donate once or regularly, or become a volunteer.' }
      }
    }
  },
  login: {
    title: 'Log in to your account',
    email: 'Email',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    submit: 'Log in',
    noAccount: "Don't have an account?",
    register: 'Sign up',
    or: 'or',
    providers: { google: 'Google', vk: 'VK' },
    errors: { fillAll: 'Please fill in all fields' },
    placeholders: { email: 'Enter your email', password: 'Enter your password' }
  },
  register: {
    title: 'Sign up',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
    agreeTerms: 'You must agree to the Terms of Use',
    submit: 'Create account',
    haveAccount: 'Already have an account?',
    login: 'Log in',
    errors: { fillAll: 'Please fill in all fields', passwordMismatch: 'Passwords do not match', mustAgree: 'You must agree to the Terms of Use' },
    placeholders: { name: 'Enter your name', email: 'Enter your email', password: 'Create a password', confirmPassword: 'Confirm password' }
  },
  projects: {
    title: 'Projects that match your interests and are ready for support.',
    fromQuiz: 'We selected projects based on your preferences',
    inCategories: 'in categories:',
    withFormat: 'with format:',
    searchPlaceholder: 'Search projects...',
    filters: { title: 'Filters', clear: 'Clear filters' },
    formats: { oneTime: 'One-time help', recurring: 'Recurring help', volunteer: 'Volunteering' },
    categories: { people: 'People', animals: 'Animals', nature: 'Nature' },
    tags: {
      people: 'People', charity: 'Charity', animals: 'Animals', environment: 'Environment', children: 'Children', nature: 'Nature'
    }
  },
  projectDetails: {
    back: 'Back to projects',
    collected: 'Collected',
    of: 'of',
    collectedPercent: 'collected',
    remaining: 'Remaining to collect:',
    about: 'About the project',
    donate: 'Make a donation',
    chooseAmount: 'Choose an amount',
    monthly: 'Monthly',
    oneTime: 'One-time',
    customAmount: 'Custom amount',
    donateNow: 'Donate now',
    successTitle: 'Thank you for your support!',
    successText: 'Your donation has been successfully processed. Together we make the world kinder.'
  },
  favorites: {
    title: 'Favorites',
    subtitle: 'Projects you saved for future support',
    remove: 'Remove from favorites',
    empty: 'You have no favorite projects yet'
  }
};