import Image from 'next/image'


const Introduction = () => {

    return (
      <div className='flex flex-row'>
        <div className='flex flex-col justify-center w-2/3 p-8'> 
          <h1 className='underline font-bold ml-4 text-xl'>Introduction</h1>
          <span className="text-left m-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum
            </span>
        </div>
        <div className='flex flex-col justify-end items-end w-1/3'>
          <div className="relative">
            <Image
              src="/téléchargement.jpg"
              width={400}
              height={500}
              className=""
              alt={''}            
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-gray-500 opacity-60"></div>
          </div>
        </div>
      </div>
    );
  };
  
export default Introduction;