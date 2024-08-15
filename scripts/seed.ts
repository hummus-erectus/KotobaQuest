import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database")

    await db.delete(schema.courses)
    await db.delete(schema.userProgress)
    await db.delete(schema.units)
    await db.delete(schema.lessons)
    await db.delete(schema.challenges)
    await db.delete(schema.challengeOptions)
    await db.delete(schema.challengeProgress)

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Japanese",
        imageSrc: "/JP.svg",
      },
      {
        id: 2,
        title: "German",
        imageSrc: "/DE.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/FR.svg",
      },
      {
        id: 4,
        title: "Hebrew",
        imageSrc: "/IL.svg",
      },
    ])

    console.log("Seeding finished")
  } catch (error) {
    console.error(error)
    throw new Error("Failed to seed the database")
  }
}

main()