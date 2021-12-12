import Application from "../../../models/Application";
import dbConnect from "../../../utils/dbConnect";
import { Types } from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const application = await Application.find({ _id: Types.ObjectId(req.param.applicationId) }).exec();
    return res.status(200).send(application);
  } else {
    res.status(405);
  }
}
