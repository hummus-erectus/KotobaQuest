import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database with vocabulary words")

    // Delete all previous entries TODO: Specify per language and reinstate
    // await db.delete(schema.options).execute()

    // Insert Words
    await db.insert(schema.options).values([
      // Unit 1
      // Lesson 1: Nouns
      { id: 1, text: "man", imageSrc: "/man.png", audioSrc: "/audio/en/en_man.mp3" },
      { id: 2, text: "woman", imageSrc: "/woman.png", audioSrc: "/audio/en/en_woman.mp3" },
      { id: 3, text: "girl", imageSrc: "/girl.png", audioSrc: "/audio/en/en_girl.mp3" },
      { id: 4, text: "boy", imageSrc: "/boy.png", audioSrc: "/audio/en/en_boy.mp3" },
      { id: 5, text: "dog", imageSrc: "/dog.png", audioSrc: "/audio/en/en_dog.mp3" },

      // Lesson 2: Verbs
      { id: 6, text: "walk", imageSrc: "/walk.png", audioSrc: "/audio/en/en_walk.mp3" },
      { id: 7, text: "run", imageSrc: "/run.png", audioSrc: "/audio/en/en_run.mp3" },
      { id: 8, text: "eat", imageSrc: "/eat.png", audioSrc: "/audio/en/en_eat.mp3" },
      { id: 9, text: "drink", imageSrc: "/drink.png", audioSrc: "/audio/en/en_drink.mp3" },
      { id: 10, text: "sleep", imageSrc: "/sleep.png", audioSrc: "/audio/en/en_sleep.mp3" },

      // Lesson 3: Nouns
      { id: 11, text: "cat", imageSrc: "/cat.png", audioSrc: "/audio/en/en_cat.mp3" },
      { id: 12, text: "house", imageSrc: "/house.png", audioSrc: "/audio/en/en_house.mp3" },
      { id: 13, text: "car", imageSrc: "/car.png", audioSrc: "/audio/en/en_car.mp3" },
      { id: 14, text: "tree", imageSrc: "/tree.png", audioSrc: "/audio/en/en_tree.mp3" },
      { id: 15, text: "book", imageSrc: "/book.png", audioSrc: "/audio/en/en_book.mp3" },

      // Lesson 4: Adjectives
      { id: 16, text: "big", imageSrc: "/big.png", audioSrc: "/audio/en/en_big.mp3" },
      { id: 17, text: "small", imageSrc: "/small.png", audioSrc: "/audio/en/en_small.mp3" },
      { id: 18, text: "happy", imageSrc: "/happy.png", audioSrc: "/audio/en/en_happy.mp3" },
      { id: 19, text: "sad", imageSrc: "/sad.png", audioSrc: "/audio/en/en_sad.mp3" },
      { id: 20, text: "fast", imageSrc: "/fast.png", audioSrc: "/audio/en/en_fast.mp3" },

      // Lesson 5: Nouns
      { id: 21, text: "apple", imageSrc: "/apple.png", audioSrc: "/audio/en/en_apple.mp3" },
      { id: 22, text: "banana", imageSrc: "/banana.png", audioSrc: "/audio/en/en_banana.mp3" },
      { id: 23, text: "bread", imageSrc: "/bread.png", audioSrc: "/audio/en/en_bread.mp3" },
      { id: 24, text: "water", imageSrc: "/water.png", audioSrc: "/audio/en/en_water.mp3" },
      { id: 25, text: "milk", imageSrc: "/milk.png", audioSrc: "/audio/en/en_milk.mp3" },

      // Lesson 6: Verbs
      { id: 26, text: "read", imageSrc: "/read.png", audioSrc: "/audio/en/en_read.mp3" },
      { id: 27, text: "write", imageSrc: "/write.png", audioSrc: "/audio/en/en_write.mp3" },
      { id: 28, text: "listen", imageSrc: "/listen.png", audioSrc: "/audio/en/en_listen.mp3" },
      { id: 29, text: "speak", imageSrc: "/speak.png", audioSrc: "/audio/en/en_speak.mp3" },
      { id: 30, text: "learn", imageSrc: "/learn.png", audioSrc: "/audio/en/en_learn.mp3" },

      // Lesson 7: Nouns
      { id: 31, text: "mother", imageSrc: "/mother.png", audioSrc: "/audio/en/en_mother.mp3" },
      { id: 32, text: "father", imageSrc: "/father.png", audioSrc: "/audio/en/en_father.mp3" },
      { id: 33, text: "sister", imageSrc: "/sister.png", audioSrc: "/audio/en/en_sister.mp3" },
      { id: 34, text: "brother", imageSrc: "/brother.png", audioSrc: "/audio/en/en_brother.mp3" },
      { id: 35, text: "teacher", imageSrc: "/teacher.png", audioSrc: "/audio/en/en_teacher.mp3" },

      // Lesson 8: Adjectives
      { id: 36, text: "hot", imageSrc: "/hot.png", audioSrc: "/audio/en/en_hot.mp3" },
      { id: 37, text: "cold", imageSrc: "/cold.png", audioSrc: "/audio/en/en_cold.mp3" },
      { id: 38, text: "new", imageSrc: "/new.png", audioSrc: "/audio/en/en_new.mp3" },
      { id: 39, text: "old", imageSrc: "/old.png", audioSrc: "/audio/en/en_old.mp3" },
      { id: 40, text: "young", imageSrc: "/young.png", audioSrc: "/audio/en/en_young.mp3" },

      // Lesson 9: Nouns
      { id: 41, text: "school", imageSrc: "/school.png", audioSrc: "/audio/en/en_school.mp3" },
      { id: 42, text: "student", imageSrc: "/student.png", audioSrc: "/audio/en/en_student.mp3" },
      { id: 43, text: "class", imageSrc: "/class.png", audioSrc: "/audio/en/en_class.mp3" },
      { id: 44, text: "desk", imageSrc: "/desk.png", audioSrc: "/audio/en/en_desk.mp3" },
      { id: 45, text: "chair", imageSrc: "/chair.png", audioSrc: "/audio/en/en_chair.mp3" },

      // Lesson 10: Verbs
      { id: 46, text: "jump", imageSrc: "/jump.png", audioSrc: "/audio/en/en_jump.mp3" },
      { id: 47, text: "swim", imageSrc: "/swim.png", audioSrc: "/audio/en/en_swim.mp3" },
      { id: 48, text: "fly", imageSrc: "/fly.png", audioSrc: "/audio/en/en_fly.mp3" },
      { id: 49, text: "drive", imageSrc: "/drive.png", audioSrc: "/audio/en/en_drive.mp3" },
      { id: 50, text: "climb", imageSrc: "/climb.png", audioSrc: "/audio/en/en_climb.mp3" },

      // Unit 2
      // Lesson 1: Nouns
      { id: 51, text: "table", imageSrc: "/table.png", audioSrc: "/audio/en/en_table.mp3" },
      { id: 52, text: "window", imageSrc: "/window.png", audioSrc: "/audio/en/en_window.mp3" },
      { id: 53, text: "door", imageSrc: "/door.png", audioSrc: "/audio/en/en_door.mp3" },
      { id: 54, text: "floor", imageSrc: "/floor.png", audioSrc: "/audio/en/en_floor.mp3" },
      { id: 55, text: "lamp", imageSrc: "/lamp.png", audioSrc: "/audio/en/en_lamp.mp3" },

      // Lesson 2: Verbs
      { id: 56, text: "play", imageSrc: "/play.png", audioSrc: "/audio/en/en_play.mp3" },
      { id: 57, text: "work", imageSrc: "/work.png", audioSrc: "/audio/en/en_work.mp3" },
      { id: 58, text: "study", imageSrc: "/study.png", audioSrc: "/audio/en/en_study.mp3" },
      { id: 59, text: "rest", imageSrc: "/rest.png", audioSrc: "/audio/en/en_rest.mp3" },
      { id: 60, text: "travel", imageSrc: "/travel.png", audioSrc: "/audio/en/en_travel.mp3" },

      // Lesson 3: Nouns
      { id: 61, text: "city", imageSrc: "/city.png", audioSrc: "/audio/en/en_city.mp3" },
      { id: 62, text: "country", imageSrc: "/country.png", audioSrc: "/audio/en/en_country.mp3" },
      { id: 63, text: "street", imageSrc: "/street.png", audioSrc: "/audio/en/en_street.mp3" },
      { id: 64, text: "road", imageSrc: "/road.png", audioSrc: "/audio/en/en_road.mp3" },
      { id: 65, text: "park", imageSrc: "/park.png", audioSrc: "/audio/en/en_park.mp3" },

      // Lesson 4: Adjectives
      { id: 66, text: "good", imageSrc: "/good.png", audioSrc: "/audio/en/en_good.mp3" },
      { id: 67, text: "bad", imageSrc: "/bad.png", audioSrc: "/audio/en/en_bad.mp3" },
      { id: 68, text: "easy", imageSrc: "/easy.png", audioSrc: "/audio/en/en_easy.mp3" },
      { id: 69, text: "difficult", imageSrc: "/difficult.png", audioSrc: "/audio/en/en_difficult.mp3" },
      { id: 70, text: "important", imageSrc: "/important.png", audioSrc: "/audio/en/en_important.mp3" },

      // Lesson 5: Nouns
      { id: 71, text: "food", imageSrc: "/food.png", audioSrc: "/audio/en/en_food.mp3" },
      { id: 72, text: "fruit", imageSrc: "/fruit.png", audioSrc: "/audio/en/en_fruit.mp3" },
      { id: 73, text: "vegetable", imageSrc: "/vegetable.png", audioSrc: "/audio/en/en_vegetable.mp3" },
      { id: 74, text: "meat", imageSrc: "/meat.png", audioSrc: "/audio/en/en_meat.mp3" },
      { id: 75, text: "fish", imageSrc: "/fish.png", audioSrc: "/audio/en/en_fish.mp3" },

      // Lesson 6: Verbs
      { id: 76, text: "buy", imageSrc: "/buy.png", audioSrc: "/audio/en/en_buy.mp3" },
      { id: 77, text: "sell", imageSrc: "/sell.png", audioSrc: "/audio/en/en_sell.mp3" },
      { id: 78, text: "pay", imageSrc: "/pay.png", audioSrc: "/audio/en/en_pay.mp3" },
      { id: 79, text: "cost", imageSrc: "/cost.png", audioSrc: "/audio/en/en_cost.mp3" },
      { id: 80, text: "save", imageSrc: "/save.png", audioSrc: "/audio/en/en_save.mp3" },

      // Lesson 7: Nouns
      { id: 81, text: "morning", imageSrc: "/morning.png", audioSrc: "/audio/en/en_morning.mp3" },
      { id: 82, text: "afternoon", imageSrc: "/afternoon.png", audioSrc: "/audio/en/en_afternoon.mp3" },
      { id: 83, text: "evening", imageSrc: "/evening.png", audioSrc: "/audio/en/en_evening.mp3" },
      { id: 84, text: "night", imageSrc: "/night.png", audioSrc: "/audio/en/en_night.mp3" },
      { id: 85, text: "day", imageSrc: "/day.png", audioSrc: "/audio/en/en_day.mp3" },

      // Lesson 8: Adjectives
      { id: 86, text: "beautiful", imageSrc: "/beautiful.png", audioSrc: "/audio/en/en_beautiful.mp3" },
      { id: 87, text: "ugly", imageSrc: "/ugly.png", audioSrc: "/audio/en/en_ugly.mp3" },
      { id: 88, text: "clean", imageSrc: "/clean.png", audioSrc: "/audio/en/en_clean.mp3" },
      { id: 89, text: "dirty", imageSrc: "/dirty.png", audioSrc: "/audio/en/en_dirty.mp3" },
      { id: 90, text: "strong", imageSrc: "/strong.png", audioSrc: "/audio/en/en_strong.mp3" },

      // Lesson 9: Nouns
      { id: 91, text: "hand", imageSrc: "/hand.png", audioSrc: "/audio/en/en_hand.mp3" },
      { id: 92, text: "foot", imageSrc: "/foot.png", audioSrc: "/audio/en/en_foot.mp3" },
      { id: 93, text: "head", imageSrc: "/head.png", audioSrc: "/audio/en/en_head.mp3" },
      { id: 94, text: "arm", imageSrc: "/arm.png", audioSrc: "/audio/en/en_arm.mp3" },
      { id: 95, text: "leg", imageSrc: "/leg.png", audioSrc: "/audio/en/en_leg.mp3" },

      // Lesson 10: Verbs
      { id: 96, text: "cook", imageSrc: "/cook.png", audioSrc: "/audio/en/en_cook.mp3" },
      { id: 97, text: "bake", imageSrc: "/bake.png", audioSrc: "/audio/en/en_bake.mp3" },
      { id: 98, text: "wash", imageSrc: "/wash.png", audioSrc: "/audio/en/en_wash.mp3" },
      { id: 99, text: "repair", imageSrc: "/repair.png", audioSrc: "/audio/en/en_repair.mp3" },
      { id: 100, text: "sew", imageSrc: "/sew.png", audioSrc: "/audio/en/en_sew.mp3" },

      // Unit 3
      // Lesson 1: Nouns
      { id: 101, text: "doctor", imageSrc: "/doctor.png", audioSrc: "/audio/en/en_doctor.mp3" },
      { id: 102, text: "nurse", imageSrc: "/nurse.png", audioSrc: "/audio/en/en_nurse.mp3" },
      { id: 103, text: "hospital", imageSrc: "/hospital.png", audioSrc: "/audio/en/en_hospital.mp3" },
      { id: 104, text: "medicine", imageSrc: "/medicine.png", audioSrc: "/audio/en/en_medicine.mp3" },
      { id: 105, text: "health", imageSrc: "/health.png", audioSrc: "/audio/en/en_health.mp3" },

      // Lesson 2: Verbs
      { id: 106, text: "sing", imageSrc: "/sing.png", audioSrc: "/audio/en/en_sing.mp3" },
      { id: 107, text: "dance", imageSrc: "/dance.png", audioSrc: "/audio/en/en_dance.mp3" },
      { id: 108, text: "draw", imageSrc: "/draw.png", audioSrc: "/audio/en/en_draw.mp3" },
      { id: 109, text: "paint", imageSrc: "/paint.png", audioSrc: "/audio/en/en_paint.mp3" },
      { id: 110, text: "watch", imageSrc: "/watch.png", audioSrc: "/audio/en/en_watch.mp3" },

      // Lesson 3: Nouns
      { id: 111, text: "computer", imageSrc: "/computer.png", audioSrc: "/audio/en/en_computer.mp3" },
      { id: 112, text: "phone", imageSrc: "/phone.png", audioSrc: "/audio/en/en_phone.mp3" },
      { id: 113, text: "internet", imageSrc: "/internet.png", audioSrc: "/audio/en/en_internet.mp3" },
      { id: 114, text: "email", imageSrc: "/email.png", audioSrc: "/audio/en/en_email.mp3" },
      { id: 115, text: "message", imageSrc: "/message.png", audioSrc: "/audio/en/en_message.mp3" },

      // Lesson 4: Adjectives
      { id: 116, text: "loud", imageSrc: "/loud.png", audioSrc: "/audio/en/en_loud.mp3" },
      { id: 117, text: "quiet", imageSrc: "/quiet.png", audioSrc: "/audio/en/en_quiet.mp3" },
      { id: 118, text: "fast", imageSrc: "/fast.png", audioSrc: "/audio/en/en_fast.mp3" },
      { id: 119, text: "slow", imageSrc: "/slow.png", audioSrc: "/audio/en/en_slow.mp3" },
      { id: 120, text: "bright", imageSrc: "/bright.png", audioSrc: "/audio/en/en_bright.mp3" },

      // Lesson 5: Nouns
      { id: 121, text: "family", imageSrc: "/family.png", audioSrc: "/audio/en/en_family.mp3" },
      { id: 122, text: "friend", imageSrc: "/friend.png", audioSrc: "/audio/en/en_friend.mp3" },
      { id: 123, text: "child", imageSrc: "/child.png", audioSrc: "/audio/en/en_child.mp3" },
      { id: 124, text: "parent", imageSrc: "/parent.png", audioSrc: "/audio/en/en_parent.mp3" },
      { id: 125, text: "neighbor", imageSrc: "/neighbor.png", audioSrc: "/audio/en/en_neighbor.mp3" },

      // Lesson 6: Verbs
      { id: 126, text: "play", imageSrc: "/play.png", audioSrc: "/audio/en/en_play.mp3" },
      { id: 127, text: "work", imageSrc: "/work.png", audioSrc: "/audio/en/en_work.mp3" },
      { id: 128, text: "study", imageSrc: "/study.png", audioSrc: "/audio/en/en_study.mp3" },
      { id: 129, text: "rest", imageSrc: "/rest.png", audioSrc: "/audio/en/en_rest.mp3" },
      { id: 130, text: "travel", imageSrc: "/travel.png", audioSrc: "/audio/en/en_travel.mp3" },

      // Lesson 7: Nouns
      { id: 131, text: "breakfast", imageSrc: "/breakfast.png", audioSrc: "/audio/en/en_breakfast.mp3" },
      { id: 132, text: "lunch", imageSrc: "/lunch.png", audioSrc: "/audio/en/en_lunch.mp3" },
      { id: 133, text: "dinner", imageSrc: "/dinner.png", audioSrc: "/audio/en/en_dinner.mp3" },
      { id: 134, text: "meal", imageSrc: "/meal.png", audioSrc: "/audio/en/en_meal.mp3" },
      { id: 135, text: "snack", imageSrc: "/snack.png", audioSrc: "/audio/en/en_snack.mp3" },

      // Lesson 8: Adjectives
      { id: 136, text: "hot", imageSrc: "/hot.png", audioSrc: "/audio/en/en_hot.mp3" },
      { id: 137, text: "cold", imageSrc: "/cold.png", audioSrc: "/audio/en/en_cold.mp3" },
      { id: 138, text: "warm", imageSrc: "/warm.png", audioSrc: "/audio/en/en_warm.mp3" },
      { id: 139, text: "cool", imageSrc: "/cool.png", audioSrc: "/audio/en/en_cool.mp3" },
      { id: 140, text: "fresh", imageSrc: "/fresh.png", audioSrc: "/audio/en/en_fresh.mp3" },

      // Lesson 9: Nouns
      { id: 141, text: "car", imageSrc: "/car.png", audioSrc: "/audio/en/en_car.mp3" },
      { id: 142, text: "bus", imageSrc: "/bus.png", audioSrc: "/audio/en/en_bus.mp3" },
      { id: 143, text: "train", imageSrc: "/train.png", audioSrc: "/audio/en/en_train.mp3" },
      { id: 144, text: "plane", imageSrc: "/plane.png", audioSrc: "/audio/en/en_plane.mp3" },
      { id: 145, text: "boat", imageSrc: "/boat.png", audioSrc: "/audio/en/en_boat.mp3" },

      // Lesson 10: Verbs
      { id: 146, text: "drive", imageSrc: "/drive.png", audioSrc: "/audio/en/en_drive.mp3" },
      { id: 147, text: "ride", imageSrc: "/ride.png", audioSrc: "/audio/en/en_ride.mp3" },
      { id: 148, text: "fly", imageSrc: "/fly.png", audioSrc: "/audio/en/en_fly.mp3" },
      { id: 149, text: "sail", imageSrc: "/sail.png", audioSrc: "/audio/en/en_sail.mp3" },
      { id: 150, text: "walk", imageSrc: "/walk.png", audioSrc: "/audio/en/en_walk.mp3" },

      // Unit 4
      // Lesson 1: Nouns
      { id: 151, text: "bed", imageSrc: "/bed.png", audioSrc: "/audio/en/en_bed.mp3" },
      { id: 152, text: "pillow", imageSrc: "/pillow.png", audioSrc: "/audio/en/en_pillow.mp3" },
      { id: 153, text: "blanket", imageSrc: "/blanket.png", audioSrc: "/audio/en/en_blanket.mp3" },
      { id: 154, text: "sheet", imageSrc: "/sheet.png", audioSrc: "/audio/en/en_sheet.mp3" },
      { id: 155, text: "mattress", imageSrc: "/mattress.png", audioSrc: "/audio/en/en_mattress.mp3" },

      // Lesson 2: Verbs
      { id: 156, text: "swim", imageSrc: "/swim.png", audioSrc: "/audio/en/en_swim.mp3" },
      { id: 157, text: "climb", imageSrc: "/climb.png", audioSrc: "/audio/en/en_climb.mp3" },
      { id: 158, text: "hike", imageSrc: "/hike.png", audioSrc: "/audio/en/en_hike.mp3" },
      { id: 159, text: "fish", imageSrc: "/fish.png", audioSrc: "/audio/en/en_fish.mp3" },
      { id: 160, text: "camp", imageSrc: "/camp.png", audioSrc: "/audio/en/en_camp.mp3" },

      // Lesson 3: Nouns
      { id: 161, text: "kitchen", imageSrc: "/kitchen.png", audioSrc: "/audio/en/en_kitchen.mp3" },
      { id: 162, text: "bathroom", imageSrc: "/bathroom.png", audioSrc: "/audio/en/en_bathroom.mp3" },
      { id: 163, text: "living room", imageSrc: "/living_room.png", audioSrc: "/audio/en/en_living_room.mp3" },
      { id: 164, text: "bedroom", imageSrc: "/bedroom.png", audioSrc: "/audio/en/en_bedroom.mp3" },
      { id: 165, text: "garden", imageSrc: "/garden.png", audioSrc: "/audio/en/en_garden.mp3" },

      // Lesson 4: Adjectives
      { id: 166, text: "warm", imageSrc: "/warm.png", audioSrc: "/audio/en/en_warm.mp3" },
      { id: 167, text: "cool", imageSrc: "/cool.png", audioSrc: "/audio/en/en_cool.mp3" },
      { id: 168, text: "wet", imageSrc: "/wet.png", audioSrc: "/audio/en/en_wet.mp3" },
      { id: 169, text: "dry", imageSrc: "/dry.png", audioSrc: "/audio/en/en_dry.mp3" },
      { id: 170, text: "windy", imageSrc: "/windy.png", audioSrc: "/audio/en/en_windy.mp3" },

      // Lesson 5: Nouns
      { id: 171, text: "sun", imageSrc: "/sun.png", audioSrc: "/audio/en/en_sun.mp3" },
      { id: 172, text: "moon", imageSrc: "/moon.png", audioSrc: "/audio/en/en_moon.mp3" },
      { id: 173, text: "star", imageSrc: "/star.png", audioSrc: "/audio/en/en_star.mp3" },
      { id: 174, text: "sky", imageSrc: "/sky.png", audioSrc: "/audio/en/en_sky.mp3" },
      { id: 175, text: "cloud", imageSrc: "/cloud.png", audioSrc: "/audio/en/en_cloud.mp3" },

      // Lesson 6: Verbs
      { id: 176, text: "jump", imageSrc: "/jump.png", audioSrc: "/audio/en/en_jump.mp3" },
      { id: 177, text: "skip", imageSrc: "/skip.png", audioSrc: "/audio/en/en_skip.mp3" },
      { id: 178, text: "hop", imageSrc: "/hop.png", audioSrc: "/audio/en/en_hop.mp3" },
      { id: 179, text: "slide", imageSrc: "/slide.png", audioSrc: "/audio/en/en_slide.mp3" },
      { id: 180, text: "swing", imageSrc: "/swing.png", audioSrc: "/audio/en/en_swing.mp3" },

      // Lesson 7: Nouns
      { id: 181, text: "river", imageSrc: "/river.png", audioSrc: "/audio/en/en_river.mp3" },
      { id: 182, text: "lake", imageSrc: "/lake.png", audioSrc: "/audio/en/en_lake.mp3" },
      { id: 183, text: "sea", imageSrc: "/sea.png", audioSrc: "/audio/en/en_sea.mp3" },
      { id: 184, text: "ocean", imageSrc: "/ocean.png", audioSrc: "/audio/en/en_ocean.mp3" },
      { id: 185, text: "beach", imageSrc: "/beach.png", audioSrc: "/audio/en/en_beach.mp3" },

      // Lesson 8: Adjectives
      { id: 186, text: "soft", imageSrc: "/soft.png", audioSrc: "/audio/en/en_soft.mp3" },
      { id: 187, text: "hard", imageSrc: "/hard.png", audioSrc: "/audio/en/en_hard.mp3" },
      { id: 188, text: "smooth", imageSrc: "/smooth.png", audioSrc: "/audio/en/en_smooth.mp3" },
      { id: 189, text: "rough", imageSrc: "/rough.png", audioSrc: "/audio/en/en_rough.mp3" },
      { id: 190, text: "sticky", imageSrc: "/sticky.png", audioSrc: "/audio/en/en_sticky.mp3" },

      // Lesson 9: Nouns
      { id: 191, text: "mountain", imageSrc: "/mountain.png", audioSrc: "/audio/en/en_mountain.mp3" },
      { id: 192, text: "hill", imageSrc: "/hill.png", audioSrc: "/audio/en/en_hill.mp3" },
      { id: 193, text: "valley", imageSrc: "/valley.png", audioSrc: "/audio/en/en_valley.mp3" },
      { id: 194, text: "forest", imageSrc: "/forest.png", audioSrc: "/audio/en/en_forest.mp3" },
      { id: 195, text: "desert", imageSrc: "/desert.png", audioSrc: "/audio/en/en_desert.mp3" },

      // Lesson 10: Verbs
      { id: 196, text: "visit", imageSrc: "/visit.png", audioSrc: "/audio/en/en_visit.mp3" },
      { id: 197, text: "relax", imageSrc: "/relax.png", audioSrc: "/audio/en/en_relax.mp3" },
      { id: 198, text: "explore", imageSrc: "/explore.png", audioSrc: "/audio/en/en_explore.mp3" },
      { id: 199, text: "discover", imageSrc: "/discover.png", audioSrc: "/audio/en/en_discover.mp3" },
      { id: 200, text: "enjoy", imageSrc: "/enjoy.png", audioSrc: "/audio/en/en_enjoy.mp3" },

      // Unit 5
      // Lesson 1: Nouns
      { id: 201, text: "friend", imageSrc: "/friend.png", audioSrc: "/audio/en/en_friend.mp3" },
      { id: 202, text: "neighbor", imageSrc: "/neighbor.png", audioSrc: "/audio/en/en_neighbor.mp3" },
      { id: 203, text: "stranger", imageSrc: "/stranger.png", audioSrc: "/audio/en/en_stranger.mp3" },
      { id: 204, text: "guest", imageSrc: "/guest.png", audioSrc: "/audio/en/en_guest.mp3" },
      { id: 205, text: "host", imageSrc: "/host.png", audioSrc: "/audio/en/en_host.mp3" },

      // Lesson 2: Verbs
      { id: 206, text: "invite", imageSrc: "/invite.png", audioSrc: "/audio/en/en_invite.mp3" },
      { id: 207, text: "greet", imageSrc: "/greet.png", audioSrc: "/audio/en/en_greet.mp3" },
      { id: 208, text: "chat", imageSrc: "/chat.png", audioSrc: "/audio/en/en_chat.mp3" },
      { id: 209, text: "thank", imageSrc: "/thank.png", audioSrc: "/audio/en/en_thank.mp3" },
      { id: 210, text: "celebrate", imageSrc: "/celebrate.png", audioSrc: "/audio/en/en_celebrate.mp3" },

      // Lesson 3: Nouns
      { id: 211, text: "job", imageSrc: "/job.png", audioSrc: "/audio/en/en_job.mp3" },
      { id: 212, text: "work", imageSrc: "/work.png", audioSrc: "/audio/en/en_work.mp3" },
      { id: 213, text: "office", imageSrc: "/office.png", audioSrc: "/audio/en/en_office.mp3" },
      { id: 214, text: "company", imageSrc: "/company.png", audioSrc: "/audio/en/en_company.mp3" },
      { id: 215, text: "boss", imageSrc: "/boss.png", audioSrc: "/audio/en/en_boss.mp3" },

      // Lesson 4: Adjectives
      { id: 216, text: "friendly", imageSrc: "/friendly.png", audioSrc: "/audio/en/en_friendly.mp3" },
      { id: 217, text: "kind", imageSrc: "/kind.png", audioSrc: "/audio/en/en_kind.mp3" },
      { id: 218, text: "helpful", imageSrc: "/helpful.png", audioSrc: "/audio/en/en_helpful.mp3" },
      { id: 219, text: "generous", imageSrc: "/generous.png", audioSrc: "/audio/en/en_generous.mp3" },
      { id: 220, text: "polite", imageSrc: "/polite.png", audioSrc: "/audio/en/en_polite.mp3" },

      // Lesson 5: Nouns
      { id: 221, text: "money", imageSrc: "/money.png", audioSrc: "/audio/en/en_money.mp3" },
      { id: 222, text: "bank", imageSrc: "/bank.png", audioSrc: "/audio/en/en_bank.mp3" },
      { id: 223, text: "wallet", imageSrc: "/wallet.png", audioSrc: "/audio/en/en_wallet.mp3" },
      { id: 224, text: "coin", imageSrc: "/coin.png", audioSrc: "/audio/en/en_coin.mp3" },
      { id: 225, text: "bill", imageSrc: "/bill.png", audioSrc: "/audio/en/en_bill.mp3" },

      // Lesson 6: Verbs
      { id: 226, text: "pack", imageSrc: "/pack.png", audioSrc: "/audio/en/en_pack.mp3" },
      { id: 227, text: "unpack", imageSrc: "/unpack.png", audioSrc: "/audio/en/en_unpack.mp3" },
      { id: 228, text: "shop", imageSrc: "/shop.png", audioSrc: "/audio/en/en_shop.mp3" },
      { id: 229, text: "choose", imageSrc: "/choose.png", audioSrc: "/audio/en/en_choose.mp3" },
      { id: 230, text: "pick", imageSrc: "/pick.png", audioSrc: "/audio/en/en_pick.mp3" },

      // Lesson 7: Nouns
      { id: 231, text: "shop", imageSrc: "/shop.png", audioSrc: "/audio/en/en_shop.mp3" },
      { id: 232, text: "market", imageSrc: "/market.png", audioSrc: "/audio/en/en_market.mp3" },
      { id: 233, text: "mall", imageSrc: "/mall.png", audioSrc: "/audio/en/en_mall.mp3" },
      { id: 234, text: "sale", imageSrc: "/sale.png", audioSrc: "/audio/en/en_sale.mp3" },
      { id: 235, text: "store", imageSrc: "/store.png", audioSrc: "/audio/en/en_store.mp3" },

      // Lesson 8: Adjectives
      { id: 236, text: "tired", imageSrc: "/tired.png", audioSrc: "/audio/en/en_tired.mp3" },
      { id: 237, text: "energetic", imageSrc: "/energetic.png", audioSrc: "/audio/en/en_energetic.mp3" },
      { id: 238, text: "busy", imageSrc: "/busy.png", audioSrc: "/audio/en/en_busy.mp3" },
      { id: 239, text: "free", imageSrc: "/free.png", audioSrc: "/audio/en/en_free.mp3" },
      { id: 240, text: "relaxed", imageSrc: "/relaxed.png", audioSrc: "/audio/en/en_relaxed.mp3" },

      // Lesson 9: Nouns
      { id: 241, text: "holiday", imageSrc: "/holiday.png", audioSrc: "/audio/en/en_holiday.mp3" },
      { id: 242, text: "festival", imageSrc: "/festival.png", audioSrc: "/audio/en/en_festival.mp3" },
      { id: 243, text: "event", imageSrc: "/event.png", audioSrc: "/audio/en/en_event.mp3" },
      { id: 244, text: "celebration", imageSrc: "/celebration.png", audioSrc: "/audio/en/en_celebration.mp3" },
      { id: 245, text: "party", imageSrc: "/party.png", audioSrc: "/audio/en/en_party.mp3" },

      // Lesson 10: Verbs
      { id: 246, text: "design", imageSrc: "/design.png", audioSrc: "/audio/en/en_design.mp3" },
      { id: 247, text: "build", imageSrc: "/build.png", audioSrc: "/audio/en/en_build.mp3" },
      { id: 248, text: "create", imageSrc: "/create.png", audioSrc: "/audio/en/en_create.mp3" },
      { id: 249, text: "invent", imageSrc: "/invent.png", audioSrc: "/audio/en/en_invent.mp3" },
      { id: 250, text: "imagine", imageSrc: "/imagine.png", audioSrc: "/audio/en/en_imagine.mp3" },

    ])

    console.log("Seed data inserted successfully for English challenge options!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()


