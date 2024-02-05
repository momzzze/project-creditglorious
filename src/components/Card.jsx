import { useEffect, useState } from "react";
import { getUserSocialAccounts } from "../services/userService";
import SocialMediaIcons from "./SocialMediaIcons";


const Card = ({ userData }) => {
    const { avatar_url, name, bio, languages, public_repos, login, blog, email } = userData;
    const [socialAccounts, setSocialAccounts] = useState([])

    useEffect(() => {
        const fetchSocialAccounts = async () => {
            try {
                const accounts = await getUserSocialAccounts(login);
                setSocialAccounts(accounts);
            } catch (error) {
                console.error("Error fetching social accounts:", error.message);
            }
        };
        fetchSocialAccounts();
    }, [])

    return (
        <div className="flex justify-center mt-10">
            <div className="border border-gray-300 p-4 w-[300px] md:w-1/3 rounded-lg shadow-md flex flex-col justify-center items-center">
                <img
                    src={avatar_url}
                    alt={`${name}'s Avatar`}
                    className="rounded-full w-30 h-30 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Username: {login}</h2>
                <h2 className="text-xl font-bold mb-2">Name: {name}</h2>

                {languages && (
                    <div className="flex items-center">
                        <span className="mr-2">Languages:</span>
                        <ul className="flex space-x-2">
                            {languages.map((language, index) => (
                                <li key={index} className="text-blue-500">
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {socialAccounts.length > 0 && (
                    <div className="mt-2 flex flex-col flex-wrap lg:flex-nowrap lg:flex-row space-x-4">
                        {socialAccounts.map((account, index) => (
                            <div key={index} className="text-blue-500">
                                <SocialMediaIcons account={account} />
                            </div>
                        ))}
                    </div>
                )}
                {bio ? (
                    <div>
                        <span>Bio:</span>
                        <p className="border border-gray-300 p-2 rounded-lg w-full justify-center flex my-3"> {bio}</p>
                    </div>
                ) : (
                    <div className="border border-gray-300 p-2 rounded-lg w-full justify-center flex my-3">
                        <p className="text-gray-600 ">No provided bio</p>
                    </div>
                )}
                <p className="mt-2">Number of Repos: {public_repos}</p>
                <h1>CARD</h1>
            </div>
        </div>
    )
}

export default Card