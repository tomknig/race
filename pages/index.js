import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// components
import Explanation from "../components/Explanation/Explanation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hyperscale - DAO Race</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="w-screen flex items-center px-10">
        <Image src="/logo.svg" width="60" height="60" alt="" />
        <Image src="/hyperscale.svg" width="150" height="80" alt="" />
        <div className="flex space-x-10">
          <div>DAO Race</div>
          <div>Discord</div>
          <div>Twitter</div>
          <div className="bg-indigo-500 text-white px-5 py-2 rounded-md">
            Connect Account
          </div>
        </div>
      </div>

      <Explanation />

      <div className="pointer-events-none">
        <div
          className="absolute top-[-667px] left-[626px] w-[1185px] h-[1186px] opacity-20"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #4FFEFE 0%, rgba(93, 186, 239, 0) 100%)",
          }}
        />
        <div
          className="absolute top-[-463px] left-[-682px] w-[931px] h-[931px] opacity-20"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #ED008E 0%, rgba(239, 93, 146, 0) 100%)",
          }}
        />
        <div
          className="absolute top-[-779px] left-[-82px] w-[1287px] h-[1287px] opacity-30"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #5D5FEF 0%, rgba(93, 95, 239, 0) 100%)",
          }}
        />
      </div>
    </>
  );
}
