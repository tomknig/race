export default function Breadcrumbs({ pageName }) {
  return (
    <div className="w-full  py-6">
      <ol className="list-reset flex text-grey-dark">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <span className="font-bold text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </li>
        <li>
          <a href="#">DAO Race</a>
        </li>
        <li>
          <span className="font-bold text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </li>
        <li className="font-semibold">{pageName}</li>
      </ol>
    </div>
  );
}
