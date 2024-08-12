import { getCourses, getUserProgress } from "@/db/queries"
import { List } from "./list"

const CoursesPage = async () => {
  const courses = await getCourses()
  const userProgress = await getUserProgress()

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-3xl font-bold text-neutral-700">
        Language Courses
      </h1>
      <List
        courses={courses}
        activeCourseId={userProgress?.activeCourseId ?? null}
      />
    </div>
  )
}

export default CoursesPage