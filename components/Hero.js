import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Hero =()=>{

    return(
        <>
        <section  className="flex justify-between items-center mt-10">
            <div className="max-w-md mx-auto">
            <h1 className="text-5xl font-semibold w-10/12">Everything is better with a<span className="text-primary"> Pizza</span></h1>
            <p className="mt-8 text-gray-500 text-sm w-11/12">Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
            <div className="flex justify-left gap-4 mt-8">
                <button className="bg-primary text-gray-100 flex text-lg p-3 hover:bg-orange-600 hover:scale-105 w-38 border rounded-xl">
                  Order Now
                  <ArrowRightIcon className="h-5 w-5 mt-1 ml-2 text-white" />
                </button>
                <button className="bg-primary text-gray-100 flex text-lg p-3 w-38 hover:bg-orange-600 hover:scale-105 border rounded-xl">
                  Learn More
                  <ArrowRightIcon className="h-5 w-5 mt-1 ml-2 text-white" />
                  </button>
            </div>
            
            </div>
          <div className="max-w-md mx-auto relative right-0">
            <Image src={'/image1.png'} 
            alt={'pizza'}
            width={600}
            height={600}
            // layout={'fill'}
            // objectFit={"contain"}
            />
          </div>
        </section>
        </>
    )

}

export default Hero;

