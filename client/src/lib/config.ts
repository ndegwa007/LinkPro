import { SiGithub, SiX, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";

export const siteConfig = {
  name: "Martin Ndegwa",
  title: "Frontend Developer",
  description: "Crafting beautiful web experiences with modern technologies",
  bio: "Passionate about creating performant and accessible web applications",
  email: "contact@martinndegwa.com",
  avatar: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca",
  projects: [
    {
      title: "Project Portfolio",
      description: "A showcase of my best work built with React and TypeScript",
      link: "https://portfolio.example.com",
      image: "https://images.unsplash.com/photo-1506443102696-39d0c10eae2b",
      tags: ["React", "TypeScript", "Tailwind"]
    },
    {
      title: "Task Manager",
      description: "Beautiful task management app with real-time updates",
      link: "https://tasks.example.com", 
      image: "https://images.unsplash.com/photo-1626690396940-8929be269d23",
      tags: ["Next.js", "Prisma", "tRPC"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking with beautiful visualizations",
      link: "https://weather.example.com",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      tags: ["Vue.js", "D3.js", "Weather API"]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration",
      link: "https://store.example.com",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      tags: ["React", "Node.js", "Stripe"]
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      link: "https://social.example.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["Angular", "Chart.js", "Firebase"]
    }
  ],
  social: [
    {
      name: "Email",
      url: "mailto:contact@martinndegwa.com",
      icon: Mail
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: SiGithub
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: SiX
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: SiLinkedin
    }
  ]
};