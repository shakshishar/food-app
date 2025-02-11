
import Image from "next/image";
const ContactUs=()=>{

    return(

        <section>
            <div className="mt-16 ">
              <div className="relative">
                     <div className="relative h-28 w-full">
                       <Image 
                         src="/image5.jpg" 
                         width={1000} 
                         height={100} 
                         alt="second image" 
                         className="w-full h-full object-cover rounded-md" 
                       />
                     </div>
             
                    
                     <div className="absolute bottom-10 left-0 right-0">
                       <div className="text-center">
                         <h3 className="uppercase text-gray-600 font-bold text-2xl">Check out</h3>
                         <h2 className="text-primary font-bold text-4xl leading-5 italic">Know More</h2>
                       </div>
                     </div>
                   </div>
             
                  

              <div className="flex justify-between max-w-4xl mx-auto mb-20 mt-20">
                <div className="max-w-lg mx-auto">
                     <h2 className="text-primary font-bold text-4xl italic">Our Location</h2>
                     <p>1st floor MVR square, above quench liquor store,<br/><span>
                     201 CMR road, HRBR layout, 560043,</span></p>

                     <p>Bangalore, Karnataka.</p>


                </div>

                <div className="max-w-lg mx-auto">
                     <h2 className="text-primary font-bold text-4xl italic">Contact Us</h2>
                     <p>+91 6360266160</p>
                    <p className="text-primary font-bold text-md italic">franchise@pizza's.in</p>
                </div>
              </div>
              </div>
        </section>
    )

}

export default ContactUs;