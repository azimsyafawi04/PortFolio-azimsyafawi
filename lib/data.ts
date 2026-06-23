import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { Mail } from "lucide-react";

export const PORTFOLIO_DATA = {
  name: "Azim Syafawi",
  role: "Computer System Security Student | Web & Mobile App Developer",
  tagline: "Passionate about cybersecurity operations, full-stack web development, and secure mobile applications.",
  about: `I am a second-year Computer System Security student at UniKL MIIT, working actively as a web and mobile app developer. I have a strong interest in security operations, penetration testing, and software engineering. I combine my coding skills with cybersecurity knowledge to build secure, functional, and high-performing digital solutions.`,
  skills: [
    "Vulnerability Scanning", "Python", "Malware Analysis", "Nmap", "Flutter",
    "Information Security", "Burp Suite", "Databases", "Java", "Leadership",
    "MySQL", "Linux", "Teamwork", "Tenable Nessus", "HTML", "CSS", "JavaScript"
  ],
  certifications: [
    "IBM SkillsBuild: Project Management Fundamentals"
  ],
  projects: [
    {
      id: 8,
      title: "Point of Sale (POS) System",
      description: "A comprehensive Point of Sale project built for efficient retail transactions and business management.",
      price: "MYR 1,000",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      tags: ["POS System", "Software", "Management"],
      githubUrl: "https://github.com/azimsyafawi04/Point-of-Sale-project-",
      liveUrl: "/pos-demo.html"
    },
    {
      id: 3,
      title: "SOC Simulator",
      description: "A Security Operations Center simulation environment designed for threat detection, log analysis, and incident response training. (Login: admin@soc.con / 12345)",
      image: "/soc-simulator-thumb.png",
      tags: ["Cybersecurity", "Splunk", "Wazuh"],
      githubUrl: "https://github.com/azimsyafawi04/soc_simulator",
      liveUrl: "/soc-simulator/index.html"
    },
    {
      id: 4,
      title: "AS SHOP STUDIO",
      description: "A sleek, responsive promotional web design concept for Nike showcasing modern CSS styling and layout techniques.",
      image: "/as-shop-1.png",
      images: ["/as-shop-1.png", "/as-shop-2.png", "/as-shop-3.png"],
      tags: ["HTML5", "CSS3", "UI/UX"],
      githubUrl: "https://github.com/azimsyafawi04/AS-SHOP-STUDIO-website-shopping-",
      liveUrl: "/as-shop-studio/index.html"
    },
    {
      id: 8,
      title: "Smart Campus (SSIIMS)",
      description: "Secure Student Information & Identity Management System. Features RBAC, secure login view, student portal, and admin console.",
      image: "/smart-campus-thumb.png",
      tags: ["HTML5", "CSS3", "JavaScript", "RBAC", "Security"],
      githubUrl: "https://github.com/azimsyafawi04/SSCSS-Smart-Campus",
      liveUrl: "/smart-campus/index.html"
    },
    {
      id: 9,
      title: "Secure Task App",
      description: "A Secure Task Management Web Application focusing on OWASP Top 10 compliance, RBAC, Data Validation, and Secure Authentication.",
      image: "/secure-task-thumb.png",
      tags: ["Django", "Python", "OWASP", "RBAC", "Cybersecurity"],
      githubUrl: "https://github.com/azimsyafawi04/secure-task-app-ssd-project",
      liveUrl: "/secure-task-app/index.html"
    },
    {
      id: 10,
      title: "Mobile Restaurant Premium",
      description: "A full-featured mobile application for premium restaurant food delivery and reservation. Built with Flutter.",
      image: "/mobile-restaurant-thumb.png",
      tags: ["Flutter", "Dart", "Mobile App", "UI/UX", "Restaurant"],
      githubUrl: "https://github.com/azimsyafawi04/mobile-Restaurent-Premium-Package",
      liveUrl: "/mobile-restaurant/index.html"
    }
  ],
  packages: [
    {
      id: 5,
      title: "Basic Web Package",
      description: "Starter Business Page: 1-page responsive landing page for your business with contact form, basic info, and social media.",
      price: "MYR 348.71",
      features: ["1 Page", "Functional website", "Content upload", "Social media icons", "1 Plugin", "2 Revisions", "4 Days Delivery"],
      image: "/basic-demo.png",
      images: ["/basic-demo.png", "/basic-demo-1.png", "/basic-demo-2.png", "/basic-demo-3.png"],
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 6,
      title: "Standard Web Package",
      description: "Professional Business Site: Up to 5 pages responsive website with live chat integration, dynamic forms, and custom booking.",
      price: "MYR 2,638",
      features: ["5 Pages", "Opt-in form & Autoresponder", "Speed optimization", "3 Plugins", "4 Revisions", "10 Days Delivery"],
      image: "/standard-demo.png",
      images: ["/standard-demo.png", "/std-demo-1.png", "/std-demo-2.png", "/std-demo-3.png", "/std-demo-4.png", "/std-demo-5.png"],
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 7,
      title: "Premium Web Package",
      description: "Custom System & Dashboard: Advanced web application (up to 10 pages) with secure admin dashboard and inventory management.",
      price: "MYR 4,752",
      features: ["10 Pages", "E-commerce & Payment", "Hosting setup", "10 Products", "Unlimited Revisions", "21 Days Delivery"],
      image: "/premium-demo.png",
      video: "/premium-demo.mp4",
      tags: ["HTML", "CSS", "JavaScript", "Advanced UI"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ],
  contact: {
    email: "syafawimuhamadazim@gmail.com",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/azimsyafawi04",
        icon: FaGithub
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/azim-syafawi-0b249931a",
        icon: FaLinkedin
      },
      {
        name: "Email",
        url: "mailto:syafawimuhamadazim@gmail.com",
        icon: Mail
      },
      {
        name: "Phone",
        url: "tel:+60196606542",
        icon: FaPhone
      },
      {
        name: "Fiverr",
        url: "https://www.fiverr.com/s/R7g5gGL",
        icon: SiFiverr
      }
    ]
  }
};
