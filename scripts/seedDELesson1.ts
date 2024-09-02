import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for German Unit 1, Lesson 1")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 66))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 66))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 66,
      unitId: 6, // German Unit 1, Lesson 1
      order: 1,
      title: "名詞 I",
    })

    // New words used in this lesson
    // der Man (man), die Frau (woman), das Mädchen

    await db.insert(schema.challenges).values([
      { id: 751, lessonId: 66, type: "SELECT", order: 1, question: 'これらの言葉の中で「男の人」を意味するのはどれ？' },
      { id: 752, lessonId: 66, type: "ASSIST", order: 2, question: '「男の人」' },
      { id: 753, lessonId: 66, type: "SELECT", order: 3, question: 'これらの言葉の中で「女の人」を意味するのはどれ？' },
      { id: 754, lessonId: 66, type: "ASSIST", order: 4, question: '「女の人」' },
      { id: 755, lessonId: 66, type: "SELECT", order: 5, question: 'これらの言葉の中で「女の子」を意味するのはどれ？' },
      { id: 756, lessonId: 66, type: "ASSIST", order: 6, question: '「女の子」' },
      { id: 757, lessonId: 66, type: "SELECT", order: 7, question: 'これらの言葉の中で「男の子」を意味するのはどれ？' },
      { id: 758, lessonId: 66, type: "ASSIST", order: 8, question: '「男の子」' },
      { id: 759, lessonId: 66, type: "SELECT", order: 9, question: 'これらの言葉の中で「犬」を意味するのはどれ？' },
      { id: 760, lessonId: 66, type: "ASSIST", order: 10, question: '「犬」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "男の人" (der Mann)
      { challengeId: 751, optionId: 1, correct: true }, // der Mann
      { challengeId: 751, optionId: 2, correct: false }, // die Frau
      { challengeId: 751, optionId: 3, correct: false }, // das Mädchen
      { challengeId: 751, optionId: 4, correct: false }, // der Junge

      // Question 2 - ASSIST "男の人" (der Mann)
      { challengeId: 752, optionId: 1, correct: true }, // der Mann
      { challengeId: 752, optionId: 2, correct: false }, // die Frau
      { challengeId: 752, optionId: 3, correct: false }, // das Mädchen
      { challengeId: 752, optionId: 4, correct: false }, // der Junge

      // Question 3 - SELECT "女の人" (die Frau)
      { challengeId: 753, optionId: 2, correct: true }, // die Frau
      { challengeId: 753, optionId: 1, correct: false }, // der Mann
      { challengeId: 753, optionId: 3, correct: false }, // das Mädchen
      { challengeId: 753, optionId: 4, correct: false }, // der Junge

      // Question 4 - ASSIST "女の人" (die Frau)
      { challengeId: 754, optionId: 2, correct: true }, // die Frau
      { challengeId: 754, optionId: 1, correct: false }, // der Mann
      { challengeId: 754, optionId: 3, correct: false }, // das Mädchen
      { challengeId: 754, optionId: 4, correct: false }, // der Junge

      // Question 5 - SELECT "女の子" (das Mädchen)
      { challengeId: 755, optionId: 3, correct: true }, // das Mädchen
      { challengeId: 755, optionId: 1, correct: false }, // der Mann
      { challengeId: 755, optionId: 2, correct: false }, // die Frau
      { challengeId: 755, optionId: 4, correct: false }, // der Junge

      // Question 6 - ASSIST "女の子" (das Mädchen)
      { challengeId: 756, optionId: 3, correct: true }, // das Mädchen
      { challengeId: 756, optionId: 1, correct: false }, // der Mann
      { challengeId: 756, optionId: 2, correct: false }, // die Frau
      { challengeId: 756, optionId: 4, correct: false }, // der Junge

      // Question 7 - SELECT "男の子" (der Junge)
      { challengeId: 757, optionId: 4, correct: true }, // der Junge
      { challengeId: 757, optionId: 1, correct: false }, // der Mann
      { challengeId: 757, optionId: 2, correct: false }, // die Frau
      { challengeId: 757, optionId: 5, correct: false }, // der Hund

      // Question 8 - ASSIST "男の子" (der Junge)
      { challengeId: 758, optionId: 4, correct: true }, // der Junge
      { challengeId: 758, optionId: 1, correct: false }, // der Mann
      { challengeId: 758, optionId: 2, correct: false }, // die Frau
      { challengeId: 758, optionId: 5, correct: false }, // der Hund

      // Question 9 - SELECT "犬" (der Hund)
      { challengeId: 759, optionId: 5, correct: true }, // der Hund
      { challengeId: 759, optionId: 1, correct: false }, // der Mann
      { challengeId: 759, optionId: 2, correct: false }, // die Frau
      { challengeId: 759, optionId: 4, correct: false }, // der Junge

      // Question 10 - ASSIST "犬" (der Hund)
      { challengeId: 760, optionId: 5, correct: true }, // der Hund
      { challengeId: 760, optionId: 1, correct: false }, // der Mann
      { challengeId: 760, optionId: 2, correct: false }, // die Frau
      { challengeId: 760, optionId: 4, correct: false }, // der Junge

    ])

    console.log("Seed data inserted successfully for German Unit 1, Lesson 1!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
