import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for German Unit 1, Lesson 4")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 59))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 59))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 59,
      unitId: 6, // German Unit 1, Lesson 4
      order: 4,
      title: "形容詞 I",
    })

    // New words used in this lesson
    // groß (big), klein (small), glücklich (happy), traurig (sad), schnell (fast)

    await db.insert(schema.challenges).values([
      { id: 791, lessonId: 59, type: "SELECT", order: 1, question: 'これらの言葉の中で「大きい」を意味するのはどれ？' },
      { id: 792, lessonId: 59, type: "ASSIST", order: 2, question: '「大きい」' },
      { id: 793, lessonId: 59, type: "SELECT", order: 3, question: 'これらの言葉の中で「小さい」を意味するのはどれ？' },
      { id: 794, lessonId: 59, type: "ASSIST", order: 4, question: '「小さい」' },
      { id: 795, lessonId: 59, type: "SELECT", order: 5, question: 'これらの言葉の中で「幸せな」を意味するのはどれ？' },
      { id: 796, lessonId: 59, type: "ASSIST", order: 6, question: '「幸せな」' },
      { id: 797, lessonId: 59, type: "SELECT", order: 7, question: 'これらの言葉の中で「悲しい」を意味するのはどれ？' },
      { id: 798, lessonId: 59, type: "ASSIST", order: 8, question: '「悲しい」' },
      { id: 799, lessonId: 59, type: "SELECT", order: 9, question: 'これらの言葉の中で「速い」を意味するのはどれ？' },
      { id: 800, lessonId: 59, type: "ASSIST", order: 10, question: '「速い」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "大きい" (groß)
      { challengeId: 791, optionId: 1, correct: true }, // groß
      { challengeId: 791, optionId: 2, correct: false }, // klein
      { challengeId: 791, optionId: 3, correct: false }, // glücklich
      { challengeId: 791, optionId: 4, correct: false }, // traurig

      // Question 2 - ASSIST "大きい" (groß)
      { challengeId: 792, optionId: 1, correct: true }, // groß
      { challengeId: 792, optionId: 2, correct: false }, // klein
      { challengeId: 792, optionId: 3, correct: false }, // glücklich
      { challengeId: 792, optionId: 4, correct: false }, // traurig

      // Question 3 - SELECT "小さい" (klein)
      { challengeId: 793, optionId: 2, correct: true }, // klein
      { challengeId: 793, optionId: 1, correct: false }, // groß
      { challengeId: 793, optionId: 3, correct: false }, // glücklich
      { challengeId: 793, optionId: 4, correct: false }, // traurig

      // Question 4 - ASSIST "小さい" (klein)
      { challengeId: 794, optionId: 2, correct: true }, // klein
      { challengeId: 794, optionId: 1, correct: false }, // groß
      { challengeId: 794, optionId: 3, correct: false }, // glücklich
      { challengeId: 794, optionId: 4, correct: false }, // traurig

      // Question 5 - SELECT "幸せな" (glücklich)
      { challengeId: 795, optionId: 3, correct: true }, // glücklich
      { challengeId: 795, optionId: 1, correct: false }, // groß
      { challengeId: 795, optionId: 2, correct: false }, // klein
      { challengeId: 795, optionId: 4, correct: false }, // traurig

      // Question 6 - ASSIST "幸せな" (glücklich)
      { challengeId: 796, optionId: 3, correct: true }, // glücklich
      { challengeId: 796, optionId: 1, correct: false }, // groß
      { challengeId: 796, optionId: 2, correct: false }, // klein
      { challengeId: 796, optionId: 4, correct: false }, // traurig

      // Question 7 - SELECT "悲しい" (traurig)
      { challengeId: 797, optionId: 4, correct: true }, // traurig
      { challengeId: 797, optionId: 1, correct: false }, // groß
      { challengeId: 797, optionId: 2, correct: false }, // klein
      { challengeId: 797, optionId: 3, correct: false }, // glücklich

      // Question 8 - ASSIST "悲しい" (traurig)
      { challengeId: 798, optionId: 4, correct: true }, // traurig
      { challengeId: 798, optionId: 1, correct: false }, // groß
      { challengeId: 798, optionId: 2, correct: false }, // klein
      { challengeId: 798, optionId: 3, correct: false }, // glücklich

      // Question 9 - SELECT "速い" (schnell)
      { challengeId: 799, optionId: 5, correct: true }, // schnell
      { challengeId: 799, optionId: 1, correct: false }, // groß
      { challengeId: 799, optionId: 2, correct: false }, // klein
      { challengeId: 799, optionId: 3, correct: false }, // glücklich

      // Question 10 - ASSIST "速い" (schnell)
      { challengeId: 800, optionId: 5, correct: true }, // schnell
      { challengeId: 800, optionId: 1, correct: false }, // groß
      { challengeId: 800, optionId: 2, correct: false }, // klein
      { challengeId: 800, optionId: 3, correct: false }, // glücklich
    ])

    console.log("Seed data inserted successfully for German Unit 1, Lesson 4!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
