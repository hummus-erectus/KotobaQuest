import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"
import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database for English Unit 1, Lesson 3")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 3))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 3))
    // await db.delete(schema.challengeOptions).where(eq(schema.challengeOptions.challengeId, 22 || 22 || 23 || 24 || 25 || 26 || 27 || 28 || 29 || 30))

    await db.insert(schema.lessons).values([
      {
        id: 3,
        unitId: 1, // Unit 1, Lesson 3
        order: 3,
        title: "名詞 II",
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 21,
        lessonId: 3,
        type: "SELECT",
        order: 1,
        question: 'これらの言葉の中で「猫」を意味するのはどれ？',
      },
      {
        id: 22,
        lessonId: 3,
        type: "ASSIST",
        order: 2,
        question: '「猫」',
      },
      {
        id: 23,
        lessonId: 3,
        type: "SELECT",
        order: 3,
        question: 'これらの言葉の中で「家」を意味するのはどれ？',
      },
      {
        id: 24,
        lessonId: 3,
        type: "ASSIST",
        order: 4,
        question: '「家」',
      },
      {
        id: 25,
        lessonId: 3,
        type: "SELECT",
        order: 5,
        question: 'これらの言葉の中で「車」を意味するのはどれ？',
      },
      {
        id: 26,
        lessonId: 3,
        type: "ASSIST",
        order: 6,
        question: '「車」',
      },
      {
        id: 27,
        lessonId: 3,
        type: "SELECT",
        order: 7,
        question: 'これらの言葉の中で「木」を意味するのはどれ？',
      },
      {
        id: 28,
        lessonId: 3,
        type: "ASSIST",
        order: 8,
        question: '「木」',
      },
      {
        id: 29,
        lessonId: 3,
        type: "SELECT",
        order: 9,
        question: 'これらの言葉の中で「本」を意味するのはどれ？',
      },
      {
        id: 30,
        lessonId: 3,
        type: "ASSIST",
        order: 10,
        question: '「本」',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - 猫 (cat)
      {
        challengeId: 21,
        imageSrc: "/cat.svg",
        correct: true,
        text: "cat",
        audioSrc: "/audio/en/en_cat.mp3",
      },
      {
        challengeId: 21,
        imageSrc: "/house.svg",
        correct: false,
        text: "house",
        audioSrc: "/audio/en/en_house.mp3",
      },
      {
        challengeId: 21,
        imageSrc: "/car.svg",
        correct: false,
        text: "car",
        audioSrc: "/audio/en/en_car.mp3",
      },
      {
        challengeId: 21,
        imageSrc: "/tree.svg",
        correct: false,
        text: "tree",
        audioSrc: "/audio/en/en_tree.mp3",
      },

      // Question 2 - 猫 (cat) ASSIST
      {
        challengeId: 22,
        correct: true,
        text: "cat",
        audioSrc: "/audio/en/en_cat.mp3",
      },
      {
        challengeId: 22,
        correct: false,
        text: "house",
        audioSrc: "/audio/en/en_house.mp3",
      },
      {
        challengeId: 22,
        correct: false,
        text: "car",
        audioSrc: "/audio/en/en_car.mp3",
      },
      {
        challengeId: 22,
        correct: false,
        text: "tree",
        audioSrc: "/audio/en/en_tree.mp3",
      },

      // Question 3 - 家 (house)
      {
        challengeId: 23,
        imageSrc: "/house.svg",
        correct: true,
        text: "house",
        audioSrc: "/audio/en/en_house.mp3",
      },
      {
        challengeId: 23,
        imageSrc: "/cat.svg",
        correct: false,
        text: "cat",
        audioSrc: "/audio/en/en_cat.mp3",
      },
      {
        challengeId: 23,
        imageSrc: "/car.svg",
        correct: false,
        text: "car",
        audioSrc: "/audio/en/en_car.mp3",
      },
      {
        challengeId: 23,
        imageSrc: "/tree.svg",
        correct: false,
        text: "tree",
        audioSrc: "/audio/en/en_tree.mp3",
      },

      // Question 4 - 家 (house) ASSIST
      {
        challengeId: 24,
        correct: true,
        text: "house",
        audioSrc: "/audio/en/en_house.mp3",
      },
      {
        challengeId: 24,
        correct: false,
        text: "cat",
        audioSrc: "/audio/en/en_cat.mp3",
      },
      {
        challengeId: 24,
        correct: false,
        text: "car",
        audioSrc: "/audio/en/en_car.mp3",
      },
      {
        challengeId: 24,
        correct: false,
        text: "tree",
        audioSrc: "/audio/en/en_tree.mp3",
      },

      // Question 5 - 車 (car)
      {
        challengeId: 25,
        imageSrc: "/car.svg",
        correct: true,
        text: "car",
        audioSrc: "/audio/en/en_car.mp3",
      },
      {
        challengeId: 25,
        imageSrc: "/cat.svg",
        correct: false,
        text: "cat",
        audioSrc: "/audio/en/en_cat.mp3",
      },
      {
        challengeId: 25,
        imageSrc: "/house.svg",
        correct: false,
        text: "house",
        audioSrc: "/audio/en/en_house.mp3",
      },
      {
        challengeId: 25,
        imageSrc: "/tree.svg",
        correct: false,
        text: "tree",
        audioSrc: "/audio/en/en_tree.mp3",
      },

      // Question 6 - 車 (car) ASSIST
      {
        challengeId: 26,
        correct: true,
        text: "car",
        audioSrc: "/audio/en/en_car.mp3",
      },
      {
        challengeId: 26,
        correct: false,
        text: "cat",
        audioSrc: "/audio/en/en_cat.mp3",
      },
      {
        challengeId: 26,
        correct: false,
        text: "house",
        audioSrc: "/audio/en/en_house.mp3",
      },
      {
        challengeId: 26,
        correct: false,
        text: "tree",
        audioSrc: "/audio/en/en_tree.mp3",
      },

      // Question 7 - 木 (tree)
      {
        challengeId: 27,
        imageSrc: "/tree.svg",
        correct: true,
        text: "tree",
        audioSrc: "/audio/en/en_tree.mp3",
      },
      {
        challengeId: 27,
        imageSrc: "/cat.svg",
        correct: false,
        text: "cat",
        audioSrc: "/audio/en/en_cat.mp3",
      },
      {
        challengeId: 27,
        imageSrc: "/house.svg",
        correct: false,
        text: "house",
        audioSrc: "/audio/en/en_house.mp3",
      },
      {
        challengeId: 27,
        imageSrc: "/car.svg",
        correct: false,
        text: "car",
        audioSrc: "/audio/en/en_car.mp3",
      },

      // Question 8 - 木 (tree) ASSIST
      {
        challengeId: 28,
        correct: true,
        text: "tree",
        audioSrc: "/audio/en/en_tree.mp3",
      },
      {
        challengeId: 28,
        correct: false,
        text: "cat",
        audioSrc: "/audio/en/en_cat.mp3",
      },
      {
        challengeId: 28,
        correct: false,
        text: "house",
        audioSrc: "/audio/en/en_house.mp3",
      },
      {
        challengeId: 28,
        correct: false,
        text: "car",
        audioSrc: "/audio/en/en_car.mp3",
      },

      // Question 9 - 本 (book)
      {
        challengeId: 29,
        imageSrc: "/book.svg",
        correct: true,
        text: "book",
        audioSrc: "/audio/en/en_book.mp3",
      },
      {
        challengeId: 29,
        imageSrc: "/cat.svg",
        correct: false,
        text: "cat",
        audioSrc: "/audio/en/en_cat.mp3",
      },
      {
        challengeId: 29,
        imageSrc: "/house.svg",
        correct: false,
        text: "house",
        audioSrc: "/audio/en/en_house.mp3",
      },
      {
        challengeId: 29,
        imageSrc: "/car.svg",
        correct: false,
        text: "car",
        audioSrc: "/audio/en/en_car.mp3",
      },

      // Question 10 - 本 (book) ASSIST
      {
        challengeId: 30,
        correct: true,
        text: "book",
        audioSrc: "/audio/en/en_book.mp3",
      },
      {
        challengeId: 30,
        correct: false,
        text: "cat",
        audioSrc: "/audio/en/en_cat.mp3",
      },
      {
        challengeId: 30,
        correct: false,
        text: "house",
        audioSrc: "/audio/en/en_house.mp3",
      },
      {
        challengeId: 30,
        correct: false,
        text: "car",
        audioSrc: "/audio/en/en_car.mp3",
      },
    ])

    console.log("Seed data inserted successfully for Unit 1, Lesson 3!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
