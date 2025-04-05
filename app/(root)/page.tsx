import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const HomePage = async () => {
  await delay(1000);
  return (
    <div className="font-main">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </div>
  );
};
export default HomePage;
