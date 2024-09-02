import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for German Unit 1, Lesson 3")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 58))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 58))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 58,
      unitId: 6, // German Unit 1, Lesson 3
      order: 3,
      title: "名詞 II",
    })

    // New words used in this lesson
    // die Katze (cat), das Haus (house), das Auto (car), der Baum (tree), das Buch (book)

    await db.insert(schema.challenges).values([
      { id: 771, lessonId: 58, type: "SELECT", order: 1, question: 'これらの言葉の中で「猫」を意味するのはどれ？' },
      { id: 772, lessonId: 58, type: "ASSIST", order: 2, question: '「猫」' },
      { id: 773, lessonId: 58, type: "SELECT", order: 3, question: 'これらの言葉の中で「家」を意味するのはどれ？' },
      { id: 774, lessonId: 58, type: "ASSIST", order: 4, question: '「家」' },
      { id: 775, lessonId: 58, type: "SELECT", order: 5, question: 'これらの言葉の中で「車」を意味するのはどれ？' },
      { id: 776, lessonId: 58, type: "ASSIST", order: 6, question: '「車」' },
      { id: 777, lessonId: 58, type: "SELECT", order: 7, question: 'これらの言葉の中で「木」を意味するのはどれ？' },
      { id: 778, lessonId: 58, type: "ASSIST", order: 8, question: '「木」' },
      { id: 779, lessonId: 58, type: "SELECT", order: 9, question: 'これらの言葉の中で「本」を意味するのはどれ？' },
      { id: 780, lessonId: 58, type: "ASSIST", order: 10, question: '「本」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "猫" (die Katze)
      { challengeId: 771, optionId: 1, correct: true }, // die Katze
      { challengeId: 771, optionId: 2, correct: false }, // das Haus
      { challengeId: 771, optionId: 3, correct: false }, // das Auto
      { challengeId: 771, optionId: 4, correct: false }, // der Baum

      // Question 2 - ASSIST "猫" (die Katze)
      { challengeId: 772, optionId: 1, correct: true }, // die Katze
      { challengeId: 772, optionId: 2, correct: false }, // das Haus
      { challengeId: 772, optionId: 3, correct: false }, // das Auto
      { challengeId: 772, optionId: 4, correct: false }, // der Baum

      // Question 3 - SELECT "家" (das Haus)
      { challengeId: 773, optionId: 2, correct: true }, // das Haus
      { challengeId: 773, optionId: 1, correct: false }, // die Katze
      { challengeId: 773, optionId: 3, correct: false }, // das Auto
      { challengeId: 773, optionId: 4, correct: false }, // der Baum

      // Question 4 - ASSIST "家" (das Haus)
      { challengeId: 774, optionId: 2, correct: true }, // das Haus
      { challengeId: 774, optionId: 1, correct: false }, // die Katze
      { challengeId: 774, optionId: 3, correct: false }, // das Auto
      { challengeId: 774, optionId: 4, correct: false }, // der Baum

      // Question 5 - SELECT "車" (das Auto)
      { challengeId: 775, optionId: 3, correct: true }, // das Auto
      { challengeId: 775, optionId: 1, correct: false }, // die Katze
      { challengeId: 775, optionId: 2, correct: false }, // das Haus
      { challengeId: 775, optionId: 4, correct: false }, // der Baum

      // Question 6 - ASSIST "車" (das Auto)
      { challengeId: 776, optionId: 3, correct: true }, // das Auto
      { challengeId: 776, optionId: 1, correct: false }, // die Katze
      { challengeId: 776, optionId: 2, correct: false }, // das Haus
      { challengeId: 776, optionId: 4, correct: false }, // der Baum

      // Question 7 - SELECT "木" (der Baum)
      { challengeId: 777, optionId: 4, correct: true }, // der Baum
      { challengeId: 777, optionId: 1, correct: false }, // die Katze
      { challengeId: 777, optionId: 2, correct: false }, // das Haus
      { challengeId: 777, optionId: 3, correct: false }, // das Auto

      // Question 8 - ASSIST "木" (der Baum)
      { challengeId: 778, optionId: 4, correct: true }, // der Baum
      { challengeId: 778, optionId: 1, correct: false }, // die Katze
      { challengeId: 778, optionId: 2, correct: false }, // das Haus
      { challengeId: 778, optionId: 3, correct: false }, // das Auto

      // Question 9 - SELECT "本" (das Buch)
      { challengeId: 779, optionId: 5, correct: true }, // das Buch
      { challengeId: 779, optionId: 1, correct: false }, // die Katze
      { challengeId: 779, optionId: 2, correct: false }, // das Haus
      { challengeId: 779, optionId: 3, correct: false }, // das Auto

      // Question 10 - ASSIST "本" (das Buch)
      { challengeId: 780, optionId: 5, correct: true }, // das Buch
      { challengeId: 780, optionId: 1, correct: false }, // die Katze
      { challengeId: 780, optionId: 2, correct: false }, // das Haus
      { challengeId: 780, optionId: 3, correct: false }, // das Auto
    ])

    console.log("Seed data inserted successfully for German Unit 1, Lesson 3!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
