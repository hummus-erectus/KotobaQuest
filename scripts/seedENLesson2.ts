import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for English Unit 1, Lesson 2")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 2))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 2))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 2,
      unitId: 1, // English Unit 1, Lesson 2
      order: 2,
      title: "動詞 I",
      })

    // New words used in this lesson
    // walk, run, eat, drink, sleep

    await db.insert(schema.challenges).values([
      { id: 11, lessonId: 2, type: "SELECT", order: 1, question: 'これらの言葉の中で「歩く」を意味するのはどれ？' },
      { id: 12, lessonId: 2, type: "ASSIST", order: 2, question: '「歩く」' },
      { id: 13, lessonId: 2, type: "SELECT", order: 3, question: 'これらの言葉の中で「走る」を意味するのはどれ？' },
      { id: 14, lessonId: 2, type: "ASSIST", order: 4, question: '「走る」' },
      { id: 15, lessonId: 2, type: "SELECT", order: 5, question: 'これらの言葉の中で「食べる」を意味するのはどれ？' },
      { id: 16, lessonId: 2, type: "ASSIST", order: 6, question: '「食べる」' },
      { id: 17, lessonId: 2, type: "SELECT", order: 7, question: 'これらの言葉の中で「飲む」を意味するのはどれ？' },
      { id: 18, lessonId: 2, type: "ASSIST", order: 8, question: '「飲む」' },
      { id: 19, lessonId: 2, type: "SELECT", order: 9, question: 'これらの言葉の中で「寝る」を意味するのはどれ？' },
      { id: 20, lessonId: 2, type: "ASSIST", order: 10, question: '「寝る」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "歩く" (walk)
      { challengeId: 11, optionId: 6, correct: true }, //walk
      { challengeId: 11, optionId: 7, correct: false }, //run
      { challengeId: 11, optionId: 8, correct: false }, //eat
      { challengeId: 11, optionId: 9, correct: false }, //drink

      // Question 2 - ASSIST "歩く" (walk)
      { challengeId: 12, optionId: 6, correct: true }, //walk
      { challengeId: 12, optionId: 7, correct: false }, //run
      { challengeId: 12, optionId: 8, correct: false }, //eat
      { challengeId: 12, optionId: 9, correct: false }, //drink

      // Question 3 - SELECT "走る" (run)
      { challengeId: 13, optionId: 7, correct: true }, //run
      { challengeId: 13, optionId: 6, correct: false }, //walk
      { challengeId: 13, optionId: 8, correct: false }, //eat
      { challengeId: 13, optionId: 9, correct: false }, //drink

      // Question 4 - ASSIST "走る" (run)
      { challengeId: 14, optionId: 7, correct: true }, //run
      { challengeId: 14, optionId: 6, correct: false }, //walk
      { challengeId: 14, optionId: 8, correct: false }, //eat
      { challengeId: 14, optionId: 9, correct: false }, //drink

      // Question 5 - SELECT "食べる" (eat)
      { challengeId: 15, optionId: 8, correct: true }, //eat
      { challengeId: 15, optionId: 6, correct: false }, //walk
      { challengeId: 15, optionId: 7, correct: false }, //run
      { challengeId: 15, optionId: 9, correct: false }, //drink

      // Question 6 - ASSIST "食べる" (eat)
      { challengeId: 16, optionId: 8, correct: true }, //eat
      { challengeId: 16, optionId: 6, correct: false }, //walk
      { challengeId: 16, optionId: 7, correct: false }, //run
      { challengeId: 16, optionId: 9, correct: false }, //drink

      // Question 7 - SELECT "飲む" (drink)
      { challengeId: 17, optionId: 9, correct: true }, //drink
      { challengeId: 17, optionId: 6, correct: false }, //walk
      { challengeId: 17, optionId: 7, correct: false }, //run
      { challengeId: 17, optionId: 8, correct: false }, //eat

      // Question 8 - ASSIST "飲む" (drink)
      { challengeId: 18, optionId: 9, correct: true }, //drink
      { challengeId: 18, optionId: 6, correct: false }, //walk
      { challengeId: 18, optionId: 7, correct: false }, //run
      { challengeId: 18, optionId: 8, correct: false }, //eat

      // Question 9 - SELECT "寝る" (sleep)
      { challengeId: 19, optionId: 10, correct: true }, //sleep
      { challengeId: 19, optionId: 6, correct: false }, //walk
      { challengeId: 19, optionId: 7, correct: false }, //run
      { challengeId: 19, optionId: 8, correct: false }, //eat

      // Question 10 - ASSIST "寝る" (sleep)
      { challengeId: 20, optionId: 10, correct: true }, //sleep
      { challengeId: 20, optionId: 6, correct: false }, //walk
      { challengeId: 20, optionId: 7, correct: false }, //run
      { challengeId: 20, optionId: 8, correct: false }, //eat
    ])

    console.log("Seed data inserted successfully for Unit 1, Lesson 2!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
