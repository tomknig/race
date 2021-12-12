import Layout from "../../components/Layout";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import { getApplications } from "../../actions/applications";

export default function DaoRace({ projects }) {
  return (
    <Layout title="Leaderboard">
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
