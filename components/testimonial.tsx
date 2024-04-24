import Image from 'next/image'


const Testimonial = () => {

    return (
      <div className='w-full h-1/4'>
        <div className='h-1/2 text-center flex flex-col items-center justify-center' >
            <h2 className="font-bold">Ils nous ont fais confiance</h2>
        </div>
        <div className='h-1/2 flex flex-col items-center '>
            <div className="flex flex-grow items-center ">
                <Image
                    src="/Logo.png"
                    width={100}
                    height={100}
                    className="border-4 rounded-full mx-20"
                    alt={''} 
                />
                <Image
                    src="/Logo.png"
                    width={100}
                    height={100}
                    className="border-4 rounded-full mx-20"
                    alt={''} 
                />
                <Image
                    src="/Logo.png"
                    width={100}
                    height={100}
                    className="border-4 rounded-full mx-20"
                    alt={''} 
                />
                <Image
                    src="/Logo.png"
                    width={100}
                    height={100}
                    className="border-4 rounded-full mx-20"
                    alt={''} 
                />
            </div>
        </div>
      </div>
    );
  };
  
export default Testimonial;