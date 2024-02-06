/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getUserSocialAccounts, getUsersTopReposBySize } from "../services/userService";
import SocialMediaIcons from "./SocialMediaIcons";

const Card = ({ userData }) => {
    const { avatar_url, name, bio, languages, public_repos, login, blog, email } = userData;
    const [socialAccounts, setSocialAccounts] = useState([])
    const [repos, setRepos] = useState([]);
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
    }, [login])

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const reposData = await getUsersTopReposBySize(login);                
                setRepos(reposData.slice(0, 10));
            } catch (error) {
                console.error("Error fetching repos:", error.message);
            }
        };
        fetchRepos();
    },[login]);

    return (
        <div className="flex justify-center mt-10 ">
            <div className="border border-gray-300 p-4 w-[300px] md:w-1/3 rounded-lg shadow-md flex flex-col justify-center items-center px-[40px]">
                
                <div className="flex flex-col md:flex-row w-full justify-between items-center rounded-lg dark:text-white">
                    <div className="order-2 md:order-1">
                        {login && (<div className="flex gap-3 flex-col md:flex-row justify-start items-center my-1 w-full">
                            <span className="mr-2 font-bold">Username</span>
                            <h2 className="text-2xl">{login}</h2>
                        </div>
                        )}

                        {name && (
                            <div className="flex flex-col md:flex-row  items-center my-2 w-full justify-start ">
                                <span className="mr-2 font-bold">Name</span>
                                <p className="text-2xl">{name}</p>
                            </div>
                        )}

                        {email ? (
                            <div className="flex items-center my-2 flex-col md:flex-row w-full justify-start">
                                <span className="mr-2 font-bold">Email</span>
                                <a href={`mailto:${email}`} className="text-blue-500 dark:text-blue-300">{email}</a>
                            </div>
                        ):(
                            <div className="flex items-center my-2 flex-col md:flex-row w-full justify-start">
                                <span className="mr-2 font-bold">Email</span>
                                <p className="text-gray-600 dark:text-white">No provided email</p>
                            </div>                        
                        )}

                        {blog ? (
                            <div className="flex items-center my-2 flex-col md:flex-row w-full justify-start">
                                <span className="mr-2 font-bold">Blog</span>
                                <a href={blog} rel="noreferrer" target="_blank" className="text-blue-500 dark:text-blue-300">{blog}</a>
                            </div>
                        ):(
                            <div className="flex items-center my-2 flex-col md:flex-row w-full justify-start">
                                <span className="mr-2 font-bold">Blog</span>
                                <p className="text-gray-600 dark:text-white">No provided blog</p>
                            </div>                        
                        
                        )}
                        {public_repos && (
                            <div className="flex items-center my-2 flex-col md:flex-row w-full justify-start">
                                <span className="mr-2 font-bold">Number of Public Repos</span>
                                <p className="text-2xl">{public_repos}</p>
                            </div>
                        )}
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src={avatar_url}
                            alt={`${name}'s Avatar`}
                            className="w-30 h-30 object-cover mb-4 rounded-lg"
                        />
                    </div>
                </div>


                {languages && (
                    <div className="flex flex-col md:flex-row items-center my-1 w-full justify-start dark:text-white">
                        <span className="mr-2 font-bold">Languages</span>
                        <ul className="flex space-x-2 flex-col md:flex-row">
                            {languages.map((language, index) => (
                                <li key={index} className="text-blue-500 dark:text-blue-300">
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                {socialAccounts?.length > 0 && (
                    <div className="mt-2 w-full justify-start flex flex-col flex-wrap lg:flex-nowrap lg:flex-row space-x-4 dark:text-white">
                        <span className="font-bold">Socials</span>
                        {socialAccounts.map((account, index) => (
                            
                            <div key={index} className="text-blue-500 dark:text-blue-300">                                
                                <SocialMediaIcons account={account} />
                            </div>
                        ))}
                    </div>
                )}
                {bio ? (
                    <div className="my-3 dark:text-white">
                        <span className="font-bold">Bio</span>
                        <p className=" p-2 rounded-lg w-full justify-center flex my-1 items-center"> {bio}</p>
                    </div>
                ) : (
                    <div className="p-2 rounded-lg w-full justify-center flex my-3">
                        <p className="text-gray-600 dark:text-gray-200">No provided bio</p>
                    </div>
                )}
                <div className="border-t border-gray-500 dark:border-gray-200  w-full"></div>
                <span className="font-bold my-3 dark:text-white">Repositories</span>
                {repos && repos.length > 0 ? (
                    <div className="mt-2  mx-auto w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {repos.map((repo, index) => (
                            <a key={index} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="border p-4 rounded-lg shadow-sm text-blue-500 dark:text-blue-300 hover:bg-gray-100 transition duration-300 grid place-items-center">                                
                                <p className="font-bold text-center">{repo.name}</p>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="p-2 rounded-lg w-full justify-center flex my-3">
                        <p className="text-gray-600 ">No repositories found</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card