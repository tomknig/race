import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import Breadcrumbs from "../Breadcrumbs";
// A super simple expandable component.{JSON.stringify(data, null, 2)}
const ExpandedComponent = ({ data }) => (
  <div className="p-6 top-border row-child">
    <div>
      <label className="font-bold">
        <b>Submitted by</b>
      </label>{" "}
      <a className="float-right" href="#">
        Website.com
      </a>
      <p className="pb-4">@{data.discordId}</p>
      <label className="font-bold">
        <b>Project name</b>
      </label>{" "}
      <a className="float-right" href="#">
        Discord.com/server
      </a>
      <p className="pb-4">@{data.projectName}</p>
    </div>

    <label className="font-bold">Pitch us your project in a tweet</label>
    <p>{data.projectTweet}</p>
    <br />
    <Link href={{ pathname: "/dao-race/[id]", query: { id: data._id } }}>View full application</Link>
  </div>
);

//  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
  table: {
    style: {
      color: "white",
      marginTop: "3.5rem",
      marginBottom: "0.95rem",
    },
  },

  rows: {
    style: {
      minHeight: "72px",
      background: "#FFFFFF",
      border: "0 !important",
      boxShadow: "rgb(149 157 165 / 20%) 0px 8px 24px",
      position: "relative",
      width: "calc(100% - 25px)",
      margin: "0.45rem 0.75rem",
      borderRadius: "0.5rem",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontSize: "0.8rem",
      color: "#000000",
      marginBottom: "0.5rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      color: "#000000",
      fontSize: "1rem",
    },
  },
};

const columns = [
  {
    name: "Rank",
    selector: (row) => row.rank,
  },
  {
    name: "Name",
    selector: (row) => row.projectName,
  },
  {
    name: "Submitted by",
    selector: (row) => row.discordId,
  },
  {
    name: "Date submitted",
    selector: (row) => row.submittedAt,
  },
  {
    name: "Votes",
    selector: (row) => <label className="vote-badge">{row.voteCount}</label>,
  },
];

const breadcrumbs = [
  { url: "/", text: "Home" },
  { url: "", text: "DAO Race" },
];


function CountdownElem({ value, label }) {
  return (
    <div className="flex-1 p-2 flex flex-col items-center shadow-md rounded-md">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
}

function Countdown({ until }) {
  // Update the countdown every 1 second
  const [timeLeft, setTimeLeft] = useState(until - new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(until - new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [until]);

  // Get component parts
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex-1 flex flex-row">
      <CountdownElem value={days} label={days === 1 ? "Day" : "Days"} />
      <CountdownElem value={hours} label={hours === 1 ? "Hour" : "Hours"} />
      <CountdownElem value={minutes} label={minutes === 1 ? "Minute" : "Minutes"} />
      <CountdownElem value={seconds} label={seconds === 1 ? "Second" : "Seconds"} />
    </div>
  )
}

function getNextDate(epoch, intervalDays, currentDate) {
  // XXX: This loop is silly - should be refactored to use some kind of modulus of the epoch
  const nextRace = new Date(epoch);
  nextRace.setDate(nextRace.getDate() + intervalDays);
  while (nextRace < currentDate) {
    nextRace.setDate(nextRace.getDate() + intervalDays);
  }
  return nextRace;
}

function DaoRaceCountdown() {
  const epoch = useMemo(() => new Date(process.env.NEXT_PUBLIC_DAO_RACE_EPOCH), []);
  const intervalDays = useMemo(() => parseInt(process.env.NEXT_PUBLIC_DAO_RACE_INTERVAL_DAYS, 10), []);

  // Make sure rollovers work
  const [nextRaceAt, setNextRaceAt] = useState(getNextDate(epoch, intervalDays, new Date()));
  useEffect(() => {
    // XXX: This is firing way more often than we need it to be - should just be on date rollovers
    const interval = setInterval(() => {
      // Don't unnecessarily update
      const candidate = getNextDate(epoch, intervalDays, new Date());
      if (+candidate !== +nextRaceAt) {
        setNextRaceAt(candidate);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [epoch, intervalDays, nextRaceAt]);


  return <Countdown until={nextRaceAt} />;
}

const Leaderboard = ({ data }) => {
  return (
    <div className="main">
      <Breadcrumbs list={breadcrumbs} />
      <div className="leaderboard-list">
        <div className="flex flex-row">
          <div className="flex basis-1/2 flex-col space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900">Trending DAOs</h2>
            <p className="text-gray-500 text-sm">The top DAO applications, ranked by votes</p>
          </div>
          <div className="basis-1/2 flex flex-col items-stretch space-y-2">
            <DaoRaceCountdown />
            <span className="text-right text-gray-500 text-sm">Until next funding round</span>
          </div>
        </div>
        <div className="basis-1/4 flex  tab-filter">
          <div className="font-bold active pr-2">Most voted</div>
          <div className="pl-2">Most recent</div>
        </div>
        <div className="dtable">
          <DataTable
            customStyles={customStyles}
            columns={columns}
            data={data}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            pagination
          />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
