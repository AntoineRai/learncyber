import About from "@/components/about";
import Contact from "@/components/contact";
import Module from "@/components/module";
import Presentation from "@/components/presentation";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (

    <>
      <div className="flex flex-col items-center justify-center">
        <Presentation />
      </div>
      
      <Testimonial/>
      <Module/>
      <Contact/>
      <About/>
    </>
  );
}
