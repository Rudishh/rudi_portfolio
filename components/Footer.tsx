import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Contact me
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me for professional and project inquiries, commission and collaboration opportunities, please feel free to reach out to me via email or on Discord at @rudish
        </p>

        <a href="mailto:contact@rudish.dev">
          <MagicButton title="Lets get in touch" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>

      <div className="flex flex-col items-center">
        {/* Status element with logo and text, now above social icons */}
        <div className="flex items-center justify-center mt-8 bg-black-200 text-white px-4 py-2 rounded-lg">
          <img 
            src="https://pebblehost.com/src/img/logos/p.png" 
            alt="PebbleHost Logo" 
            className="w-6 h-6 mr-2" 
          />
          <span className="text-sm ml-2 text-gray-400">Hosted by Pebblehost</span>
        </div>

        {/* Social media icons */}
        <div className="flex items-center justify-center md:gap-3 gap-6 pt-6">
          {socialMedia.map((profile) => (
            <a key={profile.id} href={profile.link} target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={profile.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;