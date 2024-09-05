import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for French Unit 1, Lesson 1")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 111))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 111))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 111,
      unitId: 11, // French Unit 1, Lesson 1
      order: 1,
      title: "名詞 I",
    })

    // New words used in this lesson
    // l'homme (man), la femme (woman), la fille (girl), le garçon (boy), le chien (dog)

    await db.insert(schema.challenges).values([
      { id: 1501, lessonId: 111, type: "SELECT", order: 1, question: 'これらの言葉の中で「男の人」を意味するのはどれ？' },
      { id: 1502, lessonId: 111, type: "ASSIST", order: 2, question: '「男の人」' },
      { id: 1503, lessonId: 111, type: "SELECT", order: 3, question: 'これらの言葉の中で「女の人」を意味するのはどれ？' },
      { id: 1504, lessonId: 111, type: "ASSIST", order: 4, question: '「女の人」' },
      { id: 1505, lessonId: 111, type: "SELECT", order: 5, question: 'これらの言葉の中で「女の子」を意味するのはどれ？' },
      { id: 1506, lessonId: 111, type: "ASSIST", order: 6, question: '「女の子」' },
      { id: 1507, lessonId: 111, type: "SELECT", order: 7, question: 'これらの言葉の中で「男の子」を意味するのはどれ？' },
      { id: 1508, lessonId: 111, type: "ASSIST", order: 8, question: '「男の子」' },
      { id: 1509, lessonId: 111, type: "SELECT", order: 9, question: 'これらの言葉の中で「犬」を意味するのはどれ？' },
      { id: 1510, lessonId: 111, type: "ASSIST", order: 10, question: '「犬」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "男の人" (l'homme)
      { challengeId: 1501, optionId: 501, correct: true }, // l'homme
      { challengeId: 1501, optionId: 502, correct: false }, // la femme
      { challengeId: 1501, optionId: 503, correct: false }, // la fille
      { challengeId: 1501, optionId: 504, correct: false }, // le garçon

      // Question 2 - ASSIST "男の人" (l'homme)
      { challengeId: 1502, optionId: 501, correct: true }, // l'homme
      { challengeId: 1502, optionId: 502, correct: false }, // la femme
      { challengeId: 1502, optionId: 503, correct: false }, // la fille
      { challengeId: 1502, optionId: 504, correct: false }, // le garçon

      // Question 3 - SELECT "女の人" (la femme)
      { challengeId: 1503, optionId: 502, correct: true }, // la femme
      { challengeId: 1503, optionId: 501, correct: false }, // l'homme
      { challengeId: 1503, optionId: 503, correct: false }, // la fille
      { challengeId: 1503, optionId: 504, correct: false }, // le garçon

      // Question 4 - ASSIST "女の人" (la femme)
      { challengeId: 1504, optionId: 502, correct: true }, // la femme
      { challengeId: 1504, optionId: 501, correct: false }, // l'homme
      { challengeId: 1504, optionId: 503, correct: false }, // la fille
      { challengeId: 1504, optionId: 504, correct: false }, // le garçon

      // Question 5 - SELECT "女の子" (la fille)
      { challengeId: 1505, optionId: 503, correct: true }, // la fille
      { challengeId: 1505, optionId: 501, correct: false }, // l'homme
      { challengeId: 1505, optionId: 502, correct: false }, // la femme
      { challengeId: 1505, optionId: 504, correct: false }, // le garçon

      // Question 6 - ASSIST "女の子" (la fille)
      { challengeId: 1506, optionId: 503, correct: true }, // la fille
      { challengeId: 1506, optionId: 501, correct: false }, // l'homme
      { challengeId: 1506, optionId: 502, correct: false }, // la femme
      { challengeId: 1506, optionId: 504, correct: false }, // le garçon

      // Question 7 - SELECT "男の子" (le garçon)
      { challengeId: 1507, optionId: 504, correct: true }, // le garçon
      { challengeId: 1507, optionId: 501, correct: false }, // l'homme
      { challengeId: 1507, optionId: 502, correct: false }, // la femme
      { challengeId: 1507, optionId: 505, correct: false }, // le chien

      // Question 8 - ASSIST "男の子" (le garçon)
      { challengeId: 1508, optionId: 504, correct: true }, // le garçon
      { challengeId: 1508, optionId: 501, correct: false }, // l'homme
      { challengeId: 1508, optionId: 502, correct: false }, // la femme
      { challengeId: 1508, optionId: 505, correct: false }, // le chien

      // Question 9 - SELECT "犬" (le chien)
      { challengeId: 1509, optionId: 505, correct: true }, // le chien
      { challengeId: 1509, optionId: 501, correct: false }, // l'homme
      { challengeId: 1509, optionId: 502, correct: false }, // la femme
      { challengeId: 1509, optionId: 504, correct: false }, // le garçon

      // Question 10 - ASSIST "犬" (le chien)
      { challengeId: 1510, optionId: 505, correct: true }, // le chien
      { challengeId: 1510, optionId: 501, correct: false }, // l'homme
      { challengeId: 1510, optionId: 502, correct: false }, // la femme
      { challengeId: 1510, optionId: 504, correct: false }, // le garçon
    ])

    console.log("Seed data inserted successfully for French Unit 1, Lesson 1!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
