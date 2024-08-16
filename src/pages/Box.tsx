import React, { useState } from "react";
import heroBg from "../assets/bg.png";
import { TbPointFilled } from "react-icons/tb";

const Box: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const data = [
    {
      title: "আমাদের বিষয়ে",
      links: [
        { name: "ভিশন ও মিশন", url: "#" },
        { name: "সাংগঠনিক কাঠামো", url: "#" },
        { name: "কর্মকর্তা/কর্মচারী", url: "#" },
        { name: "কর্মবন্টন", url: "#" },
      ],
      img: "/src/assets/aboutus2.png",
    },

    {
      title: "বিজ্ঞপ্তি/আদেশ/পরিপত্র",
      links: [
        { name: "প্রজ্ঞাপন/পরিপত্র", url: "#" },
        { name: "অফিস আদেশ/বিদেশ ভ্রমণের জিও/পাসপোর্ট অনাপত্তিপত্র", url: "#" },
        { name: "সংবাদ বিজ্ঞপ্তি", url: "#" },
        { name: "দরপত্র/নিয়োগ বিজ্ঞপ্তি", url: "#" },
      ],
      img: "/src/assets/porip.png",
    },
    {
      title: "  নীতিমালা ও প্রকাশনা",
      links: [
        { name: "নীতিমালা", url: "#" },
        { name: "আইন ও বিধি/নির্দেশিকা ও কৌশলপত্র", url: "#" },
        { name: "প্রকাশনা ও বার্ষিক প্রতিবেদন", url: "#" },
        { name: "বিভিন্ন প্রতিবেদন", url: "#" },
      ],
      img: "/src/assets/POLICY_PUBLICATION.png",
    },
    {
      title: "নাগরিক ই-সেবাসমূহ ",
      links: [
        { name: "উদ্ভাবনীমুলক কাজে অনুদান", url: "#" },
        { name: "ফেলোশিপ ও বৃত্তি", url: "#" },
        { name: "হাইটেক পার্ক ওয়ান স্টপ সার্ভিস", url: "#" },
        { name: "অন্যান্য ই-সেবা", url: "#" },
      ],
      img: "/src/assets/ict.png",
    },
    {
      title: " সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার)",
      links: [
        { name: "  সেবা প্রদান প্রতিশ্রুতি", url: "#" },
        { name: "  ফোকাল পয়েন্ট/পরিবীক্ষণ কমিটি", url: "#" },
        { name: "কর্মপরিকল্পনা, পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন", url: "#" },
        { name: "আইন/বিধি/নীতিমালা/পরিপত্র/প্রজ্ঞাপন/পরিপত্র", url: "#" },
      ],
      img: "/src/assets/Citizen Charter.png",
    },
    {
      title: "বার্ষিক কর্মসম্পাদন চুক্তি",
      links: [
        { name: "নির্দেশিকা/পরিপত্র/এপিএ টিম/ফোকাল পয়েন্ট", url: "#" },
        { name: "বার্ষিক কর্মসম্পাদন চুক্তি ও ফলাফল", url: "#" },
        { name: "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন", url: "#" },
        { name: "এপিএএমএস সফটওয়্যার লিংক", url: "#" },
      ],
      img: "/src/assets/apa.png",
    },
    {
      title: "জাতীয় শুদ্ধাচার কৌশল",
      links: [
        { name: "উত্তম চর্চা কর্মপরিকল্পনা সফটওয়্যার লিংক", url: "#" },
        { name: "নৈতিকতা কমিটি ও ফোকাল পয়েন্ট", url: "#" },
        { name: "পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন", url: "#" },
        {
          name: "আইন/বিধি/ নীতিমালা/নির্দেশিকা/পরিপত্র/প্রজ্ঞাপন/কর্মপরিকল্পনা",
          url: "#",
        },
      ],
      img: "/src/assets/nis_logo3.png",
    },
    {
      title: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
      links: [
        { name: "অনিক ও আপিল কর্মকর্তা", url: "#" },
        { name: "কর্মপরিকল্পনা, পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন", url: "#" },
        { name: "অভিযোগ দাখিল (অনলাইন)", url: "#" },
        {
          name: "আইন/বিধি/নীতিমালা/পরিপত্র/প্রজ্ঞাপন/নির্দেশিকা",
          url: "#",
        },
      ],
      img: "/src/assets/complain.png",
    },
    {
      title: "  তথ্য অধিকার",
      links: [
        { name: "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপীল কর্তৃপক্ষ", url: "#" },
        { name: "আবেদন ও আপিল ফরম", url: "#" },
        {
          name: "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ/বাস্তবায়ন অগ্রগতি প্রতিবেদন",
          url: "#",
        },
        {
          name: "আইন/বিধি/কর্মপরিকল্পনা/প্রতিবেদন/নীতিমালা/পরিপত্র/নির্দেশিকা/প্রজ্ঞাপন",
          url: "#",
        },
      ],
      img: "/src/assets/infocom.png",
    },
    {
      title: "উদ্ভাবনী কার্যক্রম",
      links: [
        { name: "ইনোভেশন টিম", url: "#" },
        { name: " ইনোভেশন আইডিয়া", url: "#" },
        {
          name: "ইনোভেশন কর্মপরিকল্পনা/প্রকাশনা",
          url: "#",
        },
        {
          name: "পাইলটিং প্রকল্পের তালিকা",
          url: "#",
        },
      ],
      img: "/src/assets/INNOVATION (1).png",
    },
    {
      title: "সেবা সহজিকরণ",
      links: [
        { name: "প্রজ্ঞাপন/পরিপত্র/নীতিমালা/প্রকাশনা", url: "#" },
        { name: "বাস্তবায়িত ডিজিটাল সেবার তথ্য", url: "#" },
        {
          name: "সেবা সহজিকরণের দৃষ্টান্ত",
          url: "#",
        },
        {
          name: "সহজিকৃত সেবার তালিকা",
          url: "#",
        },
      ],
      img: "/src/assets/SPS-3.png",
    },
    {
      title: "এসডিজি ও উন্নয়ন কর্মপরিকল্পনা",
      links: [
        { name: "মন্ত্রণালয়/বিভাগের এসডিজি", url: "#" },
        { name: "এসডিজি ফোকাল পয়েন্ট/বিকল্প ফোকাল পয়েন্ট", url: "#" },
        {
          name: "এসডিজি জাতীয় ডকুমেন্ট",
          url: "#",
        },
        {
          name: "পঞ্চবার্ষিকী পরিকল্পনা ও প্রতিবেদন",
          url: "#",
        },
      ],
      img: "/src/assets/FinalLogoSDG.png",
    },
    {
      title: "বাজেট ও প্রকল্পসমূহ",
      links: [
        { name: "বার্ষিক ক্রয় পরিকল্পনা", url: "#" },
        { name: "বাজেট ও এমটিবিএফ বাজেট", url: "#" },
        {
          name: "বাজেট প্রতিবেদন/অফিস আদেশ",
          url: "#",
        },
        {
          name: "গুরুত্বপূর্ণ সমাপ্ত প্রকল্পসমূহ",
          url: "#",
        },
      ],
      img: "/src/assets/budget.png",
    },
    {
      title: "জাতীয় আইসিটি নীতিমালা ২০১৮",
      links: [
        { name: "জাতীয় আইসিটি নীতিমালা ২০১৮", url: "#" },
        { name: "মন্ত্রণালয়/বিভাগভিত্তিক কর্মপরিকল্পনা", url: "#" },
        {
          name: "অফিস আদেশ, প্রজ্ঞাপন",
          url: "#",
        },
        {
          name: "ফোকাল পয়েন্ট",
          url: "#",
        },
      ],
      img: "/src/assets/ict18.jpeg",
    },
    {
      title: "বিবিধ",
      links: [
        { name: "বিভিন্ন ফরম", url: "#" },
        { name: "উত্তম চর্চা", url: "#" },
        {
          name: "বিভিন্ন কমিটি",
          url: "#",
        },
      ],
      img: "/src/assets/bibido.png",
    },
  ];

  const itemsToShow = showAll ? data?.length : 6;

  return (
    <>
      <div className="tiro-bangla-regular flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 p-6">
        {data.slice(0, itemsToShow).map((box, index) => (
          <div
            style={{
              backgroundImage: `url(${heroBg})`,
            }}
            key={index}
            className="p-6 shadow-lg md:h-64 rounded-lg border-x-4 flex flex-col items-start space-y-4 md:w-1/3 w-full"
          >
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-bold">{box.title}</h2>
            </div>
            <div className="text-sm md:text-base flex justify-between items-center gap-4 md:gap-10">
              <img className="w-12 md:w-24" src={box.img} alt="box image" />
              <ul className="space-y-2">
                {box.links.map((link, linkIndex) => (
                  <li className="flex " key={linkIndex}>
                    <TbPointFilled />
                    <a
                      href={link.url}
                      className="text-blue-600 hover:text-blue-800 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-5">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="tiro-bangla-regular bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            আরও দেখুন
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="tiro-bangla-regular bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            কম দেখুন
          </button>
        )}
      </div>
    </>
  );
};

export default Box;
