export type Project = {
  numeral: string;
  arcanaName: string;
  name: string;
  desc: string;
  slug: string;
  tech: string;
  period: string;
  link?: string;
};

export const projects: Project[] = [
  {
    numeral: "VII",
    arcanaName: "the chariot",
    name: "Buroqet Logistics",
    desc: "A microservices logistics manager simulating package tracking, warehouse management, and courier dispatch. Deployed on Azure AKS with Kafka events and REST APIs.",
    tech: "Go • Kafka • Postgres • AKS",
    period: "Mar 2026 – Jun 2026",
    slug: "buroqet",
    link: "https://github.com/ZharfanFw/buroqet",
  },
  {
    numeral: "XIV",
    arcanaName: "temperance",
    name: "Smart Bin IoT",
    desc: "An end-to-end automatic waste sorter classifying Organic & Inorganic trash. Powered by ESP32-CAM, Node.js + TensorFlow.js image classification, and MQTT brokers.",
    tech: "Node.js • IoT • TF.js • React",
    period: "Apr 2026 – May 2026",
    slug: "smart-bin",
    link: "https://github.com/ZharfanFw/pemilahan-sampah-iot",
  },
  {
    numeral: "V",
    arcanaName: "the hierophant",
    name: "KailKu Booking",
    desc: "A dual web and mobile platform for reserving fishing spots, equipment rentals, and QRIS payments. Shares a single Fastify REST server and MySQL schema.",
    tech: "Fastify • MySQL • Vue • React Native",
    period: "Oct 2025 – Jan 2026",
    slug: "kailku",
    link: "https://github.com/ZharfanFw/kailku",
  },
  {
    numeral: "IV",
    arcanaName: "the emperor",
    name: "Smart Parking AI",
    desc: "A discrete-event multi-level parking simulation with simulated vehicle agents. Employs A* pathfinding, graph models, real-time websockets, and a Vue.js front.",
    tech: "Python • FastAPI • SimPy • Vue",
    period: "Sep 2025 – Nov 2025",
    slug: "smart-parking",
    link: "https://github.com/ZharfanFw/web-smartparkir",
  },
  {
    numeral: "III",
    arcanaName: "the empress",
    name: "Riff or Die Game",
    desc: "A 2D rhythm-defense game built in Java Swing where players fire sound waves to block studio monsters. Integrates MVP code rules, sound blending, and JDBC scores.",
    tech: "Java • Swing GUI • MySQL",
    period: "Sep 2025 – Oct 2025",
    slug: "riff-or-die",
    link: "https://github.com/ZharfanFw/riff-or-die",
  },
  {
    numeral: "II",
    arcanaName: "the priestess",
    name: "LitterAlly DBMS",
    desc: "A waste tracking app recording family sorting habits. Developed as a DBMS project featuring schema validation triggers, secure auth, and analytical procedures.",
    tech: "PHP • MariaDB • Tailwind • Alpine",
    period: "Mar 2025 – May 2025",
    slug: "litterally",
    link: "https://github.com/blucordon/LitterAlly-Waste-Tracking-Website-",
  },
  {
    numeral: "I",
    arcanaName: "the magician",
    name: "DBMS in C",
    desc: "A low-level CLI relational database management system written from scratch in pure C. Supports file I/O persistence, joins, and custom input token parsing.",
    tech: "C • Custom Tokenizer • File I/O",
    period: "Dec 2024 – Jan 2025",
    slug: "dbms-c",
    link: "https://github.com/ZharfanFw/dbms-c",
  },
];
