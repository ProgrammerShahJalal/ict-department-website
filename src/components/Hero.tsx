import { Link } from "react-router-dom";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import heroBg from "../assets/bg.png";
import heroImg from "../assets/ictdbd.png";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center py-20"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-x-10">
        <div className="flex-1 text-center md:text-left p-8">
          <TextGenerateEffect
            words="Inspire global change—with ✓ Nahid, ✗ Polok"
            className="text-center md:text-left text-[40px] md:text-3xl lg:text-6xl"
          />
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Independent{" "}
            <span className="text-purple-600 font-semibold">
              Bangladesh 2.0
            </span>{" "}
            will inspire Gen-Z to lead the world.
          </p>
          <Link
            to="/#"
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700"
          >
            Explore Now
          </Link>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img src={heroImg} alt="ICT BD" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
