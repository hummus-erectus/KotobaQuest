import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"
import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database for Unit 1, Lesson 1")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 1))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 1))

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1, Lesson 1
        order: 1,
        title: "名詞 I",
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Lesson 1
        type: "SELECT",
        order: 1,
        question: 'これらの言葉の中で「男の人」を意味するのはどれ？',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: '「男の人」',
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: 'これらの言葉の中で「女の人」を意味するのはどれ？',
      },
      {
        id: 4,
        lessonId: 1,
        type: "ASSIST",
        order: 4,
        question: '「女の人」',
      },
      {
        id: 5,
        lessonId: 1,
        type: "SELECT",
        order: 5,
        question: 'これらの言葉の中で「犬」を意味するのはどれ？',
      },
      {
        id: 6,
        lessonId: 1,
        type: "ASSIST",
        order: 6,
        question: '「犬」',
      },
      {
        id: 7,
        lessonId: 1,
        type: "SELECT",
        order: 7,
        question: 'これらの言葉の中で「男の子」を意味するのはどれ？',
      },
      {
        id: 8,
        lessonId: 1,
        type: "ASSIST",
        order: 8,
        question: '「男の子」',
      },
      {
        id: 9,
        lessonId: 1,
        type: "SELECT",
        order: 9,
        question: 'これらの言葉の中で「女の子」を意味するのはどれ？',
      },
      {
        id: 10,
        lessonId: 1,
        type: "ASSIST",
        order: 10,
        question: '「女の子」',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - 男の人 (man)
      {
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/girl.svg",
        correct: false,
        text: "girl",
        audioSrc: "/en_girl.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/boy.svg",
        correct: false,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },

      // Question 2 - 男の人 (man) ASSIST
      {
        challengeId: 2,
        correct: true,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "girl",
        audioSrc: "/en_girl.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },

      // Question 3 - 女の人 (woman)
      {
        challengeId: 3,
        imageSrc: "/woman.svg",
        correct: true,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/man.svg",
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/girl.svg",
        correct: false,
        text: "girl",
        audioSrc: "/en_girl.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/boy.svg",
        correct: false,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },

      // Question 4 - 女の人 (woman) ASSIST
      {
        challengeId: 4,
        correct: true,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 4,
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 4,
        correct: false,
        text: "girl",
        audioSrc: "/en_girl.mp3",
      },
      {
        challengeId: 4,
        correct: false,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },

      // Question 5 - 犬 (dog)
      {
        challengeId: 5,
        imageSrc: "/dog.svg",
        correct: true,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },
      {
        challengeId: 5,
        imageSrc: "/man.svg",
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 5,
        imageSrc: "/woman.svg",
        correct: false,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 5,
        imageSrc: "/boy.svg",
        correct: false,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },

      // Question 6 - 犬 (dog) ASSIST
      {
        challengeId: 6,
        correct: true,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },
      {
        challengeId: 6,
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 6,
        correct: false,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 6,
        correct: false,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },

      // Question 7 - 男の子 (boy)
      {
        challengeId: 7,
        imageSrc: "/boy.svg",
        correct: true,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },
      {
        challengeId: 7,
        imageSrc: "/man.svg",
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 7,
        imageSrc: "/woman.svg",
        correct: false,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 7,
        imageSrc: "/dog.svg",
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },

      // Question 8 - 男の子 (boy) ASSIST
      {
        challengeId: 8,
        correct: true,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },
      {
        challengeId: 8,
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 8,
        correct: false,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 8,
        correct: false,
        text: "dog",
        audioSrc: "/en_dog.mp3",
      },

      // Question 9 - 女の子 (girl)
      {
        challengeId: 9,
        imageSrc: "/girl.svg",
        correct: true,
        text: "girl",
        audioSrc: "/en_girl.mp3",
      },
      {
        challengeId: 9,
        imageSrc: "/man.svg",
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 9,
        imageSrc: "/woman.svg",
        correct: false,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 9,
        imageSrc: "/boy.svg",
        correct: false,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },

      // Question 10 - 女の子 (girl) ASSIST
      {
        challengeId: 10,
        correct: true,
        text: "girl",
        audioSrc: "/en_girl.mp3",
      },
      {
        challengeId: 10,
        correct: false,
        text: "man",
        audioSrc: "/en_man.mp3",
      },
      {
        challengeId: 10,
        correct: false,
        text: "woman",
        audioSrc: "/en_woman.mp3",
      },
      {
        challengeId: 10,
        correct: false,
        text: "boy",
        audioSrc: "/en_boy.mp3",
      },
    ])

    console.log("Seed data inserted successfully for Unit 1, Lesson 1!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
