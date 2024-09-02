import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"


const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Resetting progress")

    await db.delete(schema.userProgress)
    await db.delete(schema.challengeProgress)

    console.log("Resetting finished")
  } catch (error) {
    console.error("Error resetting progress:", error)
  }
}

main()
