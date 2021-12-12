import dbConnect from "../../utils/dbConnect";
import { Types } from "mongoose";

// this function upsert a list of records, used for syncing data
export async function upsertApplications(records) {
  await dbConnect();
  const Application = require("../../models/Application");
  const results = [];
  for (const record of records) {
    const { projectName } = record;
    const data = await Application.findOneAndUpdate({ projectName }, record, {
      upsert: true,
    });
    results.push(data);
  }
  return results;
}

// query all applications
export async function getApplications() {
  await dbConnect();
  const Application = require("../../models/Application");
  const data = await Application.find({});
  return data;
}

// query selected applications
export async function getSelectedApplications(applicationId) {
  await dbConnect();
  const Application = require("../../models/Application");
  const data = await Application.find({ _id: Types.ObjectId(applicationId) });
  return data;
}

export async function addVote(applicationId, voterEmail) {
  await dbConnect();
  const Application = require("../../models/Application");
  return Application.findOneAndUpdate(
    { _id: applicationId }, 
    { $addToSet: { votes: voterEmail } }
  );
}