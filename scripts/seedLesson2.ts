import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"
import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 2))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 2))
    // await db.delete(schema.challengeOptions).where(eq(schema.challengeOptions.challengeId, 11 || 12 || 13 || 14 || 15 || 16 || 17 || 18 || 19 || 20))

    await db.insert(schema.lessons).values([
      {
        id: 2,
        unitId: 1, // Unit 1, Lesson 2
        order: 2,
        title: "動詞 I",
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 11,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'これらの言葉の中で「歩く」を意味するのはどれ？',
      },
      {
        id: 12,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: '「歩く」',
      },
      {
        id: 13,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: 'これらの言葉の中で「走る」を意味するのはどれ？',
      },
      {
        id: 14,
        lessonId: 2,
        type: "ASSIST",
        order: 4,
        question: '「走る」',
      },
      {
        id: 15,
        lessonId: 2,
        type: "SELECT",
        order: 5,
        question: 'これらの言葉の中で「食べる」を意味するのはどれ？',
      },
      {
        id: 16,
        lessonId: 2,
        type: "ASSIST",
        order: 6,
        question: '「食べる」',
      },
      {
        id: 17,
        lessonId: 2,
        type: "SELECT",
        order: 7,
        question: 'これらの言葉の中で「飲む」を意味するのはどれ？',
      },
      {
        id: 18,
        lessonId: 2,
        type: "ASSIST",
        order: 8,
        question: '「飲む」',
      },
      {
        id: 19,
        lessonId: 2,
        type: "SELECT",
        order: 9,
        question: 'これらの言葉の中で「寝る」を意味するのはどれ？',
      },
      {
        id: 20,
        lessonId: 2,
        type: "ASSIST",
        order: 10,
        question: '「寝る」',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - 歩く (walk)
      {
        challengeId: 11,
        imageSrc: "/walk.svg",
        correct: true,
        text: "walk",
        audioSrc: "/en_walk.mp3",
      },
      {
        challengeId: 11,
        imageSrc: "/run.svg",
        correct: false,
        text: "run",
        audioSrc: "/en_run.mp3",
      },
      {
        challengeId: 11,
        imageSrc: "/eat.svg",
        correct: false,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },
      {
        challengeId: 11,
        imageSrc: "/drink.svg",
        correct: false,
        text: "drink",
        audioSrc: "/en_drink.mp3",
      },

      // Question 2 - 歩く (walk) ASSIST
      {
        challengeId: 12,
        correct: true,
        text: "walk",
        audioSrc: "/en_walk.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "run",
        audioSrc: "/en_run.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "drink",
        audioSrc: "/en_drink.mp3",
      },

      // Question 3 - 走る (run)
      {
        challengeId: 13,
        imageSrc: "/run.svg",
        correct: true,
        text: "run",
        audioSrc: "/en_run.mp3",
      },
      {
        challengeId: 13,
        imageSrc: "/walk.svg",
        correct: false,
        text: "walk",
        audioSrc: "/en_walk.mp3",
      },
      {
        challengeId: 13,
        imageSrc: "/eat.svg",
        correct: false,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },
      {
        challengeId: 13,
        imageSrc: "/drink.svg",
        correct: false,
        text: "drink",
        audioSrc: "/en_drink.mp3",
      },

      // Question 4 - 走る (run) ASSIST
      {
        challengeId: 14,
        correct: true,
        text: "run",
        audioSrc: "/en_run.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "walk",
        audioSrc: "/en_walk.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "drink",
        audioSrc: "/en_drink.mp3",
      },

      // Question 5 - 食べる (eat)
      {
        challengeId: 15,
        imageSrc: "/eat.svg",
        correct: true,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },
      {
        challengeId: 15,
        imageSrc: "/walk.svg",
        correct: false,
        text: "walk",
        audioSrc: "/en_walk.mp3",
      },
      {
        challengeId: 15,
        imageSrc: "/run.svg",
        correct: false,
        text: "run",
        audioSrc: "/en_run.mp3",
      },
      {
        challengeId: 15,
        imageSrc: "/drink.svg",
        correct: false,
        text: "drink",
        audioSrc: "/en_drink.mp3",
      },

      // Question 6 - 食べる (eat) ASSIST
      {
        challengeId: 16,
        correct: true,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },
      {
        challengeId: 16,
        correct: false,
        text: "walk",
        audioSrc: "/en_walk.mp3",
      },
      {
        challengeId: 16,
        correct: false,
        text: "run",
        audioSrc: "/en_run.mp3",
      },
      {
        challengeId: 16,
        correct: false,
        text: "drink",
        audioSrc: "/en_drink.mp3",
      },

      // Question 7 - 飲む (drink)
      {
        challengeId: 17,
        imageSrc: "/drink.svg",
        correct: true,
        text: "drink",
        audioSrc: "/en_drink.mp3",
      },
      {
        challengeId: 17,
        imageSrc: "/walk.svg",
        correct: false,
        text: "walk",
        audioSrc: "/en_walk.mp3",
      },
      {
        challengeId: 17,
        imageSrc: "/run.svg",
        correct: false,
        text: "run",
        audioSrc: "/en_run.mp3",
      },
      {
        challengeId: 17,
        imageSrc: "/eat.svg",
        correct: false,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },

      // Question 8 - 飲む (drink) ASSIST
      {
        challengeId: 18,
        correct: true,
        text: "drink",
        audioSrc: "/en_drink.mp3",
      },
      {
        challengeId: 18,
        correct: false,
        text: "walk",
        audioSrc: "/en_walk.mp3",
      },
      {
        challengeId: 18,
        correct: false,
        text: "run",
        audioSrc: "/en_run.mp3",
      },
      {
        challengeId: 18,
        correct: false,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },

      // Question 9 - 寝る (sleep)
      {
        challengeId: 19,
        imageSrc: "/sleep.svg",
        correct: true,
        text: "sleep",
        audioSrc: "/en_sleep.mp3",
      },
      {
        challengeId: 19,
        imageSrc: "/walk.svg",
        correct: false,
        text: "walk",
        audioSrc: "/en_walk.mp3",
      },
      {
        challengeId: 19,
        imageSrc: "/run.svg",
        correct: false,
        text: "run",
        audioSrc: "/en_run.mp3",
      },
      {
        challengeId: 19,
        imageSrc: "/eat.svg",
        correct: false,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },

      // Question 10 - 寝る (sleep) ASSIST
      {
        challengeId: 20,
        correct: true,
        text: "sleep",
        audioSrc: "/en_sleep.mp3",
      },
      {
        challengeId: 20,
        correct: false,
        text: "walk",
        audioSrc: "/en_walk.mp3",
      },
      {
        challengeId: 20,
        correct: false,
        text: "run",
        audioSrc: "/en_run.mp3",
      },
      {
        challengeId: 20,
        correct: false,
        text: "eat",
        audioSrc: "/en_eat.mp3",
      },
    ])

    console.log("Seed data inserted successfully for Unit 1, Lesson 2!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
