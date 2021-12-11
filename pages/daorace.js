import Layout from "../components/Layout";
import Leaderboard from "../components/Leaderboard/Leaderboard";

export default function DAORace({ projects }) {
  const { data: _, status } = useSession();

  const mainButton = (
    <button
      className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => signIn("discord")}
    >
      Connect Discord
    </button>
  );

  if (status === "authenticated") {
    mainButton = (
      <button
        className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => signOut("discord")}
      >
        Sign Out
      </button>
    );
  }

  return (
    <Layout title="DAO Race">
      <Leaderboard />
      {/* <div className="pointer-events-none">
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
      </div> */}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const projects = JSON.parse(JSON.stringify(await getApplications()));
  return {
    props: {
      projects,
    },
  };
}
