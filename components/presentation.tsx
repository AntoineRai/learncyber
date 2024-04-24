import Image from 'next/image'

const Presentation = () => {

    return (
      <div className="flex flex-row w-full px-16">
        <div className="flex flex-col justify-center w-1/2 px-8">
            <h1 className="font-bold text-xl underline text-left mb-8">LearnCyber</h1>
            <span className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum
            </span>
        </div>

        <div className="flex flex-col items-center justify-center mx-4 w-1/2 text-center ">
        <Image
            src="/Logo.png"
            width={400}
            height={400}
            className="border-4 rounded-full"
            alt={''}            
        />
        </div>
      </div>
    );
  };
  
export default Presentation;