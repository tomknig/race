import Image from "next/image";

// assets
import Hyperscale from "../../public/hyperscale.svg";
import Backslash from "../../public/backslash.svg";

const Footer = () => {
  return (
    <div className="w-full bg-[#FBFBFF] flex justify-center p-8 relative">
      <div className="flex w-80 justify-evenly absolute left-10">
        <a
          href=""
          className="rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-opacity-30"
          rel="external noreferrer"
          target=""
        >
          Home
        </a>{" "}
        <Image src={Backslash} height="" alt=""></Image>
        <a
          href="https://twitter.com/HyperscaleFund"
          className="rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-opacity-30"
          rel="external noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        <Image src={Backslash} height="" alt=""></Image>
        <a
          href="https://discord.com/invite/pVSbzYny2c"
          className="rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-opacity-30"
          rel="external noreferrer"
          target="_blank"
        >
          Discord
        </a>
      </div>
      <Image src={Hyperscale} width="120" alt=""></Image>
    </div>
  );
};

export default Footer;
