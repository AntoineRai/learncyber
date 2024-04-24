import Image from 'next/image'


const Testimonial = () => {

    return (
      <div className='w-full h-80'>
        <div className='h-1/3 text-center flex flex-col items-center justify-center' >
            <h1 className="font-bold text-2xl">Ils nous ont fais confiance</h1>
        </div>
        <div className='flex flex-col items-center'>
            <div className="flex items-center justify-center space-x-32">
                <Image
                    src="/Logo.png"
                    width={130}
                    height={130}
                    className="border-4 rounded-full"
                    alt={''} 
                />
                <Image
                    src="/Logo.png"
                    width={130}
                    height={130}
                    className="border-4 rounded-full"
                    alt={''} 
                />
                <Image
                    src="/Logo.png"
                    width={130}
                    height={130}
                    className="border-4 rounded-full"
                    alt={''} 
                />
                <Image
                    src="/Logo.png"
                    width={130}
                    height={130}
                    className="border-4 rounded-full"
                    alt={''} 
                />
            </div>
        </div>
      </div>
    );
  };
  
export default Testimonial;