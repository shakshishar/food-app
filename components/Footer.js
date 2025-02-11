import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="mt-20 bg-gray-100 py-6">
      <div className="text-center mb-10">
        <p className="text-3xl text-gray-500 font-semibold underline">Stay Connected</p>
        <ul className="flex justify-center space-x-6 mt-3">
          <li className="border p-2 rounded-xl bg-primary text-gray-100 hover:bg-orange-600">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl " />
            </Link>
          </li>
          <li className="border p-2 rounded-xl bg-primary text-gray-100 hover:bg-orange-600">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl " />
            </Link>
          </li>
          <li className="border p-2 rounded-xl bg-primary text-gray-100 hover:bg-orange-600">
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-xl " />
            </Link>
          </li>
          <li className="border p-2 rounded-xl bg-primary text-gray-100 hover:bg-orange-600">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl " />
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-center mb-10">
        <ul className="flex justify-center space-x-12 md:flex-col xl:flex-row lg:flex-row md:mt-0 lg:mt-3 xl:mt-3 text-gray-500">
            <li className="hover:scale-110 hover:transition-all">Home</li>
            <li className="hover:scale-110 hover:transition-all" >About US</li>
            <li className="hover:scale-110 hover:transition-all">Contact Us</li>
            <li className="hover:scale-110 hover:transition-all">Gallary</li>
            <li className="hover:scale-110 hover:transition-all">Menu</li>
            <li className="hover:scale-110 hover:transition-all">Blog</li>
        </ul>
        </div>
      <div className="text-gray-400 text-center text-sm">
        <p>PIZZA's © All Rights Reserved 2023.</p>
      </div>
    </section>
  );
};

export default Footer;
