import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaAlignRight, FaTimes } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";

const MobileMenuBar: React.FC = () => {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);
  const [isDropdown5Open, setIsDropdown5Open] = useState(false);
  const [isDropdown6Open, setIsDropdown6Open] = useState(false);
  const [isDropdown7Open, setIsDropdown7Open] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="md:hidden text-sm">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="text-gray-700 focus:outline-none"
      >
        {isMobileMenuOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaAlignRight className="w-6 h-6" />
        )}
      </button>

      {isMobileMenuOpen && (
        <nav className="bg-white shadow-lg rounded-md mt-2">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <IoHome className="mr-2" /> হোম
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsDropdown1Open(!isDropdown1Open)}
                className="flex justify-between items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                আমাদের সম্পর্কিত <FaChevronDown />
              </button>
              {isDropdown1Open && (
                <>
                  <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                    <li className="text-orange-600">বিভাগ পরিচিতি</li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> ইতিহাস ও কার্যাবলি
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> ভিশন ও মিশন
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> মাননীয় উপদেষ্টা
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> প্রাক্তন মন্ত্রীগণের তালিকা
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> সচিব
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> প্রাক্তন সচিবগণের তালিকা
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> সাংগঠনিক কাঠামো
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> এলোকেশন অব বিজনেস
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> প্রধান কার্যাবলী
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> কর্মবণ্টন
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> প্রতিনিধি মনোনয়ন
                    </li>
                  </ul>
                  <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                    <li className="text-orange-600">জনবল</li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> কর্মকর্তাবৃন্দ
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> কর্মবণ্টন
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> তথ্য প্রদানকারী কর্মকর্তা
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> আপিল কর্মকর্তা
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled /> ফোকাল পয়েন্ট কর্মকর্তাগণ
                    </li>
                  </ul>
                  <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                    <li className="text-orange-600">বিভাগের সেবাসমূহ</li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled />
                      সেবা প্রদান প্রতিশ্রুতি
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled />
                      নাগরিক ই-সেবাসমূহের তালিকা
                    </li>
                  </ul>
                  <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                    <li className="text-orange-600">বিভাগের কমিটিসমূহ</li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled />
                      সেবা প্রদান প্রতিশ্রুতি
                    </li>
                    <li className="flex">
                      {" "}
                      <TbPointFilled />
                      বিভাগ সম্পর্কিত কমিটিসমূহ
                    </li>
                  </ul>
                </>
              )}
            </li>
            <li>
              <button
                onClick={() => setIsDropdown2Open(!isDropdown2Open)}
                className="flex justify-between items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                অধীনস্থ দপ্তর/অফিস/সংস্থা <FaChevronDown />
              </button>
              {isDropdown2Open && (
                <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                  <li>দপ্তর/অফিস/সংস্থার তালিকা</li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setIsDropdown3Open(!isDropdown3Open)}
                className="flex justify-between items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                প্রকল্প/কর্মসূচি <FaChevronDown />
              </button>
              {isDropdown3Open && (
                <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                  <li className="text-orange-600">উন্নয়ন প্রকল্পসমূহ</li>
                  <li className="flex">
                    {" "}
                    <TbPointFilled />
                    চলমান প্রকল্প
                  </li>
                  <li className="flex">
                    {" "}
                    <TbPointFilled />
                    ক্রয় পরিকল্পনা
                  </li>
                  <li className="flex">
                    {" "}
                    <TbPointFilled />
                    সমাপ্ত প্রকল্পসমূহ
                  </li>
                  <li className="text-orange-600"> কর্মসূচিসমূহ</li>
                  <li className="flex">
                    {" "}
                    <TbPointFilled />
                    সমাপ্ত কর্মসূচিসমূহ
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setIsDropdown4Open(!isDropdown4Open)}
                className="flex justify-between items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                গ্যালারি <FaChevronDown />
              </button>
              {isDropdown4Open && (
                <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                  <li>ফটো গ্যালারি</li>
                  <li>ভিডিও গ্যালারি</li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setIsDropdown5Open(!isDropdown5Open)}
                className="flex justify-between items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                আইন/নীতিমালা <FaChevronDown />
              </button>
              {isDropdown5Open && (
                <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                  <li>আইন ও বিধি</li>
                  <li>নীতিমালা</li>
                  <li>নির্দেশিকা ও কৌশলপত্র</li>
                  <li>খসড়া আইন, বিধি এবং নীতিমালা</li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setIsDropdown6Open(!isDropdown6Open)}
                className="flex justify-between items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                ই-সেবা <FaChevronDown />
              </button>
              {isDropdown6Open && (
                <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                  <li>নৈমিত্তিক ছুটি ব্যবস্থাপনা</li>
                  <li>স্মার্ট ড্যাশবোর্ড</li>
                  <li>ফ্রিল্যান্সার আইডি</li>
                  <li>ই-নথি</li>
                  <li>ওয়েব মেইল</li>
                  <li>অনলাইনে বেতন দাখিল</li>
                  <li>ই-টেন্ডারিং(e-GP)</li>
                  <li>আমার সরকার</li>
                  <li>GRP</li>
                  <li>প্রকল্প মনিটরিং সিস্টেম</li>
                  <li>অনলাইন এসিআর দাখিল</li>
                  <li>অনলাইন নিয়োগ পোর্টাল</li>
                  <li>ইমপোরিয়া</li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setIsDropdown7Open(!isDropdown7Open)}
                className="flex justify-between items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                যোগাযোগ ও মতামত <FaChevronDown />
              </button>
              {isDropdown7Open && (
                <>
                  <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                    <li className="text-orange-600">যোগাযোগ</li>
                    <li className="cursor-pointer flex">
                      <TbPointFilled /> অফিসের ঠিকানা
                    </li>
                  </ul>
                  <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                    <li className="text-orange-600">মতামত</li>
                    <li className="cursor-pointer flex">
                      <TbPointFilled /> আপনার জিজ্ঞাসা ও মতামত
                    </li>
                  </ul>
                </>
              )}
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenuBar;
