import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  index: number;
}

export function ProjectCard({ title, description, link, image, tags, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full transition-transform hover:scale-[1.02]"
      >
        <Card className="h-full overflow-hidden border-2 hover:border-primary/50">
          <div 
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl font-bold line-clamp-1">{title}</CardTitle>
            <CardDescription className="line-clamp-2">{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}