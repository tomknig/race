import Breadcrumbs from "../components/Breadcrumbs";
import Layout from "../components/Layout";

const titles = {
  name: "Project name",
  submittedBy: "Submitted by",
  shortDesc: '"Pitch us your project in a tweet"',
  fullDesc: "Full pitch",
  background: "Background of each founder",
  evidence: "Evidence of exceptional ability for each founder",
  misc: "Is there anything else we should know about?",
  links: "Links",
  uploads: "Uploads",
  vote: "Vote for {0}",
  flag: "Flag",
}; // for future translation

const data = {
  id: 1,
  name: "Community Chest",
  imgUrl: "",
  submittedBy: "@MallorySantiago",
  shortName: "👩‍,💵",
  shortDesc:
    "Contribute money to the communty chest and we use the money to host events using that money. The more money we collect the better the events! Upcomming events include a talk with Naval, a concert by Odeza, and a cooking class by chef boyardee.",
  fullDesc:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  background:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  evidence:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  misc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  links: [
    {
      url: "https://hyperscalefund.com",
      text: "Lorem ipsum dit alor",
    },
    {
      url: "https://hyperscalefund.com",
      text: "Sed ut perspiciatis",
    },
  ],
  uploads: [
    {
      url: "#",
      text: "xyz.pdf",
    },
    {
      url: "#",
      text: "img1.png",
    },
  ],
};

export default function Application() {
  return (
    <Layout title={data.name}>
      <Breadcrumbs pageName={data.name} />
      <h1 className="text-3xl font-bold leading-7 text-gray-900 sm:text-5xl sm:truncate sm:leading-normal mb-8">
        {data.name}
      </h1>
      <div className="flex flex-row space-x-8 mb-12">
        <div className="basis-1/3">img</div>
        <div className="basis-2/3">
          <dl>
            <dt className="font-semibold">{titles.submittedBy}</dt>
            <dd className="mb-5">{data.submittedBy}</dd>
            <dt className="font-semibold">{titles.name}</dt>
            <dd className="mb-5">
              {data.name} ({data.shortName})
            </dd>
            <dt className="font-semibold">{titles.shortDesc}</dt>
            <dd className="mb-5">{data.shortDesc}</dd>
          </dl>
        </div>
      </div>
      <dl>
        <dt className="font-semibold">{titles.fullDesc}</dt>
        <dd className="mb-5">{data.fullDesc}</dd>
        <dt className="font-semibold">{titles.background}</dt>
        <dd className="mb-5">{data.background}</dd>
        <dt className="font-semibold">{titles.evidence}</dt>
        <dd className="mb-5">{data.evidence}</dd>
        <dt className="font-semibold">{titles.misc}</dt>
        <dd className="mb-5">{data.misc}</dd>
        <dt className="font-semibold">{titles.links}</dt>
        <dd className="mb-5">
          <ul className="link-list list-disc pl-5">
            {data.links.map((link, i) => (
              <li key={`link-${i}`}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </dd>
        <dt className="font-semibold">{titles.uploads}</dt>
        <dd className="mb-5">
          <ul className="link-list list-disc pl-5">
            {data.uploads.map((upload, i) => (
              <li key={`upload-${i}`}>
                <a href={upload.url} target="_blank" rel="noreferrer">
                  {upload.text}
                </a>
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </Layout>
  );
}
