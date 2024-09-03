import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for English Unit 1, Lesson 5")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 5))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 5))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 5,
      unitId: 1, // English Unit 1, Lesson 5
      order: 5,
      title: "名詞 III",
    })

    // New words used in this lesson
    // apple, banana, bread, water, milk

    await db.insert(schema.challenges).values([
      { id: 41, lessonId: 5, type: "SELECT", order: 1, question: 'これらの言葉の中で「りんご」を意味するのはどれ？' },
      { id: 42, lessonId: 5, type: "ASSIST", order: 2, question: '「りんご」' },
      { id: 43, lessonId: 5, type: "SELECT", order: 3, question: 'これらの言葉の中で「バナナ」を意味するのはどれ？' },
      { id: 44, lessonId: 5, type: "ASSIST", order: 4, question: '「バナナ」' },
      { id: 45, lessonId: 5, type: "SELECT", order: 5, question: 'これらの言葉の中で「パン」を意味するのはどれ？' },
      { id: 46, lessonId: 5, type: "ASSIST", order: 6, question: '「パン」' },
      { id: 47, lessonId: 5, type: "SELECT", order: 7, question: 'これらの言葉の中で「水」を意味するのはどれ？' },
      { id: 48, lessonId: 5, type: "ASSIST", order: 8, question: '「水」' },
      { id: 49, lessonId: 5, type: "SELECT", order: 9, question: 'これらの言葉の中で「牛乳」を意味するのはどれ？' },
      { id: 50, lessonId: 5, type: "ASSIST", order: 10, question: '「牛乳」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - りんご (apple)
      { challengeId: 41, optionId: 21, correct: true }, // apple
      { challengeId: 41, optionId: 22, correct: false }, // banana
      { challengeId: 41, optionId: 23, correct: false }, // bread
      { challengeId: 41, optionId: 24, correct: false }, // water

      // Question 2 - りんご (apple) ASSIST
      { challengeId: 42, optionId: 21, correct: true }, // apple
      { challengeId: 42, optionId: 22, correct: false }, // banana
      { challengeId: 42, optionId: 23, correct: false }, // bread
      { challengeId: 42, optionId: 24, correct: false }, // water

      // Question 3 - バナナ (banana)
      { challengeId: 43, optionId: 22, correct: true }, // banana
      { challengeId: 43, optionId: 21, correct: false }, // apple
      { challengeId: 43, optionId: 23, correct: false }, // bread
      { challengeId: 43, optionId: 24, correct: false }, // water

      // Question 4 - バナナ (banana) ASSIST
      { challengeId: 44, optionId: 22, correct: true }, // banana
      { challengeId: 44, optionId: 21, correct: false }, // apple
      { challengeId: 44, optionId: 23, correct: false }, // bread
      { challengeId: 44, optionId: 24, correct: false }, // water

      // Question 5 - パン (bread)
      { challengeId: 45, optionId: 23, correct: true }, // bread
      { challengeId: 45, optionId: 21, correct: false }, // apple
      { challengeId: 45, optionId: 22, correct: false }, // banana
      { challengeId: 45, optionId: 24, correct: false }, // water

      // Question 6 - パン (bread) ASSIST
      { challengeId: 46, optionId: 23, correct: true }, // bread
      { challengeId: 46, optionId: 21, correct: false }, // apple
      { challengeId: 46, optionId: 22, correct: false }, // banana
      { challengeId: 46, optionId: 24, correct: false }, // water

      // Question 7 - 水 (water)
      { challengeId: 47, optionId: 24, correct: true }, // water
      { challengeId: 47, optionId: 21, correct: false }, // apple
      { challengeId: 47, optionId: 22, correct: false }, // banana
      { challengeId: 47, optionId: 23, correct: false }, // bread

      // Question 8 - 水 (water) ASSIST
      { challengeId: 48, optionId: 24, correct: true }, // water
      { challengeId: 48, optionId: 21, correct: false }, // apple
      { challengeId: 48, optionId: 22, correct: false }, // banana
      { challengeId: 48, optionId: 23, correct: false }, // bread

      // Question 9 - 牛乳 (milk)
      { challengeId: 49, optionId: 25, correct: true }, // milk
      { challengeId: 49, optionId: 21, correct: false }, // apple
      { challengeId: 49, optionId: 22, correct: false }, // banana
      { challengeId: 49, optionId: 23, correct: false }, // bread

      // Question 10 - 牛乳 (milk) ASSIST
      { challengeId: 50, optionId: 25, correct: true }, // milk
      { challengeId: 50, optionId: 21, correct: false }, // apple
      { challengeId: 50, optionId: 22, correct: false }, // banana
      { challengeId: 50, optionId: 23, correct: false }, // bread
    ])

    console.log("Seed data inserted successfully for Unit 1, Lesson 5!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
