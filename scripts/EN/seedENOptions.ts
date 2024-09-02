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
      { id: 1, text: "man", imageSrc: "/man.svg", audioSrc: "/audio/en/en_man.mp3" },
      { id: 2, text: "woman", imageSrc: "/woman.svg", audioSrc: "/audio/en/en_woman.mp3" },
      { id: 3, text: "girl", imageSrc: "/girl.svg", audioSrc: "/audio/en/en_girl.mp3" },
      { id: 4, text: "boy", imageSrc: "/boy.svg", audioSrc: "/audio/en/en_boy.mp3" },
      { id: 5, text: "dog", imageSrc: "/dog.svg", audioSrc: "/audio/en/en_dog.mp3" },

      // Lesson 2: Verbs
      { id: 6, text: "walk", imageSrc: "/walk.svg", audioSrc: "/audio/en/en_walk.mp3" },
      { id: 7, text: "run", imageSrc: "/run.svg", audioSrc: "/audio/en/en_run.mp3" },
      { id: 8, text: "eat", imageSrc: "/eat.svg", audioSrc: "/audio/en/en_eat.mp3" },
      { id: 9, text: "drink", imageSrc: "/drink.svg", audioSrc: "/audio/en/en_drink.mp3" },
      { id: 10, text: "sleep", imageSrc: "/sleep.svg", audioSrc: "/audio/en/en_sleep.mp3" },

      // Lesson 3: Nouns
      { id: 11, text: "cat", imageSrc: "/cat.svg", audioSrc: "/audio/en/en_cat.mp3" },
      { id: 12, text: "house", imageSrc: "/house.svg", audioSrc: "/audio/en/en_house.mp3" },
      { id: 13, text: "car", imageSrc: "/car.svg", audioSrc: "/audio/en/en_car.mp3" },
      { id: 14, text: "tree", imageSrc: "/tree.svg", audioSrc: "/audio/en/en_tree.mp3" },
      { id: 15, text: "book", imageSrc: "/book.svg", audioSrc: "/audio/en/en_book.mp3" },

      // Lesson 4: Adjectives
      { id: 16, text: "big", imageSrc: "/big.svg", audioSrc: "/audio/en/en_big.mp3" },
      { id: 17, text: "small", imageSrc: "/small.svg", audioSrc: "/audio/en/en_small.mp3" },
      { id: 18, text: "happy", imageSrc: "/happy.svg", audioSrc: "/audio/en/en_happy.mp3" },
      { id: 19, text: "sad", imageSrc: "/sad.svg", audioSrc: "/audio/en/en_sad.mp3" },
      { id: 20, text: "fast", imageSrc: "/fast.svg", audioSrc: "/audio/en/en_fast.mp3" },

      // Lesson 5: Nouns
      { id: 21, text: "apple", imageSrc: "/apple.svg", audioSrc: "/audio/en/en_apple.mp3" },
      { id: 22, text: "banana", imageSrc: "/banana.svg", audioSrc: "/audio/en/en_banana.mp3" },
      { id: 23, text: "bread", imageSrc: "/bread.svg", audioSrc: "/audio/en/en_bread.mp3" },
      { id: 24, text: "water", imageSrc: "/water.svg", audioSrc: "/audio/en/en_water.mp3" },
      { id: 25, text: "milk", imageSrc: "/milk.svg", audioSrc: "/audio/en/en_milk.mp3" },

      // Lesson 6: Verbs
      { id: 26, text: "read", imageSrc: "/read.svg", audioSrc: "/audio/en/en_read.mp3" },
      { id: 27, text: "write", imageSrc: "/write.svg", audioSrc: "/audio/en/en_write.mp3" },
      { id: 28, text: "listen", imageSrc: "/listen.svg", audioSrc: "/audio/en/en_listen.mp3" },
      { id: 29, text: "speak", imageSrc: "/speak.svg", audioSrc: "/audio/en/en_speak.mp3" },
      { id: 30, text: "learn", imageSrc: "/learn.svg", audioSrc: "/audio/en/en_learn.mp3" },

      // Lesson 7: Nouns
      { id: 31, text: "mother", imageSrc: "/mother.svg", audioSrc: "/audio/en/en_mother.mp3" },
      { id: 32, text: "father", imageSrc: "/father.svg", audioSrc: "/audio/en/en_father.mp3" },
      { id: 33, text: "sister", imageSrc: "/sister.svg", audioSrc: "/audio/en/en_sister.mp3" },
      { id: 34, text: "brother", imageSrc: "/brother.svg", audioSrc: "/audio/en/en_brother.mp3" },
      { id: 35, text: "teacher", imageSrc: "/teacher.svg", audioSrc: "/audio/en/en_teacher.mp3" },

      // Lesson 8: Adjectives
      { id: 36, text: "hot", imageSrc: "/hot.svg", audioSrc: "/audio/en/en_hot.mp3" },
      { id: 37, text: "cold", imageSrc: "/cold.svg", audioSrc: "/audio/en/en_cold.mp3" },
      { id: 38, text: "new", imageSrc: "/new.svg", audioSrc: "/audio/en/en_new.mp3" },
      { id: 39, text: "old", imageSrc: "/old.svg", audioSrc: "/audio/en/en_old.mp3" },
      { id: 40, text: "young", imageSrc: "/young.svg", audioSrc: "/audio/en/en_young.mp3" },

      // Lesson 9: Nouns
      { id: 41, text: "school", imageSrc: "/school.svg", audioSrc: "/audio/en/en_school.mp3" },
      { id: 42, text: "student", imageSrc: "/student.svg", audioSrc: "/audio/en/en_student.mp3" },
      { id: 43, text: "class", imageSrc: "/class.svg", audioSrc: "/audio/en/en_class.mp3" },
      { id: 44, text: "desk", imageSrc: "/desk.svg", audioSrc: "/audio/en/en_desk.mp3" },
      { id: 45, text: "chair", imageSrc: "/chair.svg", audioSrc: "/audio/en/en_chair.mp3" },

      // Lesson 10: Verbs
      { id: 46, text: "jump", imageSrc: "/jump.svg", audioSrc: "/audio/en/en_jump.mp3" },
      { id: 47, text: "swim", imageSrc: "/swim.svg", audioSrc: "/audio/en/en_swim.mp3" },
      { id: 48, text: "fly", imageSrc: "/fly.svg", audioSrc: "/audio/en/en_fly.mp3" },
      { id: 49, text: "drive", imageSrc: "/drive.svg", audioSrc: "/audio/en/en_drive.mp3" },
      { id: 50, text: "climb", imageSrc: "/climb.svg", audioSrc: "/audio/en/en_climb.mp3" },

      // Unit 2
      // Lesson 1: Nouns
      { id: 51, text: "table", imageSrc: "/table.svg", audioSrc: "/audio/en/en_table.mp3" },
      { id: 52, text: "window", imageSrc: "/window.svg", audioSrc: "/audio/en/en_window.mp3" },
      { id: 53, text: "door", imageSrc: "/door.svg", audioSrc: "/audio/en/en_door.mp3" },
      { id: 54, text: "floor", imageSrc: "/floor.svg", audioSrc: "/audio/en/en_floor.mp3" },
      { id: 55, text: "lamp", imageSrc: "/lamp.svg", audioSrc: "/audio/en/en_lamp.mp3" },

      // Lesson 2: Verbs
      { id: 56, text: "play", imageSrc: "/play.svg", audioSrc: "/audio/en/en_play.mp3" },
      { id: 57, text: "work", imageSrc: "/work.svg", audioSrc: "/audio/en/en_work.mp3" },
      { id: 58, text: "study", imageSrc: "/study.svg", audioSrc: "/audio/en/en_study.mp3" },
      { id: 59, text: "rest", imageSrc: "/rest.svg", audioSrc: "/audio/en/en_rest.mp3" },
      { id: 60, text: "travel", imageSrc: "/travel.svg", audioSrc: "/audio/en/en_travel.mp3" },

      // Lesson 3: Nouns
      { id: 61, text: "city", imageSrc: "/city.svg", audioSrc: "/audio/en/en_city.mp3" },
      { id: 62, text: "country", imageSrc: "/country.svg", audioSrc: "/audio/en/en_country.mp3" },
      { id: 63, text: "street", imageSrc: "/street.svg", audioSrc: "/audio/en/en_street.mp3" },
      { id: 64, text: "road", imageSrc: "/road.svg", audioSrc: "/audio/en/en_road.mp3" },
      { id: 65, text: "park", imageSrc: "/park.svg", audioSrc: "/audio/en/en_park.mp3" },

      // Lesson 4: Adjectives
      { id: 66, text: "good", imageSrc: "/good.svg", audioSrc: "/audio/en/en_good.mp3" },
      { id: 67, text: "bad", imageSrc: "/bad.svg", audioSrc: "/audio/en/en_bad.mp3" },
      { id: 68, text: "easy", imageSrc: "/easy.svg", audioSrc: "/audio/en/en_easy.mp3" },
      { id: 69, text: "difficult", imageSrc: "/difficult.svg", audioSrc: "/audio/en/en_difficult.mp3" },
      { id: 70, text: "important", imageSrc: "/important.svg", audioSrc: "/audio/en/en_important.mp3" },

      // Lesson 5: Nouns
      { id: 71, text: "food", imageSrc: "/food.svg", audioSrc: "/audio/en/en_food.mp3" },
      { id: 72, text: "fruit", imageSrc: "/fruit.svg", audioSrc: "/audio/en/en_fruit.mp3" },
      { id: 73, text: "vegetable", imageSrc: "/vegetable.svg", audioSrc: "/audio/en/en_vegetable.mp3" },
      { id: 74, text: "meat", imageSrc: "/meat.svg", audioSrc: "/audio/en/en_meat.mp3" },
      { id: 75, text: "fish", imageSrc: "/fish.svg", audioSrc: "/audio/en/en_fish.mp3" },

      // Lesson 6: Verbs
      { id: 76, text: "buy", imageSrc: "/buy.svg", audioSrc: "/audio/en/en_buy.mp3" },
      { id: 77, text: "sell", imageSrc: "/sell.svg", audioSrc: "/audio/en/en_sell.mp3" },
      { id: 78, text: "pay", imageSrc: "/pay.svg", audioSrc: "/audio/en/en_pay.mp3" },
      { id: 79, text: "cost", imageSrc: "/cost.svg", audioSrc: "/audio/en/en_cost.mp3" },
      { id: 80, text: "save", imageSrc: "/save.svg", audioSrc: "/audio/en/en_save.mp3" },

      // Lesson 7: Nouns
      { id: 81, text: "morning", imageSrc: "/morning.svg", audioSrc: "/audio/en/en_morning.mp3" },
      { id: 82, text: "afternoon", imageSrc: "/afternoon.svg", audioSrc: "/audio/en/en_afternoon.mp3" },
      { id: 83, text: "evening", imageSrc: "/evening.svg", audioSrc: "/audio/en/en_evening.mp3" },
      { id: 84, text: "night", imageSrc: "/night.svg", audioSrc: "/audio/en/en_night.mp3" },
      { id: 85, text: "day", imageSrc: "/day.svg", audioSrc: "/audio/en/en_day.mp3" },

      // Lesson 8: Adjectives
      { id: 86, text: "beautiful", imageSrc: "/beautiful.svg", audioSrc: "/audio/en/en_beautiful.mp3" },
      { id: 87, text: "ugly", imageSrc: "/ugly.svg", audioSrc: "/audio/en/en_ugly.mp3" },
      { id: 88, text: "clean", imageSrc: "/clean.svg", audioSrc: "/audio/en/en_clean.mp3" },
      { id: 89, text: "dirty", imageSrc: "/dirty.svg", audioSrc: "/audio/en/en_dirty.mp3" },
      { id: 90, text: "strong", imageSrc: "/strong.svg", audioSrc: "/audio/en/en_strong.mp3" },

      // Lesson 9: Nouns
      { id: 91, text: "hand", imageSrc: "/hand.svg", audioSrc: "/audio/en/en_hand.mp3" },
      { id: 92, text: "foot", imageSrc: "/foot.svg", audioSrc: "/audio/en/en_foot.mp3" },
      { id: 93, text: "head", imageSrc: "/head.svg", audioSrc: "/audio/en/en_head.mp3" },
      { id: 94, text: "arm", imageSrc: "/arm.svg", audioSrc: "/audio/en/en_arm.mp3" },
      { id: 95, text: "leg", imageSrc: "/leg.svg", audioSrc: "/audio/en/en_leg.mp3" },

      // Lesson 10: Verbs
      { id: 96, text: "cook", imageSrc: "/cook.svg", audioSrc: "/audio/en/en_cook.mp3" },
      { id: 97, text: "bake", imageSrc: "/bake.svg", audioSrc: "/audio/en/en_bake.mp3" },
      { id: 98, text: "wash", imageSrc: "/wash.svg", audioSrc: "/audio/en/en_wash.mp3" },
      { id: 99, text: "repair", imageSrc: "/repair.svg", audioSrc: "/audio/en/en_repair.mp3" },
      { id: 100, text: "sew", imageSrc: "/sew.svg", audioSrc: "/audio/en/en_sew.mp3" },

      // Unit 3
      // Lesson 1: Nouns
      { id: 101, text: "doctor", imageSrc: "/doctor.svg", audioSrc: "/audio/en/en_doctor.mp3" },
      { id: 102, text: "nurse", imageSrc: "/nurse.svg", audioSrc: "/audio/en/en_nurse.mp3" },
      { id: 103, text: "hospital", imageSrc: "/hospital.svg", audioSrc: "/audio/en/en_hospital.mp3" },
      { id: 104, text: "medicine", imageSrc: "/medicine.svg", audioSrc: "/audio/en/en_medicine.mp3" },
      { id: 105, text: "health", imageSrc: "/health.svg", audioSrc: "/audio/en/en_health.mp3" },

      // Lesson 2: Verbs
      { id: 106, text: "sing", imageSrc: "/sing.svg", audioSrc: "/audio/en/en_sing.mp3" },
      { id: 107, text: "dance", imageSrc: "/dance.svg", audioSrc: "/audio/en/en_dance.mp3" },
      { id: 108, text: "draw", imageSrc: "/draw.svg", audioSrc: "/audio/en/en_draw.mp3" },
      { id: 109, text: "paint", imageSrc: "/paint.svg", audioSrc: "/audio/en/en_paint.mp3" },
      { id: 110, text: "watch", imageSrc: "/watch.svg", audioSrc: "/audio/en/en_watch.mp3" },

      // Lesson 3: Nouns
      { id: 111, text: "computer", imageSrc: "/computer.svg", audioSrc: "/audio/en/en_computer.mp3" },
      { id: 112, text: "phone", imageSrc: "/phone.svg", audioSrc: "/audio/en/en_phone.mp3" },
      { id: 113, text: "internet", imageSrc: "/internet.svg", audioSrc: "/audio/en/en_internet.mp3" },
      { id: 114, text: "email", imageSrc: "/email.svg", audioSrc: "/audio/en/en_email.mp3" },
      { id: 115, text: "message", imageSrc: "/message.svg", audioSrc: "/audio/en/en_message.mp3" },

      // Lesson 4: Adjectives
      { id: 116, text: "loud", imageSrc: "/loud.svg", audioSrc: "/audio/en/en_loud.mp3" },
      { id: 117, text: "quiet", imageSrc: "/quiet.svg", audioSrc: "/audio/en/en_quiet.mp3" },
      { id: 118, text: "fast", imageSrc: "/fast.svg", audioSrc: "/audio/en/en_fast.mp3" },
      { id: 119, text: "slow", imageSrc: "/slow.svg", audioSrc: "/audio/en/en_slow.mp3" },
      { id: 120, text: "bright", imageSrc: "/bright.svg", audioSrc: "/audio/en/en_bright.mp3" },

      // Lesson 5: Nouns
      { id: 121, text: "family", imageSrc: "/family.svg", audioSrc: "/audio/en/en_family.mp3" },
      { id: 122, text: "friend", imageSrc: "/friend.svg", audioSrc: "/audio/en/en_friend.mp3" },
      { id: 123, text: "child", imageSrc: "/child.svg", audioSrc: "/audio/en/en_child.mp3" },
      { id: 124, text: "parent", imageSrc: "/parent.svg", audioSrc: "/audio/en/en_parent.mp3" },
      { id: 125, text: "neighbor", imageSrc: "/neighbor.svg", audioSrc: "/audio/en/en_neighbor.mp3" },

      // Lesson 6: Verbs
      { id: 126, text: "play", imageSrc: "/play.svg", audioSrc: "/audio/en/en_play.mp3" },
      { id: 127, text: "work", imageSrc: "/work.svg", audioSrc: "/audio/en/en_work.mp3" },
      { id: 128, text: "study", imageSrc: "/study.svg", audioSrc: "/audio/en/en_study.mp3" },
      { id: 129, text: "rest", imageSrc: "/rest.svg", audioSrc: "/audio/en/en_rest.mp3" },
      { id: 130, text: "travel", imageSrc: "/travel.svg", audioSrc: "/audio/en/en_travel.mp3" },

      // Lesson 7: Nouns
      { id: 131, text: "breakfast", imageSrc: "/breakfast.svg", audioSrc: "/audio/en/en_breakfast.mp3" },
      { id: 132, text: "lunch", imageSrc: "/lunch.svg", audioSrc: "/audio/en/en_lunch.mp3" },
      { id: 133, text: "dinner", imageSrc: "/dinner.svg", audioSrc: "/audio/en/en_dinner.mp3" },
      { id: 134, text: "meal", imageSrc: "/meal.svg", audioSrc: "/audio/en/en_meal.mp3" },
      { id: 135, text: "snack", imageSrc: "/snack.svg", audioSrc: "/audio/en/en_snack.mp3" },

      // Lesson 8: Adjectives
      { id: 136, text: "hot", imageSrc: "/hot.svg", audioSrc: "/audio/en/en_hot.mp3" },
      { id: 137, text: "cold", imageSrc: "/cold.svg", audioSrc: "/audio/en/en_cold.mp3" },
      { id: 138, text: "warm", imageSrc: "/warm.svg", audioSrc: "/audio/en/en_warm.mp3" },
      { id: 139, text: "cool", imageSrc: "/cool.svg", audioSrc: "/audio/en/en_cool.mp3" },
      { id: 140, text: "fresh", imageSrc: "/fresh.svg", audioSrc: "/audio/en/en_fresh.mp3" },

      // Lesson 9: Nouns
      { id: 141, text: "car", imageSrc: "/car.svg", audioSrc: "/audio/en/en_car.mp3" },
      { id: 142, text: "bus", imageSrc: "/bus.svg", audioSrc: "/audio/en/en_bus.mp3" },
      { id: 143, text: "train", imageSrc: "/train.svg", audioSrc: "/audio/en/en_train.mp3" },
      { id: 144, text: "plane", imageSrc: "/plane.svg", audioSrc: "/audio/en/en_plane.mp3" },
      { id: 145, text: "boat", imageSrc: "/boat.svg", audioSrc: "/audio/en/en_boat.mp3" },

      // Lesson 10: Verbs
      { id: 146, text: "drive", imageSrc: "/drive.svg", audioSrc: "/audio/en/en_drive.mp3" },
      { id: 147, text: "ride", imageSrc: "/ride.svg", audioSrc: "/audio/en/en_ride.mp3" },
      { id: 148, text: "fly", imageSrc: "/fly.svg", audioSrc: "/audio/en/en_fly.mp3" },
      { id: 149, text: "sail", imageSrc: "/sail.svg", audioSrc: "/audio/en/en_sail.mp3" },
      { id: 150, text: "walk", imageSrc: "/walk.svg", audioSrc: "/audio/en/en_walk.mp3" },

      // Unit 4
      // Lesson 1: Nouns
      { id: 151, text: "bed", imageSrc: "/bed.svg", audioSrc: "/audio/en/en_bed.mp3" },
      { id: 152, text: "pillow", imageSrc: "/pillow.svg", audioSrc: "/audio/en/en_pillow.mp3" },
      { id: 153, text: "blanket", imageSrc: "/blanket.svg", audioSrc: "/audio/en/en_blanket.mp3" },
      { id: 154, text: "sheet", imageSrc: "/sheet.svg", audioSrc: "/audio/en/en_sheet.mp3" },
      { id: 155, text: "mattress", imageSrc: "/mattress.svg", audioSrc: "/audio/en/en_mattress.mp3" },

      // Lesson 2: Verbs
      { id: 156, text: "swim", imageSrc: "/swim.svg", audioSrc: "/audio/en/en_swim.mp3" },
      { id: 157, text: "climb", imageSrc: "/climb.svg", audioSrc: "/audio/en/en_climb.mp3" },
      { id: 158, text: "hike", imageSrc: "/hike.svg", audioSrc: "/audio/en/en_hike.mp3" },
      { id: 159, text: "fish", imageSrc: "/fish.svg", audioSrc: "/audio/en/en_fish.mp3" },
      { id: 160, text: "camp", imageSrc: "/camp.svg", audioSrc: "/audio/en/en_camp.mp3" },

      // Lesson 3: Nouns
      { id: 161, text: "kitchen", imageSrc: "/kitchen.svg", audioSrc: "/audio/en/en_kitchen.mp3" },
      { id: 162, text: "bathroom", imageSrc: "/bathroom.svg", audioSrc: "/audio/en/en_bathroom.mp3" },
      { id: 163, text: "living room", imageSrc: "/living_room.svg", audioSrc: "/audio/en/en_living_room.mp3" },
      { id: 164, text: "bedroom", imageSrc: "/bedroom.svg", audioSrc: "/audio/en/en_bedroom.mp3" },
      { id: 165, text: "garden", imageSrc: "/garden.svg", audioSrc: "/audio/en/en_garden.mp3" },

      // Lesson 4: Adjectives
      { id: 166, text: "warm", imageSrc: "/warm.svg", audioSrc: "/audio/en/en_warm.mp3" },
      { id: 167, text: "cool", imageSrc: "/cool.svg", audioSrc: "/audio/en/en_cool.mp3" },
      { id: 168, text: "wet", imageSrc: "/wet.svg", audioSrc: "/audio/en/en_wet.mp3" },
      { id: 169, text: "dry", imageSrc: "/dry.svg", audioSrc: "/audio/en/en_dry.mp3" },
      { id: 170, text: "windy", imageSrc: "/windy.svg", audioSrc: "/audio/en/en_windy.mp3" },

      // Lesson 5: Nouns
      { id: 171, text: "sun", imageSrc: "/sun.svg", audioSrc: "/audio/en/en_sun.mp3" },
      { id: 172, text: "moon", imageSrc: "/moon.svg", audioSrc: "/audio/en/en_moon.mp3" },
      { id: 173, text: "star", imageSrc: "/star.svg", audioSrc: "/audio/en/en_star.mp3" },
      { id: 174, text: "sky", imageSrc: "/sky.svg", audioSrc: "/audio/en/en_sky.mp3" },
      { id: 175, text: "cloud", imageSrc: "/cloud.svg", audioSrc: "/audio/en/en_cloud.mp3" },

      // Lesson 6: Verbs
      { id: 176, text: "jump", imageSrc: "/jump.svg", audioSrc: "/audio/en/en_jump.mp3" },
      { id: 177, text: "skip", imageSrc: "/skip.svg", audioSrc: "/audio/en/en_skip.mp3" },
      { id: 178, text: "hop", imageSrc: "/hop.svg", audioSrc: "/audio/en/en_hop.mp3" },
      { id: 179, text: "slide", imageSrc: "/slide.svg", audioSrc: "/audio/en/en_slide.mp3" },
      { id: 180, text: "swing", imageSrc: "/swing.svg", audioSrc: "/audio/en/en_swing.mp3" },

      // Lesson 7: Nouns
      { id: 181, text: "river", imageSrc: "/river.svg", audioSrc: "/audio/en/en_river.mp3" },
      { id: 182, text: "lake", imageSrc: "/lake.svg", audioSrc: "/audio/en/en_lake.mp3" },
      { id: 183, text: "sea", imageSrc: "/sea.svg", audioSrc: "/audio/en/en_sea.mp3" },
      { id: 184, text: "ocean", imageSrc: "/ocean.svg", audioSrc: "/audio/en/en_ocean.mp3" },
      { id: 185, text: "beach", imageSrc: "/beach.svg", audioSrc: "/audio/en/en_beach.mp3" },

      // Lesson 8: Adjectives
      { id: 186, text: "soft", imageSrc: "/soft.svg", audioSrc: "/audio/en/en_soft.mp3" },
      { id: 187, text: "hard", imageSrc: "/hard.svg", audioSrc: "/audio/en/en_hard.mp3" },
      { id: 188, text: "smooth", imageSrc: "/smooth.svg", audioSrc: "/audio/en/en_smooth.mp3" },
      { id: 189, text: "rough", imageSrc: "/rough.svg", audioSrc: "/audio/en/en_rough.mp3" },
      { id: 190, text: "sticky", imageSrc: "/sticky.svg", audioSrc: "/audio/en/en_sticky.mp3" },

      // Lesson 9: Nouns
      { id: 191, text: "mountain", imageSrc: "/mountain.svg", audioSrc: "/audio/en/en_mountain.mp3" },
      { id: 192, text: "hill", imageSrc: "/hill.svg", audioSrc: "/audio/en/en_hill.mp3" },
      { id: 193, text: "valley", imageSrc: "/valley.svg", audioSrc: "/audio/en/en_valley.mp3" },
      { id: 194, text: "forest", imageSrc: "/forest.svg", audioSrc: "/audio/en/en_forest.mp3" },
      { id: 195, text: "desert", imageSrc: "/desert.svg", audioSrc: "/audio/en/en_desert.mp3" },

      // Lesson 10: Verbs
      { id: 196, text: "visit", imageSrc: "/visit.svg", audioSrc: "/audio/en/en_visit.mp3" },
      { id: 197, text: "relax", imageSrc: "/relax.svg", audioSrc: "/audio/en/en_relax.mp3" },
      { id: 198, text: "explore", imageSrc: "/explore.svg", audioSrc: "/audio/en/en_explore.mp3" },
      { id: 199, text: "discover", imageSrc: "/discover.svg", audioSrc: "/audio/en/en_discover.mp3" },
      { id: 200, text: "enjoy", imageSrc: "/enjoy.svg", audioSrc: "/audio/en/en_enjoy.mp3" },

      // Unit 5
      // Lesson 1: Nouns
      { id: 201, text: "friend", imageSrc: "/friend.svg", audioSrc: "/audio/en/en_friend.mp3" },
      { id: 202, text: "neighbor", imageSrc: "/neighbor.svg", audioSrc: "/audio/en/en_neighbor.mp3" },
      { id: 203, text: "stranger", imageSrc: "/stranger.svg", audioSrc: "/audio/en/en_stranger.mp3" },
      { id: 204, text: "guest", imageSrc: "/guest.svg", audioSrc: "/audio/en/en_guest.mp3" },
      { id: 205, text: "host", imageSrc: "/host.svg", audioSrc: "/audio/en/en_host.mp3" },

      // Lesson 2: Verbs
      { id: 206, text: "invite", imageSrc: "/invite.svg", audioSrc: "/audio/en/en_invite.mp3" },
      { id: 207, text: "greet", imageSrc: "/greet.svg", audioSrc: "/audio/en/en_greet.mp3" },
      { id: 208, text: "chat", imageSrc: "/chat.svg", audioSrc: "/audio/en/en_chat.mp3" },
      { id: 209, text: "thank", imageSrc: "/thank.svg", audioSrc: "/audio/en/en_thank.mp3" },
      { id: 210, text: "celebrate", imageSrc: "/celebrate.svg", audioSrc: "/audio/en/en_celebrate.mp3" },

      // Lesson 3: Nouns
      { id: 211, text: "job", imageSrc: "/job.svg", audioSrc: "/audio/en/en_job.mp3" },
      { id: 212, text: "work", imageSrc: "/work.svg", audioSrc: "/audio/en/en_work.mp3" },
      { id: 213, text: "office", imageSrc: "/office.svg", audioSrc: "/audio/en/en_office.mp3" },
      { id: 214, text: "company", imageSrc: "/company.svg", audioSrc: "/audio/en/en_company.mp3" },
      { id: 215, text: "boss", imageSrc: "/boss.svg", audioSrc: "/audio/en/en_boss.mp3" },

      // Lesson 4: Adjectives
      { id: 216, text: "friendly", imageSrc: "/friendly.svg", audioSrc: "/audio/en/en_friendly.mp3" },
      { id: 217, text: "kind", imageSrc: "/kind.svg", audioSrc: "/audio/en/en_kind.mp3" },
      { id: 218, text: "helpful", imageSrc: "/helpful.svg", audioSrc: "/audio/en/en_helpful.mp3" },
      { id: 219, text: "generous", imageSrc: "/generous.svg", audioSrc: "/audio/en/en_generous.mp3" },
      { id: 220, text: "polite", imageSrc: "/polite.svg", audioSrc: "/audio/en/en_polite.mp3" },

      // Lesson 5: Nouns
      { id: 221, text: "money", imageSrc: "/money.svg", audioSrc: "/audio/en/en_money.mp3" },
      { id: 222, text: "bank", imageSrc: "/bank.svg", audioSrc: "/audio/en/en_bank.mp3" },
      { id: 223, text: "wallet", imageSrc: "/wallet.svg", audioSrc: "/audio/en/en_wallet.mp3" },
      { id: 224, text: "coin", imageSrc: "/coin.svg", audioSrc: "/audio/en/en_coin.mp3" },
      { id: 225, text: "bill", imageSrc: "/bill.svg", audioSrc: "/audio/en/en_bill.mp3" },

      // Lesson 6: Verbs
      { id: 226, text: "pack", imageSrc: "/pack.svg", audioSrc: "/audio/en/en_pack.mp3" },
      { id: 227, text: "unpack", imageSrc: "/unpack.svg", audioSrc: "/audio/en/en_unpack.mp3" },
      { id: 228, text: "shop", imageSrc: "/shop.svg", audioSrc: "/audio/en/en_shop.mp3" },
      { id: 229, text: "choose", imageSrc: "/choose.svg", audioSrc: "/audio/en/en_choose.mp3" },
      { id: 230, text: "pick", imageSrc: "/pick.svg", audioSrc: "/audio/en/en_pick.mp3" },

      // Lesson 7: Nouns
      { id: 231, text: "shop", imageSrc: "/shop.svg", audioSrc: "/audio/en/en_shop.mp3" },
      { id: 232, text: "market", imageSrc: "/market.svg", audioSrc: "/audio/en/en_market.mp3" },
      { id: 233, text: "mall", imageSrc: "/mall.svg", audioSrc: "/audio/en/en_mall.mp3" },
      { id: 234, text: "sale", imageSrc: "/sale.svg", audioSrc: "/audio/en/en_sale.mp3" },
      { id: 235, text: "store", imageSrc: "/store.svg", audioSrc: "/audio/en/en_store.mp3" },

      // Lesson 8: Adjectives
      { id: 236, text: "tired", imageSrc: "/tired.svg", audioSrc: "/audio/en/en_tired.mp3" },
      { id: 237, text: "energetic", imageSrc: "/energetic.svg", audioSrc: "/audio/en/en_energetic.mp3" },
      { id: 238, text: "busy", imageSrc: "/busy.svg", audioSrc: "/audio/en/en_busy.mp3" },
      { id: 239, text: "free", imageSrc: "/free.svg", audioSrc: "/audio/en/en_free.mp3" },
      { id: 240, text: "relaxed", imageSrc: "/relaxed.svg", audioSrc: "/audio/en/en_relaxed.mp3" },

      // Lesson 9: Nouns
      { id: 241, text: "holiday", imageSrc: "/holiday.svg", audioSrc: "/audio/en/en_holiday.mp3" },
      { id: 242, text: "festival", imageSrc: "/festival.svg", audioSrc: "/audio/en/en_festival.mp3" },
      { id: 243, text: "event", imageSrc: "/event.svg", audioSrc: "/audio/en/en_event.mp3" },
      { id: 244, text: "celebration", imageSrc: "/celebration.svg", audioSrc: "/audio/en/en_celebration.mp3" },
      { id: 245, text: "party", imageSrc: "/party.svg", audioSrc: "/audio/en/en_party.mp3" },

      // Lesson 10: Verbs
      { id: 246, text: "design", imageSrc: "/design.svg", audioSrc: "/audio/en/en_design.mp3" },
      { id: 247, text: "build", imageSrc: "/build.svg", audioSrc: "/audio/en/en_build.mp3" },
      { id: 248, text: "create", imageSrc: "/create.svg", audioSrc: "/audio/en/en_create.mp3" },
      { id: 249, text: "invent", imageSrc: "/invent.svg", audioSrc: "/audio/en/en_invent.mp3" },
      { id: 250, text: "imagine", imageSrc: "/imagine.svg", audioSrc: "/audio/en/en_imagine.mp3" },

    ])

    console.log("Seed data inserted successfully for English challenge options!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()


