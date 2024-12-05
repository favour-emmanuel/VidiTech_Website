export interface nav {
  title: string;
  route: string;
}

export const navData: nav[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Services",
    route: "/services",
  },
  {
    title: "Projects",
    route: "/projects",
  },
  {
    title: "Blogs",
    route: "/blog",
  },
];

export interface projectCount {
  nom: string;
  desc: string;
}

export const projectCountData: projectCount[] = [
  {
    nom: "70+",
    desc: "Projects Done",
  },
  {
    nom: "50+",
    desc: "Happy Clients",
  },
  {
    nom: "98%",
    desc: "Client Satisfaction Done",
  },
];

export interface serviceOffer {
  image: string;
  headline: string;
  text: string;
}

export const serviceOfferData: serviceOffer[] = [
  {
    image: "eos-icons:software-outlined",
    headline: "Software Development",
    text: "The development of reliable and scalable software solutions for any OS, browser, and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
  },
  {
    image: "mdi:bullhorn-outline",
    headline: "Digital Marketing",
    text: "Our team of experts are equipped to propel your brand to new heights. Partner with us, and let's guide you through every step.",
  },
  {
    image: "carbon:touch-interaction",
    headline: "UI/UX",
    text: "Our dedicated team develops UX/UI designs for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.",
  },
  {
    image: "fluent:people-community-28-filled",
    headline: "Consulting, Support & Maintenance",
    text: "Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration, and advise on improvements to your digital customer experience.",
  },
  {
    image: "tabler:device-desktop-code",
    headline: "Cross-Platform",
    text: "Our designs are built to thrive and adapt across multiple devices, providing optimized accessibility and reach.",
  },
  {
    image: "ri:line-chart-line",
    headline: "Business Strategy",
    text: "At Jodna, we deliver actionable strategies that capitalize on opportunities and navigate challenges for business growth.",
  },
];
