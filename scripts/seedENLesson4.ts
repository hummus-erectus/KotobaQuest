import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"
import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database for English Unit 1, Lesson 4")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 4))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 4))
    // await db.delete(schema.challengeOptions).where(eq(schema.challengeOptions.challengeId, 31 || 32 || 33 || 34 || 35 || 36 || 37 || 38 || 39 || 40))

    await db.insert(schema.lessons).values([
      {
        id: 4,
        unitId: 1, // Unit 1, Lesson 4
        order: 4,
        title: "形容詞 I",
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 31,
        lessonId: 4,
        type: "SELECT",
        order: 1,
        question: 'これらの言葉の中で「大きい」を意味するのはどれ？',
      },
      {
        id: 32,
        lessonId: 4,
        type: "ASSIST",
        order: 2,
        question: '「大きい」',
      },
      {
        id: 33,
        lessonId: 4,
        type: "SELECT",
        order: 3,
        question: 'これらの言葉の中で「小さい」を意味するのはどれ？',
      },
      {
        id: 34,
        lessonId: 4,
        type: "ASSIST",
        order: 4,
        question: '「小さい」',
      },
      {
        id: 35,
        lessonId: 4,
        type: "SELECT",
        order: 5,
        question: 'これらの言葉の中で「嬉しい」を意味するのはどれ？',
      },
      {
        id: 36,
        lessonId: 4,
        type: "ASSIST",
        order: 6,
        question: '「嬉しい」',
      },
      {
        id: 37,
        lessonId: 4,
        type: "SELECT",
        order: 7,
        question: 'これらの言葉の中で「悲しい」を意味するのはどれ？',
      },
      {
        id: 38,
        lessonId: 4,
        type: "ASSIST",
        order: 8,
        question: '「悲しい」',
      },
      {
        id: 39,
        lessonId: 4,
        type: "SELECT",
        order: 9,
        question: 'これらの言葉の中で「速い」を意味するのはどれ？',
      },
      {
        id: 40,
        lessonId: 4,
        type: "ASSIST",
        order: 10,
        question: '「速い」',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - 大きい (big)
      {
        challengeId: 31,
        imageSrc: "/big.svg",
        correct: true,
        text: "big",
        audioSrc: "/audio/en/en_big.mp3",
      },
      {
        challengeId: 31,
        imageSrc: "/small.svg",
        correct: false,
        text: "small",
        audioSrc: "/audio/en/en_small.mp3",
      },
      {
        challengeId: 31,
        imageSrc: "/happy.svg",
        correct: false,
        text: "happy",
        audioSrc: "/audio/en/en_happy.mp3",
      },
      {
        challengeId: 31,
        imageSrc: "/sad.svg",
        correct: false,
        text: "sad",
        audioSrc: "/audio/en/en_sad.mp3",
      },

      // Question 2 - 大きい (big) ASSIST
      {
        challengeId: 32,
        correct: true,
        text: "big",
        audioSrc: "/audio/en/en_big.mp3",
      },
      {
        challengeId: 32,
        correct: false,
        text: "small",
        audioSrc: "/audio/en/en_small.mp3",
      },
      {
        challengeId: 32,
        correct: false,
        text: "happy",
        audioSrc: "/audio/en/en_happy.mp3",
      },
      {
        challengeId: 32,
        correct: false,
        text: "sad",
        audioSrc: "/audio/en/en_sad.mp3",
      },

      // Question 3 - 小さい (small)
      {
        challengeId: 33,
        imageSrc: "/small.svg",
        correct: true,
        text: "small",
        audioSrc: "/audio/en/en_small.mp3",
      },
      {
        challengeId: 33,
        imageSrc: "/big.svg",
        correct: false,
        text: "big",
        audioSrc: "/audio/en/en_big.mp3",
      },
      {
        challengeId: 33,
        imageSrc: "/happy.svg",
        correct: false,
        text: "happy",
        audioSrc: "/audio/en/en_happy.mp3",
      },
      {
        challengeId: 33,
        imageSrc: "/sad.svg",
        correct: false,
        text: "sad",
        audioSrc: "/audio/en/en_sad.mp3",
      },

      // Question 4 - 小さい (small) ASSIST
      {
        challengeId: 34,
        correct: true,
        text: "small",
        audioSrc: "/audio/en/en_small.mp3",
      },
      {
        challengeId: 34,
        correct: false,
        text: "big",
        audioSrc: "/audio/en/en_big.mp3",
      },
      {
        challengeId: 34,
        correct: false,
        text: "happy",
        audioSrc: "/audio/en/en_happy.mp3",
      },
      {
        challengeId: 34,
        correct: false,
        text: "sad",
        audioSrc: "/audio/en/en_sad.mp3",
      },

      // Question 5 - 嬉しい (happy)
      {
        challengeId: 35,
        imageSrc: "/happy.svg",
        correct: true,
        text: "happy",
        audioSrc: "/audio/en/en_happy.mp3",
      },
      {
        challengeId: 35,
        imageSrc: "/big.svg",
        correct: false,
        text: "big",
        audioSrc: "/audio/en/en_big.mp3",
      },
      {
        challengeId: 35,
        imageSrc: "/small.svg",
        correct: false,
        text: "small",
        audioSrc: "/audio/en/en_small.mp3",
      },
      {
        challengeId: 35,
        imageSrc: "/sad.svg",
        correct: false,
        text: "sad",
        audioSrc: "/audio/en/en_sad.mp3",
      },

      // Question 6 - 嬉しい (happy) ASSIST
      {
        challengeId: 36,
        correct: true,
        text: "happy",
        audioSrc: "/audio/en/en_happy.mp3",
      },
      {
        challengeId: 36,
        correct: false,
        text: "big",
        audioSrc: "/audio/en/en_big.mp3",
      },
      {
        challengeId: 36,
        correct: false,
        text: "small",
        audioSrc: "/audio/en/en_small.mp3",
      },
      {
        challengeId: 36,
        correct: false,
        text: "sad",
        audioSrc: "/audio/en/en_sad.mp3",
      },

      // Question 7 - 悲しい (sad)
      {
        challengeId: 37,
        imageSrc: "/sad.svg",
        correct: true,
        text: "sad",
        audioSrc: "/audio/en/en_sad.mp3",
      },
      {
        challengeId: 37,
        imageSrc: "/big.svg",
        correct: false,
        text: "big",
        audioSrc: "/audio/en/en_big.mp3",
      },
      {
        challengeId: 37,
        imageSrc: "/small.svg",
        correct: false,
        text: "small",
        audioSrc: "/audio/en/en_small.mp3",
      },
      {
        challengeId: 37,
        imageSrc: "/happy.svg",
        correct: false,
        text: "happy",
        audioSrc: "/audio/en/en_happy.mp3",
      },

      // Question 8 - 悲しい (sad) ASSIST
      {
        challengeId: 38,
        correct: true,
        text: "sad",
        audioSrc: "/audio/en/en_sad.mp3",
      },
      {
        challengeId: 38,
        correct: false,
        text: "big",
        audioSrc: "/audio/en/en_big.mp3",
      },
      {
        challengeId: 38,
        correct: false,
        text: "small",
        audioSrc: "/audio/en/en_small.mp3",
      },
      {
        challengeId: 38,
        correct: false,
        text: "happy",
        audioSrc: "/audio/en/en_happy.mp3",
      },

      // Question 9 - 速い (fast)
      {
        challengeId: 39,
        imageSrc: "/fast.svg",
        correct: true,
        text: "fast",
        audioSrc: "/audio/en/en_fast.mp3",
      },
      {
        challengeId: 39,
        imageSrc: "/big.svg",
        correct: false,
        text: "big",
        audioSrc: "/audio/en/en_big.mp3",
      },
      {
        challengeId: 39,
        imageSrc: "/small.svg",
        correct: false,
        text: "small",
        audioSrc: "/audio/en/en_small.mp3",
      },
      {
        challengeId: 39,
        imageSrc: "/sad.svg",
        correct: false,
        text: "sad",
        audioSrc: "/audio/en/en_sad.mp3",
      },

      // Question 10 - 速い (fast) ASSIST
      {
        challengeId: 40,
        correct: true,
        text: "fast",
        audioSrc: "/audio/en/en_fast.mp3",
      },
      {
        challengeId: 40,
        correct: false,
        text: "big",
        audioSrc: "/audio/en/en_big.mp3",
      },
      {
        challengeId: 40,
        correct: false,
        text: "small",
        audioSrc: "/audio/en/en_small.mp3",
      },
      {
        challengeId: 40,
        correct: false,
        text: "sad",
        audioSrc: "/audio/en/en_sad.mp3",
      },
    ])

    console.log("Seed data inserted successfully for Unit 1, Lesson 4!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
