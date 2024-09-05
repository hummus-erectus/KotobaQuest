import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for French Unit 1, Lesson 3")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 113))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 113))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 113,
      unitId: 11, // French Unit 1, Lesson 3
      order: 3,
      title: "名詞 II",
    })

    // New words used in this lesson
    // le chat (the cat), la maison (the house), la voiture (the car), l'arbre (the tree), le livre (the book)

    await db.insert(schema.challenges).values([
      { id: 1521, lessonId: 113, type: "SELECT", order: 1, question: 'これらの言葉の中で「猫」を意味するのはどれ？' },
      { id: 1522, lessonId: 113, type: "ASSIST", order: 2, question: '「猫」' },
      { id: 1523, lessonId: 113, type: "SELECT", order: 3, question: 'これらの言葉の中で「家」を意味するのはどれ？' },
      { id: 1524, lessonId: 113, type: "ASSIST", order: 4, question: '「家」' },
      { id: 1525, lessonId: 113, type: "SELECT", order: 5, question: 'これらの言葉の中で「車」を意味するのはどれ？' },
      { id: 1526, lessonId: 113, type: "ASSIST", order: 6, question: '「車」' },
      { id: 1527, lessonId: 113, type: "SELECT", order: 7, question: 'これらの言葉の中で「木」を意味するのはどれ？' },
      { id: 1528, lessonId: 113, type: "ASSIST", order: 8, question: '「木」' },
      { id: 1529, lessonId: 113, type: "SELECT", order: 9, question: 'これらの言葉の中で「本」を意味するのはどれ？' },
      { id: 1530, lessonId: 113, type: "ASSIST", order: 10, question: '「本」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "猫" (le chat)
      { challengeId: 1521, optionId: 511, correct: true }, // le chat
      { challengeId: 1521, optionId: 512, correct: false }, // la maison
      { challengeId: 1521, optionId: 513, correct: false }, // la voiture
      { challengeId: 1521, optionId: 514, correct: false }, // l'arbre

      // Question 2 - ASSIST "猫" (le chat)
      { challengeId: 1522, optionId: 511, correct: true }, // le chat
      { challengeId: 1522, optionId: 512, correct: false }, // la maison
      { challengeId: 1522, optionId: 513, correct: false }, // la voiture
      { challengeId: 1522, optionId: 514, correct: false }, // l'arbre

      // Question 3 - SELECT "家" (la maison)
      { challengeId: 1523, optionId: 512, correct: true }, // la maison
      { challengeId: 1523, optionId: 511, correct: false }, // le chat
      { challengeId: 1523, optionId: 513, correct: false }, // la voiture
      { challengeId: 1523, optionId: 514, correct: false }, // l'arbre

      // Question 4 - ASSIST "家" (la maison)
      { challengeId: 1524, optionId: 512, correct: true }, // la maison
      { challengeId: 1524, optionId: 511, correct: false }, // le chat
      { challengeId: 1524, optionId: 513, correct: false }, // la voiture
      { challengeId: 1524, optionId: 514, correct: false }, // l'arbre

      // Question 5 - SELECT "車" (la voiture)
      { challengeId: 1525, optionId: 513, correct: true }, // la voiture
      { challengeId: 1525, optionId: 511, correct: false }, // le chat
      { challengeId: 1525, optionId: 512, correct: false }, // la maison
      { challengeId: 1525, optionId: 514, correct: false }, // l'arbre

      // Question 6 - ASSIST "車" (la voiture)
      { challengeId: 1526, optionId: 513, correct: true }, // la voiture
      { challengeId: 1526, optionId: 511, correct: false }, // le chat
      { challengeId: 1526, optionId: 512, correct: false }, // la maison
      { challengeId: 1526, optionId: 514, correct: false }, // l'arbre

      // Question 7 - SELECT "木" (l'arbre)
      { challengeId: 1527, optionId: 514, correct: true }, // l'arbre
      { challengeId: 1527, optionId: 511, correct: false }, // le chat
      { challengeId: 1527, optionId: 512, correct: false }, // la maison
      { challengeId: 1527, optionId: 513, correct: false }, // la voiture

      // Question 8 - ASSIST "木" (l'arbre)
      { challengeId: 1528, optionId: 514, correct: true }, // l'arbre
      { challengeId: 1528, optionId: 511, correct: false }, // le chat
      { challengeId: 1528, optionId: 512, correct: false }, // la maison
      { challengeId: 1528, optionId: 513, correct: false }, // la voiture

      // Question 9 - SELECT "本" (le livre)
      { challengeId: 1529, optionId: 515, correct: true }, // le livre
      { challengeId: 1529, optionId: 511, correct: false }, // le chat
      { challengeId: 1529, optionId: 512, correct: false }, // la maison
      { challengeId: 1529, optionId: 514, correct: false }, // l'arbre

      // Question 10 - ASSIST "本" (le livre)
      { challengeId: 1530, optionId: 515, correct: true }, // le livre
      { challengeId: 1530, optionId: 511, correct: false }, // le chat
      { challengeId: 1530, optionId: 512, correct: false }, // la maison
      { challengeId: 1530, optionId: 514, correct: false }, // l'arbre
    ])

    console.log("Seed data inserted successfully for French Unit 1, Lesson 3!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
