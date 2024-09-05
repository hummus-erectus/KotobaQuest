import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database with French vocabulary words")

    // Insert Words
    await db.insert(schema.options).values([
     // Unit 1
      // Lesson 1: Nouns
      { id: 501, text: "l'homme", imageSrc: "/man.png", audioSrc: "/audio/fr/fr_man.mp3" },
      { id: 502, text: "la femme", imageSrc: "/woman.png", audioSrc: "/audio/fr/fr_woman.mp3" },
      { id: 503, text: "la fille", imageSrc: "/girl.png", audioSrc: "/audio/fr/fr_girl.mp3" },
      { id: 504, text: "le garçon", imageSrc: "/boy.png", audioSrc: "/audio/fr/fr_boy.mp3" },
      { id: 505, text: "le chien", imageSrc: "/dog.png", audioSrc: "/audio/fr/fr_dog.mp3" },

      // Lesson 2: Verbs
      { id: 506, text: "marcher", imageSrc: "/walk.png", audioSrc: "/audio/fr/fr_walk.mp3" },
      { id: 507, text: "courir", imageSrc: "/run.png", audioSrc: "/audio/fr/fr_run.mp3" },
      { id: 508, text: "manger", imageSrc: "/eat.png", audioSrc: "/audio/fr/fr_eat.mp3" },
      { id: 509, text: "boire", imageSrc: "/drink.png", audioSrc: "/audio/fr/fr_drink.mp3" },
      { id: 510, text: "dormir", imageSrc: "/sleep.png", audioSrc: "/audio/fr/fr_sleep.mp3" },

      // Lesson 3: Nouns
      { id: 511, text: "le chat", imageSrc: "/cat.png", audioSrc: "/audio/fr/fr_cat.mp3" },
      { id: 512, text: "la maison", imageSrc: "/house.png", audioSrc: "/audio/fr/fr_house.mp3" },
      { id: 513, text: "la voiture", imageSrc: "/car.png", audioSrc: "/audio/fr/fr_car.mp3" },
      { id: 514, text: "l'arbre", imageSrc: "/tree.png", audioSrc: "/audio/fr/fr_tree.mp3" },
      { id: 515, text: "le livre", imageSrc: "/book.png", audioSrc: "/audio/fr/fr_book.mp3" },

      // Lesson 4: Adjectives
      { id: 516, text: "grand", imageSrc: "/big.png", audioSrc: "/audio/fr/fr_big.mp3" },
      { id: 517, text: "petit", imageSrc: "/small.png", audioSrc: "/audio/fr/fr_small.mp3" },
      { id: 518, text: "heureux", imageSrc: "/happy.png", audioSrc: "/audio/fr/fr_happy.mp3" },
      { id: 519, text: "triste", imageSrc: "/sad.png", audioSrc: "/audio/fr/fr_sad.mp3" },
      { id: 520, text: "rapide", imageSrc: "/fast.png", audioSrc: "/audio/fr/fr_fast.mp3" },

      // Lesson 5: Nouns
      { id: 521, text: "la pomme", imageSrc: "/apple.png", audioSrc: "/audio/fr/fr_apple.mp3" },
      { id: 522, text: "la banane", imageSrc: "/banana.png", audioSrc: "/audio/fr/fr_banana.mp3" },
      { id: 523, text: "le pain", imageSrc: "/bread.png", audioSrc: "/audio/fr/fr_bread.mp3" },
      { id: 524, text: "l'eau", imageSrc: "/water.png", audioSrc: "/audio/fr/fr_water.mp3" },
      { id: 525, text: "le lait", imageSrc: "/milk.png", audioSrc: "/audio/fr/fr_milk.mp3" },

      // Lesson 6: Verbs
      { id: 526, text: "lire", imageSrc: "/read.png", audioSrc: "/audio/fr/fr_read.mp3" },
      { id: 527, text: "écrire", imageSrc: "/write.png", audioSrc: "/audio/fr/fr_write.mp3" },
      { id: 528, text: "écouter", imageSrc: "/listen.png", audioSrc: "/audio/fr/fr_listen.mp3" },
      { id: 529, text: "parler", imageSrc: "/speak.png", audioSrc: "/audio/fr/fr_speak.mp3" },
      { id: 530, text: "apprendre", imageSrc: "/learn.png", audioSrc: "/audio/fr/fr_learn.mp3" },

      // Lesson 7: Nouns
      { id: 531, text: "la mère", imageSrc: "/mother.png", audioSrc: "/audio/fr/fr_mother.mp3" },
      { id: 532, text: "le père", imageSrc: "/father.png", audioSrc: "/audio/fr/fr_father.mp3" },
      { id: 533, text: "la sœur", imageSrc: "/sister.png", audioSrc: "/audio/fr/fr_sister.mp3" },
      { id: 534, text: "le frère", imageSrc: "/brother.png", audioSrc: "/audio/fr/fr_brother.mp3" },
      { id: 535, text: "le professeur", imageSrc: "/teacher.png", audioSrc: "/audio/fr/fr_teacher.mp3" },

      // Lesson 8: Adjectives
      { id: 536, text: "chaud", imageSrc: "/hot.png", audioSrc: "/audio/fr/fr_hot.mp3" },
      { id: 537, text: "froid", imageSrc: "/cold.png", audioSrc: "/audio/fr/fr_cold.mp3" },
      { id: 538, text: "nouveau", imageSrc: "/new.png", audioSrc: "/audio/fr/fr_new.mp3" },
      { id: 539, text: "vieux", imageSrc: "/old.png", audioSrc: "/audio/fr/fr_old.mp3" },
      { id: 540, text: "jeune", imageSrc: "/young.png", audioSrc: "/audio/fr/fr_young.mp3" },

      // Lesson 9: Nouns
      { id: 541, text: "l'école", imageSrc: "/school.png", audioSrc: "/audio/fr/fr_school.mp3" },
      { id: 542, text: "l'élève", imageSrc: "/student.png", audioSrc: "/audio/fr/fr_student.mp3" },
      { id: 543, text: "la classe", imageSrc: "/class.png", audioSrc: "/audio/fr/fr_class.mp3" },
      { id: 544, text: "le bureau", imageSrc: "/desk.png", audioSrc: "/audio/fr/fr_desk.mp3" },
      { id: 545, text: "la chaise", imageSrc: "/chair.png", audioSrc: "/audio/fr/fr_chair.mp3" },

      // Lesson 10: Verbs
      { id: 546, text: "sauter", imageSrc: "/jump.png", audioSrc: "/audio/fr/fr_jump.mp3" },
      { id: 547, text: "nager", imageSrc: "/swim.png", audioSrc: "/audio/fr/fr_swim.mp3" },
      { id: 548, text: "voler", imageSrc: "/fly.png", audioSrc: "/audio/fr/fr_fly.mp3" },
      { id: 549, text: "conduire", imageSrc: "/drive.png", audioSrc: "/audio/fr/fr_drive.mp3" },
      { id: 550, text: "grimper", imageSrc: "/climb.png", audioSrc: "/audio/fr/fr_climb.mp3" },

    ])

    console.log("Seed data inserted successfully for French challenge options!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
