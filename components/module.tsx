import Image from 'next/image'
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const Module = () => {

    return (
      <div className="h-screen w-full ">
        <div className='flex items-center justify-center mt-[5em]'>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <span className="text-4xl font-semibold flex justify-center items-center">{index + 1}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    );
  };
  
export default Module;