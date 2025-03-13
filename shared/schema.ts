import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  link: text("link").notNull(),
  image: text("image").notNull(),
  tags: text("tags").array().notNull()
});

export const insertProjectSchema = createInsertSchema(projects).pick({
  title: true,
  description: true,
  link: true,
  image: true,
  tags: true
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
