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

        // Indicate if user has alredy voted based on email
        hasUserUpvoted: email ? { $in: [email, "$votes"] } : false,
      },
    },

    // Don't make emails of voters public
    { $unset: "votes" },
  ];

  if (query) {
    pipeline.unshift({ $match: query });
  }

  const aggregate = await Application.aggregate(pipeline);
  const sortedAggregate = aggregate.sort((a, b) => b.voteCount - a.voteCount);
  const sortedAggregateWithRank = sortedAggregate.map((application) => ({
    ...application,
    rank: sortedAggregate.filter((app) => application.voteCount > app.voteCount).length,
  }));
  return sortedAggregateWithRank;
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
