import 'dotenv/config'
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema'

const databaseUrl = process.env.DATABASE_URL as string
const queryClient = postgres(databaseUrl)
const db = drizzle(queryClient, { schema })

export default db
