import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database with German vocabulary words")

    // Insert Words
    await db.insert(schema.options).values([
     // Unit 1
      // Lesson 1: Nouns
      { id: 251, text: "der Mann", imageSrc: "/man.svg", audioSrc: "/audio/de/de_man.mp3" },
      { id: 252, text: "die Frau", imageSrc: "/woman.svg", audioSrc: "/audio/de/de_woman.mp3" },
      { id: 253, text: "das Mädchen", imageSrc: "/girl.svg", audioSrc: "/audio/de/de_girl.mp3" },
      { id: 254, text: "der Junge", imageSrc: "/boy.svg", audioSrc: "/audio/de/de_boy.mp3" },
      { id: 255, text: "der Hund", imageSrc: "/dog.svg", audioSrc: "/audio/de/de_dog.mp3" },

      // Lesson 2: Verbs
      { id: 256, text: "gehen", imageSrc: "/walk.svg", audioSrc: "/audio/de/de_walk.mp3" },
      { id: 257, text: "laufen", imageSrc: "/run.svg", audioSrc: "/audio/de/de_run.mp3" },
      { id: 258, text: "essen", imageSrc: "/eat.svg", audioSrc: "/audio/de/de_eat.mp3" },
      { id: 259, text: "trinken", imageSrc: "/drink.svg", audioSrc: "/audio/de/de_drink.mp3" },
      { id: 260, text: "schlafen", imageSrc: "/sleep.svg", audioSrc: "/audio/de/de_sleep.mp3" },

      // Lesson 3: Nouns
      { id: 261, text: "die Katze", imageSrc: "/cat.svg", audioSrc: "/audio/de/de_cat.mp3" },
      { id: 262, text: "das Haus", imageSrc: "/house.svg", audioSrc: "/audio/de/de_house.mp3" },
      { id: 263, text: "das Auto", imageSrc: "/car.svg", audioSrc: "/audio/de/de_car.mp3" },
      { id: 264, text: "der Baum", imageSrc: "/tree.svg", audioSrc: "/audio/de/de_tree.mp3" },
      { id: 265, text: "das Buch", imageSrc: "/book.svg", audioSrc: "/audio/de/de_book.mp3" },

      // Lesson 4: Adjectives
      { id: 266, text: "groß", imageSrc: "/big.svg", audioSrc: "/audio/de/de_big.mp3" },
      { id: 267, text: "klein", imageSrc: "/small.svg", audioSrc: "/audio/de/de_small.mp3" },
      { id: 268, text: "glücklich", imageSrc: "/happy.svg", audioSrc: "/audio/de/de_happy.mp3" },
      { id: 269, text: "traurig", imageSrc: "/sad.svg", audioSrc: "/audio/de/de_sad.mp3" },
      { id: 270, text: "schnell", imageSrc: "/fast.svg", audioSrc: "/audio/de/de_fast.mp3" },

      // Lesson 5: Nouns
      { id: 271, text: "der Apfel", imageSrc: "/apple.svg", audioSrc: "/audio/de/de_apple.mp3" },
      { id: 272, text: "die Banane", imageSrc: "/banana.svg", audioSrc: "/audio/de/de_banana.mp3" },
      { id: 273, text: "das Brot", imageSrc: "/bread.svg", audioSrc: "/audio/de/de_bread.mp3" },
      { id: 274, text: "das Wasser", imageSrc: "/water.svg", audioSrc: "/audio/de/de_water.mp3" },
      { id: 275, text: "die Milch", imageSrc: "/milk.svg", audioSrc: "/audio/de/de_milk.mp3" },

      // Lesson 6: Verbs
      { id: 276, text: "lesen", imageSrc: "/read.svg", audioSrc: "/audio/de/de_read.mp3" },
      { id: 277, text: "schreiben", imageSrc: "/write.svg", audioSrc: "/audio/de/de_write.mp3" },
      { id: 278, text: "hören", imageSrc: "/listen.svg", audioSrc: "/audio/de/de_listen.mp3" },
      { id: 279, text: "sprechen", imageSrc: "/speak.svg", audioSrc: "/audio/de/de_speak.mp3" },
      { id: 280, text: "lernen", imageSrc: "/learn.svg", audioSrc: "/audio/de/de_learn.mp3" },

      // Lesson 7: Nouns
      { id: 281, text: "die Mutter", imageSrc: "/mother.svg", audioSrc: "/audio/de/de_mother.mp3" },
      { id: 282, text: "der Vater", imageSrc: "/father.svg", audioSrc: "/audio/de/de_father.mp3" },
      { id: 283, text: "die Schwester", imageSrc: "/sister.svg", audioSrc: "/audio/de/de_sister.mp3" },
      { id: 284, text: "der Bruder", imageSrc: "/brother.svg", audioSrc: "/audio/de/de_brother.mp3" },
      { id: 285, text: "der Lehrer", imageSrc: "/teacher.svg", audioSrc: "/audio/de/de_teacher.mp3" },

      // Lesson 8: Adjectives
      { id: 286, text: "heiß", imageSrc: "/hot.svg", audioSrc: "/audio/de/de_hot.mp3" },
      { id: 287, text: "kalt", imageSrc: "/cold.svg", audioSrc: "/audio/de/de_cold.mp3" },
      { id: 288, text: "neu", imageSrc: "/new.svg", audioSrc: "/audio/de/de_new.mp3" },
      { id: 289, text: "alt", imageSrc: "/old.svg", audioSrc: "/audio/de/de_old.mp3" },
      { id: 290, text: "jung", imageSrc: "/young.svg", audioSrc: "/audio/de/de_young.mp3" },

      // Lesson 9: Nouns
      { id: 291, text: "die Schule", imageSrc: "/school.svg", audioSrc: "/audio/de/de_school.mp3" },
      { id: 292, text: "der Schüler", imageSrc: "/student.svg", audioSrc: "/audio/de/de_student.mp3" },
      { id: 293, text: "die Klasse", imageSrc: "/class.svg", audioSrc: "/audio/de/de_class.mp3" },
      { id: 294, text: "der Schreibtisch", imageSrc: "/desk.svg", audioSrc: "/audio/de/de_desk.mp3" },
      { id: 295, text: "der Stuhl", imageSrc: "/chair.svg", audioSrc: "/audio/de/de_chair.mp3" },

      // Lesson 10: Verbs
      { id: 296, text: "springen", imageSrc: "/jump.svg", audioSrc: "/audio/de/de_jump.mp3" },
      { id: 297, text: "schwimmen", imageSrc: "/swim.svg", audioSrc: "/audio/de/de_swim.mp3" },
      { id: 298, text: "fliegen", imageSrc: "/fly.svg", audioSrc: "/audio/de/de_fly.mp3" },
      { id: 299, text: "fahren", imageSrc: "/drive.svg", audioSrc: "/audio/de/de_drive.mp3" },
      { id: 300, text: "klettern", imageSrc: "/climb.svg", audioSrc: "/audio/de/de_climb.mp3" },

    ])

    console.log("Seed data inserted successfully for German challenge options!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
