import Hero from "../components/Hero";
import { MinistryIntro } from "../components/MinitryIntro";
import NoticeBoard from "../components/NoticeBoard";
import { WobbleCardMain } from "../components/WobbleCard";
import Box from "../components/Box";

const Home = () => {
  return (
    <div>
      <Hero />
      <WobbleCardMain />
      <NoticeBoard />
      <Box />
      <MinistryIntro />
    </div>
  );
};

export default Home;
