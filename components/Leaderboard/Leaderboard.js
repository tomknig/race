import Link from "next/link";
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
      <p className="pb-4">@{data.submittedBy}</p>
      <label className="font-bold">
        <b>Project name</b>
      </label>{" "}
      <a className="float-right" href="#">
        Discord.com/server
      </a>
      <p className="pb-4">
        @{data.projectName} {data.sname}
      </p>
    </div>

    <label className="font-bold">Pitch us your project in a tweet</label>
    <p>
      {data.description}
    </p>
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
    name: "Short name",
    selector: (row) => row.sname,
  },
  {
    name: "Name",
    selector: (row) => row.projectName,
  },
  {
    name: "Submitted by",
    selector: (row) => row.submittedBy,
  },
  {
    name: "Date submitted",
    selector: (row) => row.dateSubmitted,
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

const Leaderboard = ({data}) => {
  return (
    <div className="main">
      <Breadcrumbs list={breadcrumbs} />
      <div className="leaderboard-list">
        <div className="flex flex-row">
          <div className="basis-3/4">
            <h2 className=" text-3xl font-extrabold text-gray-900">Trending DAOs</h2>
          </div>
          <div className="basis-1/4 flex  tab-filter">
            <div className=" font-bold active pr-2">Most voted</div>
            <div className="pl-2">Most recent</div>
          </div>
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
