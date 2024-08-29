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

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 3))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 3))
    // await db.delete(schema.challengeOptions).where(eq(schema.challengeOptions.challengeId, 22 || 22 || 23 || 24 || 25 || 26 || 27 || 28 || 29 || 30))

    await db.insert(schema.lessons).values([
      {
        id: 3,
        unitId: 1, // Unit 1, Lesson 3
        order: 3,
        title: "名詞 III",
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 21,
        lessonId: 3,
        type: "SELECT",
        order: 1,
        question: 'これらの言葉の中で「本」を意味するのはどれ？',
      },
      {
        id: 22,
        lessonId: 3,
        type: "ASSIST",
        order: 2,
        question: '「本」',
      },
      {
        id: 23,
        lessonId: 3,
        type: "SELECT",
        order: 3,
        question: 'これらの言葉の中で「椅子」を意味するのはどれ？',
      },
      {
        id: 24,
        lessonId: 3,
        type: "ASSIST",
        order: 4,
        question: '「椅子」',
      },
      {
        id: 25,
        lessonId: 3,
        type: "SELECT",
        order: 5,
        question: 'これらの言葉の中で「学校」を意味するのはどれ？',
      },
      {
        id: 26,
        lessonId: 3,
        type: "ASSIST",
        order: 6,
        question: '「学校」',
      },
      {
        id: 27,
        lessonId: 3,
        type: "SELECT",
        order: 7,
        question: 'これらの言葉の中で「テーブル」を意味するのはどれ？',
      },
      {
        id: 28,
        lessonId: 3,
        type: "ASSIST",
        order: 8,
        question: '「テーブル」',
      },
      {
        id: 29,
        lessonId: 3,
        type: "SELECT",
        order: 9,
        question: 'これらの言葉の中で「自転車」を意味するのはどれ？',
      },
      {
        id: 30,
        lessonId: 3,
        type: "ASSIST",
        order: 10,
        question: '「自転車」',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - 本 (book)
      {
        challengeId: 21,
        imageSrc: "/book.svg",
        correct: true,
        text: "book",
        audioSrc: "/en_book.mp3",
      },
      {
        challengeId: 21,
        imageSrc: "/car.svg",
        correct: false,
        text: "car",
        audioSrc: "/en_car.mp3",
      },
      {
        challengeId: 21,
        imageSrc: "/cat.svg",
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
      {
        challengeId: 21,
        imageSrc: "/dog.svg",
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },

      // Question 2 - 本 (book) ASSIST
      {
        challengeId: 22,
        correct: true,
        text: "book",
        audioSrc: "/en_book.mp3",
      },
      {
        challengeId: 22,
        correct: false,
        text: "car",
        audioSrc: "/en_car.mp3",
      },
      {
        challengeId: 22,
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
      {
        challengeId: 22,
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },

      // Question 3 - 椅子 (chair)
      {
        challengeId: 23,
        imageSrc: "/chair.svg",
        correct: true,
        text: "chair",
        audioSrc: "/en_chair.mp3",
      },
      {
        challengeId: 23,
        imageSrc: "/book.svg",
        correct: false,
        text: "book",
        audioSrc: "/en_book.mp3",
      },
      {
        challengeId: 23,
        imageSrc: "/cat.svg",
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
      {
        challengeId: 23,
        imageSrc: "/dog.svg",
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },

      // Question 4 - 椅子 (chair) ASSIST
      {
        challengeId: 24,
        correct: true,
        text: "chair",
        audioSrc: "/en_chair.mp3",
      },
      {
        challengeId: 24,
        correct: false,
        text: "book",
        audioSrc: "/en_book.mp3",
      },
      {
        challengeId: 24,
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
      {
        challengeId: 24,
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },

      // Question 5 - 学校 (school)
      {
        challengeId: 25,
        imageSrc: "/school.svg",
        correct: true,
        text: "school",
        audioSrc: "/en_school.mp3",
      },
      {
        challengeId: 25,
        imageSrc: "/chair.svg",
        correct: false,
        text: "chair",
        audioSrc: "/en_chair.mp3",
      },
      {
        challengeId: 25,
        imageSrc: "/book.svg",
        correct: false,
        text: "book",
        audioSrc: "/en_book.mp3",
      },
      {
        challengeId: 25,
        imageSrc: "/cat.svg",
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },

      // Question 6 - 学校 (school) ASSIST
      {
        challengeId: 26,
        correct: true,
        text: "school",
        audioSrc: "/en_school.mp3",
      },
      {
        challengeId: 26,
        correct: false,
        text: "chair",
        audioSrc: "/en_chair.mp3",
      },
      {
        challengeId: 26,
        correct: false,
        text: "book",
        audioSrc: "/en_book.mp3",
      },
      {
        challengeId: 26,
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },

      // Question 7 - テーブル (table)
      {
        challengeId: 27,
        imageSrc: "/table.svg",
        correct: true,
        text: "table",
        audioSrc: "/en_table.mp3",
      },
      {
        challengeId: 27,
        imageSrc: "/school.svg",
        correct: false,
        text: "school",
        audioSrc: "/en_school.mp3",
      },
      {
        challengeId: 27,
        imageSrc: "/chair.svg",
        correct: false,
        text: "chair",
        audioSrc: "/en_chair.mp3",
      },
      {
        challengeId: 27,
        imageSrc: "/book.svg",
        correct: false,
        text: "book",
        audioSrc: "/en_book.mp3",
      },

      // Question 8 - テーブル (table) ASSIST
      {
        challengeId: 28,
        correct: true,
        text: "table",
        audioSrc: "/en_table.mp3",
      },
      {
        challengeId: 28,
        correct: false,
        text: "school",
        audioSrc: "/en_school.mp3",
      },
      {
        challengeId: 28,
        correct: false,
        text: "chair",
        audioSrc: "/en_chair.mp3",
      },
      {
        challengeId: 28,
        correct: false,
        text: "book",
        audioSrc: "/en_book.mp3",
      },

      // Question 9 - 自転車 (bicycle)
      {
        challengeId: 29,
        imageSrc: "/bicycle.svg",
        correct: true,
        text: "bicycle",
        audioSrc: "/en_bicycle.mp3",
      },
      {
        challengeId: 29,
        imageSrc: "/table.svg",
        correct: false,
        text: "table",
        audioSrc: "/en_table.mp3",
      },
      {
        challengeId: 29,
        imageSrc: "/school.svg",
        correct: false,
        text: "school",
        audioSrc: "/en_school.mp3",
      },
      {
        challengeId: 29,
        imageSrc: "/chair.svg",
        correct: false,
        text: "chair",
        audioSrc: "/en_chair.mp3",
      },

      // Question 10 - 自転車 (bicycle) ASSIST
      {
        challengeId: 30,
        correct: true,
        text: "bicycle",
        audioSrc: "/en_bicycle.mp3",
      },
      {
        challengeId: 30,
        correct: false,
        text: "table",
        audioSrc: "/en_table.mp3",
      },
      {
        challengeId: 30,
        correct: false,
        text: "school",
        audioSrc: "/en_school.mp3",
      },
      {
        challengeId: 30,
        correct: false,
        text: "chair",
        audioSrc: "/en_chair.mp3",
      },
    ])
    console.log("Seed data inserted successfully for Unit 1, Lesson 3!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
