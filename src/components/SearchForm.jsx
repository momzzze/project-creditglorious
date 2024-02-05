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
        <form className="my-4" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search..."
                className="border p-2 mr-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
            >
                Search
            </button>
        </form>
    )
}

export default SearchForm