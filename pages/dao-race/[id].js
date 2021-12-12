import ApplicationDetails from "../../components/ApplicationDetails";
import Layout from "../../components/Layout";
import { getSelectedApplications } from "../../actions/applications";

export default function Application({ data }) {
  return (
    <Layout title={data.projectName}>
      <ApplicationDetails data={data} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const fetchedApplications = JSON.parse(JSON.stringify(await getSelectedApplications(id)));
  const data = fetchedApplications[0];
  return {
    props: {
      data,
    },
  };
}
