import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database with courses")

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
        title: "英語",
        imageSrc: "/GB.svg",
      },
      {
        id: 2,
        title: "ドイツ語",
        imageSrc: "/DE.svg",
      },
      {
        id: 3,
        title: "フランス語",
        imageSrc: "/FR.svg",
      },
    ])

    // TODO: Move to units seed script
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, //英語
        title: "章 I",
        description: "英語の基本を学ぼう",
        order: 1,
      }
    ])

    console.log("Seed data inserted successfully!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
