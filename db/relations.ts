import { relations } from "drizzle-orm/relations";
import { users, sessions, tags, taggings } from "./schema";

export const sessionsRelations = relations(sessions, ({one}) => ({
	user: one(users, {
		fields: [sessions.userId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	sessions: many(sessions),
}));

export const taggingsRelations = relations(taggings, ({one}) => ({
	tag: one(tags, {
		fields: [taggings.tagId],
		references: [tags.id]
	}),
}));

export const tagsRelations = relations(tags, ({many}) => ({
	taggings: many(taggings),
}));