import { getApplications } from "../../../actions/applications";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).send(await getApplications());
  } else {
    res.status(405);
  }
}
