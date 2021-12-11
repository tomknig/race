export default function Breadcrumbs({ pageName }) {
  return (
    <div className="w-full  py-6">
      <ol className="list-reset flex text-grey-dark">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <span className="mx-2">&gt;</span>
        </li>
        <li>
          <a href="#">DAO Race</a>
        </li>
        <li>
          <span className="mx-2">&gt;</span>
        </li>
        <li className="font-semibold">{pageName}</li>
      </ol>
    </div>
  );
}
