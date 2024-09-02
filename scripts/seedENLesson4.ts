import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for English Unit 1, Lesson 4")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 4))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 4))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 4,
      unitId: 1, // English Unit 1, Lesson 4
      order: 4,
      title: "形容詞 I",
    })

    // New words used in this lesson
    // big, small, happy, sad, fast

    await db.insert(schema.challenges).values([
      { id: 31, lessonId: 4, type: "SELECT", order: 1, question: 'これらの言葉の中で「大きい」を意味するのはどれ？' },
      { id: 32, lessonId: 4, type: "ASSIST", order: 2, question: '「大きい」' },
      { id: 33, lessonId: 4, type: "SELECT", order: 3, question: 'これらの言葉の中で「小さい」を意味するのはどれ？' },
      { id: 34, lessonId: 4, type: "ASSIST", order: 4, question: '「小さい」' },
      { id: 35, lessonId: 4, type: "SELECT", order: 5, question: 'これらの言葉の中で「嬉しい」を意味するのはどれ？' },
      { id: 36, lessonId: 4, type: "ASSIST", order: 6, question: '「嬉しい」' },
      { id: 37, lessonId: 4, type: "SELECT", order: 7, question: 'これらの言葉の中で「悲しい」を意味するのはどれ？' },
      { id: 38, lessonId: 4, type: "ASSIST", order: 8, question: '「悲しい」' },
      { id: 39, lessonId: 4, type: "SELECT", order: 9, question: 'これらの言葉の中で「速い」を意味するのはどれ？' },
      { id: 40, lessonId: 4, type: "ASSIST", order: 10, question: '「速い」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - 大きい (big)
      { challengeId: 31, optionId: 1, correct: true }, // big
      { challengeId: 31, optionId: 2, correct: false }, // small
      { challengeId: 31, optionId: 3, correct: false }, // happy
      { challengeId: 31, optionId: 4, correct: false }, // sad

      // Question 2 - 大きい (big) ASSIST
      { challengeId: 32, optionId: 1, correct: true }, // big
      { challengeId: 32, optionId: 2, correct: false }, // small
      { challengeId: 32, optionId: 3, correct: false }, // happy
      { challengeId: 32, optionId: 4, correct: false }, // sad

      // Question 3 - 小さい (small)
      { challengeId: 33, optionId: 2, correct: true }, // small
      { challengeId: 33, optionId: 1, correct: false }, // big
      { challengeId: 33, optionId: 3, correct: false }, // happy
      { challengeId: 33, optionId: 4, correct: false }, // sad

      // Question 4 - 小さい (small) ASSIST
      { challengeId: 34, optionId: 2, correct: true }, // small
      { challengeId: 34, optionId: 1, correct: false }, // big
      { challengeId: 34, optionId: 3, correct: false }, // happy
      { challengeId: 34, optionId: 4, correct: false }, // sad

      // Question 5 - 嬉しい (happy)
      { challengeId: 35, optionId: 3, correct: true }, // happy
      { challengeId: 35, optionId: 1, correct: false }, // big
      { challengeId: 35, optionId: 2, correct: false }, // small
      { challengeId: 35, optionId: 4, correct: false }, // sad

      // Question 6 - 嬉しい (happy) ASSIST
      { challengeId: 36, optionId: 3, correct: true }, // happy
      { challengeId: 36, optionId: 1, correct: false }, // big
      { challengeId: 36, optionId: 2, correct: false }, // small
      { challengeId: 36, optionId: 4, correct: false }, // sad

      // Question 7 - 悲しい (sad)
      { challengeId: 37, optionId: 4, correct: true }, // sad
      { challengeId: 37, optionId: 1, correct: false }, // big
      { challengeId: 37, optionId: 2, correct: false }, // small
      { challengeId: 37, optionId: 3, correct: false }, // happy

      // Question 8 - 悲しい (sad) ASSIST
      { challengeId: 38, optionId: 4, correct: true }, // sad
      { challengeId: 38, optionId: 1, correct: false }, // big
      { challengeId: 38, optionId: 2, correct: false }, // small
      { challengeId: 38, optionId: 3, correct: false }, // happy

      // Question 9 - 速い (fast)
      { challengeId: 39, optionId: 5, correct: true }, // fast
      { challengeId: 39, optionId: 1, correct: false }, // big
      { challengeId: 39, optionId: 2, correct: false }, // small
      { challengeId: 39, optionId: 4, correct: false }, // sad

      // Question 10 - 速い (fast) ASSIST
      { challengeId: 40, optionId: 5, correct: true }, // fast
      { challengeId: 40, optionId: 1, correct: false }, // big
      { challengeId: 40, optionId: 2, correct: false }, // small
      { challengeId: 40, optionId: 4, correct: false }, // sad
    ])

    console.log("Seed data inserted successfully for Unit 1, Lesson 4!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
