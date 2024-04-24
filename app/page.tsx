import Presentation from "@/components/presentation";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <Presentation/>
      <Testimonial/>
    </main>
  );
}
