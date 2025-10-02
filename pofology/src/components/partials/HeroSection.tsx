import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiLinkedin, FiFacebook, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/abdelrahmantechcs.jpeg" width={180} height={180} alt="avatar" />
          <Image src="/images/logo.svg" alt="logo" style={{ visibility: "hidden" }} />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">AbdelrahmanTechCS</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a{' '}
          <Typed strings={['Domain Investor', 'Bug Bounty Hunter', 'CS Graduate']} typeSpeed={60} backSpeed={30} loop />
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://www.instagram.com/abdelrahmantech/">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500" target="_blank" rel="noopener noreferrer">
              <FiInstagram size={25} />
            </a>
          </Link>
          <Link href="https://x.com/AbdoDomain">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500" target="_blank" rel="noopener noreferrer">
              <FiTwitter size={25} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/boda.mohama">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500" target="_blank" rel="noopener noreferrer">
              <FiFacebook size={25} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/abd-el-rahaman-mohamed-935444280/">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={25} />
            </a>
          </Link>
          <Link href="https://github.com/Abd-El-Rahman-Mohamed">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500" target="_blank" rel="noopener noreferrer">
              <FiGithub size={25} />
            </a>
          </Link>
        </div>
        <Button className="mt-5 px-8"><a href="mailto:abdo@abdelrahmantechcs.com">Contact Me</a></Button>
      </div>

    </div>
  );
};

export default HeroSection;
