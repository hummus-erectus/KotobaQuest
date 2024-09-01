import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"
import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for German Unit 1, Lesson 2")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 67))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 67))

    await db.insert(schema.lessons).values([
      {
        id: 67,
        unitId: 6, // German Unit 1, Lesson 2
        order: 2,
        title: "動詞 I",
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 761,
        lessonId: 67,
        type: "SELECT",
        order: 1,
        question: 'これらの言葉の中で「歩く」を意味するのはどれ？',
      },
      {
        id: 762,
        lessonId: 67,
        type: "ASSIST",
        order: 2,
        question: '「歩く」',
      },
      {
        id: 763,
        lessonId: 67,
        type: "SELECT",
        order: 3,
        question: 'これらの言葉の中で「走る」を意味するのはどれ？',
      },
      {
        id: 764,
        lessonId: 67,
        type: "ASSIST",
        order: 4,
        question: '「走る」',
      },
      {
        id: 765,
        lessonId: 67,
        type: "SELECT",
        order: 5,
        question: 'これらの言葉の中で「食べる」を意味するのはどれ？',
      },
      {
        id: 766,
        lessonId: 67,
        type: "ASSIST",
        order: 6,
        question: '「食べる」',
      },
      {
        id: 767,
        lessonId: 67,
        type: "SELECT",
        order: 7,
        question: 'これらの言葉の中で「飲む」を意味するのはどれ？',
      },
      {
        id: 768,
        lessonId: 67,
        type: "ASSIST",
        order: 8,
        question: '「飲む」',
      },
      {
        id: 769,
        lessonId: 67,
        type: "SELECT",
        order: 9,
        question: 'これらの言葉の中で「寝る」を意味するのはどれ？',
      },
      {
        id: 770,
        lessonId: 67,
        type: "ASSIST",
        order: 10,
        question: '「寝る」',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - 歩く (walk)
      {
        challengeId: 761,
        imageSrc: "/walk.svg",
        correct: true,
        text: "gehen",
        audioSrc: "/audio/de/de_walk.mp3",
      },
      {
        challengeId: 761,
        imageSrc: "/run.svg",
        correct: false,
        text: "laufen",
        audioSrc: "/audio/de/de_run.mp3",
      },
      {
        challengeId: 761,
        imageSrc: "/eat.svg",
        correct: false,
        text: "essen",
        audioSrc: "/audio/de/de_eat.mp3",
      },
      {
        challengeId: 761,
        imageSrc: "/drink.svg",
        correct: false,
        text: "trinken",
        audioSrc: "/audio/de/de_drink.mp3",
      },

      // Question 2 - 歩く (walk) ASSIST
      {
        challengeId: 762,
        correct: true,
        text: "gehen",
        audioSrc: "/audio/de/de_walk.mp3",
      },
      {
        challengeId: 762,
        correct: false,
        text: "laufen",
        audioSrc: "/audio/de/de_run.mp3",
      },
      {
        challengeId: 762,
        correct: false,
        text: "essen",
        audioSrc: "/audio/de/de_eat.mp3",
      },
      {
        challengeId: 762,
        correct: false,
        text: "trinken",
        audioSrc: "/audio/de/de_drink.mp3",
      },

      // Question 3 - 走る (run)
      {
        challengeId: 763,
        imageSrc: "/run.svg",
        correct: true,
        text: "laufen",
        audioSrc: "/audio/de/de_run.mp3",
      },
      {
        challengeId: 763,
        imageSrc: "/walk.svg",
        correct: false,
        text: "gehen",
        audioSrc: "/audio/de/de_walk.mp3",
      },
      {
        challengeId: 763,
        imageSrc: "/eat.svg",
        correct: false,
        text: "essen",
        audioSrc: "/audio/de/de_eat.mp3",
      },
      {
        challengeId: 763,
        imageSrc: "/drink.svg",
        correct: false,
        text: "trinken",
        audioSrc: "/audio/de/de_drink.mp3",
      },

      // Question 4 - 走る (run) ASSIST
      {
        challengeId: 764,
        correct: true,
        text: "laufen",
        audioSrc: "/audio/de/de_run.mp3",
      },
      {
        challengeId: 764,
        correct: false,
        text: "gehen",
        audioSrc: "/audio/de/de_walk.mp3",
      },
      {
        challengeId: 764,
        correct: false,
        text: "essen",
        audioSrc: "/audio/de/de_eat.mp3",
      },
      {
        challengeId: 764,
        correct: false,
        text: "trinken",
        audioSrc: "/audio/de/de_drink.mp3",
      },

      // Question 5 - 食べる (eat)
      {
        challengeId: 765,
        imageSrc: "/eat.svg",
        correct: true,
        text: "essen",
        audioSrc: "/audio/de/de_eat.mp3",
      },
      {
        challengeId: 765,
        imageSrc: "/walk.svg",
        correct: false,
        text: "gehen",
        audioSrc: "/audio/de/de_walk.mp3",
      },
      {
        challengeId: 765,
        imageSrc: "/run.svg",
        correct: false,
        text: "laufen",
        audioSrc: "/audio/de/de_run.mp3",
      },
      {
        challengeId: 765,
        imageSrc: "/drink.svg",
        correct: false,
        text: "trinken",
        audioSrc: "/audio/de/de_drink.mp3",
      },

      // Question 6 - 食べる (eat) ASSIST
      {
        challengeId: 766,
        correct: true,
        text: "essen",
        audioSrc: "/audio/de/de_eat.mp3",
      },
      {
        challengeId: 766,
        correct: false,
        text: "gehen",
        audioSrc: "/audio/de/de_walk.mp3",
      },
      {
        challengeId: 766,
        correct: false,
        text: "laufen",
        audioSrc: "/audio/de/de_run.mp3",
      },
      {
        challengeId: 766,
        correct: false,
        text: "trinken",
        audioSrc: "/audio/de/de_drink.mp3",
      },

      // Question 7 - 飲む (drink)
      {
        challengeId: 767,
        imageSrc: "/drink.svg",
        correct: true,
        text: "trinken",
        audioSrc: "/audio/de/de_drink.mp3",
      },
      {
        challengeId: 767,
        imageSrc: "/walk.svg",
        correct: false,
        text: "gehen",
        audioSrc: "/audio/de/de_walk.mp3",
      },
      {
        challengeId: 767,
        imageSrc: "/run.svg",
        correct: false,
        text: "laufen",
        audioSrc: "/audio/de/de_run.mp3",
      },
      {
        challengeId: 767,
        imageSrc: "/eat.svg",
        correct: false,
        text: "essen",
        audioSrc: "/audio/de/de_eat.mp3",
      },

      // Question 8 - 飲む (drink) ASSIST
      {
        challengeId: 768,
        correct: true,
        text: "trinken",
        audioSrc: "/audio/de/de_drink.mp3",
      },
      {
        challengeId: 768,
        correct: false,
        text: "gehen",
        audioSrc: "/audio/de/de_walk.mp3",
      },
      {
        challengeId: 768,
        correct: false,
        text: "laufen",
        audioSrc: "/audio/de/de_run.mp3",
      },
      {
        challengeId: 768,
        correct: false,
        text: "essen",
        audioSrc: "/audio/de/de_eat.mp3",
      },

      // Question 9 - 寝る (sleep)
      {
        challengeId: 769,
        imageSrc: "/sleep.svg",
        correct: true,
        text: "schlafen",
        audioSrc: "/audio/de/de_sleep.mp3",
      },
      {
        challengeId: 769,
        imageSrc: "/walk.svg",
        correct: false,
        text: "gehen",
        audioSrc: "/audio/de/de_walk.mp3",
      },
      {
        challengeId: 769,
        imageSrc: "/run.svg",
        correct: false,
        text: "laufen",
        audioSrc: "/audio/de/de_run.mp3",
      },
      {
        challengeId: 769,
        imageSrc: "/eat.svg",
        correct: false,
        text: "essen",
        audioSrc: "/audio/de/de_eat.mp3",
      },

      // Question 10 - 寝る (sleep) ASSIST
      {
        challengeId: 770,
        correct: true,
        text: "schlafen",
        audioSrc: "/audio/de/de_sleep.mp3",
      },
      {
        challengeId: 770,
        correct: false,
        text: "gehen",
        audioSrc: "/audio/de/de_walk.mp3",
      },
      {
        challengeId: 770,
        correct: false,
        text: "laufen",
        audioSrc: "/audio/de/de_run.mp3",
      },
      {
        challengeId: 770,
        correct: false,
        text: "essen",
        audioSrc: "/audio/de/de_eat.mp3",
      },
    ])

    console.log("Database seeding completed successfully for German Unit 1, Lesson 2")
  } catch (error) {
    console.error("Error seeding database:", error)
  }
}

main().then(() => process.exit(0))
