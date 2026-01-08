export function NoDataFound({
  title = "No results found",
  description = "We couldn’t find any items matching your selection.",
  actionText = "Reset filters",
  onAction,
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white py-16 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-5.2-5.2M10.8 18a7.2 7.2 0 100-14.4 7.2 7.2 0 000 14.4z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <p className="mt-1 max-w-sm text-sm text-gray-500">{description}</p>

      {onAction && (
        <button
          onClick={onAction}
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
