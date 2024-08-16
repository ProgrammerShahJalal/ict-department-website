import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 tiro-bangla-regular text-white p-6 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
          <div>
            <h2 className="text-lg font-bold">সাইটম্যাপ</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  গোপনীয়তার নীতিমালা
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  যোগাযোগ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  সচরাচর জিজ্ঞাসা
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ব্যবহারের শর্তাবলি
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://www.freevisitorcounters.com/en/counter/render/596768/t/6"
              alt="visitor counter"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">অভ্যন্তরীণ ই-সেবাসমূহ</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  ওয়েব মেইল
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  বৃত্তি ও আইসিটি উদ্ভাবনী অনুদান
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ন্যাশনাল এন্টারপ্রাইজ আর্কিটেকচার
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  সিআইআরটি
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">গুরুত্বপূর্ণ লিংক</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  রাষ্ট্রপতির কার্যালয়
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  প্রধানমন্ত্রীর কার্যালয়
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  মন্ত্রিপরিষদ বিভাগ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  বাংলাদেশ কর্মচারী কল্যাণ বোর্ড
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-sm text-center text-gray-400">
          <p>সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৪-০৮-১৫ ১২:৩৮:৫০</p>
          <p className="mt-2">
            পরিকল্পনা ও বাস্তবায়নে: মন্ত্রিপরিষদ বিভাগ, এটুআই, বিসিসি,
            ডিওআইসিটি ও বেসিস
          </p>
          <a
            className="mt-2"
            href="https://www.linkedin.com/in/ProgrammerShahJalal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by Md Shah Jalal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
