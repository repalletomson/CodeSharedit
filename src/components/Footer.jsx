import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-4 ">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    <div className="flex flex-col mb-6 md:mb-0 pr-10">
                        <h3 className="font-bold text-lg mb-2">CodePen</h3>
                        <ul>
                            <li><a href="none" className="hover:underline">About</a></li>
                            <li><a href="none" className="hover:underline">Blog</a></li>
                            <li><a href="none" className="hover:underline">Podcast</a></li>
                            <li><a href="none" className="hover:underline">Documentation</a></li>
                            <li><a href="none" className="hover:underline">Support</a></li>
                            <li><a href="none" className="hover:underline">Advertise</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col mb-6 md:mb-0">
                        <h3 className="font-bold text-lg mb-2">For</h3>
                        <ul>
                            <li><a href="none" className="hover:underline">Teams</a></li>
                            <li><a href="none" className="hover:underline">Education</a></li>
                            <li><a href="none" className="hover:underline">Privacy</a></li>
                            <li><a href="none" className="hover:underline">Embeds</a></li>
                            <li><a href="none" className="hover:underline">Asset Hosting</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col mb-6 md:mb-0  px-9">
                        <h3 className="font-bold text-lg mb-2">Social</h3>
                        <ul>
                            <li><a href="none" className="hover:underline">YouTube</a></li>
                            <li><a href="none" className="hover:underline">𝕏</a></li>
                            <li><a href="none" className="hover:underline">Instagram</a></li>
                            <li><a href="none" className="hover:underline">Mastodon</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col mb-6 md:mb-0">
                        <h3 className="font-bold text-lg mb-2">Community</h3>
                        <ul>
                            <li><a href="none" className="hover:underline">Spark</a></li>
                            <li><a href="none" className="hover:underline">Challenges</a></li>
                            <li><a href="none" className="hover:underline">Topics</a></li>
                            <li><a href="none" className="hover:underline">Code of Conduct</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-b  pt-4">
                  <h1 className='font-bold text-3xl pl-6 '>CodeSharedit</h1>
                    <div className="flex flex-col  md:flex-row justify-between items-center p-6">
                        <div>
                            <p>&copy; 2024 CodePen</p>
                        </div>
                        <div>
                            <a href="none" className="hover:underline">Terms of Service</a> &middot;
                            <a href="none" className="hover:underline">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
