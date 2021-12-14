import Layout from "../../components/Layout";
import Leaderboard from "../../components/Leaderboard";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getApplications } from "../../actions/applications";

const breadcrumbs = [
  { url: "/", text: "Home" },
  { url: "", text: "DAO Race" },
];

export default function DaoRace({ projects }) {
  return (
    <Layout title="Leaderboard">
      <Breadcrumbs list={breadcrumbs} />
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
