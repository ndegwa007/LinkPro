import { SiGithub, SiX, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";

export const siteConfig = {
  name: "Martin Ndegwa",
  title: "Web Developer",
  description: "Crafting beautiful web experiences with modern technologies",
  bio: "Passionate about creating performant and accessible web applications",
  email: "ndegwa8781@gmail.com",
  avatar: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca",
  projects: [
    {
      title: "Swifty",
      description: "A comic shop for marvel fanatics",
      link: "https://swiftyapp-six.vercel.app/",
      image: "https://i.postimg.cc/jdn4nK18/swifty.png",
      tags: ["Typescript", "FastApi", "Postgresql", "GoogleOpenID connect", "Docker"]
    },
    {
      title: "Booknest",
      description: "A book borrowing library web app",
      link: "https://github.com/ndegwa007/Booknest",
      image: "https://i.postimg.cc/FHCvWMmJ/booknest.png",
      tags: ["Rails", "HTML", "CSS", "SQlite"]

    },
    {
      title: "EasyBank",
      description: "Beautiful Frontend web app for easybank",
      link: "https://easybank-phi.vercel.app/",
      image: "https://i.postimg.cc/TYkxZbTy/easybank.png",
      tags: ["HTML5", "CSS", "Sass", "vercel"]
    },
    {
      title: "Insure",
      description: "Nice UI wep app for an insurance company",
      link: "https://insure-six.vercel.app/", 
      image: "https://i.postimg.cc/6qWsPWSL/insure.png",
      tags: ["HTML5", "CSS", "Sass", "vercel"]
    },
    {
      title: "Breakboost",
      description: "A simple to-do app coupled with a pomodoro timer",
      link: "https://breakboost.vercel.app/",
      image: "https://i.postimg.cc/5tLZNQWS/breakboost.png",
      tags: ["React", "HTML5", "CSS", "Vercel", "Motivation Quotes Api"]
    },
    {
      title: "Music Player",
      description: "Music player web app",
      link: "https://music-player-five.vercel.app/",
      image: "https://i.postimg.cc/vms0hPC5/music-player.png",
      tags: ["HTML5", "CSS", "Sass"]
    },
    
  ],
  social: [
    {
      name: "Email",
      url: "mailto:ndegwa8781@gmail.com",
      icon: Mail
    },
    {
      name: "GitHub",
      url: "https://github.com/ndegwa007",
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