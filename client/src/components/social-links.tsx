import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      {siteConfig.social.map((social, index) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10"
            asChild
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
