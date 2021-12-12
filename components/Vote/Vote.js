export default function Vote({ voteCount, onVote }) {
  return (
    <div className="flex flex-row cursor-pointer w-[fit-content]">
      <div className="flex-1 py-2 px-4 border border-indigo-500 rounded-l-lg font-medium text-indigo-500">
        {voteCount}
      </div>
      <div className="bg-indigo-500 rounded-r-lg flex content-center p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
    </div>
  );
}
