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
export async function getApplications(query, email) {
  await dbConnect();
  const Application = require("../../models/Application");
  const pipeline = [
    {
      $addFields: {
        // Add the vote count to the application
        voteCount: { $size: "$votes" },
        
        // TODO: that should be in DB
        submittedDate: new Date().toISOString(),

        // Indicate if user has alredy voted based on email
        hasUserUpvoted: email ? { $in: [email, "$votes"] } : false
      }
    },

    // Don't make emails of voters public
    { $unset: "votes" },

    {
      $setWindowFields: {
        // Sort by most votes first
         sortBy: { voteCount: -1 },

        // Add rank based off of vote count
         output: {
            rank: {
               $rank: {}
            }
         }
      }
   }
  ];

  if(query) {
    pipeline.unshift({ $match: query })
  }

  return Application.aggregate(pipeline);
}

// query selected applications
export async function getSelectedApplications(applicationId, email) {
  return getApplications({ _id: Types.ObjectId(applicationId) }, email);
}

export async function addVote(applicationId, voterEmail) {
  await dbConnect();
  const Application = require("../../models/Application");
  return Application.findOneAndUpdate(
    // Find application by Id
    { _id: applicationId }, 

    // Add to set so the same email will not be added twice
    { $addToSet: { votes: voterEmail } }
  );
}
