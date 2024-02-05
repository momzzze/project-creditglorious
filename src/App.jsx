
import toast, { Toaster } from "react-hot-toast";
import SearchForm from "./components/SearchForm"
import { useState } from "react";
function App() {
  const [userData, setUserData] = useState(null);

  const handleSearch = (data) => {
    try {
      if (data) {
        setUserData(data);
        // Display a success toast
        toast.success("User found");
      } else {
        // Display an error toast
        toast.error("User not found");
      }
    } catch (error) {
      console.error("Error handling search:", error.message);
    }
  };
  return (
    <>
      {console.log(userData)}
      <h1 className="sm:text-3xl md:text-5xl bg-purple-500 text-white font-bold text-center p-2 ">Front page</h1>
      <SearchForm onSearch={handleSearch} />

      <div>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      </div>
    </>
  )
}

export default App
