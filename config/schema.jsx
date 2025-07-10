import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: integer().primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  imageUrl: varchar("imageUrl").notNull(),
  credits: integer("credits").default(3),
});
