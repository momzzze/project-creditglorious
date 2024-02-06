import axios from "axios";


const getUserBySearchingQuote = async (searchingQuote) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${searchingQuote}`);
        if (response.status === 404) {
            throw new Error("User not found");
        } else if (response.status === 200) {
            return response.data;
        } else if (response.status === 403) {
            throw new Error("API rate limit exceeded");
        } else {
            throw new Error("Something went wrong");
        }
    } catch (error) {
        console.log(error);
    }
}

const getUserSocialAccounts = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/social_accounts`);
        if (response.status === 404) {
            throw new Error("User not found");
        } else if (response.status === 200) {
            return response.data;
        } else if (response.status === 403) {
            throw new Error("API rate limit exceeded");
        } else {
            throw new Error("Something went wrong");
        }
    } catch (error) {
        console.log(error.message);
    }
}

const getUsersTopReposBySize = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=size&direction=desc`);
        if (response.status === 404) {
            throw new Error("User not found");
        } else if (response.status === 200) {
            return response.json();
        } else if (response.status === 403) {
            throw new Error("API rate limit exceeded");
        } else {
            throw new Error("Something went wrong");
        }
    } catch (error) {
        console.log(error);
    }
}

export { getUserBySearchingQuote, getUserSocialAccounts, getUsersTopReposBySize }