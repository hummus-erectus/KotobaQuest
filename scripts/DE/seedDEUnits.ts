import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"
import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database with German course units and lessons")

    await db.delete(schema.courses).where(eq(schema.courses.id, 2))
    // await db.delete(schema.userProgress)
    // await db.delete(schema.units)
    // await db.delete(schema.lessons)
    // await db.delete(schema.challenges)
    // await db.delete(schema.challengeOptions)
    // await db.delete(schema.challengeProgress)

    await db.insert(schema.courses).values([
      {
        id: 2,
        title: "ドイツ語",
        imageSrc: "/DE.svg",
      },
    ])

    await db.insert(schema.units).values([
      {
        id: 6,
        courseId: 2, // ドイツ語
        title: "章 I",
        description: "ドイツ語の基本を学ぼう",
        order: 1,
      },
      {
        id: 7,
        courseId: 2,
        title: "章 II",
        description: "もっとドイツ語の語彙を学ぼう",
        order: 2,
      },
      {
        id: 8,
        courseId: 2,
        title: "章 III",
        description: "日常生活で使うドイツ語の表現",
        order: 3,
      },
      {
        id: 9,
        courseId: 2,
        title: "章 IV",
        description: "自然や環境に関するドイツ語",
        order: 4,
      },
      {
        id: 10,
        courseId: 2,
        title: "章 V",
        description: "社交やビジネスの場面で使うドイツ語",
        order: 5,
      }
    ])

    await db.insert(schema.lessons).values([
      // Unit 1
      { id: 56, unitId: 6, order: 1, title: "名詞 I" },
      { id: 57, unitId: 6, order: 2, title: "動詞 I" },
      { id: 58, unitId: 6, order: 3, title: "名詞 II" },
      { id: 59, unitId: 6, order: 4, title: "形容詞 I" },
      { id: 60, unitId: 6, order: 5, title: "名詞 III" },
      { id: 61, unitId: 6, order: 6, title: "動詞 II" },
      { id: 62, unitId: 6, order: 7, title: "名詞 IV" },
      { id: 63, unitId: 6, order: 8, title: "形容詞 II" },
      { id: 64, unitId: 6, order: 9, title: "名詞 V" },
      { id: 65, unitId: 6, order: 10, title: "動詞 III" },
      { id: 66, unitId: 6, order: 11, title: "復習 I" },

      // Unit 2
      { id: 67, unitId: 7, order: 1, title: "名詞 VI" },
      { id: 68, unitId: 7, order: 2, title: "動詞 IV" },
      { id: 69, unitId: 7, order: 3, title: "名詞 VII" },
      { id: 70, unitId: 7, order: 4, title: "形容詞 III" },
      { id: 71, unitId: 7, order: 5, title: "名詞 VIII" },
      { id: 72, unitId: 7, order: 6, title: "動詞 V" },
      { id: 73, unitId: 7, order: 7, title: "名詞 IX" },
      { id: 74, unitId: 7, order: 8, title: "形容詞 IV" },
      { id: 75, unitId: 7, order: 9, title: "名詞 X" },
      { id: 76, unitId: 7, order: 10, title: "動詞 VI" },
      { id: 77, unitId: 7, order: 11, title: "復習 II" },

      // Unit 3
      { id: 78, unitId: 8, order: 1, title: "名詞 XI" },
      { id: 79, unitId: 8, order: 2, title: "動詞 VII" },
      { id: 80, unitId: 8, order: 3, title: "名詞 XII" },
      { id: 81, unitId: 8, order: 4, title: "形容詞 V" },
      { id: 82, unitId: 8, order: 5, title: "名詞 XIII" },
      { id: 83, unitId: 8, order: 6, title: "動詞 VIII" },
      { id: 84, unitId: 8, order: 7, title: "名詞 XIV" },
      { id: 85, unitId: 8, order: 8, title: "形容詞 VI" },
      { id: 86, unitId: 8, order: 9, title: "名詞 XV" },
      { id: 87, unitId: 8, order: 10, title: "動詞 IX" },
      { id: 88, unitId: 8, order: 11, title: "復習 III" },

      // Unit 4
      { id: 89, unitId: 9, order: 1, title: "名詞 XVI" },
      { id: 90, unitId: 9, order: 2, title: "動詞 X" },
      { id: 91, unitId: 9, order: 3, title: "名詞 XVII" },
      { id: 92, unitId: 9, order: 4, title: "形容詞 VII" },
      { id: 93, unitId: 9, order: 5, title: "名詞 XVIII" },
      { id: 94, unitId: 9, order: 6, title: "動詞 XI" },
      { id: 95, unitId: 9, order: 7, title: "名詞 XIX" },
      { id: 96, unitId: 9, order: 8, title: "形容詞 VIII" },
      { id: 97, unitId: 9, order: 9, title: "名詞 XX" },
      { id: 98, unitId: 9, order: 10, title: "動詞 XII" },
      { id: 99, unitId: 9, order: 11, title: "復習 IV" },

      // Unit 5
      { id: 100, unitId: 10, order: 1, title: "名詞 XXI" },
      { id: 101, unitId: 10, order: 2, title: "動詞 XIII" },
      { id: 102, unitId: 10, order: 3, title: "名詞 XXII" },
      { id: 103, unitId: 10, order: 4, title: "形容詞 IX" },
      { id: 104, unitId: 10, order: 5, title: "名詞 XXIII" },
      { id: 105, unitId: 10, order: 6, title: "動詞 XIV" },
      { id: 106, unitId: 10, order: 7, title: "名詞 XXIV" },
      { id: 107, unitId: 10, order: 8, title: "形容詞 X" },
      { id: 108, unitId: 10, order: 9, title: "名詞 XXV" },
      { id: 109, unitId: 10, order: 10, title: "動詞 XV" },
      { id: 110, unitId: 10, order: 11, title: "復習 V" },
    ])

    console.log("Seed data inserted successfully!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
