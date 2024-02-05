import { useEffect, useState } from 'react';
import { FaTwitter, FaLinkedin, FaYoutube, FaShare } from 'react-icons/fa';
import { getUserSocialAccounts } from '../services/userService';

const SocialMediaIcons = ({ account }) => {
    const { provider, url } = account;

    const handleClick = () => {
        window.open(url, '_blank');
    };
    return (
        <div className={`flex flex-row  space-x-3 justify-center items-center border ${provider === 'youtube' ? "border-red-700" : "border-blue-700"} px-3`}>
            {provider === 'twitter' && <FaTwitter className='text-blue-500 mr-2 md:flex'/>}
            {provider === 'youtube' && <FaYoutube className='text-red-500 mr-2' />}
            {provider === 'linkedin' && <FaLinkedin className='text-blue-500' />}
            {provider !== 'twitter' && provider !== 'youtube' && provider !== 'linkedin' && <FaShare className='text-blue-500' />}
            <button className={`${provider === 'youtube' ? "text-red-700" : "text-blue-700"}`} onClick={handleClick}>{provider === 'generic' ? 'Other' : provider}</button>
        </div>
    )
}

export default SocialMediaIcons