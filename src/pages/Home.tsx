import Hero from "../components/Hero";
import NoticeBoard from "../components/NoticeBoard";
import { WobbleCardMain } from "../components/WobbleCard";
import Box from "./Box";

const Home = () => {
  return (
    <div>
      <Hero />
      <WobbleCardMain />
      <NoticeBoard />
      <Box />
    </div>
  );
};

export default Home;
