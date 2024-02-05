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
                placeholder="Search a GitHub User"
                className="border w-1/3 border-gray-300 p-2 rounded-l-lg"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                type="submit"
                className="border-t border-r border-b w-20 border-gray-300 p-2 rounded-r-lg hover:bg-gray-100 "
            >
                Search
            </button>

        </form>
    )
}

export default SearchForm