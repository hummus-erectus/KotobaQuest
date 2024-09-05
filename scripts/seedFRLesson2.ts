import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for French Unit 1, Lesson 2")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 112))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 112))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 112,
      unitId: 11, // French Unit 1, Lesson 2
      order: 2,
      title: "動詞 I",
    })

    // New words used in this lesson
    // marcher (walk), courir (run), manger (eat), boire (drink), dormir (sleep)

    await db.insert(schema.challenges).values([
      { id: 1511, lessonId: 112, type: "SELECT", order: 1, question: 'これらの言葉の中で「歩く」を意味するのはどれ？' },
      { id: 1512, lessonId: 112, type: "ASSIST", order: 2, question: '「歩く」' },
      { id: 1513, lessonId: 112, type: "SELECT", order: 3, question: 'これらの言葉の中で「走る」を意味するのはどれ？' },
      { id: 1514, lessonId: 112, type: "ASSIST", order: 4, question: '「走る」' },
      { id: 1515, lessonId: 112, type: "SELECT", order: 5, question: 'これらの言葉の中で「食べる」を意味するのはどれ？' },
      { id: 1516, lessonId: 112, type: "ASSIST", order: 6, question: '「食べる」' },
      { id: 1517, lessonId: 112, type: "SELECT", order: 7, question: 'これらの言葉の中で「飲む」を意味するのはどれ？' },
      { id: 1518, lessonId: 112, type: "ASSIST", order: 8, question: '「飲む」' },
      { id: 1519, lessonId: 112, type: "SELECT", order: 9, question: 'これらの言葉の中で「眠る」を意味するのはどれ？' },
      { id: 1520, lessonId: 112, type: "ASSIST", order: 10, question: '「眠る」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "歩く" (marcher)
      { challengeId: 1511, optionId: 506, correct: true }, // marcher
      { challengeId: 1511, optionId: 507, correct: false }, // courir
      { challengeId: 1511, optionId: 508, correct: false }, // manger
      { challengeId: 1511, optionId: 509, correct: false }, // boire

      // Question 2 - ASSIST "歩く" (marcher)
      { challengeId: 1512, optionId: 506, correct: true }, // marcher
      { challengeId: 1512, optionId: 507, correct: false }, // courir
      { challengeId: 1512, optionId: 508, correct: false }, // manger
      { challengeId: 1512, optionId: 509, correct: false }, // boire

      // Question 3 - SELECT "走る" (courir)
      { challengeId: 1513, optionId: 507, correct: true }, // courir
      { challengeId: 1513, optionId: 506, correct: false }, // marcher
      { challengeId: 1513, optionId: 508, correct: false }, // manger
      { challengeId: 1513, optionId: 509, correct: false }, // boire

      // Question 4 - ASSIST "走る" (courir)
      { challengeId: 1514, optionId: 507, correct: true }, // courir
      { challengeId: 1514, optionId: 506, correct: false }, // marcher
      { challengeId: 1514, optionId: 508, correct: false }, // manger
      { challengeId: 1514, optionId: 509, correct: false }, // boire

      // Question 5 - SELECT "食べる" (manger)
      { challengeId: 1515, optionId: 508, correct: true }, // manger
      { challengeId: 1515, optionId: 506, correct: false }, // marcher
      { challengeId: 1515, optionId: 507, correct: false }, // courir
      { challengeId: 1515, optionId: 509, correct: false }, // boire

      // Question 6 - ASSIST "食べる" (manger)
      { challengeId: 1516, optionId: 508, correct: true }, // manger
      { challengeId: 1516, optionId: 506, correct: false }, // marcher
      { challengeId: 1516, optionId: 507, correct: false }, // courir
      { challengeId: 1516, optionId: 509, correct: false }, // boire

      // Question 7 - SELECT "飲む" (boire)
      { challengeId: 1517, optionId: 509, correct: true }, // boire
      { challengeId: 1517, optionId: 506, correct: false }, // marcher
      { challengeId: 1517, optionId: 507, correct: false }, // courir
      { challengeId: 1517, optionId: 508, correct: false }, // manger

      // Question 8 - ASSIST "飲む" (boire)
      { challengeId: 1518, optionId: 509, correct: true }, // boire
      { challengeId: 1518, optionId: 506, correct: false }, // marcher
      { challengeId: 1518, optionId: 507, correct: false }, // courir
      { challengeId: 1518, optionId: 508, correct: false }, // manger

      // Question 9 - SELECT "眠る" (dormir)
      { challengeId: 1519, optionId: 510, correct: true }, // dormir
      { challengeId: 1519, optionId: 506, correct: false }, // marcher
      { challengeId: 1519, optionId: 507, correct: false }, // courir
      { challengeId: 1519, optionId: 509, correct: false }, // boire

      // Question 10 - ASSIST "眠る" (dormir)
      { challengeId: 1520, optionId: 510, correct: true }, // dormir
      { challengeId: 1520, optionId: 506, correct: false }, // marcher
      { challengeId: 1520, optionId: 507, correct: false }, // courir
      { challengeId: 1520, optionId: 509, correct: false }, // boire
    ])

    console.log("Seed data inserted successfully for French Unit 1, Lesson 2!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
