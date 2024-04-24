import Image from 'next/image'
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"

const HeroStructure = () => {

    return (
      <div className="">
        Hero structure
        <Carousel>
            <CarouselContent>
                <CarouselItem>1</CarouselItem>
                <CarouselItem>2</CarouselItem>
                <CarouselItem>3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      </div>
    );
  };
  
export default HeroStructure;