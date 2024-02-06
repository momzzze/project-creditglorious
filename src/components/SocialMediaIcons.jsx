/* eslint-disable react/prop-types */
// since we do not use typescript, we can ignore the prop-types rule
import { FaTwitter, FaLinkedin, FaYoutube, FaShare } from 'react-icons/fa';

const SocialMediaIcons = ({ account }) => {
    const { provider, url } = account;

    const handleClick = () => {
        window.open(url, '_blank');
    };
    return (
        <div className={`flex flex-row  space-x-3 justify-center items-center border ${provider === 'youtube' ? "border-red-700 dark:border-red-400" : "text-blue-700 dark:text-blue-300"} px-3`}>
            {provider === 'twitter' && <FaTwitter className='text-blue-500 dark:text-blue-300 mr-2 md:flex' />}
            {provider === 'youtube' && <FaYoutube className='text-red-500 dark:text-red-400 mr-2' />}
            {provider === 'linkedin' && <FaLinkedin className='text-blue-500 dark:text-blue-300' />}
            {provider !== 'twitter' && provider !== 'youtube' && provider !== 'linkedin' && <FaShare className='text-blue-500' />}
            <button className={`${provider === 'youtube' ? "text-red-700 dark:text-red-400" : "text-blue-700 dark:text-blue-300"}`} onClick={handleClick}>{provider === 'generic' ? 'Other' : provider}</button>
        </div>
    )
}

export default SocialMediaIcons