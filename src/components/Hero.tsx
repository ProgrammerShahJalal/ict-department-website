import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import heroBg from "../assets/bg.png";
import { Cover } from "./ui/cover";
import nationalAnthem from "/bd_national_anthem.mp3";
import { useRef, useState } from "react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(nationalAnthem);
    }

    if (isPlaying) {
      audioRef.current.pause(); // Pause the audio
      setIsPlaying(false); // Update state to indicate audio is not playing
    } else {
      audioRef.current.play(); // Play the audio
      setIsPlaying(true); // Update state to indicate audio is playing
    }
  };

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
          <p className="text-lg md:text-xl text-gray-700 mb-3 tiro-bangla-regular">
            স্বাধীন{" "}
            <span className="text-purple-600 tiro-bangla-regular font-semibold">
              Bangladesh 2.0
            </span>{" "}
            Gen-Z বিশ্বকে নেতৃত্ব দিতে অনুপ্রাণিত করবে।
          </p>

          <button
            onClick={toggleAudio}
            className="bg-black tiro-bangla-regular text-white py-2 px-6
            transition rounded-md hover:bg-violet-500"
          >
            {isPlaying ? "বন্ধ করুন" : "জাতীয় সংগীত"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
