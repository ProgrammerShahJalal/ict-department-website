import YouTubePlayer from "./YouTubePlayer";

const Info = () => {
  return (
    <div className="grid grid-cols-3 gap-4 px-20 my-20">
      <div className="col-span-2  text-center">
        <h2 className="tiro-bangla-regular">
          বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) ২০২০-২০২১ এর চূড়ান্ত মূল্যায়নে তথ্য
          ও যোগাযোগ প্রযুক্তি বিভাগের{" "}
          <span className="text-2xl text-orange-400">প্রথম স্থান</span> অর্জন{" "}
        </h2>
        <img
          className="w-9/12 mt-4 mx-auto border-4  border-lime-300"
          src="/ICT Division Result.png"
          alt="ICT Division Result"
        />
        <h2 className="tiro-bangla-regular rounded-md py-1 bg-lime-500 text-xl my-6">
          বন্যার সময় কি করণীয়
        </h2>
        <div className="w-96 mx-auto pt-20 md:pt-5">
          <YouTubePlayer videoId="GT9ShGE_qjg" />
        </div>
      </div>
      <div className="">
        <a
          href="http://npftr.portal.gov.bd/new-domain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="w-24 md:w-40 mb-5 mx-auto text-wrap p-2 text-sm rounded-md tiro-bangla-regular text-center bg-green-600 hover:bg-lime-500 text-white">
            অফিস সংযুক্তির আবেদন ফরম
          </h4>
        </a>

        <h4 className="tiro-bangla-regular text-center md:text-lg text-red-500">
          জরুরি হটলাইন
        </h4>
        <img
          className="w-12 md:w-48 mx-auto"
          src="/hotline_v.2_bn.png"
          alt="hotline image"
        />
        <div>
          <a
            href="https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/files/f071a55e_9356_44ed_ba33_461288ec14bd/FAQ%20on%20Electronic%20Toll%20Collection%20%28ETC%29%20System.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-44 p-2  mx-auto"
              src="/discount_bn.jpg"
              alt="dicount image"
            />
          </a>

          <img
            className="w-44 p-2 mx-auto"
            src="/e-directory.jpg"
            alt="e-directory image"
          />
          <img
            className="w-44 p-2 mx-auto"
            src="/mygov_logo_bn.jpg"
            alt="mygov_logo_bn"
          />
          <img
            className="w-44 p-2 mx-auto"
            src="/internal_eservice_bn.jpg"
            alt="internal e-service"
          />
        </div>
        <div>
          <img
            className="w-12 md:w-52 mx-auto"
            src="/dengu.jpg"
            alt="dengu fever image"
          />
        </div>
        <a
          href="https://bangladesh.gov.bd/site/view/all_eservices_in_bangladesh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="w-24 my-1 md:my-5 md:w-40 mx-auto text-wrap p-2 text-sm rounded-md tiro-bangla-regular text-center bg-green-600 hover:bg-lime-500 text-white">
            কেন্দ্রীয় ই-সেবা
          </h4>
        </a>
      </div>

      <div className="col-span-2 bg-cyan-600 mx-auto"></div>
    </div>
  );
};

export default Info;
