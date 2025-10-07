import Hero from "./components/Hero";
import CourseFilter from "./components/CourseFilter";
import CourseThumbnails from "./components/CourseThumbnails";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center gap-[40px] pt-[20px] pb-[20px]">
      {/* Centered container matching Header width/margins */}
      <div className="w-full flex justify-center">
        <div className="relative w-[1080px]">
          <Hero />
        </div>
      </div>

      {/* Course Filter directly below Hero */}
      <CourseFilter />

      {/* Thumbnails section exactly below filter */}
      <CourseThumbnails />
    </main>
  );
}
