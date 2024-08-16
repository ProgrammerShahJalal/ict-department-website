import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardMain() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-20 my-5">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl tiro-bangla-regular font-semibold tracking-[-0.015em] text-white">
            আমরা কি বাংলাদেশ ২.০ এর জন্য প্রস্তুত?
          </h2>
          <p className="mt-4 text-left tiro-bangla-regular text-base/6 text-neutral-200">
            উদ্ভাবন, অন্তর্ভুক্তি এবং টেকসইতাকে আলিঙ্গন করে, আমরা এমন একটি
            বাংলাদেশ গড়ে তুলতে পারি যেটি স্থিতিস্থাপক, সমৃদ্ধ এবং আগামী দিনের
            চ্যালেঞ্জ মোকাবেলায় প্রস্তুত।
          </p>
        </div>
        <img
          src="/bd-flag.png"
          width={500}
          height={500}
          alt="bd flag image"
          className="absolute -right-4 lg:-right-[40%]  -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl tiro-bangla-regular font-semibold tracking-[-0.015em] text-white">
          বাংলাদেশ ২.০ দক্ষিণ এশিয়ায় একটি নতুন যুগের ভোর
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200 tiro-bangla-regular">
          শুধু একটি আন্দোলন নয়; এটি একটি নতুন বাংলাদেশের জন্য একটি ব্যাপক
          দৃষ্টিভঙ্গি
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white tiro-bangla-regular">
            বাংলাদেশ ২.০ সাম্য, মানবিক মর্যাদা এবং ন্যায়বিচারের জন্য একটি নতুন
            পথ
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200 tiro-bangla-regular">
            বাংলাদেশ, প্রচুর সম্ভাবনা নিয়ে, বর্তমানে তার যুবকদের উদ্যম এবং
            নিঃস্বার্থ কাজে একটি বিপ্লব দেখতে পাচ্ছে।
          </p>
        </div>
        <img
          src="/bangladesh-map.png"
          width={500}
          height={500}
          alt="bd map image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
