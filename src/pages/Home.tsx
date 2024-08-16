import Hero from "../components/Hero";
import { MinistryIntro } from "../components/MinitryIntro";
import NoticeBoard from "../components/NoticeBoard";
import { WobbleCardMain } from "../components/WobbleCard";
import Box from "../components/Box";
import { CompareMain } from "../components/CompareMain";
import { LinkPreviewMain } from "../components/LinkPreviewMain";

const Home = () => {
  return (
    <div>
      <Hero />
      <WobbleCardMain />
      <NoticeBoard />
      <LinkPreviewMain />
      <Box />
      <MinistryIntro />
      <CompareMain />
    </div>
  );
};

export default Home;
