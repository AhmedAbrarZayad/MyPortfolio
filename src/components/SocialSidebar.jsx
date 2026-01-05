import React from 'react';

const SocialSidebar = () => {
    return (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 pr-6">
            <div className="glass-panel rounded-full p-2 flex flex-col gap-4 items-center border-r-0 rounded-r-none pr-3">
                <a 
                    aria-label="Instagram" 
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300" 
                    href="https://www.instagram.com/ahmedabrarzayad/"
                >
                    <i className="ph ph-instagram-logo text-xl"></i>
                </a>
                <a 
                    aria-label="GitHub" 
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300" 
                    href="https://github.com/AhmedAbrarZayad"
                >
                    <i className="ph ph-github-logo text-xl"></i>
                </a>
                <a
                    aria-label="LinkedIn" 
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300" 
                    href="https://www.linkedin.com/in/ahmedabrarzayad/"
                >
                    <i className="ph ph-linkedin-logo text-xl"></i>
                </a>
            </div>
        </div>
    );
};

export default SocialSidebar;
