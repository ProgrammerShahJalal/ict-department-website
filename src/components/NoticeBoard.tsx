import React, { useState } from "react";

interface Notice {
  title: string;
  date: string;
  description: string;
}

const NoticeBoard: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState<number | null>(null);

  const notices: Notice[] = [
    {
      title: "রক্ষণাবেক্ষণ ডাউনটাইম",
      date: "2024-08-16",
      description:
        "ওয়েবসাইটটি 12:00 AM থেকে 2:00 AM পর্যন্ত রক্ষণাবেক্ষণের অধীনে থাকবে। আপনার কাজ সংরক্ষণ করুন এবং এই সময়ের আগে লগ আউট করুন।",
    },
    {
      title: "নতুন বৈশিষ্ট্য মুক্তি",
      date: "2024-09-14",
      description:
        "উন্নত অনুসন্ধান, ব্যক্তিগতকৃত ড্যাশবোর্ড এবং আরও অনেক কিছু সহ নতুন বৈশিষ্ট্য প্রকাশের ঘোষণা দিতে আমরা উত্তেজিত!",
    },
    {
      title: "ছুটির সময়সূচী",
      date: "2024-10-10",
      description:
        "দয়া করে মনে রাখবেন যে সরকারী ছুটির কারণে নিম্নলিখিত তারিখগুলিতে অফিস বন্ধ থাকবে: 15 আগস্ট, 5 সেপ্টেম্বর, এবং 25 ডিসেম্বর।",
    },
    {
      title: "আইসিটি মেলার তারিখ ঘোষণা",
      date: "2024-11-20",
      description:
        "বাংলাদেশ সরকারের আইসিটি মেলা 2024 সালের 5 ডিসেম্বর অনুষ্ঠিত হবে। মেলায় অংশগ্রহণের জন্য অনুগ্রহ করে আপনার রেজিস্ট্রেশন নিশ্চিত করুন।",
    },
    {
      title: "অনলাইন সেবা আপডেট",
      date: "2024-12-01",
      description:
        "নতুন নিরাপত্তা বৈশিষ্ট্য এবং উন্নত ব্যবহারকারীর অভিজ্ঞতার জন্য আমাদের অনলাইন সেবা সিস্টেম আপডেট করা হয়েছে। দয়া করে ওয়েবসাইট পরিদর্শন করে নতুন সুবিধাগুলি উপভোগ করুন।",
    },
  ];

  const handleToggle = (index: number) => {
    setSelectedNotice(selectedNotice === index ? null : index);
  };

  return (
    <>
      <div className="bg-gray-100 p-6 my-10 tiro-bangla-regular rounded-lg shadow-lg w-full md:w-2/3 mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">নোটিশ বোর্ড</h1>
        <div className="space-y-4">
          {notices.map((notice, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div>
                  <h2 className="text-lg font-semibold">{notice.title}</h2>
                  <p className="text-gray-500">{notice.date}</p>
                </div>
                <span className="text-blue-600">
                  {selectedNotice === index
                    ? "বিশদ বিবরণ লুকান"
                    : "বিস্তারিত দেখান"}
                </span>
              </div>
              {selectedNotice === index && (
                <p className="mt-4 text-gray-700">{notice.description}</p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className=" mt-4 cursor-pointer bg-lime-500 rounded-md p-1 hover:text-white">
            সমস্ত নোটিশ
          </p>
        </div>
      </div>
    </>
  );
};

export default NoticeBoard;
