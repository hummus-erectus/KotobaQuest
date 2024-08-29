import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database")

    await db.insert(schema.lessons).values([
      {
        id: 2,
        unitId: 1, // Unit 1, Lesson 2
        order: 2,
        title: "名詞 II",
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 11,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'これらの言葉の中で「家」を意味するのはどれ？',
      },
      {
        id: 12,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: '「家」',
      },
      {
        id: 13,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: 'これらの言葉の中で「猫」を意味するのはどれ？',
      },
      {
        id: 14,
        lessonId: 2,
        type: "ASSIST",
        order: 4,
        question: '「猫」',
      },
      {
        id: 15,
        lessonId: 2,
        type: "SELECT",
        order: 5,
        question: 'これらの言葉の中で「車」を意味するのはどれ？',
      },
      {
        id: 16,
        lessonId: 2,
        type: "ASSIST",
        order: 6,
        question: '「車」',
      },
      {
        id: 17,
        lessonId: 2,
        type: "SELECT",
        order: 7,
        question: 'これらの言葉の中で「鳥」を意味するのはどれ？',
      },
      {
        id: 18,
        lessonId: 2,
        type: "ASSIST",
        order: 8,
        question: '「鳥」',
      },
      {
        id: 19,
        lessonId: 2,
        type: "SELECT",
        order: 9,
        question: 'これらの言葉の中で「バス」を意味するのはどれ？',
      },
      {
        id: 20,
        lessonId: 2,
        type: "ASSIST",
        order: 10,
        question: '「バス」',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - 家 (house)
      {
        challengeId: 11,
        imageSrc: "/house.svg",
        correct: true,
        text: "house",
        audioSrc: "/en_house.mp3",
      },
      {
        challengeId: 11,
        imageSrc: "/man.svg",
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 11,
        imageSrc: "/woman.svg",
        correct: false,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 11,
        imageSrc: "/dog.svg",
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },

      // Question 2 - 家 (house) ASSIST
      {
        challengeId: 12,
        correct: true,
        text: "house",
        audioSrc: "/en_house.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 12,
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },

      // Question 3 - 猫 (cat)
      {
        challengeId: 13,
        imageSrc: "/cat.svg",
        correct: true,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
      {
        challengeId: 13,
        imageSrc: "/house.svg",
        correct: false,
        text: "house",
        audioSrc: "/en_house.mp3",
      },
      {
        challengeId: 13,
        imageSrc: "/dog.svg",
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },
      {
        challengeId: 13,
        imageSrc: "/boy.svg",
        correct: false,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },

      // Question 4 - 猫 (cat) ASSIST
      {
        challengeId: 14,
        correct: true,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "house",
        audioSrc: "/en_house.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },
      {
        challengeId: 14,
        correct: false,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },

      // Question 5 - 車 (car)
      {
        challengeId: 15,
        imageSrc: "/car.svg",
        correct: true,
        text: "car",
        audioSrc: "/en_car.mp3",
      },
      {
        challengeId: 15,
        imageSrc: "/cat.svg",
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
      {
        challengeId: 15,
        imageSrc: "/house.svg",
        correct: false,
        text: "house",
        audioSrc: "/en_house.mp3",
      },
      {
        challengeId: 15,
        imageSrc: "/dog.svg",
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },

      // Question 6 - 車 (car) ASSIST
      {
        challengeId: 16,
        correct: true,
        text: "car",
        audioSrc: "/en_car.mp3",
      },
      {
        challengeId: 16,
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
      {
        challengeId: 16,
        correct: false,
        text: "house",
        audioSrc: "/en_house.mp3",
      },
      {
        challengeId: 16,
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },

      // Question 7 - 鳥 (bird)
      {
        challengeId: 17,
        imageSrc: "/bird.svg",
        correct: true,
        text: "bird",
        audioSrc: "/en_bird.mp3",
      },
      {
        challengeId: 17,
        imageSrc: "/car.svg",
        correct: false,
        text: "car",
        audioSrc: "/en_car.mp3",
      },
      {
        challengeId: 17,
        imageSrc: "/cat.svg",
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
      {
        challengeId: 17,
        imageSrc: "/house.svg",
        correct: false,
        text: "house",
        audioSrc: "/en_house.mp3",
      },

      // Question 8 - 鳥 (bird) ASSIST
      {
        challengeId: 18,
        correct: true,
        text: "bird",
        audioSrc: "/en_bird.mp3",
      },
      {
        challengeId: 18,
        correct: false,
        text: "car",
        audioSrc: "/en_car.mp3",
      },
      {
        challengeId: 18,
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
      {
        challengeId: 18,
        correct: false,
        text: "house",
        audioSrc: "/en_house.mp3",
      },

      // Question 9 - バス (bus)
      {
        challengeId: 19,
        imageSrc: "/bus.svg",
        correct: true,
        text: "bus",
        audioSrc: "/en_bus.mp3",
      },
      {
        challengeId: 19,
        imageSrc: "/bird.svg",
        correct: false,
        text: "bird",
        audioSrc: "/en_bird.mp3",
      },
      {
        challengeId: 19,
        imageSrc: "/car.svg",
        correct: false,
        text: "car",
        audioSrc: "/en_car.mp3",
      },
      {
        challengeId: 19,
        imageSrc: "/cat.svg",
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },

      // Question 10 - バス (bus) ASSIST
      {
        challengeId: 20,
        correct: true,
        text: "bus",
        audioSrc: "/en_bus.mp3",
      },
      {
        challengeId: 20,
        correct: false,
        text: "bird",
        audioSrc: "/en_bird.mp3",
      },
      {
        challengeId: 20,
        correct: false,
        text: "car",
        audioSrc: "/en_car.mp3",
      },
      {
        challengeId: 20,
        correct: false,
        text: "cat",
        audioSrc: "/en_cat.mp3",
      },
    ])

    console.log("Seeding finished")
  } catch (error) {
    console.error(error)
    throw new Error("Failed to seed the database")
  }
}

main()
