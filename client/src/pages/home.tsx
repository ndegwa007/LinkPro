import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectCard } from "@/components/project-card";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container max-w-4xl mx-auto space-y-8"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <Avatar className="w-24 h-24 mx-auto border-4 border-primary/20">
              <AvatarImage src={siteConfig.avatar} alt={siteConfig.name} />
              <AvatarFallback>{siteConfig.name[0]}</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="mt-6 text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">
              {siteConfig.title}
            </p>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              {siteConfig.bio}
            </p>
          </motion.div>

          <SocialLinks />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
