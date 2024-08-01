-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "ar_internal_metadata" (
	"key" varchar PRIMARY KEY NOT NULL,
	"value" varchar,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"body" text,
	"parent_id" integer DEFAULT 0,
	"level" integer DEFAULT 0,
	"discussion_id" integer,
	"user_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "connections" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"friend_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "delayed_jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"priority" integer DEFAULT 0 NOT NULL,
	"attempts" integer DEFAULT 0 NOT NULL,
	"handler" text NOT NULL,
	"last_error" text,
	"run_at" timestamp,
	"locked_at" timestamp,
	"failed_at" timestamp,
	"locked_by" varchar,
	"queue" varchar,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "discussion_options" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"discussion_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp,
	"votes_count" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "discussions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"body" text,
	"comment_count" integer DEFAULT 0,
	"reads" integer DEFAULT 0,
	"user_id" integer,
	"group_id" integer DEFAULT 0,
	"created_at" timestamp,
	"updated_at" timestamp,
	"photo_id" integer,
	"poll_close" timestamp,
	"hide_poll" boolean DEFAULT false,
	"permalink" varchar,
	"has_polls" boolean DEFAULT false,
	"local_poll" boolean DEFAULT false,
	"published" boolean,
	"pulished_at" boolean,
	"content" jsonb,
	"comments_count" integer DEFAULT 0,
	"likes_count" integer DEFAULT 0,
	"featured" boolean DEFAULT false,
	"featured_number" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"members" integer DEFAULT 0,
	"discussion_count" integer DEFAULT 0,
	"body" text,
	"private" boolean DEFAULT false,
	"user_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp,
	"cover_photo" varchar(255),
	"header_image_id" integer,
	"permalink" varchar,
	"tagline" varchar,
	"has_domain" boolean DEFAULT false,
	"custom_domain" varchar,
	"color_scheme" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "identities" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"provider" varchar,
	"uid" varchar,
	"secret" varchar,
	"token" varchar,
	"auth_data_dump" jsonb,
	"created_at" timestamp(6) NOT NULL,
	"updated_at" timestamp(6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "likes" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"discussion_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp,
	"value" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "memberships" (
	"id" serial PRIMARY KEY NOT NULL,
	"group_id" integer,
	"user_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp,
	"admin" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "message_recipients" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"message_thread_id" integer,
	"unread" integer DEFAULT 0,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "message_threads" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp,
	"is_open" boolean DEFAULT false,
	"name" varchar,
	"is_group" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"message_thread_id" integer,
	"body" text,
	"attachments" text[] DEFAULT '{}',
	"created_at" timestamp,
	"updated_at" timestamp,
	"_id" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"notice_type" integer,
	"user_id" integer,
	"notified_by_id" integer,
	"discussion_id" integer,
	"comment_id" integer,
	"group_id" integer,
	"connection_id" integer,
	"read" boolean DEFAULT false,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "photos" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"discussion_id" integer DEFAULT 0,
	"comment_id" integer DEFAULT 0,
	"url" varchar(255),
	"created_at" timestamp,
	"updated_at" timestamp,
	"width" integer,
	"height" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roles" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" varchar,
	"resource_type" varchar,
	"resource_id" bigint,
	"created_at" timestamp(6) NOT NULL,
	"updated_at" timestamp(6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "schema_migrations" (
	"version" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_roles" (
	"user_id" bigint,
	"role_id" bigint
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "votes" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"discussion_option_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(255),
	"email" varchar DEFAULT '' NOT NULL,
	"name" varchar(255),
	"bio" text,
	"followers_count" integer DEFAULT 0,
	"followings_count" integer DEFAULT 0,
	"profile_pic" varchar(255),
	"gender" varchar(255),
	"active" boolean DEFAULT true,
	"created_at" timestamp,
	"updated_at" timestamp,
	"encrypted_password" varchar DEFAULT '' NOT NULL,
	"email_confirmed" boolean DEFAULT false,
	"confirm_token" varchar(255),
	"reset_token" varchar(255),
	"comments_count" integer DEFAULT 0,
	"discussions_count" integer DEFAULT 0,
	"likes_count" integer DEFAULT 0,
	"votes_count" integer DEFAULT 0,
	"reset_password_token" varchar,
	"reset_password_sent_at" timestamp,
	"remember_created_at" timestamp,
	"sign_in_count" integer DEFAULT 0 NOT NULL,
	"current_sign_in_at" timestamp,
	"last_sign_in_at" timestamp,
	"current_sign_in_ip" "inet",
	"last_sign_in_ip" "inet",
	"confirmation_token" varchar,
	"confirmed_at" timestamp,
	"confirmation_sent_at" timestamp,
	"unconfirmed_email" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"api_key" text,
	"device" varchar,
	"last_seen" date,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"created_at" timestamp,
	"updated_at" timestamp,
	"taggings_count" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "taggings" (
	"id" serial PRIMARY KEY NOT NULL,
	"tag_id" integer,
	"taggable_type" varchar,
	"taggable_id" integer,
	"tagger_type" varchar,
	"tagger_id" integer,
	"context" varchar(128),
	"created_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sessions" ADD CONSTRAINT "fk_rails_758836b4f0" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taggings" ADD CONSTRAINT "fk_rails_9fcd2e236b" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_comments_on_discussion_id" ON "comments" USING btree ("discussion_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_comments_on_user_id" ON "comments" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "delayed_jobs_priority" ON "delayed_jobs" USING btree ("priority" int4_ops,"run_at" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_discussion_options_on_discussion_id" ON "discussion_options" USING btree ("discussion_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_discussions_on_content" ON "discussions" USING gin ("content" jsonb_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_discussions_on_group_id" ON "discussions" USING btree ("group_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_discussions_on_photo_id" ON "discussions" USING btree ("photo_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_discussions_on_user_id" ON "discussions" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_groups_on_header_image_id" ON "groups" USING btree ("header_image_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_groups_on_user_id" ON "groups" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "index_identities_on_provider_and_uid" ON "identities" USING btree ("provider" text_ops,"uid" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "index_identities_on_provider_and_user_id" ON "identities" USING btree ("provider" int4_ops,"user_id" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_likes_on_discussion_id" ON "likes" USING btree ("discussion_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_likes_on_user_id" ON "likes" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_memberships_on_group_id" ON "memberships" USING btree ("group_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_memberships_on_user_id" ON "memberships" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_message_recipients_on_message_thread_id" ON "message_recipients" USING btree ("message_thread_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_message_recipients_on_user_id" ON "message_recipients" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_message_threads_on_user_id" ON "message_threads" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_messages_on_attachments" ON "messages" USING gin ("attachments" array_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_messages_on_message_thread_id" ON "messages" USING btree ("message_thread_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_messages_on_user_id" ON "messages" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_notifications_on_comment_id" ON "notifications" USING btree ("comment_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_notifications_on_connection_id" ON "notifications" USING btree ("connection_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_notifications_on_discussion_id" ON "notifications" USING btree ("discussion_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_notifications_on_group_id" ON "notifications" USING btree ("group_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_notifications_on_notified_by_id" ON "notifications" USING btree ("notified_by_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_notifications_on_user_id" ON "notifications" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_photos_on_comment_id" ON "photos" USING btree ("comment_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_photos_on_discussion_id" ON "photos" USING btree ("discussion_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_photos_on_user_id" ON "photos" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_roles_on_name_and_resource_type_and_resource_id" ON "roles" USING btree ("name" int8_ops,"resource_type" int8_ops,"resource_id" int8_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_roles_on_resource_type_and_resource_id" ON "roles" USING btree ("resource_type" int8_ops,"resource_id" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_schema_migrations" ON "schema_migrations" USING btree ("version" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_users_roles_on_role_id" ON "users_roles" USING btree ("role_id" int8_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_users_roles_on_user_id" ON "users_roles" USING btree ("user_id" int8_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_users_roles_on_user_id_and_role_id" ON "users_roles" USING btree ("user_id" int8_ops,"role_id" int8_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_votes_on_discussion_option_id" ON "votes" USING btree ("discussion_option_id" int4_ops);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "index_votes_on_discussion_option_id_and_user_id" ON "votes" USING btree ("discussion_option_id" int4_ops,"user_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_votes_on_user_id" ON "votes" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "index_users_on_confirmation_token" ON "users" USING btree ("confirmation_token" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "index_users_on_email" ON "users" USING btree ("email" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "index_users_on_reset_password_token" ON "users" USING btree ("reset_password_token" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "index_users_on_username" ON "users" USING btree ("username" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_sessions_on_user_id" ON "sessions" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "index_tags_on_name" ON "tags" USING btree ("name" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_taggings_on_context" ON "taggings" USING btree ("context" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_taggings_on_tag_id" ON "taggings" USING btree ("tag_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_taggings_on_taggable_id" ON "taggings" USING btree ("taggable_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_taggings_on_taggable_type" ON "taggings" USING btree ("taggable_type" text_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_taggings_on_tagger_id" ON "taggings" USING btree ("tagger_id" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_taggings_on_tagger_id_and_tagger_type" ON "taggings" USING btree ("tagger_id" text_ops,"tagger_type" int4_ops);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "taggings_idx" ON "taggings" USING btree ("tag_id" text_ops,"taggable_id" int4_ops,"taggable_type" int4_ops,"context" text_ops,"tagger_id" int4_ops,"tagger_type" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "taggings_idy" ON "taggings" USING btree ("taggable_id" int4_ops,"taggable_type" text_ops,"tagger_id" text_ops,"context" int4_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "taggings_taggable_context_idx" ON "taggings" USING btree ("taggable_id" int4_ops,"taggable_type" int4_ops,"context" int4_ops);
*/