import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for English Unit 1, Lesson 1")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 1))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 1))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 1,
      unitId: 1, // English Unit 1, Lesson 1
      order: 1,
      title: "名詞 I",
    })

    // New words used in this lesson
    // man, woman, girl, boy, dog

    // Insert Challenges
    await db.insert(schema.challenges).values([
      { id: 1, lessonId: 1, type: "SELECT", order: 1, question: 'これらの言葉の中で「男の人」を意味するのはどれ？' },
      { id: 2, lessonId: 1, type: "ASSIST", order: 2, question: '「男の人」' },
      { id: 3, lessonId: 1, type: "SELECT", order: 3, question: 'これらの言葉の中で「女の人」を意味するのはどれ？' },
      { id: 4, lessonId: 1, type: "ASSIST", order: 4, question: '「女の人」' },
      { id: 5, lessonId: 1, type: "SELECT", order: 5, question: 'これらの言葉の中で「女の子」を意味するのはどれ？' },
      { id: 6, lessonId: 1, type: "ASSIST", order: 6, question: '「女の子」' },
      { id: 7, lessonId: 1, type: "SELECT", order: 7, question: 'これらの言葉の中で「男の子」を意味するのはどれ？' },
      { id: 8, lessonId: 1, type: "ASSIST", order: 8, question: '「男の子」' },
      { id: 9, lessonId: 1, type: "SELECT", order: 9, question: 'これらの言葉の中で「犬」を意味するのはどれ？' },
      { id: 10, lessonId: 1, type: "ASSIST", order: 10, question: '「犬」' },
    ])

    // Insert ChallengeOptions
    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "男の人" (man)
      { challengeId: 1, optionId: 1, correct: true }, //man
      { challengeId: 1, optionId: 2, correct: false }, //woman
      { challengeId: 1, optionId: 3, correct: false }, //girl
      { challengeId: 1, optionId: 4, correct: false }, //boy

      // Question 2 - ASSIST "男の人" (man)
      { challengeId: 2, optionId: 1, correct: true }, //man
      { challengeId: 2, optionId: 2, correct: false }, //woman
      { challengeId: 2, optionId: 3, correct: false }, //girl
      { challengeId: 2, optionId: 4, correct: false }, //boy

      // Question 3 - SELECT "女の人" (woman)
      { challengeId: 3, optionId: 2, correct: true }, //woman
      { challengeId: 3, optionId: 1, correct: false }, //man
      { challengeId: 3, optionId: 3, correct: false }, //girl
      { challengeId: 3, optionId: 4, correct: false }, //boy

      // Question 4 - ASSIST "女の人" (woman)
      { challengeId: 4, optionId: 2, correct: true }, //woman
      { challengeId: 4, optionId: 1, correct: false }, //man
      { challengeId: 4, optionId: 3, correct: false }, //girl
      { challengeId: 4, optionId: 4, correct: false }, //boy

      // Question 5 - SELECT "女の子" (girl)
      { challengeId: 5, optionId: 3, correct: true }, //girl
      { challengeId: 5, optionId: 1, correct: false }, //man
      { challengeId: 5, optionId: 2, correct: false }, //woman
      { challengeId: 5, optionId: 4, correct: false }, //boy

      // Question 6 - ASSIST "女の子" (girl)
      { challengeId: 6, optionId: 3, correct: true }, //girl
      { challengeId: 6, optionId: 1, correct: false }, //man
      { challengeId: 6, optionId: 2, correct: false }, //woman
      { challengeId: 6, optionId: 4, correct: false }, //boy

      // Question 7 - SELECT "男の子" (boy)
      { challengeId: 7, optionId: 4, correct: true }, //boy
      { challengeId: 7, optionId: 1, correct: false }, //man
      { challengeId: 7, optionId: 2, correct: false }, //woman
      { challengeId: 7, optionId: 5, correct: false }, //dog

      // Question 8 - ASSIST "男の子" (boy)
      { challengeId: 8, optionId: 4, correct: true }, //boy
      { challengeId: 8, optionId: 1, correct: false }, //man
      { challengeId: 8, optionId: 2, correct: false }, //woman
      { challengeId: 8, optionId: 5, correct: false }, //dog

      // Question 9 - SELECT "犬" (dog)
      { challengeId: 9, optionId: 5, correct: true }, //dog
      { challengeId: 9, optionId: 1, correct: false }, //man
      { challengeId: 9, optionId: 2, correct: false }, //woman
      { challengeId: 9, optionId: 4, correct: false }, //boy

      // Question 10 - ASSIST "犬" (dog)
      { challengeId: 10, optionId: 5, correct: true }, //dog
      { challengeId: 10, optionId: 1, correct: false }, //man
      { challengeId: 10, optionId: 2, correct: false }, //woman
      { challengeId: 10, optionId: 4, correct: false }, //boy

    ])

    console.log("Seed data inserted successfully for Unit 1, Lesson 1!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
