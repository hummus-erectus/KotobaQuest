import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for French Unit 1, Lesson 4")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 114))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 114))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 114,
      unitId: 11, // French Unit 1, Lesson 4
      order: 4,
      title: "形容詞 I",
    })

    // New words used in this lesson
    // grand (big), petit (small), heureux (happy), triste (sad), rapide (fast)

    await db.insert(schema.challenges).values([
      { id: 1531, lessonId: 114, type: "SELECT", order: 1, question: 'これらの言葉の中で「大きい」を意味するのはどれ？' },
      { id: 1532, lessonId: 114, type: "ASSIST", order: 2, question: '「大きい」' },
      { id: 1533, lessonId: 114, type: "SELECT", order: 3, question: 'これらの言葉の中で「小さい」を意味するのはどれ？' },
      { id: 1534, lessonId: 114, type: "ASSIST", order: 4, question: '「小さい」' },
      { id: 1535, lessonId: 114, type: "SELECT", order: 5, question: 'これらの言葉の中で「幸せ」を意味するのはどれ？' },
      { id: 1536, lessonId: 114, type: "ASSIST", order: 6, question: '「幸せ」' },
      { id: 1537, lessonId: 114, type: "SELECT", order: 7, question: 'これらの言葉の中で「悲しい」を意味するのはどれ？' },
      { id: 1538, lessonId: 114, type: "ASSIST", order: 8, question: '「悲しい」' },
      { id: 1539, lessonId: 114, type: "SELECT", order: 9, question: 'これらの言葉の中で「速い」を意味するのはどれ？' },
      { id: 1540, lessonId: 114, type: "ASSIST", order: 10, question: '「速い」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "大きい" (grand)
      { challengeId: 1531, optionId: 516, correct: true }, // grand
      { challengeId: 1531, optionId: 517, correct: false }, // petit
      { challengeId: 1531, optionId: 518, correct: false }, // heureux
      { challengeId: 1531, optionId: 519, correct: false }, // triste

      // Question 2 - ASSIST "大きい" (grand)
      { challengeId: 1532, optionId: 516, correct: true }, // grand
      { challengeId: 1532, optionId: 517, correct: false }, // petit
      { challengeId: 1532, optionId: 518, correct: false }, // heureux
      { challengeId: 1532, optionId: 519, correct: false }, // triste

      // Question 3 - SELECT "小さい" (petit)
      { challengeId: 1533, optionId: 517, correct: true }, // petit
      { challengeId: 1533, optionId: 516, correct: false }, // grand
      { challengeId: 1533, optionId: 518, correct: false }, // heureux
      { challengeId: 1533, optionId: 519, correct: false }, // triste

      // Question 4 - ASSIST "小さい" (petit)
      { challengeId: 1534, optionId: 517, correct: true }, // petit
      { challengeId: 1534, optionId: 516, correct: false }, // grand
      { challengeId: 1534, optionId: 518, correct: false }, // heureux
      { challengeId: 1534, optionId: 519, correct: false }, // triste

      // Question 5 - SELECT "幸せ" (heureux)
      { challengeId: 1535, optionId: 518, correct: true }, // heureux
      { challengeId: 1535, optionId: 516, correct: false }, // grand
      { challengeId: 1535, optionId: 517, correct: false }, // petit
      { challengeId: 1535, optionId: 519, correct: false }, // triste

      // Question 6 - ASSIST "幸せ" (heureux)
      { challengeId: 1536, optionId: 518, correct: true }, // heureux
      { challengeId: 1536, optionId: 516, correct: false }, // grand
      { challengeId: 1536, optionId: 517, correct: false }, // petit
      { challengeId: 1536, optionId: 519, correct: false }, // triste

      // Question 7 - SELECT "悲しい" (triste)
      { challengeId: 1537, optionId: 519, correct: true }, // triste
      { challengeId: 1537, optionId: 516, correct: false }, // grand
      { challengeId: 1537, optionId: 517, correct: false }, // petit
      { challengeId: 1537, optionId: 518, correct: false }, // heureux

      // Question 8 - ASSIST "悲しい" (triste)
      { challengeId: 1538, optionId: 519, correct: true }, // triste
      { challengeId: 1538, optionId: 516, correct: false }, // grand
      { challengeId: 1538, optionId: 517, correct: false }, // petit
      { challengeId: 1538, optionId: 518, correct: false }, // heureux

      // Question 9 - SELECT "速い" (rapide)
      { challengeId: 1539, optionId: 520, correct: true }, // rapide
      { challengeId: 1539, optionId: 516, correct: false }, // grand
      { challengeId: 1539, optionId: 517, correct: false }, // petit
      { challengeId: 1539, optionId: 518, correct: false }, // heureux

      // Question 10 - ASSIST "速い" (rapide)
      { challengeId: 1540, optionId: 520, correct: true }, // rapide
      { challengeId: 1540, optionId: 516, correct: false }, // grand
      { challengeId: 1540, optionId: 517, correct: false }, // petit
      { challengeId: 1540, optionId: 518, correct: false }, // heureux
    ])

    console.log("Seed data inserted successfully for French Unit 1, Lesson 4!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
