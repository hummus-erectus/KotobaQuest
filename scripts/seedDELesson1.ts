import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "../db/schema"
import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, {schema})

const main = async () => {
  try {
    console.log("Seeding database for German Unit 1, Lesson 1")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 66))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 66))

    await db.insert(schema.lessons).values([
      {
        id: 66,
        unitId: 6, // German Unit 1, Lesson 1
        order: 1,
        title: "名詞 I",
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 751,
        lessonId: 66,
        type: "SELECT",
        order: 1,
        question: 'これらの言葉の中で「男の人」を意味するのはどれ？',
      },
      {
        id: 752,
        lessonId: 66,
        type: "ASSIST",
        order: 2,
        question: '「男の人」',
      },
      {
        id: 753,
        lessonId: 66,
        type: "SELECT",
        order: 3,
        question: 'これらの言葉の中で「女の人」を意味するのはどれ？',
      },
      {
        id: 754,
        lessonId: 66,
        type: "ASSIST",
        order: 4,
        question: '「女の人」',
      },
      {
        id: 755,
        lessonId: 66,
        type: "SELECT",
        order: 5,
        question: 'これらの言葉の中で「犬」を意味するのはどれ？',
      },
      {
        id: 756,
        lessonId: 66,
        type: "ASSIST",
        order: 6,
        question: '「犬」',
      },
      {
        id: 757,
        lessonId: 66,
        type: "SELECT",
        order: 7,
        question: 'これらの言葉の中で「男の子」を意味するのはどれ？',
      },
      {
        id: 758,
        lessonId: 66,
        type: "ASSIST",
        order: 8,
        question: '「男の子」',
      },
      {
        id: 759,
        lessonId: 66,
        type: "SELECT",
        order: 9,
        question: 'これらの言葉の中で「女の子」を意味するのはどれ？',
      },
      {
        id: 760,
        lessonId: 66,
        type: "ASSIST",
        order: 10,
        question: '「女の子」',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - 男の人 (man)
      {
        challengeId: 751,
        imageSrc: "/man.svg",
        correct: true,
        text: "der Mann",
        audioSrc: "/audio/de/de_man.mp3",
      },
      {
        challengeId: 751,
        imageSrc: "/woman.svg",
        correct: false,
        text: "die Frau",
        audioSrc: "/audio/de/de_woman.mp3",
      },
      {
        challengeId: 751,
        imageSrc: "/girl.svg",
        correct: false,
        text: "das Mädchen",
        audioSrc: "/audio/de/de_girl.mp3",
      },
      {
        challengeId: 751,
        imageSrc: "/boy.svg",
        correct: false,
        text: "der Junge",
        audioSrc: "/audio/de/de_boy.mp3",
      },

      // Question 2 - 男の人 (man) ASSIST
      {
        challengeId: 752,
        correct: true,
        text: "der Mann",
        audioSrc: "/audio/de/de_man.mp3",
      },
      {
        challengeId: 752,
        correct: false,
        text: "die Frau",
        audioSrc: "/audio/de/de_woman.mp3",
      },
      {
        challengeId: 752,
        correct: false,
        text: "das Mädchen",
        audioSrc: "/audio/de/de_girl.mp3",
      },
      {
        challengeId: 752,
        correct: false,
        text: "der Junge",
        audioSrc: "/audio/de/de_boy.mp3",
      },

      // Question 3 - 女の人 (woman)
      {
        challengeId: 753,
        imageSrc: "/woman.svg",
        correct: true,
        text: "die Frau",
        audioSrc: "/audio/de/de_woman.mp3",
      },
      {
        challengeId: 753,
        imageSrc: "/man.svg",
        correct: false,
        text: "der Mann",
        audioSrc: "/audio/de/de_man.mp3",
      },
      {
        challengeId: 753,
        imageSrc: "/girl.svg",
        correct: false,
        text: "das Mädchen",
        audioSrc: "/audio/de/de_girl.mp3",
      },
      {
        challengeId: 753,
        imageSrc: "/boy.svg",
        correct: false,
        text: "der Junge",
        audioSrc: "/audio/de/de_boy.mp3",
      },

      // Question 4 - 女の人 (woman) ASSIST
      {
        challengeId: 754,
        correct: true,
        text: "die Frau",
        audioSrc: "/audio/de/de_woman.mp3",
      },
      {
        challengeId: 754,
        correct: false,
        text: "der Mann",
        audioSrc: "/audio/de/de_man.mp3",
      },
      {
        challengeId: 754,
        correct: false,
        text: "das Mädchen",
        audioSrc: "/audio/de/de_girl.mp3",
      },
      {
        challengeId: 754,
        correct: false,
        text: "der Junge",
        audioSrc: "/audio/de/de_boy.mp3",
      },

      // Question 5 - 犬 (dog)
      {
        challengeId: 755,
        imageSrc: "/dog.svg",
        correct: true,
        text: "der Hund",
        audioSrc: "/audio/de/de_dog.mp3",
      },
      {
        challengeId: 755,
        imageSrc: "/man.svg",
        correct: false,
        text: "der Mann",
        audioSrc: "/audio/de/de_man.mp3",
      },
      {
        challengeId: 755,
        imageSrc: "/woman.svg",
        correct: false,
        text: "die Frau",
        audioSrc: "/audio/de/de_woman.mp3",
      },
      {
        challengeId: 755,
        imageSrc: "/boy.svg",
        correct: false,
        text: "der Junge",
        audioSrc: "/audio/de/de_boy.mp3",
      },

      // Question 6 - 犬 (dog) ASSIST
      {
        challengeId: 756,
        correct: true,
        text: "der Hund",
        audioSrc: "/audio/de/de_dog.mp3",
      },
      {
        challengeId: 756,
        correct: false,
        text: "der Mann",
        audioSrc: "/audio/de/de_man.mp3",
      },
      {
        challengeId: 756,
        correct: false,
        text: "die Frau",
        audioSrc: "/audio/de/de_woman.mp3",
      },
      {
        challengeId: 756,
        correct: false,
        text: "der Junge",
        audioSrc: "/audio/de/de_boy.mp3",
      },

      // Question 7 - 男の子 (boy)
      {
        challengeId: 757,
        imageSrc: "/boy.svg",
        correct: true,
        text: "der Junge",
        audioSrc: "/audio/de/de_boy.mp3",
      },
      {
        challengeId: 757,
        imageSrc: "/man.svg",
        correct: false,
        text: "der Mann",
        audioSrc: "/audio/de/de_man.mp3",
      },
      {
        challengeId: 757,
        imageSrc: "/woman.svg",
        correct: false,
        text: "die Frau",
        audioSrc: "/audio/de/de_woman.mp3",
      },
      {
        challengeId: 757,
        imageSrc: "/dog.svg",
        correct: false,
        text: "der Hund",
        audioSrc: "/audio/de/de_dog.mp3",
      },

      // Question 8 - 男の子 (boy) ASSIST
      {
        challengeId: 758,
        correct: true,
        text: "der Junge",
        audioSrc: "/audio/de/de_boy.mp3",
      },
      {
        challengeId: 758,
        correct: false,
        text: "der Mann",
        audioSrc: "/audio/de/de_man.mp3",
      },
      {
        challengeId: 758,
        correct: false,
        text: "die Frau",
        audioSrc: "/audio/de/de_woman.mp3",
      },
      {
        challengeId: 758,
        correct: false,
        text: "der Hund",
        audioSrc: "/audio/de/de_dog.mp3",
      },

      // Question 9 - 女の子 (girl)
      {
        challengeId: 759,
        imageSrc: "/girl.svg",
        correct: true,
        text: "das Mädchen",
        audioSrc: "/audio/de/de_girl.mp3",
      },
      {
        challengeId: 759,
        imageSrc: "/man.svg",
        correct: false,
        text: "der Mann",
        audioSrc: "/audio/de/de_man.mp3",
      },
      {
        challengeId: 759,
        imageSrc: "/woman.svg",
        correct: false,
        text: "die Frau",
        audioSrc: "/audio/de/de_woman.mp3",
      },
      {
        challengeId: 759,
        imageSrc: "/dog.svg",
        correct: false,
        text: "der Hund",
        audioSrc: "/audio/de/de_dog.mp3",
      },

      // Question 10 - 女の子 (girl) ASSIST
      {
        challengeId: 760,
        correct: true,
        text: "das Mädchen",
        audioSrc: "/audio/de/de_girl.mp3",
      },
      {
        challengeId: 760,
        correct: false,
        text: "der Mann",
        audioSrc: "/audio/de/de_man.mp3",
      },
      {
        challengeId: 760,
        correct: false,
        text: "die Frau",
        audioSrc: "/audio/de/de_woman.mp3",
      },
      {
        challengeId: 760,
        correct: false,
        text: "der Hund",
        audioSrc: "/audio/de/de_dog.mp3",
      },
    ])

    console.log("Seed data inserted successfully for Unit 1, Lesson 1!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
