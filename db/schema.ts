import { sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const waitlistSignups = sqliteTable(
  'waitlist_signups',
  {
    id: text('id').primaryKey(),
    email: text('email').notNull(),
    source: text('source').notNull().default('landing'),
    createdAt: text('created_at').notNull(),
  },
  (table) => [uniqueIndex('idx_waitlist_signups_email').on(table.email)],
);
