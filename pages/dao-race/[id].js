import Breadcrumbs from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import Vote from "../../components/Vote";
import Voter from "../../components/Voter";
import { getSelectedApplications } from "../../actions/applications";

const titles = {
  projectName: "Project name",
  submittedBy: "Submitted by",
  pitch: '"Pitch us your project in a tweet"',
  description: "Full pitch",
  background: "Background of each founder",
  evidence: "Evidence of exceptional ability for each founder",
  misc: "Is there anything else we should know about?",
  links: "Links",
  uploads: "Uploads",
  voteFor: "Votes for",
  flag: "Flag",
}; // for future translations

export default function Application({ data }) {
  const breadcrumbs = [
    { url: "/", text: "Home" },
    { url: "/dao-race", text: "DAO Race" },
    { url: "", text: data.projectName },
  ];
  // console.log(data)
  console.log(data);
  return (
    <Layout title={data.projectName}>
      <div className="divide-y divide-gray-300">
        <div>
          <Breadcrumbs list={breadcrumbs} />
          <h1 className="text-3xl font-bold leading-7 text-gray-900 sm:text-5xl sm:truncate sm:leading-normal mb-8">
            {data.projectName}
          </h1>
          <div className="flex flex-row space-x-8 mb-12">
            <div className="basis-1/3">
              <div className="bg-gray-300 h-full rounded-lg"></div>
            </div>
            <div className="basis-2/3">
              <div className="flex flex-row content-center mb-5">
                <div className="flex-1">
                  <dt className="font-semibold">{titles.submittedBy}</dt>
                  <dd>{data.submittedBy}</dd>
                </div>
                <div className="flex flex-row h-[fit-content]">
                  <div
                    className="text-gray-400 border border-gray-400 bg-gray-200 hover:bg-gray-300 rounded-lg p-2 mx-2 cursor-pointer"
                    onClick={(e) => window.open(data.projectUrl, "_blank")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  <Vote voteCount={data.voteCount} />
                </div>
              </div>
              <dl>
                <dt className="font-semibold">{titles.name}</dt>
                <dd className="mb-5">
                  {data.projectName} ({data.shortName})
                </dd>
                <dt className="font-semibold">{titles.pitch}</dt>
                <dd className="mb-5">{data.pitch || "N.A"}</dd>
              </dl>
            </div>
          </div>
          <dl>
            <dt className="font-semibold">{titles.fullDesc}</dt>
            <dd className="mb-5">{data.fullDesc || "N.A"}</dd>
            <dt className="font-semibold">{titles.background}</dt>
            <dd className="mb-5">{data.background || "N.A"}</dd>
            <dt className="font-semibold">{titles.evidence}</dt>
            <dd className="mb-5">{data.evidence || "N.A"}</dd>
            <dt className="font-semibold">{titles.misc}</dt>
            <dd className="mb-5">{data.misc || "N.A"}</dd>
            <dt className="font-semibold mb-3">{titles.links}</dt>
            <dd className="mb-5">
              <ul className="link-list list-disc pl-5">
                {/* {data.links.map((link, i) => (
                  <li key={`link-${i}`}>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.text}
                    </a>
                  </li>
                ))} */}
              </ul>
            </dd>
            <dt className="font-semibold mb-3">{titles.uploads}</dt>
            <dd className="mb-5">
              <ul className="link-list list-disc pl-5">
                {/* {data.uploads.map((upload, i) => (
                  <li key={`upload-${i}`}>
                    <a href={upload.url} target="_blank" rel="noreferrer">
                      {upload.text}
                    </a>
                  </li>
                ))} */}
              </ul>
            </dd>
          </dl>
          <div className="mb-5 flex flex-row">
            <Vote voteCount={data.voteCount} />
            <div className="text-gray-600 border border-gray-600 bg-gray-200 rounded-lg py-2 px-6 mx-2 font-semibold hover:bg-gray-300 cursor-pointer">
              Flag
            </div>
          </div>
        </div>
        <div>
          <div className="my-5">
            <div className="uppercase font-bold mb-3">{titles.voteFor}</div>
            <div className="grid grid-cols-3 gap-4 w-2/3">
              {/* {data.voters.map((voter, i) => (
                <Voter voter={voter.username} power={voter.power} image={voter.image} key={i} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  console.log("GETTING ID", id);
  const fetchedApplications = JSON.parse(JSON.stringify(await getSelectedApplications(id)));
  const data = fetchedApplications[0];
  return {
    props: {
      data,
    },
  };
}
