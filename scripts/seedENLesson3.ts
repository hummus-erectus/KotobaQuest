import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for English Unit 1, Lesson 3")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 3))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 3))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 3,
      unitId: 1, // English Unit 1, Lesson 3
      order: 3,
      title: "名詞 II",
    })

    // New words used in this lesson
    // cat, house, car, tree, book

    await db.insert(schema.challenges).values([
      { id: 21, lessonId: 3, type: "SELECT", order: 1, question: 'これらの言葉の中で「猫」を意味するのはどれ？' },
      { id: 22, lessonId: 3, type: "ASSIST", order: 2, question: '「猫」' },
      { id: 23, lessonId: 3, type: "SELECT", order: 3, question: 'これらの言葉の中で「家」を意味するのはどれ？' },
      { id: 24, lessonId: 3, type: "ASSIST", order: 4, question: '「家」' },
      { id: 25, lessonId: 3, type: "SELECT", order: 5, question: 'これらの言葉の中で「車」を意味するのはどれ？' },
      { id: 26, lessonId: 3, type: "ASSIST", order: 6, question: '「車」' },
      { id: 27, lessonId: 3, type: "SELECT", order: 7, question: 'これらの言葉の中で「木」を意味するのはどれ？' },
      { id: 28, lessonId: 3, type: "ASSIST", order: 8, question: '「木」' },
      { id: 29, lessonId: 3, type: "SELECT", order: 9, question: 'これらの言葉の中で「本」を意味するのはどれ？' },
      { id: 30, lessonId: 3, type: "ASSIST", order: 10, question: '「本」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "猫" (cat)
      { challengeId: 21, optionId: 11, correct: true }, // cat
      { challengeId: 21, optionId: 12, correct: false }, // house
      { challengeId: 21, optionId: 13, correct: false }, // car
      { challengeId: 21, optionId: 14, correct: false }, // tree

      // Question 2 - ASSIST "猫" (cat)
      { challengeId: 22, optionId: 11, correct: true }, // cat
      { challengeId: 22, optionId: 12, correct: false }, // house
      { challengeId: 22, optionId: 13, correct: false }, // car
      { challengeId: 22, optionId: 14, correct: false }, // tree

      // Question 3 - SELECT "家" (house)
      { challengeId: 23, optionId: 12, correct: true }, // house
      { challengeId: 23, optionId: 11, correct: false }, // cat
      { challengeId: 23, optionId: 13, correct: false }, // car
      { challengeId: 23, optionId: 14, correct: false }, // tree

      // Question 4 - ASSIST "家" (house)
      { challengeId: 24, optionId: 12, correct: true }, // house
      { challengeId: 24, optionId: 11, correct: false }, // cat
      { challengeId: 24, optionId: 13, correct: false }, // car
      { challengeId: 24, optionId: 14, correct: false }, // tree

      // Question 5 - SELECT "車" (car)
      { challengeId: 25, optionId: 13, correct: true }, // car
      { challengeId: 25, optionId: 11, correct: false }, // cat
      { challengeId: 25, optionId: 12, correct: false }, // house
      { challengeId: 25, optionId: 14, correct: false }, // tree

      // Question 6 - ASSIST "車" (car)
      { challengeId: 26, optionId: 13, correct: true }, // car
      { challengeId: 26, optionId: 11, correct: false }, // cat
      { challengeId: 26, optionId: 12, correct: false }, // house
      { challengeId: 26, optionId: 14, correct: false }, // tree

      // Question 7 - SELECT "木" (tree)
      { challengeId: 27, optionId: 14, correct: true }, // tree
      { challengeId: 27, optionId: 11, correct: false }, // cat
      { challengeId: 27, optionId: 12, correct: false }, // house
      { challengeId: 27, optionId: 13, correct: false }, // car

      // Question 8 - ASSIST "木" (tree)
      { challengeId: 28, optionId: 14, correct: true }, // tree
      { challengeId: 28, optionId: 11, correct: false }, // cat
      { challengeId: 28, optionId: 12, correct: false }, // house
      { challengeId: 28, optionId: 13, correct: false }, // car

      // Question 9 - SELECT "本" (book)
      { challengeId: 29, optionId: 15, correct: true }, // book
      { challengeId: 29, optionId: 11, correct: false }, // cat
      { challengeId: 29, optionId: 12, correct: false }, // house
      { challengeId: 29, optionId: 13, correct: false }, // car

      // Question 10 - ASSIST "本" (book)
      { challengeId: 30, optionId: 15, correct: true }, // book
      { challengeId: 30, optionId: 11, correct: false }, // cat
      { challengeId: 30, optionId: 12, correct: false }, // house
      { challengeId: 30, optionId: 13, correct: false }, // car
    ])

    console.log("Seed data inserted successfully for Unit 1, Lesson 3!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
