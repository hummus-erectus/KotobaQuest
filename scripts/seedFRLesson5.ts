import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for French Unit 1, Lesson 5")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 115))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 115))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 115,
      unitId: 11, // French Unit 1, Lesson 5
      order: 5,
      title: "名詞 III",
    })

    // New words used in this lesson
    // la pomme (apple), la banane (banana), le pain (bread), l'eau (water), le lait (milk)

    await db.insert(schema.challenges).values([
      { id: 1541, lessonId: 115, type: "SELECT", order: 1, question: 'これらの言葉の中で「リンゴ」を意味するのはどれ？' },
      { id: 1542, lessonId: 115, type: "ASSIST", order: 2, question: '「リンゴ」' },
      { id: 1543, lessonId: 115, type: "SELECT", order: 3, question: 'これらの言葉の中で「バナナ」を意味するのはどれ？' },
      { id: 1544, lessonId: 115, type: "ASSIST", order: 4, question: '「バナナ」' },
      { id: 1545, lessonId: 115, type: "SELECT", order: 5, question: 'これらの言葉の中で「パン」を意味するのはどれ？' },
      { id: 1546, lessonId: 115, type: "ASSIST", order: 6, question: '「パン」' },
      { id: 1547, lessonId: 115, type: "SELECT", order: 7, question: 'これらの言葉の中で「水」を意味するのはどれ？' },
      { id: 1548, lessonId: 115, type: "ASSIST", order: 8, question: '「水」' },
      { id: 1549, lessonId: 115, type: "SELECT", order: 9, question: 'これらの言葉の中で「牛乳」を意味するのはどれ？' },
      { id: 1550, lessonId: 115, type: "ASSIST", order: 10, question: '「牛乳」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "リンゴ" (la pomme)
      { challengeId: 1541, optionId: 521, correct: true }, // la pomme
      { challengeId: 1541, optionId: 522, correct: false }, // la banane
      { challengeId: 1541, optionId: 523, correct: false }, // le pain
      { challengeId: 1541, optionId: 524, correct: false }, // l'eau

      // Question 2 - ASSIST "リンゴ" (la pomme)
      { challengeId: 1542, optionId: 521, correct: true }, // la pomme
      { challengeId: 1542, optionId: 522, correct: false }, // la banane
      { challengeId: 1542, optionId: 523, correct: false }, // le pain
      { challengeId: 1542, optionId: 524, correct: false }, // l'eau

      // Question 3 - SELECT "バナナ" (la banane)
      { challengeId: 1543, optionId: 522, correct: true }, // la banane
      { challengeId: 1543, optionId: 521, correct: false }, // la pomme
      { challengeId: 1543, optionId: 523, correct: false }, // le pain
      { challengeId: 1543, optionId: 524, correct: false }, // l'eau

      // Question 4 - ASSIST "バナナ" (la banane)
      { challengeId: 1544, optionId: 522, correct: true }, // la banane
      { challengeId: 1544, optionId: 521, correct: false }, // la pomme
      { challengeId: 1544, optionId: 523, correct: false }, // le pain
      { challengeId: 1544, optionId: 524, correct: false }, // l'eau

      // Question 5 - SELECT "パン" (le pain)
      { challengeId: 1545, optionId: 523, correct: true }, // le pain
      { challengeId: 1545, optionId: 521, correct: false }, // la pomme
      { challengeId: 1545, optionId: 522, correct: false }, // la banane
      { challengeId: 1545, optionId: 524, correct: false }, // l'eau

      // Question 6 - ASSIST "パン" (le pain)
      { challengeId: 1546, optionId: 523, correct: true }, // le pain
      { challengeId: 1546, optionId: 521, correct: false }, // la pomme
      { challengeId: 1546, optionId: 522, correct: false }, // la banane
      { challengeId: 1546, optionId: 524, correct: false }, // l'eau

      // Question 7 - SELECT "水" (l'eau)
      { challengeId: 1547, optionId: 524, correct: true }, // l'eau
      { challengeId: 1547, optionId: 521, correct: false }, // la pomme
      { challengeId: 1547, optionId: 522, correct: false }, // la banane
      { challengeId: 1547, optionId: 523, correct: false }, // le pain

      // Question 8 - ASSIST "水" (l'eau)
      { challengeId: 1548, optionId: 524, correct: true }, // l'eau
      { challengeId: 1548, optionId: 521, correct: false }, // la pomme
      { challengeId: 1548, optionId: 522, correct: false }, // la banane
      { challengeId: 1548, optionId: 523, correct: false }, // le pain

      // Question 9 - SELECT "牛乳" (le lait)
      { challengeId: 1549, optionId: 525, correct: true }, // le lait
      { challengeId: 1549, optionId: 521, correct: false }, // la pomme
      { challengeId: 1549, optionId: 522, correct: false }, // la banane
      { challengeId: 1549, optionId: 523, correct: false }, // le pain

      // Question 10 - ASSIST "牛乳" (le lait)
      { challengeId: 1550, optionId: 525, correct: true }, // le lait
      { challengeId: 1550, optionId: 521, correct: false }, // la pomme
      { challengeId: 1550, optionId: 522, correct: false }, // la banane
      { challengeId: 1550, optionId: 523, correct: false }, // le pain
    ])

    console.log("Seed data inserted successfully for French Unit 1, Lesson 5!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
