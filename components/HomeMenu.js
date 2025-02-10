import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const menuItems = [
  {
    id: 1,
    image: "/image2.png",
    title: "Margherita Pizza",
    description: "Topped with fresh ingredients and cheese.",
    Size:"Medium",
    price:"180",
  },
  {
    id: 2,
    image: "/image3.png",
    title: "Farmhouse",
    description: "Loaded with fresh veggies and a juicy patty.",
    Size:"Medium",
    price:"130",
  },
  {
    id: 3,
    image: "/veggi.png",
    title: "Veggi Paradise",
    description: "Rich and creamy veggi paradise with special sauce.",
    Size:"Medium",
    price:"200",
  },
  {
    id: 4,
    image: "/image2.png",
    title: "Margherita Pizza",
    description: "Topped with fresh ingredients and cheese.",
    Size:"Medium",
    price:"180",
  },
  {
    id: 5,
    image: "/image3.png",
    title: "Farmhouse",
    description: "Loaded with fresh veggies and a juicy patty.",
    Size:"Medium",
    price:"130",
  },
  {
    id: 6,
    image: "/veggi.png",
    title: "Veggi Paradise",
    description: "Rich and creamy veggi paradise with special sauce.",
    Size:"Medium",
    price:"200",
  },
];

const HomeMenu = () => {
  return (
    <section>
      {/* Image Banner Section */}
      <div className="mt-10 relative">
        <div className="relative h-28 w-full">
          <Image 
            src="/image4.jpg" 
            width={1000} 
            height={100} 
            alt="second image" 
            className="w-full h-full object-cover rounded-md" 
          />
        </div>

       
        <div className="absolute bottom-10 left-0 right-0">
          <div className="text-center">
            <h3 className="uppercase text-gray-600 font-bold text-2xl">Check out</h3>
            <h2 className="text-primary font-bold text-4xl leading-5 italic">Menu</h2>
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 ">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded-lg hover:bg-gray-50 transition-all hover:shadow-2xl hover:shadow-black-500">
            <Image src={item.image} width={300} height={160} alt={item.title} className="mx-auto rounded-md" />
            <h3 className="text-xl font-bold mt-3 text-primary">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-primary text-md italic">{item.Size}</p>
            <div className="flex justify-between mt-4">
            <p className="text-gray-700 text-md font-semibold mt-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-indian-rupee"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>
            <span className="">{item.price}</span>
          </p>

            <button className="bg-primary flex text-gray-100  justify-center  text-md p-2 w-32  hover:bg-orange-600 hover:scale-105 border rounded-xl">
                  Buy Now
                  <ArrowRightIcon className="h-5 w-4 mt-1 ml-2 text-white font-semibold" />
            </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMenu;
