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
      { id: 251, text: "der Mann", imageSrc: "/man.png", audioSrc: "/audio/de/de_man.mp3" },
      { id: 252, text: "die Frau", imageSrc: "/woman.png", audioSrc: "/audio/de/de_woman.mp3" },
      { id: 253, text: "das Mädchen", imageSrc: "/girl.png", audioSrc: "/audio/de/de_girl.mp3" },
      { id: 254, text: "der Junge", imageSrc: "/boy.png", audioSrc: "/audio/de/de_boy.mp3" },
      { id: 255, text: "der Hund", imageSrc: "/dog.png", audioSrc: "/audio/de/de_dog.mp3" },

      // Lesson 2: Verbs
      { id: 256, text: "gehen", imageSrc: "/walk.png", audioSrc: "/audio/de/de_walk.mp3" },
      { id: 257, text: "laufen", imageSrc: "/run.png", audioSrc: "/audio/de/de_run.mp3" },
      { id: 258, text: "essen", imageSrc: "/eat.png", audioSrc: "/audio/de/de_eat.mp3" },
      { id: 259, text: "trinken", imageSrc: "/drink.png", audioSrc: "/audio/de/de_drink.mp3" },
      { id: 260, text: "schlafen", imageSrc: "/sleep.png", audioSrc: "/audio/de/de_sleep.mp3" },

      // Lesson 3: Nouns
      { id: 261, text: "die Katze", imageSrc: "/cat.png", audioSrc: "/audio/de/de_cat.mp3" },
      { id: 262, text: "das Haus", imageSrc: "/house.png", audioSrc: "/audio/de/de_house.mp3" },
      { id: 263, text: "das Auto", imageSrc: "/car.png", audioSrc: "/audio/de/de_car.mp3" },
      { id: 264, text: "der Baum", imageSrc: "/tree.png", audioSrc: "/audio/de/de_tree.mp3" },
      { id: 265, text: "das Buch", imageSrc: "/book.png", audioSrc: "/audio/de/de_book.mp3" },

      // Lesson 4: Adjectives
      { id: 266, text: "groß", imageSrc: "/big.png", audioSrc: "/audio/de/de_big.mp3" },
      { id: 267, text: "klein", imageSrc: "/small.png", audioSrc: "/audio/de/de_small.mp3" },
      { id: 268, text: "glücklich", imageSrc: "/happy.png", audioSrc: "/audio/de/de_happy.mp3" },
      { id: 269, text: "traurig", imageSrc: "/sad.png", audioSrc: "/audio/de/de_sad.mp3" },
      { id: 270, text: "schnell", imageSrc: "/fast.png", audioSrc: "/audio/de/de_fast.mp3" },

      // Lesson 5: Nouns
      { id: 271, text: "der Apfel", imageSrc: "/apple.png", audioSrc: "/audio/de/de_apple.mp3" },
      { id: 272, text: "die Banane", imageSrc: "/banana.png", audioSrc: "/audio/de/de_banana.mp3" },
      { id: 273, text: "das Brot", imageSrc: "/bread.png", audioSrc: "/audio/de/de_bread.mp3" },
      { id: 274, text: "das Wasser", imageSrc: "/water.png", audioSrc: "/audio/de/de_water.mp3" },
      { id: 275, text: "die Milch", imageSrc: "/milk.png", audioSrc: "/audio/de/de_milk.mp3" },

      // Lesson 6: Verbs
      { id: 276, text: "lesen", imageSrc: "/read.png", audioSrc: "/audio/de/de_read.mp3" },
      { id: 277, text: "schreiben", imageSrc: "/write.png", audioSrc: "/audio/de/de_write.mp3" },
      { id: 278, text: "hören", imageSrc: "/listen.png", audioSrc: "/audio/de/de_listen.mp3" },
      { id: 279, text: "sprechen", imageSrc: "/speak.png", audioSrc: "/audio/de/de_speak.mp3" },
      { id: 280, text: "lernen", imageSrc: "/learn.png", audioSrc: "/audio/de/de_learn.mp3" },

      // Lesson 7: Nouns
      { id: 281, text: "die Mutter", imageSrc: "/mother.png", audioSrc: "/audio/de/de_mother.mp3" },
      { id: 282, text: "der Vater", imageSrc: "/father.png", audioSrc: "/audio/de/de_father.mp3" },
      { id: 283, text: "die Schwester", imageSrc: "/sister.png", audioSrc: "/audio/de/de_sister.mp3" },
      { id: 284, text: "der Bruder", imageSrc: "/brother.png", audioSrc: "/audio/de/de_brother.mp3" },
      { id: 285, text: "der Lehrer", imageSrc: "/teacher.png", audioSrc: "/audio/de/de_teacher.mp3" },

      // Lesson 8: Adjectives
      { id: 286, text: "heiß", imageSrc: "/hot.png", audioSrc: "/audio/de/de_hot.mp3" },
      { id: 287, text: "kalt", imageSrc: "/cold.png", audioSrc: "/audio/de/de_cold.mp3" },
      { id: 288, text: "neu", imageSrc: "/new.png", audioSrc: "/audio/de/de_new.mp3" },
      { id: 289, text: "alt", imageSrc: "/old.png", audioSrc: "/audio/de/de_old.mp3" },
      { id: 290, text: "jung", imageSrc: "/young.png", audioSrc: "/audio/de/de_young.mp3" },

      // Lesson 9: Nouns
      { id: 291, text: "die Schule", imageSrc: "/school.png", audioSrc: "/audio/de/de_school.mp3" },
      { id: 292, text: "der Schüler", imageSrc: "/student.png", audioSrc: "/audio/de/de_student.mp3" },
      { id: 293, text: "die Klasse", imageSrc: "/class.png", audioSrc: "/audio/de/de_class.mp3" },
      { id: 294, text: "der Schreibtisch", imageSrc: "/desk.png", audioSrc: "/audio/de/de_desk.mp3" },
      { id: 295, text: "der Stuhl", imageSrc: "/chair.png", audioSrc: "/audio/de/de_chair.mp3" },

      // Lesson 10: Verbs
      { id: 296, text: "springen", imageSrc: "/jump.png", audioSrc: "/audio/de/de_jump.mp3" },
      { id: 297, text: "schwimmen", imageSrc: "/swim.png", audioSrc: "/audio/de/de_swim.mp3" },
      { id: 298, text: "fliegen", imageSrc: "/fly.png", audioSrc: "/audio/de/de_fly.mp3" },
      { id: 299, text: "fahren", imageSrc: "/drive.png", audioSrc: "/audio/de/de_drive.mp3" },
      { id: 300, text: "klettern", imageSrc: "/climb.png", audioSrc: "/audio/de/de_climb.mp3" },

    ])

    console.log("Seed data inserted successfully for German challenge options!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
