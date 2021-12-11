import { Fragment } from "react";

export default function Breadcrumbs({ list }) {
  console.log(list);
  return (
    <div className="w-full py-6">
      <ol className="list-reset flex text-grey-dark">
        {list.map((item, i) => (
          <Fragment key={i}>
            <li>
              <a href="#">{item}</a>
            </li>
            {i < list.length - 1 && (
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
            )}
          </Fragment>
        ))}
      </ol>
    </div>
  );
}
