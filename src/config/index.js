module.exports = {
  siteTitle: 'Sudhanva Narayana | Initiable',
  siteDescription: 'Sudhanva Narayana is a Founder and Director at Initiable.',
  siteKeywords:
    'Sudhanva Narayana, Sudhanva, Initiable, software engineer, machine learning engineer, aritificial intelligence',
  siteUrl: 'https://sudhanva.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-72567675-2',
  googleVerification: 'Tut8S4i8bm4uDl_426nWjtn30zfswgWRELjkmIFnOXs',
  name: 'Sudhanva Narayana',
  location: 'Bengaluru, India',
  email: 'sudhanva@initiable.com',
  github: 'https://github.com/nsudhanva',
  twitterHandle: '@SudhanvaN',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/nsudhanva',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/nsudhanva',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/nsudhanva',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/SudhanvaN',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',
  black: '#000000',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
