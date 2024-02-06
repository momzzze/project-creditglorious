import axios from "axios";


const getRandomQuote = async () => {
    
    try {
        const response = await axios.get("https://api.quotable.io/random");
        if (response.status === 200 && response.data.length > 0) {
          const { content, author } = response.data;
          return { text: content, author };
        } else {
          throw new Error("No quotes found");
        }
      } catch (error) {
        console.error("Error fetching quote:", error.message);
        throw error;
      }
}

export { getRandomQuote }