import { execSync } from 'child_process'

const seed = (script: string) => {
  console.log(`Running ${script}...`)
  execSync(script, { stdio: 'inherit' })
};

const main = async () => {
  try {
    // Seed English units and lessons
    seed('tsx ./scripts/EN/seedENUnits.ts')
    seed('tsx ./scripts/EN/seedENOptions.ts')
    for (let i = 1; i <= 5; i++) {
      seed(`tsx ./scripts/seedENLesson${i}.ts`)
    }

    // Seed German units and lessons
    seed('tsx ./scripts/DE/seedDEUnits.ts')
    seed('tsx ./scripts/DE/seedDEOptions.ts')
    for (let i = 1; i <= 5; i++) {
      seed(`tsx ./scripts/seedDELesson${i}.ts`)
    }

    // Seed French units and lessons
    seed('tsx ./scripts/FR/seedFRUnits.ts')
    seed('tsx ./scripts/FR/seedFROptions.ts')
    for (let i = 1; i <= 5; i++) {
      seed(`tsx ./scripts/seedFRLesson${i}.ts`)
    }

    console.log('Database seeded successfully for all languages!')
  } catch (error) {
    console.error('Error during database seeding:', error)
  }
}

main()
