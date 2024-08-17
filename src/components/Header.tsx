import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import MobileMenuBar from "./MobileMenuBar";

const Header: React.FC = () => {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);
  const [isDropdown5Open, setIsDropdown5Open] = useState(false);
  const [isDropdown6Open, setIsDropdown6Open] = useState(false);
  const [isDropdown7Open, setIsDropdown7Open] = useState(false);

  return (
    <header className="md:bg-gray-100 md:shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-start items-center">
        {/* Primary Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            <IoHome className="size-5" />
          </Link>
          <div className="relative z-50">
            <button
              onClick={() => setIsDropdown1Open(!isDropdown1Open)}
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none tiro-bangla-regular"
            >
              আমাদের সম্পর্কিত <FaChevronDown className="ml-1 size-2" />
            </button>
            {isDropdown1Open && (
              <div className="flex justify-start items-start py-5 absolute left-0 mt-2 w-auto bg-gray-100 shadow-lg rounded-md">
                <div>
                  <button className="flex text-nowrap items-center cursor-text w-full text-left px-4 py-2 text-orange-600 font-bold  tiro-bangla-regular">
                    বিভাগ পরিচিতি
                  </button>

                  <div className="text-nowrap cursor-pointer">
                    <li className="block tiro-bangla-regular text-sm px-4 py-2 text-gray-700 hover:bg-blue-100">
                      ইতিহাস ও কার্যাবলি
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      ভিশন ও মিশন
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      মাননীয় উপদেষ্টা
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      প্রাক্তন মন্ত্রীগণের তালিকা
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      সচিব
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      প্রাক্তন সচিবগণের তালিকা
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      সাংগঠনিক কাঠামো
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      এলোকেশন অব বিজনেস
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      প্রধান কার্যাবলী
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      প্রধান কার্যাবলী
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      কর্মবণ্টন
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      প্রতিনিধি মনোনয়ন
                    </li>
                  </div>
                </div>
                <div>
                  <button className="flex items-center cursor-text w-full text-left px-4 py-2  text-orange-600 font-bold tiro-bangla-regular">
                    জনবল
                  </button>

                  <div className="text-nowrap cursor-pointer">
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      কর্মকর্তাবৃন্দ
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      কর্মবণ্টন
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      তথ্য প্রদানকারী কর্মকর্তা
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      আপিল কর্মকর্তা
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      ফোকাল পয়েন্ট কর্মকর্তাগণ
                    </li>
                  </div>
                </div>
                <div>
                  <button className="flex items-center cursor-text w-full text-left px-4 py-2  text-orange-600 font-bold tiro-bangla-regular">
                    বিভাগের সেবাসমূহ
                  </button>

                  <div className="text-nowrap cursor-pointer">
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      সেবা প্রদান প্রতিশ্রুতি
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      নাগরিক ই-সেবাসমূহের তালিকা
                    </li>
                  </div>
                </div>
                <div>
                  <button className="flex items-center cursor-text w-full text-left px-4 py-2  text-orange-600 font-bold tiro-bangla-regular">
                    বিভাগের কমিটিসমূহ
                  </button>

                  <div className="text-nowrap cursor-pointer">
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      সেবা প্রদান প্রতিশ্রুতি
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      বিভাগ সম্পর্কিত কমিটিসমূহ
                    </li>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDropdown2Open(!isDropdown2Open)}
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none tiro-bangla-regular"
            >
              অধীনস্থ দপ্তর/অফিস/সংস্থা{" "}
              <FaChevronDown className="ml-1 size-2" />
            </button>

            {isDropdown2Open && (
              <div className="flex justify-start cursor-pointer text-nowrap py-5 items-start absolute left-0 mt-2 w-auto bg-gray-100 shadow-lg rounded-md">
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  দপ্তর/অফিস/সংস্থার তালিকা
                </li>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDropdown3Open(!isDropdown3Open)}
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none tiro-bangla-regular"
            >
              প্রকল্প/কর্মসূচি <FaChevronDown className="ml-1 size-2" />
            </button>
            {isDropdown3Open && (
              <div className="flex justify-start items-start py-5 absolute left-0 mt-2 w-auto bg-gray-100 shadow-lg rounded-md">
                <div>
                  <button className="flex text-nowrap items-center cursor-text w-full text-left px-4 py-2 text-orange-600 font-bold  tiro-bangla-regular">
                    উন্নয়ন প্রকল্পসমূহ
                  </button>

                  <div className="text-nowrap cursor-pointer">
                    <li className="block tiro-bangla-regular text-sm px-4 py-2 text-gray-700 hover:bg-blue-100">
                      চলমান প্রকল্প
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      ক্রয় পরিকল্পনা
                    </li>
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      সমাপ্ত প্রকল্পসমূহ
                    </li>
                  </div>
                </div>
                <div>
                  <button className="flex items-center cursor-text w-full text-left px-4 py-2  text-orange-600 font-bold tiro-bangla-regular">
                    কর্মসূচিসমূহ
                  </button>

                  <div className="text-nowrap cursor-pointer">
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      সমাপ্ত কর্মসূচিসমূহ
                    </li>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdown4Open(!isDropdown4Open)}
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none tiro-bangla-regular"
            >
              গ্যালারি <FaChevronDown className="ml-1 size-2" />
            </button>

            {isDropdown4Open && (
              <div className=" text-nowrap py-5 cursor-pointer absolute left-0 mt-2 w-auto bg-gray-100 shadow-lg rounded-md">
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  ফটো গ্যালারি
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  ভিডিও গ্যালারি
                </li>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdown5Open(!isDropdown5Open)}
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none tiro-bangla-regular"
            >
              আইন/নীতিমালা <FaChevronDown className="ml-1 size-2" />
            </button>

            {isDropdown5Open && (
              <div className=" text-nowrap py-5 cursor-pointer absolute left-0 mt-2 w-auto bg-gray-100 shadow-lg rounded-md">
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  আইন ও বিধি
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  নীতিমালা
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  নির্দেশিকা ও কৌশলপত্র
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  খসড়া আইন, বিধি এবং নীতিমালা
                </li>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDropdown6Open(!isDropdown6Open)}
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none tiro-bangla-regular"
            >
              ই-সেবা <FaChevronDown className="ml-1 size-2" />
            </button>

            {isDropdown6Open && (
              <div className="z-50 text-nowrap py-5 cursor-pointer absolute left-0 mt-2 w-auto bg-gray-100 shadow-lg rounded-md">
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  নৈমিত্তিক ছুটি ব্যবস্থাপনা
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  স্মার্ট ড্যাশবোর্ড
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  ফ্রিল্যান্সার আইডি
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  ই-নথি
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  ওয়েব মেইল
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  অনলাইনে বেতন দাখিল
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  ই-টেন্ডারিং(e-GP)
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  আমার সরকার
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  GRP
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  প্রকল্প মনিটরিং সিস্টেম
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  অনলাইন এসিআর দাখিল
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  অনলাইন নিয়োগ পোর্টাল
                </li>
                <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                  ইমপোরিয়া
                </li>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdown7Open(!isDropdown7Open)}
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none tiro-bangla-regular"
            >
              যোগাযোগ ও মতামত <FaChevronDown className="ml-1 size-2" />
            </button>
            {isDropdown7Open && (
              <div className="flex justify-start items-start py-5 absolute left-0 mt-2 w-auto bg-gray-100 shadow-lg rounded-md">
                <div>
                  <button className="flex text-nowrap items-center cursor-text w-full text-left px-4 py-2 text-orange-600 font-bold  tiro-bangla-regular">
                    যোগাযোগ
                  </button>

                  <div className="text-nowrap cursor-pointer">
                    <li className="block tiro-bangla-regular text-sm px-4 py-2 text-gray-700 hover:bg-blue-100">
                      অফিসের ঠিকানা
                    </li>
                  </div>
                </div>
                <div>
                  <button className="flex items-center cursor-text w-full text-left px-4 py-2  text-orange-600 font-bold tiro-bangla-regular">
                    মতামত
                  </button>

                  <div className="text-nowrap cursor-pointer">
                    <li className="block text-sm tiro-bangla-regular px-4 py-2 text-gray-700 hover:bg-blue-100">
                      আপনার জিজ্ঞাসা ও মতামত
                    </li>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center gap-4">
            <img className="w-8" src="/comment.gif" alt="Comment" />
            <img className="w-8" src="/acesibility.svg" alt="Accessibility" />
            <img className="w-8" src="/poll-icon.gif" alt="Poll" />
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenuBar />
      </div>
    </header>
  );
};

export default Header;
