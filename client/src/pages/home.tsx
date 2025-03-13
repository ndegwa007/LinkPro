import { motion, useAnimation } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectCard } from "@/components/project-card";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/config";
import { useEffect } from "react";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      while (true) {
        await controls.start({ x: "-100%", transition: { duration: 20, ease: "linear" } });
        await controls.set({ x: "0%" });
      }
    };
    startAnimation();
  }, [controls]);

  const handleWheel = (e: React.WheelEvent) => {
    const container = e.currentTarget;
    container.scrollLeft += e.deltaY;
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 px-4 py-16">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>

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

        <div 
          className="overflow-hidden -mx-4 px-4"
          onWheel={handleWheel}
          style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          <motion.div 
            className="flex space-x-6 min-w-max py-4"
            animate={controls}
            initial={{ x: "0%" }}
          >
            {[...siteConfig.projects, ...siteConfig.projects].map((project, index) => (
              <div key={`${project.title}-${index}`} className="w-[350px]">
                <ProjectCard {...project} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}