import { Link } from "react-router-dom";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import heroBg from "../assets/bg.png";
import { Cover } from "./ui/cover";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center py-10"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="container tiro-bangla-regular mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-x-10">
        <div className="flex-1 text-center p-8">
          <img className="w-14 mx-auto" src="/logo.png" alt="logo of bd govt" />
          <h2 className="text-2xl">তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ</h2>
          <span className="text-sm">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</span>
          <TextGenerateEffect
            words="প্রতিটি চ্যালেঞ্জ মোকাবেলা করে, আমরা প্রযুক্তি-সচেতন ভবিষ্যতের পথ তৈরি করি।"
            className="text-center tiro-bangla-regular text-[40px] md:text-3xl lg:text-6xl"
          />
          <h1 className="text-4xl md:text-4xl tiro-bangla-regular lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <Cover>বাংলাদেশ ২.০</Cover>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 tiro-bangla-regular">
            স্বাধীন{" "}
            <span className="text-purple-600 tiro-bangla-regular font-semibold">
              Bangladesh 2.0
            </span>{" "}
            Gen-Z বিশ্বকে নেতৃত্ব দিতে অনুপ্রাণিত করবে।
          </p>
          <Link
            to="/#"
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
