import { StickyScroll } from "./ui/sticky-scroll-reveal";
import advisorImg from "../assets/Honorable Adviser.png";
import socibImg from "../assets/Honorable Secretary Sir.png";

const content = [
  {
    title: "মাননীয় উপদেষ্টা",
    description:
      "জনাব মোঃ নাহিদ ইসলাম, মাননীয় উপদেষ্টা। তিনি (জন্ম 1998) একজন বাংলাদেশী ছাত্র কর্মী। তিনি 8 আগস্ট, 2024 সাল থেকে বাংলাদেশের অন্তর্বর্তী সরকারের আইসিটি উপদেষ্টা ছিলেন। তিনি বৈষম্য বিরোধী ছাত্র আন্দোলনের অন্যতম প্রধান সমন্বয়ক ছিলেন, যা 2024 সালের বাংলাদেশ কোটা সংস্কার আন্দোলনের নেতৃত্ব দিয়েছিল, যা পরবর্তীতে প্রধানমন্ত্রী শেখ হাসিনার সরকারকে উৎখাত করার জন্য একটি অসহযোগ আন্দোলনে পরিণত হয়েছিল, দুর্ভাগ্যবশত প্রতিবাদকারীদের 'রাজাকার 'বলা হয়। তিনি বর্তমানে প্রধান উপদেষ্টা, নোবেল শান্তি পুরস্কার বিজয়ী মুহাম্মদ ইউনূসের অধীনে দায়িত্ব পালন করছেন।",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          width={300}
          height={300}
          className="h-full w-full object-contain"
          src={advisorImg}
          alt="Honorable Advisor Image"
        />
      </div>
    ),
  },
  {
    title: "সচিব",
    description:
      "জনাব মোঃ শামসুল আরেফিন বর্তমানে তথ্য ও যোগাযোগ প্রযুক্তি বিভাগের সচিব হিসেবে দায়িত্ব পালন করছেন। এর আগে, তিনি বাংলাদেশের মন্ত্রিপরিষদ বিভাগে সমন্বয় ও সংস্কার সচিবের পদে অধিষ্ঠিত ছিলেন। এর আগে তিনি একই বিভাগে যুগ্ম সচিব ও অতিরিক্ত সচিব হিসেবে দায়িত্ব পালন করেন। তিনি মানিকগঞ্জ জেলার সহকারী কমিশনার ও ম্যাজিস্ট্রেট হিসেবে 1লা এপ্রিল, 1993 তারিখে তার কর্মজীবন শুরু করেন। তিনি বাংলাদেশ সিভিল সার্ভিস (প্রশাসন) ক্যাডারের সদস্য এবং বিসিএস-১১তম ব্যাচের সদস্য। তিনি বি.কম. (অনার্স) এবং এম.কম. ঢাকা বিশ্ববিদ্যালয়ের অর্থ বিভাগ থেকে। ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={socibImg}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="Honorable Secretary"
        />
      </div>
    ),
  },
];
export function MinistryIntro() {
  return (
    <div className="p-10 tiro-bangla-regular">
      <StickyScroll content={content} />
    </div>
  );
}
