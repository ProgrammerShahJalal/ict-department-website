import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      {" "}
      <div
        style={{
          backgroundImage: `url(${"/footer_top_bg.png"})`,
          backgroundSize: "cover",
          height: "100px",
        }}
        className="w-full"
      ></div>
      <div className=" mx-auto bg-gray-800 tiro-bangla-regular text-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
          <div>
            <h2 className="text-lg font-bold">সাইটম্যাপ</h2>
            <ul className="mt-2 space-y-2 text-sm">
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
            <h2 className="text-lg font-bold">
              ওয়েবসাইট দর্শনার্থী [০৬.১১.২০১৯ তারিখ থেকে কার্যকর]
            </h2>
            <img
              src="https://www.freevisitorcounters.com/en/counter/render/596768/t/6"
              alt="visitor counter"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">অভ্যন্তরীণ ই-সেবাসমূহ</h2>
            <ul className="mt-2 space-y-2 text-sm">
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
            <ul className="mt-2 space-y-2 text-sm">
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
          <div className="text-center text-sm tiro-bangla-regular">
            কারিগরি সহায়তায়:{" "}
            <img
              className="w-36 mx-auto bg-white p-2 rounded-sm"
              src="/np-logo-set.png"
              alt="help desk"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
