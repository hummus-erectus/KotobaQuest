import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for German Unit 1, Lesson 5")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 60))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 60))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 60,
      unitId: 6, // German Unit 1, Lesson 5
      order: 5,
      title: "名詞 III",
    })

    // New words used in this lesson
    // der Apfel (apple), die Banane (banana), das Brot (bread), das Wasser (water), die Milch (milk)

    await db.insert(schema.challenges).values([
      { id: 811, lessonId: 60, type: "SELECT", order: 1, question: 'これらの言葉の中で「リンゴ」を意味するのはどれ？' },
      { id: 812, lessonId: 60, type: "ASSIST", order: 2, question: '「リンゴ」' },
      { id: 813, lessonId: 60, type: "SELECT", order: 3, question: 'これらの言葉の中で「バナナ」を意味するのはどれ？' },
      { id: 814, lessonId: 60, type: "ASSIST", order: 4, question: '「バナナ」' },
      { id: 815, lessonId: 60, type: "SELECT", order: 5, question: 'これらの言葉の中で「パン」を意味するのはどれ？' },
      { id: 816, lessonId: 60, type: "ASSIST", order: 6, question: '「パン」' },
      { id: 817, lessonId: 60, type: "SELECT", order: 7, question: 'これらの言葉の中で「水」を意味するのはどれ？' },
      { id: 818, lessonId: 60, type: "ASSIST", order: 8, question: '「水」' },
      { id: 819, lessonId: 60, type: "SELECT", order: 9, question: 'これらの言葉の中で「ミルク」を意味するのはどれ？' },
      { id: 820, lessonId: 60, type: "ASSIST", order: 10, question: '「ミルク」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "リンゴ" (der Apfel)
      { challengeId: 811, optionId: 271, correct: true }, // der Apfel
      { challengeId: 811, optionId: 272, correct: false }, // die Banane
      { challengeId: 811, optionId: 273, correct: false }, // das Brot
      { challengeId: 811, optionId: 274, correct: false }, // das Wasser

      // Question 2 - ASSIST "リンゴ" (der Apfel)
      { challengeId: 812, optionId: 271, correct: true }, // der Apfel
      { challengeId: 812, optionId: 272, correct: false }, // die Banane
      { challengeId: 812, optionId: 273, correct: false }, // das Brot
      { challengeId: 812, optionId: 274, correct: false }, // das Wasser

      // Question 3 - SELECT "バナナ" (die Banane)
      { challengeId: 813, optionId: 272, correct: true }, // die Banane
      { challengeId: 813, optionId: 271, correct: false }, // der Apfel
      { challengeId: 813, optionId: 273, correct: false }, // das Brot
      { challengeId: 813, optionId: 274, correct: false }, // das Wasser

      // Question 4 - ASSIST "バナナ" (die Banane)
      { challengeId: 814, optionId: 272, correct: true }, // die Banane
      { challengeId: 814, optionId: 271, correct: false }, // der Apfel
      { challengeId: 814, optionId: 273, correct: false }, // das Brot
      { challengeId: 814, optionId: 274, correct: false }, // das Wasser

      // Question 5 - SELECT "パン" (das Brot)
      { challengeId: 815, optionId: 273, correct: true }, // das Brot
      { challengeId: 815, optionId: 271, correct: false }, // der Apfel
      { challengeId: 815, optionId: 272, correct: false }, // die Banane
      { challengeId: 815, optionId: 274, correct: false }, // das Wasser

      // Question 6 - ASSIST "パン" (das Brot)
      { challengeId: 816, optionId: 273, correct: true }, // das Brot
      { challengeId: 816, optionId: 271, correct: false }, // der Apfel
      { challengeId: 816, optionId: 272, correct: false }, // die Banane
      { challengeId: 816, optionId: 274, correct: false }, // das Wasser

      // Question 7 - SELECT "水" (das Wasser)
      { challengeId: 817, optionId: 274, correct: true }, // das Wasser
      { challengeId: 817, optionId: 271, correct: false }, // der Apfel
      { challengeId: 817, optionId: 272, correct: false }, // die Banane
      { challengeId: 817, optionId: 273, correct: false }, // das Brot

      // Question 8 - ASSIST "水" (das Wasser)
      { challengeId: 818, optionId: 274, correct: true }, // das Wasser
      { challengeId: 818, optionId: 271, correct: false }, // der Apfel
      { challengeId: 818, optionId: 272, correct: false }, // die Banane
      { challengeId: 818, optionId: 273, correct: false }, // das Brot

      // Question 9 - SELECT "ミルク" (die Milch)
      { challengeId: 819, optionId: 275, correct: true }, // die Milch
      { challengeId: 819, optionId: 271, correct: false }, // der Apfel
      { challengeId: 819, optionId: 272, correct: false }, // die Banane
      { challengeId: 819, optionId: 273, correct: false }, // das Brot

      // Question 10 - ASSIST "ミルク" (die Milch)
      { challengeId: 820, optionId: 275, correct: true }, // die Milch
      { challengeId: 820, optionId: 271, correct: false }, // der Apfel
      { challengeId: 820, optionId: 272, correct: false }, // die Banane
      { challengeId: 820, optionId: 273, correct: false }, // das Brot
    ])

    console.log("Seed data inserted successfully for German Unit 1, Lesson 5!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
