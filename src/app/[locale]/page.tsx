import { Button } from "@/07.shared/components/ui/button";
import { ThemeChanger } from "@/07.shared/ui";

const Home = () => {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center dark:bg-amber-300">
      <div className="text-mint-500  tablet:text-red-500 w-full grid place-items-center  font-bold font-Fira">
        HELLO WORLD
      </div>
      <Button>123123</Button>

      <ThemeChanger />
    </div>
  );
};

export default Home;
