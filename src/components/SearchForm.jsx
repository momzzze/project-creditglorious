import { useState } from "react";
import { getUserBySearchingQuote } from "../services/userService"
const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState("");


    const handleSearch = async (e) => {
        e.preventDefault();
        const userData = await getUserBySearchingQuote(query);
        onSearch(userData);
    }
    return (
        <form className="flex items-center justify-center mt-8" onSubmit={handleSearch}>

            <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 p-2 rounded-l w-64"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                type="submit"
                className="border border-gray-300 p-2 rounded-l w-64 hover:bg-gray-100"
            >
                Search
            </button>

        </form>
    )
}

export default SearchForm