import axios from "axios";


const getUserBySearchingQuote = async (searchingQuote) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${searchingQuote}`);
        if (response.status === 404) {
            throw new Error("User not found");
        }else if(response.status === 200){
            return response.data;
        }else{
            throw new Error("Something went wrong");
        }
    } catch (error) {
        console.log(error.message);
    }
}


export { getUserBySearchingQuote }