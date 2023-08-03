export default function SearchBox({ className = '', ...props }) {
    return (
        <div className={className}>
            <input
                {...props}
                type="text"
                name="search-box"
                className={
                    'w-80 rounded border-gray-300 text-black-600 shadow-sm focus:ring-indigo-500 mr-1'
                }
            />
            <button
                type="submit"
                className={
                    "bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                }
            >
                Search
            </button>
        </div>
    );
}