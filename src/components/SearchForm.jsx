/* eslint-disable react/prop-types */
import { useState } from "react";
import { getUserBySearchingQuote } from "../services/userService"
import toast from "react-hot-toast";
const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState("");


    const handleSearch = async (e) => {
        e.preventDefault();

        if(query.trim() === ""){
            toast.error("Please enter a username");
            return;
        }
        const userData = await getUserBySearchingQuote(query.trim());
        onSearch(userData);
    }
    return (
        <form className="flex items-center justify-center mt-8" onSubmit={handleSearch}>

            <input
                type="text"
                placeholder="Search a GitHub User"
                className="border w-1/3 border-slate-300 p-2 rounded-l-lg dark:bg-slate-500 dark:border-white dark:text-white hover:bg-gray-100  dark:placeholder:text-white focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                type="submit"
                className="border-t border-r border-b w-20 border-gray-300 p-2 rounded-r-lg hover:bg-gray-100 dark:bg-slate-700 dark:text-white"
            >
                Search
            </button>

        </form>
    )
}

export default SearchForm