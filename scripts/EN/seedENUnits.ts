import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"
import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database with English course units and lessons")

    await db.delete(schema.courses).where(eq(schema.courses.id, 1))
    // await db.delete(schema.userProgress)
    // await db.delete(schema.units)
    // await db.delete(schema.lessons)
    // await db.delete(schema.challenges)
    // await db.delete(schema.challengeOptions)
    // await db.delete(schema.challengeProgress)

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "英語",
        imageSrc: "/GB.svg",
      },
    ])

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // 英語
        title: "章 I",
        description: "英語の基本を学ぼう",
        order: 1,
      },
      {
        id: 2,
        courseId: 1,
        title: "章 II",
        description: "もっと英語の語彙を学ぼう",
        order: 2,
      },
      {
        id: 3,
        courseId: 1,
        title: "章 III",
        description: "日常生活で使う英語の表現",
        order: 3,
      },
      {
        id: 4,
        courseId: 1,
        title: "章 IV",
        description: "自然や環境に関する英語",
        order: 4,
      },
      {
        id: 5,
        courseId: 1,
        title: "章 V",
        description: "社交やビジネスの場面で使う英語",
        order: 5,
      }
    ])

    await db.insert(schema.lessons).values([
      // Unit 1
      { id: 1, unitId: 1, order: 1, title: "名詞 I" },
      { id: 2, unitId: 1, order: 2, title: "動詞 I" },
      { id: 3, unitId: 1, order: 3, title: "名詞 II" },
      { id: 4, unitId: 1, order: 4, title: "形容詞 I" },
      { id: 5, unitId: 1, order: 5, title: "名詞 III" },
      { id: 6, unitId: 1, order: 6, title: "動詞 II" },
      { id: 7, unitId: 1, order: 7, title: "名詞 IV" },
      { id: 8, unitId: 1, order: 8, title: "形容詞 II" },
      { id: 9, unitId: 1, order: 9, title: "名詞 V" },
      { id: 10, unitId: 1, order: 10, title: "動詞 III" },
      { id: 11, unitId: 1, order: 11, title: "復習 I" },

      // Unit 2
      { id: 12, unitId: 2, order: 1, title: "名詞 VI" },
      { id: 13, unitId: 2, order: 2, title: "動詞 IV" },
      { id: 14, unitId: 2, order: 3, title: "名詞 VII" },
      { id: 15, unitId: 2, order: 4, title: "形容詞 III" },
      { id: 16, unitId: 2, order: 5, title: "名詞 VIII" },
      { id: 17, unitId: 2, order: 6, title: "動詞 V" },
      { id: 18, unitId: 2, order: 7, title: "名詞 IX" },
      { id: 19, unitId: 2, order: 8, title: "形容詞 IV" },
      { id: 20, unitId: 2, order: 9, title: "名詞 X" },
      { id: 21, unitId: 2, order: 10, title: "動詞 VI" },
      { id: 22, unitId: 2, order: 11, title: "復習 II" },

      // Unit 3
      { id: 23, unitId: 3, order: 1, title: "名詞 XI" },
      { id: 24, unitId: 3, order: 2, title: "動詞 VII" },
      { id: 25, unitId: 3, order: 3, title: "名詞 XII" },
      { id: 26, unitId: 3, order: 4, title: "形容詞 V" },
      { id: 27, unitId: 3, order: 5, title: "名詞 XIII" },
      { id: 28, unitId: 3, order: 6, title: "動詞 VIII" },
      { id: 29, unitId: 3, order: 7, title: "名詞 XIV" },
      { id: 30, unitId: 3, order: 8, title: "形容詞 VI" },
      { id: 31, unitId: 3, order: 9, title: "名詞 XV" },
      { id: 32, unitId: 3, order: 10, title: "動詞 IX" },
      { id: 33, unitId: 3, order: 11, title: "復習 III" },

      // Unit 4
      { id: 34, unitId: 4, order: 1, title: "名詞 XVI" },
      { id: 35, unitId: 4, order: 2, title: "動詞 X" },
      { id: 36, unitId: 4, order: 3, title: "名詞 XVII" },
      { id: 37, unitId: 4, order: 4, title: "形容詞 VII" },
      { id: 38, unitId: 4, order: 5, title: "名詞 XVIII" },
      { id: 39, unitId: 4, order: 6, title: "動詞 XI" },
      { id: 40, unitId: 4, order: 7, title: "名詞 XIX" },
      { id: 41, unitId: 4, order: 8, title: "形容詞 VIII" },
      { id: 42, unitId: 4, order: 9, title: "名詞 XX" },
      { id: 43, unitId: 4, order: 10, title: "動詞 XII" },
      { id: 44, unitId: 4, order: 11, title: "復習 IV" },

      // Unit 5
      { id: 45, unitId: 5, order: 1, title: "名詞 XXI" },
      { id: 46, unitId: 5, order: 2, title: "動詞 XIII" },
      { id: 47, unitId: 5, order: 3, title: "名詞 XXII" },
      { id: 48, unitId: 5, order: 4, title: "形容詞 IX" },
      { id: 49, unitId: 5, order: 5, title: "名詞 XXIII" },
      { id: 50, unitId: 5, order: 6, title: "動詞 XIV" },
      { id: 51, unitId: 5, order: 7, title: "名詞 XXIV" },
      { id: 52, unitId: 5, order: 8, title: "形容詞 X" },
      { id: 53, unitId: 5, order: 9, title: "名詞 XXV" },
      { id: 54, unitId: 5, order: 10, title: "動詞 XV" },
      { id: 55, unitId: 5, order: 11, title: "復習 V" },
    ])

    console.log("Seed data inserted successfully!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
