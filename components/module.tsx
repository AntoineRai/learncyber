import Image from 'next/image'
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Test from './module-component/test';

const Module = () => {

    return (
      <div className="h-screen w-full flex items-center justify-center border-b-2">
          <Carousel className="w-full mx-20">
            <CarouselContent>
                <CarouselItem >
                  <div className="p-1">
                    <Card className='h-[32em]'>
                        <Test/>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem >
                  <div className="p-1">
                    <Card className='h-[32em]'>
                        <Test/>
                    </Card>
                  </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      </div>
    );
  };
  
export default Module;