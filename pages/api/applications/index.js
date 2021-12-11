import Application from "../../../models/Application";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const applications = await Application.find().exec();
    return res.status(200).send(applications);
  } else {
    res.status(405);
  }
}
