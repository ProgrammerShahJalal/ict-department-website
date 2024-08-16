import { LinkPreview } from "./ui/link-preview";

export function LinkPreviewMain() {
  return (
    <div className="flex justify-center tiro-bangla-regular items-center px-4">
      <p className="text-black text-xl md:text-3xl max-w-3xl ">
        আইসিটি মন্ত্রণালয়ের নতুন ওয়েব ডিজাইন{" "}
        <LinkPreview
          url="https://www.linkedin.com/in/ProgrammerShahJalal/"
          imageSrc="/md-shah-jalal.png"
          isStatic
          className="font-bold"
        >
          এই ব্যক্তি
        </LinkPreview>{" "}
        করেছেন এবং আমি তার ✓{" "}
        <LinkPreview
          url="https://youtu.be/wGJiVFXUnLs"
          imageSrc="/tumb.png"
          isStatic
          className="font-bold"
        >
          এই ট্রেলারটিকে
        </LinkPreview>{" "}
        আকর্ষণীয় হিসাবে দেখছি
      </p>
    </div>
  );
}
