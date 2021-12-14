import React from "react";
import DataTable from "react-data-table-component";
import Button from "../atoms/Button";
import { useRouter } from "next/router";

// A super simple expandable component.{JSON.stringify(data, null, 2)}
const ExpandedComponent = ({ data }) => {
  const router = useRouter();
  return (
    <div className="p-6 top-border row-child">
      <div className="flex gap-x-12 mb-2">
        <div className="basis-1/3">
          <dl>
            <dt className="font-semibold">Pitch us your project in a tweet</dt>
            <dd className="mb-5">{data.productPitch || "N.A."}</dd>
          </dl>
        </div>
        <div className="basis-2/3">
          <dl>
            <dt className="font-semibold">Background of each founder</dt>
            <dd className="mb-5">{data.evidenceOfExceptionalAbility || "N.A"}</dd>
          </dl>
        </div>
      </div>
      <div className="flex gap-x-12 mb-2">
        <div className="basis-1/3">{/* TODO: links go here */}</div>
        <div className="basis-2/3">
          <Button
            color="primary-outline"
            onClick={() => router.push({ pathname: "/dao-race/[id]", query: { id: data._id } })}
          >
            View Full Application
          </Button>
        </div>
      </div>
    </div>
  );
};

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

const Leaderboard = ({ data, numRows, showPagination }) => {
  let rows = JSON.parse(JSON.stringify(data));
  if (numRows) {
    rows = rows.slice(0, numRows);
  }
  console.log(rows);
  return (
    <div className="leaderboard-list">
      <div className="dtable">
        <DataTable
          customStyles={customStyles}
          columns={columns}
          data={rows}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      </div>
    </div>
  );
};

export default Leaderboard;
