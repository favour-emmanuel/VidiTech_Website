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
    image: "",
    headline: "Software Development",
    text: "The development of reliable and scalable software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users",
  },
  {
    image: "",
    headline: "Digital Marketing",
    text: "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
  },

  {
    image: "",
    headline: "Ui/ux",
    text: "Our dedicated team develops UX/UI designs for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.",
  },

  {
    image: "",
    headline: "Consulting, Support & Maintenance",
    text: "Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.",
  },

  {
    image: "",
    headline: "Cross-Platform",
    text: "Our designs are built to thrive and adapt across multiple devices providing optimizied accessibility and reach.",
  },

  {
    image: "",
    headline: "Business Strategy",
    text: "At Jodna we deliver actionable strategy that capitalizes on opportunity and navigate challenge for business growth.",
  },
];
