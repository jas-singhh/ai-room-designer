import { serial, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey({ autoIncrement: true }),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  imageUrl: varchar("imageUrl").notNull(),
  credits: integer("credits").default(3),
});

export const generatedAIImages = pgTable("generated_ai_images", {
  id: serial("id").primaryKey({ autoIncrement: true }),
  roomType: varchar("room_type").notNull(),
  roomDesign: varchar("room_design").notNull(),
  originalImage: varchar("original_image").notNull(),
  generatedImage: varchar("generated_image").notNull(),
  email: varchar("email").notNull(),
});
