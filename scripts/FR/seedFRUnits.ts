import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database with French course units and lessons")

    await db.delete(schema.courses).where(eq(schema.courses.id, 3))

    await db.insert(schema.courses).values([
      {
        id: 3,
        title: "フランス語",
        imageSrc: "/FR.svg",
      },
    ])

    await db.insert(schema.units).values([
      {
        id: 11,
        courseId: 3, // フランス語
        title: "章 I",
        description: "フランス語の基本を学ぼう",
        order: 1,
      },
      {
        id: 12,
        courseId: 3,
        title: "章 II",
        description: "もっとフランス語の語彙を学ぼう",
        order: 2,
      },
      {
        id: 13,
        courseId: 3,
        title: "章 III",
        description: "日常生活で使うフランス語の表現",
        order: 3,
      },
      {
        id: 14,
        courseId: 3,
        title: "章 IV",
        description: "自然や環境に関するフランス語",
        order: 4,
      },
      {
        id: 15,
        courseId: 3,
        title: "章 V",
        description: "社交やビジネスの場面で使うフランス語",
        order: 5,
      }
    ])

    await db.insert(schema.lessons).values([
      // Unit 1
      { id: 111, unitId: 11, order: 1, title: "名詞 I" },
      { id: 112, unitId: 11, order: 2, title: "動詞 I" },
      { id: 113, unitId: 11, order: 3, title: "名詞 II" },
      { id: 114, unitId: 11, order: 4, title: "形容詞 I" },
      { id: 115, unitId: 11, order: 5, title: "名詞 III" },
      { id: 116, unitId: 11, order: 6, title: "動詞 II" },
      { id: 117, unitId: 11, order: 7, title: "名詞 IV" },
      { id: 118, unitId: 11, order: 8, title: "形容詞 II" },
      { id: 119, unitId: 11, order: 9, title: "名詞 V" },
      { id: 120, unitId: 11, order: 10, title: "動詞 III" },
      { id: 121, unitId: 11, order: 11, title: "復習 I" },

      // Unit 2
      { id: 122, unitId: 12, order: 1, title: "名詞 VI" },
      { id: 123, unitId: 12, order: 2, title: "動詞 IV" },
      { id: 124, unitId: 12, order: 3, title: "名詞 VII" },
      { id: 125, unitId: 12, order: 4, title: "形容詞 III" },
      { id: 126, unitId: 12, order: 5, title: "名詞 VIII" },
      { id: 127, unitId: 12, order: 6, title: "動詞 V" },
      { id: 128, unitId: 12, order: 7, title: "名詞 IX" },
      { id: 129, unitId: 12, order: 8, title: "形容詞 IV" },
      { id: 130, unitId: 12, order: 9, title: "名詞 X" },
      { id: 131, unitId: 12, order: 10, title: "動詞 VI" },
      { id: 132, unitId: 12, order: 11, title: "復習 II" },

      // Unit 3
      { id: 133, unitId: 13, order: 1, title: "名詞 XI" },
      { id: 134, unitId: 13, order: 2, title: "動詞 VII" },
      { id: 135, unitId: 13, order: 3, title: "名詞 XII" },
      { id: 136, unitId: 13, order: 4, title: "形容詞 V" },
      { id: 137, unitId: 13, order: 5, title: "名詞 XIII" },
      { id: 138, unitId: 13, order: 6, title: "動詞 VIII" },
      { id: 139, unitId: 13, order: 7, title: "名詞 XIV" },
      { id: 140, unitId: 13, order: 8, title: "形容詞 VI" },
      { id: 141, unitId: 13, order: 9, title: "名詞 XV" },
      { id: 142, unitId: 13, order: 10, title: "動詞 IX" },
      { id: 143, unitId: 13, order: 11, title: "復習 III" },

      // Unit 4
      { id: 144, unitId: 14, order: 1, title: "名詞 XVI" },
      { id: 145, unitId: 14, order: 2, title: "動詞 X" },
      { id: 146, unitId: 14, order: 3, title: "名詞 XVII" },
      { id: 147, unitId: 14, order: 4, title: "形容詞 VII" },
      { id: 148, unitId: 14, order: 5, title: "名詞 XVIII" },
      { id: 149, unitId: 14, order: 6, title: "動詞 XI" },
      { id: 150, unitId: 14, order: 7, title: "名詞 XIX" },
      { id: 151, unitId: 14, order: 8, title: "形容詞 VIII" },
      { id: 152, unitId: 14, order: 9, title: "名詞 XX" },
      { id: 153, unitId: 14, order: 10, title: "動詞 XII" },
      { id: 154, unitId: 14, order: 11, title: "復習 IV" },

      // Unit 5
      { id: 155, unitId: 15, order: 1, title: "名詞 XXI" },
      { id: 156, unitId: 15, order: 2, title: "動詞 XIII" },
      { id: 157, unitId: 15, order: 3, title: "名詞 XXII" },
      { id: 158, unitId: 15, order: 4, title: "形容詞 IX" },
      { id: 159, unitId: 15, order: 5, title: "名詞 XXIII" },
      { id: 160, unitId: 15, order: 6, title: "動詞 XIV" },
      { id: 161, unitId: 15, order: 7, title: "名詞 XXIV" },
      { id: 162, unitId: 15, order: 8, title: "形容詞 X" },
      { id: 163, unitId: 15, order: 9, title: "名詞 XXV" },
      { id: 164, unitId: 15, order: 10, title: "動詞 XV" },
      { id: 165, unitId: 15, order: 11, title: "復習 V" },
    ])

    console.log("Seed data inserted successfully!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
