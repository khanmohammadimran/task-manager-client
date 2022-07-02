import React from 'react';
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-5 bg-cyan-900 text-white">
                <div>

                    <p className="font-bold font-rancho text-2xl">
                        Task Manager <br />
                    </p>
                    <p className='font-nunito'>Copyright © 2022 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://github.com/khanmohammadimran'><img className='w-6' src={github} alt="" /></a>
                        <a href='https://github.com/khanmohammadimran'><img className='w-6' src={linkedin} alt="" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;