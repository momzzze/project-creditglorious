
import toast, { Toaster } from "react-hot-toast";
import { FaMoon, FaSun } from "react-icons/fa";
import SearchForm from "./components/SearchForm"
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { getRandomQuote } from "./services/quoteService";
function App() {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const [quoteData, setQuoteData] = useState({ text: "", author: "" });

  const handleSearch = (data) => {
    try {
      if (data) {
        setUserData(data);
        toast.success("User found");
      } else {
        toast.error("User not found");
      }
    } catch (error) {
      console.error("Error handling search:", error.message);
    }
  };
  function themeSwitch() {
    const newTheme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.theme = newTheme;
    setTheme(newTheme);
  }
  async function getQuote() {
    try {
      const quote = await getRandomQuote();
      setQuoteData(quote);
    } catch (error) {
      console.error("Error fetching quote:", error.message);
    }
  }
  useEffect(() => {
    themeSwitch();
  }, []);

  useEffect(() => {
    getQuote();
  }, [userData]);

  return (
    <div className="dark:bg-slate-700 bg-white min-h-screen">
      <div className="flex flex-row w-full justify-center items-center gap-20">
        <h1 className="sm:text-3xl md:text-5xl  font-bold text-center p-2 dark:text-white">Project GitHub Card</h1>
        <div className="flex" onClick={themeSwitch}>
          <div className="">
            {theme === "dark" ? (
              <FaSun className="text-white w-6 h-6" />
            ) : (
              <FaMoon className="text-gray-500 w-6 h-6" />
            )}
          </div>
        </div>
      </div>
      <SearchForm onSearch={handleSearch} />
      <div className="flex justify-center">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md w-1/3 my-5">
          <p className="dark:text-white text-lg text-center">{quoteData.text}</p>
          <p className="dark:text-white mt-4 text-center">by {quoteData.author}</p>
        </div>
      </div>
      {userData && <Card userData={userData} />}
      <div>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      </div>
    </div>
  )
}

export default App
