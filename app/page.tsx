import Hero from "./Components/Hero";
import Newest from "./Components/Newest";

export default function Home() {
  return <div className="pb-6 md:pb-8 lg:pb-12 ">
    <Hero/>
    <Newest/>
  </div>;
}
