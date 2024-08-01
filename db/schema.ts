import {
  pgTable,
  varchar,
  timestamp,
  index,
  serial,
  text,
  integer,
  boolean,
  jsonb,
  uniqueIndex,
  bigserial,
  bigint,
  inet,
  date
} from 'drizzle-orm/pg-core'

export const arInternalMetadata = pgTable('ar_internal_metadata', {
  key: varchar('key').primaryKey().notNull(),
  value: varchar('value'),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).notNull()
})

export const comments = pgTable(
  'comments',
  {
    id: serial('id').primaryKey().notNull(),
    body: text('body'),
    parentId: integer('parent_id').default(0),
    level: integer('level').default(0),
    discussionId: integer('discussion_id'),
    userId: integer('user_id'),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' })
  },
  (table) => {
    return {
      indexCommentsOnDiscussionId: index(
        'index_comments_on_discussion_id'
      ).using('btree', table.discussionId),
      indexCommentsOnUserId: index('index_comments_on_user_id').using(
        'btree',
        table.userId
      )
    }
  }
)

export const connections = pgTable('connections', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id'),
  friendId: integer('friend_id'),
  createdAt: timestamp('created_at', { mode: 'string' }),
  updatedAt: timestamp('updated_at', { mode: 'string' })
})

export const delayedJobs = pgTable(
  'delayed_jobs',
  {
    id: serial('id').primaryKey().notNull(),
    priority: integer('priority').default(0).notNull(),
    attempts: integer('attempts').default(0).notNull(),
    handler: text('handler').notNull(),
    lastError: text('last_error'),
    runAt: timestamp('run_at', { mode: 'string' }),
    lockedAt: timestamp('locked_at', { mode: 'string' }),
    failedAt: timestamp('failed_at', { mode: 'string' }),
    lockedBy: varchar('locked_by'),
    queue: varchar('queue'),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' })
  },
  (table) => {
    return {
      priority: index('delayed_jobs_priority').using(
        'btree',
        table.priority,
        table.runAt
      )
    }
  }
)

export const discussionOptions = pgTable(
  'discussion_options',
  {
    id: serial('id').primaryKey().notNull(),
    title: varchar('title', { length: 255 }),
    discussionId: integer('discussion_id'),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' }),
    votesCount: integer('votes_count').default(0)
  },
  (table) => {
    return {
      indexDiscussionOptionsOnDiscussionId: index(
        'index_discussion_options_on_discussion_id'
      ).using('btree', table.discussionId)
    }
  }
)

export const discussions = pgTable(
  'discussions',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    body: text('body'),
    commentCount: integer('comment_count').default(0),
    reads: integer('reads').default(0),
    userId: integer('user_id'),
    groupId: integer('group_id').default(0),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' }),
    photoId: integer('photo_id'),
    pollClose: timestamp('poll_close', { mode: 'string' }),
    hidePoll: boolean('hide_poll').default(false),
    permalink: varchar('permalink'),
    hasPolls: boolean('has_polls').default(false),
    localPoll: boolean('local_poll').default(false),
    published: boolean('published'),
    pulishedAt: boolean('pulished_at'),
    content: jsonb('content'),
    commentsCount: integer('comments_count').default(0),
    likesCount: integer('likes_count').default(0),
    featured: boolean('featured').default(false),
    featuredNumber: integer('featured_number')
  },
  (table) => {
    return {
      indexDiscussionsOnContent: index('index_discussions_on_content').using(
        'gin',
        table.content
      ),
      indexDiscussionsOnGroupId: index('index_discussions_on_group_id').using(
        'btree',
        table.groupId
      ),
      indexDiscussionsOnPhotoId: index('index_discussions_on_photo_id').using(
        'btree',
        table.photoId
      ),
      indexDiscussionsOnUserId: index('index_discussions_on_user_id').using(
        'btree',
        table.userId
      )
    }
  }
)

export const groups = pgTable(
  'groups',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    members: integer('members').default(0),
    discussionCount: integer('discussion_count').default(0),
    body: text('body'),
    private: boolean('private').default(false),
    userId: integer('user_id'),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' }),
    coverPhoto: varchar('cover_photo', { length: 255 }),
    headerImageId: integer('header_image_id'),
    permalink: varchar('permalink'),
    tagline: varchar('tagline'),
    hasDomain: boolean('has_domain').default(false),
    customDomain: varchar('custom_domain'),
    colorScheme: jsonb('color_scheme')
  },
  (table) => {
    return {
      indexGroupsOnHeaderImageId: index(
        'index_groups_on_header_image_id'
      ).using('btree', table.headerImageId),
      indexGroupsOnUserId: index('index_groups_on_user_id').using(
        'btree',
        table.userId
      )
    }
  }
)

export const identities = pgTable(
  'identities',
  {
    id: bigserial('id', { mode: 'bigint' }).primaryKey().notNull(),
    userId: integer('user_id'),
    provider: varchar('provider'),
    uid: varchar('uid'),
    secret: varchar('secret'),
    token: varchar('token'),
    authDataDump: jsonb('auth_data_dump'),
    createdAt: timestamp('created_at', {
      precision: 6,
      mode: 'string'
    }).notNull(),
    updatedAt: timestamp('updated_at', {
      precision: 6,
      mode: 'string'
    }).notNull()
  },
  (table) => {
    return {
      indexIdentitiesOnProviderAndUid: uniqueIndex(
        'index_identities_on_provider_and_uid'
      ).using('btree', table.provider, table.uid),
      indexIdentitiesOnProviderAndUserId: uniqueIndex(
        'index_identities_on_provider_and_user_id'
      ).using('btree', table.provider, table.userId)
    }
  }
)

export const likes = pgTable(
  'likes',
  {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id'),
    discussionId: integer('discussion_id'),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' }),
    value: integer('value')
  },
  (table) => {
    return {
      indexLikesOnDiscussionId: index('index_likes_on_discussion_id').using(
        'btree',
        table.discussionId
      ),
      indexLikesOnUserId: index('index_likes_on_user_id').using(
        'btree',
        table.userId
      )
    }
  }
)

export const memberships = pgTable(
  'memberships',
  {
    id: serial('id').primaryKey().notNull(),
    groupId: integer('group_id'),
    userId: integer('user_id'),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' }),
    admin: boolean('admin').default(false).notNull()
  },
  (table) => {
    return {
      indexMembershipsOnGroupId: index('index_memberships_on_group_id').using(
        'btree',
        table.groupId
      ),
      indexMembershipsOnUserId: index('index_memberships_on_user_id').using(
        'btree',
        table.userId
      )
    }
  }
)

export const messageRecipients = pgTable(
  'message_recipients',
  {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id'),
    messageThreadId: integer('message_thread_id'),
    unread: integer('unread').default(0),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' })
  },
  (table) => {
    return {
      indexMessageRecipientsOnMessageThreadId: index(
        'index_message_recipients_on_message_thread_id'
      ).using('btree', table.messageThreadId),
      indexMessageRecipientsOnUserId: index(
        'index_message_recipients_on_user_id'
      ).using('btree', table.userId)
    }
  }
)

export const messageThreads = pgTable(
  'message_threads',
  {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id'),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' }),
    isOpen: boolean('is_open').default(false),
    name: varchar('name'),
    isGroup: boolean('is_group').default(false)
  },
  (table) => {
    return {
      indexMessageThreadsOnUserId: index(
        'index_message_threads_on_user_id'
      ).using('btree', table.userId)
    }
  }
)

export const messages = pgTable(
  'messages',
  {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id'),
    messageThreadId: integer('message_thread_id'),
    body: text('body'),
    attachments: text('attachments').default('{}').array(),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' }),
    _id: varchar('_id')
  },
  (table) => {
    return {
      indexMessagesOnAttachments: index('index_messages_on_attachments').using(
        'gin',
        table.attachments
      ),
      indexMessagesOnMessageThreadId: index(
        'index_messages_on_message_thread_id'
      ).using('btree', table.messageThreadId),
      indexMessagesOnUserId: index('index_messages_on_user_id').using(
        'btree',
        table.userId
      )
    }
  }
)

export const notifications = pgTable(
  'notifications',
  {
    id: serial('id').primaryKey().notNull(),
    noticeType: integer('notice_type'),
    userId: integer('user_id'),
    notifiedById: integer('notified_by_id'),
    discussionId: integer('discussion_id'),
    commentId: integer('comment_id'),
    groupId: integer('group_id'),
    connectionId: integer('connection_id'),
    read: boolean('read').default(false),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' })
  },
  (table) => {
    return {
      indexNotificationsOnCommentId: index(
        'index_notifications_on_comment_id'
      ).using('btree', table.commentId),
      indexNotificationsOnConnectionId: index(
        'index_notifications_on_connection_id'
      ).using('btree', table.connectionId),
      indexNotificationsOnDiscussionId: index(
        'index_notifications_on_discussion_id'
      ).using('btree', table.discussionId),
      indexNotificationsOnGroupId: index(
        'index_notifications_on_group_id'
      ).using('btree', table.groupId),
      indexNotificationsOnNotifiedById: index(
        'index_notifications_on_notified_by_id'
      ).using('btree', table.notifiedById),
      indexNotificationsOnUserId: index('index_notifications_on_user_id').using(
        'btree',
        table.userId
      )
    }
  }
)

export const photos = pgTable(
  'photos',
  {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id'),
    discussionId: integer('discussion_id').default(0),
    commentId: integer('comment_id').default(0),
    url: varchar('url', { length: 255 }),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' }),
    width: integer('width'),
    height: integer('height')
  },
  (table) => {
    return {
      indexPhotosOnCommentId: index('index_photos_on_comment_id').using(
        'btree',
        table.commentId
      ),
      indexPhotosOnDiscussionId: index('index_photos_on_discussion_id').using(
        'btree',
        table.discussionId
      ),
      indexPhotosOnUserId: index('index_photos_on_user_id').using(
        'btree',
        table.userId
      )
    }
  }
)

export const roles = pgTable(
  'roles',
  {
    id: bigserial('id', { mode: 'bigint' }).primaryKey().notNull(),
    name: varchar('name'),
    resourceType: varchar('resource_type'),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    resourceId: bigint('resource_id', { mode: 'number' }),
    createdAt: timestamp('created_at', {
      precision: 6,
      mode: 'string'
    }).notNull(),
    updatedAt: timestamp('updated_at', {
      precision: 6,
      mode: 'string'
    }).notNull()
  },
  (table) => {
    return {
      indexRolesOnNameAndResourceTypeAndResourceId: index(
        'index_roles_on_name_and_resource_type_and_resource_id'
      ).using('btree', table.name, table.resourceType, table.resourceId),
      indexRolesOnResourceTypeAndResourceId: index(
        'index_roles_on_resource_type_and_resource_id'
      ).using('btree', table.resourceType, table.resourceId)
    }
  }
)

export const schemaMigrations = pgTable(
  'schema_migrations',
  {
    version: varchar('version', { length: 255 }).notNull()
  },
  (table) => {
    return {
      uniqueSchemaMigrations: uniqueIndex('unique_schema_migrations').using(
        'btree',
        table.version
      )
    }
  }
)

export const usersRoles = pgTable(
  'users_roles',
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    userId: bigint('user_id', { mode: 'number' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roleId: bigint('role_id', { mode: 'number' })
  },
  (table) => {
    return {
      indexUsersRolesOnRoleId: index('index_users_roles_on_role_id').using(
        'btree',
        table.roleId
      ),
      indexUsersRolesOnUserId: index('index_users_roles_on_user_id').using(
        'btree',
        table.userId
      ),
      indexUsersRolesOnUserIdAndRoleId: index(
        'index_users_roles_on_user_id_and_role_id'
      ).using('btree', table.userId, table.roleId)
    }
  }
)

export const votes = pgTable(
  'votes',
  {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id'),
    discussionOptionId: integer('discussion_option_id'),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' })
  },
  (table) => {
    return {
      indexVotesOnDiscussionOptionId: index(
        'index_votes_on_discussion_option_id'
      ).using('btree', table.discussionOptionId),
      indexVotesOnDiscussionOptionIdAndUserId: uniqueIndex(
        'index_votes_on_discussion_option_id_and_user_id'
      ).using('btree', table.discussionOptionId, table.userId),
      indexVotesOnUserId: index('index_votes_on_user_id').using(
        'btree',
        table.userId
      )
    }
  }
)

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey().notNull(),
    username: varchar('username', { length: 255 }),
    email: varchar('email').default('').notNull(),
    name: varchar('name', { length: 255 }),
    bio: text('bio'),
    followersCount: integer('followers_count').default(0),
    followingsCount: integer('followings_count').default(0),
    profilePic: varchar('profile_pic', { length: 255 }),
    gender: varchar('gender', { length: 255 }),
    active: boolean('active').default(true),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' }),
    encryptedPassword: varchar('encrypted_password').default('').notNull(),
    emailConfirmed: boolean('email_confirmed').default(false),
    confirmToken: varchar('confirm_token', { length: 255 }),
    resetToken: varchar('reset_token', { length: 255 }),
    commentsCount: integer('comments_count').default(0),
    discussionsCount: integer('discussions_count').default(0),
    likesCount: integer('likes_count').default(0),
    votesCount: integer('votes_count').default(0),
    resetPasswordToken: varchar('reset_password_token'),
    resetPasswordSentAt: timestamp('reset_password_sent_at', {
      mode: 'string'
    }),
    rememberCreatedAt: timestamp('remember_created_at', { mode: 'string' }),
    signInCount: integer('sign_in_count').default(0).notNull(),
    currentSignInAt: timestamp('current_sign_in_at', { mode: 'string' }),
    lastSignInAt: timestamp('last_sign_in_at', { mode: 'string' }),
    currentSignInIp: inet('current_sign_in_ip'),
    lastSignInIp: inet('last_sign_in_ip'),
    confirmationToken: varchar('confirmation_token'),
    confirmedAt: timestamp('confirmed_at', { mode: 'string' }),
    confirmationSentAt: timestamp('confirmation_sent_at', { mode: 'string' }),
    unconfirmedEmail: varchar('unconfirmed_email')
  },
  (table) => {
    return {
      indexUsersOnConfirmationToken: uniqueIndex(
        'index_users_on_confirmation_token'
      ).using('btree', table.confirmationToken),
      indexUsersOnEmail: uniqueIndex('index_users_on_email').using(
        'btree',
        table.email
      ),
      indexUsersOnResetPasswordToken: uniqueIndex(
        'index_users_on_reset_password_token'
      ).using('btree', table.resetPasswordToken),
      indexUsersOnUsername: uniqueIndex('index_users_on_username').using(
        'btree',
        table.username
      )
    }
  }
)

export const sessions = pgTable(
  'sessions',
  {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id').references(() => users.id),
    apiKey: text('api_key'),
    device: varchar('device'),
    lastSeen: date('last_seen'),
    createdAt: timestamp('created_at', { mode: 'string' }).notNull(),
    updatedAt: timestamp('updated_at', { mode: 'string' }).notNull()
  },
  (table) => {
    return {
      indexSessionsOnUserId: index('index_sessions_on_user_id').using(
        'btree',
        table.userId
      )
    }
  }
)

export const tags = pgTable(
  'tags',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name'),
    createdAt: timestamp('created_at', { mode: 'string' }),
    updatedAt: timestamp('updated_at', { mode: 'string' }),
    taggingsCount: integer('taggings_count').default(0)
  },
  (table) => {
    return {
      indexTagsOnName: uniqueIndex('index_tags_on_name').using(
        'btree',
        table.name
      )
    }
  }
)

export const taggings = pgTable(
  'taggings',
  {
    id: serial('id').primaryKey().notNull(),
    tagId: integer('tag_id').references(() => tags.id),
    taggableType: varchar('taggable_type'),
    taggableId: integer('taggable_id'),
    taggerType: varchar('tagger_type'),
    taggerId: integer('tagger_id'),
    context: varchar('context', { length: 128 }),
    createdAt: timestamp('created_at', { mode: 'string' })
  },
  (table) => {
    return {
      indexTaggingsOnContext: index('index_taggings_on_context').using(
        'btree',
        table.context
      ),
      indexTaggingsOnTagId: index('index_taggings_on_tag_id').using(
        'btree',
        table.tagId
      ),
      indexTaggingsOnTaggableId: index('index_taggings_on_taggable_id').using(
        'btree',
        table.taggableId
      ),
      indexTaggingsOnTaggableType: index(
        'index_taggings_on_taggable_type'
      ).using('btree', table.taggableType),
      indexTaggingsOnTaggerId: index('index_taggings_on_tagger_id').using(
        'btree',
        table.taggerId
      ),
      indexTaggingsOnTaggerIdAndTaggerType: index(
        'index_taggings_on_tagger_id_and_tagger_type'
      ).using('btree', table.taggerId, table.taggerType),
      idx: uniqueIndex('taggings_idx').using(
        'btree',
        table.tagId,
        table.taggableId,
        table.taggableType,
        table.context,
        table.taggerId,
        table.taggerType
      ),
      idy: index('taggings_idy').using(
        'btree',
        table.taggableId,
        table.taggableType,
        table.taggerId,
        table.context
      ),
      taggableContextIdx: index('taggings_taggable_context_idx').using(
        'btree',
        table.taggableId,
        table.taggableType,
        table.context
      )
    }
  }
)
