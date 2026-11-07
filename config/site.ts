const siteOrigin = "https://anujdhanuka.com"

export const site = {
  name: "Anuj Dhanuka Portfolio",
  author: "Anuj Dhanuka",
  locale: "en-IN",
  url: siteOrigin,
  homeUrl: new URL("/", siteOrigin).href,
  email: "anujd973@gmail.com",
  phoneDisplay: "+91 8978264705",
  phoneHref: "tel:+918978264705",
  location: "Vizianagaram, Andhra Pradesh, India",
  // Shown on the homepage hero, Contact page and default closing CTA; ChefKart role ended 31 October 2026.
  availability: "Available to join immediately",
  openTo: "Open to roles across India",
  linkedIn: "https://linkedin.com/in/anuj-dhanuka",
  github: "https://github.com/Anuj-Dhanuka",
  instagram: "https://www.instagram.com/anuj_dhanuka/",
  recognitionUrl:
    "https://www.linkedin.com/posts/anuj-dhanuka_rewardsandrecognition-chefkart-reactnative-share-7463089455172845569-ML3k/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACVInBQB17-NdeSfv3bpUy3ZdJaN7NgcWgI",
  title: "Anuj Dhanuka | Software Engineer | Frontend Developer",
  description:
    "Software Engineer and Frontend Developer with React.js and React Native experience: 20+ client projects and ChefKart's customer app, internal dashboard and website.",
} as const
