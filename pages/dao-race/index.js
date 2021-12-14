import Layout from "../../components/Layout";
import Leaderboard from "../../components/Leaderboard";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getApplications } from "../../actions/applications";
import DaoRaceCountdown from "../../components/Countdown";

const breadcrumbs = [
  { url: "/", text: "Home" },
  { url: "", text: "DAO Race" },
];

export default function DaoRace({ projects }) {
  return (
    <Layout title="Leaderboard">
      <Breadcrumbs list={breadcrumbs} />
      <div className="flex flex-row">
        <div className="flex basis-1/2 flex-col space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">Trending DAOs</h2>
          <p className="text-gray-500 text-sm">The top DAO applications, ranked by votes</p>
        </div>
        <div className="basis-1/2 flex flex-col items-stretch space-y-2">
          <DaoRaceCountdown />
          <span className="text-right text-gray-500 text-sm">Until next funding round</span>
        </div>
      </div>
      <div className="basis-1/4 flex  tab-filter">
        <div className="font-bold active pr-2">Most voted</div>
        <div className="pl-2">Most recent</div>
      </div>
      <Leaderboard data={projects} />
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
