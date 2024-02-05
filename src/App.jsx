
import toast, { Toaster } from "react-hot-toast";
import SearchForm from "./components/SearchForm"
import { useState } from "react";
import Card from "./components/Card";
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
    <div className="">
      <h1 className="sm:text-3xl md:text-5xl  font-bold text-center p-2 ">Project GitHub Card</h1>
      <SearchForm onSearch={handleSearch} />
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
